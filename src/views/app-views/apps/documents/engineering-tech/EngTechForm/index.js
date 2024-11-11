import React, { useState, useEffect } from 'react'
import PageHeaderAlt from 'components/layout-components/PageHeaderAlt'
import { Tabs, Form, Button, message } from 'antd';
import Flex from 'components/shared-components/Flex';
import GeneralField from './GeneralField';
import { db } from 'configs/FirebaseConfig'; // Adjust this path
import { collection, addDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const EngTechForm = ({ mode = 'ADD', param }) => {

	const [form] = Form.useForm();
	const [submitLoading, setSubmitLoading] = useState(false);
	const [uploadedFileURL, setUploadedFileURL] = useState(null);
	const [uploadLoading, setUploadLoading] = useState(false);
	const navigate = useNavigate();

	const handleFileUpload = (url) => {
		setUploadedFileURL(url);
		setUploadLoading(false);
	  };

	  useEffect(() => {
		if (mode === 'EDIT' && param?.id) {
		  const fetchDocument = async () => {
			const docRef = doc(db, 'engineeringTech', param.id);
			const docSnap = await getDoc(docRef);
			if (docSnap.exists()) {
			  const docData = docSnap.data();
			  form.setFieldsValue(docData);
			  setUploadedFileURL(docData.documentURL);
			} else {
			  message.error('Document not found!');
			  navigate('/app/apps/documents/engineering-tech/eng-tech-list');
			}
		  };
		  fetchDocument();
		}
	  }, [mode, param, form, navigate]);

	  const onFinish = async (values) => {
		setSubmitLoading(true);
		try {
		  if (!uploadedFileURL) {
			message.error('Please upload a document before submitting');
			setSubmitLoading(false);
			return;
		  }
	
		  const docData = {
			...values,
			documentURL: uploadedFileURL,
			updatedAt: new Date(),
		  };
	
		  if (mode === 'ADD') {
			await addDoc(collection(db, 'engineeringTech'), {
			  ...docData,
			  createdAt: new Date(),
			});
			message.success('Document successfully added to Engineering Tech');
		  } else {
			const docRef = doc(db, 'engineeringTech', param.id);
			await updateDoc(docRef, docData);
			message.success('Document successfully updated');
		  }
	
		  form.resetFields();
		  navigate(`/app/apps/documents/engineering-tech/eng-tech-list`);
		} catch (error) {
		  message.error(`Error: ${error.message}`);
		} finally {
		  setSubmitLoading(false);
		}
	  };

	return (
		<>
			<Form
				layout="vertical"
				form={form}
				className="ant-advanced-search-form"
				initialValues={{ projectName: '', commisioningDocsName: '' }}
				onFinish={onFinish}
			>
				<PageHeaderAlt className="border-bottom" overlap>
					<div className="container">
						<Flex className="py-2" mobileFlex={false} justifyContent="space-between" alignItems="center">
							<h2 className="mb-3">{mode === 'ADD'? 'Add New Commisioning Docs' : `Edit Commisioning Docs`} </h2>
							<div className="mb-3">
								<Button className="mr-2">Discard</Button>
								<Button type="primary" onClick={() => onFinish()} htmlType="submit" loading={submitLoading} >
									{mode === 'ADD'? 'Add' : `Save`}
								</Button>
							</div>
						</Flex>
					</div>
				</PageHeaderAlt>
				<div className="container">
					<Tabs 
						defaultActiveKey="1" 
						style={{marginTop: 30}}
						items={[
							{
								label: 'General',
								key: '1',
								children: <GeneralField 
									handleFileUpload={handleFileUpload}
									uploadLoading={uploadLoading}
								/>,
							}
						]}
					/>
				</div>
			</Form>
		</>
	)
}

export default EngTechForm
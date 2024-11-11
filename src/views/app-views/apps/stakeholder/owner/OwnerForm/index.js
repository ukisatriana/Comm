import React, { useState, useEffect } from 'react'
import PageHeaderAlt from 'components/layout-components/PageHeaderAlt'
import { Tabs, Form, Button, message } from 'antd';
import Flex from 'components/shared-components/Flex';
import { image } from 'd3-fetch';
import OnwerField from './GeneralField';
import FirestoreService from 'services/FirestoreService';
import { useNavigate } from 'react-router-dom';

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

const ADD = 'ADD'
const EDIT = 'EDIT'

const OwnerForm = props => {

	const { mode = ADD, param } = props
	const [form] = Form.useForm();
	const [uploadedImg, setImage] = useState('')
	const [uploadLoading, setUploadLoading] = useState(false)
	const [submitLoading, setSubmitLoading] = useState(false)
	const navigate = useNavigate();

	const initialValues = {
		ownerLogo: '',
		ownerName: '',
		ownerAddres: '',
	}

	useEffect(() => {
        const fetchData = async () => {
          if (mode === EDIT) {
            const { id } = param;
            try {
              const document = await FirestoreService.getDocument('owners', id);
              form.setFieldsValue(document);
            } catch (error) {
              message.error('Error fetching document: ' + error.message);
            }
          }
        };
    
        fetchData();
      }, [form, mode, param]);

		const onReset = () => {
			form.resetFields();
		  };

	const handleUploadChange = info => {
		if (info.file.status === 'uploading') {
			setUploadLoading(true)
			return;
		}
		if (info.file.status === 'done') {
			getBase64(info.file.originFileObj, imageUrl =>{
				setImage(imageUrl)
				setUploadLoading(true)
			});
		}
	};

	const onFinish = () => {
        setSubmitLoading(true);
        form.validateFields().then(values => {
          setTimeout(() => {
            setSubmitLoading(false);
            if (mode === ADD) {
              message.success(`Created ${values.ownerName} to Project`);
              navigate('/app/apps/stakeholer/owner/owner-list');
            }
            if (mode === EDIT) {
              message.success(`Product saved`);
              navigate('/app/apps/stakeholder/owner/owner-list');
            }
          }, 1500);
        }).catch(info => {
          setSubmitLoading(false);
        });
      };

	   const handleFinish = async (values) => {
        try {
          if (mode === ADD) {
            const docId = await FirestoreService.createDocument('owners', values);
            message.success(`Owner created with ID: ${docId}`);
          } else if (mode === EDIT) {
            const { id } = param;
            await FirestoreService.updateDocument('project', id, values);
            message.success(`Owner updated successfully`);
          }
          form.resetFields();
          onFinish();
        } catch (error) {
          message.error('Error creating/updating Jenis Clash: ' + error.message);
        }
      };
	return (
		<>
			<Form
				layout="vertical"
				form={form}
				name="advanced_search"
				className="ant-advanced-search-form"
				initialValues={initialValues}
				onFinish={handleFinish}
			>
				<PageHeaderAlt className="border-bottom" overlap>
					<div className="container">
						<Flex className="py-2" mobileFlex={false} justifyContent="space-between" alignItems="center">
							<h2 className="mb-3">{mode === 'ADD'? 'Add New Owner' : `Edit Owner`} </h2>
							<div className="mb-3">
								<Button className="mr-2" onClick={onReset}>Discard</Button>
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
								children: <OnwerField 
									uploadedImg={uploadedImg} 
									uploadLoading={uploadLoading} 
									handleUploadChange={handleUploadChange}
								/>,
							}
						]}
					/>
				</div>
			</Form>
		</>
	)
}

export default OwnerForm

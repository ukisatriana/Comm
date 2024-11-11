import React, { useState, useEffect } from 'react'
import PageHeaderAlt from 'components/layout-components/PageHeaderAlt'
import { Tabs, Form, Button, message } from 'antd';
import Flex from 'components/shared-components/Flex';
import WaterFlushingField from './WaterFlushingField';
import { useNavigate } from 'react-router-dom';
import FirestoreService from 'services/FirestoreService';


const ADD = 'ADD'
const EDIT = 'EDIT'

const WaterFlushingForm = props => {

	const { mode = ADD, param } = props

	const [form] = Form.useForm();
	// const [uploadedImg, setImage] = useState('')
	// const [uploadLoading, setUploadLoading] = useState(false)
	const [submitLoading, setSubmitLoading] = useState(false)
	const navigate = useNavigate();

	const initialValues = {
		projectName: '',
		owner: '',
		contractor: '',
		subcontractor:'',
		identificationNo: '',
		method: '',
		system: '',
		subSystem: '',
		sheet: '',
		reqToWaterFlushingDate: '',
		medium: '',
		pressure: '',
		temp: '',
		permissionToWaterFlushing: '',
		nameWaterFlushing: '',
		datePermissionWaterFlushing: '',
		waterFlushingDate: '',
		waterFlushingDuration: '',
		pwi: [
			{
				lineNumber: '',
				pAndIdNo: '',
				remark: ''
			}
		],
		comments: ''
	};



	useEffect(() => {
		if (mode === EDIT) {
		  const { id } = param;
		  const fetchData = async () => {
			try {
			  const document = await FirestoreService.getDocument('waterFlushing', id);
			  form.setFieldsValue(document);
			} catch (error) {
			  message.error('Error fetching document: ' + error.message);
			}
		  };
		  fetchData();
		}
	  }, [form, mode, param]);
	
	  const onReset = () => {
		form.resetFields();
	  };
	
	  const handleFinish = async values => {
		try {
			// Prepare values for Firestore
			const preparedValues = {
				...values,
				reqToWaterFlushingDate: values.reqToWaterFlushingDate ? values.reqToWaterFlushingDate.toISOString() : null,
				datePermissionWaterFlushing: values.datePermissionWaterFlushing ? values.datePermissionWaterFlushing.toISOString() : null,
				waterFlushingDate: values.waterFlushingDate ? values.waterFlushingDate.toISOString() : null,
				// Add any additional date fields here as needed
			};
	
			if (mode === ADD) {
				const docId = await FirestoreService.createDocument('waterFlushing', preparedValues);
				message.success(`Water Flushing created with ID: ${docId}`);
			} else if (mode === EDIT) {
				const { id } = param;
				await FirestoreService.updateDocument('waterFlushing', id, preparedValues);
				message.success(`Water FLushing updated successfully`);
			}
			form.resetFields();
			navigate('/app/apps/documents/commisioning/water-flushing/water-flushing-list');
		} catch (error) {
			message.error('Error creating/updating Water Flushing: ' + error.message);
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
							<h2 className="mb-3">{mode === 'ADD'? 'Add New Water Flushing Procedure' : `Edit Water Flushing Procedure`} </h2>
							<div className="mb-3">
								<Button className="mr-2" onClick={onReset}>Discard</Button>
								<Button type="primary"  htmlType="submit" loading={submitLoading} >
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
								children: <WaterFlushingField
									// uploadedImg={uploadedImg} 
									// uploadLoading={uploadLoading} 
									// handleUploadChange={handleUploadChange}
								/>,
							}
							
						]}
					/>
				</div>
			</Form>
		</>
	)
}

export default WaterFlushingForm

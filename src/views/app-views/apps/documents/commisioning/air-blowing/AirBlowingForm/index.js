import React, { useState, useEffect } from 'react'
import PageHeaderAlt from 'components/layout-components/PageHeaderAlt'
import { Tabs, Form, Button, message } from 'antd';
import Flex from 'components/shared-components/Flex';
import AirBlowingField from './AirBlowingField';
import Invoice from '../air-blowing-detail';
import FirestoreService from 'services/FirestoreService';
import { useNavigate } from 'react-router-dom';


const ADD = 'ADD'
const EDIT = 'EDIT'

const AirBlowingForm = props => {

	const { mode = ADD, param } = props
	const [form] = Form.useForm();
	const [submitLoading, setSubmitLoading] = useState(false)
	const navigate = useNavigate();

	const initalValues = {
		projectName: '',
		owner: '',
		contractor: '',
		subContractor: '',
		identificationNo: '',
		method: '',
		system: '',
		subSystem: '',
		sheet: '',
		reqToAirBlowingDate: '',
		medium: '',
		flow: '',
		pressure: '',
		permissionToAirBlowing: '',
		nameAirBlowing: '',
		datePermissionAirBlowing: '',
		airBlowingDate: '',
		airBlowingDuration: '',
		statusDoc: '',
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
			  const document = await FirestoreService.getDocument('airBlowing', id);
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
				reqToAirBlowingDate: values.reqToAirBlowingDate ? values.reqToAirBlowingDate.toISOString() : null,
				datePermissionAirBlowing: values.datePermissionAirBlowing ? values.datePermissionAirBlowing.toISOString() : null,
				airBlowingDate: values.airBlowingDate ? values.airBlowingDate.toISOString() : null,
				// Add any additional date fields here as needed
			};
	
			if (mode === ADD) {
				const docId = await FirestoreService.createDocument('airBlowing', preparedValues);
				message.success(`Air Blowing created with ID: ${docId}`);
			} else if (mode === EDIT) {
				const { id } = param;
				await FirestoreService.updateDocument('airBlowing', id, preparedValues);
				message.success(`Air Blowing updated successfully`);
			}
			form.resetFields();
			navigate('/app/apps/documents/commisioning/air-blowing/air-blowing-list');
		} catch (error) {
			message.error('Error creating/updating Air Blowing: ' + error.message);
		}
	};


	return (
		<>
			<Form
				layout="vertical"
				form={form}
				name="advanced_search"
				className="ant-advanced-search-form"
				initialValues={initalValues}
				onFinish={handleFinish}
			>
				<PageHeaderAlt className="border-bottom" overlap>
					<div className="container">
						<Flex className="py-2" mobileFlex={false} justifyContent="space-between" alignItems="center">
							<h2 className="mb-3">{mode === 'ADD'? 'Add New Air Blowing Procedure' : `Edit Air Blowing Procedure`} </h2>
							<div className="mb-3">
								<Button className="mr-2" onClick={onReset}>Discard</Button>
								<Button type="primary" htmlType="submit" loading={submitLoading} >
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
								children: <AirBlowingField/>,
							},
							{
								label: 'Detail Page',
								key: '2',
								children: <Invoice />,
							},
							
						]}
					/>
				</div>
			</Form>
		</>
	)
}

export default AirBlowingForm

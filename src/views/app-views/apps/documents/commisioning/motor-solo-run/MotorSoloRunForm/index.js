import React, { useState, useEffect } from 'react'
import PageHeaderAlt from 'components/layout-components/PageHeaderAlt'
import { Tabs, Form, Button, message } from 'antd';
import Flex from 'components/shared-components/Flex';
import MotorSoloRunField from './MotorSoloRunField';
import { useNavigate } from 'react-router-dom';
import FirestoreService from 'services/FirestoreService';


const ADD = 'ADD'
const EDIT = 'EDIT'

const MotorSoloRunForm = props => {

	const { mode = ADD, param } = props
	const [form] = Form.useForm();
	const [uploadLoading, setUploadLoading] = useState(false)
	const [submitLoading, setSubmitLoading] = useState(false)
	const navigate = useNavigate();

	const initialValues = {
		projectName: '',
		owner: '',
		identificationNo: '',
		system: '',
		subSystem: '',
		motorTagNo: '',
		tagDescription: '',
		motorType: '',
		startingTime: '',
		recordOfRotation: '',
		recordOfSpeed: '',
		remarks: '',
    
    // Flattened structure for `recordOfCurrent`
    recordOfCurrent: {
        rocR: { 2: '', 10: '', 20: '', 30: '', 60: '', 90: '', 120: '' },
        rocY: { 2: '', 10: '', 20: '', 30: '', 60: '', 90: '', 120: '' },
        rocB: { 2: '', 10: '', 20: '', 30: '', 60: '', 90: '', 120: '' },
    },
    
    // Flattened structure for `recordOfTemperature`
    recordOfTemperature: {
        rotAmbient: { 2: '', 10: '', 20: '', 30: '', 60: '', 90: '', 120: '' },
        rotBearing: { 2: '', 10: '', 20: '', 30: '', 60: '', 90: '', 120: '' },
        rotFD: { 2: '', 10: '', 20: '', 30: '', 60: '', 90: '', 120: '' },
        rotFND: { 2: '', 10: '', 20: '', 30: '', 60: '', 90: '', 120: '' },
    },

    // Similar optimizations for `recordOfVibration`
    recordOfVibration: {
        rovX: { 2: '', 10: '', 20: '', 30: '', 60: '', 90: '', 120: '' },
        rovXX: { 2: '', 10: '', 20: '', 30: '', 60: '', 90: '', 120: '' },
        rovY: { 2: '', 10: '', 20: '', 30: '', 60: '', 90: '', 120: '' },
        rovYY: { 2: '', 10: '', 20: '', 30: '', 60: '', 90: '', 120: '' },
        rovXY: { 2: '', 10: '', 20: '', 30: '', 60: '', 90: '', 120: '' },
    },

    // Flatten `recordOfNoise`
    recordOfNoise: {
        ronDb: { 2: '', 10: '', 20: '', 30: '', 60: '', 90: '', 120: '' },
    },

    // Flatten `testInstrumentTools`
    testInstrumentTools: {
        speed: { M: '', Y: '', R: '' },
        ampere: { M: '', Y: '', R: '' },
        temp: { M: '', Y: '', R: '' },
        vib: { M: '', Y: '', R: '' },
    },
	}

	

	useEffect(() => {
        const fetchData = async () => {
          if (mode === EDIT) {
            const { id } = param;
            try {
              const document = await FirestoreService.getDocument('motorSoloRun', id);
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


	//   const onFinish = () => {
    //     setSubmitLoading(true);
    //     form.validateFields().then(values => {
    //       setTimeout(() => {
    //         setSubmitLoading(false);
    //         if (mode === ADD) {
    //           message.success(`Created ${values.projectName} to Project`);
    //           navigate('/app/apps/dproject/project-list');
    //         }
    //         if (mode === EDIT) {
    //           message.success(`Product saved`);
    //           navigate('/app/apps/dproject/project-list');
    //         }
    //       }, 1500);
    //     }).catch(info => {
    //       setSubmitLoading(false);
    //     });
    //   };


	const handleFinish = async values => {
        try {
          if (mode === ADD) {
            const docId = await FirestoreService.createDocument('motorSoloRun', values);
            message.success(`Data Clash created with ID: ${docId}`);
			console.log('data',values)
          } else if (mode === EDIT) {
            const { id } = param;
            await FirestoreService.updateDocument('motorSoloRun', id, values);
            message.success(`Data Clash updated successfully`);
          }
          form.resetFields();
          navigate('/app/data-clash/data-clash-list');
        } catch (error) {
          message.error('Error creating/updating Data Clash: ' + error.message);
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
							<h2 className="mb-3">{mode === 'ADD'? 'Add New Motor Solo Run Procedure' : `Edit Motor Solo Run Procedure`} </h2>
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
								children: <MotorSoloRunField
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

export default MotorSoloRunForm

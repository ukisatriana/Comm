import React from 'react'
import { Input, Row, Col, Card, Form, message, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';



const rules = {
	ownerName: [
		{
			required: true,
			message: 'Please enter Owner Name',
		}
	],
	ownerAddres: [
		{
			required: true,
			message: 'Please enter Owner Addres',
		}
	],
	
}

const OnwerField = () => {

	const initialValues = {
		contractorName: '',
		contractorAddres: '',
	}

	const [values, setValues] = React.useState(initialValues);

	function handleProjectChange(e) {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value
		});
	}

	return (
		<Card title="Owner Data">
			<Row gutter={16}>
				<Col span={24}>
                    <Form.Item name="ownerName" label="Owner Name" rules={rules.ownerName}>
					    <Input 
						placeholder="Enter Owner Name"
						type='text'
						value={values.ownerName}
						name='ownerName'
						onChange={e => handleProjectChange(e)}
						/>
				    </Form.Item>
				</Col>
                <Col span={24}>
                    <Form.Item name="ownerAddres" label="Owner Addres" rules={rules.ownerAddres}>
					    <Input
						placeholder="Enter Owner Addres"
						type='text'
						value={values.ownerAddres}
						name='ownerAddres'
						onChange={e => handleProjectChange(e)}
						/>
				    </Form.Item>
				</Col>
                <Col span={24}>
                    <Form.Item name="ownerLogo" label="Owner logo" rules={rules.ownerLogo}>
						<Input type='file' />
							<Button icon={<UploadOutlined />}>Click to Upload</Button>
						
				    </Form.Item>
				</Col>
                

			</Row>
           

		</Card>
	)
}

export default OnwerField

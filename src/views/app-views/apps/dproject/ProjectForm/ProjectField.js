import React from 'react'
import { Input, Row, Col, Card, Form, Select } from 'antd';

const { Option } = Select;

const rules = {
	projectName: [
		{
			required: true,
			message: 'Please enter project name',
		}
	],
	projectLocation: [
		{
			required: true,
			message: 'Please enter project location',
		}
	],
	projectType: [
		{
			required: true,
			message: 'Please enter project type',
		}
	],
}


const ownerList = ['wika', 'wika2', 'wika3']
const contractorList = ['wika', 'wika2', 'wika3']
const subcontractorList = ['wika', 'wika2', 'wika3']

const ProjectField = () => {


	const initialValues = {
		projectName: '',
		projectLocation: '',
		projectType: '',
		owner: '',
		contractor: '',
		subcontractor: ''
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
		<Card title="Project">
			<Row gutter={16}>
				<Col span={24}>
                    <Form.Item name="projectName" label="Project Name" rules={rules.projectName}>
					    <Input 
						placeholder="Enter Project Name"
						type='text'
						value={values.projectName}
						name='projectName'
						onChange={e => handleProjectChange(e)}
						/>
				    </Form.Item>
				</Col>
                <Col span={24}>
                    <Form.Item name="projectLocation" label="Project Location" rules={rules.projectLocation}>
					    <Input
						placeholder="Enter Project Location"
						type='text'
						value={values.projectLocation}
						name='projectLocation'
						onChange={e => handleProjectChange(e)}
						/>
				    </Form.Item>
				</Col>
                <Col span={24}>
                    <Form.Item name="projectType" label="Project Type" rules={rules.projectType}>
					    <Input
						placeholder="Enter Project Type"
						type='text'
						value={values.projectType}
						name='projectType'
						onChange={e => handleProjectChange(e)}
						/>
				    </Form.Item>
				</Col>
                <Col span={24}>
                    <Form.Item name="owner" label="Owner">
						<Select className="w-100" placeholder="Owner">
							{
								ownerList.map(elm => (
									<Option 
									key={elm}
									value={values.elm}
									name="owner"
									onChange={e => handleProjectChange(e)}
									>{elm}</Option>
								))
							}
						</Select>
                    </Form.Item>
				</Col>
                <Col span={24}>
                    <Form.Item name="contractor" label="Contractor">
						<Select className="w-100" placeholder="Contractor">
							{
								contractorList.map(elm => (
									<Option
									key={elm} 
									value={values.elm}
									name="contractor"
									onChange={e => handleProjectChange(e)}
									>{elm}</Option>
								))
							}
						</Select>
                    </Form.Item>
				</Col>
                <Col span={24}>
                    <Form.Item name="subcontractor" label="Subcontractor">
							<Select className="w-100" placeholder="Subcontractor">
								{
									subcontractorList.map(elm => (
										<Option
										key={elm}
										value={values.elm}
										name="subcontractor"
										onChange={e => handleProjectChange(e)}
										>{elm}</Option>
									))
								}
							</Select>
                    </Form.Item>
				</Col>

			</Row>
           

		</Card>
	)
}

export default ProjectField

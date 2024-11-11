import React from 'react'
import { Input, Row, Col, Card, Form, Select } from 'antd';

const { Option } = Select;

const rules = {
	name: [
		{
			required: true,
			message: 'Please enter name',
		}
	],
	email: [
		{
			required: true,
			message: 'Please enter email',
		}
	],
	username: [
		{
			required: true,
			message: 'Please enter email',
		}
	],
	password: [
		{
			required: true,
			message: 'Please enter password',
		}
	],
	projectName: [
		{
			required: true,
			message: 'Please enter Project Name',
		}
	],
	role: [
		{
			required: true,
			message: 'Please enter Role',
		}
	]
}

const projectSelect = ['Project1', 'Project2', 'Project3', 'Project4', 'Project5']
const roleSelect = ['Admin', 'Owner', 'Contractor', 'Subcontractor']

const GeneralField = props => (
	<Row gutter={16}>
		<Col xs={24} sm={24} md={24}>
			<Card title="User Form">
				<Form.Item name="name" label="Name" rules={rules.name}>
					<Input placeholder="Input Name" />
				</Form.Item>
				<Form.Item name="email" label="Email" rules={rules.email}>
					<Input placeholder='Input Email'/>
				</Form.Item>
				<Form.Item name="username" label="Username" rules={rules.username}>
					<Input placeholder='Input Username'/>
				</Form.Item>
				<Form.Item name="password" label="Password" rules={rules.password}>
					<Input placeholder='Input Password'/>
				</Form.Item>
					<Form.Item name="projectName" label="Project Name" rules={rules.projectName}>
						<Select className="w-100" placeholder="Project Name">
							{
								projectSelect.map(elm => (
									<Option key={elm} value={elm}>{elm}</Option>
								))
							}
						</Select>
                    </Form.Item>
					<Form.Item name="role" label="Role" rules={rules.role}>
						<Select className="w-100" placeholder="Role">
							{
								roleSelect.map(elm => (
									<Option key={elm} value={elm}>{elm}</Option>
								))
							}
						</Select>
                    </Form.Item>
			</Card>
		</Col>
	</Row>
)

export default GeneralField

import React from 'react'
import { Input, Row, Col, Card, Form, Select, DatePicker,Button } from 'antd';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';

const { Option } = Select;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;



const rules = {
	projectName: [
		{
			required: true,
			message: 'Please enter project name',
		}
	],
	owner: [
		{
			required: true,
			message: 'Please enter Owner Name',
		}
	],
	contractor: [
		{
			required: true,
			message: 'Please enter Contractor Name',
		}
	],
	subContractor: [
		{
			required: true,
			message: 'Please enter Subcontractor Name',
		}
	]
}

const projectSelect = ['Project1', 'Project2', 'Project3', 'Project4', 'Project5']
const ownerSelect = ['Owner1', 'Owner2', 'Owner3', 'Owner4', 'Owner5']
const contractorSelect = ['Contractor1', 'Contractor2', 'Contractor3', 'Contractor4', 'Contractor5', 'Contractor6', 'Contractor7' ]
const subConstractorSelect = ['Subcontractor1', 'Subcontractor2', 'Subcontractor3', 'Subcontractor4', 'Subcontractor5', 'Subcontractor6', 'Subcontractor7' ]
const statusDocSelect = ['Open', 'Revisi', 'Aprove']


const AirBlowingField = () => {


	const initialValues = {
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

	const [values, setValues] = React.useState(initialValues);

	function handleAirChange(e) {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value
		});
	}

	function onChangeDate(date, dateString, name) {
		// Convert to ISO string or Date object
		const formattedDate = date ? date.toISOString() : null; // or use date.toDate() if Firestore allows
	
		setValues({
			...values,
			[name]: formattedDate
		});
	}



return (
	<Row gutter={16}>
		{/* Section 1 */}
		<Col xs={24} sm={24} md={24}>
			<Card title="Air Blowing Form">
					<Form.Item name="projectName" label="Project Name" rules={rules.projectName}>
						<Select className="w-100" placeholder="Project Name" >
							{
								projectSelect.map(elm => (
									<Option 
									key={elm} 
									value={values.elm}
									onChange={e => handleAirChange(e)}
									>{elm}</Option>
								))
							}
						</Select>
                    </Form.Item>
					<Form.Item name="owner" label="Owner" rules={rules.owner}>
						<Select className="w-100" placeholder="Owner">
							{
								ownerSelect.map(elm => (
									<Option
									key={elm}
									value={values.elm}
									onChange={e => handleAirChange(e)}
									>{elm}</Option>
								))
							}
						</Select>
                    </Form.Item>
					<Form.Item name="contractor" label="Contractor" rules={rules.contractor}>
						<Select className="w-100" placeholder="Contractor">
							{
								contractorSelect.map(elm => (
									<Option 
									key={elm}
									value={values.elm}
									onChange={e => handleAirChange(e)}
									>{elm}</Option>
								))
							}
						</Select>
                    </Form.Item>
					<Form.Item name="subContractor" label="Subcontractor" rules={rules.subContractor}>
						<Select className="w-100" placeholder="Subcontractor">
							{
								subConstractorSelect.map(elm => (
									<Option
									key={elm}
									value={values.elm}
									onChange={e => handleAirChange(e)}
									>{elm}</Option>
								))
							}
						</Select>
                    </Form.Item>
					
			</Card>
		</Col>

		{/* Section 2 */}
		<Col xs={24} sm={24} md={24}>
			<Card title="Identification">
			<Form.Item name="identificationNo" label="Identification No" >
					<Input
					placeholder="Input Identification Number"
					onChange={e => handleAirChange(e)}
					/>
			</Form.Item>
			<Form.Item name="method" label="Method" >
					<Input placeholder="Input Method"
					onChange={e => handleAirChange(e)}
					/>
			</Form.Item>
			<Form.Item name="system" label="System" >
					<Input placeholder="Input System"
					onChange={e => handleAirChange(e)}
					/>
			</Form.Item>
			<Form.Item name="subSystem" label="Sub system">
					<Input placeholder="Input Sub system"
					onChange={e => handleAirChange(e)}
					/>
			</Form.Item>
			<Form.Item name="sheet" label="Sheet">
					<Input placeholder="Input Sheet"
					onChange={e => handleAirChange(e)}
					/>
			</Form.Item>
			</Card>
		</Col>


		<Col xs={24} sm={24} md={24}>
			<Card title="Air Blowing Data">
			<Form.Item text-style="" name="reqToAirBlowingDate" label="Request To Air Blowing Date" >
						<DatePicker
						onChange={(date, dateString) => onChangeDate(date, dateString, 'reqToAirBlowingDate')}
						/>
			</Form.Item>
			<Form.Item name="medium" label="Medium" >
					<Input placeholder="Input Medium"
					onChange={e => handleAirChange(e)}
					/>
			</Form.Item>
			<Form.Item name="flow" label="Flow" >
					<Input placeholder="Input Flow"
					onChange={e => handleAirChange(e)}
					/>
			</Form.Item>
			<Form.Item name="pressure" label="Pressure">
					<Input placeholder="Input Pressure"
					onChange={e => handleAirChange(e)}
					/>
			</Form.Item>
			{/* ------------- */}
			<Form.Item name="permissionToAirBlowing" label="Permission to Air Blowing" >
					<Input placeholder="Input Permission To Air Blowing" />
			</Form.Item>
			<Form.Item name="nameAirBlowing" label="Name" >
					<Input placeholder="Input Name"
					onChange={e => handleAirChange(e)}
					/>
			</Form.Item>
			<Form.Item name="datePermissionAirBlowing" label="Date Persmission to Air" >
						<DatePicker
						onChange={(date, dateString) => onChangeDate(date, dateString, 'reqToAirBlowingDate')}
						/>
			</Form.Item>
			<Form.Item name="airBlowingDate" label="Air Blowing Date" >
						<DatePicker
						onChange={(date, dateString) => onChangeDate(date, dateString, 'reqToAirBlowingDate')}
						/>
			</Form.Item>
			<Form.Item name="airBlowingDuration" label="Air Blowing Duration" >
						<Input placeholder="Input Air Blowing Duration"
						name="airBlowingDuration"
						onChange={e => handleAirChange(e)}
						/>
			</Form.Item>
			</Card>
		</Col>

		{/* ---------------- */}

		<Col xs={24} sm={24} md={24}>
		<Card title="Pipe Work Index">
			<Form.List name="pwi">
				{(fields, { add, remove }) => {
					return (
						<div className="mt-3">
							{fields.map((field, index) => (
								<Row key={field.key} gutter={16}> 
									<Col sm={24} md={7}>
										<Form.Item
											{...field}
											label="Line Number"
											name={[field.name, 'lineNumber']}
											fieldKey={[field.fieldKey, 'lineNumber']}
											onChange={e => handleAirChange(e)}
											// rules={[{ required: true, message: 'Please enter Line Number' }]}
											className="w-100"
										>
											<Input />
										</Form.Item>
									</Col>
									<Col sm={24} md={7}>
										<Form.Item
											{...field}
											label="P&ID No."
											name={[field.name, 'pAndIdNo']}
											fieldKey={[field.fieldKey, 'pAndIdNo']}
											onChange={e => handleAirChange(e)}
											// rules={[{ required: true, message: 'Please enter P&ID No' }]}
											className="w-100"
										>
											<Input />
										</Form.Item>
									</Col>
									<Col sm={24} md={7}>
										<Form.Item
											{...field}
											label="Remark"
											name={[field.name, 'remark']}
											fieldKey={[field.fieldKey, 'remark']}
											onChange={e => handleAirChange(e)}
											// rules={[{ required: true, message: 'Please enter Remark' }]}
											className="w-100"
										>
											<Input />
										</Form.Item>
									</Col>
									<Col sm={24} md={2}>
										<MinusCircleOutlined className="mt-md-4 pt-md-3" onClick={() => { remove(field.name)}} />
									</Col>
									<Col span={24}>
										<hr className="mt-2"/>
									</Col>
								</Row>
							))}
							<Form.Item>
								<Button type="dashed" onClick={() => { add()}} className="w-100">
									<PlusOutlined /> Add field
								</Button>
							</Form.Item>
						</div>
					);
				}}
			</Form.List>
		</Card>

		{/* --------------- */}

			<Col xs={24} sm={24} md={24}>
				<Card title="Comments">
					<Form.Item name="comments" >
						<Input.TextArea placeholder='Input Comments' rows={4}
						onChange={e => handleAirChange(e)}
						/>
					</Form.Item>
				</Card>

				<Card title="Status">
					<Form.Item name="statusDoc" >
					<Select className="w-100" placeholder="Subcontractor">
							{
								statusDocSelect.map(elm => (
									<Option
									key={elm}
									defaultValue="Open"
									value={values.elm}
									onChange={e => handleAirChange(e)}
									>{elm}</Option>

						
								))
							}
						</Select>
					</Form.Item>
				</Card>
			</Col>
		</Col>
	</Row>
)
}

export default AirBlowingField

import React from 'react'
import { Input, Row, Col, Card, Form, Select, DatePicker,Button } from 'antd';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const { Option } = Select;


const projectSelect = ['Project1', 'Project2', 'Project3', 'Project4', 'Project5']
const contractorSelect = ['contractor1', 'contractor2', 'contractor3']
const subContractorSelect = ['subcontractor1', 'subconctractor2', 'subcontracto3']
const ownerSelect = ['Owner1', 'Owner2', 'Owner3']

const WaterFlushingField = () => {

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

	const [values, setValues] = React.useState(initialValues);

	function handleWaterChange(e) {
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
			<Card title="Water Flushing Form">
				<Form.Item name="projectName" label="Project Name" >
					<Select placeholder="Project Name">
                       {
						projectSelect.map((elm, i) => (
							<Option
							key={elm}
							values={values.elm}
							onChange={e => handleWaterChange(e)}
							>{elm}</Option>
						))
					   }
                    </Select>
				</Form.Item>
				<Form.Item name="owner" label="Owner" >
					<Select placeholder="Project Name">
                       {
						ownerSelect.map((elm, i) => (
							<Option
							key={elm}
							values={values.elm}
							onChange={e => handleWaterChange(e)}
							>{elm}</Option>
						))
					   }
                    </Select>
                </Form.Item>
				<Form.Item name="contractor" label="Contractor" >
				<Select placeholder="Project Name">
                       {
						contractorSelect.map((elm, i) => (
							<Option
							key={elm}
							values={values.elm}
							onChange={e => handleWaterChange(e)}
							>{elm}</Option>
						))
					   }
                    </Select>
                </Form.Item>
				<Form.Item name="subContractor" label="Subcontractor" >
					<Select placeholder="Project Name">
                       {
						subContractorSelect.map((elm, i) => (
							<Option
							key={elm}
							values={values.elm}
							onChange={e => handleWaterChange(e)}
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
					onChange={e => handleWaterChange(e)}
					/>
			</Form.Item>
			<Form.Item name="method" label="Method" >
					<Input
					placeholder="Input Method"
					onChange={e => handleWaterChange(e)}
					/>
			</Form.Item>
			<Form.Item name="system" label="System" >
					<Input 
					placeholder="Input System" 
					onChange={e => handleWaterChange(e)}
					/>
			</Form.Item>
			<Form.Item name="subSystem" label="Sub system">
					<Input 
					placeholder="Input Sub system" 
					onChange={e => handleWaterChange(e)}
					/>
			</Form.Item>
			<Form.Item name="sheet" label="Sheet">
					<Input 
					placeholder="Input Sheet" 
					onChange={e => handleWaterChange(e)}
					/>
			</Form.Item>
			</Card>
		</Col>


		<Col xs={24} sm={24} md={24}>
			<Card title="Water FLushing Data">
			<Form.Item text-style="" name="reqToWaterFlushingDate" label="Request To Water Flushing Date" >
						<DatePicker onChange={(date, dateString) => onChangeDate(date, dateString, 'reqToWaterFlushingDate')} />
			</Form.Item>
			<Form.Item name="medium" label="Medium" >
					<Input 
					placeholder="Input Medium"
					onChange={e => handleWaterChange(e)}
					/>
			</Form.Item>
			<Form.Item name="pressure" label="Pressure" >
					<Input 
					placeholder="Input Pressure" 
					onChange={e => handleWaterChange(e)}
					/>
			</Form.Item>
			<Form.Item name="temp" label="Temp" >
					<Input 
					placeholder="Input Temp" 
					onChange={e => handleWaterChange(e)}
					/>
			</Form.Item>
			{/* ------------- */}
			<Form.Item name="permissionToWaterFlushing" label="Permission to Water Flushing" >
					<Input 
					placeholder="Input Permission To Water Flushing" 
					onChange={e => handleWaterChange(e)}
					/>
			</Form.Item>
			<Form.Item name="nameWaterFlushing" label="Name" >
					<Input 
					placeholder="Input Name"
					onChange={e => handleWaterChange(e)}
					/>
			</Form.Item>
			<Form.Item name="datePermissionWaterFlushing" label="Date Persmission to Water Flushing" >
						<DatePicker onChange={(date, dateString) => onChangeDate(date, dateString, 'datePermissionWaterFlushing')}  />
			</Form.Item>
			<Form.Item name="waterFlushingDate" label="Water Flushing Date">
						<DatePicker onChange={(date, dateString) => onChangeDate(date, dateString, 'waterFlushingDate')} />
			</Form.Item>
			<Form.Item name="waterFlushingDuration" label="Water Flushing Duration" >
						<Input 
						placeholder="Input Water Flushing Duration" 
						onChange={e => handleWaterChange(e)}
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
											onChange={e => handleWaterChange(e)}
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
											onChange={e => handleWaterChange(e)}
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
											onChange={e => handleWaterChange(e)}
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
					<Input.TextArea 
					placeholder='Input Comments' 
					rows={4}
					onChange={e => handleWaterChange(e)}
					 />
				</Form.Item>
			</Card>
		</Col>

		</Col>
	</Row>
	)
}

export default WaterFlushingField

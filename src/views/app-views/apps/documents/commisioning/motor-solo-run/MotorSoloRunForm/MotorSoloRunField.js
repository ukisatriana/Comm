import React from 'react'
import { Input, Row, Col, Card, Form, Select, DatePicker} from 'antd';


const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

const style = { padding: '6px 0' };
const styleTitle = { padding: '6px 0', fontWeight: 'bold'};
const border = { display: 'flex' ,borderBottom: '1px solid #c0c0c4'};
const borderRight = { display: 'flex' ,justifyContent: 'center', alignItems: 'center', borderRight: '1px solid #c0c0c4'};
const borderRL = { display: 'flex' ,justifyContent: 'center', alignItems: 'center', borderRight: '1px solid #c0c0c4',  borderLeft: '1px solid #c0c0c4'};

function onChange(date, dateString) {
	console.log(date, dateString);
  }

const { Option } = Select;

const selectAfter = (
	<Select defaultValue=".com" style={{ width: 80 }}>
	  <Option value="sec">sec</Option>
	  <Option value="rpm">rpm</Option>
	</Select>
  );

const mtype = ['Horizontal', 'Vertical']
const projectSelect = ['Project1', 'Project2', 'Project3', 'Project4', 'Project5']
const ownerSelect = ['Owner1', 'Owner2', 'Owner3', 'Owner4', 'Owner5']
const recorOfRotationSelect = ['Clock-Wise', 'Counter Clock-Wise (Viewed from Drive End)']

const MotorSoloRunField = () => {

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
	};

	const [values, setValues] = React.useState(initialValues);

	function handleMotorChange (e) {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value
		});
		console.log("isi",values)
	}

return (
	
	<Row gutter={16}>
		{/* Section 1 */}
		<Col xs={24} sm={24} md={24}>
			<Card title="Motor Solo Run Form">
				<Form.Item name="projectName" label="Project Name" >
						<Select className="w-100" placeholder="Select Project">
							{
								projectSelect.map(elm => (
									<Option
									name="projectName"
									onChange={e => handleMotorChange(e)} 
									key={elm}
									value={values.elm}
									>
									{elm}</Option>
								))
							}
						</Select>
				</Form.Item>
				<Form.Item name="owner" label="Owner" >
						<Select className="w-100" placeholder="Select Owner">
							{
								ownerSelect.map(elm => (
									<Option
									name="owner"
									onChange={e => handleMotorChange(e)}
									key={elm}
									value={values.elm}
									>
									{elm}</Option>
								))
							}
						</Select>
                </Form.Item>
			</Card>
		</Col>

		<Col xs={24} sm={24} md={12}>
			<Card title="Identification">
			<Form.Item name="identificationNo" label="Identification No" >
					<Input 
					placeholder="Input Identification Number" 
					type='text'
					value={values.identificationNo}
					name='identificationNo'
					onChange={e => handleMotorChange(e)}
					/>
			</Form.Item>
			<Form.Item name="system" label="System" >
					<Input
					placeholder="Input System"
					type='text'
					value={values.system}
					name='system'
					onChange={e => handleMotorChange(e)}
					/>
			</Form.Item>
			<Form.Item name="subSystem" label="Sub system" >
					<Input 
					placeholder="Input Sub system"
					type='text'
					value={values.subSystem}
					name='subSystem'
					onChange={e => handleMotorChange(e)}
					/>
			</Form.Item>
			</Card>
		</Col>

		<Col xs={24} sm={24} md={12}>
			<Card title=".">
			<Form.Item name="motorTagNo" label="Motor Tag Number" >
					<Input
					placeholder="Input Sub system"
					type='text'
					value={values.motorTagNo}
					name='motorTagNo'
					onChange={e => handleMotorChange(e)}
					/>
			</Form.Item>
			<Form.Item name="tagDescription" label="Tag Description" >
					<Input
					placeholder="Input Tag Description"
					type='text'
					value={values.tagDescription}
					name='tagDescription'
					onChange={e => handleMotorChange(e)}
					/>
			</Form.Item>
			<Form.Item name="motorType" label="Motor Type" >
						<Select className="w-100" placeholder="Motor Type">
							{
								mtype.map(elm => (
									<Option
									key={elm}
									value={values.elm}
									name="motorType"
									onChange={e => handleMotorChange(e)}
									>{elm}</Option>
								))
							}
						</Select>
                </Form.Item>
			</Card>
		</Col>



		<Col xs={24} sm={24} md={24}>
			<Card>
				<Form.Item name="startingTime" label="Staring Time" >
					<Input
					addonAfter="sec"
					placeholder="Input Starting time"
					type='text'
					name='startingTime'
					value={values.startingTime}
					onChange={e => handleMotorChange(e)}
					/>
				</Form.Item>
				<Form.Item name="recordOfRotation" label="Record of Rotation" >
						<Select className="w-100" placeholder="Record of Rotation Select">
							{
								recorOfRotationSelect.map(elm => (
									<Option
									key={elm}
									value={elm}
									name="recordOfRotation"
									onChange={e => handleMotorChange(e)}
									>{elm}</Option>
								))
							}
						</Select>
                </Form.Item>
				<Form.Item name="recordOfSpeed" label="Record Of Speed" >
					<Input
					addonAfter="rpm"
					placeholder="Input Record of Speed"
					type='text'
					value={values.recordOfSpeed}
					name='recordOfSpeed'
					onChange={e => handleMotorChange(e)}
					/>
				</Form.Item>

			</Card>
		</Col>


		{/* Current */}
		
		<Col xs={24} sm={24} md={24}>
			<Card title="Record of Current">
			
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={border}>
						<Col className="gutter-row" span={9} style={borderRight}>
								<div style={{ ...styleTitle}}>
									Time (min)</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									2</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									10</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									20</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									30</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									60</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									90</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									120</div>
							</Col>
						</Row>

						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							<Col className="gutter-row" span={5} offset={4} style={borderRL}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
									Red (R)</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
								size="small"
								name = "rocR2"
								onChange={e => handleMotorChange(e)}
								/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									<Input
									size="small"
									name = "rocR10"
									onChange={e => handleMotorChange(e)}
									/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									<Input
									size="small"
									name = "rocR20"
									onChange={e => handleMotorChange(e)}
									/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									<Input
									size="small"
									name="rocR30"
									onChange={e => handleMotorChange(e)}
									/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									<Input
									size="small"
									name="rocR60"
									onChange={e => handleMotorChange(e)}
									/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									<Input
									size="small"
									name="rocR90"
									onChange={e => handleMotorChange(e)}
									/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									<Input
									size="small"
									name="rocR120"
									onChange={e => handleMotorChange(e)}
									/>
								</div>
							</Col>
						</Row>

						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							<Col className="gutter-row" span={4}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Phase (Amp)</div>
							</Col>
							<Col className="gutter-row" span={5} style={borderRL}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
									Yellow (Y)</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "y2"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "y10"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "y20"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "y30"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "y60"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "y90"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "y120"/>
								</div>
							</Col>
						</Row>

						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							{/* <Col className="gutter-row" span={5}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}></div>
							</Col> */}
							<Col className="gutter-row" span={5} offset={4} style={borderRL}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
									Black (B)</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "b2"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "b10"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "b20"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "b30"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "b60"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "b90"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "b120"/>
								</div>
							</Col>
						</Row>
			</Card>
		</Col>

		{/* Temperature */}
		<Col xs={24} sm={24} md={24}>
			<Card title="Record of Temperature">
				
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={border}>
						<Col className="gutter-row" span={9} style={borderRight}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
									Time (min)</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									2</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									10</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									20</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									30</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									60</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									90</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									120</div>
							</Col>
						</Row>

						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							<Col className="gutter-row" span={5} offset={4} style={borderRL}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
									Ambient</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "ambient2"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "ambient10"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "ambient20"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "ambient30"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "ambient60"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "ambient90"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "ambient120"/>
								</div>
							</Col>
						</Row>

						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							<Col className="gutter-row" span={4}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Temperatur (<sup>o</sup>C)</div>
							</Col>
							<Col className="gutter-row" span={5} style={borderRL}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
									Bearing (T<sub>1</sub>)</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "bearing2"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "bearing10"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "bearing20"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "bearing30"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "bearing60"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "bearing90"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Input
									size="small"
									name = "bearing120"/></div>
							</Col>
						</Row>

						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							{/* <Col className="gutter-row" span={5}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}></div>
							</Col> */}
							<Col className="gutter-row" span={5} offset={4} style={borderRL}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
									Frame Drive - End (T<sub>2</sub>)</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "fd2"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "fd10"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "fd20"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Input
									size="small"
									name = "fd30"/></div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "fd60"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "fd90"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "fd120"/>
								</div>
							</Col>
						</Row>
						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							{/* <Col className="gutter-row" span={5}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}></div>
							</Col> */}
							<Col className="gutter-row" span={5} offset={4} style={borderRL}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
									Frame Non Drive - End (T<sub>3</sub>)</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "fnd2"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "fnd10"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "fnd20"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "fnd30"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "fnd60"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "fnd90"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "fnd120"/>
								</div>
							</Col>
						</Row>
				
			</Card>
		</Col>

		{/* Vibration */}
		<Col xs={24} sm={24} md={24}>
			<Card title="Record of Vibration">
				
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={border}>
						<Col className="gutter-row" span={9} style={borderRight}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
									Time (min)</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									2</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									10</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									20</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									30</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									60</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									90</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									120</div>
							</Col>
						</Row>

						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							<Col className="gutter-row" span={5} offset={4} style={borderRL}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
									X<sub>1</sub></div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "ambient2"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "ambient10"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "ambient20"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "ambient30"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "ambient60"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "ambient90"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "ambient120"/>
								</div>
							</Col>
						</Row>

						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							<Col className="gutter-row" span={4}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Vibration (mm/s)</div>
							</Col>
							<Col className="gutter-row" span={5} style={borderRL}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
								X<sub>2</sub></div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "bearing2"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "bearing10"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "bearing20"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "bearing30"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "bearing60"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "bearing90"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Input
									size="small"
									name = "bearing120"/></div>
							</Col>
						</Row>

						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							<Col className="gutter-row" span={5} offset={4} style={borderRL}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
								Y<sub>1</sub></div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "fd2"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "fd10"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "fd20"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Input
									size="small"
									name = "fd30"/></div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "fd60"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "fd90"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "fd120"/>
								</div>
							</Col>
						</Row>
						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							{/* <Col className="gutter-row" span={5}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}></div>
							</Col> */}
							<Col className="gutter-row" span={5} offset={4} style={borderRL}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
								Y<sub>2</sub></div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "fnd2"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "fnd10"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "fnd20"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "fnd30"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "fnd60"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "fnd90"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "fnd120"/>
								</div>
							</Col>
						</Row>
						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							{/* <Col className="gutter-row" span={5}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}></div>
							</Col> */}
							<Col className="gutter-row" span={5} offset={4} style={borderRL}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
								Z<sub>1</sub>  Z<sub>2</sub></div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "fnd2"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "fnd10"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "fnd20"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "fnd30"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "fnd60"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "fnd90"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input
									size="small"
									name = "fnd120"/>
								</div>
							</Col>
						</Row>
			</Card>
		</Col>

		{/* Record of Noise */}
		<Col xs={24} sm={24} md={24}>
			<Card title="Record of noise">
				

			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={border}>
						<Col className="gutter-row" span={9} style={borderRight}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
									Time (min)</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									2</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									10</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									20</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									30</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									60</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									90</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									120</div>
							</Col>
						</Row>

			<Row gutter={{ xs: 11, sm: 16, md: 24, lg: 32 }}>
						<Col className="gutter-row" span={9} style={borderRight}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Sound Level (dB)</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Input 
								size="small"
								name = "sound2" />
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									<Input
									size="small"
									name = "sound10"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									<Input
									size="small"
									name = "sound20" />
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									<Input
									size="small"
									name = "sound30"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									<Input
									size="small"
									name = "sound60" />
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									<Input
									size="small"
									name = "sound90"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									<Input
									size="small"
									name = "sound120"/>
								</div>
							</Col>
						</Row>


			</Card>
		</Col>

		

		{/* Test Instrument Tools */}
		<Col xs={24} sm={24} md={24}>
			<Card title="Test instrument / Tools">
							
				<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={border}>
							<Col className="gutter-row" span={6} style={borderRight}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
									Parameter</div>
							</Col>
							<Col className="gutter-row" span={6}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
									Manufacturer</div>
							</Col>
							<Col className="gutter-row" span={6}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
									Type</div>
							</Col>
							<Col className="gutter-row" span={6}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
									Range</div>
							</Col>
				</Row>


				<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={border}>
							<Col className="gutter-row" span={6} style={borderRight}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
									Speed</div>
							</Col>
							<Col className="gutter-row" span={6}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
								<Input
									size="small"
									name = "speedM"/>	
								</div>
							</Col>
							<Col className="gutter-row" span={6}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
								<Input
									size="small"
									name = "speedT"/>
								</div>
							</Col>
							<Col className="gutter-row" span={6}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
								<Input
									size="small"
									name = "speedR"/>
								</div>
							</Col>
				</Row>

				<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={border}>
							<Col className="gutter-row" span={6} style={borderRight}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
									Ampere</div>
							</Col>
							<Col className="gutter-row" span={6}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
								<Input
									size="small"
									name = "ampereM"/>
								</div>
							</Col>
							<Col className="gutter-row" span={6}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
								<Input
									size="small"
									name = "ampereT"/>
								</div>
							</Col>
							<Col className="gutter-row" span={6}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
								<Input
									size="small"
									name = "ampereR"/>
								</div>
							</Col>
				</Row>

				<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={border}>
							<Col className="gutter-row" span={6} style={borderRight}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
									Temperature</div>
							</Col>
							<Col className="gutter-row" span={6}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
								<Input
									size="small"
									name = "temperatureM"/>
								</div>
							</Col>
							<Col className="gutter-row" span={6}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
								<Input
									size="small"
									name = "temperatureT"/>
								</div>
							</Col>
							<Col className="gutter-row" span={6}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
								<Input
									size="small"
									name = "temperatureR"/>
								</div>
							</Col>
				</Row>

				<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							<Col className="gutter-row" span={6} style={borderRight}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
									Vibration</div>
							</Col>
							<Col className="gutter-row" span={6}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
								<Input
									size="small"
									name = "vibrationM"/>
								</div>
							</Col>
							<Col className="gutter-row" span={6}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
								<Input
									size="small"
									name = "vibrationT"/>
								</div>
							</Col>
							<Col className="gutter-row" span={6}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
								<Input
									size="small"
									name = "vibrationR"/>
								</div>
							</Col>
				</Row>
						
			</Card>
		</Col>

		

		{/* --------------- */}

			<Col xs={24} sm={24} md={24}>
				<Card title="Remarks">
					<Form.Item name="remarks" >
						<Input.TextArea placeholder='Input Remarks' rows={4} />
					</Form.Item>
				</Card>
			</Col>

		
	</Row>
	)
}

export default MotorSoloRunField

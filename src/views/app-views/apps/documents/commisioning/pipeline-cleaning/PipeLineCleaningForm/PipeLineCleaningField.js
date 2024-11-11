import React from 'react'
import { Input, Row, Col, Card, Form, Select, DatePicker, Space} from 'antd';
// import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
// import { method } from 'lodash';
// import { ImageSvg } from 'assets/svg/icon';
// import CustomIcon from 'components/util-components/CustomIcon'
// import { LoadingOutlined } from '@ant-design/icons';

// const { Dragger } = Upload;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

const style = { padding: '6px 0' };
const styleTitle = { padding: '6px 0', fontWeight: 'bold'};
// const styleTitle2 = { padding: '6px 0', fontWeight: 'bold', justifyContent: 'center'};
const borderBot = { display: 'flex' , justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid #c0c0c4'};
const borderRight = { display: 'flex' ,justifyContent: 'center', alignItems: 'center', borderRight: '1px solid #c0c0c4'};
const borderLeft = { display: 'flex' , justifyContent: 'center', alignItems: 'center', borderLeft: '1px solid #c0c0c4'};
// const borderTop = { display: 'flex' ,justifyContent: 'center', alignItems: 'center', borderTop: '1px solid #c0c0c4'};
const borderTl = { display: 'flex' ,justifyContent: 'center', alignItems: 'center', borderTop: '1px solid #c0c0c4',  borderLeft: '1px solid #c0c0c4'};


function onChange(date, dateString) {
	console.log(date, dateString);
  }


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
			message: 'Please enter owner name',
		}
	],
	identificationNo: [
		{
			required: true,
			message: 'Please enter identifination number',
		}
	],
	method: [
		{
			required: true,
			message: 'Please enter method'
		}
	],
	system: [
		{
			required: true,
			message: 'Please enter system'
		}
	],
	subSystem: [
		{
			required: true,
			message: 'Please enter subsystem'
		}
	],
	sheet: [
		{
			required: true,
			message: 'Please enter sheet'
		}
	],
	reqToAirBlowingDate: [
		{
			required: true,
			message: 'Please enter request to air blowing date'
		}
	],
	medium: [
		{
			required: true,
			message: 'Please enter medium'
		}
	],
	flow: [
		{
			required: true,
			message: 'Please enter flow'
		}
	],
	pressure: [
		{
			required: true,
			message: 'Please enter pressure'
		}
	],
	permissionToAirBlowing: [
		{
			required: true,
			message: 'Please enter permission to air blowing'
		}
	],
	nameAirBlowing: [
		{
			required: true,
			message: 'Please enter name'
		}
	],
	datePermissionAirBlowing: [
		{
			required: true,
			message: 'Please enter date permission to air blowing'
		}
	],
	dateAirBlowing: [
		{
			required: true,
			message: 'Please enter air blowing date'
		}
	],
	airBlowingDuration: [
		{
			required: true,
			message: 'Please enter air blowing duration'
		}
	],
	pwi: [
		{
			required: true,
			message: 'Please enter pipe work index'
		}
	],
	comments: [
		{
			required: true,
			message: 'Please enter comments'
		}
	]
}
const { Option } = Select;


const mtype = ['Horizontal', 'Vertical']
const projectSelect = ['Project1', 'Project2', 'Project3', 'Project4', 'Project5']
const ownerSelect = ['Owner1', 'Owner2', 'Owner3', 'Owner4', 'Owner5']
const recorOfRotationSelect = ['Clock-Wise', 'Counter Clock-Wise (Viewed from Drive End)']

const selectBefore = (
	<Select defaultValue="KP" style={{ width: 90 }}>
	  <Option value="KP">KP</Option>
	  <Option value="to KP">to KP</Option>
	</Select>
  );
  const selectAfter = (
	<Select defaultValue="Joint" style={{ width: 80 }}>
	  <Option value="Joint">Joint</Option>
	  <Option value="(location)">location</Option>
	  <Option value="sec">sec</Option>
	  <Option value="rpm">rpm</Option>
	  <Option value="m3">scfm, m<sup>3</sup>/h</Option>
	</Select>
  );

const PipeLineCleaningField = props => (
	<Row gutter={16}>
		{/* Section 1 */}
		<Col xs={24} sm={24} md={24}>
			<Card title="PipeLine Cleaning Form">
				<Form.Item name="projectName" label="Project Name" rules={rules.projectName}>
						<Select className="w-100" placeholder="Select Project">
							{
								projectSelect.map(elm => (
									<Option key={elm} value={elm}>{elm}</Option>
								))
							}
						</Select>
				</Form.Item>
				<Form.Item name="owner" label="Owner" rules={rules.owner}>
						<Select className="w-100" placeholder="Select Owner">
							{
								ownerSelect.map(elm => (
									<Option key={elm} value={elm}>{elm}</Option>
								))
							}
						</Select>
                </Form.Item>
			</Card>
		</Col>

		<Col xs={24} sm={24} md={16}>
			<Card title=" ">
			<Form.Item name="hydrotestPackage" label="HYDROTEST PACKAGE" rules={rules.identificationNo}>
					<Input placeholder="Input Hydrotest Package" />
			</Form.Item>
			<Form.Item name="pipeJointNo" label="Pipe Joint No" rules={rules.system}>
			<Input.Group compact>
					<Input
						className="site-input-split"
						style={{
						width: 40,
						borderLeft: 0,
						borderRight: 0,
						pointerEvents: 'none',
						textAlign: 'center',
						}}
						placeholder="KP"
						disabled
					/>
					<Input style={{ 
					width: 100,
					textAlign: 'center'
					}}
					placeholder="..........." />
					<Input
						className="site-input-split"
						style={{
						width: 60,
						borderLeft: 0,
						borderRight: 0,
						pointerEvents: 'none',
						textAlign: 'center',
						}}
						placeholder="Joint"
						disabled
					/>
					<Input
						className="site-input-right"
						style={{
						width: 100,
						textAlign: 'center',
						}}
						placeholder="..........."
					/>

					<Input
						className="site-input-split"
						style={{
						width: 125,
						borderLeft: 0,
						borderRight: 0,
						borderTop: 0,
						borderBottom: 0,
						pointerEvents: 'none',
						textAlign: 'center',
						}}
						placeholder="      "
						
					/>

					<Input
						className="site-input-split"
						style={{
						width: 70,
						borderLeft: 0,
						borderRight: 0,
						pointerEvents: 'none',
						textAlign: 'center',
						}}
						placeholder="to KP"
						disabled
					/>
					<Input style={{ 
					width: 100,
					textAlign: 'center'
					}}
					placeholder="..........." />
					<Input
						className="site-input-split"
						style={{
						width: 60,
						borderLeft: 0,
						borderRight: 0,
						pointerEvents: 'none',
						textAlign: 'center',
						}}
						placeholder="Joint"
						disabled
					/>
					<Input
						className="site-input-right"
						style={{
						width: 100,
						textAlign: 'center',
						}}
						placeholder="..........."
					/>
					
						 
					
					
			</Input.Group>		
			</Form.Item>
			<Form.Item name="pigDirectionFrom" label="Pig Direction From" rules={rules.subSystem}>
					<Input placeholder="Input Pig Direction From" />
			</Form.Item>
			<Form.Item name="pipeDiameter" label="Pip Diameter" rules={rules.subSystem}>
					<Input placeholder="Input Pip Diameter" />
			</Form.Item>
			</Card>
		</Col>



		<Col xs={24} sm={24} md={8}>
			<Card title=" ">
			<Form.Item name="reportNo" label="Report Nomor" rules={rules.motorTagNo}>
					<Input placeholder="Input Report Nomor" />
			</Form.Item>
			<Form.Item name="date" label="Date" rules={rules.tagDescription}>
				<DatePicker onChange={onChange} />
			</Form.Item>
			</Card>
		</Col>



		<Col xs={24} sm={24} md={24}>
			<Card>
				<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} >
						<Col className="gutter-row" span={4} style={borderRight}>
							<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
							</div>
						</Col>
						<Col className="gutter-row" span={4} style={borderRight}>
							<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
						 	Wall Thickness (mm)</div>
						</Col>
						<Col className="gutter-row" span={4} style={borderRight}>
							<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
							ID (mm)</div>
						</Col>
						<Col className="gutter-row" span={4}>
							<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
							</div>
						</Col>
						<Col className="gutter-row" span={4}>
							<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
							</div>
						</Col>
						<Col className="gutter-row" span={4}>
							<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
							</div>
						</Col>
				</Row>


				<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={borderBot}>
							<Col className="gutter-row" span={4}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
									OD (mm)</div>
							</Col>
							<Col className="gutter-row" span={2} style={borderTl}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
									MIN</div>
							</Col>
							<Col className="gutter-row" span={2} style={borderTl}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
									MAX</div>
							</Col>
							<Col className="gutter-row" span={2} style={borderTl}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
									MIN</div>
							</Col>
							<Col className="gutter-row" span={2} style={borderTl}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
									MAX</div>
							</Col>
							<Col className="gutter-row" span={4} style={borderLeft}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
									Pipe Grade</div>
							</Col>
							<Col className="gutter-row" span={4} style={borderLeft}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
									Length (Km)</div>
							</Col>
							<Col className="gutter-row" span={4}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
									Volume (M<sup>3</sup>)</div>
							</Col>
				</Row>

				<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							<Col className="gutter-row" span={4}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
								<Input
									size="small"
									name = "odMM"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2} style={borderLeft}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
								<Input
									size="small"
									name = "minWt"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2} style={borderLeft}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
								<Input
									size="small"
									name = "maxWt"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2} style={borderLeft}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
								<Input
									size="small"
									name = "minIdmm"/>
								</div>
							</Col>
							<Col className="gutter-row" span={2} style={borderLeft}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
								<Input
									size="small"
									name = "maxIdmm"/>
								</div>
							</Col>
							<Col className="gutter-row" span={4} style={borderLeft}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
								<Input
									size="small"
									name = "pipeGrade"/>	
								</div>
							</Col>
							<Col className="gutter-row" span={4} style={borderLeft}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
								<Input
									size="small"
									name = "lEngth"/>
								</div>
							</Col>
							<Col className="gutter-row" span={4} style={borderLeft}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
								<Input
									size="small"
									name = "volumE"/>	
								</div>
							</Col>
				</Row>
			</Card>
		</Col>


		{/* Compressor */}
		<Col xs={24} sm={24} md={8}>
			<Card title="Compressor">
			<Form.Item name="brandComp" label="Brand" rules={rules.motorTagNo}>
					<Input placeholder="Input Brand" />
			</Form.Item>
			<Form.Item name="model" label="Model" rules={rules.motorTagNo}>
					<Input placeholder="Input Model" />
			</Form.Item>
			<Form.Item name="outputFlowrate" label="Output Flowrate" rules={rules.startingTime}>
					<Input addonAfter='scfm, m³/h' placeholder="Input Output Flowrate" />
			</Form.Item>
			<Form.Item name="maxPreasure" label="Max Preasure" rules={rules.startingTime}>
					<Input addonAfter='psi,bar' placeholder="Input MaxPreasure" />
			</Form.Item>
			</Card>
		</Col>

		{/* Pressure Gauge */}
		<Col xs={24} sm={24} md={8}>
			<Card title="Pressure Gauge">
				<Form.Item name="brandPreasurGaug" label="Brand" >
						<Input placeholder="Input Brand" />
				</Form.Item>
				<Form.Item name="serialNo" label="Serial No" >
					<Input placeholder="Input Serial No" />
				</Form.Item>
				<Form.Item name="range" label="Range" >
					<Input.Group compact>
						<Input style={{ 
						width: 142,
						textAlign: 'center'
						}}
						placeholder="psi" />
						<Input
							className="site-input-split"
							style={{
							width: 60,
							borderLeft: 0,
							borderRight: 0,
							pointerEvents: 'none',
							textAlign: 'center',
							}}
							placeholder="to"
							disabled
						/>
						<Input
							className="site-input-right"
							style={{
							width: 142,
							textAlign: 'center',
							}}
							placeholder="psi"
						/>
					</Input.Group>
				</Form.Item>
				<Form.Item name="calibrationPreasurGaug" label="Calibration" >
					<Input placeholder="Input Calibration" />
				</Form.Item>
			</Card>
		</Col>
		
		{/* Pressure Recorder */}
		<Col xs={24} sm={24} md={8}>
			<Card title="Pressure Recorder">
				<Form.Item name="brandPreasureRecord" label="Brand">
					<Input placeholder="Input Brand" />
				</Form.Item>
				<Form.Item name="serialNoPreasureRecord" label="Serial No">
					<Input placeholder="Input Serial No" />
				</Form.Item>
				<Form.Item name="rangeRecord" label="Range" >
					<Input placeholder="psi" />
				</Form.Item>
				<Form.Item name="calibrationRecord" label="Calibration">
					<Input placeholder="Input Calibration" />
				</Form.Item>
			</Card>
		</Col>


		{/* Vibration */}
		<Col xs={24} sm={24} md={24}>
			<Card title="Record of Vibration">
					<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							<Col className="gutter-row" span={4}  offset={12}  style={borderLeft}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
									Start
								</div>
							</Col>
							<Col className="gutter-row" span={4} style={borderLeft}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
									End
								</div>
							</Col>
							<Col className="gutter-row" span={4} style={borderLeft}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
									Pressure (psi)
								</div>
							</Col>
					</Row>

					<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={borderBot}>
							<Col className="gutter-row" span={8}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
									Pig Type</div>
							</Col>
							<Col className="gutter-row" span={4} style={borderLeft} >
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									Run No
								</div>
							</Col>
							<Col className="gutter-row" span={2} style={borderLeft}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
									Date
								</div>
							</Col>
							<Col className="gutter-row" span={2} style={borderLeft}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									Time
								</div>
							</Col>
							<Col className="gutter-row" span={2} style={borderLeft}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									Date
								</div>
							</Col>
							<Col className="gutter-row" span={2} style={borderLeft}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									Time
								</div>
							</Col>
							<Col className="gutter-row" span={2} style={borderLeft}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
									Min
								</div>
							</Col>
							<Col className="gutter-row" span={2} style={borderLeft}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									Max
								</div>
							</Col>
					</Row>
			</Card>
		</Col>

		

		
		

		{/* --------------- */}

			<Col xs={24} sm={24} md={24}>
				<Card title="Remarks">
					<Form.Item name="remarks" rules={rules.remarks}>
						<Input.TextArea placeholder='Input Remarks' rows={4} />
					</Form.Item>
				</Card>
			</Col>

		
	</Row>
)

export default PipeLineCleaningField

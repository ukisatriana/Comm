import React, { Component } from 'react'
import { PrinterOutlined } from '@ant-design/icons';
import { Card, Button, Row, Col, Divider } from 'antd';
import { invoiceData } from './invoiceData';

// const { Column } = Table;
const style = { padding: '6px 0' };
const styleTitle = { padding: '6px 0', fontWeight: 'bold'};
const styleTitle2 = { padding: '6px 0', fontWeight: 'bold', justifyContent: 'center'};
const border = { display: 'flex' ,borderBottom: '1px solid #c0c0c4'};
const borderBot = { display: 'flex' , justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid #c0c0c4'};
const borderRight = { display: 'flex' ,justifyContent: 'center', alignItems: 'center', borderRight: '1px solid #c0c0c4'};
const borderLeft = { display: 'flex' , justifyContent: 'center', alignItems: 'center', borderLeft: '1px solid #c0c0c4'};
const borderRL = { display: 'flex' ,justifyContent: 'center', alignItems: 'center', borderRight: '1px solid #c0c0c4', borderLeft: '1px solid #c0c0c4'};
const borderTl = { display: 'flex' ,justifyContent: 'center', alignItems: 'center', borderTop: '1px solid #c0c0c4',  borderLeft: '1px solid #c0c0c4'};


export class MotorSoloRunDetail extends Component {

	total() {
		let total = 0;
		invoiceData.forEach((elm) => {
			total += elm.price;
		})
		return total
	}

	render() {
		return (
            <div className="container">
				<Card>
					<div className="d-md-flex justify-content-md-between">
						<div>
							<img src="/img/logoW.png" alt=""/>
							{/* <address>
								<p>
									<span className="font-weight-semibold text-dark font-size-md">Emilus, Inc.</span><br />
									<span>9498 Harvard Street</span><br />
									<span>Fairfield, Chicago Town 06824</span><br />
									<abbr className="text-dark" title="Phone">Phone:</abbr>
									<span>(123) 456-7890</span>
								</p>
							</address> */}
						</div>
                            <div className="d-md- text-center">
                                <h2 className="mb-1 font-weight-bold">Project Name</h2>
                                    <p>
                                    <span className="font-weight-bold text-dark font-size-md">PIPING PRE-COMMISSIONING TEST SHEET</span><br />
                                    <span className="font-weight-bold text-dark font-size-md">MOTOR SOLO RUN</span><br />
                                    </p>
                            </div>
                        <div>
							<img src="/img/logoW.png" alt=""/>
						</div>
					</div>
                    {/* --------- */}
					<div className="mt-2">
						{/* <Table dataSource={invoiceData} pagination={false}  className="mb-5">
							<Column  title="Identification No" dataIndex="key" key="key"/>
							<Column  title="Product" dataIndex="product" key="product"/>
							<Column title="Quantity" dataIndex="quantity" key="quantity"/>
						</Table> */}
								
			<Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
			</Divider>
						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							<Col className="gutter-row" span={4}>
								<div style={styleTitle} >Identification Number :</div>
							</Col>
							<Col className="gutter-row" span={11}>
								<div style={{ ...style, display: 'flex', justifyContent:'start', alignItems: 'start' }}>1 januari 2022</div>
							</Col>
							<Col className="gutter-row" span={3}>
								<div style={{ ...styleTitle2, display: 'flex', justifyContent: 'end', alignItems: 'end' }}>Motor Tag No :</div>
							</Col>
							<Col className="gutter-row" span={6}>
								<div style={style}>System Air Blowing</div>
							</Col>
						</Row>
						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							<Col className="gutter-row" span={4}>
								<div style={styleTitle}>System :</div>
							</Col>
							<Col className="gutter-row" span={11}>
								<div style={style}>Method Air Blowing</div>
							</Col>
							<Col className="gutter-row" span={3}>
								<div style={{ ...styleTitle2, display: 'flex', justifyContent: 'end', alignItems: 'end' }}>Tag Description :</div>
							</Col>
							<Col className="gutter-row" span={6}>
								<div style={style}>SubSystem Air Blowing</div>
							</Col>
						</Row>
						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
								<Col className="gutter-row" span={4}>
									<div style={styleTitle}>Subsystem :</div>
								</Col>
								<Col className="gutter-row" span={11}>
									<div style={style}>Method Air Blowing</div>
								</Col>

								<Col className="gutter-row" span={3}>
									<div style={{ ...styleTitle2, display: 'flex', justifyContent: 'end', alignItems: 'end' }}>Motor Type :</div>
								</Col>
								<Col className="gutter-row" span={6}>
									<div style={style}>Isi Sheet</div>
								</Col>
						</Row>
						<Divider orientation="center" style={{ color: '#333', fontWeight: 'normal' }}>
						</Divider>

						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							<Col className="gutter-row" span={4}>
								<div style={styleTitle} >Starting Time :</div>
							</Col>
							<Col className="gutter-row" span={20} >
								<div style={{ ...style, display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start' }} >1 januari 2022</div>
							</Col>
							<Col className="gutter-row" span={4}>
								<div style={styleTitle}>Record of Rotation :</div>
							</Col>
							<Col className="gutter-row" span={20}>
								<div style={style}>Misi minsi tetangga</div>
							</Col>
							<Col className="gutter-row" span={4}>
								<div style={styleTitle}>Record of Speed :</div>
							</Col>
							<Col className="gutter-row" span={20}>
								<div style={style}>Speed</div>
							</Col>
							<Col className="gutter-row" span={4}>
								<div style={styleTitle}>Record of Current :</div>
							</Col>
							<Col className="gutter-row" span={20}>
								<div style={style}>Misi minsi tetangga</div>
							</Col>
						</Row>

			<Divider orientation="center" style={{ color: '#333', fontWeight: 'bold', fontSize: '14px'}}>Record of Current
			</Divider>
						
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
									Red (R)</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>2</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>10</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>20</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>30</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>60</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>90</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>120</div>
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
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>2</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>10</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>20</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>30</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>60</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>90</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>120</div>
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
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>2</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>10</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>20</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>30</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>60</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>90</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>120</div>
							</Col>
						</Row>

			<Divider orientation="center" style={{ color: '#333', fontWeight: 'bold', fontSize: '14px' }}>Record of Temperature
			</Divider>

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
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>2</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>10</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>20</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>30</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>60</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>90</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>120</div>
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
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>2</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>10</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>20</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>30</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>60</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>90</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>120</div>
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
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>2</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>10</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>20</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>30</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>60</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>90</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>120</div>
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
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>2</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>10</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>20</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>30</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>60</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>90</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>120</div>
							</Col>
						</Row>


			<Divider orientation="center" style={{ color: '#333', fontWeight: 'bold', fontSize: '14px' }}>Record of Vibration
			</Divider>

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
							<Col className="gutter-row" span={5} offset={4}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRight: '1px solid #c0c0c4', borderLeft: '1px solid #c0c0c4'}}>
									Ambient</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>2</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>10</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>20</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>30</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>60</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>90</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>120</div>
							</Col>
						</Row>

						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							
							<Col className="gutter-row" span={5} offset={4}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRight: '1px solid #c0c0c4', borderLeft: '1px solid #c0c0c4'}}>
									X<sub>1</sub></div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>2</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>10</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>20</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>30</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>60</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>90</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>120</div>
							</Col>
						</Row>

						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							{/* <Col className="gutter-row" span={5}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}></div>
							</Col> */}
							<Col className="gutter-row" span={5} offset={4}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRight: '1px solid #c0c0c4', borderLeft: '1px solid #c0c0c4'}}>
								X<sub>2</sub></div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>2</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>10</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>20</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>30</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>60</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>90</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>120</div>
							</Col>
						</Row>
						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
						<Col className="gutter-row" span={4}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Vibration (mm/s)</div>
							</Col>
							<Col className="gutter-row" span={5}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRight: '1px solid #c0c0c4', borderLeft: '1px solid #c0c0c4'}}>
								Y<sub>1</sub></div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>2</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>10</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>20</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>30</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>60</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>90</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>120</div>
							</Col>
						</Row>
						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							{/* <Col className="gutter-row" span={5}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}></div>
							</Col> */}
							<Col className="gutter-row" span={5} offset={4}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRight: '1px solid #c0c0c4', borderLeft: '1px solid #c0c0c4'}}>
								Y<sub>2</sub></div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>2</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>10</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>20</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>30</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>60</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>90</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>120</div>
							</Col>
						</Row>
						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							{/* <Col className="gutter-row" span={5}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}></div>
							</Col> */}
							<Col className="gutter-row" span={5} offset={4}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRight: '1px solid #c0c0c4', borderLeft: '1px solid #c0c0c4'}}>
								Z<sub>1</sub>, Z<sub>2</sub></div> 
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>2</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>10</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>20</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>30</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>60</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>90</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>120</div>
							</Col>
						</Row>

			<Divider orientation="center" style={{ color: '#333', fontWeight: 'bold', fontSize: '14px' }}>Record of Noise
			</Divider>

			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={border}>
						<Col className="gutter-row" span={9}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRight: '1px solid #c0c0c4'}}>
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
						<Col className="gutter-row" span={9}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRight: '1px solid #c0c0c4'}}>Sound Level (dB)</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>2</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>10</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>20</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>30</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>60</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>90</div>
							</Col>
							<Col className="gutter-row" span={2}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>120</div>
							</Col>
						</Row>

				<Divider orientation="center" style={{ color: '#333', fontWeight: 'bold', fontSize: '14px' }}>Test Instrument / Tools
				</Divider>
						
				<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={border}>
							<Col className="gutter-row" span={6}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRight: '1px solid #c0c0c4'}}>
									Parameter</div>
							</Col>
							<Col className="gutter-row" span={6}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRight: '1px solid #c0c0c4'}}>
									Manufacturer</div>
							</Col>
							<Col className="gutter-row" span={6}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRight: '1px solid #c0c0c4'}}>
									Type</div>
							</Col>
							<Col className="gutter-row" span={6}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
									Range</div>
							</Col>
				</Row>


				<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={border}>
							<Col className="gutter-row" span={6}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRight: '1px solid #c0c0c4'}}>
									Speed</div>
							</Col>
							<Col className="gutter-row" span={6}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRight: '1px solid #c0c0c4'}}>
									2</div>
							</Col>
							<Col className="gutter-row" span={6}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRight: '1px solid #c0c0c4'}}>
									10</div>
							</Col>
							<Col className="gutter-row" span={6}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
									20</div>
							</Col>
				</Row>

				<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={border}>
							<Col className="gutter-row" span={6}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRight: '1px solid #c0c0c4'}}>
									Ampere</div>
							</Col>
							<Col className="gutter-row" span={6}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRight: '1px solid #c0c0c4'}}>
									2</div>
							</Col>
							<Col className="gutter-row" span={6}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRight: '1px solid #c0c0c4'}}>
									10</div>
							</Col>
							<Col className="gutter-row" span={6}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
									20</div>
							</Col>
				</Row>

				<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={border}>
							<Col className="gutter-row" span={6}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRight: '1px solid #c0c0c4'}}>
									Temperature</div>
							</Col>
							<Col className="gutter-row" span={6}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRight: '1px solid #c0c0c4'}}>
									2</div>
							</Col>
							<Col className="gutter-row" span={6}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRight: '1px solid #c0c0c4'}}>
									10</div>
							</Col>
							<Col className="gutter-row" span={6}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
									20</div>
							</Col>
				</Row>

				<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={border}>
							<Col className="gutter-row" span={6}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRight: '1px solid #c0c0c4'}}>
									Vibration</div>
							</Col>
							<Col className="gutter-row" span={6}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRight: '1px solid #c0c0c4'}}>
									2</div>
							</Col>
							<Col className="gutter-row" span={6}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRight: '1px solid #c0c0c4'}}>
									10</div>
							</Col>
							<Col className="gutter-row" span={6}>
								<div style={{ ...styleTitle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
									20</div>
							</Col>
				</Row>

				<Divider orientation="center" style={{ color: '#333', fontWeight: 'bold', fontSize: '14px' }}></Divider>



						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							<Col className="gutter-row" span={2}>
								<div style={styleTitle} >Remark :</div>
							</Col>
							<Col className="gutter-row" span={22}>
								<div style={style} >Isi Remark</div>
							</Col>
						</Row>

						
					</div>
					<hr className="d-print-none"/>
					<div className="text-right d-print-none">
						<Button type="primary" onClick={() => window.print()}>
							<PrinterOutlined  type="printer" />
							<span className="ml-1">Print</span>
						</Button>
					</div>
				</Card>
			</div>
        );
	}
}

export default MotorSoloRunDetail



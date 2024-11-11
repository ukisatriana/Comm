import React, { Component } from 'react'
import { PrinterOutlined } from '@ant-design/icons';
import { Card, Button, Row, Col, Divider } from 'antd';
import { invoiceData } from './invoiceData';

// const { Column } = Table;
const style = { padding: '6px 0' };
const styleTitle = { padding: '6px 0', fontWeight: 'bold'};
const styleTitle2 = { padding: '6px 0', fontWeight: 'bold', justifyContent: 'center'};

export class WaterFlushingDetail extends Component {

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
									<abbr className="text- dark" title="Phone">Phone:</abbr>
									<span>(123) 456-7890</span>
								</p>
							</address> */}
						</div>
                            <div className="d-md- text-center">
                                <h2 className="mb-1 font-weight-bold">Project Name</h2>
                                    <p>
                                    <span className="font-weight-bold font-size-md">PIPING PRE-COMMISSIONING TEST SHEET</span><br />
                                    <span className="font-weight-bold font-size-md">WATER FLUSHING</span><br />
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
								<div style={{ ...styleTitle2, display: 'flex', justifyContent: 'end', alignItems: 'end' }}>System :</div>
							</Col>
							<Col className="gutter-row" span={6}>
								<div style={style}>System Water Flushing</div>
							</Col>
						</Row>
						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							<Col className="gutter-row" span={4}>
								<div style={styleTitle}>Method :</div>
							</Col>
							<Col className="gutter-row" span={11}>
								<div style={style}>Method Water Flushing</div>
							</Col>
							<Col className="gutter-row" span={3}>
								<div style={{ ...styleTitle2, display: 'flex', justifyContent: 'end', alignItems: 'end' }}>SubSystem :</div>
							</Col>
							<Col className="gutter-row" span={6}>
								<div style={style}>SubSystem Water Flushing</div>
							</Col>
						</Row>
						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
								<Col className="gutter-row" span={3} offset={15}>
									<div style={{ ...styleTitle2, display: 'flex', justifyContent: 'end', alignItems: 'end' }}>Sheet :</div>
								</Col>
								<Col className="gutter-row" span={6}>
									<div style={style}>Isi Sheet</div>
								</Col>
						</Row>
						<Divider orientation="center" style={{ color: '#333', fontWeight: 'normal' }}>
						</Divider>

						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							<Col className="gutter-row" span={4}>
								<div style={styleTitle} >Request to Water Flushing Date :</div>
							</Col>
							<Col className="gutter-row" span={4}>
								<div style={style} align="left">1 januari 2022</div>
							</Col>
							<Col className="gutter-row" span={4}>
								<div style={styleTitle}>Permission to Water Flushing :</div>
							</Col>
							<Col className="gutter-row" span={4}>
								<div style={style}>Misi minsi tetangga</div>
							</Col>
							<Col className="gutter-row" span={4}>
								<div style={{ ...styleTitle2, display: 'flex', justifyContent: 'end', alignItems: 'end' }}>Water Flushing Date :</div>
							</Col>
							<Col className="gutter-row" span={4}>
								<div style={style}>Misi misi tetangga</div>
							</Col>

							{/* --------------- */}

							<Col className="gutter-row" span={4}>
								<div style={styleTitle} >Medium :</div>
							</Col>
							<Col className="gutter-row" span={4}>
								<div style={style} align="left">Methodologi</div>
							</Col>
							<Col className="gutter-row" span={4}>
								<div style={styleTitle}>Name :</div>
							</Col>
							<Col className="gutter-row" span={4}>
								<div style={style}>Nama Nama</div>
							</Col>
							<Col className="gutter-row" span={4}>
								<div style={{ ...styleTitle2, display: 'flex', justifyContent: 'end', alignItems: 'end' }}>Water Flushing Duration :</div>
							</Col>
							<Col className="gutter-row" span={4}>
								<div style={style}>Misi misi tetangga</div>
							</Col>

							{/* ---------------- */}

							<Col className="gutter-row" span={4}>
								<div style={styleTitle}>Flow :</div>
							</Col>
							<Col className="gutter-row" span={4}>
								<div style={style}>See Mark Up Drawing</div>
							</Col>
							<Col className="gutter-row" span={4}>
								<div style={styleTitle}>Date :</div>
							</Col>
							<Col className="gutter-row" span={12}>
								<div style={style}>12 januari 2022</div>
							</Col>
							<Col className="gutter-row" span={4}>
								<div style={styleTitle}>Preassure :</div>
							</Col>
							<Col className="gutter-row" span={20}>
								<div style={style}>Tekanan Banget</div>
							</Col>
							<Col className="gutter-row" span={4}>
								<div style={styleTitle}>Temp :</div>
							</Col>
							<Col className="gutter-row" span={20}>
								<div style={style}>Temperatur ini mah</div>
							</Col>
						</Row>

						<Divider orientation="center" style={{ color: '#333', fontWeight: 'bold' }}>
						Pipe Work Index</Divider>
						
						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							<Col className="gutter-row" span={8}>
									<div style={{ ...styleTitle2, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
										Line No.
									</div>
							</Col>
							<Col className="gutter-row" span={8}>
									<div style={{ ...styleTitle2, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
										P&ID No.
									</div>
							</Col>
							<Col className="gutter-row" span={8}>
									<div style={{ ...styleTitle2, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
										Remark
									</div>
							</Col>
						</Row>
						<Row gutter={[16, 24]}>
								<Col className="gutter-row" span={8}>
									<div style={{ ...style, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >col-6</div>
								</Col>
								<Col className="gutter-row" span={8}>
									<div style={{ ...style, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >col-6</div>
								</Col>
								<Col className="gutter-row" span={8}>
									<div style={{ ...style, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >col-6</div>
								</Col>
						</Row>

						<Divider orientation="center" style={{ color: '#333', fontWeight: 'bold' }}>
						Comments</Divider>

						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							<Col className="gutter-row" span={24}>
								<div style={style} >Komentar</div>
							</Col>
						</Row>

						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							<Col className="gutter-row" span={2}>
								<div style={styleTitle} >Remark :</div>
							</Col>
							<Col className="gutter-row" span={22}>
								<div style={style} >Isi Remark</div>
							</Col>
						</Row>

						<hr className="d-print-none"/>
						<p className="mt-5" align="center">
							<small>
								WATER FLUSHING HAS BEEN SATISFACTOTILY COMPLTED IN ACCORDANCE WITH THE SPESIFICATION IN PROCEDURE 
							</small>
						</p>
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

export default WaterFlushingDetail


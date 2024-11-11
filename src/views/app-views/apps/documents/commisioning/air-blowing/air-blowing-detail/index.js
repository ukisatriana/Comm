import React, { useEffect, useState } from 'react'
import { PrinterOutlined } from '@ant-design/icons';
import { Card, Button, Row, Col, Divider, message } from 'antd';
import FirestoreService from 'services/FirestoreService';

// const { Column } = Table;
const style = { padding: '6px 0' };
const styleTitle = { padding: '6px 0', fontWeight: 'bold'};
const styleTitle2 = { padding: '6px 0', fontWeight: 'bold', justifyContent: 'center'};

const AirBlowingDetail = () => {

	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch data from Firestore (adjust 'airBlowing' and document ID as necessary)
                const docId = 'rzCx2fCFfDyEFUFTFfPB'; // Replace with the actual document ID you want to fetch
                const document = await FirestoreService.getDocument('airBlowing', docId);
				console.log(document)
                
                // Set the fetched data to state
                setData(document);
            } catch (error) {
                message.error('Error fetching data: ' + error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Loading state
    }

    if (!data) {
        return <div>No data available</div>; // Handle case when no data is available
    }


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
                                <h2 className="mb-1 font-weight-bold">{data.projectName || 'N/A'}</h2>
                                    <p>
                                    <span className="font-weight-bold text-dark font-size-md">PIPING PRE-COMMISSIONING TEST SHEET</span><br />
                                    <span className="font-weight-bold text-dark font-size-md">AIR BLOWING</span><br />
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
								<div style={{ ...style, display: 'flex', justifyContent:'start', alignItems: 'start' }}>{data.identificationNo || 'N/A'}</div>
							</Col>
							<Col className="gutter-row" span={3}>
								<div style={{ ...styleTitle2, display: 'flex', justifyContent: 'end', alignItems: 'end' }}>System :</div>
							</Col>
							<Col className="gutter-row" span={6}>
								<div style={style}>{data.system || 'N/A'}</div>
							</Col>
						</Row>
						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							<Col className="gutter-row" span={4}>
								<div style={styleTitle}>Method :</div>
							</Col>
							<Col className="gutter-row" span={11}>
								<div style={style}>{data.method || 'N/A'}</div>
							</Col>
							<Col className="gutter-row" span={3}>
								<div style={{ ...styleTitle2, display: 'flex', justifyContent: 'end', alignItems: 'end' }}>SubSystem :</div>
							</Col>
							<Col className="gutter-row" span={6}>
								<div style={style}>{data.subSystem || 'N/A'}</div>
							</Col>
						</Row>
						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
								<Col className="gutter-row" span={3} offset={15}>
									<div style={{ ...styleTitle2, display: 'flex', justifyContent: 'end', alignItems: 'end' }}>Sheet :</div>
								</Col>
								<Col className="gutter-row" span={6}>
									<div style={style}>{data.sheet || 'N/A'}</div>
								</Col>
						</Row>
						<Divider orientation="center" style={{ color: '#333', fontWeight: 'normal' }}>
						</Divider>

						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							<Col className="gutter-row" span={4}>
								<div style={styleTitle} >Request to Air Blowing Date :</div>
							</Col>
							<Col className="gutter-row" span={4}>
								<div style={style} align="left">{data.reqToAirBlowingDate || 'N/A'}</div>
							</Col>
							<Col className="gutter-row" span={4}>
								<div style={styleTitle}>Permission to Air Blowing :</div>
							</Col>
							<Col className="gutter-row" span={4}>
								<div style={style}>{data.permissionToAirBlowing || 'N/A'}</div>
							</Col>
							<Col className="gutter-row" span={4}>
								<div style={{ ...styleTitle2, display: 'flex', justifyContent: 'end', alignItems: 'end' }}>Air Blowing Date :</div>
							</Col>
							<Col className="gutter-row" span={4}>
								<div style={style}>{data.airBlowingDate || 'N/A'}</div>
							</Col>

							{/* --------------- */}

							<Col className="gutter-row" span={4}>
								<div style={styleTitle} >Medium :</div>
							</Col>
							<Col className="gutter-row" span={4}>
								<div style={style} align="left">{data.medium || 'N/A'}</div>
							</Col>
							<Col className="gutter-row" span={4}>
								<div style={styleTitle}>Name :</div>
							</Col>
							<Col className="gutter-row" span={4}>
								<div style={style}>{data.nameAirBlowing || 'N/A'}</div>
							</Col>
							<Col className="gutter-row" span={4}>
								<div style={{ ...styleTitle2, display: 'flex', justifyContent: 'end', alignItems: 'end' }}>Air Blowing Duration :</div>
							</Col>
							<Col className="gutter-row" span={4}>
								<div style={style}>{data.airBlowingDuration || 'N/A'}</div>
							</Col>

							{/* ---------------- */}

							<Col className="gutter-row" span={4}>
								<div style={styleTitle}>Flow :</div>
							</Col>
							<Col className="gutter-row" span={4}>
								<div style={style}>see Mark Up Drawing</div>
							</Col>
							<Col className="gutter-row" span={4}>
								<div style={styleTitle}>Date :</div>
							</Col>
							<Col className="gutter-row" span={12}>
								<div style={style}>{data.datePermissionToAirblowing || 'N/A'}</div>
							</Col>
							<Col className="gutter-row" span={4}>
								<div style={styleTitle}>Preassure :</div>
							</Col>
							<Col className="gutter-row" span={20}>
								<div style={style}>{data.preassure || 'N/A'}</div>
							</Col>
							<Col className="gutter-row" span={4}>
								<div style={styleTitle}>Temp :</div>
							</Col>
							<Col className="gutter-row" span={20}>
								<div style={style}>{data.temp || 'N/A'}</div>
							</Col>
						</Row>

						<Divider orientation="center" style={{ color: '#333', fontWeight: 'bold' }}>
						Pipe Work Index</Divider>
						
						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							<Col className="gutter-row" span={8}>
								<div style={{ ...styleTitle2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								Line No.
								</div>
							</Col>
							<Col className="gutter-row" span={8}>
								<div style={{ ...styleTitle2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								P&ID No.
								</div>
							</Col>
							<Col className="gutter-row" span={8}>
								<div style={{ ...styleTitle2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								Remark
								</div>
							</Col>
							</Row>

							{data.pwi && data.pwi.length > 0 ? (
							data.pwi.map((item: any, index: number) => (
								<Row key={index} gutter={[16, 24]}>
								<Col className="gutter-row" span={8}>
									<div style={{ ...style, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									{item.lineNumber || 'N/A'}
									</div>
								</Col>
								<Col className="gutter-row" span={8}>
									<div style={{ ...style, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									{item.pAndIdNo || 'N/A'}
									</div>
								</Col>
								<Col className="gutter-row" span={8}>
									<div style={{ ...style, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									{item.remark || 'N/A'}
									</div>
								</Col>
								</Row>
							))
							) : (
							<Row>
								<Col span={24}>
								<div style={style}>No data available</div>
								</Col>
							</Row>
							)}

						<Divider orientation="center" style={{ color: '#333', fontWeight: 'bold' }}>
						Comments</Divider>

						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							<Col className="gutter-row" span={24}>
								<div style={style} >Komentar</div>
							</Col>
						</Row>
						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							<Col className="gutter-row" span={24}>
								<div style={style} >{data.comments || 'N/A'}</div>
							</Col>
						</Row>

						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							<Col className="gutter-row" span={2}>
								<div style={styleTitle} >Remark :</div>
							</Col>
						</Row>

						<hr className="d-print-none"/>
						<p className="mt-5" align="center">
							<small>
								AIR BLOWING HAS BEEN SATISFACTOTILY COMPLTED IN ACCORDANCE WITH THE SPESIFICATION IN PROCEDURE 
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


export default AirBlowingDetail



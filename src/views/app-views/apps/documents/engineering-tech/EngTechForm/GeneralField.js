import React from 'react';
import { Row, Col, Card, Form, Input, Upload, message, Select } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { storage } from 'configs/FirebaseConfig'; // Adjust this path
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const { Dragger } = Upload;
const { Option } = Select;

const projectList = ['Cijurai', 'Harbour Road', 'Cipali', 'Pik']

const GeneralField = ({ handleFileUpload, uploadLoading }) => {

	const handleUploadChange = async ({ file }) => {
		if (!file) return;

		const storageRef = ref(storage, `documents/eng-tech/${file.name}`);
		const uploadTask = uploadBytesResumable(storageRef, file);


		
	}

	return (
	<Row gutter={16}>
		<Col xs={24} sm={24} md={17}>
			<Card title="Basic Info">
				<Form.Item name="commisioningDocsName" label="Commisioning Docs Name" >
					<Input placeholder="Commisioning Docs Name" />
				</Form.Item>

				<Form.Item name="projectName" label="Project Name" >
					<Select className="w-100" placeholder="Project Name">
						{
							projectList.map(elm => (
								<Option key={elm} value={elm}>{elm}</Option>
							))
						}
					</Select>
				</Form.Item>
			</Card>


			
		</Col>
		<Col xs={24} sm={24} md={7}>
			<Card title="Document">
				<Dragger {...imageUploadProps} beforeUpload={beforeUpload} onChange={e=> props.handleUploadChange(e)}>
					{
						props.uploadedImg ? 
						<img src={props.uploadedImg} alt="avatar" className="img-fluid" /> 
						: 
						<div>
							{
								props.uploadLoading ? 
								<div>
									<LoadingOutlined className="font-size-xxl text-primary"/>
									<div className="mt-3">Uploading</div>
								</div> 
								: 
								<div>
									<CustomIcon className="display-3" svg={ImageSvg}/>
									<p>Click or drag file to upload</p>
								</div>
							}
						</div>
					}
				</Dragger>
			</Card>
		</Col>
	</Row>
	)
}


export default GeneralField

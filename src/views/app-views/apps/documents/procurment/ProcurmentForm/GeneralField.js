import React from 'react'
import { Input, Row, Col, Card, Form, Upload, message, Select } from 'antd';
import { ImageSvg } from 'assets/svg/icon';
import CustomIcon from 'components/util-components/CustomIcon'
import { LoadingOutlined } from '@ant-design/icons';

const { Dragger } = Upload;
const { Option } = Select;

const rules = {
	vendorDataDocsName: [
		{
			required: true,
			message: 'Please enter Vendor Data & Docs Name',
		}
	],
	projectName: [
		{
			required: true,
			message: 'Please enter Project Name',
		}
	]
}

const imageUploadProps = {
  name: 'file',
	multiple: true,
	listType: "picture-card",
	showUploadList: false,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76'
}

const beforeUpload = file => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

const projectList = ['Cijurai', 'Harbour Road', 'Cipali', 'Pik']

const GeneralField = props => (
	<Row gutter={16}>
		<Col xs={24} sm={24} md={17}>
			<Card title="Basic Info">
				<Form.Item name="vendorDataDocsName" label="Vendor Data & Docs Name" rules={rules.vendorDataDocsName}>
					<Input placeholder="Vendor Data & Docs Name" />
				</Form.Item>

				<Form.Item name="projectName" label="Project Name" rules={rules.projectName}>
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

export default GeneralField

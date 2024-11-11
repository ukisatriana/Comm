import React from 'react';
import { Row, Col, Card, Form, Input, Upload, message, Select } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { storage } from 'configs/FirebaseConfig'; // Adjust this path
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const { Dragger } = Upload;
const { Option } = Select;

const projectList = ['Cijurai', 'Harbour Road', 'Cipali', 'Pik'];

const GeneralField = ({ handleFileUpload, uploadLoading }) => {

  const handleUploadChange = async ({ file }) => {
    if (!file) return;

    const storageRef = ref(storage, `documents/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Optional progress display
        console.log(`Progress: ${(snapshot.bytesTransferred / snapshot.totalBytes) * 100}%`);
      },
      (error) => {
        message.error(`Upload failed: ${error.message}`);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        handleFileUpload(downloadURL); // Pass the file URL to parent
        message.success('File uploaded successfully!');
      }
    );
  };

  return (
    <Row gutter={16}>
      <Col xs={24} sm={24} md={17}>
        <Card title="Basic Info">
          <Form.Item name="engineeringDocsName" label="Engineering Docs Name" rules={[{ required: true, message: 'Please enter Engineering Docs name' }]}>
            <Input placeholder="Engineering Docs Name" />
          </Form.Item>
          <Form.Item name="projectName" label="Project Name" rules={[{ required: true, message: 'Please select a project name' }]}>
            <Select placeholder="Select Project">
              {projectList.map((project) => (
                <Option key={project} value={project}>
                  {project}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Card>
      </Col>
      <Col xs={24} sm={24} md={7}>
        <Card title="Document">
          <Dragger beforeUpload={() => false} onChange={handleUploadChange}>
            <div>{uploadLoading ? <LoadingOutlined /> : <p>Click or drag file to upload</p>}</div>
          </Dragger>
        </Card>
      </Col>
    </Row>
  );
};

export default GeneralField;

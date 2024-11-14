import React, { useState } from "react";
import { Input, Row, Col, Card, Form, message, Upload } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { storage } from "configs/FirebaseConfig"; // Adjust this path
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const { Dragger } = Upload;

const OnwerField = ({ handleFileUpload }) => {
  const [uploadLoading, setUploadLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleUploadChange = async ({ file }) => {
    if (!file) return;

    const storageRef = ref(storage, `images/owner/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    setUploadLoading(true); // Start loading animation

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setUploadProgress(progress); // Update progress percentage
      },
      (error) => {
        message.error(`Upload failed: ${error.message}`);
        setUploadLoading(false); // Stop loading animation on error
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        handleFileUpload(downloadURL); // Pass the file URL to parent
        message.success("File uploaded successfully!");
        setUploadLoading(false); // Stop loading animation on success
        setUploadProgress(0); // Reset progress
      }
    );
  };

  return (
    <Row gutter={16}>
      <Col xs={24} sm={24} md={17}>
        	<Card title="Owner Info">
				<Form.Item name="ownerName" label="Owner Name">
					<Input placeholder="Enter Owner Name"/>
				</Form.Item>
				<Form.Item name="ownerAddres" label="Owner Addres">
					<Input placeholder="Enter Owner Addres" />
				</Form.Item>
		  	</Card>
        </Col>
		<Col xs={24} sm={24} md={7}>
        <Card title="Logo">
          <Dragger beforeUpload={() => false} onChange={handleUploadChange}>
            {uploadLoading ? (
              <div style={{ textAlign: "center" }}>
                <LoadingOutlined style={{ fontSize: 24 }} />
                <p>Uploading... {uploadProgress}%</p>
              </div>
            ) : (
              <p>Click or drag file to upload</p>
            )}
          </Dragger>
        </Card>
      </Col> 
	</Row>
    
	
  
	
  );
};

export default OnwerField;

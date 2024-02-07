import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledProfilePictureUploaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledModalContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
`;

const UpdateUser = ({ userId }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      return;
    }

    setUploading(true);
    setUploadError(null);

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      // Replace 'YOUR_BACKEND_URL' with the actual URL of your backend endpoint
      await axios.post(
        `YOUR_BACKEND_URL/users/${userId}/profile-picture`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      // Assuming success, you may want to update UI or notify the user
      console.log('Profile picture uploaded successfully');
    } catch (error) {
      console.error('Error uploading profile picture:', error);
      setUploadError(
        'Error uploading profile picture. Please try again later.'
      );
    } finally {
      setUploading(false);
    }
  };

  return (
    <StyledProfilePictureUploaderContainer>
      <StyledModalContainer>
        <StyledModalContent>
          <input type="file" onChange={handleFileChange} accept="image/*" />
          <button onClick={handleUpload} disabled={!selectedFile || uploading}>
            {uploading ? 'Uploading...' : 'Upload Picture'}
          </button>
          {uploadError && <div style={{ color: 'red' }}>{uploadError}</div>}
        </StyledModalContent>
      </StyledModalContainer>
    </StyledProfilePictureUploaderContainer>
  );
};

export default UpdateUser;

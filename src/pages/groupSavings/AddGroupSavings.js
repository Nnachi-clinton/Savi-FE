import React, { useState } from 'react';
import ImageIcon from '../../assets/ImageIcon.svg';
import styled from 'styled-components';
import axios from 'axios';
import AddGroupSavingsModal from '../../components/modal/AddGroupSavingsModal';

const ModalOverlay = styled.div`
  position: scroll;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black overlay */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;
const Container = styled.div`
  margin: auto;
  width: 50%;
  padding: 32px 40px;
  border-radius: 8px;
  background-color: white;
  margin-top: 2em;
`;
const Text = styled.p`
  font-size: 24px;
  line-height: 33.6px;
  font-weight: 500;
`;
const DocumentContainer = styled.div`
  margin-bottom: 16px;
`;
const Document = styled.label`
  border: 1px dashed #d0d5dd;
  padding: 24px 24px;
  width: 100%;
  display: block;
  cursor: pointer;
  text-align: center;
  position: relative;
  &:hover {
    border-color: #505f98;
  }
  input {
    display: none;
  }
  &::after {
    content: 'drop a picture that represents the title of your savings group here';
    color: #9ca3af;
    font-size: 10px;
    font-weight: bold;
    display: block;
    text-align: center;
  }
  .fileName {
    /* Style for the file name */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* Center align the name */
  }
`;
const Label = styled.label`
  font-weight: bold;
  font-size: 13px;
`;
const Input = styled.input`
  border: 1px solid #d0d5dd;
  border-radius: 8px;
  padding: 12px 16px;
  width: 100%;
  margin-top: 4px;
  margin-bottom: 16px;
  font-size: 12px;
  &::placeholder {
    padding-left: 0px;
    font-size: 11px;
    color: #d0d5dd;
  }
`;
const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 70px;
`;
const Section = styled.div`
  font-size: 11px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 8px;
`;
const Span = styled.span`
  color: #3b82f6;
`;
const FrequencyGroup = styled.div`
  text-align: center;
`;
const Frequency = styled.button`
  border-radius: 50px;
  width: 97px;
  padding: 16px, 10px, 16px, 10px;
  margin-right: 8px;
  height: 38px;
  border: none;
  background-color: ${({ selected }) => (selected ? '#B5179E' : '#F1F1F1')};
  color: ${({ selected }) => (selected ? 'white' : 'black')};
  cursor: pointer;
`;
const Button = styled.button`
  width: 225px;
  border-radius: 100px;
  padding: 10px;
  background-color: #b5179e;
  border: none;
  margin-top: 4px;
`;

const AddGroupSavings = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const userId = localStorage.getItem('Id');

  const [formData, setFormData] = useState({
    UserId: userId,
    image: '',
    groupName: '',
    contributionAmount: '',
    numberOfParticipants: '5',
    frequency: '',
    time: '',
    purposeAndGoals: '',
    termsAndConditions: '',
  });

  const handleImageDragOver = (e) => {
    e.preventDefault();
  };
  const handleImageDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setUploadedImage(file);
    setFormData({ ...formData, image: file });
  };
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    // If files are present, update the state with the file content
    if (files && files.length > 0) {
      const file = files[0];
      setUploadedImage(file);
      setFormData({ ...formData, [name]: file });
    } else {
      // Otherwise, update the state with the input value
      setFormData({ ...formData, [name]: value });
    }
  };
  const handleContributionAmountChange = (e) => {
    let value = e.target.value;
    value = value.replace(/\D/g, '');
    setFormData({ ...formData, contributionAmount: value });
  };
  const handleFrequencyClick = (frequency, e) => {
    e.preventDefault();
    setFormData({ ...formData, frequency }); // Set the frequency in the form data
  };
  const validateForm = () => {
    if (
      !formData.image ||
      !formData.groupName ||
      !formData.contributionAmount ||
      !formData.frequency ||
      !formData.time ||
      !formData.purposeAndGoals ||
      !formData.termsAndConditions
    ) {
      alert('Please fill in all required fields.');
      return false;
    }
    if (!formData.frequency) {
      alert('Please select a frequency.');
      return false;
    }
    return true;
  };
  const frequencyToValue = (frequency) => {
    switch (frequency) {
      case 'Daily':
        return 0;
      case 'Weekly':
        return 1;
      case 'Monthly':
        return 2;
      default:
        return null;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log(formData.groupName);

    if (validateForm()) {
      const requestData = {
        UserId: userId,
        SaveName: formData.groupName,
        Description: 'None',
        PurposeAndGoal: formData.purposeAndGoals,
        ContributionAmount: formData.contributionAmount,
        TermsAndCondition: formData.termsAndConditions,
        Schedule: frequencyToValue(formData.frequency),
        FormFile: formData.image,
      };
      console.log('Form submitted:', formData);
      axios
        .post(
          'https://localhost:7240/api/GroupSavings/CreateGroupSavings',
          requestData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )
        .then((response) => {
          console.log('Post request successful:', response.data);
          setShowModal(true);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };

  return (
    <>
      {showModal && <AddGroupSavingsModal />}
      <ModalOverlay>
        <Container>
          <Text>Create New Savings Group</Text>
          <form>
            <fieldset>
              <DocumentContainer>
                <Document
                  onDrop={(e) => handleImageDrop(e)}
                  onDragOver={(e) => handleImageDragOver(e)}
                >
                  {uploadedImage ? (
                    <div>{uploadedImage.name}</div>
                  ) : (
                    <React.Fragment>
                      <Image src={ImageIcon} alt="image-icon" />
                      <Section>
                        Drop your image here or <Span>browse</Span>
                      </Section>
                      <input
                        type="file"
                        onChange={(e) => handleChange(e)}
                        name="image"
                        accept="image/*"
                      />
                    </React.Fragment>
                  )}
                </Document>
              </DocumentContainer>
              <div>
                <Label>Group name</Label> <br />
                <Input
                  type="text"
                  placeholder="Enter the name of the group"
                  value={formData.groupName}
                  onChange={handleChange}
                  name="groupName"
                />
              </div>
              <div>
                <Label>Contribution amount</Label> <br />
                <Input
                  type="text"
                  placeholder="Enter the amount"
                  value={formData.contributionAmount}
                  onChange={handleContributionAmountChange}
                  name="contributionAmount"
                />
              </div>
              <div>
                <Label>Number of participants</Label> <br />
                <Input
                  type="text"
                  value="5"
                  disabled
                  name="numberOfParticipants"
                />
              </div>
              <FrequencyGroup>
                <Frequency
                  onClick={(e) => handleFrequencyClick('Daily', e)}
                  selected={formData.frequency === 'Daily'}
                >
                  Daily
                </Frequency>
                <Frequency
                  onClick={(e) => handleFrequencyClick('Weekly', e)}
                  selected={formData.frequency === 'Weekly'}
                >
                  Weekly
                </Frequency>
                <Frequency
                  onClick={(e) => handleFrequencyClick('Monthly', e)}
                  selected={formData.frequency === 'Monthly'}
                >
                  Monthly
                </Frequency>
              </FrequencyGroup>
              <div>
                <Label>Time</Label> <br />
                <Input
                  type="time"
                  placeholder="4:00 PM"
                  value={formData.time}
                  onChange={handleChange}
                  name="time"
                />
              </div>
              <div>
                <Label>Purpose and Goals</Label> <br />
                <Input
                  type="text"
                  placeholder="Notes to encourage users to join your saving group"
                  value={formData.purposeAndGoals}
                  onChange={handleChange}
                  name="purposeAndGoals"
                  style={{ paddingBottom: '24px' }}
                />
              </div>
              <div>
                <Label>Terms and Conditions</Label> <br />
                <Input
                  type="text"
                  placeholder="Enter your group's terms and conditions"
                  value={formData.termsAndConditions}
                  onChange={handleChange}
                  name="termsAndConditions"
                  style={{ paddingBottom: '24px' }}
                />
              </div>
              <Button onClick={handleSubmit}>Create New Group</Button>
            </fieldset>
          </form>
        </Container>
      </ModalOverlay>
    </>
  );
};

export default AddGroupSavings;

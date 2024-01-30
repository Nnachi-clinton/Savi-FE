// import { useState, useCallback } from 'react';
// import DropdownMenu1 from './DropdownMenu1';
// import PortalPopup from './PortalPopup';
// import DropdownMenu from './DropdownMenu';
// import Calendar from './Calender';
// import styled from 'styled-components';

// const Text18 = styled.b`
//   position: relative;
//   line-height: 140%;
// `;
// const TextWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: flex-start;
// `;
// const PleaseCompleteThe = styled.span``;
// const Savi = styled.span`
//   color: var(--primary-color);
// `;
// const TextTxt = styled.span`
//   width: 100%;
// `;
// const Text19 = styled.div`
//   position: relative;
//   font-size: var(--text-md-medium-size);
//   letter-spacing: 0.15px;
//   line-height: 140%;
//   text-align: center;
//   display: flex;
//   align-items: center;
//   width: 23.38rem;
//   height: 3.06rem;
//   flex-shrink: 0;
// `;
// const FrameParent = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: flex-start;
//   gap: var(--gap-5xs);
// `;
// const Text20 = styled.div`
//   position: relative;
//   letter-spacing: 0.15px;
//   line-height: 140%;
//   font-weight: 600;
// `;
// const Iconadd16 = styled.img`
//   position: relative;
//   width: 1.25rem;
//   height: 1.25rem;
//   overflow: hidden;
//   flex-shrink: 0;
//   object-fit: cover;
//   display: none;
// `;
// const Text21 = styled.div`
//   position: relative;
//   line-height: 1.25rem;
// `;
// const ChevronDownIcon5 = styled.img`
//   position: relative;
//   width: 1.5rem;
//   height: 1.5rem;
//   overflow: hidden;
//   flex-shrink: 0;
//   object-fit: cover;
//   cursor: pointer;
// `;
// const Buttondefault = styled.div`
//   align-self: stretch;
//   border-radius: var(--br-5xs);
//   background-color: var(--white);
//   border: 1px solid var(--grey-300);
//   overflow: hidden;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-between;
//   padding: var(--padding-xs) var(--padding-base);
//   font-size: var(--input-small-medium-size);
//   color: var(--grey-400);
// `;
// const TextParent = styled.div`
//   align-self: stretch;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: flex-start;
//   gap: var(--gap-5xs);
// `;
// const FrameWrapper2 = styled.div`
//   align-self: stretch;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: flex-start;
// `;
// const FrameWrapper1 = styled.div`
//   width: 13.19rem;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: flex-start;
// `;
// const TextGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: flex-start;
//   gap: var(--gap-5xs);
// `;
// const FrameWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: flex-start;
// `;
// const FrameDiv = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   justify-content: flex-start;
//   gap: var(--gap-5xl);
// `;
// const FrameParent1 = styled.div`
//   width: 27.75rem;
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   justify-content: flex-start;
//   gap: var(--gap-5xl);
// `;
// const ChevronDownIcon8 = styled.img`
//   position: relative;
//   width: 1.5rem;
//   height: 1.5rem;
//   overflow: hidden;
//   flex-shrink: 0;
//   object-fit: cover;
//   display: none;
// `;
// const Buttondefault4 = styled.div`
//   align-self: stretch;
//   border-radius: var(--br-5xs);
//   background-color: var(--white);
//   border: 1px solid var(--grey-300);
//   overflow: hidden;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: flex-start;
//   padding: var(--padding-xs) var(--padding-base);
//   gap: var(--gap-81xl);
//   font-size: var(--input-small-medium-size);
//   color: var(--grey-400);
// `;
// const Buttondefault5 = styled.div`
//   align-self: stretch;
//   border-radius: var(--br-5xs);
//   background-color: var(--white);
//   border: 1px solid var(--grey-300);
//   box-sizing: border-box;
//   height: 3rem;
//   overflow: hidden;
//   flex-shrink: 0;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-between;
//   padding: var(--padding-xs) var(--padding-base);
// `;
// const FrameWrapper11 = styled.div`
//   width: 27.75rem;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: flex-start;
// `;
// const ImageIcon = styled.img`
//   position: relative;
//   width: 4.38rem;
//   height: 2.8rem;
//   object-fit: cover;
//   display: none;
//   z-index: 0;
// `;
// const DropYourFiles2 = styled.div`
//   position: relative;
//   letter-spacing: 0.01em;
//   line-height: 1.5rem;
//   font-weight: 500;
// `;
// const ChevronLeftIcon2 = styled.img`
//   position: relative;
//   width: 1rem;
//   height: 1rem;
//   overflow: hidden;
//   flex-shrink: 0;
//   object-fit: cover;
//   display: none;
// `;
// const Link = styled.div`
//   position: relative;
//   letter-spacing: 0.01em;
//   line-height: 1.5rem;
//   font-weight: 600;
// `;
// const BorderBottom2 = styled.div`
//   align-self: stretch;
//   position: relative;
//   background-color: var(--blue-500);
//   height: 0.13rem;
//   display: none;
// `;
// const Placeholder = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: flex-start;
//   gap: var(--gap-11xs);
// `;
// const LinkDefault = styled.div`
//   overflow: hidden;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: flex-start;
//   gap: var(--gap-3xs);
// `;
// const Links = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   justify-content: flex-start;
//   text-align: center;
//   color: var(--blue-500);
// `;
// const Title = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   justify-content: center;
//   gap: var(--gap-8xs);
// `;
// const SecondaryLabel = styled.div`
//   position: relative;
//   font-size: var(--input-small-medium-size);
//   letter-spacing: 0.01em;
//   line-height: 1.25rem;
//   font-weight: 500;
//   color: var(--gray-400);
//   text-align: center;
// `;
// const Content = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: flex-start;
//   gap: var(--gap-8xs);
//   z-index: 1;
// `;
// const FigmaIcon2 = styled.img`
//   position: relative;
//   width: 1rem;
//   height: 1rem;
//   overflow: hidden;
//   flex-shrink: 0;
//   object-fit: cover;
// `;
// const File1 = styled.div`
//   position: absolute;
//   top: 0rem;
//   left: 1.69rem;
//   border-radius: var(--br-7xs);
//   background-color: var(--white);
//   box-shadow: var(--drop-shadow-2xl);
//   border: 1px solid var(--gray-300);
//   box-sizing: border-box;
//   width: 2rem;
//   height: 2.63rem;
//   overflow: hidden;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
// `;
// const PrelineUifig = styled.div`
//   position: relative;
//   letter-spacing: 0.01em;
//   line-height: 1rem;
//   font-weight: 500;
// `;
// const Label = styled.div`
//   position: absolute;
//   top: 2.88rem;
//   left: 0rem;
//   border-radius: var(--br-980xl);
//   background-color: var(--blue-600);
//   box-shadow: var(--drop-shadow-md);
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   justify-content: flex-start;
//   padding: 0rem var(--padding-7xs);
// `;
// const DraggingPointerIcon2 = styled.img`
//   position: absolute;
//   top: 3.73rem;
//   left: 3.22rem;
//   width: 1.25rem;
//   height: 1.75rem;
//   object-fit: cover;
// `;
// const DarggingFile = styled.div`
//   position: absolute;
//   margin: 0 !important;
//   top: 2.63rem;
//   left: 16.63rem;
//   width: 5.38rem;
//   height: 5.48rem;
//   display: none;
//   z-index: 2;
//   font-size: var(--xs-regular-size);
//   color: var(--white);
// `;
// const DragNDropFileUpload = styled.div`
//   align-self: stretch;
//   border-radius: var(--br-5xs);
//   background-color: var(--white);
//   border: 1px dashed var(--grey-400);
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: flex-start;
//   padding: var(--padding-21xl);
//   position: relative;
//   gap: var(--gap-xl);
//   color: var(--gray-800);
// `;
// const Ctadefault = styled.div`
//   align-self: stretch;
//   border-radius: var(--br-5xs);
//   background-color: var(--primary-color);
//   overflow: hidden;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
//   padding: var(--padding-xs) var(--padding-base);
//   gap: var(--gap-5xs);
//   color: var(--white);
// `;
// const FrameGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: flex-start;
//   gap: var(--gap-5xl);
// `;
// const KycInner = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: flex-start;
//   font-size: var(--text-md-medium-size);
// `;
// const KycRoot = styled.div`
//   position: relative;
//   border-radius: var(--br-base);
//   background-color: var(--white);
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: flex-start;
//   padding: var(--padding-13xl) var(--padding-21xl);
//   box-sizing: border-box;
//   gap: var(--gap-13xl);
//   max-width: 100%;
//   max-height: 100%;
//   overflow: auto;
//   text-align: left;
//   font-size: var(--headline-medium-24-size);
//   color: var(--main-text);
//   font-family: var(--text-md-medium);
// `;

// const KYC = () => {
//   const [isDropdownMenuOpen, setDropdownMenuOpen] = useState(false);
//   const [isDropdownMenu1Open, setDropdownMenu1Open] = useState(false);
//   const [isCalendarOpen, setCalendarOpen] = useState(false);
//   const [isDropdownMenu2Open, setDropdownMenu2Open] = useState(false);

//   const openDropdownMenu = useCallback(() => {
//     setDropdownMenuOpen(true);
//   }, []);

//   const closeDropdownMenu = useCallback(() => {
//     setDropdownMenuOpen(false);
//   }, []);

//   const openDropdownMenu1 = useCallback(() => {
//     setDropdownMenu1Open(true);
//   }, []);

//   const closeDropdownMenu1 = useCallback(() => {
//     setDropdownMenu1Open(false);
//   }, []);

//   const openCalendar = useCallback(() => {
//     setCalendarOpen(true);
//   }, []);

//   const closeCalendar = useCallback(() => {
//     setCalendarOpen(false);
//   }, []);

//   const openDropdownMenu2 = useCallback(() => {
//     setDropdownMenu2Open(true);
//   }, []);

//   const closeDropdownMenu2 = useCallback(() => {
//     setDropdownMenu2Open(false);
//   }, []);

//   return (
//     <>
//       <KycRoot>
//         <FrameParent>
//           <TextWrapper>
//             <Text18>Complete Your KYC Verification</Text18>
//           </TextWrapper>
//           <Text19>
//             <TextTxt>
//               <PleaseCompleteThe>{`Please complete the KYC verification process to unlock the full features and benefits of `}</PleaseCompleteThe>
//               <Savi>Savi</Savi>
//               <PleaseCompleteThe>.</PleaseCompleteThe>
//             </TextTxt>
//           </Text19>
//         </FrameParent>
//         <KycInner>
//           <FrameWrapper>
//             <FrameGroup>
//               <FrameDiv>
//                 <FrameWrapper1>
//                   <FrameWrapper2>
//                     <TextParent>
//                       <Text20>Gender</Text20>
//                       <Buttondefault>
//                         <Iconadd16 alt="" />
//                         <Text21>Select your Gender</Text21>
//                         <Iconadd16 alt="" />
//                         <ChevronDownIcon5
//                           alt=""
//                           src="/chevrondown@2x.png"
//                           onClick={openDropdownMenu}
//                         />
//                       </Buttondefault>
//                     </TextParent>
//                   </FrameWrapper2>
//                 </FrameWrapper1>
//                 <FrameWrapper>
//                   <FrameWrapper>
//                     <TextGroup>
//                       <Text20>Occupation</Text20>
//                       <Buttondefault>
//                         <Iconadd16 alt="" />
//                         <Text21>Select your Occupation</Text21>
//                         <Iconadd16 alt="" />
//                         <ChevronDownIcon5
//                           alt=""
//                           src="/chevrondown@2x.png"
//                           onClick={openDropdownMenu1}
//                         />
//                       </Buttondefault>
//                     </TextGroup>
//                   </FrameWrapper>
//                 </FrameWrapper>
//               </FrameDiv>
//               <FrameParent1>
//                 <FrameWrapper1>
//                   <FrameWrapper2>
//                     <TextParent>
//                       <Text20>Date of Birth</Text20>
//                       <Buttondefault>
//                         <Iconadd16 alt="" />
//                         <Text21>Pick your D.O.B</Text21>
//                         <Iconadd16 alt="" />
//                         <ChevronDownIcon5
//                           alt=""
//                           src="/calendarlines@2x.png"
//                           onClick={openCalendar}
//                         />
//                       </Buttondefault>
//                     </TextParent>
//                   </FrameWrapper2>
//                 </FrameWrapper1>
//                 <FrameWrapper1>
//                   <FrameWrapper2>
//                     <TextParent>
//                       <Text20>Identification Type</Text20>
//                       <Buttondefault>
//                         <Iconadd16 alt="" />
//                         <Text21>Select your type</Text21>
//                         <Iconadd16 alt="" />
//                         <ChevronDownIcon5
//                           alt=""
//                           src="/chevrondown@2x.png"
//                           onClick={openDropdownMenu2}
//                         />
//                       </Buttondefault>
//                     </TextParent>
//                   </FrameWrapper2>
//                 </FrameWrapper1>
//               </FrameParent1>
//               <FrameWrapper2>
//                 <FrameWrapper2>
//                   <TextParent>
//                     <Text20>BVN</Text20>
//                     <Buttondefault4>
//                       <Iconadd16 alt="" />
//                       <Text21>Input your BVN</Text21>
//                       <Iconadd16 alt="" />
//                       <ChevronDownIcon8 alt="" />
//                     </Buttondefault4>
//                   </TextParent>
//                 </FrameWrapper2>
//               </FrameWrapper2>
//               <FrameWrapper11>
//                 <FrameWrapper2>
//                   <TextParent>
//                     <Text20>Address</Text20>
//                     <Buttondefault5>
//                       <Iconadd16 alt="" />
//                       <Iconadd16 alt="" />
//                     </Buttondefault5>
//                   </TextParent>
//                 </FrameWrapper2>
//               </FrameWrapper11>
//               <FrameWrapper2>
//                 <FrameWrapper2>
//                   <TextParent>
//                     <Text20>Identification Number</Text20>
//                     <Buttondefault4>
//                       <Iconadd16 alt="" />
//                       <Text21>Input your Identification Num</Text21>
//                       <Iconadd16 alt="" />
//                       <ChevronDownIcon8 alt="" />
//                     </Buttondefault4>
//                   </TextParent>
//                 </FrameWrapper2>
//               </FrameWrapper2>
//               <FrameWrapper2>
//                 <FrameWrapper2>
//                   <TextParent>
//                     <Text20>Upload Identification Document</Text20>
//                     <DragNDropFileUpload>
//                       <ImageIcon alt="" />
//                       <Content>
//                         <Title>
//                           <DropYourFiles2>
//                             Drop your files here or
//                           </DropYourFiles2>
//                           <Links>
//                             <LinkDefault>
//                               <ChevronLeftIcon2 alt="" />
//                               <Placeholder>
//                                 <Link>browse</Link>
//                                 <BorderBottom2 />
//                               </Placeholder>
//                               <ChevronLeftIcon2 alt="" />
//                             </LinkDefault>
//                           </Links>
//                         </Title>
//                         <SecondaryLabel>Maximum size: 50MB</SecondaryLabel>
//                       </Content>
//                       <DarggingFile>
//                         <File1>
//                           <FigmaIcon2 alt="" />
//                         </File1>
//                         <Label>
//                           <PrelineUifig>preline-ui.fig</PrelineUifig>
//                         </Label>
//                         <DraggingPointerIcon2 alt="" />
//                       </DarggingFile>
//                     </DragNDropFileUpload>
//                   </TextParent>
//                 </FrameWrapper2>
//               </FrameWrapper2>
//               <FrameWrapper2>
//                 <FrameWrapper2>
//                   <TextParent>
//                     <Text20>Upload Proof of Address</Text20>
//                     <DragNDropFileUpload>
//                       <ImageIcon alt="" />
//                       <Content>
//                         <Title>
//                           <DropYourFiles2>
//                             Drop your files here or
//                           </DropYourFiles2>
//                           <Links>
//                             <LinkDefault>
//                               <ChevronLeftIcon2 alt="" />
//                               <Placeholder>
//                                 <Link>browse</Link>
//                                 <BorderBottom2 />
//                               </Placeholder>
//                               <ChevronLeftIcon2 alt="" />
//                             </LinkDefault>
//                           </Links>
//                         </Title>
//                         <SecondaryLabel>Maximum size: 50MB</SecondaryLabel>
//                       </Content>
//                       <DarggingFile>
//                         <File1>
//                           <FigmaIcon2 alt="" />
//                         </File1>
//                         <Label>
//                           <PrelineUifig>preline-ui.fig</PrelineUifig>
//                         </Label>
//                         <DraggingPointerIcon2 alt="" />
//                       </DarggingFile>
//                     </DragNDropFileUpload>
//                   </TextParent>
//                 </FrameWrapper2>
//               </FrameWrapper2>
//               <Ctadefault>
//                 <Iconadd16 alt="" />
//                 <Text20>Submit</Text20>
//                 <Iconadd16 alt="" />
//               </Ctadefault>
//             </FrameGroup>
//           </FrameWrapper>
//         </KycInner>
//       </KycRoot>
//       {isDropdownMenuOpen && (
//         <PortalPopup
//           overlayColor="rgba(113, 113, 113, 0.3)"
//           placement="Centered"
//           onOutsideClick={closeDropdownMenu}
//         >
//           <DropdownMenu1 onClose={closeDropdownMenu} />
//         </PortalPopup>
//       )}
//       {isDropdownMenu1Open && (
//         <PortalPopup
//           overlayColor="rgba(113, 113, 113, 0.3)"
//           placement="Centered"
//           onOutsideClick={closeDropdownMenu1}
//         >
//           <DropdownMenu onClose={closeDropdownMenu1} />
//         </PortalPopup>
//       )}
//       {isCalendarOpen && (
//         <PortalPopup
//           overlayColor="rgba(113, 113, 113, 0.3)"
//           placement="Centered"
//           onOutsideClick={closeCalendar}
//         >
//           <Calendar onClose={closeCalendar} />
//         </PortalPopup>
//       )}
//       {isDropdownMenu2Open && (
//         <PortalPopup
//           overlayColor="rgba(113, 113, 113, 0.3)"
//           placement="Centered"
//           onOutsideClick={closeDropdownMenu2}
//         >
//           <DropdownMenu onClose={closeDropdownMenu2} />
//         </PortalPopup>
//       )}
//     </>
//   );
// };

// export default KYC;

import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Swal from 'sweetalert2';

const Container = styled.div`
  margin: auto;
  width: 95%;
`;
const Clearfix = styled.div`
  &:after {
    content: '';
    display: table;
    clear: both;
  }
`;
const FormRow = styled.div`
  float: left;
  width: 50%;
  box-sizing: border-box;
  padding: 0 15px;
`;
const FormRowb = styled.div`
  padding: 0 15px;
`;
const Label = styled.label`
  font-weight: bold;
  font-size: 13px;
`;
const Input = styled.input`
  border: 1px solid #d0d5dd;
  border-radius: 6px;
  padding: 5px 0;
  width: 100%;
  margin-top: 4px;
  margin-bottom: 4px;
  font-size: 12px;

  &::placeholder {
    padding-left: 8px;
    font-size: 11px;
    color: #d0d5dd;
  }
`;
const Select = styled.select`
  width: 100%;
  border-radius: 6px;
  padding: 5px 0;
  border: 1px solid #d0d5dd;
  margin-top: 4px;
  margin-bottom: 4px;
  font-size: 12px;
  color: #d0d5dd;

  option {
    color: black;
  }
  &:checked {
    color: black; /* Set the color for the selected option */
  }
`;

const Document = styled.label`
  border: 1px dashed #d0d5dd;
  padding: 24px 24px;
  width: 100%;
  display: block;
  cursor: pointer;
  &::after {
    content: 'Maximum size: 50MB';
    color: #9ca3af;
    font-size: 10px;
    font-weight: bold;
    display: block;
  }
  &:hover {
    border-color: #505f98;
  }
  input {
    display: none;
  }
`;
const Section = styled.div`
  font-size: 11px;
  font-weight: bold;
`;
const Span = styled.span`
  color: #3b82f6;
`;
const Button = styled.button`
  width: 100%;
  background-color: #b5179e;
  color: white;
  border-radius: 4px;
  margin-top: 16px;
  border: none;
  padding: 8px;
  font-size: 12px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const KYC = () => {
  const [formData, setFormData] = useState({
    gender: '0',
    occupation: '0',
    dateOfBirth: '',
    identificationType: '0',
    bvn: '',
    address: '',
    identificationNumber: '',
    identificationDocument: '',
    proofOfAddress: '',
  });
  const [uploadedDocument, setUploadedDocument] = useState(null);
  const [uploadedProof, setUploadedProof] = useState(null);
  const [genderDropdownClicked, setGenderDropdownClicked] = useState(false);
  const [occupationDropdownClicked, setOccupationDropdownClicked] =
    useState(false);
  const [
    identificationTypeDropdownClicked,
    setIdentificationTypeDropdownClicked,
  ] = useState(false);
  const [bvnLengthError, setBvnLengthError] = useState(false);

  const validateBvn = (value) => {
    if (value.length !== 11) {
      setBvnLengthError(true);
    } else {
      setBvnLengthError(false);
    }
  };

  const handleChange = (event) => {
    const { name, value, files } = event.target;

    if (files) {
      const file = files[0];
      if (name === 'identificationDocument') {
        setUploadedDocument(file);
      } else if (name === 'proofOfAddress') {
        setUploadedProof(file);
      }
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: file,
      }));
    } else {
      const updatedValue =
        name === 'gender' ||
        name === 'occupation' ||
        name === 'identificationType'
          ? parseInt(value, 10)
          : value;

      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: updatedValue,
      }));
    }

    if (event.target.tagName === 'SELECT') {
      event.target.style.color = '#000';
    }

    if (name === 'bvn' && !event.relatedTarget) {
      // Validate BVN length using the separate function
      validateBvn(value);
    }
  };

  const handleGenderDropdownClick = () => {
    setGenderDropdownClicked(true);
  };
  const handleOccupationDropdownClick = () => {
    setOccupationDropdownClicked(true);
  };
  const handleIdentificationTypeDropdownClick = () => {
    setIdentificationTypeDropdownClicked(true);
  };

  const getIsFormValid = (data) => {
    return (
      data.gender !== '' &&
      data.dateOfBirth &&
      data.occupation !== '' &&
      data.identificationType !== '' &&
      data.bvn.length === 11 &&
      data.address &&
      data.identificationNumber &&
      data.identificationDocument &&
      data.proofOfAddress
    );
  };

  const handleDocumentDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      if (file.size <= 50 * 1024 * 1024) {
        setUploadedDocument(file);
        setFormData((prevFormData) => ({
          ...prevFormData,
          identificationDocument: file,
        }));
      } else {
        console.error('File size exceeds 50MB limit.');
      }
    }
  };
  const handleDocumentDragOver = (event) => {
    event.preventDefault();

    const file = event.dataTransfer.files[0];
    if (file && file.size > 50 * 1024 * 1024) {
      alert('File size exceeds 50MB limit.');
      this.value = '';
      event.dataTransfer.dropEffect = 'none';
    } else {
      event.dataTransfer.dropEffect = 'copy';
    }
  };

  const handleProofOfAddressDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      if (file.size <= 50 * 1024 * 1024) {
        setUploadedProof(file);
        setFormData((prevFormData) => ({
          ...prevFormData,
          proofOfAddress: file,
        }));
      } else {
        console.error('File size exceeds 50MB limit.');
      }
    }
  };
  const handleProofOfAddressDragOver = (event) => {
    event.preventDefault();

    const file = event.dataTransfer.items[0].getAsFile();
    if (file && file.size > 50 * 1024 * 1024) {
      console.error('File size exceeds 50MB limit.');
      event.dataTransfer.dropEffect = 'none';
    } else {
      event.dataTransfer.dropEffect = 'copy';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const adaptedFormData = {
        ...formData,
        Address: formData.address,
        BVN: formData.bvn,
        IdentificationDocumentUrl: formData.identificationDocument,
        IdentificationNumber: formData.identificationNumber,
        ProofOfAddressUrl: formData.proofOfAddress,
      };
      console.log('Form Data:', formData);

      const formDataToSend = new FormData();

      for (const key in adaptedFormData) {
        if (adaptedFormData.hasOwnProperty(key)) {
          formDataToSend.append(key, adaptedFormData[key]);
        }
      }
      const userId = localStorage.getItem('Id');
      console.log(userId);
      const response = await axios.post(
        `https://localhost:7240/api/Kyc/addKyc?userId=${userId}`,
        formDataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Account Updated!',
          html: 'Your account has been updated successfully.',
          showConfirmButton: false,
          timer: 3000,
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: `Error: ${response.data.message}`,
          confirmButtonText: 'OK',
        });
      }
    } catch (error) {
      console.error('An error occurred:', error);

      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An unexpected error occurred: ' + error.message,
        confirmButtonText: 'OK',
      });
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <Clearfix>
            <FormRow>
              <div>
                <Label>Gender</Label> <br />
                <Select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  onClick={handleGenderDropdownClick}
                  onBlur={(e) =>
                    (e.target.style.color =
                      e.target.value === '' ? '#D0D5DD' : '#000')
                  }
                >
                  {!genderDropdownClicked && (
                    <option value="" disabled>
                      Select your Gender
                    </option>
                  )}
                  <option value="0">Male</option>
                  <option value="1">Female</option>
                </Select>
              </div>

              <div>
                <Label>Date Of Birth</Label> <br />
                <Input
                  type="date"
                  placeholder="Pick your D.O.B"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  name="dateOfBirth"
                />
              </div>
            </FormRow>

            <FormRow>
              <div>
                <Label>Occupation</Label> <br />
                <Select
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  onClick={handleOccupationDropdownClick}
                  onBlur={(e) =>
                    (e.target.style.color =
                      e.target.value === '' ? '#D0D5DD' : '#000')
                  }
                >
                  {!occupationDropdownClicked && (
                    <option value="" disabled>
                      Select your Occupation
                    </option>
                  )}
                  <option value="0">Farmer</option>
                  <option value="1">Human Resources</option>
                  <option value="2">Marketing Specialist</option>
                  <option value="3">Assistant</option>
                  <option value="4">Teacher</option>
                  <option value="5">Engineer</option>
                  <option value="6">IT Professional</option>
                  <option value="7">Sales Representative</option>
                  <option value="8">Doctor</option>
                  <option value="9">Accountant</option>
                  <option value="10">Lawyer</option>
                  <option value="11">Banker</option>
                  <option value="12">Entrepreneur</option>
                  <option value="13">Project Manager</option>
                  <option value="14">Graphics Designer</option>
                  <option value="15">Others</option>
                </Select>
              </div>

              <div>
                <Label>Identification Type</Label> <br />
                <Select
                  name="identificationType"
                  value={formData.identificationType}
                  onChange={handleChange}
                  onClick={handleIdentificationTypeDropdownClick}
                  onBlur={(e) =>
                    (e.target.style.color =
                      e.target.value === '' ? '#D0D5DD' : '#000')
                  }
                >
                  {!identificationTypeDropdownClicked && (
                    <option value="" disabled>
                      Select your Type
                    </option>
                  )}
                  <option value="0">NIN</option>
                  <option value="1">Passport</option>
                  <option value="2">Driver's License</option>
                  <option value="3">Utility Bill</option>
                  <option value="4">Voters Card</option>
                  <option value="5">Student ID</option>
                </Select>
              </div>
            </FormRow>
          </Clearfix>

          <FormRowb>
            <div>
              <Label>BVN</Label> <br />
              <Input
                type="text"
                placeholder="Input your BVN"
                value={formData.bvn}
                onChange={handleChange}
                onBlur={(e) => validateBvn(e.target.value)}
                name="bvn"
              />
              {bvnLengthError && (
                <div
                  style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}
                >
                  BVN must be 11 characters long.
                </div>
              )}
            </div>

            <div>
              <Label>Address</Label> <br />
              <Input
                type="text"
                placeholder=""
                value={formData.address}
                onChange={handleChange}
                name="address"
              />
            </div>

            <div>
              <Label>Identification Number</Label> <br />
              <Input
                type="text"
                placeholder="Input your Identification Number"
                value={formData.identificationNumber}
                onChange={handleChange}
                name="identificationNumber"
              />
            </div>

            <div>
              <Label>Upload Identification Document</Label> <br />
              <Document
                onDrop={(e) => handleDocumentDrop(e)}
                onDragOver={(e) => handleDocumentDragOver(e)}
              >
                {uploadedDocument ? (
                  <div>{uploadedDocument.name}</div>
                ) : (
                  <React.Fragment>
                    <Section>
                      Drop your files here or <Span>browse</Span>
                    </Section>
                    <input
                      type="file"
                      onChange={(e) =>
                        handleChange(e, 'identificationDocument')
                      }
                      name="identificationDocument"
                    />
                  </React.Fragment>
                )}
              </Document>
            </div>

            <div>
              <Label>Upload Proof of Address</Label> <br />
              <Document
                onDrop={(e) => handleProofOfAddressDrop(e)}
                onDragOver={(e) => handleProofOfAddressDragOver(e)}
              >
                {uploadedProof ? (
                  <div>{uploadedProof.name}</div>
                ) : (
                  <React.Fragment>
                    <Section>
                      Drop your files here or <Span>browse</Span>
                    </Section>
                    <input
                      type="file"
                      onChange={(e) => handleChange(e, 'proofOfAddress')}
                      name="proofOfAddress"
                    />
                  </React.Fragment>
                )}
              </Document>
            </div>

            <Button type="submit" disabled={!getIsFormValid(formData)}>
              Submit
            </Button>
          </FormRowb>
        </fieldset>
      </form>
    </Container>
  );
};

export default KYC;

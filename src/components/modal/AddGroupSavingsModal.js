import styled from "styled-components";
import Close from "../../assets/Close.svg";
import Success from "../../assets/Success.svg";
import Facebook from "../../assets/Facebook.svg";
import Twitter from "../../assets/Twitter.svg";
import Telegram from "../../assets/Telegram.svg";
import Instagram from "../../assets/Instagram.svg";
import EmailIcon from "../../assets/EmailIcon.svg";
import { Link } from "react-router-dom";

const ModalContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    text-align: center;
`;
const CloseButton = styled(Link)`
    position: absolute;
    top: 10px;
    right: 10px;
`;
const SuccessIcon = styled.img`
    margin-bottom: 20px;
    background-color: #F5B9ED;
    padding: 16px;
    border-radius: 49%;
`;
const SocialMediaContainer = styled.div`
    display: block;
    justify-content: center;
    margin-top: 20px;
    img {
        margin: 0 10px;
    }
`;
const Text = styled.p`
    display: block;
    text-align: center;
    font-weight: bolder;
`;
const Text2 = styled.p`
    display: block;
    text-align: center;
    font-weight: bolder;
    margin-bottom: 10px;
`;

const userEmail = localStorage.getItem("Email")
const socialMediaLinks = {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    telegram: "https://t.me/",
    twitter: "https://twitter.com/",
    email: `mailto:${userEmail}`
};

const AddGroupSavingsModal = () => {
    return (
        <ModalContainer>
            <div>
                <CloseButton>
                    <img src={Close} alt="close-button" style={{fontSize: '10px',  color:'#98A2B3'}}/>
                </CloseButton>
                <SuccessIcon src={Success} alt="success_icon"/>
                <Text>Success!</Text>
                <p>
                    Your new savings group was successfully created. <br />
                    As participants join, you will be notified, and the savings <br /> will
                    start as soon as all available slots are filled.
                </p>
            </div>
            <SocialMediaContainer>
                <Text2>Share on social media:</Text2>
                <div>
                    <Link to={socialMediaLinks.facebook} target="_blank" rel="noopener noreferrer">
                        <img src={Facebook}  alt="Facebook-share" />
                    </Link>
                    <Link to={socialMediaLinks.instagram} target="_blank" rel="noopener noreferrer">
                        <img src={Instagram}  alt="Instagram-share" />
                    </Link>
                    <Link to={socialMediaLinks.telegram} target="_blank" rel="noopener noreferrer">
                        <img src={Telegram}  alt="Telegram-share" />
                    </Link>
                    <Link to={socialMediaLinks.twitter} target="_blank" rel="noopener noreferrer">
                        <img src={Twitter}  alt="Twitter-share" />
                    </Link>
                    <Link to={socialMediaLinks.email} target="_blank" rel="noopener noreferrer">
                        <img src={EmailIcon}  alt="Email-share" />
                    </Link>
                </div>
            </SocialMediaContainer>
        </ModalContainer>
    );
};

export default AddGroupSavingsModal;
import styled from "styled-components";
import LoginImage from "../Images/simon-english-48nerZQCHgo-unsplash.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { Link } from 'react-router-dom';
const Login = () => {
    const LoginContainer = styled.div`
        display: flex;
        width: 79%;
        height: auto;
        margin: 5%;
        border-radius: 20px;
        @media screen and (max-width:800px){
            flex-direction: column;
            width: 90%;
            justify-content: center;
            align-items: center;
        }
    `
    const LoginPageContainer = styled.div`
        display: flex;
        justify-content: center;
        height: 100vh;
        background-image: linear-gradient(to top left, #FFA000 50%, #212121 50%);
        
    `

    const ImageSection = styled.div`
         &{
            display: flex;
            flex-wrap: wrap;
            width: 50%;
            position: relative;
            z-index: 1;
            border-radius: 20px;
        }
        &::before{
            position: absolute;
            height: 100%;
            z-index:2;
            content: '';
            top: 0%;
            right: 0%;
            bottom: 0%;
            left: 0%;
            background-color: #4242426d;
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
            @media screen and (max-width:800px){
                border-bottom-left-radius: 0px;
                border-top-right-radius: 20px;
            }
        }
        @media screen and (max-width:800px){
            width: 100%;
        }
    `
    const LoginSection = styled.div`
        background-color: #21212a;
        width: 50%;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        padding: 5%;
        justify-content: center;
        display: flex;
        flex-direction: column;
        @media screen and (max-width:800px){
            width: 90%;
            border-top-right-radius: 0px;
            border-bottom-left-radius: 20px;
            padding: 0 5%;
            height: 350px;
        }
    `
    const SignUpSection = styled.div`
        background-color: #21212a;
        width: 50%;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        padding: 5%;
        justify-content: center;
        display: flex;
        flex-direction: column;
        @media screen and (max-width:800px){
            width: 90%;
            border-top-right-radius: 0px;
            border-bottom-left-radius: 20px;
            padding: 0 5%;
            height: 350px;
        }
    `
    const Heading = styled.div`
        color: #fff;
        font-size:35px;
        letter-spacing: 0.8rem;
        @media screen and (max-width:800px){
            font-size: 20px;
        }
    `
    const SocialMediaIcons = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 3%;
        @media screen and (max-width:800px){
            margin: 2% 3%;
        }
    `
    const Icon = styled.div`
        &{  margin: 0 3%;
            font-size: 20px;
            color: #fff;
        }
        &:hover{
            cursor: pointer;
            animation: shake 0.5s;
            animation-iteration-count: infinite;
        }
        @keyframes shake {
            0% { transform: translate(1px, 1px) rotate(0deg) scale(1.5); }
            10% { transform: translate(-1px, -2px) rotate(-1deg) scale(1.5); }
            20% { transform: translate(-3px, 0px) rotate(1deg) scale(1.5); }
            30% { transform: translate(3px, 2px) rotate(0deg) scale(1.5); }
            40% { transform: translate(1px, -1px) rotate(1deg) scale(1.5); }
            50% { transform: translate(-1px, 2px) rotate(-1deg) scale(1.5); }
            60% { transform: translate(-3px, 1px) rotate(0deg) scale(1.5); }
            70% { transform: translate(3px, 1px) rotate(-1deg) scale(1.5); }
            80% { transform: translate(-1px, -1px) rotate(1deg) scale(1.5); }
            90% { transform: translate(1px, 2px) rotate(0deg) scale(1.5); }
            100% { transform: translate(1px, -2px) rotate(-1deg) scale(1.5); }
        }
        @media screen and (max-width:800px){
            font-size: 15px;
        }
    `
    const TextSection = styled.div`
        margin: 3%;
        @media screen and (max-width:800px){
            margin: 0 2%;
        }
    `
    const InputField = styled.div`
        margin: 5%;
        @media screen and (max-width:800px){
            margin: 3%;
        }
    `
    const Input = styled.input`
        height: 40px;
        width: 350px;
        padding: 0 3%;
        border-radius: 20px;
        border: none;
        @media screen and (max-width:800px){
            width: 200px;
            height: 30px;
            font-size: 12px;
        }
    `
    const Img = styled.img`
        width: 100%;
        height: 100%;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        @media screen and (max-width:800px){
            height: 250px;
            border-bottom-left-radius: 0px;
            border-top-right-radius: 20px;
        }
    `
    const FrogotPWD = styled.div`
        &{  text-align: right;
            position: relative;
            top: -5%;
            right: 18%;
            color: #fff;
        }
        &:hover{
            cursor: pointer;
        }
        @media screen and (max-width:800px){
            font-size: 12px;
            top: 0;
            right: 15%;
        }

    `
    const Option = styled.div`
        color: #fff;
        margin: 2%;
        @media screen and (max-width:800px){
            font-size: 12px;
        }
    `
    const SignUpandLoginLink =styled.a`
        &:hover{
            cursor: pointer;
        }
    `
    const ButtonDiv = styled.div`
    &{
        
        width: 100%;
        height: 80px;
        color:#fff;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 2%;
        @media screen and (max-width:800px){
            margin : 0%;
        }
    }
    &:active{
        transform: scale(0.95);
    }
    
    `
    const Button = styled.div`
        width: 150px;
        height: 40px;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FFA000;
        color: #fff;
        @media screen and (max-width:800px){
            height: 30px;
            font-size: 12px;
            width: 100px;
        }
    `

    const[change,setChange] = useState(false);
    const handleChange = ()=>{
        if(!change){
            setChange(true);
        }else{
            setChange(false);
        }
    }
    return ( 
        <LoginPageContainer>
            <LoginContainer>
                <ImageSection>
                    <Img src={LoginImage}/>
                </ImageSection>
                {
                    change ? 
                    <LoginSection>
                        <Heading>Travel Guide</Heading>
                        <SocialMediaIcons>
                            <Icon>
                                <FontAwesomeIcon icon={faFacebook}/>
                            </Icon>
                            <Icon>
                                <FontAwesomeIcon icon={faTwitter}/>
                            </Icon>
                            <Icon>
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </Icon>
                            <Icon>
                                <FontAwesomeIcon icon={faInstagram}/>
                            </Icon>
                        </SocialMediaIcons>
                        <TextSection>
                            <InputField>
                                <Input type ="text" name="username" placeholder="Enter Your User Name or Email"/>
                            </InputField>
                            <InputField>
                                <Input type ="text" name="Password" placeholder="Enter Password"/>
                            </InputField>
                        </TextSection>
                        <FrogotPWD>
                            <p>Forgot Your Password ?</p>
                        </FrogotPWD>
                        <ButtonDiv>
                            <Button>
                                <Link className = "li" to="/">Sign In</Link>
                            </Button>
                        </ButtonDiv>
                        <Option>
                            <p>Dosen't have an account ? <SignUpandLoginLink onClick={handleChange}><u>Sign up</u></SignUpandLoginLink></p>
                        </Option>
                    </LoginSection> :
                    <SignUpSection>
                        <Heading>Travel Guide</Heading>
                        <SocialMediaIcons>
                            <Icon>
                                <FontAwesomeIcon icon={faFacebook}/>
                            </Icon>
                            <Icon>
                                <FontAwesomeIcon icon={faTwitter}/>
                            </Icon>
                            <Icon>
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </Icon>
                            <Icon>
                                <FontAwesomeIcon icon={faInstagram}/>
                            </Icon>
                        </SocialMediaIcons>
                        <TextSection>
                            <InputField>
                                <Input type ="text" name="name" placeholder="Enter Your Full Name"/>
                            </InputField>
                            <InputField>
                                <Input type ="text" name="Email" placeholder="Enter Your Email"/>
                            </InputField>
                            <InputField>
                                <Input type ="text" name="Password" placeholder="Enter the Password"/>
                            </InputField>
                            <InputField>
                                <Input type ="text" name="ConfirmPassword" placeholder="Re-enter the Password"/>
                            </InputField>
                        </TextSection>
                        <ButtonDiv>
                            <Button>
                                <Link className = "li" to="/">Sign Up</Link>
                            </Button>
                        </ButtonDiv>
                        <Option>
                            <p>Already have an account ? <SignUpandLoginLink onClick={handleChange}><u>Login</u></SignUpandLoginLink></p>
                        </Option>
                    </SignUpSection>
                }
            </LoginContainer>
        </LoginPageContainer>
        
     );
}
 
export default Login;
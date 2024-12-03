import React, { useState } from "react";
import * as MainBox from './SigInCss';

function LogIn() {
    const [signIn, toggle] = React.useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('your-backend-url', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

     return(
         <MainBox.Container >
             {signIn ? (
                <MainBox.SignInContainer signinIn={signIn}>
                    <MainBox.Form onSubmit={handleSubmit}>
                        <MainBox.Title className="text-4xl">Sign in</MainBox.Title>
                        <MainBox.Input type='email' name='email' placeholder='Email_Id' onChange={handleChange} />
                        <MainBox.Input type='password' name='password' placeholder='Password' onChange={handleChange} />
                        <MainBox.Anchor href='#'>Forgot your password?</MainBox.Anchor>
                        <MainBox.Button type="submit">LOG IN</MainBox.Button>
                    </MainBox.Form>
                </MainBox.SignInContainer>
            ) : (
                <MainBox.SignUpContainer signinIn={signIn}>
                    <MainBox.Form onSubmit={handleSubmit}>
                        <MainBox.Title className="text-4xl">Registration</MainBox.Title>
                        <MainBox.Input type='text' name='name' placeholder='What should we call you by?' onChange={handleChange} />
                        <MainBox.Input type='email' name='email' placeholder='Email_Id' onChange={handleChange} />
                        <MainBox.Input type='password' name='password' placeholder='Password' onChange={handleChange} />
                        <MainBox.Button type="submit">JOIN</MainBox.Button>
                    </MainBox.Form>
                </MainBox.SignUpContainer>
            )}

             <MainBox.OverlayContainer signinIn={signIn}>
                 <MainBox.Overlay signinIn={signIn}>

                 <MainBox.LeftOverlayPanel signinIn={signIn}>
                     <MainBox.Title className="text-4xl">Welcome To Anime Verce!</MainBox.Title>
                     <MainBox.Paragraph>
                         It's Great To See You Again
                     </MainBox.Paragraph>
                     <MainBox.GhostButton onClick={() => toggle(true)}>
                         LOG IN
                     </MainBox.GhostButton>
                     </MainBox.LeftOverlayPanel>

                     <MainBox.RightOverlayPanel signinIn={signIn}>
                       <MainBox.Title className="text-4xl">Not on Anime Verce yet?</MainBox.Title>
                       <MainBox.Paragraph>
                           Get Started
                       </MainBox.Paragraph>
                           <MainBox.GhostButton onClick={() => toggle(false)}>
                               Join Us!
                           </MainBox.GhostButton> 
                     </MainBox.RightOverlayPanel>
 
                 </MainBox.Overlay>
             </MainBox.OverlayContainer>

         </MainBox.Container>
     )
}

export default LogIn;
import React from 'react'
import { Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Container, Icon, Text } from './SigninElements'

const SignIn = () => {
  return (
    <>
        <Container>
            <FormWrap>
                <Icon to='/'>KUZOG</Icon>
                <FormContent>
                    <Form action='#'>
                        <FormH1>Contact Us</FormH1>
                        <FormLabel htmkFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required />
                        <FormButton type='submit'>Send</FormButton>\
                        <Text>Forgot Password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    </>
  )
}

export default SignIn
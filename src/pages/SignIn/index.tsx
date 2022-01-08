import React , {useState}from 'react';
import { View,Text} from 'react-native';

import { 
  SignInContainer,
  SignInInputContainer,
  SignInInputArea,
  SignInInputDescription
} from './styles';

import SubmitButton from '../../components/SubmitButton';
import {signIn} from '../../services/auth'


const SignIn: React.FC = () => {
  const [user,setUser] = useState('')
  const [password,setPassword] = useState('')


  async function HandleSignIn(){
    const response = await signIn();

    console.log(response)
  }

  console.log(user)
  return (
  <SignInContainer>
    <SignInInputContainer>
        <SignInInputDescription>Usuário</SignInInputDescription>
        <SignInInputArea onChangeText={(inputUser:string) => setUser(inputUser)}/>

        <SignInInputDescription>Senha</SignInInputDescription>
        <SignInInputArea onChangeText={(inputPassword:string) => setPassword(inputPassword)}/>

        <SubmitButton signInFunction={HandleSignIn}/>
    </SignInInputContainer>    
  </SignInContainer>  
  );
}

export default SignIn;
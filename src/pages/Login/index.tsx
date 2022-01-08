import React , {useState}from 'react';
import { View,Text} from 'react-native';

import { 
  LoginContainer,
  LoginInputContainer,
  LoginInputArea,
  LoginInputDescription
} from './styles';

import SubmitButton from '../../components/SubmitButton';

const Login: React.FC = () => {
  const [user,setUser] = useState([])
  return (
  <LoginContainer>
    <LoginInputContainer>
        <LoginInputDescription>Usuário</LoginInputDescription>
        <LoginInputArea/>

        <LoginInputDescription>Senha</LoginInputDescription>
        <LoginInputArea/>

        <SubmitButton funcao={teste}/>
    </LoginInputContainer>    
  </LoginContainer>  
  );
}

export default Login;
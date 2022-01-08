import React from 'react';
import {Text,TouchableOpacity} from 'react-native';

import {
   SubmitButtonContainer,
   SubmitButtonText,
   } from './styles';

   
   
   
 

const SubmitButton: React.FC = (props) => {
 
  const niel = () =>{
    
    props.funcao()
  }

  return (
    <SubmitButtonContainer >
      <TouchableOpacity onPress={ niel }>
        <SubmitButtonText>Entrar</SubmitButtonText>
      </TouchableOpacity>
    </SubmitButtonContainer>
  );
}

export default SubmitButton;
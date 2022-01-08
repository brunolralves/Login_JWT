import React from 'react';
import {Text,TouchableOpacity} from 'react-native';

import {
   SubmitButtonContainer,
   SubmitButtonText,
   } from './styles';

  

const SubmitButton: React.FC = (props) => {
 
const handleButtonProps = () => {
  props.signInFunction();
}

  return (
      <TouchableOpacity onPress={handleButtonProps}>
        <SubmitButtonContainer >
            <SubmitButtonText>Entrar</SubmitButtonText>
        </SubmitButtonContainer>
      </TouchableOpacity>
  );
}

export default SubmitButton;
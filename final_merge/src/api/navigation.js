import { useNavigation } from '@react-navigation/native';
import React from 'react'
import {Text, Button} from 'native-base';

export function GoToButton({ screenName }) {
    const navigation = useNavigation();
  
    return (
      <Button small info
        title={`Go to ${screenName}`}
        onPress={() => navigation.navigate(screenName)}
      ><Text>Go to ${screenName}</Text></Button>
    );
  }
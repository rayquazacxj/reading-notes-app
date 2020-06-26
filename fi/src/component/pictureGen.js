import React from 'react'
import {
    View,
    StyleSheet,
    TouchableHighlight,
    TextInput
  } from 'react-native'
import { Container, Item, Input ,Text, Button} from 'native-base';

  export default class PictureGen extends React.Component {
    constructor(props) {
        super(props);
        
        //this.handlePress = this.handlePress.bind(this)
    }
    render() {

        return(
            <Container >
                <Text> SCREEN3~! </Text>
                <Item rounded >
                    <Input placeholder="SCREEN3" />
                </Item> 
                
                
                    
                
                  
            </Container>
        )
        
    }
  }

  const styles = StyleSheet.create({
    buttont: {
        marginBottom: 30,
        width: 150,
        height:100,
        borderRadius: 100,
        alignItems: 'center',
        backgroundColor: 'yellow'
      },

    
});

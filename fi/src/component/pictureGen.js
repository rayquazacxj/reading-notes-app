import React from 'react'
import {
    View,
    StyleSheet,
    TouchableHighlight,
    TextInput,
    Image,
    ImageBackground
  } from 'react-native'
import { Container, Item, Input ,Text, Button} from 'native-base';
import Draggable from 'react-native-draggable'


  export default class PictureGen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedPic:require('../picture/PIC3.png') ,
          text: ''
      }
        this.handleSelectPic = this.handleSelectPic.bind(this)
    }
    render() {
        console.log('this.state.selectedPic: ',this.state.selectedPic)

        //<Image source={require(this.state.selectedPic) }  style={{width:410,height:600}}></Image>
        return(
            <Container >
                

                
                  <ImageBackground source={this.state.selectedPic }  style={{width:411,height:500}}>
                    
                    <Draggable x={50} y={150}  >
                        <Item rounded >
                            <Input placeholder="Description"  style={{width:200,height:100}} onChangeText={(text)=>{this.setState({text:text});console.log(text)}}/>
                            
                        </Item>
                        <Text> Hello {this.state.text}  </Text>
                      </Draggable>

                  </ImageBackground>
                
                <View style={{flexDirection:'row'}}>
                  <TouchableHighlight onPressIn={()=>this.handleSelectPic(require('../picture/PIC1.png'))} underlayColor="green">
                    <Image source={require('../picture/PIC1.png') }  style={{width:150,height:150}}></Image>
                  </TouchableHighlight>

                  <TouchableHighlight onPressIn={()=>this.handleSelectPic(require('../picture/PIC2.png'))} underlayColor="green">
                    <Image source={require('../picture/PIC2.png') }  style={{width:150,height:150}}></Image>
                  </TouchableHighlight>

                  <TouchableHighlight onPressIn={()=>this.handleSelectPic(require('../picture/PIC3.png'))} underlayColor="green">
                    <Image source={require('../picture/PIC3.png') }  style={{width:150,height:150}}></Image>
                  </TouchableHighlight>
                </View>

                
                
                  
            </Container>
        )
        
    }

    handleSelectPic(pic){
      this.setState({
          selectedPic: pic 
      });
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

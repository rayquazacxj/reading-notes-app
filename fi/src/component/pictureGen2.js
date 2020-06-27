import React from 'react'
import {
    View,
    StyleSheet,
    TouchableHighlight,
    TextInput,
    Image,
    ImageBackground,
    Keyboard,
    KeyboardAvoidingView,
    TouchableWithoutFeedback
  } from 'react-native'

import { Container, Item, Input ,Text, Button} from 'native-base';
import Draggable from 'react-native-draggable'
import { color } from 'react-native-reanimated';



  export default class PictureGen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedPic:require('../picture/PIC3.png') ,
          text: '',
          style:{
            fontSize:30
          }

      }
        
        this.handleSelectPic = this.handleSelectPic.bind(this)
    }

    render() {
        console.log('this.state.selectedPic: ',this.state.selectedPic)
        console.log('this.state.stlye: ',this.state.style)

        //<Image source={require(this.state.selectedPic) }  style={{width:410,height:600}}></Image>
        return(
            <Container>

                  

                  
                  <ImageBackground source={this.state.selectedPic }  style={{width:411,height:600}}>
                    <View>
                        <Item rounded  >
                            <TextInput style={this.state.style} placeholder="type here"  onChangeText={(text)=>this.setState({description: text})}/>
                        </Item>
                        <View style={{flexDirection:'row'}}>
                            <Button  small success onPress={()=>this.setState({style:{...this.state.style,fontWeight: 'bold',fontSize: 40}})} ><Text>  bold </Text></Button>
                            <Button  small success onPress={()=>this.setState({style:{...this.state.style,fontStyle: 'italic'}})} ><Text>  italic </Text></Button>
                            <Button  small success onPress={()=>this.setState({style:{...this.state.style,textDecorationLine: 'underline'}})} ><Text>  underline </Text></Button>
                            <Button  small success onPress={()=>this.setState({style:{...this.state.style,textDecorationLine: 'line-through'}})} ><Text>  line-through </Text></Button>
                        </View>
                    </View>

                    <Draggable x={100} y={100}>
                        <Text style={this.state.style}>
                            {this.state.description}
                        </Text>  
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

    onStyleKeyPress = (toolType) => {
        this.editor.applyToolbar(toolType);
    }

    onSelectedTagChanged = (tag) => {
        this.setState({
            selectedTag: tag
        })
    }

    onSelectedStyleChanged = (styles) => { 
        this.setState({
            selectedStyles: styles,
        })
    }

    onValueChanged = (value) => {
        this.setState({
            value: value
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
      main: {
          //flex: 1,
          marginTop: 10,
          //paddingLeft: 30,
          //paddingRight: 30,
          //paddingBottom: 1,
          height: 200
          //alignItems: 'stretch',
      },
      toolbarButton: {
          fontSize: 20,
          width: 28,
          height: 28,
          textAlign: 'center'
      },
      italicButton: {
          fontStyle: 'italic'
      },
      boldButton: {
          fontWeight: 'bold'
      },
      underlineButton: {
          textDecorationLine: 'underline'
      },
      lineThroughButton: {
          textDecorationLine: 'line-through'
      },

    
});

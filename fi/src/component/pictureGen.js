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
import  CNRichTextEditor , { CNToolbar, getInitialObject , getDefaultStyles } from "react-native-cn-richtext-editor";

  const defaultStyles = getDefaultStyles();

  export default class PictureGen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedPic:require('../picture/PIC3.png') ,
          text: '',

          selectedTag : 'body',
          selectedStyles : [],
          value: [getInitialObject()]
      }
        this.editor = null;
        this.handleSelectPic = this.handleSelectPic.bind(this)
    }

    render() {
        console.log('this.state.selectedPic: ',this.state.selectedPic)

        //<Image source={require(this.state.selectedPic) }  style={{width:410,height:600}}></Image>
        return(
            <Container>

                  

                  
                  <ImageBackground source={this.state.selectedPic }  style={{width:411,height:600}}>

                        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >             
                            <View style={styles.main}>
                                <CNRichTextEditor                   
                                    ref={input => this.editor = input}
                                    onSelectedTagChanged={this.onSelectedTagChanged}
                                    onSelectedStyleChanged={this.onSelectedStyleChanged}
                                    value={this.state.value}
                                    style={{ backgroundColor : '#fff' ,fontSize:30}}
                                    styleList={defaultStyles}
                                    onValueChanged={this.onValueChanged}
                                />                        
                            </View>
                        </TouchableWithoutFeedback>

                
                            <View style={{minHeight: 35}}>
            
                                <CNToolbar
                                    style={{
                                        height: 35,
                                    }}
                                    iconSetContainerStyle={{
                                        flexGrow: 1,
                                        justifyContent: 'space-evenly',
                                        alignItems: 'center',
                                    }}
                                    size={30}
                                    iconSet={[
                                        {
                                            type: 'tool',
                                            iconArray: [{
                                                toolTypeText: 'italic',
                                                    buttonTypes: 'style',
                                                    iconComponent:
                                                        <Text style={styles.toolbarButton}>
                                                            italic
                                                        </Text>
                                            }]
                                        },
                                        {
                                            type: 'tool',
                                            iconArray: [{
                                                toolTypeText: 'bold',
                                                buttonTypes: 'style',
                                                iconComponent:
                                                    <Text style={styles.toolbarButton}>
                                                    bold
                                                    </Text>
                                            }]
                                        },
                                        {
                                            type: 'tool',
                                            iconArray: [{
                                                toolTypeText: 'lineThrough',
                                                buttonTypes: 'style',
                                                iconComponent:
                                                    <Text style={styles.toolbarButton}>
                                                    lineThrough
                                                    </Text>
                                            }]
                                        },
                                        {
                                            type: 'tool',
                                            iconArray: [{
                                                toolTypeText: 'underline',
                                                buttonTypes: 'style',
                                                iconComponent:
                                                    <Text style={styles.toolbarButton}>
                                                    underline
                                                    </Text>
                                            }]
                                        },
                                        
                                        
                                    ]}
                                    selectedTag={this.state.selectedTag}
                                    selectedStyles={this.state.selectedStyles}
                                    onStyleKeyPress={this.onStyleKeyPress}
                                        />
                            </View>
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

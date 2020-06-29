import React ,{ useRef } from 'react'
import {
    View,
    StyleSheet,
    TouchableHighlight,
    TextInput,
    Image,
    ImageBackground,
    PermissionsAndroid,
    KeyboardAvoidingView,
    TouchableWithoutFeedback
  } from 'react-native'

import { Container, Item, Input ,Text, Button} from 'native-base';
import Draggable from 'react-native-draggable'
import {GoToButton} from '../../api/navigation';
import { ViewShot,captureRef } from "react-native-view-shot";
import CameraRoll from "@react-native-community/cameraroll";



  export default class PictureGen extends React.Component {
    constructor(props) {
        super(props);

        this.ref = React.createRef();


        this.state = {
          selectedPic:require('../../assets/PIC1.png'),
          text: '',
          style:{
            fontSize:30,
            
          },
          editor_invisible:false,
          pictureSelector_invisible:false,
          res:null

      }
      
        
        this.handleSelectPic = this.handleSelectPic.bind(this)
        this.handleViewShot = this.handleViewShot.bind(this)
    }

    render() {
        console.log('this.state.selectedPic: ',this.state.selectedPic)
        console.log('this.state.stlye: ',this.state.style)
        //console.log('hi myRef: ',this.myRef)

        var style_invisible =  false 
        //<Image source={require(this.state.selectedPic) }  style={{width:410,height:600}}></Image>
        return(
            <Container>
                
                <View style={{flexDirection:'row'}}>
                    <Button  style={styles.button} onPress={()=> this.setState({editor_invisible:!this.state.editor_invisible})} ><Text style={{color:'#397956'}}>         edit </Text></Button>
                    <Button  style={styles.button} onPress={()=> this.setState({pictureSelector_invisible:!this.state.pictureSelector_invisible})} ><Text style={{color:'#397956'}}>   picture </Text></Button>
                    
                    
                    
                </View>

                <View collapsable={false} ref={this.ref} > 
                  
                  <ImageBackground source={this.state.selectedPic }  style={{width:411,height:680}}>
                    <View style={{opacity: this.state.editor_invisible? 0:100}}>

                        <View style={{flexDirection:'row'}}>
                            <Button  style={styles.button}  onPress={()=>this.setState({style:{...this.state.style,color:'green'}})} ><Text style={{color:'#397956'}}>  color </Text></Button>
                            <Button  style={styles.button}  onPress={()=>this.setState({style:{...this.state.style,fontSize:40}})} ><Text style={{color:'#397956'}}>  fontSize </Text></Button>
                            <Button  style={styles.button}  onPress={()=>this.setState({style:{...this.state.style,fontFamily:'pirulen'}})} ><Text style={{color:'#397956'}}>  fontA </Text></Button>
                            <Button  style={styles.button}  onPress={()=>this.setState({style:{...this.state.style,fontFamily:'vincHand'}})} ><Text style={{color:'#397956'}}>  fontB </Text></Button>
                        </View>

                        <Item   style={{backgroundColor:'white',opacity:0.8}}>
                            <Input style={this.state.style} placeholder="type here"  onChangeText={(text)=>this.setState({description: text})}/>
                        </Item>

                        
                        
                        
                    </View>
                    
                    
                    
                    <Draggable x={100} y={200}>
                        <Text style={this.state.style}>
                            {this.state.description}
                        </Text>  
                    </Draggable>

                    <View style={{marginTop:434,flexDirection:'row',opacity: this.state.pictureSelector_invisible? 0:100}}>
                        <TouchableHighlight onPressIn={()=>this.handleSelectPic(require('../../assets/PIC1.png'))} underlayColor="green">
                            <Image source={require('../../assets/PIC1.png') }  style={{width:411/3,height:150,borderColor:'#397956',borderWidth:3,opacity:0.8}}></Image>
                        </TouchableHighlight>

                        <TouchableHighlight onPressIn={()=>this.handleSelectPic(require('../../assets/PIC2.png'))} underlayColor="green">
                            <Image source={require('../../assets/PIC2.png') }  style={{width:411/3,height:150,borderColor:'#397956',borderWidth:3,opacity:0.8}}></Image>
                        </TouchableHighlight>

                        <TouchableHighlight onPressIn={()=>this.handleSelectPic(require('../../assets/PIC3.png'))} underlayColor="green">
                            <Image source={require('../../assets/PIC3.png') }  style={{width:411/3,height:150,borderColor:'#397956',borderWidth:3,opacity:0.8}}></Image>
                        </TouchableHighlight>
                    </View>

                 </ImageBackground>
                </View>
            </Container> 
                                          
            
        )
        
    }
    
    
                        
    handleSelectPic(pic){
      this.setState({
          selectedPic: pic 
      });
    }
/*
    async  hasAndroidPermission() {
        const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
      
        const hasPermission = await PermissionsAndroid.check(permission);
        if (hasPermission) {
          return true;
        }
      
        const status = await PermissionsAndroid.request(permission);
        console.log('status: ',status)
        return status === 'granted';
      }

      
      

      async  savePicture(res) {
        console.log('savePicture')
        await this.hasAndroidPermission();

        if (!(await this.hasAndroidPermission())) {
            console.log('doesnt has AndroidPermission')
          return;
        }
      
        CameraRoll.saveToCameraRoll(res).then(console.log('saveToCameraRoll', 'Photo added to camera roll!'));
      };*/

      

    handleViewShot(){
        console.log('hi this.ref: ',this.ref)

        captureRef(this.ref,{
            format: "jpg",
            quality: 0.8
        }).then(res => {
            this.setState({ res});

            console.log('res:',res)

            this.savePicture(res)

            //CameraRoll.saveToCameraRoll(res).then(console.log('Success', 'Photo added to camera roll!'))
            
        })

       

    }

   
    
    
    
  }




  const styles = StyleSheet.create({
    button: {
        flex:1,
        height:30,
        alignItems: 'stretch',
        backgroundColor: '#BCDBCA',
       
      },

      test:{fontSize: 40, fontFamily: "pirulen", fontWeight: "bold", fontStyle: "italic", textDecorationLine: "underline"}
      
      

    
});

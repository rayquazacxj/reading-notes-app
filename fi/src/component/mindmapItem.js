import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity,
    TextInput
  } from 'react-native'
import Draggable from 'react-native-draggable'
import { Button} from 'native-base';

export default class MindmapItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text:"",
            disabled: false
        }
        this.handleEdit = this.handleEdit.bind(this)
        this.handlePress = this.handlePress.bind(this)
        //this.hasSubItem = this.hasSubItem.bind(this)
    }
    render() {
        return(
            <Draggable x={50/*this.getRandomInt(50,-50)*/} y={100/*this.getRandomInt(50,-50)*/} disabled={this.state.disabled} >
                <TouchableHighlight onPressIn={()=>this.setState({subItem: this.state.subItem+1 , disabled: false })} underlayColor="green">
                    <View style={{padding:10},styles.buttont}>
                        <TextInput
                            placeholder="Type  here"
                            onChangeText={this.handleEdit}
                        />
                        <Text> Hello {this.state.text}  </Text>
                        <TouchableOpacity style={{padding:10},styles.button} onPressIn={(evt)=>{this.setState({disabled: true }); console.log('press',evt.nativeEvent.locationX)}} onPress={(evt)=>{ this.setState({disabled: false }); console.log('no press',this.state.disabled,evt.nativeEvent.locationX)}} />
                            
                        
                    </View>
                </TouchableHighlight>
            </Draggable> 
        )
    }/*
    handlePressOut(){
        setTimeout
        this.setState({disabled: false });
        console.log('no press')
    }*/
    getRandomInt(max,min) {
        return Math.floor(Math.random() * Math.floor(max-min));
    }

    ItemRenderer() {
        //if(this.state.subItem)console.log('hihi')
        /*
        if(this.state.subItem){
            let subItemSet = []
            for(let i =0;i<this.state.subItem;i++){
                subItemSet.push(<MindmapItem />)
            }
            return subItemSet 
        }*/
        /*this.state.list.map(listing =>
             <View key={'view ' + listing}>
                 <Text key={'text ' + listing } style={{ color: 'black' }}>
                     {listing}
                 </Text>
             </View>
         );*/
     }

     
    handleEdit = typedText => {
        console.log("update => ", typedText);
        this.setState({
            text: typedText
        });
    };

    handlePress(){
        alert('handlePress!')
        return(
            <MindmapItem  />
        )
    }

    
}

const styles = StyleSheet.create({
    buttont: {
        marginBottom: 30,
        width: 200,
        height:200,
        borderRadius:100,
        alignItems: 'center',
        backgroundColor: 'yellow'
      },
    button: {
        marginBottom: 10,
        width: 100,
        height:55,
        borderRadius:10,
        alignItems: 'center',
        backgroundColor: 'green'
    },

    
});
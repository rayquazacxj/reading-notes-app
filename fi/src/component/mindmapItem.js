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
import {connect} from 'react-redux';

class MindmapItem extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = {
            text:"",
            disabled: false
        }
        this.handleEdit = this.handleEdit.bind(this)
       
        
    }
    render() {
        console.log(this.props.mindmapItemNum)

        return(
        
            <Draggable x={50} y={100} disabled={this.state.disabled} >
                <TouchableHighlight onPressIn={()=>this.setState({  disabled: false })} underlayColor="green">
                    <View style={{padding:10},styles.buttont}>
                        <TextInput
                            placeholder="Type  here"
                            onChangeText={this.handleEdit}
                        />
                        <Text> Hello {this.state.text} {this.props.key} </Text>
                        <TouchableOpacity style={{padding:10},styles.button} onPressIn={(evt)=>{this.setState({disabled: true }); console.log('press',evt.nativeEvent.locationX)}} onPress={(evt)=>{ this.setState({disabled: false }); console.log('no press',this.state.disabled,evt.nativeEvent.locationX)}} />
                            
                        
                    </View>
                </TouchableHighlight>
            </Draggable> 
        )
    }
    getRandomInt(max,min) {
        return Math.floor(Math.random() * Math.floor(max-min));
    }

    
     
    handleEdit = typedText => {
        console.log("update => ", typedText);
        this.setState({
            text: typedText
        });
    };

    
    
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

export default connect(state => ({
    ...state.ConnectMindmapItem,
    mindmapItemNum: state.MindmapInfo.mindmapItemNum
    
}))(MindmapItem);

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
import {set_connect_candidate, update_connectSet} from '../state/mindmap-action'

class MindmapItem extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = {
            id:null,
            text:"",
            disabled: false
        }
        this.handleEdit = this.handleEdit.bind(this)
        this.handleSetConnect = this.handleSetConnect.bind(this)
        
    }
    render() {
        console.log(this.props.mindmapItemNum)

        return(
    
            <Draggable x={50} y={100} disabled={this.state.disabled} onDrag={(evt)=>console.log('on drag',evt.nativeEvent.locationX)}>
                <TouchableHighlight onPressIn={()=>this.setState({disabled: false })} underlayColor="green">
                    <View style={{padding:10},styles.buttont}>
                        <TextInput
                            placeholder="Type  here"
                            onChangeText={this.handleEdit}
                        />
                        <Text> Hello {this.state.text} {this.state.id} </Text>
                        <TouchableOpacity style={{padding:10},styles.button} onPressIn={this.handleSetConnect} onPress={(evt)=>{ this.setState({disabled: false }); console.log('no press',this.state.disabled,evt.nativeEvent.locationX)}} />
                            
                        
                    </View>
                </TouchableHighlight>
            </Draggable> 
        )
    }

    componentDidMount() {
        this.setState({  
            id:this.props.mindmapItemNum
        })
        console.log('componentDidMount: ',this.state.id)
    }

    handleSetConnect(){
        this.setState({  
            disabled:true
        })
        this.props.dispatch(set_connect_candidate(this.state.id));

        if(this.props.selectNum>0){
            this.props.dispatch(update_connectSet());
        }

        console.log('selectedKey1: ',this.props.selectedKey1)
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
        height:150,
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

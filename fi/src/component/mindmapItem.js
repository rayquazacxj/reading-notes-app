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
import {set_connect_candidate, update_connectSet} from '../state/mindmap-action'
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';


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
        this.handleDragRelease = this.handleDragRelease.bind(this)
        
    }
    render() {
        //console.log(this.props.mindmapItemNum)

        return(
    
            <Draggable x={50} y={100} disabled={this.state.disabled} onDragRelease={(evt)=>this.handleDragRelease(evt)}>
                <TouchableHighlight onPressIn={()=>this.setState({disabled: false })} underlayColor="green">
                    <View style={{padding:10},styles.buttont}>
                        <TextInput
                            placeholder="Type  here"
                            onChangeText={this.handleEdit}
                        />
                        <Text> Hello {this.state.text} {this.state.id} parent:{this.props.idx} text:{this.props.text}</Text>
                        <TouchableOpacity style={{padding:10},styles.button} onPressIn={this.handleSetConnect} onPress={(evt)=>{ this.setState({disabled: false }); console.log('no press',this.state.disabled,evt.nativeEvent.locationX)}} />
                            
                        
                    </View>
                </TouchableHighlight>
            </Draggable> 
        )
    }

    componentDidMount() {/*
        this.setState({  
            id:this.props.mindmapItemNum
        })
        console.log('componentDidMount: ',this.state.id)*/
        
    }

    handleSetConnect(){
        this.setState({  
            disabled:true
        })
       
        this.props.dispatch(set_connect_candidate(this.props.id));

        if(this.props.selectNum>0 && this.props.selectedKey1!=null && this.props.selectedKey2!=null){
            this.props.dispatch(update_connectSet());
        }

        //console.log('selectedKey1: ',this.props.selectedKey1)
    }

    getRandomInt(max,min) {
        return Math.floor(Math.random() * Math.floor(max-min));
    }

    async handleDragRelease(evt){
        evt.persist();
        let ItemData = await AsyncStorage.getItem(this.props.idx)
        ItemData = ItemData ? JSON.parse(ItemData) : [] 
        var lx = evt.nativeEvent.pageX
        var ly = evt.nativeEvent.pageY
        console.log(lx,ly)

        let newData = {
            X: lx,
            Y: ly,
            text : (ItemData&&ItemData.text)? ItemData.text : ""
        }

        console.log('ori_data: ',ItemData,'new_data: ',JSON.stringify(newData))
        await  AsyncStorage.setItem(this.props.idx, JSON.stringify(newData))
        

    }
    
     
    async handleEdit(typedText){
        try{
            
            console.log("update => ", typedText,this.props.idx);
            this.setState({
                text: typedText
            });

            let ItemData = await AsyncStorage.getItem(this.props.idx)
            ItemData = ItemData ? JSON.parse(ItemData) : [] 

            let newData = {
                X: (ItemData&&ItemData.X)?ItemData.X: 0,
                Y: (ItemData&&ItemData.Y)?ItemData.Y: 0,
                text : typedText
            }

            console.log('ori_data: ',ItemData,'new_data: ',JSON.stringify(newData))
            await  AsyncStorage.setItem(this.props.idx, JSON.stringify(newData))

           
        }catch(e){
            if(e)console.log(e,'catch err')
        }
        

        /*
        let ItemData = await AsyncStorage.getItem(this.props.idx)
        ItemData = ItemData ? JSON.parse(ItemData) : [] 
        ItemData.text = typedText
        console.log(ItemData)
        await  AsyncStorage.setItem(this.props.idx, JSON.stringify(ItemData))*/
        /*
        AsyncStorage.getItem(this.props.idx).then((result,err) => {
            var ItemData = result ? JSON.parse(result) : []
            console.log(result,ItemData)
            ItemData.text = typedText
            console.log(ItemData)
            AsyncStorage.setItem(this.props.idx, JSON.stringify(ItemData),err=>{
                if(err)console.log('catch err')
            })
            console.log('async edited')
        })
        
        const storeData = async (typedText) => {
            try {
                console.log('async edit')
                let ItemData = await AsyncStorage.getItem(this.props.idx)
                    

                ItemData = ItemData ? JSON.parse(ItemData) : [];
                ItemData.text = typedText
                console.log(ItemData)
                await AsyncStorage.setItem(this.props.idx, JSON.stringify(ItemData))

            } catch (e) {
                if(e)console.log('catch err')
              // saving error
            }
          }*/

          //console.log('end edit',storeData)
    }

    
    
}

const styles = StyleSheet.create({
    buttont: {
        marginBottom: 30,
        width: 150,
        height:100,
        borderRadius:100,
        alignItems: 'center',
        backgroundColor: 'yellow'
      },
    button: {
        marginBottom: 10,
        width: 50,
        height:25,
        borderRadius:10,
        alignItems: 'center',
        backgroundColor: 'green'
    },

    
});

export default connect(state => ({
    ...state.ConnectMindmapItem,
    mindmapItemNum: state.MindmapInfo.mindmapItemNum
    
}))(MindmapItem);

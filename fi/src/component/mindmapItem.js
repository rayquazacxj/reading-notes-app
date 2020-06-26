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
                        <Text> Hello {this.state.text} {this.state.id} parent:{this.props.idx}</Text>
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
        this.props.dispatch(set_connect_candidate(0));

        if(this.props.selectNum>0){
            this.props.dispatch(update_connectSet());
        }

        //console.log('selectedKey1: ',this.props.selectedKey1)
    }

    getRandomInt(max,min) {
        return Math.floor(Math.random() * Math.floor(max-min));
    }

    async handleDragRelease(evt){
        evt.persist();
        console.log(evt.nativeEvent.locationX,evt.nativeEvent.locationY)
        let ItemData = await AsyncStorage.getItem(this.props.idx)
        ItemData = ItemData ? JSON.parse(ItemData) : [] 
        var lx = evt.nativeEvent.locationX
        var ly = evt.nativeEvent.locationY
        console.log(lx,ly)

        let newData = {
            X: lx,
            Y: ly,
            text : (ItemData&&ItemData.text)? ItemData.text : ""
        }

        console.log(ItemData,JSON.stringify(newData))
        await  AsyncStorage.setItem(this.props.idx, JSON.stringify(newData))
        /*
        console.log('on drag',this.props.idx,evt.nativeEvent.locationX)
        var lx = evt.nativeEvent.locationX
        var ly =evt.nativeEvent.locationY

        let ItemData = await AsyncStorage.getItem(this.props.idx)
        ItemData = ItemData ? JSON.parse(ItemData) : []
        console.log(result,ItemData)
        ItemData.X = lx
        ItemData.Y = ly
        console.log(ItemData)
        await AsyncStorage.setItem(this.props.idx, ItemData)
*/
        /*
        AsyncStorage.getItem(this.props.idx).then((result,err) => {
            var ItemData = result ? JSON.parse(result) : []
            console.log(result,ItemData)
            ItemData.X = lx
            ItemData.Y = ly
            console.log(ItemData)
            AsyncStorage.setItem(this.props.idx, JSON.stringify(ItemData),err=>{
                if(err)console.log('catch err')
            })
            console.log('async edited')
        })*/

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

            console.log(ItemData,JSON.stringify(newData))
            await  AsyncStorage.setItem(this.props.idx, JSON.stringify(newData))
            
            let ItemData2 = await AsyncStorage.getItem(this.props.idx)
            ItemData2 = ItemData2 ? JSON.parse(ItemData2) : [] 
            console.log('i2: ',ItemData2)

           
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

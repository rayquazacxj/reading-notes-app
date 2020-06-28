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
            disabled: false,
            X:50,  // for init position
            Y:100  // for init position
        }
        this.handleEdit = this.handleEdit.bind(this)
        this.handleSetConnect = this.handleSetConnect.bind(this)
        this.handleDragRelease = this.handleDragRelease.bind(this)
        this.handleInfo = this.handleInfo.bind(this)
        
    }
    render() {
        //console.log(this.props.mindmapItemNum)

        return(
    
            <Draggable x={this.state.X} y={this.state.Y} disabled={this.state.disabled} onDragRelease={(evt)=>this.handleDragRelease(evt)}>
                <TouchableHighlight onPressIn={()=>this.setState({disabled: false })} underlayColor="green">
                    <View style={{padding:10},styles.buttont}>
                        <TextInput
                            placeholder="Type  here"
                            onChangeText={this.handleEdit}
                        />
                        <Text> Hello {this.state.text}  </Text>
                        <TouchableOpacity style={{padding:10},styles.button} onPressIn={this.handleSetConnect} onPress={(evt)=>{ this.setState({disabled: false }); console.log('no press',this.state.disabled,evt.nativeEvent.locationX)}} />
                            
                        
                    </View>
                </TouchableHighlight>
            </Draggable> 
        )
    }

    componentDidMount() {
        console.log('hi mindmapItem')
        this.handleInfo()
        console.log('hi mindmapItem hi')
    }

    handleSetConnect(){
        this.setState({  
            disabled:true
        })
       
        this.props.dispatch(set_connect_candidate(this.props.id));

        if(this.props.selectNum>0 ){
            let prev_ConnectSetNum = this.props.connectSet.length

            this.props.dispatch(update_connectSet());

            if(this.props.connectSet.length > prev_ConnectSetNum ){
                console.log('update connectSet in storage')
                this.update_connectSetInStorage()
            }
        }

        //console.log('selectedKey1: ',this.props.selectedKey1)
    }

    async update_connectSetInStorage(){
        //let book_id_connectSet = await AsyncStorage.getItem('book_id_connectSet') //`book_${id}_connectSet`
       // console.log('book_id_connectSet(in mindmap): ',book_id_connectSet )
        //book_id_connectSet = book_id_connectSet ? JSON.parse(book_id_connectSet):[]

        await  AsyncStorage.setItem('book_id_connectSet', JSON.stringify(this.props.connectSet))


    }

    async handleInfo(){
            let itemInfo = await AsyncStorage.getItem(this.props.idx)
            console.log('itemInfo(in mindmapItem): ',itemInfo )
            itemInfo = JSON.parse(itemInfo)
            this.setState({
                text: itemInfo.text,
                X: itemInfo.X,//-100,  
                Y: itemInfo.Y//-120
            });
            console.log('itemInfo: ',this.state.X,this.state.Y,this.props.idx)
            
    }

    async handleDragRelease(evt){
        evt.persist();
        let ItemData = await AsyncStorage.getItem(this.props.idx)
        ItemData = ItemData ? JSON.parse(ItemData) : [] 
        var lx = evt.nativeEvent.pageX-100//evt.nativeEvent.locationX// offset
        var ly = evt.nativeEvent.pageY-120//evt.nativeEvent.locationY// offset
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
        width: 200,
        height:150,
        borderRadius:100,
        alignItems: 'center',
        backgroundColor: 'yellow'
      },
    button: {
        marginBottom: 10,
        width: 100,
        height:50,
        borderRadius:10,
        alignItems: 'center',
        backgroundColor: 'green'
    },

    
});

export default connect(state => ({
    ...state.ConnectMindmapItem,
    mindmapItemNum: state.MindmapInfo.mindmapItemNum
    
}))(MindmapItem);

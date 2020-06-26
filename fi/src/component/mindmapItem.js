import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    TextInput
  } from 'react-native'
import Draggable from 'react-native-draggable'

export default class MindmapItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text:"",
            subItem:0
        }
        this.handleEdit = this.handleEdit.bind(this)
        this.handlePress = this.handlePress.bind(this)
        //this.hasSubItem = this.hasSubItem.bind(this)
    }
    render() {
        return(
            <Draggable x={this.getRandomInt(50,-50)} y={this.getRandomInt(50,-50)}>
                <TouchableHighlight onPress={()=>this.setState({subItem: this.state.subItem+1 })} underlayColor="green">
                    <View style={{padding:10},styles.buttont}>
                        <TextInput
                            placeholder="Type  here"
                            onChangeText={this.handleEdit}
                        />
                        <Text> Hellow~ {this.state.text}{this.state.subItem}  </Text>
                        <View>
                            {this.ItemRenderer()}
                        </View>
                    </View>
                </TouchableHighlight>
            </Draggable> 
        )
    }
    getRandomInt(max,min) {
        return Math.floor(Math.random() * Math.floor(max-min));
    }

    ItemRenderer() {
        //if(this.state.subItem)console.log('hihi')
        
        if(this.state.subItem){
            let subItemSet = []
            for(let i =0;i<this.state.subItem;i++){
                subItemSet.push(<MindmapItem />)
            }
            return subItemSet 
        }
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
        width: 150,
        height:100,
        borderRadius: 100,
        alignItems: 'center',
        backgroundColor: 'yellow'
      },

    
});
import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    StatusBar,
    View,
    Text,
    TouchableHighlight,
    PanResponder,
    Animated,
    TextInput
  } from 'react-native'

import { Container, Header, Content, Item, Input , Button} from 'native-base';
import Draggable from 'react-native-draggable'
import MindmapItem from './mindmapItem'

export default class Mindmap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text:""}
        //this.handlePress = this.handlePress.bind(this)
    }

    render() {/*
        let itemSet = []
        for(let i =0;i<this.state.addSetsCounter;i++){
            itemSet.push(<AddSets key="AddSets-{i}"/>);
        }*/

        return(
            <Container >
                <Text> SCREEN2~ </Text>
                <Item rounded >
                    <Input placeholder="SCREEN2" />
                </Item> 
                {/*}
                <Draggable x={50} y={50}>
                    <TouchableHighlight onPress={()=>alert('You tapped the button!')} underlayColor="green">
                        <View style={{padding:10},styles.buttont}>
                            <Text> HI~ </Text>
                        </View>
                    </TouchableHighlight>
                </Draggable> 

                <Draggable x={100} y={400} renderColor='red' renderText='ABC'/>

                <TouchableHighlight onPress={()=>alert('You tapped the button!')} underlayColor="green">
                    <View style={{padding:10},styles.buttont}>
                        <TextInput
                            placeholder="Type  here"
                            onChangeText={this.handleEdit}
                        />
                        <Text> Hellow~ {this.state.text} </Text>
                    </View>
                    
                </TouchableHighlight>*/}

                <MindmapItem/>
                <MindmapItem/>
                
            </Container>
        )
        
    }/*
    handlePress(){

    }*//*
    handlePress(){
        alert('handlePress!')
        return(
            <Text>HII</Text>
            <MindmapItem onPress={this.handlePress} />
        )
    }*/
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

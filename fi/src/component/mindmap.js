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
import {connect} from 'react-redux';

class Mindmap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemNum:1,
        }
        //this.handlePress = this.handlePress.bind(this)
    }

    render() {
        const {selectedKey1} = this.props;
        console.log(selectedKey1)

        let added_buttons_goes_here =  []
        for(let i=0; i<this.state.itemNum ; i++){
            added_buttons_goes_here.push(
                <MindmapItem  key={i}></MindmapItem>
            )
        }
        

        return(
            <Container >
                <Text> SCREEN2~! </Text>
                <Item rounded >
                    <Input placeholder="SCREEN2" />
                </Item> 
                   
                
                  

                <View>
                    <Button title="Add more" onPress={()=>this.setState({itemNum: this.state.itemNum+1 })} >
                        <Text style={{color:'white'}}>      Add more</Text>
                    </Button>
                    {added_buttons_goes_here}
                </View>

            </Container>

        )
        
    }
    /*
    handleAddButton() {
        let newKey = (this.state.data)? this.state.data.length : 0;
        let newly_added_data = {
            
            key: newKey,
            content: 'new content goes here'
        };
    
        this.setState({
            data: [...this.state.data, newly_added_data]
        });
    }*/

    /*
    _handleRemoveButton(key) {
        let result = this.state.data.filter( (data) => data.key !== key );
    
        this.setState({
            data: result,
        });
    }
    */
    
    
    /*
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

export default connect(state => ({
    ...state.ConnectMindmapItem,

}))(Mindmap);
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

import Svg, {
    Path,
    Polygon,
    Polyline,
    Line,
} from 'react-native-svg';

import { Container, Header, Content, Item, Input , Button} from 'native-base';
import Draggable from 'react-native-draggable'
import MindmapItem from './mindmapItem'
import {connect} from 'react-redux';
import {update_mindmapItemNum } from '../state/mindmap-action'
import AsyncStorage from '@react-native-community/async-storage';

class Mindmap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            connect_positions:[],
            itemTexts:[]
            //connect_lines:[]
        }
        this.handleAddButton = this.handleAddButton.bind(this)
        this.get_connectLines = this.get_connectLines.bind(this)
        this.handleShow = this.handleShow.bind(this)
    }

    render() {
        const {selectedKey1,mindmapItemNum,connectSet} = this.props;
        console.log('selectedKey1: ',selectedKey1,'mindmapItemNum: ',mindmapItemNum,'connectSet: ',connectSet)
        var i=0
        let added_buttons_goes_here =  []
        for(i=0; i<mindmapItemNum ; i++){
            added_buttons_goes_here.push(
                <MindmapItem  key={i} idx={`MindmapItem${i}`} id={i} text={this.state.itemTexts[i]}></MindmapItem>
            )
        }

        
        var connect_lines =  []
        for(let i=0; i<this.state.connect_positions.length ; i++){
            connect_lines.push(
                //<Text key={i}>LINE{i} </Text>
                <Line x1={(this.state.connect_positions[i][2]).toString()} y1={(this.state.connect_positions[i][3]).toString()} x2={(this.state.connect_positions[i][0]).toString()} y2={(this.state.connect_positions[i][1]).toString() } stroke="green" strokeWidth="2" /> 
                //<Svg key={i} height="100" width="100">
                    //<Line x1={this.state.connect_positions[i][2]} y1={this.state.connect_positions[i][3]} x2={this.state.connect_positions[i][0]} y2={this.state.connect_positions[i][1] } stroke="green" strokeWidth="2" /> 
                //</Svg>
            )
        }    
        console.log('connect_lines(in render): ',connect_lines)
           
        

        
        return(
            <Container >
                <Text> SCREEN2~! </Text>
                <Item rounded >
                    <Input placeholder="SCREEN2" />
                </Item> 
                   
                

                    <View>
                        <Button title="show" onPress={this.handleShow} >
                            <Text style={{color:'white'}}>      show</Text>
                        </Button>
                        <Button title="Add more" onPress={this.handleAddButton} >
                            <Text style={{color:'white'}}>      Add more</Text>
                        </Button>
                        <Button title="connect" onPress={this.get_connectLines} >
                            <Text style={{color:'white'}}>      connect</Text>
                        </Button>
                        {added_buttons_goes_here}
                        <Svg  height="400" width="450" viewBox="-20 100 600 600">
                        
                            {connect_lines}
                        
                            

                        
                            
                             
                        </Svg>
                    </View>

                
            </Container>

        )
        
    }
    handleAddButton() {
        this.props.dispatch(update_mindmapItemNum());      
    }
    async handleShow(){
        var itemText = []
        for(let i=0;i<this.props.mindmapItemNum;i++){
            let item = await AsyncStorage.getItem(`MindmapItem${i}`)
            console.log('connectItem1: ',item )
            item = JSON.parse(item);
            itemText.push(   item.text  )

            
        }

        console.log('itemText: ',itemText)
        this.setState({
            itemTexts: itemText,
        });
    }

    componentDidMount(){
       /*
        <Line x1="0" y1="0" x2="100" y2="100" stroke="red" strokeWidth="2" />
                             <Line x1={(50).toString()} y1={(50).toString()} x2={(150).toString()} y2={(150).toString()} stroke="green" strokeWidth="2" />
        if(this.props.connectSet.length){
            this.get_connectLines().then( data => {
                let connect_lines_ = []
                for(let i=0; i<this.props.connectSet.length ; i++){
                    connect_lines_.push(
                        <Line x1={this.state.connect_positions[i][0]} y1={this.state.connect_positions[i][1]} x2={this.state.connect_positions[i][2]} y2={this.state.connect_positions[i][3] } stroke="green" strokeWidth="2" /> 
                    )
                } 
                this.setState({
                    connect_lines: connect_lines_,
                });

            })
        } */
    }
    componentDidUpdate(){

        /*
            this.get_connectLines().then( data => {
                let connect_lines_ = []
                for(i=0; i<connectSet.length ; i++){
                    connect_lines_.push(
                        <Line x1={this.state.connect_positions[i][0]} y1={this.state.connect_positions[i][1]} x2={this.state.connect_positions[i][2]} y2={this.state.connect_positions[i][3] } stroke="green" strokeWidth="2" /> 
                    )
                } 
                this.setState({
                    connect_lines: connect_lines_,
                });

            
            })*/
    }


    async get_connectLines(){
        
        var connectlines = []
        for(let i=0;i<this.props.connectSet.length;i++){

            if(this.props.connectSet[i][0]!=null && this.props.connectSet[i][1]!=null && this.props.connectSet[i][0]!=this.props.connectSet[i][1]){
                let connectItem1 = await AsyncStorage.getItem(`MindmapItem${this.props.connectSet[i][0]}`)
                console.log('connectItem1: ',connectItem1 )
                if(!connectItem1)continue
                connectItem1 = JSON.parse(connectItem1);
                
                let connectItem2 = await AsyncStorage.getItem(`MindmapItem${this.props.connectSet[i][1]}`)
                console.log('connectItem2: ',connectItem2 )
                if(!connectItem2)continue
                connectItem2 = JSON.parse(connectItem2);

                console.log('connectItem1:',connectItem1.X,connectItem1.Y,'connectItem2:',connectItem2.X,connectItem2.Y)
                connectlines.push(   [connectItem1.X,connectItem1.Y,connectItem2.X,connectItem2.Y]  )
            }
        }

        console.log('connectlines: ',connectlines)
        this.setState({
            connect_positions: connectlines,
        });
        console.log('connect_positions(in this.state): ',this.state.connect_positions)

        
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
    mindmapItemNum : state.MindmapInfo.mindmapItemNum
}))(Mindmap);
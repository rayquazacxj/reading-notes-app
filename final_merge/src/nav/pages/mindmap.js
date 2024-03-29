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
import MindmapItem from '../../components/mindmapItem'//'./mindmapItem'
import {connect} from 'react-redux';
import {update_mindmapItemNum ,init_connectSet} from '../../state/mindmap-action'//'../state/mindmap-action'
import AsyncStorage from '@react-native-community/async-storage';
import {GoToButton} from '../../api/navigation';

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
        this.get_dataFromStorage = this.get_dataFromStorage.bind(this)
        
    }

    render() {
        const {selectedKey1,mindmapItemNum,connectSet,currentID} = this.props;
        console.log('selectedKey1: ',selectedKey1,'mindmapItemNum: ',mindmapItemNum,'connectSet: ',connectSet)
        var i=0
        let added_buttons_goes_here =  []
        for(i=0; i<mindmapItemNum ; i++){
            added_buttons_goes_here.push(
                <MindmapItem  key={i} idx={`MindmapItem${currentID}-${i}`} id={i} text={this.state.itemTexts[i]}></MindmapItem>
            )
        }

        
        var connect_lines =  []
        for(let i=0; i<this.state.connect_positions.length ; i++){
            connect_lines.push(
                //<Text key={i}>LINE{i} </Text>
                <Line key={i} x1={(this.state.connect_positions[i][2]).toString()} y1={(this.state.connect_positions[i][3]).toString()} x2={(this.state.connect_positions[i][0]).toString()} y2={(this.state.connect_positions[i][1]).toString() } stroke="green" strokeWidth="2" /> 
                //<Svg key={i} height="100" width="100">
                    //<Line x1={this.state.connect_positions[i][2]} y1={this.state.connect_positions[i][3]} x2={this.state.connect_positions[i][0]} y2={this.state.connect_positions[i][1] } stroke="green" strokeWidth="2" /> 
                //</Svg>
            )
        }    
        console.log('connect_lines(in render): ',connect_lines)
           
        

        
        return(
            <Container >
                

                    <View>
                        <View style={{flexDirection:'row'}}>
                            <Button title="Add more" onPress={this.handleAddButton} style={{flex:1,backgroundColor:'#BCDBCA'}} >
                                <Text style={{color:'#397956'}}>            Add more</Text>
                            </Button>
                            <Button title="connect" onPress={this.get_connectLines} style={{flex:1,backgroundColor:'#BCDBCA'}} >
                                <Text style={{color:'#397956'}}>            connect</Text>
                            </Button>
                            
                        </View>
                        {added_buttons_goes_here}
                        <Svg  height="640" width="410" viewBox="-50 50 400 500">
                        
                            {connect_lines}

                        </Svg>
                    </View>

                
            </Container>

        )
        //<GoToButton screenName="Timelinee"></GoToButton>
    }
    handleAddButton() {
        this.props.dispatch(update_mindmapItemNum());      
    }
    

    componentDidMount(){
        console.log('hi mindmap!')
        //this.get_dataFromStorage()
        this.get_connectLines()
        console.log('hi mindmap hi!')
       
    }
    componentDidUpdate(){
    }

    async get_dataFromStorage(){
        let book_id_connectSet = await AsyncStorage.getItem('book_id_connectSet') //`book_${id}_connectSet`
        console.log('book_id_connectSet(in mindmap): ',book_id_connectSet )
        book_id_connectSet = book_id_connectSet ? JSON.parse(book_id_connectSet):[]

        this.props.dispatch(init_connectSet(book_id_connectSet));

    }

    async get_connectLines(){
        
        var connectlines = []
        for(let i=0;i<this.props.connectSet.length;i++){

            if(this.props.connectSet[i][0]!=null && this.props.connectSet[i][1]!=null && this.props.connectSet[i][0]!=this.props.connectSet[i][1]){
                let connectItem1 = await AsyncStorage.getItem(`MindmapItem${this.props.currentID}-${this.props.connectSet[i][0]}`)
                console.log('connectItem1: ',connectItem1 )
                if(!connectItem1)continue
                connectItem1 = JSON.parse(connectItem1);
                
                let connectItem2 = await AsyncStorage.getItem(`MindmapItem${this.props.currentID}-${this.props.connectSet[i][1]}`)
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
    mindmapItemNum : state.MindmapInfo.mindmapItemNum,
    currentID: state.CurrentID.currentID
}))(Mindmap);
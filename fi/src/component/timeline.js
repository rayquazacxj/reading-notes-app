import React from 'react'
import Timeline from 'react-native-timeline-flatlist'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    StatusBar,
    View
  } from 'react-native'

import { Container, Header, Content, Item, Input ,Text, Button} from 'native-base';
import { useNavigation } from '@react-navigation/native';

import {GoToButton} from 'C:/Users/USER/Desktop/f1/ss_final/fi/src/api/navigation';

export default class Timelinee extends React.Component {
    
    /*
    static propTypes = {
        id: PropTypes.string.isRequired,
        mood: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        clearVotes: PropTypes.number.isRequired,
        cloudsVotes: PropTypes.number.isRequired,
        drizzleVotes: PropTypes.number.isRequired,
        rainVotes: PropTypes.number.isRequired,
        thunderVotes: PropTypes.number.isRequired,
        snowVotes: PropTypes.number.isRequired,
        windyVotes: PropTypes.number.isRequired,
        tooltipOpen: PropTypes.bool.isRequired,
        dispatch: PropTypes.func.isRequired
    };
*/
    constructor(props) {
        super(props);

        this.data = [
            {time: '09:00', title: 'Event 1', description: 'Event 1 Description'},
            {time: '10:45', title: 'Event 2', description: 'Event 2 Description'},
            {time: '12:00', title: 'Event 3', description: 'Event 3 Description'},
            {time: '14:00', title: 'Event 4', description: 'Event 4 Description'},
            {time: '16:30', title: 'Event 5', description: 'Event 5 Description'}
          ]

        this.state = {title:'',time:'',description:"",data:this.data};
        
          this.handleInputChange = this.handleInputChange.bind(this);
          this.handleAddData = this.handleAddData.bind(this)
          //this.GoToButton = this.GoToButton.bind(this)

        /*this.data.sort(function (a, b) {
            return a.time > b.time ? 1 : -1;
           });*/
           /*
           */
        //this.handleTooltipToggle = this.handleTooltipToggle.bind(this);
        //this.handleVote = this.handleVote.bind(this);
    }

    render() {
        return(
            <Container style={styles.flex}>
                

                <Timeline style={styles.Timeline,{flex:3,padding:30}}
                //..other props
                circleSize={20}
                circleColor='rgb(45,156,219)'
                lineColor='rgb(45,156,219)'
                timeContainerStyle={{minWidth:52, marginTop: -5}}
                timeStyle={{textAlign: 'center', backgroundColor:'#ff9797', color:'white', padding:5, borderRadius:13}}
                descriptionStyle={{color:'gray'}}
                options={{
                    style:{paddingTop:5}
                }}
                data={this.state.data}
                innerCircle={'dot'}
                />

                {/*<GoToButton screenName="Mindmap" />*/}

                <Container style={styles.input,{flex:2,padding:10}}>
                    <Item >
                        <Input placeholder="Event"   onChangeText={(text)=>this.setState({title:text})}/>
                    </Item>
                    <Item >
                        <Input placeholder="Time" onChangeText={(text)=>this.setState({time:text})}/>
                    </Item>
                    <Item rounded >
                        <Input placeholder="Description"  onChangeText={(text)=>this.setState({description:text})}/>
                    </Item>
                    <Button  small success onPress={this.handleAddData} ><Text>  ADD </Text></Button>
                </Container>
                
                
            </Container>
        )
        
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log(target,value,name)

        this.setState({
            [name]: value
        });
    }

    handleAddData(){
        console.log(' handleAddData','time: ',this.state.time,'title: ',this.state.title,'des: ',this.state.description)
        if(this.state.time&&this.state.title){
            console.log('handle~',this.state.data)
            let dataArray = this.state.data
            dataArray.push({time: this.state.time, title: this.state.title, description: this.state.description});
            
            this.state.data = dataArray.sort(function (a, b) {
                let aa = a.time,bb=b.time;
                aa = aa.replace(/[^0-9]/ig,"")
                bb = bb.replace(/[^0-9]/ig,"")
                let at = parseInt(aa)
                let bt = parseInt(bb)
                return at > bt ? 1 : -1;
               });

            this.setState({
                data : dataArray
            });

            console.log(this.state.data)
        }
    }

    
/*
    handleTooltipToggle() {
        this.props.dispatch(toggleTooltip(this.props.id));
    }

    handleVote(vote) {
        const {dispatch, id} = this.props;
        dispatch(createVote(id, vote)).then(() => {
            dispatch(setToast('Voted.'));
        });
        dispatch(setTooltipToggle(id, false));
    }*/
}

/*
 * When styling a large number of components, use StyleSheet.
 * StyleSheet makes it possible for a component to refer to a style object by ID
 * instead of creating a new style object every time.
 */

const styles = StyleSheet.create({
    Timeline: {
        alignSelf:'center',

        /*
        justifyContent:'space-evenly',
        alignItems: "center",*/
      },
      flex:{
        flexDirection: 'column',
        justifyContent:"center",
        alignItems: 'stretch',
      },
      input:{
          height:50
      }

    /*
    listItem: {
        flexDirection: 'column',
        alignItems: 'stretch',
        marginLeft: 0
    },
    post: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    mood: {
        width: 48,
        marginLeft: 12,
        marginRight: 8,
        top: 12,
        alignItems: 'center'
    },
    moodIcon: {
        color: appColors.text,
        fontSize: 32
    },
    wrap: {
        flex: 1
    },
    ts: {
        color: appColors.textLight
    },
    text: {
        fontSize: 17,
        fontFamily: (Platform.OS === 'ios') ? 'System' : 'Roboto',
        color: appColors.text,
        marginTop: 4,
        marginBottom: 4
    },
    vote: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    voteResult: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 4
    },
    voteResultIcon: {
        fontSize: 17,
        color: appColors.textLight,
        marginRight: 2
    },
    voteResultText: {
        fontSize: 17,
        color: appColors.textLight
    },
    votePlus: {
        fontSize: 24,
        top: 2,
        color: appColors.textLight
    },
    tooltip: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: appColors.mask
    },
    tooltipIcon: {
        fontSize: 24,
        color: appColors.primaryText,
        marginHorizontal: 12
    }*/
});
/*
export default connect((state, ownProps) => ({
    tooltipOpen: state.postItem.tooltipOpen[ownProps.id] ? true : false
}))(PostItem);
*/
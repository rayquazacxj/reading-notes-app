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
import AsyncStorage from '@react-native-community/async-storage';
import {GoToButton} from 'C:/Users/USER/Desktop/f1/ss_final/fi/src/api/navigation';

export default class Timelinee extends React.Component {
    
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
        
    }

    componentWillMount(){/*
        const getData = async () => {
            try {
              const timelineDataSet = await AsyncStorage.getItem('timelineData')
              var timelineData = (timelineDataSet!=null) ? JSON.parse(timelineDataSet) : null;
              if (timelineData.length > 0) {
                timelineData = timelineData.filter(t => {
                        return t.boookId == 1 // temporarily set it as const
                    });
                }
                return timelineData
            } catch(e) {
              // error reading value
            }
          }
        this.setState({
            data: getData
        });*/
          /*
        const storeData = async (boookId) => {
            try {
              const jsonValue = JSON.stringify(value)
              await AsyncStorage.setItem('@storage_Key', jsonValue)
            } catch (e) {
              // saving error
            }
          }*/
        
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

                <GoToButton screenName="PictureGen2" />

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
            });/*
            const storeData = async () => {
                try {
                  let newData = JSON.stringify(dataArray)
                  //const jsonValue = JSON.stringify(dataArray)
                  const timelineDataSet = await AsyncStorage.getItem('timelineData')
                  const newSet = [
                     newData
                  ]
                  let timelineData = (timelineDataSet!=null) ? JSON.parse(timelineDataSet) : null;

                  await AsyncStorage.setItem('@storage_Key', jsonValue)
                } catch (e) {
                  // saving error
                }
              }*/

            console.log(this.state.data)
        }
    }

    

}


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

    
});

/*
export default connect((state, ownProps) => ({
    tooltipOpen: state.postItem.tooltipOpen[ownProps.id] ? true : false
}))(PostItem);
*/
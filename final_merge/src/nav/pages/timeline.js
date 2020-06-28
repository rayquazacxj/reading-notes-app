import React from 'react'
import Timeline from 'react-native-timeline-flatlist'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    KeyboardAvoidingView,
    View
  } from 'react-native'

import { Container, Header, Content, Item, Input ,Text, Button} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import {GoToButton} from '../../api/navigation'  //'../api/navigation';
import Draggable from 'react-native-draggable'

export default class Timelinee extends React.Component {
    
    constructor(props) {
        super(props);
/*
        this.data = [
            {time: '09:00', title: 'Event 1', description: 'Event 1 Description'},
            {time: '10:45', title: 'Event 2', description: 'Event 2 Description'},
            {time: '12:00', title: 'Event 3', description: 'Event 3 Description'},
            {time: '14:00', title: 'Event 4', description: 'Event 4 Description'},
            {time: '16:30', title: 'Event 5', description: 'Event 5 Description'}
          ]*/

        this.state = {
            title:'',
            time:'',
            description:"",
            data:[],
            editing:true
        };
        
          this.handleInputChange = this.handleInputChange.bind(this);
          this.handleAddData = this.handleAddData.bind(this)
          this.handleGetDataFromStorage = this.handleGetDataFromStorage.bind(this)
        
    }

    componentWillMount(){
        this.handleGetDataFromStorage()
   }

    render() {
        return(
            <Container style={styles.flex}>
                

                <Timeline style={styles.Timeline,{flex:4,padding:30}}
                //..other props
                circleSize={20}
                circleColor='#62A5B2'
                lineColor='#DDF2EE'
                timeContainerStyle={{minWidth:52, marginTop: -5}}
                timeStyle={{textAlign: 'center', backgroundColor:'#3CEF60', color:'white', padding:5, borderRadius:13}}
                descriptionStyle={{color:'gray'}}
                options={{
                    style:{paddingTop:5}
                }}
                data={this.state.data}
                innerCircle={'dot'}
                />
                <Draggable x={220} y={3}>
                    <GoToButton screenName="PictureGen2" />
                </Draggable>
                <Draggable x={320} y={40}>
                    <Button  small success onPress={()=>this.setState({editing:!this.state.editing})} ><Text>  edit </Text></Button>
                </Draggable>

                

                    
            <KeyboardAvoidingView type={'behavior'} style={styles.input,{flex:2,padding:10}}>
                <Container style={styles.input,{flex:2,padding:10,opacity:this.state.editing?100:0,justifyContent: "flex-end"}}>
                    
                    <View style={{flexDirection:'row'}}>
                        
                            <Input placeholder="Event"   onChangeText={(text)=>this.setState({title:text})}/>
                       
                        
                            <Input placeholder="Time" onChangeText={(text)=>this.setState({time:text})}/>
                        
                    </View>

                    <Item>
                        <Input placeholder="Description"  onChangeText={(text)=>this.setState({description:text})}/>
                    </Item>

                    <Button  small success onPress={this.handleAddData} ><Text>  ADD </Text></Button>
                
                </Container>
            </KeyboardAvoidingView>
                   
                
                
                
            </Container>
        )
        
    }

   
    async handleGetDataFromStorage(evt){
       // evt.persist();
       //AsyncStorage.removeItem('timelineData')
        let timelineData = await AsyncStorage.getItem('timelineData')//`$timelineData{this.props.idx}`
        console.log('timelineData: ',timelineData )
        timelineData = timelineData? JSON.parse(timelineData) : []
        this.setState({
          data:timelineData
         });

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

    async handleAddData(){
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

            await  AsyncStorage.setItem('timelineData', JSON.stringify(dataArray))
            
            

            console.log(this.state.data)
        }
    }

    

}


const styles = StyleSheet.create({
    Timeline: {
        alignSelf:'center',

       
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


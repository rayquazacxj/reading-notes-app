/*
//This is an example code for Navigator// 
import React, { Component } from 'react';
//import react in our code. 
import { StyleSheet, View, AsyncStorage, TextInput} from 'react-native';
import { Container, Header, Item, Text, Icon, Button, Input, Card, CardItem} from 'native-base';

import {set_current_bookID} from '../../state/bookID_action'
import {connect} from 'react-redux';
//import all the components we are going to use.

class SecondPage extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
      }
  
    static navigationOptions = {
    title: 'Second Page',
    //Sets Header text of Status Bar
  };
  render() {

    const { navigate } = this.props.navigation;
    
    console.log('currentID: ',this.props.currentID)
    console.log('this is second page')

    return (
        <Container>
        <Header searchBar rounded style={styles.container}>
          <Item>
            <Icon name="ios-search" />
            <TextInput  style = {styles.BASA}
                          onChangeText = {(text) => this.setState({text})}
                          // value = {this.state.text}
                          onEndEditing = {async () => {
                            //   this.state.text !== 
                          }} placeholder = "Search..." />
            <Icon name="ios-people"/>
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        
        <Card style = {styles.cardstyle}>
        <CardItem>
        <Button style = {styles.buttonlist} onPress={() =>{this.props.dispatch(set_current_bookID(1)); navigate('ShowPage')}}></Button>
        <Button style = {styles.buttonlist} onPress={() =>{this.props.dispatch(set_current_bookID(2)); navigate('ShowPage')}}></Button>
        <Button style = {styles.buttonlist} onPress={() =>{this.props.dispatch(set_current_bookID(3)); navigate('ShowPage')}}></Button>
        </CardItem>
        <CardItem>
        <Button style = {styles.buttonlist} onPress={() =>{this.props.dispatch(set_current_bookID(4)); navigate('ShowPage')}}></Button>
        <Button style = {styles.buttonlist} onPress={() =>{this.props.dispatch(set_current_bookID(5)); navigate('ShowPage')}}></Button>
        <Button style = {styles.buttonlist} onPress={() =>{this.props.dispatch(set_current_bookID(6)); navigate('ShowPage')}}></Button>
        </CardItem>
        <CardItem>
        <Button style = {styles.buttonlist} onPress={() =>{this.props.dispatch(set_current_bookID(7)); navigate('ShowPage')}}></Button>
        <Button style = {styles.buttonlist} onPress={() =>{this.props.dispatch(set_current_bookID(8)); navigate('ShowPage')}}></Button>
        <Button style = {styles.buttonlist} onPress={() =>{this.props.dispatch(set_current_bookID(9)); navigate('ShowPage')}}></Button>
        </CardItem>
        <CardItem>
        <Button style = {styles.buttonlist} onPress={() =>{this.props.dispatch(set_current_bookID(10)); navigate('ShowPage')}}></Button>
        <Button style = {styles.buttonlist} onPress={() =>{this.props.dispatch(set_current_bookID(11)); navigate('ShowPage')}}></Button>
        <Button style = {styles.buttonlist} onPress = {async() =>{
                try {
                    const value = await AsyncStorage.getItem('@BookNum:count');
                    if (value === NaN) {
                        try {
                            await AsyncStorage.setItem('@BookNum:count', '1');
                            console.log('set BookNum to 1');
                        } catch (error) {
                            console.log('BookNum set Error!');
                        }
                    } else if (value === '1'){
                        try {
                            await AsyncStorage.setItem('@BookNum:count', '2');
                            console.log('set BookNum to 2');
                        } catch (error) {
                            console.log('BookNum set Error!');
                        }
                    } else if (value === '2'){
                        try {
                            await AsyncStorage.setItem('@BookNum:count', '3');
                            console.log('set BookNum to 3');
                        } catch (error) {
                            console.log('BookNum set Error!');
                        }
                    } else if (value === '3'){
                        try {
                            await AsyncStorage.setItem('@BookNum:count', '4');
                            console.log('set BookNum to 4');
                        } catch (error) {
                            console.log('BookNum set Error!');
                        }
                    } else if (value === '4'){
                        try {
                            await AsyncStorage.setItem('@BookNum:count', '5');
                            console.log('set BookNum to 5');
                        } catch (error) {
                            console.log('BookNum set Error!');
                        }
                    } else if (value === '5'){
                        try {
                            await AsyncStorage.setItem('@BookNum:count', '6');
                            console.log('set BookNum to 6');
                        } catch (error) {
                            console.log('BookNum set Error!');
                        }
                    } else if (value === '6'){
                        try {
                            await AsyncStorage.setItem('@BookNum:count', '7');
                            console.log('set BookNum to 7');
                        } catch (error) {
                            console.log('BookNum set Error!');
                        }
                    } else if (value === '7'){
                        try {
                            await AsyncStorage.setItem('@BookNum:count', '8');
                            console.log('set BookNum to 8');
                        } catch (error) {
                            console.log('BookNum set Error!');
                        }
                    } else if (value === '8'){
                        try {
                            await AsyncStorage.setItem('@BookNum:count', '9');
                            console.log('set BookNum to 9');
                        } catch (error) {
                            console.log('BookNum set Error!');
                        }
                    } else if (value === '9'){
                        try {
                            await AsyncStorage.setItem('@BookNum:count', '10');
                            console.log('set BookNum to 10');
                        } catch (error) {
                            console.log('BookNum set Error!');
                        }
                    } else if (value === '10'){
                        try {
                            await AsyncStorage.setItem('@BookNum:count', '11');
                            console.log('set BookNum to 11');
                        } catch (error) {
                            console.log('BookNum set Error!');
                        }
                    } else if (value === '11'){
                        try {
                            await AsyncStorage.setItem('@BookNum:count', '12');
                            console.log('set BookNum to 12');
                        } catch (error) {
                            console.log('BookNum set Error!');
                        }
                    } else {
                        try {
                            await AsyncStorage.setItem('@BookNum:count', '1');
                            console.log('set BookNum to 1 again');
                        } catch (error) {
                            console.log('BookNum set Error!');
                        }
                    }
                  } catch (error) {
                    console.log('get Book Num Error');
                  }
            navigate('ThirdPage')}}></Button>
        </CardItem>
        </Card>
      
        <Card>
            <CardItem style = {styles.bottomBar}>
              
              <Button style = {styles.bottomButton}><Text>    MAIN</Text></Button>
              
              <Button style = {styles.bottomButton}><Text> PROFILE</Text></Button>
              
              <Button style = {styles.bottomButton} onPress={() =>{navigate('PictureGen')}}><Text> PictureGen</Text></Button>
              
             </CardItem>
        </Card>
      </Container>

      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    borderRadius:15,
    backgroundColor: '#bddccb',
    
  },
  cardstyle: {
    
    backgroundColor: '#fffff8',
    height: 460,
  },

  

  buttonlist: {
      width: 100,
      height: 100,
      borderRadius:7,
      marginHorizontal:3,
      marginLeft:17,
      marginTop: -3,
      marginVertical:-9,
      backgroundColor: 'rgba(198,223,211,0.7)',
  },
  bottomBar: {
    backgroundColor: 'rgba(198,223,211,0.7)',
    
  },

  bottomButton: {
    backgroundColor: 'rgba(95,163,177,0.5)',
    borderRadius: 20,
    width:95,
    marginHorizontal:15,
  },
});
*/
import React, { Component } from 'react';
//import react in our code. 
import { StyleSheet, View, AsyncStorage, TextInput} from 'react-native';
import { Container, Header, Item, Text, Icon, Button, Input, Card, CardItem} from 'native-base';

import {set_current_bookID,book_name_state_change} from '../../state/bookID_action'
import {connect} from 'react-redux';


class SecondPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            text: '', 
            bkn1: '',
            bkn2: '',
            bkn3: '',
            bkn4: '',
            bkn5: '',
            bkn6: '',
            bkn7: '',
            bkn8: '',
            bkn9: '',
            bkn10: '',
            bkn11: '',
            bookNames:[0]
        };
        this.handleBookName = this.handleBookName.bind(this)
      }
      

    static navigationOptions = {
    title: 'Second Page',
    //Sets Header text of Status Bar
    
  };
  render() {
    const { navigate } = this.props.navigation;

    if(this.props.bookNameChange){
        console.log('handleBookNameChange (in second page)')
        this.handleBookName()
        this.props.dispatch(book_name_state_change(false));
    }
    
    return (
        <Container>
        <Header searchBar rounded style={styles.container}>
          <Item>
            <Icon name="ios-search" />
            <TextInput  
                          onChangeText = {(text) => this.setState({text})}
                          // value = {this.state.text}
                          onEndEditing = {async () => {
                            //   this.state.text !== 
                          }} placeholder = "Search..." />
            <Icon name="ios-people"/>
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        
        <Card style = {styles.cardstyle}>
        <CardItem>
        <Button style = {styles.buttonlist} 
        onLayout={async()=>{
            try{
                const bkname1 = await AsyncStorage.getItem('@Book1:Name');
                console.log('hi');
                this.setState({bkn1: bkname1});
                console.log(this.state.bkn1);
            } catch (error) {
                console.log('get book 1 name error');
            }
        }}
        onPress={async() => {
            this.props.dispatch(set_current_bookID(1));
            navigate('ShowPage')
            try { 
                await AsyncStorage.setItem('@BookChoose:Num', '1');
                
            } catch (error) {
                console.log('set bookchoose 1 error');
            }
        }}><Text style = {styles.buttonText}>{this.state.bookNames[1]}</Text></Button>
        <Button style = {styles.buttonlist} 
        onLayout={async()=>{
            try{
                const bkname2 = await AsyncStorage.getItem('@Book2:Name');
                this.setState({bkn2: bkname2});
            } catch (error) {
                console.log('get book 2 name error');
            }
        }}
        onPress={async() => {
            this.props.dispatch(set_current_bookID(2));
            navigate('ShowPage')
            try { 

                await AsyncStorage.setItem('@BookChoose:Num', '2');
                
            } catch (error) {
                console.log('set bookchoose 2 error');
            }
        }}><Text style = {styles.buttonText}>{this.state.bookNames[2]}</Text></Button>
        <Button style = {styles.buttonlist} 
        onLayout={async()=>{
            try{
                const bkname3 = await AsyncStorage.getItem('@Book3:Name');
                this.setState({bkn3: bkname3});
            } catch (error) {
                console.log('get book 3 name error');
            }
        }}
        onPress={async() => {
            this.props.dispatch(set_current_bookID(3));
            navigate('ShowPage')
            try { 
                await AsyncStorage.setItem('@BookChoose:Num', '3');
            } catch (error) {
                console.log('set bookchoose 3 error');
            }
        }}><Text style = {styles.buttonText}>{this.state.bookNames[3]}</Text></Button>
        </CardItem>
        <CardItem>
        <Button style = {styles.buttonlist} 
        onLayout={async()=>{
            try{
                const bkname4 = await AsyncStorage.getItem('@Book4:Name');
                this.setState({bkn4: bkname4});
            } catch (error) {
                console.log('get book 4 name error');
            }
        }}
        onPress={async() => {
            this.props.dispatch(set_current_bookID(4));
            navigate('ShowPage')
            try { 
                await AsyncStorage.setItem('@BookChoose:Num', '4');
            } catch (error) {
                console.log('set bookchoose 4 error');
            }
        }}><Text style = {styles.buttonText}>{this.state.bookNames[4]}</Text></Button>
        <Button style = {styles.buttonlist} 
        onLayout={async()=>{
            try{
                const bkname5 = await AsyncStorage.getItem('@Book5:Name');
                this.setState({bkn5: bkname5});
            } catch (error) {
                console.log('get book 5 name error');
            }
        }}
        onPress={async() => {
            this.props.dispatch(set_current_bookID(5));
            navigate('ShowPage')
            try { 
                await AsyncStorage.setItem('@BookChoose:Num', '5');
            } catch (error) {
                console.log('set bookchoose 5 error');
            }
        }}><Text style = {styles.buttonText}>{this.state.bookNames[5]}</Text></Button>
        <Button style = {styles.buttonlist} 
        onLayout={async()=>{
            try{
                const bkname6 = await AsyncStorage.getItem('@Book6:Name');
                this.setState({bkn6: bkname6});
            } catch (error) {
                console.log('get book 6 name error');
            }
        }}
        onPress={async() => {
            this.props.dispatch(set_current_bookID(6));
            navigate('ShowPage')
            try { 
                await AsyncStorage.setItem('@BookChoose:Num', '6');
            } catch (error) {
                console.log('set bookchoose 6 error');
            }
        }}><Text style = {styles.buttonText}>{this.state.bookNames[6]}</Text></Button>
        </CardItem>
        <CardItem>
        <Button style = {styles.buttonlist} 
        onLayout={async()=>{
            try{
                const bkname7 = await AsyncStorage.getItem('@Book7:Name');
                this.setState({bkn7: bkname7});
            } catch (error) {
                console.log('get book 7 name error');
            }
        }}
        onPress={async() => {
            this.props.dispatch(set_current_bookID(7));
            navigate('ShowPage')
            try { 
                await AsyncStorage.setItem('@BookChoose:Num', '7');
            } catch (error) {
                console.log('set bookchoose 7 error');
            }
        }}><Text style = {styles.buttonText}>{this.state.bookNames[7]}</Text></Button>
        <Button style = {styles.buttonlist} 
        onLayout={async()=>{
            try{
                const bkname8 = await AsyncStorage.getItem('@Book8:Name');
                this.setState({bkn8: bkname8});
            } catch (error) {
                console.log('get book 8 name error');
            }
        }}
        onPress={async() => {
            this.props.dispatch(set_current_bookID(8));
            navigate('ShowPage')
            try { 
                await AsyncStorage.setItem('@BookChoose:Num', '8');
            } catch (error) {
                console.log('set bookchoose 8 error');
            }
        }}><Text style = {styles.buttonText}>{this.state.bookNames[8]}</Text></Button>
        <Button style = {styles.buttonlist} 
        onLayout={async()=>{
            try{
                const bkname9 = await AsyncStorage.getItem('@Book9:Name');
                this.setState({bkn9: bkname9});
            } catch (error) {
                console.log('get book 9 name error');
            }
        }}
        onPress={async() => {
            this.props.dispatch(set_current_bookID(9));
            navigate('ShowPage')
            try { 
                await AsyncStorage.setItem('@BookChoose:Num', '9');
            } catch (error) {
                console.log('set bookchoose 9 error');
            }
        }}><Text style = {styles.buttonText}>{this.state.bookNames[9]}</Text></Button>
        </CardItem>
        <CardItem>
        <Button style = {styles.buttonlist} 
        onLayout={async()=>{
            try{
                const bkname10 = await AsyncStorage.getItem('@Book10:Name');
                this.setState({bkn10: bkname10});
            } catch (error) {
                console.log('get book 10 name error');
            }
        }}
        onPress={async() => {
            this.props.dispatch(set_current_bookID(10));
            navigate('ShowPage')
            try { 
                await AsyncStorage.setItem('@BookChoose:Num', '10');
            } catch (error) {
                console.log('set bookchoose 10 error');
            }
        }}><Text style = {styles.buttonText}>{this.state.bookNames[10]}</Text></Button>
        <Button style = {styles.buttonlist} 
        onLayout={async()=>{
            try{
                const bkname11 = await AsyncStorage.getItem('@Book11:Name');
                this.setState({bkn11: bkname11});
            } catch (error) {
                console.log('get book 11 name error');
            }
        }}
        onPress={async() => {
            this.props.dispatch(set_current_bookID(11));
            navigate('ShowPage')
            try { 
                await AsyncStorage.setItem('@BookChoose:Num', '11');
            } catch (error) {
                console.log('set bookchoose 11 error');
            }
        }}><Text style = {styles.buttonText}>{this.state.bookNames[11]}</Text></Button>
        <Button style = {styles.buttonlist} 
        onPress = {async() =>{
                try {
                    const value = await AsyncStorage.getItem('@BookNum:count');
                    if (value === NaN) {
                        try {
                            await AsyncStorage.setItem('@BookNum:count', '1');
                            console.log('set BookNum to 1');
                        } catch (error) {
                            console.log('BookNum set Error!');
                        }
                    } else if (value === '1'){
                        try {
                            await AsyncStorage.setItem('@BookNum:count', '2');
                            console.log('set BookNum to 2');
                        } catch (error) {
                            console.log('BookNum set Error!');
                        }
                    } else if (value === '2'){
                        try {
                            await AsyncStorage.setItem('@BookNum:count', '3');
                            console.log('set BookNum to 3');
                        } catch (error) {
                            console.log('BookNum set Error!');
                        }
                    } else if (value === '3'){
                        try {
                            await AsyncStorage.setItem('@BookNum:count', '4');
                            console.log('set BookNum to 4');
                        } catch (error) {
                            console.log('BookNum set Error!');
                        }
                    } else if (value === '4'){
                        try {
                            await AsyncStorage.setItem('@BookNum:count', '5');
                            console.log('set BookNum to 5');
                        } catch (error) {
                            console.log('BookNum set Error!');
                        }
                    } else if (value === '5'){
                        try {
                            await AsyncStorage.setItem('@BookNum:count', '6');
                            console.log('set BookNum to 6');
                        } catch (error) {
                            console.log('BookNum set Error!');
                        }
                    } else if (value === '6'){
                        try {
                            await AsyncStorage.setItem('@BookNum:count', '7');
                            console.log('set BookNum to 7');
                        } catch (error) {
                            console.log('BookNum set Error!');
                        }
                    } else if (value === '7'){
                        try {
                            await AsyncStorage.setItem('@BookNum:count', '8');
                            console.log('set BookNum to 8');
                        } catch (error) {
                            console.log('BookNum set Error!');
                        }
                    } else if (value === '8'){
                        try {
                            await AsyncStorage.setItem('@BookNum:count', '9');
                            console.log('set BookNum to 9');
                        } catch (error) {
                            console.log('BookNum set Error!');
                        }
                    } else if (value === '9'){
                        try {
                            await AsyncStorage.setItem('@BookNum:count', '10');
                            console.log('set BookNum to 10');
                        } catch (error) {
                            console.log('BookNum set Error!');
                        }
                    } else if (value === '10'){
                        try {
                            await AsyncStorage.setItem('@BookNum:count', '11');
                            console.log('set BookNum to 11');
                        } catch (error) {
                            console.log('BookNum set Error!');
                        }
                    } else if (value === '11'){
                        try {
                            await AsyncStorage.setItem('@BookNum:count', '1');
                            console.log('set BookNum to 1 again');
                        } catch (error) {
                            console.log('BookNum set Error!');
                        }
                    } else {
                        try {
                            await AsyncStorage.setItem('@BookNum:count', '1');
                            console.log('set BookNum to 1 again');
                        } catch (error) {
                            console.log('BookNum set Error!');
                        }
                    }
                  } catch (error) {
                    console.log('get Book Num Error(in second page)');
                  }
            navigate('ShowPage')}}></Button>
        </CardItem>
        </Card>
      
        <Card>
            <CardItem style = {styles.bottomBar}>
              
              <Button style = {styles.bottomButton} onPress = {async() =>{navigate('SecondPage')}}><Text>    MAIN</Text></Button>
              
              <Button style = {styles.bottomButton} onPress = {async() =>{navigate('Profile')}}><Text> PROFILE</Text></Button>

              <Button style = {styles.bottomButton} onPress={() =>{navigate('PictureGen')}}><Text> PictureGen</Text></Button>
              
              
             </CardItem>
        </Card>
      </Container>

      
    );
  }

  componentWillMount(){
    //AsyncStorage.removeItem('@Book1:Name')
    //AsyncStorage.removeItem('@Book2:Name')
    console.log('componentWillMount (in second page)')
    this.handleBookName()
  }   
/*
  shouldComponentUpdate(){
      console.log('this.props.bookNameChange(in second page): ',this.props.bookNameChange)
      if(this.props.bookNameChange){
          this.handleBookName()
          this.props.dispatch(book_name_state_change(false));
      }
      
    
  }*/

  async handleBookName(){
        var bookNames_=[0]
        console.log('bookNames_',bookNames_)
        for(let i=1;i<=11;i++){
            let bookName = await AsyncStorage.getItem(`@Book${i}:Name`)//`$timelineData{this.props.idx}`
            console.log(`@Book${i}:Name`,bookName )
            //bookName = bookName? JSON.parse(bookName) : " "
            bookNames_.push(bookName)
        }
        console.log('bookNames_2',bookNames_)
        this.setState({
            bookNames:bookNames_
        });
  }



}
const styles = StyleSheet.create({
  buttonText: {
      color : 'black',
      textAlign: 'center',
  },
  
    container: {
    borderRadius:15,
    marginTop: 25,
    marginBottom:15,
    height:60,
    backgroundColor: '#bddccb',
    
  },
  cardstyle: {
    
    backgroundColor: '#fffff8',
    marginTop: 30,
    height: 482,
  },

  

  buttonlist: {
      width: 100,
      height: 100,
      borderRadius:7,
      marginHorizontal:3,
      marginLeft:17,
      marginTop: -3,
      marginVertical:-9,
      backgroundColor: 'rgba(198,223,211,0.7)',
  },
  bottomBar: {
    backgroundColor: 'rgba(198,223,211,0.7)',
    
  },

  bottomButton: {
    backgroundColor: 'rgba(95,163,177,0.5)',
    borderRadius: 20,
    width:95,
    marginHorizontal:15,
  },
});

export default connect(state => ({
    currentID : state.CurrentID.currentID,
    bookNameChange: state.BookName.bookNameChange
}))(SecondPage);
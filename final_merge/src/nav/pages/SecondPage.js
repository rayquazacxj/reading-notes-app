//This is an example code for Navigator// 
import React, { Component } from 'react';
//import react in our code. 
import { StyleSheet, View, AsyncStorage, TextInput} from 'react-native';
import { Container, Header, Item, Text, Icon, Button, Input, Card, CardItem} from 'native-base';
import { useNavigation } from '@react-navigation/native';
//import all the components we are going to use.

export default class SecondPage extends Component {
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
        <Button style = {styles.buttonlist} onPress={() =>navigate('ShowPage')}></Button>
        <Button style = {styles.buttonlist} onPress={() =>navigate('ShowPage')}></Button>
        <Button style = {styles.buttonlist} onPress={() =>navigate('ShowPage')}></Button>
        </CardItem>
        <CardItem>
        <Button style = {styles.buttonlist} onPress={() =>navigate('ShowPage')}></Button>
        <Button style = {styles.buttonlist} onPress={() =>navigate('ShowPage')}></Button>
        <Button style = {styles.buttonlist} onPress={() =>navigate('ShowPage')}></Button>
        </CardItem>
        <CardItem>
        <Button style = {styles.buttonlist} onPress={() =>navigate('ShowPage')}></Button>
        <Button style = {styles.buttonlist} onPress={() =>navigate('ShowPage')}></Button>
        <Button style = {styles.buttonlist} onPress={() =>navigate('ShowPage')}></Button>
        </CardItem>
        <CardItem>
        <Button style = {styles.buttonlist} onPress={() =>navigate('ShowPage')}></Button>
        <Button style = {styles.buttonlist} onPress={() =>navigate('ShowPage')}></Button>
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
              
              {/* <Button style = {styles.bottomButton} onPress={() =>navigate('EighthPage')}><Text>TIMELINE</Text></Button> */}
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
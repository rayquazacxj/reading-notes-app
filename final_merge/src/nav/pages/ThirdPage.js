/*
//This is an example code for Navigator// 
import React, { Component } from 'react';
//import react in our code. 
import { StyleSheet, AsyncStorage, TextInput} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Button, Body, Input} from 'native-base';
import { Value } from 'react-native-reanimated';
//import all the components we are going to use.

export function UselessTextInput() {
  const [value, onChangeText] = React.useState('Useless Placeholder');
}

export default class ThirdPage extends Component {
  
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  
  static navigationOptions = {
    title: 'Third Page',
    //Sets Header text of Status Bar
  };


  render() {
    const { navigate } = this.props.navigation;
    return (
      
      <Container style={styles.container}>
        
        <Content>
          <Card style = {styles.uploadImgBlock}>
            <CardItem style = {styles.uploadImg} header button onPress={() => alert("Upload the book cover.")}>
              <Text style = {styles.textImg}>Upload Image</Text>
            </CardItem>
          </Card>

          <Card>
            <CardItem >
              <Icon active name="logo-googleplus" />
              <TextInput  style = {styles.BASA}
                          onChangeText = {(text) => this.setState({text})}
                          // value = {this.state.text}
                          onEndEditing = {async () => {
                            try {
                              const value = await AsyncStorage.getItem('@BookNum:count');
                              if (value === '1') {
                                  try {
                                      await AsyncStorage.setItem('@Book1:Name', this.state.text);
                                      console.log('set Book1 Name successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book1 Name Error!');
                                  }
                              } else if (value === '2'){
                                  try {
                                      await AsyncStorage.setItem('@Book2:Name', this.state.text);
                                      console.log('set Book2 Name successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book2 Name Error!');
                                  }
                              } else if (value === '3'){
                                  try {
                                      await AsyncStorage.setItem('@Book3:Name', this.state.text);
                                      console.log('set Book3 Name successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book3 Name Error!');
                                  }
                              } else if (value === '4'){
                                  try {
                                      await AsyncStorage.setItem('@Book4:Name', this.state.text);
                                      console.log('set Book4 Name successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book4 Name Error!');
                                  }
                              } else if (value === '5'){
                                  try {
                                      await AsyncStorage.setItem('@Book5:Name', this.state.text);
                                      console.log('set Book5 Name successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book5 Name Error!');
                                  }
                              } else if (value === '6'){
                                  try {
                                      await AsyncStorage.setItem('@Book6:Name', this.state.text);
                                      console.log('set Book6 Name successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book6 Name Error!');
                                  }
                              } else if (value === '7'){
                                  try {
                                      await AsyncStorage.setItem('@Book7:Name', this.state.text);
                                      console.log('set Book7 Name successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book7 Name Error!');
                                  }
                              } else if (value === '8'){
                                  try {
                                      await AsyncStorage.setItem('@Book8:Name', this.state.text);
                                      console.log('set Book8 Name successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book8 Name Error!');
                                  }
                              } else if (value === '9'){
                                  try {
                                      await AsyncStorage.setItem('@Book9:Name', this.state.text);
                                      console.log('set Book9 Name successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book9 Name Error!');
                                  }
                              } else if (value === '10'){
                                  try {
                                      await AsyncStorage.setItem('@Book10:Name', this.state.text);
                                      console.log('set Book10 Name successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book10 Name Error!');
                                  }
                              } else if (value === '11'){
                                  try {
                                      await AsyncStorage.setItem('@Book11:Name', this.state.text);
                                      console.log('set Book11 Name successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book11 Name Error!');
                                  }
                              } else if (value === '12'){
                                  try {
                                      await AsyncStorage.setItem('@Book12:Name', this.state.text);
                                      console.log('set Book12 Name successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book12 Name Error!');
                                  }
                              } else {
                                  console.log('BookNum > 12');
                              }
                            } catch (error) {
                              console.log('get Book Num Error');
                            }
                          //   try {
                          //   await AsyncStorage.setItem('@ThirdPage:bookName', this.state.text);
                          //   console.log(this.state.text);
                          // } catch (error) {
                          //   console.log('Book Name set Error!');
                          // }
              }} placeholder="Book Name..." />
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
              
             <CardItem>
              <Icon active name="logo-googleplus" />
              <TextInput  style = {styles.BASA}
                          onChangeText = {(text) => this.setState({text})}
                          // value = {this.state.text}
                          onEndEditing = {async () => {
                            try {
                              const value = await AsyncStorage.getItem('@BookNum:count');
                              if (value === '1') {
                                  try {
                                      await AsyncStorage.setItem('@Book1:Author', this.state.text);
                                      console.log('set Book1 Author successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book1 Author Error!');
                                  }
                              } else if (value === '2'){
                                  try {
                                      await AsyncStorage.setItem('@Book2:Author', this.state.text);
                                      console.log('set Book2 Author successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book2 Author Error!');
                                  }
                              } else if (value === '3'){
                                  try {
                                      await AsyncStorage.setItem('@Book3:Author', this.state.text);
                                      console.log('set Book3 Author successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book3 Author Error!');
                                  }
                              } else if (value === '4'){
                                  try {
                                      await AsyncStorage.setItem('@Book4:Author', this.state.text);
                                      console.log('set Book4 Author successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book4 Author Error!');
                                  }
                              } else if (value === '5'){
                                  try {
                                      await AsyncStorage.setItem('@Book5:Author', this.state.text);
                                      console.log('set Book5 Author successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book5 Author Error!');
                                  }
                              } else if (value === '6'){
                                  try {
                                      await AsyncStorage.setItem('@Book6:Author', this.state.text);
                                      console.log('set Book6 Author successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book6 Author Error!');
                                  }
                              } else if (value === '7'){
                                  try {
                                      await AsyncStorage.setItem('@Book7:Author', this.state.text);
                                      console.log('set Book7 Author successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book7 Author Error!');
                                  }
                              } else if (value === '8'){
                                  try {
                                      await AsyncStorage.setItem('@Book8:Author', this.state.text);
                                      console.log('set Book8 Author successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book8 Author Error!');
                                  }
                              } else if (value === '9'){
                                  try {
                                      await AsyncStorage.setItem('@Book9:Author', this.state.text);
                                      console.log('set Book9 Author successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book9 Author Error!');
                                  }
                              } else if (value === '10'){
                                  try {
                                      await AsyncStorage.setItem('@Book10:Author', this.state.text);
                                      console.log('set Book10 Author successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book10 Author Error!');
                                  }
                              } else if (value === '11'){
                                  try {
                                      await AsyncStorage.setItem('@Book11:Author', this.state.text);
                                      console.log('set Book11 Author successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book11 Author Error!');
                                  }
                              } else if (value === '12'){
                                  try {
                                      await AsyncStorage.setItem('@Book12:Author', this.state.text);
                                      console.log('set Book12 Author successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book12 Author Error!');
                                  }
                              } else {
                                  console.log('BookNum > 12');
                              }
                            } catch (error) {
                              console.log('get Book Num Error');
                            }
                          
                          // try {
                          //   await AsyncStorage.setItem('@ThirdPage:author', this.state.text);
                          //   console.log(this.state.text);
                          // } catch (error) {
                          //   console.log('Author set Error!');
                          // }
              }} placeholder="Author..." />
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>

             <CardItem>
              <Icon active name="logo-googleplus" />
              
              <TextInput  style = {styles.BASA}
                          onChangeText = {(text) => this.setState({text})}
                          // value = {this.state.text}
                          onEndEditing = {async () => {
                          try {
                              const value = await AsyncStorage.getItem('@BookNum:count');
                              if (value === '1') {
                                  try {
                                      await AsyncStorage.setItem('@Book1:Status', this.state.text);
                                      console.log('set Book1 Status successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book1 Status Error!');
                                  }
                              } else if (value === '2'){
                                  try {
                                      await AsyncStorage.setItem('@Book2:Status', this.state.text);
                                      console.log('set Book2 Status successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book2 Status Error!');
                                  }
                              } else if (value === '3'){
                                  try {
                                      await AsyncStorage.setItem('@Book3:Status', this.state.text);
                                      console.log('set Book3 Status successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book3 Status Error!');
                                  }
                              } else if (value === '4'){
                                  try {
                                      await AsyncStorage.setItem('@Book4:Status', this.state.text);
                                      console.log('set Book4 Status successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book4 Status Error!');
                                  }
                              } else if (value === '5'){
                                  try {
                                      await AsyncStorage.setItem('@Book5:Status', this.state.text);
                                      console.log('set Book5 Status successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book5 Status Error!');
                                  }
                              } else if (value === '6'){
                                  try {
                                      await AsyncStorage.setItem('@Book6:Status', this.state.text);
                                      console.log('set Book6 Status successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book6 Status Error!');
                                  }
                              } else if (value === '7'){
                                  try {
                                      await AsyncStorage.setItem('@Book7:Status', this.state.text);
                                      console.log('set Book7 Status successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book7 Status Error!');
                                  }
                              } else if (value === '8'){
                                  try {
                                      await AsyncStorage.setItem('@Book8:Status', this.state.text);
                                      console.log('set Book8 Status successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book8 Status Error!');
                                  }
                              } else if (value === '9'){
                                  try {
                                      await AsyncStorage.setItem('@Book9:Status', this.state.text);
                                      console.log('set Book9 Status successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book9 Status Error!');
                                  }
                              } else if (value === '10'){
                                  try {
                                      await AsyncStorage.setItem('@Book10:Status', this.state.text);
                                      console.log('set Book10 Status successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book10 Status Error!');
                                  }
                              } else if (value === '11'){
                                  try {
                                      await AsyncStorage.setItem('@Book11:Status', this.state.text);
                                      console.log('set Book11 Status successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book11 Status Error!');
                                  }
                              } else if (value === '12'){
                                  try {
                                      await AsyncStorage.setItem('@Book12:Status', this.state.text);
                                      console.log('set Book12 Status successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book12 Status Error!');
                                  }
                              } else {
                                  console.log('BookNum > 12');
                              }
                            } catch (error) {
                              console.log('get Book Num Error');
                            }              
                          // try {
                          //   await AsyncStorage.setItem('@ThirdPage:status', this.state.text);
                          // } catch (error) {
                          //   console.log('Status set Error!');
                          // }
              }} placeholder="Status..." />
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>

             <CardItem style = {styles.BASA}>
              <Icon active name="logo-googleplus" />
              <Button onPress = {() =>navigate('ForthPage')} style = {styles.addNote}><Text>Add Note</Text></Button>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
           </Card>
           
        </Content>
        <Card>
            <CardItem style = {styles.bottomBar}>
              
              <Button style = {styles.bottomButton} onPress={() =>navigate('SecondPage')} ><Text>    MAIN</Text></Button>
              
              <Button style = {styles.bottomButton}><Text> PROFILE</Text></Button>
              
              <Button style = {styles.bottomButton} onPress={() =>navigate('EighthPage')}><Text>TIMELINE</Text></Button>
             </CardItem>
        </Card>
      </Container>
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffff8',
  },
  addNote: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius:15,
  },
  uploadImg: {
    borderRadius: 15,
    marginVertical: 95,
  },

  textImg: {
    marginHorizontal: 30,
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

  uploadImgBlock: {
    
    backgroundColor: 'rgba(198,223,211,0.7)',
    borderRadius: 15,
    width: 200,
    height: 250,
  },

  BASA: {
    backgroundColor: '#fffff8',
    fontSize: 17,
    color: 'rgba(0,0,0,0.6)',
  },
});
*/
/*
//This is an example code for Navigator// 
import React, { Component } from 'react';
//import react in our code. 
import { StyleSheet, AsyncStorage, TextInput} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Button, Body, Input} from 'native-base';
import { Value } from 'react-native-reanimated';
//import all the components we are going to use.

export function UselessTextInput() {
  const [value, onChangeText] = React.useState('Useless Placeholder');
}

export default class ThirdPage extends Component {
  
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  
  static navigationOptions = {
    title: 'Third Page',
    //Sets Header text of Status Bar
  };


  render() {
    const { navigate } = this.props.navigation;
    return (
      
      <Container style={styles.container}>
        
        <Content>
          <Card style = {styles.uploadImgBlock}>
            <CardItem style = {styles.uploadImg} header button onPress={() => alert("Upload the book cover.")}>
              <Text style = {styles.textImg}>Upload Image</Text>
            </CardItem>
          </Card>

          <Card>
            <CardItem >
              <Icon active name="logo-googleplus" />
              <TextInput  style = {styles.BASA}
                          onChangeText = {(text) => this.setState({text})}
                          // value = {this.state.text}
                          onEndEditing = {async () => {
                            try {
                              const value = await AsyncStorage.getItem('@BookNum:count');
                              if (value === '1') {
                                  try {
                                      await AsyncStorage.setItem('@Book1:Name', this.state.text);
                                      console.log('set Book1 Name successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book1 Name Error!');
                                  }
                              } else if (value === '2'){
                                  try {
                                      await AsyncStorage.setItem('@Book2:Name', this.state.text);
                                      console.log('set Book2 Name successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book2 Name Error!');
                                  }
                              } else if (value === '3'){
                                  try {
                                      await AsyncStorage.setItem('@Book3:Name', this.state.text);
                                      console.log('set Book3 Name successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book3 Name Error!');
                                  }
                              } else if (value === '4'){
                                  try {
                                      await AsyncStorage.setItem('@Book4:Name', this.state.text);
                                      console.log('set Book4 Name successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book4 Name Error!');
                                  }
                              } else if (value === '5'){
                                  try {
                                      await AsyncStorage.setItem('@Book5:Name', this.state.text);
                                      console.log('set Book5 Name successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book5 Name Error!');
                                  }
                              } else if (value === '6'){
                                  try {
                                      await AsyncStorage.setItem('@Book6:Name', this.state.text);
                                      console.log('set Book6 Name successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book6 Name Error!');
                                  }
                              } else if (value === '7'){
                                  try {
                                      await AsyncStorage.setItem('@Book7:Name', this.state.text);
                                      console.log('set Book7 Name successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book7 Name Error!');
                                  }
                              } else if (value === '8'){
                                  try {
                                      await AsyncStorage.setItem('@Book8:Name', this.state.text);
                                      console.log('set Book8 Name successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book8 Name Error!');
                                  }
                              } else if (value === '9'){
                                  try {
                                      await AsyncStorage.setItem('@Book9:Name', this.state.text);
                                      console.log('set Book9 Name successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book9 Name Error!');
                                  }
                              } else if (value === '10'){
                                  try {
                                      await AsyncStorage.setItem('@Book10:Name', this.state.text);
                                      console.log('set Book10 Name successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book10 Name Error!');
                                  }
                              } else if (value === '11'){
                                  try {
                                      await AsyncStorage.setItem('@Book11:Name', this.state.text);
                                      console.log('set Book11 Name successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book11 Name Error!');
                                  }
                              } else if (value === '12'){
                                  try {
                                      await AsyncStorage.setItem('@Book12:Name', this.state.text);
                                      console.log('set Book12 Name successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book12 Name Error!');
                                  }
                              } else {
                                  console.log('BookNum > 12');
                              }
                            } catch (error) {
                              console.log('get Book Num Error');
                            }
                          //   try {
                          //   await AsyncStorage.setItem('@ThirdPage:bookName', this.state.text);
                          //   console.log(this.state.text);
                          // } catch (error) {
                          //   console.log('Book Name set Error!');
                          // }
              }} placeholder="Book Name..." />
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
              
             <CardItem>
              <Icon active name="logo-googleplus" />
              <TextInput  style = {styles.BASA}
                          onChangeText = {(text) => this.setState({text})}
                          // value = {this.state.text}
                          onEndEditing = {async () => {
                            try {
                              const value = await AsyncStorage.getItem('@BookNum:count');
                              if (value === '1') {
                                  try {
                                      await AsyncStorage.setItem('@Book1:Author', this.state.text);
                                      console.log('set Book1 Author successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book1 Author Error!');
                                  }
                              } else if (value === '2'){
                                  try {
                                      await AsyncStorage.setItem('@Book2:Author', this.state.text);
                                      console.log('set Book2 Author successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book2 Author Error!');
                                  }
                              } else if (value === '3'){
                                  try {
                                      await AsyncStorage.setItem('@Book3:Author', this.state.text);
                                      console.log('set Book3 Author successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book3 Author Error!');
                                  }
                              } else if (value === '4'){
                                  try {
                                      await AsyncStorage.setItem('@Book4:Author', this.state.text);
                                      console.log('set Book4 Author successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book4 Author Error!');
                                  }
                              } else if (value === '5'){
                                  try {
                                      await AsyncStorage.setItem('@Book5:Author', this.state.text);
                                      console.log('set Book5 Author successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book5 Author Error!');
                                  }
                              } else if (value === '6'){
                                  try {
                                      await AsyncStorage.setItem('@Book6:Author', this.state.text);
                                      console.log('set Book6 Author successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book6 Author Error!');
                                  }
                              } else if (value === '7'){
                                  try {
                                      await AsyncStorage.setItem('@Book7:Author', this.state.text);
                                      console.log('set Book7 Author successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book7 Author Error!');
                                  }
                              } else if (value === '8'){
                                  try {
                                      await AsyncStorage.setItem('@Book8:Author', this.state.text);
                                      console.log('set Book8 Author successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book8 Author Error!');
                                  }
                              } else if (value === '9'){
                                  try {
                                      await AsyncStorage.setItem('@Book9:Author', this.state.text);
                                      console.log('set Book9 Author successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book9 Author Error!');
                                  }
                              } else if (value === '10'){
                                  try {
                                      await AsyncStorage.setItem('@Book10:Author', this.state.text);
                                      console.log('set Book10 Author successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book10 Author Error!');
                                  }
                              } else if (value === '11'){
                                  try {
                                      await AsyncStorage.setItem('@Book11:Author', this.state.text);
                                      console.log('set Book11 Author successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book11 Author Error!');
                                  }
                              } else if (value === '12'){
                                  try {
                                      await AsyncStorage.setItem('@Book12:Author', this.state.text);
                                      console.log('set Book12 Author successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book12 Author Error!');
                                  }
                              } else {
                                  console.log('BookNum > 12');
                              }
                            } catch (error) {
                              console.log('get Book Num Error');
                            }
                          
                          // try {
                          //   await AsyncStorage.setItem('@ThirdPage:author', this.state.text);
                          //   console.log(this.state.text);
                          // } catch (error) {
                          //   console.log('Author set Error!');
                          // }
              }} placeholder="Author..." />
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>

             <CardItem>
              <Icon active name="logo-googleplus" />
              
              <TextInput  style = {styles.BASA}
                          onChangeText = {(text) => this.setState({text})}
                          // value = {this.state.text}
                          onEndEditing = {async () => {
                          try {
                              const value = await AsyncStorage.getItem('@BookNum:count');
                              if (value === '1') {
                                  try {
                                      await AsyncStorage.setItem('@Book1:Status', this.state.text);
                                      console.log('set Book1 Status successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book1 Status Error!');
                                  }
                              } else if (value === '2'){
                                  try {
                                      await AsyncStorage.setItem('@Book2:Status', this.state.text);
                                      console.log('set Book2 Status successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book2 Status Error!');
                                  }
                              } else if (value === '3'){
                                  try {
                                      await AsyncStorage.setItem('@Book3:Status', this.state.text);
                                      console.log('set Book3 Status successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book3 Status Error!');
                                  }
                              } else if (value === '4'){
                                  try {
                                      await AsyncStorage.setItem('@Book4:Status', this.state.text);
                                      console.log('set Book4 Status successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book4 Status Error!');
                                  }
                              } else if (value === '5'){
                                  try {
                                      await AsyncStorage.setItem('@Book5:Status', this.state.text);
                                      console.log('set Book5 Status successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book5 Status Error!');
                                  }
                              } else if (value === '6'){
                                  try {
                                      await AsyncStorage.setItem('@Book6:Status', this.state.text);
                                      console.log('set Book6 Status successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book6 Status Error!');
                                  }
                              } else if (value === '7'){
                                  try {
                                      await AsyncStorage.setItem('@Book7:Status', this.state.text);
                                      console.log('set Book7 Status successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book7 Status Error!');
                                  }
                              } else if (value === '8'){
                                  try {
                                      await AsyncStorage.setItem('@Book8:Status', this.state.text);
                                      console.log('set Book8 Status successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book8 Status Error!');
                                  }
                              } else if (value === '9'){
                                  try {
                                      await AsyncStorage.setItem('@Book9:Status', this.state.text);
                                      console.log('set Book9 Status successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book9 Status Error!');
                                  }
                              } else if (value === '10'){
                                  try {
                                      await AsyncStorage.setItem('@Book10:Status', this.state.text);
                                      console.log('set Book10 Status successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book10 Status Error!');
                                  }
                              } else if (value === '11'){
                                  try {
                                      await AsyncStorage.setItem('@Book11:Status', this.state.text);
                                      console.log('set Book11 Status successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book11 Status Error!');
                                  }
                              } else if (value === '12'){
                                  try {
                                      await AsyncStorage.setItem('@Book12:Status', this.state.text);
                                      console.log('set Book12 Status successful');
                                      console.log(this.state.text);
                                  } catch (error) {
                                      console.log('set Book12 Status Error!');
                                  }
                              } else {
                                  console.log('BookNum > 12');
                              }
                            } catch (error) {
                              console.log('get Book Num Error');
                            }              
                          // try {
                          //   await AsyncStorage.setItem('@ThirdPage:status', this.state.text);
                          // } catch (error) {
                          //   console.log('Status set Error!');
                          // }
              }} placeholder="Status..." />
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>

             <CardItem style = {styles.BASA}>
              <Icon active name="logo-googleplus" />
              <Button onPress = {() =>navigate('ForthPage')} style = {styles.addNote}><Text>Add Note</Text></Button>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
           </Card>
           
        </Content>
        <Card>
            <CardItem style = {styles.bottomBar}>
              
              <Button style = {styles.bottomButton} onPress={() =>navigate('SecondPage')} ><Text>    MAIN</Text></Button>
              
              <Button style = {styles.bottomButton}><Text> PROFILE</Text></Button>
              
              <Button style = {styles.bottomButton} onPress={() =>navigate('EighthPage')}><Text>TIMELINE</Text></Button>
             </CardItem>
        </Card>
      </Container>
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffff8',
  },
  addNote: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius:15,
  },
  uploadImg: {
    borderRadius: 15,
    marginVertical: 95,
  },

  textImg: {
    marginHorizontal: 30,
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

  uploadImgBlock: {
    
    backgroundColor: 'rgba(198,223,211,0.7)',
    borderRadius: 15,
    width: 200,
    height: 250,
  },

  BASA: {
    backgroundColor: '#fffff8',
    fontSize: 17,
    color: 'rgba(0,0,0,0.6)',
  },
});*/

import React, { Component } from 'react';
import {StyleSheet, TextInput, AsyncStorage} from 'react-native';
import { Container, Header, View, Button, Icon, Fab, Content, Card, CardItem, Text, Body, Textarea, Form} from 'native-base';

export default class ShowPage2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      text: '',
      cont: 'Add Content',
      title: 'Add Title...',
    };
  }
  render() {
    const { navigate } = this.props.navigation;
    return (  
      <Container style={{ backgroundColor: '#fffff8'}}>
        
        
        <Content padder>
          <Card style = {styles.card}>
            <CardItem header bordered>
            <TextInput  style = {styles.titleName}
                        onChangeText = {(text) => this.setState({text})}
                        // value = {this.state.text}
                        onEndEditing = {async () => {
                          try {
                            const value = await AsyncStorage.getItem('@BookChoose:Num');
                            if (value === '1') {
                                try {
                                    await AsyncStorage.setItem('@Book1:Title', this.state.text);
                                    console.log('set Book1 Title successful');
                                    console.log(booktitle);
                                    this.setState({title: this.state.text});
                                } catch (error) {
                                    console.log('set Book1 Title Error!');
                                }
                            } else if (value === '2'){
                              try {
                                await AsyncStorage.setItem('@Book2:Title', this.state.text);
                                console.log('set Book2 Title successful');
                                console.log(booktitle);
                                this.setState({title: this.state.text});
                            } catch (error) {
                                console.log('set Book2 Title Error!');
                            }
                            } else if (value === '3'){
                              try {
                                await AsyncStorage.setItem('@Book3:Title', this.state.text);
                                console.log('set Book3 Title successful');
                                console.log(booktitle);
                                this.setState({title: this.state.text});
                            } catch (error) {
                                console.log('set Book3 Title Error!');
                            }
                            } else if (value === '4'){
                              try {
                                await AsyncStorage.setItem('@Book4:Title', this.state.text);
                                console.log('set Book4 Title successful');
                                console.log(booktitle);
                                this.setState({title: this.state.text});
                            } catch (error) {
                                console.log('set Book4 Title Error!');
                            }
                            } else if (value === '5'){
                              try {
                                await AsyncStorage.setItem('@Book5:Title', this.state.text);
                                console.log('set Book5 Title successful');
                                console.log(booktitle);
                                this.setState({title: this.state.text});
                            } catch (error) {
                                console.log('set Book5 Title Error!');
                            }
                            } else if (value === '6'){
                              try {
                                await AsyncStorage.setItem('@Book6:Title', this.state.text);
                                console.log('set Book6 Title successful');
                                console.log(booktitle);
                                this.setState({title: this.state.text});
                            } catch (error) {
                                console.log('set Book6 Title Error!');
                            }
                            } else if (value === '7'){
                              try {
                                await AsyncStorage.setItem('@Book7:Title', this.state.text);
                                console.log('set Book7 Title successful');
                                console.log(booktitle);
                                this.setState({title: this.state.text});
                            } catch (error) {
                                console.log('set Book7 Title Error!');
                            }
                            } else if (value === '8'){
                              try {
                                await AsyncStorage.setItem('@Book8:Title', this.state.text);
                                console.log('set Book8 Title successful');
                                console.log(booktitle);
                                this.setState({title: this.state.text});
                            } catch (error) {
                                console.log('set Book8 Title Error!');
                            }
                            } else if (value === '9'){
                              try {
                                await AsyncStorage.setItem('@Book9:Title', this.state.text);
                                console.log('set Book9 Title successful');
                                console.log(booktitle);
                                this.setState({title: this.state.text});
                            } catch (error) {
                                console.log('set Book9 Title Error!');
                            }
                            } else if (value === '10'){
                              try {
                                await AsyncStorage.setItem('@Book10:Title', this.state.text);
                                console.log('set Book10 Title successful');
                                console.log(booktitle);
                                this.setState({title: this.state.text});
                            } catch (error) {
                                console.log('set Book10 Title Error!');
                            }
                            } else if (value === '11'){
                              try {
                                await AsyncStorage.setItem('@Book11:Title', this.state.text);
                                console.log('set Book11 Title successful');
                                console.log(booktitle);
                                this.setState({title: this.state.text});
                            } catch (error) {
                                console.log('set Book11 Title Error!');
                            }
                            } else if (value === '12'){
                              try {
                                await AsyncStorage.setItem('@Book12:Title', this.state.text);
                                console.log('set Book12 Title successful');
                                console.log(booktitle);
                                this.setState({title: this.state.text});
                            } catch (error) {
                                console.log('set Book12 Title Error!');
                            }
                            } else {
                                console.log('BookNum > 12');
                            }
                          } catch (error) {
                            console.log('get Book Num Error');
                          }       
                          
                          // try {
                          //   await AsyncStorage.setItem('@ForthPage:bookTitle', this.state.text);
                          //   console.log(this.state.text);
                          // } catch (error) {
                          //   console.log('Book Title set Error!');
                          // }
                        }}
                        onLayout = {async () => {
                          try {
                            const value = await AsyncStorage.getItem('@BookChoose:Num');
                            if (value === '1') {
                                try {
                                    const booktitle = await AsyncStorage.getItem('@Book1:Title');
                                    console.log('get Book1 Title successful');
                                    console.log(booktitle);
                                    this.setState({title: booktitle});
                                } catch (error) {
                                    console.log('get Book1 Title Error!');
                                }
                            } else if (value === '2'){
                              try {
                                const booktitle = await AsyncStorage.getItem('@Book2:Title');
                                console.log('get Book2 Title successful');
                                console.log(booktitle);
                                this.setState({title: booktitle});
                            } catch (error) {
                                console.log('get Book2 Title Error!');
                            }
                            } else if (value === '3'){
                              try {
                                const booktitle = await AsyncStorage.getItem('@Book3:Title');
                                console.log('get Book3 Title successful');
                                console.log(booktitle);
                                this.setState({title: booktitle});
                            } catch (error) {
                                console.log('get Book3 Title Error!');
                            }
                            } else if (value === '4'){
                              try {
                                const booktitle = await AsyncStorage.getItem('@Book4:Title');
                                console.log('get Book4 Title successful');
                                console.log(booktitle);
                                this.setState({title: booktitle});
                            } catch (error) {
                                console.log('get Book4 Title Error!');
                            }
                            } else if (value === '5'){
                              try {
                                const booktitle = await AsyncStorage.getItem('@Book5:Title');
                                console.log('get Book5 Title successful');
                                console.log(booktitle);
                                this.setState({title: booktitle});
                            } catch (error) {
                                console.log('get Book5 Title Error!');
                            }
                            } else if (value === '6'){
                              try {
                                const booktitle = await AsyncStorage.getItem('@Book6:Title');
                                console.log('get Book6 Title successful');
                                console.log(booktitle);
                                this.setState({title: booktitle});
                            } catch (error) {
                                console.log('get Book6 Title Error!');
                            }
                            } else if (value === '7'){
                              try {
                                const booktitle = await AsyncStorage.getItem('@Book7:Title');
                                console.log('get Book7 Title successful');
                                console.log(booktitle);
                                this.setState({title: booktitle});
                            } catch (error) {
                                console.log('get Book7 Title Error!');
                            }
                            } else if (value === '8'){
                              try {
                                const booktitle = await AsyncStorage.getItem('@Book8:Title');
                                console.log('get Book8 Title successful');
                                console.log(booktitle);
                                this.setState({title: booktitle});
                            } catch (error) {
                                console.log('get Book8 Title Error!');
                            }
                            } else if (value === '9'){
                              try {
                                const booktitle = await AsyncStorage.getItem('@Book9:Title');
                                console.log('get Book9 Title successful');
                                console.log(booktitle);
                                this.setState({title: booktitle});
                            } catch (error) {
                                console.log('get Book9 Title Error!');
                            }
                            } else if (value === '10'){
                              try {
                                const booktitle = await AsyncStorage.getItem('@Book10:Title');
                                console.log('get Book10 Title successful');
                                console.log(booktitle);
                                this.setState({title: booktitle});
                            } catch (error) {
                                console.log('get Book10 Title Error!');
                            }
                            } else if (value === '11'){
                              try {
                                const booktitle = await AsyncStorage.getItem('@Book11:Title');
                                console.log('get Book11 Title successful');
                                console.log(booktitle);
                                this.setState({title: booktitle});
                            } catch (error) {
                                console.log('get Book11 Title Error!');
                            }
                            } else if (value === '12'){
                              try {
                                const booktitle = await AsyncStorage.getItem('@Book12:Title');
                                console.log('get Book12 Title successful');
                                console.log(booktitle);
                                this.setState({title: booktitle});
                            } catch (error) {
                                console.log('get Book12 Title Error!');
                            }
                            } else {
                                console.log('BookNum > 12');
                            }
                          } catch (error) {
                            console.log('get Book Num Error');
                          }       
                          
                          // try {
                          //   await AsyncStorage.setItem('@ForthPage:bookTitle', this.state.text);
                          //   console.log(this.state.text);
                          // } catch (error) {
                          //   console.log('Book Title set Error!');
                          // }
                        }} placeholder={this.state.title} />
              
              <Button style = {styles.button1} onPress={() =>navigate('SixthPage')}><Text>Mind Map</Text></Button>
              <Button style = {styles.button2}><Text>Card</Text></Button>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Form style = {styles.textArea}>
                <TextInput  style = {styles.contentStyle}
                            onChangeText = {(text) => this.setState({text})}
                            // value = {this.state.text}
                            onEndEditing = {async () => {
                              try {
                                const value = await AsyncStorage.getItem('@BookChoose:Num');
                                if (value === '1') {
                                    try {
                                        await AsyncStorage.setItem('@Book1:Content', this.state.text);
                                        console.log('set Book1 Content successful');
                                        console.log(booktitle);
                                        this.setState({title: this.state.text});
                                    } catch (error) {
                                        console.log('set Book1 Content Error!');
                                    }
                                } else if (value === '2'){
                                  try {
                                    await AsyncStorage.setItem('@Book2:Content', this.state.text);
                                    console.log('set Book2 Content successful');
                                    console.log(booktitle);
                                    this.setState({title: this.state.text});
                                } catch (error) {
                                    console.log('set Book2 Content Error!');
                                }
                                } else if (value === '3'){
                                  try {
                                    await AsyncStorage.setItem('@Book3:Content', this.state.text);
                                    console.log('set Book3 Content successful');
                                    console.log(booktitle);
                                    this.setState({title: this.state.text});
                                } catch (error) {
                                    console.log('set Book3 Content Error!');
                                }
                                } else if (value === '4'){
                                  try {
                                    await AsyncStorage.setItem('@Book4:Content', this.state.text);
                                    console.log('set Book4 Content successful');
                                    console.log(booktitle);
                                    this.setState({title: this.state.text});
                                } catch (error) {
                                    console.log('set Book4 Content Error!');
                                }
                                } else if (value === '5'){
                                  try {
                                    await AsyncStorage.setItem('@Book5:Content', this.state.text);
                                    console.log('set Book5 Content successful');
                                    console.log(booktitle);
                                    this.setState({title: this.state.text});
                                } catch (error) {
                                    console.log('set Book5 Content Error!');
                                }
                                } else if (value === '6'){
                                  try {
                                    await AsyncStorage.setItem('@Book6:Content', this.state.text);
                                    console.log('set Book6 Content successful');
                                    console.log(booktitle);
                                    this.setState({title: this.state.text});
                                } catch (error) {
                                    console.log('set Book6 Content Error!');
                                }
                                } else if (value === '7'){
                                  try {
                                    await AsyncStorage.setItem('@Book7:Content', this.state.text);
                                    console.log('set Book7 Content successful');
                                    console.log(booktitle);
                                    this.setState({title: this.state.text});
                                } catch (error) {
                                    console.log('set Book7 Content Error!');
                                }
                                } else if (value === '8'){
                                  try {
                                    await AsyncStorage.setItem('@Book8:Content', this.state.text);
                                    console.log('set Book8 Content successful');
                                    console.log(booktitle);
                                    this.setState({title: this.state.text});
                                } catch (error) {
                                    console.log('set Book8 Content Error!');
                                }
                                } else if (value === '9'){
                                  try {
                                    await AsyncStorage.setItem('@Book9:Content', this.state.text);
                                    console.log('set Book9 Content successful');
                                    console.log(booktitle);
                                    this.setState({title: this.state.text});
                                } catch (error) {
                                    console.log('set Book9 Content Error!');
                                }
                                } else if (value === '10'){
                                  try {
                                    await AsyncStorage.setItem('@Book10:Content', this.state.text);
                                    console.log('set Book10 Content successful');
                                    console.log(booktitle);
                                    this.setState({title: this.state.text});
                                } catch (error) {
                                    console.log('set Book10 Content Error!');
                                }
                                } else if (value === '11'){
                                  try {
                                    await AsyncStorage.setItem('@Book11:Content', this.state.text);
                                    console.log('set Book11 Content successful');
                                    console.log(booktitle);
                                    this.setState({title: this.state.text});
                                } catch (error) {
                                    console.log('set Book11 Content Error!');
                                }
                                } else if (value === '12'){
                                  try {
                                    await AsyncStorage.setItem('@Book12:Content', this.state.text);
                                    console.log('set Book12 Content successful');
                                    console.log(booktitle);
                                    this.setState({title: this.state.text});
                                } catch (error) {
                                    console.log('set Book12 Content Error!');
                                }
                                } else {
                                    console.log('BookNum > 12');
                                }
                              } catch (error) {
                                console.log('get Book Num Error');
                              }       
                              
                              // try {
                              //   await AsyncStorage.setItem('@ForthPage:bookTitle', this.state.text);
                              //   console.log(this.state.text);
                              // } catch (error) {
                              //   console.log('Book Title set Error!');
                              // }
                            }}
                            
                            onLayout = {async () => {
                              
                              try {
                                const value = await AsyncStorage.getItem('@BookChoose:Num');
                                if (value === '1') {
                                    try {
                                        const bookcontent = await AsyncStorage.getItem('@Book1:Content');
                                        console.log('get Book1 Content successful');
                                        console.log(bookcontent);
                                        this.setState({cont: bookcontent});
                                    } catch (error) {
                                        console.log('get Book1 Content Error!');
                                    }
                                } else if (value === '2'){
                                  try {
                                    const bookcontent = await AsyncStorage.getItem('@Book2:Content');
                                    console.log('get Book2 Content successful');
                                    console.log(bookcontent);
                                    this.setState({cont: bookcontent});
                                } catch (error) {
                                    console.log('get Book2 Content Error!');
                                }
                                } else if (value === '3'){
                                  try {
                                    const bookcontent = await AsyncStorage.getItem('@Book3:Content');
                                    console.log('get Book3 Content successful');
                                    console.log(bookcontent);
                                    this.setState({cont: bookcontent});
                                } catch (error) {
                                    console.log('get Book3 Content Error!');
                                }
                                } else if (value === '4'){
                                  try {
                                    const bookcontent = await AsyncStorage.getItem('@Book4:Content');
                                    console.log('get Book4 Content successful');
                                    console.log(bookcontent);
                                    this.setState({cont: bookcontent});
                                } catch (error) {
                                    console.log('get Book4 Content Error!');
                                }
                                } else if (value === '5'){
                                  try {
                                    const bookcontent = await AsyncStorage.getItem('@Book5:Content');
                                    console.log('get Book5 Content successful');
                                    console.log(bookcontent);
                                    this.setState({cont: bookcontent});
                                } catch (error) {
                                    console.log('get Book5 Content Error!');
                                }
                                } else if (value === '6'){
                                  try {
                                    const bookcontent = await AsyncStorage.getItem('@Book6:Content');
                                    console.log('get Book6 Content successful');
                                    console.log(bookcontent);
                                    this.setState({cont: bookcontent});
                                } catch (error) {
                                    console.log('get Book6 Content Error!');
                                }
                                } else if (value === '7'){
                                  try {
                                    const bookcontent = await AsyncStorage.getItem('@Book7:Content');
                                    console.log('get Book7 Content successful');
                                    console.log(bookcontent);
                                    this.setState({cont: bookcontent});
                                } catch (error) {
                                    console.log('get Book7 Content Error!');
                                }
                                } else if (value === '8'){
                                  try {
                                    const bookcontent = await AsyncStorage.getItem('@Book8:Content');
                                    console.log('get Book8 Content successful');
                                    console.log(bookcontent);
                                    this.setState({cont: bookcontent});
                                } catch (error) {
                                    console.log('get Book8 Content Error!');
                                }
                                } else if (value === '9'){
                                  try {
                                    const bookcontent = await AsyncStorage.getItem('@Book9:Content');
                                    console.log('get Book9 Content successful');
                                    console.log(bookcontent);
                                    this.setState({cont: bookcontent});
                                } catch (error) {
                                    console.log('get Book9 Content Error!');
                                }
                                } else if (value === '10'){
                                  try {
                                    const bookcontent = await AsyncStorage.getItem('@Book10:Content');
                                    console.log('get Book10 Content successful');
                                    console.log(bookcontent);
                                    this.setState({cont: bookcontent});
                                } catch (error) {
                                    console.log('get Book10 Content Error!');
                                }
                                } else if (value === '11'){
                                  try {
                                    const bookcontent = await AsyncStorage.getItem('@Book11:Content');
                                    console.log('get Book11 Content successful');
                                    console.log(bookcontent);
                                    this.setState({cont: bookcontent});
                                } catch (error) {
                                    console.log('get Book11 Content Error!');
                                }
                                } else if (value === '12'){
                                  try {
                                    const bookcontent = await AsyncStorage.getItem('@Book12:Content');
                                    console.log('get Book12 Content successful');
                                    console.log(bookcontent);
                                    this.setState({cont: bookcontent});
                                } catch (error) {
                                    console.log('get Book12 Content Error!');
                                }
                                } else {
                                    console.log('BookNum > 12');
                                }
                              } catch (error) {
                                console.log('get Book Num Error');
                              }    
                              
                              // try {
                              //   await AsyncStorage.setItem('@ForthPage:bookContent', this.state.text);
                              //   console.log(this.state.text);
                              // } catch (error) {
                              //   console.log('Book Content set Error!');
                              // }
                            }} placeholder={this.state.cont} />
                </Form>
              </Body>
            </CardItem>

          </Card>
        </Content>

        <View style={{ flex: 0.1 }}>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#bddccb' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}
            >
            <Icon name="share" />
            <Button style={{ backgroundColor: '#bddccb' }}>
              <Icon name="logo-whatsapp" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="logo-facebook" />
            </Button>
            <Button disabled style={{ backgroundColor: '#DD5144' }}>
              <Icon name="mail" />
            </Button>
            
          </Fab>
          
        </View>
        <CardItem>
        <TextInput  style = {styles.dateStyle}
                    onChangeText = {(text) => this.setState({text})}
                    // value = {this.state.text}
                    onEndEditing = {async () => {
                      try {
                        await AsyncStorage.setItem('@ForthPage:bookDate', this.state.text);
                      } catch (error) {
                          console.log('Book Date set Error!');
                      }
                    }} placeholder="Add Date..." />
        </CardItem>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  titleName: {
    fontSize: 35,
    color:'rgba(95,163,177,1)',
  },

  contentStyle: {
    fontSize: 20,
    color:'rgba(95,163,177,1)',
  },

  card: {
    height: 500,
  },

  dateStyle: {
    fontSize: 16,
    color: 'rgba(95,163,177,1)',
  },

  button1: {
    backgroundColor: 'rgb(253,215,126)',
    borderRadius: 15,
    marginHorizontal:5,
    width: 105,
  },

  button2: {
    backgroundColor: '#bddccb',
    borderRadius: 15,
    marginHorizontal:3,
    width: 70,
  },
  
  textArea: {
    width: 350,
    height: 300,
  },


});

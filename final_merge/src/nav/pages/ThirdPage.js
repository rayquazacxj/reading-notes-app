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
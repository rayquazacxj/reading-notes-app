/*
import React, { Component } from 'react';
import {StyleSheet, TextInput, AsyncStorage} from 'react-native';
import { Container, Header, View, Button, Icon, Fab, Content, Card, CardItem, Text, Body, Textarea, Form} from 'native-base';

export default class ForthPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      text: ''
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
                            const value = await AsyncStorage.getItem('@BookNum:count');
                            if (value === '1') {
                                try {
                                    await AsyncStorage.setItem('@Book1:Title', this.state.text);
                                    console.log('set Book1 Title successful');
                                    console.log(this.state.text);
                                } catch (error) {
                                    console.log('set Book1 Title Error!');
                                }
                            } else if (value === '2'){
                                try {
                                    await AsyncStorage.setItem('@Book2:Title', this.state.text);
                                    console.log('set Book2 Title successful');
                                    console.log(this.state.text);
                                } catch (error) {
                                    console.log('set Book2 Title Error!');
                                }
                            } else if (value === '3'){
                                try {
                                    await AsyncStorage.setItem('@Book3:Title', this.state.text);
                                    console.log('set Book3 Title successful');
                                    console.log(this.state.text);
                                } catch (error) {
                                    console.log('set Book3 Title Error!');
                                }
                            } else if (value === '4'){
                                try {
                                    await AsyncStorage.setItem('@Book4:Title', this.state.text);
                                    console.log('set Book4 Title successful');
                                    console.log(this.state.text);
                                } catch (error) {
                                    console.log('set Book4 Title Error!');
                                }
                            } else if (value === '5'){
                                try {
                                    await AsyncStorage.setItem('@Book5:Title', this.state.text);
                                    console.log('set Book5 Title successful');
                                    console.log(this.state.text);
                                } catch (error) {
                                    console.log('set Book5 Title Error!');
                                }
                            } else if (value === '6'){
                                try {
                                    await AsyncStorage.setItem('@Book6:Title', this.state.text);
                                    console.log('set Book6 Title successful');
                                    console.log(this.state.text);
                                } catch (error) {
                                    console.log('set Book6 Title Error!');
                                }
                            } else if (value === '7'){
                                try {
                                    await AsyncStorage.setItem('@Book7:Title', this.state.text);
                                    console.log('set Book7 Title successful');
                                    console.log(this.state.text);
                                } catch (error) {
                                    console.log('set Book7 Title Error!');
                                }
                            } else if (value === '8'){
                                try {
                                    await AsyncStorage.setItem('@Book8:Title', this.state.text);
                                    console.log('set Book8 Title successful');
                                    console.log(this.state.text);
                                } catch (error) {
                                    console.log('set Book8 Title Error!');
                                }
                            } else if (value === '9'){
                                try {
                                    await AsyncStorage.setItem('@Book9:Title', this.state.text);
                                    console.log('set Book9 Title successful');
                                    console.log(this.state.text);
                                } catch (error) {
                                    console.log('set Book9 Title Error!');
                                }
                            } else if (value === '10'){
                                try {
                                    await AsyncStorage.setItem('@Book10:Title', this.state.text);
                                    console.log('set Book10 Title successful');
                                    console.log(this.state.text);
                                } catch (error) {
                                    console.log('set Book10 Title Error!');
                                }
                            } else if (value === '11'){
                                try {
                                    await AsyncStorage.setItem('@Book11:Title', this.state.text);
                                    console.log('set Book11 Title successful');
                                    console.log(this.state.text);
                                } catch (error) {
                                    console.log('set Book11 Title Error!');
                                }
                            } else if (value === '12'){
                                try {
                                    await AsyncStorage.setItem('@Book12:Title', this.state.text);
                                    console.log('set Book12 Title successful');
                                    console.log(this.state.text);
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
                        }} placeholder="Add Title..." />
              
              <Button style = {styles.button1} onPress={() =>navigate('Mindmap')}><Text>Mind Map</Text></Button>
              <Button style = {styles.button2} onPress={() =>navigate('Timelinee')}><Text>Timeline</Text></Button>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Form style = {styles.textArea}>
                <TextInput  style = {styles.contentStyle}
                            onChangeText = {(text) => this.setState({text})}
                            // value = {this.state.text}
                            onEndEditing = {async () => {
                              try {
                                const value = await AsyncStorage.getItem('@BookNum:count');
                                if (value === '1') {
                                    try {
                                        await AsyncStorage.setItem('@Book1:Content', this.state.text);
                                        console.log('set Book1 Content successful');
                                        console.log(this.state.text);
                                    } catch (error) {
                                        console.log('set Book1 Content Error!');
                                    }
                                } else if (value === '2'){
                                    try {
                                        await AsyncStorage.setItem('@Book2:Content', this.state.text);
                                        console.log('set Book2 Content successful');
                                        console.log(this.state.text);
                                    } catch (error) {
                                        console.log('set Book2 Content Error!');
                                    }
                                } else if (value === '3'){
                                    try {
                                        await AsyncStorage.setItem('@Book3:Content', this.state.text);
                                        console.log('set Book3 Content successful');
                                        console.log(this.state.text);
                                    } catch (error) {
                                        console.log('set Book3 Content Error!');
                                    }
                                } else if (value === '4'){
                                    try {
                                        await AsyncStorage.setItem('@Book4:Content', this.state.text);
                                        console.log('set Book4 Content successful');
                                        console.log(this.state.text);
                                    } catch (error) {
                                        console.log('set Book4 Content Error!');
                                    }
                                } else if (value === '5'){
                                    try {
                                        await AsyncStorage.setItem('@Book5:Content', this.state.text);
                                        console.log('set Book5 Content successful');
                                        console.log(this.state.text);
                                    } catch (error) {
                                        console.log('set Book5 Content Error!');
                                    }
                                } else if (value === '6'){
                                    try {
                                        await AsyncStorage.setItem('@Book6:Content', this.state.text);
                                        console.log('set Book6 Content successful');
                                        console.log(this.state.text);
                                    } catch (error) {
                                        console.log('set Book6 Content Error!');
                                    }
                                } else if (value === '7'){
                                    try {
                                        await AsyncStorage.setItem('@Book7:Content', this.state.text);
                                        console.log('set Book7 Content successful');
                                        console.log(this.state.text);
                                    } catch (error) {
                                        console.log('set Book7 Content Error!');
                                    }
                                } else if (value === '8'){
                                    try {
                                        await AsyncStorage.setItem('@Book8:Content', this.state.text);
                                        console.log('set Book8 Content successful');
                                        console.log(this.state.text);
                                    } catch (error) {
                                        console.log('set Book8 Content Error!');
                                    }
                                } else if (value === '9'){
                                    try {
                                        await AsyncStorage.setItem('@Book9:Content', this.state.text);
                                        console.log('set Book9 Content successful');
                                        console.log(this.state.text);
                                    } catch (error) {
                                        console.log('set Book9 Content Error!');
                                    }
                                } else if (value === '10'){
                                    try {
                                        await AsyncStorage.setItem('@Book10:Content', this.state.text);
                                        console.log('set Book10 Content successful');
                                        console.log(this.state.text);
                                    } catch (error) {
                                        console.log('set Book10 Content Error!');
                                    }
                                } else if (value === '11'){
                                    try {
                                        await AsyncStorage.setItem('@Book11:Content', this.state.text);
                                        console.log('set Book11 Content successful');
                                        console.log(this.state.text);
                                    } catch (error) {
                                        console.log('set Book11 Content Error!');
                                    }
                                } else if (value === '12'){
                                    try {
                                        await AsyncStorage.setItem('@Book12:Content', this.state.text);
                                        console.log('set Book12 Content successful');
                                        console.log(this.state.text);
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
                              //   await AsyncStorage.setItem('@ForthPage:bookContent', this.state.text);
                              //   console.log(this.state.text);
                              // } catch (error) {
                              //   console.log('Book Content set Error!');
                              // }
                            }} placeholder="content..." />
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
*/

import React, { Component } from 'react';
import {StyleSheet, TextInput, AsyncStorage} from 'react-native';
import { Container, Header, View, Button, Icon, Fab, Content, Card, CardItem, Text, Body, Textarea, Form} from 'native-base';
import {connect} from 'react-redux';

class ForthPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      text: '',
      content:'',

      initTitle:'',
      initContent:''
    };

    this.init = true
    this.getDataFromStorage = this.getDataFromStorage.bind(this)
  }
  render() {
    const { navigate } = this.props.navigation;

    if(this.init){
        this.init = false
        this.getDataFromStorage()
        console.log('in render 4 , get init data')
    }

    return (  
      <Container style={{ backgroundColor: '#fffff8'}}>
        
        
        <Content padder>
          <Card style = {styles.card}>
            <CardItem header bordered>
            <TextInput  style = {styles.titleName}
                        defaultValue={this.state.initTitle}
                        onChangeText = {(text) => this.setState({text})}
                        // value = {this.state.text}
                        
                        onEndEditing = {async () => {
                          try {
                            const value = (this.props.currentID).toString()
                            if (value === '1') {
                                try {
                                    await AsyncStorage.setItem('@Book1:Title', this.state.text);
                                    console.log('set Book1 Title successful');
                                    console.log(this.state.text);
                                } catch (error) {
                                    console.log('set Book1 Title Error!');
                                }
                            } else if (value === '2'){
                                try {
                                    await AsyncStorage.setItem('@Book2:Title', this.state.text);
                                    console.log('set Book2 Title successful');
                                    console.log(this.state.text);
                                } catch (error) {
                                    console.log('set Book2 Title Error!');
                                }
                            } else if (value === '3'){
                                try {
                                    await AsyncStorage.setItem('@Book3:Title', this.state.text);
                                    console.log('set Book3 Title successful');
                                    console.log(this.state.text);
                                } catch (error) {
                                    console.log('set Book3 Title Error!');
                                }
                            } else if (value === '4'){
                                try {
                                    await AsyncStorage.setItem('@Book4:Title', this.state.text);
                                    console.log('set Book4 Title successful');
                                    console.log(this.state.text);
                                } catch (error) {
                                    console.log('set Book4 Title Error!');
                                }
                            } else if (value === '5'){
                                try {
                                    await AsyncStorage.setItem('@Book5:Title', this.state.text);
                                    console.log('set Book5 Title successful');
                                    console.log(this.state.text);
                                } catch (error) {
                                    console.log('set Book5 Title Error!');
                                }
                            } else if (value === '6'){
                                try {
                                    await AsyncStorage.setItem('@Book6:Title', this.state.text);
                                    console.log('set Book6 Title successful');
                                    console.log(this.state.text);
                                } catch (error) {
                                    console.log('set Book6 Title Error!');
                                }
                            } else if (value === '7'){
                                try {
                                    await AsyncStorage.setItem('@Book7:Title', this.state.text);
                                    console.log('set Book7 Title successful');
                                    console.log(this.state.text);
                                } catch (error) {
                                    console.log('set Book7 Title Error!');
                                }
                            } else if (value === '8'){
                                try {
                                    await AsyncStorage.setItem('@Book8:Title', this.state.text);
                                    console.log('set Book8 Title successful');
                                    console.log(this.state.text);
                                } catch (error) {
                                    console.log('set Book8 Title Error!');
                                }
                            } else if (value === '9'){
                                try {
                                    await AsyncStorage.setItem('@Book9:Title', this.state.text);
                                    console.log('set Book9 Title successful');
                                    console.log(this.state.text);
                                } catch (error) {
                                    console.log('set Book9 Title Error!');
                                }
                            } else if (value === '10'){
                                try {
                                    await AsyncStorage.setItem('@Book10:Title', this.state.text);
                                    console.log('set Book10 Title successful');
                                    console.log(this.state.text);
                                } catch (error) {
                                    console.log('set Book10 Title Error!');
                                }
                            } else if (value === '11'){
                                try {
                                    await AsyncStorage.setItem('@Book11:Title', this.state.text);
                                    console.log('set Book11 Title successful');
                                    console.log(this.state.text);
                                } catch (error) {
                                    console.log('set Book11 Title Error!');
                                }
                            } else if (value === '12'){
                                try {
                                    await AsyncStorage.setItem('@Book12:Title', this.state.text);
                                    console.log('set Book12 Title successful');
                                    console.log(this.state.text);
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
                        }} placeholder="Add Title..." />
              
              <Button style = {styles.button1} onPress={() =>navigate('Mindmap')}><Text>Mind Map</Text></Button>
              <Button style = {styles.button2} onPress={() =>navigate('Timeline')}><Text>Timeline</Text></Button>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Form style = {styles.textArea}>
                <TextInput  style = {styles.contentStyle}
                            defaultValue={this.state.initContent}
                            onChangeText = {(text) => this.setState({content:text})}
                            // value = {this.state.text}
                            onEndEditing = {async () => {
                              try {
                                const value = (this.props.currentID).toString()
                                console.log('choose book:',value)
                                if (value === '1') {
                                    try {
                                        await AsyncStorage.setItem('@Book1:Content', this.state.content);
                                        console.log('set Book1 Content successful');
                                        console.log(this.state.content);
                                    } catch (error) {
                                        console.log('set Book1 Content Error!');
                                    }
                                } else if (value === '2'){
                                    try {
                                        await AsyncStorage.setItem('@Book2:Content', this.state.content);
                                        console.log('set Book2 Content successful');
                                        console.log(this.state.content);
                                    } catch (error) {
                                        console.log('set Book2 Content Error!');
                                    }
                                } else if (value === '3'){
                                    try {
                                        await AsyncStorage.setItem('@Book3:Content', this.state.content);
                                        console.log('set Book3 Content successful');
                                        console.log(this.state.content);
                                    } catch (error) {
                                        console.log('set Book3 Content Error!');
                                    }
                                } else if (value === '4'){
                                    try {
                                        await AsyncStorage.setItem('@Book4:Content', this.state.content);
                                        console.log('set Book4 Content successful');
                                        console.log(this.state.content);
                                    } catch (error) {
                                        console.log('set Book4 Content Error!');
                                    }
                                } else if (value === '5'){
                                    try {
                                        await AsyncStorage.setItem('@Book5:Content', this.state.content);
                                        console.log('set Book5 Content successful');
                                        console.log(this.state.content);
                                    } catch (error) {
                                        console.log('set Book5 Content Error!');
                                    }
                                } else if (value === '6'){
                                    try {
                                        await AsyncStorage.setItem('@Book6:Content', this.state.content);
                                        console.log('set Book6 Content successful');
                                        console.log(this.state.content);
                                    } catch (error) {
                                        console.log('set Book6 Content Error!');
                                    }
                                } else if (value === '7'){
                                    try {
                                        await AsyncStorage.setItem('@Book7:Content', this.state.content);
                                        console.log('set Book7 Content successful');
                                        console.log(this.state.content);
                                    } catch (error) {
                                        console.log('set Book7 Content Error!');
                                    }
                                } else if (value === '8'){
                                    try {
                                        await AsyncStorage.setItem('@Book8:Content', this.state.content);
                                        console.log('set Book8 Content successful');
                                        console.log(this.state.content);
                                    } catch (error) {
                                        console.log('set Book8 Content Error!');
                                    }
                                } else if (value === '9'){
                                    try {
                                        await AsyncStorage.setItem('@Book9:Content', this.state.content);
                                        console.log('set Book9 Content successful');
                                        console.log(this.state.content);
                                    } catch (error) {
                                        console.log('set Book9 Content Error!');
                                    }
                                } else if (value === '10'){
                                    try {
                                        await AsyncStorage.setItem('@Book10:Content', this.state.content);
                                        console.log('set Book10 Content successful');
                                        console.log(this.state.content);
                                    } catch (error) {
                                        console.log('set Book10 Content Error!');
                                    }
                                } else if (value === '11'){
                                    try {
                                        await AsyncStorage.setItem('@Book11:Content', this.state.content);
                                        console.log('set Book11 Content successful');
                                        console.log(this.state.content);
                                    } catch (error) {
                                        console.log('set Book11 Content Error!');
                                    }
                                } else if (value === '12'){
                                    try {
                                        await AsyncStorage.setItem('@Book12:Content', this.state.content);
                                        console.log('set Book12 Content successful');
                                        console.log(this.state.content);
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
                              //   await AsyncStorage.setItem('@ForthPage:bookContent', this.state.text);
                              //   console.log(this.state.text);
                              // } catch (error) {
                              //   console.log('Book Content set Error!');
                              // }
                            }} placeholder="content..." />
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

            <Button  style={{ backgroundColor: '#DD5144' }} onPress={()=>{console.log('press shareButton');navigate('ShareScreen')}}>
              <Icon name="save" />
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


    async getDataFromStorage(){
        let title =    await AsyncStorage.getItem(`@Book${this.props.currentID}:Title`);
        let content =  await AsyncStorage.getItem(`@Book${this.props.currentID}:Content`);
        
        console.log('init: ',title,content)
        this.setState({
            initTitle : title,
            initContent: content,
            
        })
        console.log('initdata 4 page:',this.state.initTitle,this.state.initContent)

    }

    componentWillMount(){
        console.log('hi componentDidMount in 4')
        this.init = true
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

export default connect(state => ({
    currentID: state.CurrentID.currentID
}))(ForthPage);

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  StatusBar,
} from 'react-native';
/*
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';*/
import { NavigationContainer } from '@react-navigation/native';
import { Container, Header, View, Fab, Button, Icon } from 'native-base';

/*
import 'react-native-gesture-handler';
import {BackHandler} from 'react-native';
import {Root, StyleProvider} from 'native-base';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import {Provider, connect} from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();*/
/*
const appReducer = {
    search, toast, post, postForm, postItem
};

const store = createStore(combineReducers(appReducer), 
    compose(applyMiddleware(thunkMiddleware, loggerMiddleware)));
*/
/*
export default class App extends React.Component {
  render() {
      return (
          <NavigationContainer>
              <Provider store={store}>
               <Text>Welcome to React Native QQ!</Text>
              <Text>To get started, edit App.js</Text> 
                  <Root>
                  <Stack.Navigator>
                      <Stack.Screen name="Today" component={TodayScreen} />
                      <Stack.Screen name="Forecast" component={ForecastScreen} />
                      <Stack.Screen name="PostForm" component={PostFormScreen} />
                  </Stack.Navigator>
                  </Root>
              </Provider>
          </NavigationContainer>
      );
  }
}
*/

//import Timeline from 'react-native-timeline-flatlist'
import Timelinee from './src/timeline'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    };
  }
  render() {
      return (
          <NavigationContainer>
            <Timelinee></Timelinee>

            <Container>
              <View style={{ flex: 1 }}>
                <Fab
                  active={this.state.active}
                  direction="up"
                  containerStyle={{ }}
                  style={{ backgroundColor: '#5067FF' }}
                  position="bottomRight"
                  onPress={() => this.setState({ active: !this.state.active })}>
                  <Icon name="share" />
                  <Button style={{ backgroundColor: '#34A34F' }}>
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
          </Container>

          </NavigationContainer>
      );
  }
}



const styles = StyleSheet.create({
  
});

//export default App;

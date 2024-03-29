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

import { Container, Header, View, Fab, Button, Icon ,Text,Content, Footer, FooterTab,} from 'native-base';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import {BackHandler} from 'react-native';
import {Root, StyleProvider} from 'native-base';

import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import {Provider, connect} from 'react-redux';

import {ConnectMindmapItem , MindmapInfo} from './src/state/mindmap_reducer'

import Timelinee from './src/component/timeline'
import Mindmap from './src/component/mindmap'
import PictureGen from './src/component/pictureGen2'
import { GoToButton } from './src/api/navigation';


const Stack = createStackNavigator();

const appReducer = {
    ConnectMindmapItem,MindmapInfo
};

const store = createStore(combineReducers(appReducer), 
    compose(applyMiddleware(thunkMiddleware, loggerMiddleware)));

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



export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    };
  }
  render() {
      return (
          <NavigationContainer style={styles.flex}>
            <Provider store={store}>
              <Root>
                <Stack.Navigator initialRouteName="Timelinee">
                    <Stack.Screen name="Timelinee" component={Timelinee} />
                    <Stack.Screen name="Mindmap" component={Mindmap} />
                    <Stack.Screen name="PictureGen2" component={PictureGen} />
                </Stack.Navigator>
              </Root>
            </Provider>

                  <Footer >
                    <FooterTab style={styles.button}>
                      <Button vertical style={styles.button}>
                        <Icon name="apps" />
                        <Text>Apps</Text>
                      </Button>
                      <Button vertical active style={styles.button}>
                        <Icon name="camera" />
                        <Text>Camera</Text>
                        </Button>
                      <Button vertical active style={styles.button} >
                        <Icon active name="navigate" />
                        <Text>Navigate</Text>
                      </Button>
                      <Button vertical style={styles.button}>
                        <Icon name="person" />
                        <Text>Contact</Text>
                      </Button>
                    </FooterTab>
                  </Footer>
              
                  
            
          

          </NavigationContainer>
      );
  }
}




const styles = StyleSheet.create({
  flex:{
    flexDirection: 'column',
    justifyContent:"center",
    alignItems: 'stretch',
  },
  button:{
    backgroundColor:'#BCDBCA'
  }
});

//export default App;

import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import {BackHandler,StyleSheet} from 'react-native';
import {Root, StyleProvider} from 'native-base';

import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import {Provider, connect} from 'react-redux';

import {ConnectMindmapItem , MindmapInfo} from '../../state/mindmap_reducer'
import {CurrentID} from '../../state/bookID_reducer'

import Home from './Home'
import ShareScreen from './ShareScreen'
import Profile from './Profile'
import Timelinee from './timeline'
import PictureGen from './pictureGen2'
import Mindmap from './mindmap'
import SecondPage from './SecondPage'
import ThirdPage from './ShowPage'
import ForthPage from './ForthPage'

const Stack = createStackNavigator()

const appReducer = {
  ConnectMindmapItem,MindmapInfo,CurrentID
};

const store = createStore(combineReducers(appReducer), 
  compose(applyMiddleware(thunkMiddleware, loggerMiddleware)));
/*
function MainNav(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home">
        { screenProps => <Home {...screenProps} updateAuth={props.updateAuth} />}
      </Stack.Screen>
          <Stack.Screen name="ShareScreen">
              {screenProps => <ShareScreen {...screenProps} updateAuth={props.updateAuth} />}
          </Stack.Screen>
       
          <Stack.Screen name="Profile">
              {screenProps => <Profile {...screenProps} updateAuth={props.updateAuth} />}
        </Stack.Screen>
 
    </Stack.Navigator>
  );
}

export default MainNav
*/


export default class MainNav extends React.Component {
  
  constructor(props) {
      super(props);

  }


  render() {
    return (
      
        <Provider store={store}>
          <Root>
            <Stack.Navigator initialRouteName="SecondPage">

              <Stack.Screen name="SecondPage" component={SecondPage} />
              <Stack.Screen name="ForthPage" component={ForthPage} />

              <Stack.Screen name="Home">
                { screenProps => <Home {...screenProps} updateAuth={this.props.updateAuth} />}
              </Stack.Screen>

              <Stack.Screen name="ShareScreen">
                {screenProps => <ShareScreen {...screenProps} updateAuth={this.props.updateAuth} />}
              </Stack.Screen>

              <Stack.Screen name="Profile">
                {screenProps => <Profile {...screenProps} updateAuth={this.props.updateAuth} />}
              </Stack.Screen>

              

              <Stack.Screen name="ShowPage" component={ThirdPage} />
              <Stack.Screen name="Timelinee" component={Timelinee} />
              <Stack.Screen name="Mindmap" component={Mindmap} />
              <Stack.Screen name="PictureGen" component={PictureGen} />

            </Stack.Navigator>
          </Root>
      </Provider>
    
    )
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
  
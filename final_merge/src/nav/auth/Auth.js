import React from 'react';
import {
    View, Text, StyleSheet, Image, Dimensions, KeyboardAvoidingView, Platform, Button, SafeAreaView, ScrollView, YellowBox
} from 'react-native'
YellowBox.ignoreWarnings(['Remote'])
import SignIn from './SignIn'
import SignUp from './SignUp'
import ForgotPassword from './ForgotPassword'
import Federated from './Federated'
import HideWithKeyboard from 'react-native-hide-with-keyboard';
const { width, height } = Dimensions.get('window')
import { Auth as am } from 'aws-amplify'
class Auth extends React.Component {
  state = {
    showSignUp: false,
    formType: 'showSignIn'
  }
  toggleAuthType = formType => {
    this.setState({ formType })
  }
  render() {
    const showSignIn = this.state.formType === 'showSignIn'
    const showSignUp = this.state.formType === 'showSignUp'
    const showFederated = this.state.formType === 'showFederated'
      const showForgotPassword = this.state.formType === 'showForgotPassword'
      
      return (
          
      <KeyboardAvoidingView
      style={styles.container}
        behavior={Platform.Os == "ios" ? "padding" : "height"}
          >
             
          <Image
            style={styles.logo}
            resizeMode='contain'
            source={require("../../assets/Logo.jpg")}
          />
          <Text style={styles.title}>Welcome to Note App!</Text>
          <Text style={styles.subtitle}>Please signin to start</Text>
          { showSignIn && (
            <SignIn
              toggleAuthType={this.toggleAuthType}
              updateAuth={() => this.props.updateAuth('mainNav')}
            />
          ) }
            {showSignUp && <SignUp toggleAuthType={this.toggleAuthType} />}
              {showFederated && <Federated toggleAuthType={this.toggleAuthType} updateAuth={() => this.props.updateAuth('mainNav')}/>}
            {showForgotPassword && <ForgotPassword toggleAuthType={this.toggleAuthType} />}
              
              <View style={{
                  position: 'absolute', bottom: 50
              }}>
                  <HideWithKeyboard>
              <View >

            {
              showSignUp || showForgotPassword ? (
                <Text style={styles.bottomMessage}>Already signed up? <Text
                style={styles.bottomMessageHighlight}
                onPress={() => this.toggleAuthType('showSignIn')}>&nbsp;&nbsp;Sign In</Text></Text>
              ) : (
                <Text style={styles.bottomMessage}>Need an account?
                  <Text
                    onPress={() => this.toggleAuthType('showSignUp')}
                    style={styles.bottomMessageHighlight}>&nbsp;&nbsp;Sign Up</Text>
                </Text>
              )
            }
            </View>
              <View style={{bottom: 50}}>
                  { showSignIn&&
                         <Text 
                        onPress={() => this.toggleAuthType('showFederated')}
                        style={styles.bottomMessageHighlight}>&nbsp;&nbsp;Sign in with other existing accounts
                        </Text>
                    }

                      </View >
                      </HideWithKeyboard>
                  </View>
                  
              </KeyboardAvoidingView>
          
              
          
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 40
  },  
  logo: {
    height: width / 2.5
  },
  title: {
    fontSize: 26,
    marginTop: 15,
    fontFamily: 'SourceSansPro-SemiBold',
    color: '#e19f51'
  },
  subtitle: {
    fontSize: 20,
 
    color: 'rgba(0, 0, 0, .75)',
    fontFamily: 'SourceSansPro-Regular',
  },
    bottomMessage: {
        
    fontFamily: 'SourceSansPro-Regular',
      fontSize: 18,

        paddingTop: 15,
     
        flexDirection: 'row',
  },
  bottomMessageHighlight: {
    color: '#f4a63b',
      paddingLeft: 10,
      fontSize: 18,
      justifyContent: 'center',
      alignItems: 'center',
  }
})

export default Auth;
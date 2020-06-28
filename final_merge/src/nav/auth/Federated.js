import React from 'react'
import {
    View, Text, StyleSheet, Image, Dimensions, TouchableHighlight
} from 'react-native'
import { Input, ActionButton } from '../../components'
import { Cache } from 'aws-amplify';
import { Auth } from 'aws-amplify';


export default class Federated extends React.Component {

    state = {
        isAuthenticating: false
    }
    showSignIn = () => {
        this.props.toggleAuthType('showSignIn')
    }

    
    Facebook = async () => {
        
        await Auth.federatedSignIn({ provider: "Facebook" })
        
        this.setState({ isAuthenticating: false })
        console.log('successfully signed in')
        console.log('isAuthenticating')
    }

    Google = async () => {
        
        await Auth.federatedSignIn({ provider: "Google" })
            (this.props.updateAuth('MainNav'))
        console.log('successfully signed in')
        console.log('isAuthenticating')
       
        this.setState({ isAuthenticating: false })
        
            
            
    }
    Amazon = async () => {
        
        await Auth.federatedSignIn({ provider: "LoginWithAmazon" })
        (this.props.updateAuth('MainNav'))
        this.setState({ isAuthenticating: false })
        console.log('successfully signed in')
        console.log('isAuthenticating')

    }
   

    render() {

        return (  
            < View style={styles.buttonContainer } >
            
                {/*<ActionButton
                title='Login with Facebook'
                onPress={this.Facebook}
            />*/}
                <ActionButton style={styles.button}
                title='Login with Google'
                onPress={this.Google}
            />
                <ActionButton style={styles.button}
                title='Login with Amazon'
                onPress={this.Amazon}
                />
                <Text style={styles.bottomMessageHighlight}  onPress={this.showSignIn}>
                    <Text>Already signed up?</Text>
                </Text>
               
        </View>
        );
    }




}
const styles = StyleSheet.create({
    bottomMessageHighlight: {
        color: '#f4a63b',
        
        fontSize: 18,
        
       
    },

    buttonContainer: {
        paddingTop: 15,
       
        flexDirection: 'column',
        width: 300,
        
    },
    button: {
        padding: 20,
        margin: 50,
        borderWidth:100,
    }
})

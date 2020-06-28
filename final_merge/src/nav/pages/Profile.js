import { Auth } from 'aws-amplify'
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';



export default class Profile extends Component {
    state={
        username:'username'

    }

    componentDidMount() {
        Auth.currentAuthenticatedUser({
            bypassCache: true  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
        }).then(user => console.log('user:',user))
            .catch(err => console.log(err));

        let user = Auth.currentAuthenticatedUser();

        const { attributes } = user;
        this.setState({ username:user.username })
        

    }

    signOut = async () => {
        try {
            await Auth.signOut()
            console.log('signed out')
            this.props.updateAuth('auth')
        } catch (err) {
            console.log('error signing out...', err)
        }
    }
 
    render() {

        return (
            <View style={styles.container}>
                <View style={styles.header}></View>
                <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
                <View style={styles.body}>
                    <View style={styles.bodyContent}>
                        <Text style={styles.name} > {this.state.username}</Text>
                        <Text style={styles.info}>Student</Text>
                        <Text style={styles.description}>
                            Post number(0){"\n"}
                            Book number(0)
                        </Text>
    

                        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.goBack()}>
                            <Text style={styles.buttonText}>Go Back</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer} onPress={this.signOut}>
                            <Text style={styles.buttonText}>Log out</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'SourceSansPro-SemiBold'
    },
    header: {
        backgroundColor: "#5f9ea0",
        height: 200,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 130
    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',
    },
    body: {
        marginTop: 40,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
    },
    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: "600"
    },
    info: {
        fontSize: 16,
        color: "#00BFFF",
        marginTop: 10
    },
    description: {
        fontSize: 16,
        color: "#696969",
        marginTop: 10,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
        backgroundColor: "#5f9ea0",
        
        
    },
});



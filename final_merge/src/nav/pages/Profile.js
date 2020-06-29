import { Auth } from 'aws-amplify'
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    AsyncStorage,
    Animated,
    Easing,
} from 'react-native';




export default class Profile extends Component {
    
    constructor(props) {
        super(props);
        this.state={
            username:'username',
            
            fadeInOpacity: new Animated.Value(0)
        }

        this.bookNUM = 0
        this.getBookNum = this.getBookNum.bind(this)
    }
    

    componentDidMount() {
        
        
        this.getBookNum()

        Auth.currentAuthenticatedUser({
            bypassCache: true  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
        }).then(user => {
            console.log('user:',user)
            this.setState({ username:user.username })
        })
            .catch(err => console.log(err));

        let user = Auth.currentAuthenticatedUser();

        const { attributes } = user;

        Animated.timing(this.state.fadeInOpacity, {
            toValue: 1, 
            duration: 3000, 
            easing: Easing.linear 
        }).start();
        //this.setState({ username:user.username })
        

    }

    async getBookNum(){
        this.bookNUM = await AsyncStorage.getItem('@BookNum:count');
        console.log(this.bookNUM)
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
        console.log('username(in Profile): ',this.state.username)
        //console.log(this.bookNUM)
        return (
            <View style={styles.container}>
                <View style={styles.header}></View>
                <Image style={styles.avatar} source={require('../../assets/PIKA.png')} />
                <View style={styles.body}>
                    <View style={styles.bodyContent}>
                        <Text style={styles.name} > {this.state.username}</Text>
                        
                        
                        <Animated.Text style={[styles.animateView, {opacity: this.state.fadeInOpacity,fontSize:30}]}>
                            
                                     Book number: {this.bookNUM} !
                            
                        </Animated.Text>
                        
    

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
        marginTop:30
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
        opacity:0.7
        
        
    },

    animateView: {
        height:50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginBottom:50
    },
    text: {
        fontSize: 30
    }
});



import React from 'react'
import {
    View, StyleSheet, Image, TouchableOpacity, AsyncStorage,
} from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';

class ShareScreen extends React.Component {
    static navigationOptions = {
        title: 'ShareScreen'
    }
    render() {
        return (
            <View style={styles.container}>
                

                <Card style={styles.ImgBlock}>
              
                </Card>
                
                <TouchableOpacity style={styles.buttonContainer} onPress={() => alert("Save")}>
                    <Text style={styles.buttonText} >Save in device</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
/*
 * <Text onPress={() => this.props.navigation.goBack()}>Go Back</Text>
 * 
 * 
 * */

const styles = StyleSheet.create({

    buttonText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'SourceSansPro-SemiBold'
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
    ImgBlock: {

        backgroundColor: 'rgba(198,223,211,0.7)',
        borderRadius: 15,
        width: 200,
        height: 250,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
})

export default ShareScreen
import React from 'react'
import Timeline from 'react-native-timeline-flatlist'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    StatusBar,
    View
  } from 'react-native'

import { Container, Header, Content, Item, Input ,Text, Button} from 'native-base';

export default class Mindmap extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Container >
                <Text> SCREEN2~ </Text>
                <Item rounded >
                    <Input placeholder="SCREEN2" />
                </Item>  
            </Container>
        )
        
    }
}
import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Card } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';
import { PROMOTIONS } from '../shared/promotions';
import { SPONSORS } from '../shared/sponsors';
import OlyTopTenLogo from '../assets/images/OlympiaTopTen.png';


function RenderItem({item}) {
    if (item) {
        return (
            <Card
                featuredTitle={item.name}
                image={item.image}>
                <Text
                style={{margin: 10}}>
                    {item.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            promotions: PROMOTIONS,
            sponsors: SPONSORS
        };
    }

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
                <Image 
                    style={{flex:1, height: 150,  alignSelf: 'center'}}
                    resizeMode="contain"
                    source={require('../assets/images/OlympiaTopTen.png')} />
                <RenderItem 
                    item={this.state.promotions.filter(promotion => promotion.featured)[0]} />
                <RenderItem 
                    item={this.state.sponsors.filter(sponsor => sponsor.featured)[0]} />
            </ScrollView>
        )
    }
}

export default Home;
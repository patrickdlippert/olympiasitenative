import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { PROMOTIONS } from '../shared/promotions';
import { SPONSORS } from '../shared/sponsors';
import CardCarousel from './CardCarouselComponent';


function RenderItem({item}) {
    if (item) {
        return (
            <Card
                featuredTitle={item.displayName ? item.name : ''}
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
            promotions: PROMOTIONS,
            sponsors: SPONSORS
        };
    }

    static navigationOptions = {
        title: 'Home'
    }



    render() {
        
        const styles = StyleSheet.create(
            {
                container:
                {
                    flex: 1,
                    backgroundColor: '#5637DD' // Set your own custom Color
                }
            }
        );

        return (
            <ScrollView>
                <View style = { styles.container }>
                <Image 
                    style={{flex:1, height: 150,  alignSelf: 'center'}}
                    resizeMode="contain"
                    source={require('../assets/images/OlympiaTopTen.png')} />
                </View>
                <RenderItem 
                    item={this.state.promotions.filter(promotion => promotion.featured)[0]} />


                <CardCarousel resources={this.state.sponsors} />
            </ScrollView>
        )
    }
}

export default Home;
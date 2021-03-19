import React, { Component } from 'react';
import { View, Text, ScrollView, Image, ImageBackground, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { PROMOTIONS } from '../shared/promotions';
import { SPONSORS } from '../shared/sponsors';
import CardCarousel from './CardCarouselComponent';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';



function RenderSplash() {
    return (
        <Animatable.View 
        animation='fadeInDown'
        duration={2000}
        delay={1000}
        >
        <Card>
            <ImageBackground 
            style={{flex:1, height: '100%', width:'100%', alignSelf: 'center'}}
            resizeMode="cover"
            source={require('../assets/images/olympia-aerial2.jpg')}>
                <Animatable.Image 
                    animation='tada'
                    duration={4000}
                    delay={1000}
                    style={{flex:1, height: 250,  alignSelf: 'center'}}
                    resizeMode="contain"
                    source={require('../assets/images/LaurelTopTen.png')} />
                <Animatable.Text 
                    animation='fadeInRight'
                    duration={4000}
                    delay={1000}
                    style={styles.introText}
                    >The absolute best of Olympia!</Animatable.Text>
            </ImageBackground>
        </Card>
        </Animatable.View>
    );
}


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
        return (
            <ScrollView>
                <View style = { styles.container }>
                    <LinearGradient
                        colors={['#5637DD', '#3046C5', '#60106B']}
                        style={styles.linearGradient}
                        start={{x: 0.7, y:0 }}
                    >
                        <Image 
                            style={{flex:1, height: 150,  alignSelf: 'center'}}
                            resizeMode="contain"
                            source={require('../assets/images/OlympiaTopTen.png')} />
                    </LinearGradient>
                </View>
                <RenderSplash />
                <RenderItem 
                    item={this.state.promotions.filter(promotion => promotion.featured)[0]} />


                <CardCarousel resources={this.state.sponsors} />
            </ScrollView>
        )
    }
}


        
const styles = StyleSheet.create(
    {
        container:
        {
            flex: 1,
            //backgroundColor: '#5637DD' // Set your own custom Color
        },
        linearGradient: {
            alignItems: 'center',
            justifyContent: 'center',
        },
        introText: {
            fontWeight: 'bold',
            fontSize: 18,
            color: '#fff',
            textAlign: 'center'
        }
    }
);



export default Home;
import React, { Component } from 'react';
import Home from './HomeComponent';
import Attractions from './AttractionsComponent';
import Restaurants from './RestaurantsComponent';
import Events from './EventsComponent';
import HighlightInfo from './HighlightInfoComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

const AttractionNavigator = createStackNavigator(
    {
        Attractions: { screen: Attractions },
        HighlightInfo: { screen: HighlightInfo }
    },
    {
        initialRouteName: 'Attractions',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const RestaurantNavigator = createStackNavigator(
    {
        Restaurants: { screen: Restaurants },
        HighlightInfo: { screen: HighlightInfo }
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const EventNavigator = createStackNavigator(
    {
        Events: { screen: Events },
        HighlightInfo: { screen: HighlightInfo }
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);



const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home },
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        Attractions: { screen: AttractionNavigator },
        Restaurants: { screen: RestaurantNavigator },
        Events: { screen: EventNavigator }

    },
    {
        drawerBackgroundColor: '#CEC8FF'
    }
);


const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {
    render() {
        return (
            <View 
                style={{
                    flex: 1,
                    paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
                }}
            >
                <AppNavigator />
            </View>
        );
    }
}

export default Main;
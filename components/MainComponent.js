import React, { Component } from 'react';
import Home from './HomeComponent';
import Attractions from './AttractionsComponent';
import Restaurants from './RestaurantsComponent';
import Events from './EventsComponent';
import Resources from './ResourcesComponent';
import HighlightInfo from './HighlightInfoComponent';
import ImageGallery from './ImageGalleryComponent';
import { View, Platform, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

const AttractionNavigator = createStackNavigator(
    {
        Attractions: { 
            screen: Attractions,
            navigationOptions: ({navigation}) => ({
                headerLeft: <Icon
                    name='map-marker-alt'
                    type='font-awesome-5'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
        },
        HighlightInfo: { screen: HighlightInfo },
        ImageGallery: { screen: ImageGallery }
    },
    {
        initialRouteName: 'Attractions',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#ad9750'
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
        Restaurants: { 
            screen: Restaurants,
            navigationOptions: ({navigation}) => ({
                headerLeft: <Icon
                    name='utensils'
                    type='font-awesome-5'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
        },
        HighlightInfo: { screen: HighlightInfo },
        ImageGallery: { screen: ImageGallery }
    },
    {
        initialRouteName: 'Restaurants',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#ad9750'
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
        Events: { 
            screen: Events,
            navigationOptions: ({navigation}) => ({
                headerLeft: <Icon
                    name='calendar'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
        },
        HighlightInfo: { screen: HighlightInfo },
        ImageGallery: { screen: ImageGallery }
    },
    {
        initialRouteName: 'Events',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#ad9750'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const ResourcesNavigator = createStackNavigator(
    {
        Resources: { 
            screen: Resources,
            navigationOptions: ({navigation}) => ({
                headerLeft: <Icon
                    name='info-circle'
                    type='font-awesome-5'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
        }
    },
    {
        initialRouteName: 'Resources',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#ad9750'
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
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#ad9750'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='home'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const MainNavigator = createDrawerNavigator(
    {
        Home: { 
            screen: HomeNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='home'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Attractions: { 
            screen: AttractionNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='map-marker-alt'
                        type='font-awesome-5'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Restaurants: { 
            screen: RestaurantNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='utensils'
                        type='font-awesome-5'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Events: { 
            screen: EventNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='calendar'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Resources: { 
            screen: ResourcesNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='info-circle'
                        type='font-awesome-5'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        }


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


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: '#ad9750',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        height: 60,
        width: 60
    },
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    }
});

export default Main;
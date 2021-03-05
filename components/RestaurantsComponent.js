import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { RESTAURANTS } from '../shared/restaurants';

class Restaurants extends Component {

    constructor(props) {
        super(props);
        this.state = {
            restaurants: RESTAURANTS
        };
    }

    static navigationOptions = {
        title: 'Restaurants'
    };

    render() {
        const { navigate } = this.props.navigation;
        const renderRestaurantsItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    onPress={() => navigate('HighlightInfo', { highlight: item }  )}
                    leftAvatar={{ source: require('../assets/images/OlympiaTenOval.png')}}
                />
            );
        };

        return (
            <FlatList
                data={this.state.restaurants}
                renderItem={renderRestaurantsItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default Restaurants;
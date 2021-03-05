import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { EVENTS } from '../shared/events';

class Events extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: EVENTS
        };
    }

    static navigationOptions = {
        title: 'Events'
    };

    render() {
        const { navigate } = this.props.navigation;
        const renderEventsItem = ({item}) => {
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
                data={this.state.events}
                renderItem={renderEventsItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default Events;
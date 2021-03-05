import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { ATTRACTIONS } from '../shared/attractions';

class Attractions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            attractions: ATTRACTIONS
        };
    }

    static navigationOptions = {
        title: 'Attractions'
    };

    render() {
        const { navigate } = this.props.navigation;
        const renderAttractionsItem = ({item}) => {
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
                data={this.state.attractions}
                renderItem={renderAttractionsItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default Attractions;
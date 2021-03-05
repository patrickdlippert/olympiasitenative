import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { ATTRACTIONS } from '../shared/attractions';

class Guide extends Component {

    constructor(props) {
        super(props);
        this.state = {
            attractions: ATTRACTIONS
        };
    }

    static navigationOptions = {
        title: 'Guide'
    };

    render() {
        const { navigate } = this.props.navigation;
        const renderGuideItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    onPress={() => navigate('HighlightInfo', { highlightId: item.id })}
                    leftAvatar={{ source: require('./images/react-lake.jpg')}}
                />
            );
        };

        return (
            <FlatList
                data={this.state.attractions}
                renderItem={renderGuideItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default Guide;
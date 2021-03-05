import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { ATTRACTIONS } from '../shared/attractions';

function RenderHighlight({highlight}) {
    if (highlight) {
        return (
            
            <Card 
                featuredTitle={highlight.name}
                image={require( {highlight.image} )}
            >
                <Text style={{margin: 10}}>
                    {highlight.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class HighlightInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            highlights: ATTRACTIONS
        };
    }

    static navigationOptions = {
        title: 'Highlight Information'
    }

    render() {
        const highlightId = this.props.navigation.getParam('highlightId');
        const highlight = this.state.highlights.filter(highlight => highlight.id === highlightId)[0];
        return <RenderHighlight highlight={highlight} />;
    }
}

export default HighlightInfo;
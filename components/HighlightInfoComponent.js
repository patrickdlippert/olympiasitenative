import React, { Component } from 'react';
import { Text, View, Button, Linking } from 'react-native';
import { Card, Rating, Icon } from 'react-native-elements';
import { ATTRACTIONS } from '../shared/attractions';


// This function creates an image gallery link using react-router only if there's a photos oject 
// within the provided highlight object
function CreateImageLink({highlight, navigate}) {
    if(highlight.photos) {
        return (
                <View style={{marginBottom: 10}}>
                <Button 
                    title="More pics"
                    onPress={() => navigate('ImageGallery', { highlight: highlight }  )}
                    color="blue"
                />
                </View>
        );
    }
    return <View />
}

function CreateUrlLink({highlight}) {
    if(highlight.url) {
        return (
            <View style={{
                paddingVertical: 5,
                paddingHorizontal: 10,
                flexDirection: "row",
                alignItems: "center"
            }}>
            <Icon
                name='external-link-alt'
                type='font-awesome-5'
                size={16}
                color='blue'
            />
            <Text style={{marginLeft: 10}} onPress={ ()=>{ Linking.openURL(`${highlight.url}`)}}>{highlight.url}</Text>
            </View>
        )
    }
    return <View />
}

function CreateAddressLink({highlight}) {
    if(highlight.address) {
        return (
            <View style={{
                paddingVertical: 5,
                paddingHorizontal: 10,
                flexDirection: "row",
                alignItems: "center"
            }}>
            <Icon
                name='location-arrow'
                type='font-awesome-5'
                size={16}
                color='blue'
            />
            <Text style={{marginLeft: 10}} onPress={ ()=>{ Linking.openURL(`${highlight.url}`)}}>{highlight.address}</Text>
            </View>
        )
    }
    return <View />
}

function RenderHighlight({highlight, navigate}) {
    if (highlight) {
        
        return (
            <Card 
                featuredTitle={highlight.name}
                image={highlight.image}
                imageStyle={{
                    width: "100%",
                    height: 200,
                   resizeMode: 'cover'
                  }}
            >
                <CreateImageLink highlight={highlight} navigate={navigate} />
                <Rating imageSize={20} readonly startingValue={highlight.rating}  />
                <Text style={{margin: 10}}>
                    {highlight.description}
                </Text>
                <CreateAddressLink highlight={highlight} />
                <CreateUrlLink highlight={highlight} />


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

 //   static navigationOptions = {
 //       title: 'Highlight Information'
 //   }

    static navigationOptions = ({ navigation }) => {
        const hlight = navigation.getParam('highlight');
        return {headerTitle: `${hlight.name}`}
     };

    render() {
        const highlight = this.props.navigation.getParam('highlight');
        return <RenderHighlight highlight={highlight} navigate={this.props.navigation.navigate}/>;
    }
}

export default HighlightInfo;
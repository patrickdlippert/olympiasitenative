import React, { Component } from 'react';
import Gallery from "react-native-image-gallery";
import { Text, View, YellowBox } from 'react-native';



class ImageGallery extends Component {

    static navigationOptions = {
        title: 'Gallery'
    };
    
    render() {
        YellowBox.ignoreWarnings(['Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`']);
        console.log("Inside Image Gallery");
        YellowBox.ignoreWarnings(['Warning: componentWillReceiveProps has been renamed, and is not recommended for use.']);
        YellowBox.ignoreWarnings(['Warning: componentWillMount has been renamed, and is not recommended for use.']);
        console.log("Inside Image Gallery");

        const highlight = this.props.navigation.getParam('highlight');

        console.log(highlight.photos);
        if(highlight.photos) {
            return(
                <Gallery
                    style={{ flex: 1, backgroundColor: 'black' }}
                    images={highlight.photos}
                />
            );
        }
        return( <View /> );
    }
}

export default ImageGallery;
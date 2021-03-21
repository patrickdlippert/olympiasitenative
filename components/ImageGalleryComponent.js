import React, { Component } from 'react';
import MasonryList from "react-native-masonry-list";
import { View, Image, Modal, ScrollView, StyleSheet, YellowBox } from 'react-native';
import { Button } from 'react-native-elements';



class ImageGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            currImage: '',
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleFullImage = this.handleFullImage.bind(this);
    }


    static navigationOptions = {
        title: 'Gallery'
    };


    toggleModal() {
        this.setState({showModal: !this.state.showModal});
        this.handleFullImage = this.handleFullImage.bind(this);
    }


    handleFullImage(item) {
        console.log('Image clicked');
        console.log(item);
        this.setState({currImage: item.source });
        console.log(this.state.currImage);
        this.toggleModal();

    }
    
    render() {

        YellowBox.ignoreWarnings(['VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.']);


        const highlight = this.props.navigation.getParam('highlight');

        console.log(highlight.photos);
        if(highlight.photos) {
            return(
                <ScrollView>
                    <MasonryList
                        
                        images={highlight.photos}
                        onPressImage={(item) => this.handleFullImage(item)}
                    />

                    <Modal 
                        animationType = {"slide"}
                        visible={this.state.showModal} 
                        transparent={false}
                        presentationStyle='overFullScreen'
                        onRequestClose={() => this.toggleModal()}
                    >
                        <View style={styles.container}>

                            {this.state.currImage ? (
                                <Image 
                                    style={{flex:1, width: '100%',  alignSelf: 'center'}}
                                    resizeMode="contain"
                                    source={this.state.currImage} />
                            ) : (
                                <View/>
                            )}

                            <View style={styles.buttonSection}>
                                <Button
                                    buttonStyle={styles.button}
                                    onPress={() => {
                                        this.toggleModal();
                                    }}
                                    title='Close'
                                />
                            </View>
                        </View>
                    </Modal>  
                </ScrollView>
            );
        }
        return( <View /> );
    }
}

       
const styles = StyleSheet.create(
    {
        container:
        {
            flex: 1,
            backgroundColor: '#808080' // Set your own custom Color 
        },
        buttonSection: {
            width: '80%',
            alignSelf: 'center',
            marginBottom: 10
         },
         button: {
            backgroundColor: '#5637DD',
            borderColor: '#60106B',
            borderWidth: 2,
            borderRadius: 5,       
         }
    }
);


export default ImageGallery;
import React, { Component } from 'react';
import { View, Text, ScrollView, Image, ImageBackground, StyleSheet, Modal, Alert } from 'react-native';
import { Card, Button, CheckBox } from 'react-native-elements';
import { PROMOTIONS } from '../shared/promotions';
import { SPONSORS } from '../shared/sponsors';
import CardCarousel from './CardCarouselComponent';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { TextInput } from 'react-native-paper';
import { KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ContestRules from './ContestRulesComponent';

function RenderSplash(props) {
    return (
        <Animatable.View 
        animation='fadeInDown'
        duration={2000}
        delay={500}
        >
            <Card>
                <ImageBackground 
                style={{flex:1, height: '100%', width:'100%', alignSelf: 'center'}}
                resizeMode="cover"
                source={require('../assets/images/olympia-aerial2.jpg')}>
                    <Animatable.Image 
                        animation='tada'
                        duration={4000}
                        delay={1000}
                        style={{flex:1, height: 250,  alignSelf: 'center'}}
                        resizeMode="contain"
                        source={require('../assets/images/LaurelTopTen.png')} />
                    <Animatable.Text 
                        animation='fadeInRight'
                        duration={4000}
                        delay={1000}
                        style={styles.introText}
                        >The absolute best of Olympia!</Animatable.Text>
                </ImageBackground>
                <View style={{marginTop: 5}}>
                    <Button  
                        buttonStyle={styles.buttonSubmit}
                        title="Enter Sweepstakes"  
                        onPress={() => props.onShowModal()}
                        color="#60106B"
                    />
                </View>
            </Card>
        </Animatable.View>
    );
}


function RenderItem({item}) {
    if (item) {
        return (
            <Card
                featuredTitle={item.displayName ? item.name : ''}
                image={item.image}>
                <Text
                style={{margin: 10}}>
                    {item.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            promotions: PROMOTIONS,
            sponsors: SPONSORS,
            firstName: '',
            lastName: '',
            email: '',
            agree: false,
            showModal: false,
            showModalRules: false,
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.toggleModalRules = this.toggleModalRules.bind(this);
        this.handleSweepstakes = this.handleSweepstakes.bind(this);
    }

    static navigationOptions = {
        title: 'Home'
    }

    toggleModal() {
        this.setState({showModal: !this.state.showModal});
    }

    toggleModalRules() {
        this.setState({showModalRules: !this.state.showModalRules});
    }

    resetForm() {
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            agree: false
        });
    }

    handleSweepstakes(event) {
        if (!this.state.agree) {
            Alert.alert(
                'Agree to Rules',
                'Please check "agree" to enter the contest',
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancelled agree alert'),
                        style: 'cancel'
                    },
                    {
                        text: 'OK',
                        onPress: () => console.log('OK selected. Trying again.'),
                    }
                ],
                { cancelable: false }
            );
            return;
        } else if (!this.state.firstName) {
            Alert.alert(
                'First Name Required',
                'Please enter your first name',
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancelled sweepstakes alert'),
                        style: 'cancel'
                    },
                    {
                        text: 'OK',
                        onPress: () => console.log('OK selected. Trying again.'),
                    }
                ],
                { cancelable: false }
            );
            return;

        } else if (!this.state.lastName) {
            Alert.alert(
                'Last Name Required',
                'Please enter your last name',
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancelled sweepstakes alert'),
                        style: 'cancel'
                    },
                    {
                        text: 'OK',
                        onPress: () => console.log('OK selected. Trying again.'),
                    }
                ],
                { cancelable: false }
            );
            return;
            
        } else if (!this.state.email) {
            Alert.alert(
                'Email Required',
                'Please enter an email address',
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancelled sweepstakes alert'),
                        style: 'cancel'
                    },
                    {
                        text: 'OK',
                        onPress: () => console.log('OK selected. Trying again.'),
                    }
                ],
                { cancelable: false }
            );
            return;

        } else {
            Alert.alert(
                "Entry Submitted",
                "Thanks for entering our contest. Good luck!",
                [
                  {
                    text: "OK",
                    onPress: () => this.props.navigation.navigate('Home'),
                    style: 'cancel'
                  },
                ],
                { cancelable: false }
            );
            this.resetForm();
        }
        
        this.toggleModal();

    }


    render() {
        return (
            <ScrollView>
                <View style = { styles.container }>
                    <LinearGradient
                        colors={['#5637DD', '#3046C5', '#60106B']}
                        style={styles.linearGradient}
                        start={{x: 0.7, y:0 }}
                    >
                        <Image 
                            style={{flex:1, height: 150,  alignSelf: 'center'}}
                            resizeMode="contain"
                            source={require('../assets/images/OlympiaTopTen.png')} />
                    </LinearGradient>
                </View>
                <RenderSplash 
                    onShowModal={() => this.toggleModal()}
                />

                <Modal
                    animationType = {"slide"}
                    transparent={false}
                    visible={this.state.showModal}
                    onRequestClose={() => this.toggleModal()}
                >
                    {/* This is a Modal within a Modal for when the user clicks "Official Rules link within
                    the outer Modal. This is a simple ScrollView with the text for the rules. */}
                    <Modal
                        animationType = {"slide"}
                        transparent={false}
                        visible={this.state.showModalRules}
                        onRequestClose={() => this.toggleModalRules()}
                    >
                        <ScrollView style={{marginTop:15}}>
                            <ContestRules/>
                        </ScrollView>
                        
                        <View style={styles.buttonSection}>
                            <Button
                                buttonStyle={styles.buttonSubmit}
                                onPress={() => {
                                    this.toggleModalRules();
                                }}
                                title='Close'
                            />
                        </View>
                    </Modal>

                    <KeyboardAwareScrollView>
                        <View style={{ height:600}}>
                            <RenderItem 
                                item={this.state.promotions.filter(promotion => promotion.featured)[0]} />

                            <View style={styles.formRow}>
                                <TextInput
                                    required
                                    style={{flex: 1, height: 35}}
                                    mode="outlined"
                                    label="First Name"
                                    autoCompleteType="name"
                                    keyboardType="default"
                                    textContentType="givenName"
                                    placeholder="First Name"
                                    onChangeText={value => this.setState({ firstName: value })}
                                    value = {this.state.firstName}
                                />
                            </View>
                            <View style={styles.formRow}>
                                <TextInput
                                    style={{flex: 1, height: 35}}
                                    mode="outlined"
                                    label="Last Name"
                                    autoCompleteType="name"
                                    keyboardType="default"
                                    textContentType="familyName"
                                    placeholder="Last Name"
                                    onChangeText={value => this.setState({ lastName: value })}
                                    value = {this.state.lastName}
                                />
                            </View>
                            <View style={styles.formRow}>
                                <TextInput
                                    style={{flex: 1, height: 35}}
                                    mode="outlined"
                                    label="Email"
                                    autoCompleteType="email"
                                    keyboardType="email-address"
                                    textContentType="emailAddress"
                                    placeholder="Email"
                                    onChangeText={value => this.setState({ email: value })}
                                    value = {this.state.email}
                                />
                            </View>

                            <CheckBox
                              title={ 
                                    <Text>
                                    <Text>Yes, I???m 21 years or older. I have read and agree to the </Text>
                                    <Text
                                        style={{color: '#5637DD' }} 
                                        onPress={() => this.toggleModalRules()}> Official Rules.</Text>
                                    </Text>
                                }

                                center
                                checkedColor='#5637DD'
                                checked={this.state.agree}
                                onPress={() => this.setState({agree: !this.state.agree})}
                                containerStyle={styles.formCheckbox}
                            />

                            <View style={styles.buttonSection}>
                                <Button
                                    buttonStyle={styles.buttonSubmit}
                                    onPress={() => {
                                        this.handleSweepstakes();
                                    }}
                                    title='Submit'
                                />
                            </View>
                            <View style={styles.buttonSection}>
                                <Button
                                    buttonStyle={styles.buttonCancel}
                                    onPress={() => {
                                        this.toggleModal();
                                    }}
                                    title='Close'
                                />
                            </View>
                        </View>
                    </KeyboardAwareScrollView>
                </Modal>


                <CardCarousel resources={this.state.sponsors} />

            </ScrollView>
        )
    }
}


        
const styles = StyleSheet.create(
    {
        container:
        {
            flex: 1,
            //backgroundColor: '#5637DD' // Set your own custom Color
        },
        linearGradient: {
            alignItems: 'center',
            justifyContent: 'center',
        },
        introText: {
            fontWeight: 'bold',
            fontSize: 18,
            color: '#fff',
            textAlign: 'center'
        },
        formRow: {
            flex: 1,
            flexDirection: 'row',
            margin: 10
        },    
        formCheckbox: {
            margin: 8,
            marginTop: 12,
            backgroundColor: null
        },
        buttonSection: {
            width: '80%',
            alignSelf: 'center',
            marginTop: 5,
            marginBottom: 5
         },
         buttonSubmit: {
            backgroundColor: '#5637DD',
            borderColor: '#60106B',
            borderWidth: 1,
            borderRadius: 5
        },
        buttonCancel: {
            backgroundColor: '#808080',
            borderColor: '#60106B',
            borderWidth: 1,
            borderRadius: 5      
        }

    }
);

export default Home;
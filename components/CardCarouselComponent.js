import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import Slick from 'react-native-slick';
import { LinearGradient } from 'expo-linear-gradient';
 
const styles = StyleSheet.create({
  wrapper: {
    height: 275
},
  slide: {
    flex: 1,

  },
  text: {
    margin: 5,
    textAlign: 'center', 
    fontSize: 15,
    fontWeight: 'bold',
  }
});


function ConstructCard({resource}) {
    if( {resource} ) {
        return(
            <View style={{marginBottom:15}}>
            <Card
                featuredTitle={resource.displayName ? resource.name : ''}
                image={resource.image}>
                <Text
                style={styles.text}>
                    {resource.description}
                </Text>
            </Card>
            </View>
        );
    }
    return ( <Text /> );
}


function RenderCards({resources}) {
    const cardslide = resources.map(resource => {
        return (
            <View key={resource.id} style={styles.slide}>
                <LinearGradient
                    colors={['#5637DD', '#3046C5', '#60106B']}
                    style={styles.linearGradient}
                >
                <ConstructCard resource={resource} />
                </LinearGradient>
            </View>
        );
    });

    return (
      <Slick style={styles.wrapper} showsButtons={false} autoplay={true}>
          {cardslide}
      </Slick>
    );
}



function CardCarousel(props) {
    if(props.resources) {
        return(
            <View>
                <RenderCards resources={props.resources} />
            </View>
        );
    }
    return( <Text> This is failing </Text>) ;
}

export default CardCarousel;
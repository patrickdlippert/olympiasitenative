import React, { Component } from 'react';
import { FlatList , View, Linking, StyleSheet } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { RESOURCES } from '../shared/resources';

class Resources extends Component {

    constructor(props) {
        super(props);
        this.state = {
            resources: RESOURCES
        };
    }

    static navigationOptions = {
        title: 'Additional Resources'
    };

    FlatListItemSeparator = () => {
        return (
          <View style={styles.seperator}/>
        );
      }

    render() {
        const { navigate } = this.props.navigation;
        const renderResourcesItem = ({item}) => {
            return (
                <ListItem
                    onPress={ ()=>{ Linking.openURL(`${item.url}`)}}
                    title={item.name}
                    titleStyle={styles.title}
                    subtitle={item.description}
                    subtitleStyle={styles.subtitle}
                    leftAvatar={<Avatar
                        source={item.image} 
                        rounded={false} 
                        style={styles.avatar}/> }
            	/>
            );
        };

        return (
            <FlatList
                data={this.state.resources}
                renderItem={renderResourcesItem}
                keyExtractor={item => item.id.toString()}
                ItemSeparatorComponent = { this.FlatListItemSeparator }
            />
        );
    }
}

const styles = StyleSheet.create({
    avatar: {
        width: 100,
        height: 100
    },
    title: {
        marginLeft: 5,
        fontSize: 18,
        fontWeight: "600",
        color: '#5637DD'
    },
    subtitle: {
        marginLeft: 5,
        fontSize: 14,
        fontWeight: "normal"
    },
    seperator: {
        height: 2,
        width: "100%",
        backgroundColor: "#000",
    }
    
  });


export default Resources;
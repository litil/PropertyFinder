import React, {Component} from 'react';
import {
    View,
    Text,
    Navigator,
    StyleSheet,
    TextInput,
    Button,
    Image
} from 'react-native';

export default class SearchScenes extends Component {
    static get defaultProps() {
        return {title: 'MyScene'};
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.description}>
                    Search for houses to buy!
                </Text>
                <Text style={styles.description}>
                    Search by place-name or postcode.
                </Text>
                <View style={styles.flowRight}>
                    <TextInput style={styles.searchInput} placeholder='Search via name or postcode'/>
                    <Button onPress={() => {}} color='#48BBEC' title='Go'/>
                </View>
                <Image source={require('../../Resources/house.png')} style={styles.image}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    description: {
        marginBottom: 20,
        fontSize: 18,
        textAlign: 'center',
        color: '#656565'
    },
    container: {
        padding: 30,
        marginTop: 65,
        alignItems: 'center'
    },
    flowRight: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch'
    },
    searchInput: {
        height: 36,
        padding: 4,
        marginRight: 5,
        flexGrow: 1,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 8,
        color: '#48BBEC'
    },
    image: {
        width: 217,
        height: 138
    }
});

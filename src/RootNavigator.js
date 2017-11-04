import React from 'react';
import {View, Text} from 'react-native';
import {StackNavigator} from 'react-navigation';
import SearchScenes from './scenes/SearchScenes';
import HomeScene from './scenes/HomeScene';

const RootNavigator = StackNavigator({
    Home: {
        screen: HomeScene,
        navigationOptions: {
            headerTitle: 'Home'
        }
    },
    Search: {
        screen: SearchScenes,
        navigationOptions: {
            headerTitle: 'Search'
        }
    }
});

export default RootNavigator;

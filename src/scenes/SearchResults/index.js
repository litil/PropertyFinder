import React, {Component} from 'react'
import {
    StyleSheet,
    Image,
    View,
    TouchableHighlight,
    FlatList,
    Text
} from 'react-native';
import PropTypes from 'prop-types';

export default class SearchResults extends Component {
    static propTypes = {
        /** Array of properties */
        listings: PropTypes.array.isRequired
    }
    static defaultProps = {}

    _keyExtractor = (item, index) => index;

    _renderItem = ({item}) => {
        return (
            <TouchableHighlight underlayColor='#dddddd'>
                <View>
                    <Text>{item.title}</Text>
                </View>
            </TouchableHighlight>
        );

    };

    render() {
        return <FlatList
            data={this.props.listings}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}/>
    }
}

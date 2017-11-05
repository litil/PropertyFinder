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
        const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec purus vitae sem sagittis mattis. Vestibulum a dolor velit. Maecenas pellentesque sem at consequat ultricies. Fusce congue iaculis leo sit amet dapibus. Integer et varius ipsum. In magna sapien, maximus ac sagittis id, tristique eget eros. Praesent semper vehicula ultricies. Curabitur justo orci, condimentum at ante nec, feugiat venenatis lectus. Donec ac augue libero. Maecenas tincidunt lacus sit amet luctus mattis.'
        return <FlatList
            data={this.props.listings}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}/>
    }
}

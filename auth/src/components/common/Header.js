// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';


// Make a component
const Header = props => {
	const { textStyle, viewStyle } = styles;

	return ( 
		<View style={viewStyle}>
			<Text style={textStyle}>{ props.headerText }</Text>
		</View>
		);
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 80,
        paddingBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
	textStyle: {
		fontSize: 25
	}
};

// make the component available to other parts of the app
export { Header };

// Import a library to use component
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//Create a component
const App = () => ( 
	<View>
		<Header headerText={'Albums'} />
		<AlbumList /> 
	</View>
);

//render the component

AppRegistry.registerComponent('albums', () => App);
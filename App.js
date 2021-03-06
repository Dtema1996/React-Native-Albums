// Import a library to help create a component
import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
export const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText='Albums' />
    <AlbumList />
  </View>
);

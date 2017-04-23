import React from 'react';
import { StyleSheet } from 'react-native';

import { Image } from 'react-native';

export const Images = ({imageId, contentStyles=styles}) => {
  switch (imageId) {
      case 0:
        return <Image source={require(`../mocks/images/image0.jpg`)} style={contentStyles.image} resizeMode='contain' />;
      case 1:
        return <Image source={require(`../mocks/images/image1.jpg`)} style={contentStyles.image} resizeMode='contain' />;
      case 2:
        return <Image source={require(`../mocks/images/image2.jpg`)} style={contentStyles.image} resizeMode='contain' />;
      case 3:
        return <Image source={require(`../mocks/images/image3.jpg`)} style={contentStyles.image} resizeMode='contain' />;
      case 4:
        return <Image source={require(`../mocks/images/image4.jpg`)} style={contentStyles.image} resizeMode='contain' />;
      case 5:
        return <Image source={require(`../mocks/images/image5.jpg`)} style={contentStyles.image} resizeMode='contain' />;
      case 6:
        return <Image source={require(`../mocks/images/image6.jpg`)} style={contentStyles.image} resizeMode='contain' />;
      case 7:
        return <Image source={require(`../mocks/images/image7.jpg`)} style={contentStyles.image} resizeMode='contain' />;
      case 8:
        return <Image source={require(`../mocks/images/image8.jpg`)} style={contentStyles.image} resizeMode='contain' />;
      case 9:
        return <Image source={require(`../mocks/images/image9.jpg`)} style={contentStyles.image} resizeMode='contain' />;
      default:
        return <Image source={require(`../mocks/images/image0.jpg`)} style={contentStyles.image} resizeMode='contain' />;
  }
}

const styles = StyleSheet.create({
  image: {
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
    width: 60,
    height: 60,
    borderRadius: 30
  },
});

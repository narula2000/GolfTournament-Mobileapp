import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';

const Logo = () => (
  <Image source={require('../assets/golf-logo.png')} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    height: 200,
    marginBottom: 12,
    width: 200,
  },
});

export default memo(Logo);

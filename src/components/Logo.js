import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    height: 200,
    marginBottom: 12,
    width: 200,
  },
});

const Logo = () => (
  // eslint-disable-next-line global-require
  <Image source={require('../assets/golf-logo.png')} style={styles.image} />
);

export default memo(Logo);

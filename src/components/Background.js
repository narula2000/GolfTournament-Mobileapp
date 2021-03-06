import { StyleSheet } from 'react-native';
import theme from '../core/theme';

const styles = StyleSheet.create({
  background: {
    backgroundColor: theme.colors.background,
    flex: 1,
    width: '100%',
  },
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'center',
    maxWidth: 340,
    padding: 20,
    width: '100%',
  },
});

export default styles;
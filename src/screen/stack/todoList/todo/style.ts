import {StyleSheet} from 'react-native';
import {SIZES} from 'src/theme';

const styles = StyleSheet.create({
  vContainer: {
    flex: 1,
  },
  toHiddenContainer: {
    justifyContent: 'center',
    height: SIZES.countPixelRatio(54),
    width: SIZES.countPixelRatio(54),
    alignSelf: 'flex-end',
    borderRadius: SIZES.countPixelRatio(10),
    alignItems: 'center',
  },
  iDelete: {
    height: SIZES.countPixelRatio(20),
    width: SIZES.countPixelRatio(20),
    resizeMode: 'contain',
  },
});
export default styles;

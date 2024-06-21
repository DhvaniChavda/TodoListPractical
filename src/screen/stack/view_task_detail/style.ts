import {StatusBar, StyleSheet} from 'react-native';
import {COLOR, FONTS, SIZES} from 'src/theme';

const styles = StyleSheet.create({
  SaContainer: {
    flex: 1,
    backgroundColor: COLOR.whiteFourteen,
  },
  vContainer: {
    flex: 1,
    marginHorizontal: SIZES.smartWidthScale(20),
    backgroundColor: COLOR.whiteFourteen,
    marginTop: SIZES.countPixelRatio(20),
  },
  tLable: {
    fontSize: SIZES.countPixelRatio(14),
    fontFamily: FONTS.REGULAR,
    color: COLOR.black,
    marginBottom: SIZES.countPixelRatio(5),
  },
});
export default styles;

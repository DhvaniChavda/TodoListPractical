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
  },
  tTitle: {
    fontSize: SIZES.countPixelRatio(20),
    fontFamily: FONTS.SEMI_BOLD,
    color: COLOR.black,
  },
  vHeader: {
    backgroundColor: COLOR.white,
    borderRadius: SIZES.countPixelRatio(10),
    flexDirection: 'row',
    padding: SIZES.smartScale(5),
    marginTop: SIZES.smartScale(10),
    marginBottom: SIZES.smartScale(15),
  },
  toActiveHeader: {
    backgroundColor: COLOR.theme,
    borderRadius: SIZES.countPixelRatio(6),
    flex: 1,
    paddingVertical: SIZES.countPixelRatio(10),
  },
  toInactiveHeader: {
    flex: 1,
    paddingVertical: SIZES.countPixelRatio(10),
  },
  tActiveHeader: {
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: SIZES.countPixelRatio(16),
    color: COLOR.white,
    textAlign: 'center',
  },
  tInactiveHeader: {
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: SIZES.countPixelRatio(16),
    color: COLOR.black,
    opacity: 0.6,

    textAlign: 'center',
  },
});
export default styles;

import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {APP_IMAGES} from 'src/assets/images';
import {COLOR, FONTS, SIZES} from 'src/theme';

interface IBackToolbarProps {
  title: string;
  viewCustomStyle?: object;
  onBackPress: () => void;
  isRightIcon?: boolean;
  rightIcon?: object;
  onRightIconPress?: () => void;
}
export default ({
  title,
  viewCustomStyle,
  onBackPress,
  isRightIcon,
  rightIcon,
  onRightIconPress,
}: IBackToolbarProps) => {
  return (
    <View style={[styles.vMainContainer, viewCustomStyle]}>
      <TouchableOpacity
        style={styles.toBack}
        activeOpacity={0.8}
        onPress={onBackPress}>
        <Image source={APP_IMAGES.ic_back} style={styles.iBack} />
      </TouchableOpacity>

      <Text style={styles.tTitle}>{title}</Text>

      {isRightIcon && (
        <TouchableOpacity style={styles.toBack} onPress={onRightIconPress}>
          <Image source={rightIcon} style={styles.iBack} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  vMainContainer: {
    paddingHorizontal: SIZES.countPixelRatio(20),
    backgroundColor: COLOR.whiteFourteen,
    flexDirection: 'row',
    height: SIZES.countPixelRatio(50),
    borderBottomLeftRadius: SIZES.countPixelRatio(20),
    borderBottomRightRadius: SIZES.countPixelRatio(20),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  toBack: {
    height: SIZES.countPixelRatio(35),
    width: SIZES.countPixelRatio(35),
    alignItems: 'center',
    justifyContent: 'center',
  },
  iBack: {
    height: SIZES.countPixelRatio(28),
    width: SIZES.countPixelRatio(28),
    resizeMode: 'contain',
  },
  tTitle: {
    fontSize: SIZES.countPixelRatio(18),
    fontFamily: FONTS.SEMI_BOLD,
    color: COLOR.black,
    flex: 1,
    textAlign: 'center',
    left: SIZES.countPixelRatio(-10),
    // backgroundColor: 'red',
  },
  iRightIcon: {
    height: SIZES.countPixelRatio(22),
    width: SIZES.countPixelRatio(22),
    resizeMode: 'contain',
  },
});

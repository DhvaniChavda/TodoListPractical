import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLOR, FONTS, SIZES} from 'src/theme';

interface IThemeButtonProps {
  title: string;
  customStyle?: object;
  titleStyle?: object;
  onPress?: () => void;
}
export default ({
  title,
  customStyle,
  onPress,
  titleStyle,
}: IThemeButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.toButton, customStyle]}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text style={[styles.tTitle, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  toButton: {
    backgroundColor: COLOR.theme,
    borderRadius: SIZES.countPixelRatio(8),
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SIZES.countPixelRatio(15),
  },
  tTitle: {
    fontSize: SIZES.countPixelRatio(18),
    color: COLOR.white,
    fontFamily: FONTS.SEMI_BOLD,
  },
});

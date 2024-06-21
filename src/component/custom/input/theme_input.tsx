import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {COLOR, FONTS, SIZES} from 'src/theme';

interface IInputProps {
  placeholder?: string;
  value: string;
  onChangeText: (text: string, type?: any) => void;
  onPress?: any;
  type?: number;
  onSubmitEditing?: any;
  keyboardType?: any;
  returnKeyType?: any;
  blurOnSubmit?: boolean;
  customStyle?: object;
  autoCapitalize?: any;
  editable?: boolean;
  autoFocus?: boolean;
  maxLength?: number;
  isSecure?: boolean;
  viewCustomStyle?: object;
  onFocus?: () => void;
}
export default React.forwardRef(
  (
    {
      placeholder,
      value,
      onChangeText,
      type,
      onSubmitEditing,
      keyboardType,
      returnKeyType,
      blurOnSubmit,
      customStyle,
      autoCapitalize,
      editable,
      autoFocus,
      maxLength,
      viewCustomStyle,
      isSecure,
      onFocus,
    }: IInputProps,
    ref: any,
  ) => {
    return (
      <View style={[styles.vContactNumber, viewCustomStyle]}>
        <TextInput
          style={[styles.tInput, customStyle]}
          numberOfLines={1}
          editable={editable}
          returnKeyType={returnKeyType}
          keyboardType={keyboardType}
          placeholder={placeholder}
          placeholderTextColor={COLOR.black_op}
          value={value}
          onChangeText={(value: string) => {
            onChangeText(value, type);
          }}
          secureTextEntry={isSecure}
          ref={ref}
          onSubmitEditing={() => onSubmitEditing()}
          blurOnSubmit={blurOnSubmit}
          autoFocus={autoFocus ? autoFocus : false}
          spellCheck={false}
          autoCorrect={false}
          autoCapitalize={autoCapitalize}
          maxLength={maxLength}
          onPressIn={onFocus}
        />
      </View>
    );
  },
);

const styles = StyleSheet.create({
  vContactNumber: {
    borderRadius: SIZES.countPixelRatio(6),
    backgroundColor: COLOR.white,
    borderColor: COLOR.black_op,
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: SIZES.countPixelRatio(1),
    marginBottom: SIZES.countPixelRatio(15),
  },
  iIcon: {
    height: SIZES.countPixelRatio(20),
    width: SIZES.countPixelRatio(20),
    resizeMode: 'contain',
    opacity: 0.5,
    paddingHorizontal: SIZES.smartWidthScale(20),
  },
  iLeftIcon: {
    height: SIZES.countPixelRatio(20),
    width: SIZES.countPixelRatio(20),
    resizeMode: 'contain',
    opacity: 0.5,
    marginLeft: SIZES.smartWidthScale(10),
  },
  tInput: {
    paddingVertical: SIZES.countPixelRatio(13),
    fontSize: SIZES.countPixelRatio(14),
    fontFamily: FONTS.REGULAR,
    alignSelf: 'center',
    includeFontPadding: false,
    flex: 1,
    color: COLOR.black,
    marginHorizontal: SIZES.countPixelRatio(10),
  },
});

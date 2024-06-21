import React from 'react';
import {View, StyleSheet, TextInput, Platform} from 'react-native';
import {COLOR, FONTS, SIZES} from 'src/theme';

interface IInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string, type?: any) => void;
  type?: number;
  keyboardType?: any;
  returnKeyType: any;
  blurOnSubmit: boolean;
  autoFocus?: boolean;
  customStyle?: object;
  customViewStyle?: object;
  editable?: boolean;
}
export default React.forwardRef(
  (
    {
      placeholder,
      value,
      onChangeText,
      type,
      keyboardType,
      returnKeyType,
      blurOnSubmit,
      customStyle,
      customViewStyle,
      autoFocus,
      editable,
    }: IInputProps,
    ref: any,
  ) => {
    return (
      <View style={[styles.vContainer, customViewStyle]}>
        <TextInput
          style={[styles.tInput, customStyle]}
          returnKeyType={returnKeyType}
          keyboardType={keyboardType}
          placeholder={placeholder}
          placeholderTextColor={COLOR.black_op}
          value={value}
          onChangeText={(value: string) => {
            onChangeText(value, type);
          }}
          ref={ref}
          blurOnSubmit={blurOnSubmit}
          autoFocus={autoFocus ? autoFocus : false}
          spellCheck={false}
          autoCorrect={false}
          multiline={true}
          editable={editable}
        />
      </View>
    );
  },
);

const styles = StyleSheet.create({
  vContainer: {
    borderRadius: SIZES.countPixelRatio(6),
    backgroundColor: COLOR.white,
    borderColor: COLOR.black_op,
    borderWidth: SIZES.countPixelRatio(1),
  },
  tInput: {
    paddingVertical: SIZES.countPixelRatio(18),
    fontSize: SIZES.countPixelRatio(16),
    fontFamily: FONTS.REGULAR,
    color: COLOR.black,
    marginHorizontal: SIZES.smartWidthScale(10),
    minHeight: SIZES.smartScale(220),
    textAlignVertical: 'top',
    marginTop: Platform.OS == 'ios' ? SIZES.countPixelRatio(20) : 0,
    lineHeight: SIZES.countPixelRatio(20),
    maxHeight: SIZES.smartScale(100),
    opacity: 0.8,
  },
});

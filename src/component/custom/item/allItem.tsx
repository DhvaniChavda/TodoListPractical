import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {APP_IMAGES} from 'src/assets/images';
import {COLOR, FONTS, SIZES} from 'src/theme';

interface IAllProps {
  item: any;
  index: number;
  onTaskClick: (arg: number) => void;
  onTaskCheckChanged: (index: number) => void;
  onTaskDeleteButtonClick: (index: number) => void;
}
export default ({
  item,
  index,
  onTaskClick,
  onTaskCheckChanged,
  onTaskDeleteButtonClick,
}: IAllProps) => {
  if (!item.isDone) {
    return (
      <View style={[styles.vMainContainer]}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.toImageText}
          onPress={() => onTaskCheckChanged(index)}>
          <Image source={APP_IMAGES.ic_square} style={styles.iCheck} />
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => onTaskClick(index)}
            activeOpacity={0.6}>
            <Text style={styles.tTitle}>{item.title}</Text>
            <Text style={styles.tDesc} numberOfLines={2}>
              {item.desc}
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => onTaskDeleteButtonClick(index)}
          activeOpacity={0.6}>
          <Image source={APP_IMAGES.ic_red_delete} style={styles.iCheck} />
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={[styles.vMainContainer]}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.toImageText}
          onPress={() => onTaskCheckChanged(index)}>
          <Image source={APP_IMAGES.ic_check_square} style={styles.iCheck} />
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => onTaskClick(index)}
            activeOpacity={0.6}>
            <Text style={styles.tTitle}>{item.title}</Text>
            <Text style={styles.tDesc} numberOfLines={2}>
              {item.desc}
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => onTaskDeleteButtonClick(index)}
          style={{
            paddingVertical: SIZES.countPixelRatio(10),
          }}>
          <Image source={APP_IMAGES.ic_red_delete} style={styles.iCheck} />
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  vMainContainer: {
    backgroundColor: COLOR.white,
    borderRadius: SIZES.countPixelRatio(6),
    marginBottom: SIZES.smartScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: SIZES.countPixelRatio(20),
  },
  iCheck: {
    height: SIZES.countPixelRatio(24),
    width: SIZES.countPixelRatio(24),
    resizeMode: 'contain',
    marginHorizontal: SIZES.countPixelRatio(20),
  },
  toImageText: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  tTitle: {
    fontSize: SIZES.countPixelRatio(20),
    color: COLOR.black,
    fontFamily: FONTS.SEMI_BOLD,
  },
  tDesc: {
    fontSize: SIZES.countPixelRatio(14),
    color: COLOR.black,
    fontFamily: FONTS.REGULAR,
  },
});

import {StyleSheet} from 'react-native';
import colors from './Colors';
const styles = StyleSheet.create({
  fontRegular: {
    fontFamily: 'roboto_regular',
  },
  fontMedium: {
    fontFamily: 'roboto_medium',
  },
  textMedium: {
    fontFamily: 'roboto_medium',
    fontSize: 16,
    color: colors.black,
  },
  textMediumVariant: {
    fontFamily: 'roboto_medium',
    fontSize: 12,
    color: colors.black,
  },
  textRegular: {
    fontFamily: 'roboto_regular',
    fontSize: 16,
    color: colors.black,
  },
  textRegularVariant: {
    fontFamily: 'roboto_regular',
    fontSize: 12,
    color: colors.black,
  },
});
export default styles;

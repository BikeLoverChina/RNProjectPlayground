/**
 * Description :
 *
 * Author : cookiej
 * Date   : 2017/12/21
 * Time   : 09:21
 */
import { Dimensions, DeviceInfo } from 'react-native';

export default {
  screenW: Dimensions.get('window').width,
  screenH: Dimensions.get('window').height,
  isIPhoneX: DeviceInfo.isIPhoneX_deprecated,
};
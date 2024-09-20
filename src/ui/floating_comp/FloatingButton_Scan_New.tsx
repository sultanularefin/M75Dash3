import React from 'react';
import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export interface FloatingButton_Scan_New_Props {
  isKeyboardVisibleStateBoolean: boolean;

  deviceHeightFB: number;
  // add_new_button_pressed: () => void;
  navigation: any;

  comp_width: number;
  comp_Height: number;
}

const FloatingButton_Scan_New: React.FC<FloatingButton_Scan_New_Props> = ({
  isKeyboardVisibleStateBoolean,
  deviceHeightFB,
  navigation,
  comp_width,
  comp_Height,
}) => {
  return (
    <View
      style={{
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bottom:
          Platform.OS === 'ios' && isKeyboardVisibleStateBoolean
            ? (deviceHeightFB / 14) * 8.3
            : (deviceHeightFB / 14) * 4,
        right: 10,
        width: comp_width,
        height: comp_Height,
        // backgroundColor: 'gold',
        // borderRadius: 30,
        borderWidth: 0.5,
        borderColor: 'tomato',
        zIndex: 1,
      }}>
      <Pressable
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'lightsteelblue' : 'transparent',
            // borderRadius: 30, // 45/2,
            width: comp_width,
            height: comp_Height,
            zIndex: 2,
          },
        ]}
        onPress={() => {
          return navigation.navigate('Logger_Scan_Page');
        }}>
        <MaterialCommunityIcons
          size={60}
          style={{
            color: isKeyboardVisibleStateBoolean ? 'white' : 'cyan',
            textAlign: 'left',
            alignSelf: 'center',
          }}
          name={'barcode-scan'}
        />
        <Text style={FloatingButton_Scan_New_styles.text_Style}>Scan</Text>
      </Pressable>
    </View>
  );
};

export default FloatingButton_Scan_New;

const FloatingButton_Scan_New_styles = StyleSheet.create({
  text_Style: {
    textAlign: 'center',
    color: 'dodgerblue',
    // paddingTop: 20,
    fontWeight: 'light',
    fontSize: 18,
  },
});

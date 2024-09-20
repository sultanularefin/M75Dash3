// const FloatingButton
import React from 'react';
import {Platform, Pressable, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export interface Props {
  // showFloatingButtonBoolean: boolean;
  isKeyboardVisibleStateBoolean: boolean;

  deviceHeightFB: number;
  // add_new_button_pressed: () => void;
  navigation: any;
}

const FloatingButton: React.FC<Props> = ({
  // showFloatingButtonBoolean,
  isKeyboardVisibleStateBoolean,
  deviceHeightFB,
  // add_new_button_pressed,
  navigation,
}) => {

    return (
        <View

        style={{
          position: 'absolute',
          display: "flex",
          alignItems: 'center',
          justifyContent: 'center',
          bottom:
              Platform.OS === 'ios' && isKeyboardVisibleStateBoolean
                  ? (deviceHeightFB / 14) * 8.3
                  : (deviceHeightFB / 14) * 4,
          right: 10,
          width: 60,
          height: 60,
          backgroundColor: 'gold',
          borderRadius: 30,
          zIndex: 1,
        }}
        >

          <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'lightsteelblue' : 'dodgerblue',
                  borderRadius: 30, // 45/2,
                  width: 60,
                  height: 60,
                  zIndex: 2,

                },
              ]}



              onPress={() => {

                return navigation.navigate("Logger_Create_Note");

              }}
          >
            <MaterialIcons
                size={60}
                style={{
                  color: isKeyboardVisibleStateBoolean ? 'white' : 'cyan',
                  textAlign: 'left',
                  alignSelf: 'center',
                }}
                name={'add'}
            />
          </Pressable>

        </View>

    );

};

export default FloatingButton;

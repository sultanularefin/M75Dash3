import React from 'react';

import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {useAppDispatch, useAppSelector} from '../../appStore/app/hooks.ts';
// import {save_new_note_to_store_1} from "../../appStore/features/auth/todo_Slice.ts";
import {Code} from 'react-native-vision-camera/src/types/CodeScanner.ts';
import {current_Item_When_Scan_Succeeded} from '../../appStore/features/scan/scan_Slice.ts';
import Ionicons from 'react-native-vector-icons/Ionicons';

export interface Label_Scan_Page_Props {
  comp_Height: number;
  comp_width: number;
}

const Label_Scan_Page: React.FC<Label_Scan_Page_Props> = ({
  comp_Height,
  comp_width,
}) => {
  //post button repositioned on june__10_2022 begins here
  const dispatch = useAppDispatch();

  const current_Item_Detail: Code[] = useAppSelector(
    current_Item_When_Scan_Succeeded,
  );

  return (
    <View
      style={{
        zIndex: 1,
        height: comp_Height,
        width: comp_width - 20,
        marginTop: 5,
        // alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'transparent',
        flexDirection: 'row',
      }}>
      <View
        style={{
          height: comp_Height - 5,
          width: comp_width - (60 + 20),
          backgroundColor: 'transparent',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          alignSelf: 'center',
        }}>
        {current_Item_Detail?.length > 0 ? (
          <Text style={{
              ...Label_Scan_Page_Styles.loginText,
              letterSpacing: 1,
          }}
          >
            Type:{current_Item_Detail[0]?.type}, Value:
            {current_Item_Detail[0].value}
          </Text>
        ) : (
          <Text style={Label_Scan_Page_Styles.loginText}>
            Detail Will be visible here...
          </Text>
        )}
      </View>

        {current_Item_Detail?.length > 0 ? (

            <Pressable
                style={({pressed}) => [
                    {
                        zIndex: 2,
                        backgroundColor: pressed ? 'lightsteelblue' : 'transparent',
                        height: 60,
                        width: 60,
                    },
                ]}
                onPress={() => {
                    console.log('pressed');
                    // dispatch(save_new_note_to_store_1(true));
                }}>
                {({pressed}) => (
                    <Ionicons
                        size={40}
                        style={{
                            color: 'cyan',
                            textAlign: 'left',
                            alignSelf: 'center',
                        }}
                        name={'remove-sharp'}
                    />
                )}
            </Pressable>
            ):(
            <View style={{

                // zIndex: 2,
                backgroundColor: 'transparent',
                height: 60,
                width: 60,
            }}
            ></View>
        )
        }
    </View>
  );
};

// post button reposition on june 10 2022 ends here

export default Label_Scan_Page;

const Label_Scan_Page_Styles = StyleSheet.create({
  loginText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 1.2,
  },
});

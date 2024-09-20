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
// import {TextBox__Home_Primary_Props} from '../inputs/Content_New_To_Do.tsx';
import {useAppDispatch} from '../../appStore/app/hooks.ts';
import {save_new_note_to_store_1} from "../../appStore/features/auth/todo_Slice.ts";
// import {update_loggers_notes_with_new_content} from "../../appStore/features/auth/todo_Slice.ts";

export interface Logger_Create_Note_Button_Props {
  comp_Height: number;
  post_Button_HTTP_Running_State_2: boolean;
  comp_width: number;
  navigation: any;
}

const Logger_Create_Note_Button: React.FC<Logger_Create_Note_Button_Props> = ({
  comp_Height,
  post_Button_HTTP_Running_State_2,
  comp_width,
  navigation,
}) => {
  //post button repositioned on june__10_2022 begins here

  const dispatch = useAppDispatch();

  return (
    <View
      style={{
        zIndex: 1,
        height: comp_Height,
        width: comp_width,
        // backgroundColor: 'teal',
      }}>
      <Pressable
        style={({pressed}) => [
          {
            zIndex: 2,
            backgroundColor: pressed ? 'lightsteelblue' : 'dodgerblue',
            flexDirection: 'row',
            flex: 1,
            marginHorizontal: 10,

            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            height: comp_Height,
            width: comp_width - 20,
          },
        ]}
        onPress={() => {
          dispatch(save_new_note_to_store_1(true));
          return navigation.goBack();
        }}>
        <Text style={Logger_Create_Note_Button_Styles.loginText}>
          Create Note
        </Text>
      </Pressable>
    </View>
  );
};

// post button reposition on june 10 2022 ends here

export default Logger_Create_Note_Button;

const Logger_Create_Note_Button_Styles = StyleSheet.create({
  loginText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

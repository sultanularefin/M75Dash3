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
import {
  editing_to_do_item,
  update_edited_notes_to_store_1,
} from "../../appStore/features/auth/todo_Slice.ts";
import {TodoItem} from "../../interfaces/todo/todo_interfaces.ts";

export interface Logger_Edit_Note_Button_Props {
  comp_Height: number;
  post_Button_HTTP_Running_State_2: boolean;
  comp_width: number;
  navigation: any;
}

const Logger_Edit_Note_Button: React.FC<Logger_Edit_Note_Button_Props> = ({
  comp_Height,
  post_Button_HTTP_Running_State_2,
  comp_width,
  navigation,
}) => {

  const dispatch = useAppDispatch();
  const editing_to_do_item_details: TodoItem = useAppSelector(editing_to_do_item);



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

          dispatch(update_edited_notes_to_store_1(editing_to_do_item_details.id));

          return setTimeout(() => {
            // resolve("foo");
            navigation.goBack();
          }, 600);

          // return navigation.goBack();
        }}>
        <Text style={Logger_Edit_Note_Button_Styles.loginText}>
          Edit Note
        </Text>
      </Pressable>
    </View>
  );
};

// post button reposition on june 10 2022 ends here

export default Logger_Edit_Note_Button;

const Logger_Edit_Note_Button_Styles = StyleSheet.create({
  loginText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

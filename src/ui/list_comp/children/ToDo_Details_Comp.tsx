import React from 'react';

import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {unwrapResult} from '@reduxjs/toolkit';
import Snackbar from 'react-native-snackbar';

import {useAppDispatch} from '../../../appStore/app/hooks';
import hairlineWidth = StyleSheet.hairlineWidth;
import {read_one_todo_payload_interface} from '../../../interfaces/todo/todo_interfaces.ts';
import {read_one_todo_by_id, update_edit_page_with_indexed_note} from '../../../appStore/features/auth/todo_Slice.ts';
import moment from 'moment';

export interface ToDo_Details_Comp_Props {
  navigation: any;
  todo_id: number;
  todo_edit_date: string; ///Date,
  // logger_ID: number,// changed on may__26
  primary_Index: number;
  // update__UI_Master_Loading_State_TODOs_Page: (value: boolean) => void;
  compWidth: number;

  // route: any,
}

const ToDo_Details_Comp: React.FC<ToDo_Details_Comp_Props> = ({
  navigation,
  todo_id,
  todo_edit_date,
  // logger_ID,
  primary_Index,
  // update__UI_Master_Loading_State_TODOs_Page,
  compWidth,
  // route
}) => {
  const button_Width = compWidth / 6;

  const dispatch = useAppDispatch();

  const read_one_TODO_Button_Pressed = async () => {
    // update__UI_Master_Loading_State_TODOs_Page(true);

    const read_one_TODO_PayLoad: read_one_todo_payload_interface = {
      // logger_ID: logger_ID,
      todo_id: todo_id,
      index: primary_Index,
    };

    // console.log("read_one_TODO_PayLoad: ",read_one_TODO_PayLoad);

    try {
      const response = dispatch(read_one_todo_by_id(read_one_TODO_PayLoad));

      // update__UI_Master_Loading_State_TODOs_Page(false);

      Snackbar.show({
        text: `TODO Removed Successfully.`,
        duration: Snackbar.LENGTH_INDEFINITE,
        numberOfLines: 3,
        action: {
          text: 'close',
          textColor: 'greenyellow', // greenyellow
          onPress: () => {
            Snackbar.dismiss();
          },
        },
      });
    } catch (FEXD__33: any) {
      // update__UI_Master_Loading_State_TODOs_Page(false);
      Snackbar.show({
        text: `TODO Remove Unsuccessful .Please Try Again.`,
        duration: Snackbar.LENGTH_INDEFINITE,
        numberOfLines: 3,
        action: {
          text: 'close',
          textColor: 'greenyellow', // greenyellow
          onPress: () => {
            Snackbar.dismiss();
          },
        },
      });
      console.log('0000___: ', FEXD__33);
    }
  };

  const details_Button_Pressed = async () => {
    dispatch(update_edit_page_with_indexed_note(primary_Index));

    return navigation.navigate('Logger_Edit_Note', {
      index: primary_Index,
    });
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor: 'tomato',
        // alignItems: 'center',
        // alignSelf: 'center',
        width: '100%',
        flex: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          flex: 5,

          borderBottomColor: 'grey',
          borderTopColor: '#f2f2f2',
          borderLeftColor: '#f2f2f2',
          borderRightColor: '#f2f2f2',
          borderWidth: hairlineWidth,
        }}>
        <Text style={{color: 'blue'}}>{todo_edit_date}</Text>
      </View>
      <View
        style={{
          flex: 5,

          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/*details button begins here*/}
          <Pressable
            // TODO_Count_Response_And_Logger_ID

            style={({pressed}) => [
              {
                backgroundColor: pressed ? 'lightslategrey' : 'black',
                width: button_Width,
                marginRight: 2,
              },
              styles.button_Styles,
            ]}
            onPress={details_Button_Pressed}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                color: 'white',
                // textAlign: 'right',
              }}>
              Details
            </Text>
          </Pressable>

          {/*details buttons ends here*/}

          {/*Read button begins here*/}
          <Pressable
            // TODO_Count_Response_And_Logger_ID

            style={({pressed}) => [
              {
                backgroundColor: pressed ? 'lightslategrey' : 'black',
                width: button_Width,
                marginLeft: 2,
              },
              styles.button_Styles,
            ]}
            onPress={read_one_TODO_Button_Pressed}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                color: 'white',
                // textAlign: 'right',
              }}>
              Remove
            </Text>
          </Pressable>
          {/*read button ends here*/}
        </View>
      </View>
    </View>
  );
};

export default ToDo_Details_Comp;

const styles = StyleSheet.create({
  button_Styles: {
    height: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    borderRadius: 10,
    // margin:1,
    marginVertical: 2,
    // marginRight: 10,
  },
});

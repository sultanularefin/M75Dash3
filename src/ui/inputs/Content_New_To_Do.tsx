import React, {useRef} from 'react';

import {
  Alert,
  I18nManager,
  Image,
  Keyboard,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputChangeEventData,
  TextInputContentSizeChangeEventData,
  TextInputSelectionChangeEventData,
  // TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../appStore/app/hooks.ts';
import {TodoItem} from '../../interfaces/todo/todo_interfaces.ts';
import {new_todo} from '../../appStore/features/auth/todo_Slice.ts';

export interface Content_New_To_Do_Props {
  t_Height: number;
  logger_Name: string;
  t_Width: number;

  onChange_Note_Content: (new_String: string) => void;

  TextInput_feed_contentRef__2: React.RefObject<TextInput>;
  // onSelectionChange_test_2:(nativeEvent: NativeSyntheticEvent<TextInputSelectionChangeEventData>)=>void,
  android_KeyBoard_Focused__onPressIn__testing_2: (nativeEvent: any) => void;

  on_Editing_End_Pressed: () => void;
}

const Content_New_To_Do: React.FC<Content_New_To_Do_Props> = ({
  t_Height,
  logger_Name,
  t_Width,
  onChange_Note_Content,
  TextInput_feed_contentRef__2,
  // onSelectionChange_test_2,
  android_KeyBoard_Focused__onPressIn__testing_2,
  on_Editing_End_Pressed,
}) => {
  const new_todo_Item_details: TodoItem = useAppSelector(new_todo);

  const dispatch = useAppDispatch();

  return (
    <View
      style={{
        flexDirection: 'column',

        height: t_Height / 7,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          // width: t_Width,
          width: '90%',
          borderRadius: t_Height / 8,
          backgroundColor: '#FFFFFF',
          borderTopColor: '#e5e6e9',
          borderLeftColor: '#dfe0e4',
          borderRightColor: '#dfe0e4',
          borderBottomColor: '#d0d1d5',
          alignItems: 'center',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 2,
        }}>
        <View
          style={{
            width: t_Width - 60,
            height: t_Height / 8,
          }}>
          <TextInput
            style={{
              height: t_Height / 8,
              borderRadius: t_Height / 8,
              paddingStart: 30,
              textAlign: 'left',
              color: 'black',
            }}
            underlineColorAndroid="transparent"
            placeholder={`To-Do Content`}
            placeholderTextColor={'black'}
            numberOfLines={5}
            textAlignVertical="center"
            blurOnSubmit={true}

            maxLength={250}
            ref={TextInput_feed_contentRef__2}

            returnKeyType={'done'}

            onSubmitEditing={on_Editing_End_Pressed}
            autoCapitalize="none"
            keyboardType="default"
            onChangeText={(thoughts__String: string) =>
              onChange_Note_Content(thoughts__String)
            }


            onPressIn={android_KeyBoard_Focused__onPressIn__testing_2}
            value={
              new_todo_Item_details?.content
                ? new_todo_Item_details.content
                : ''
            }
            multiline={true}
          />
        </View>

        <Text
          style={{
            textAlign: 'center',
            color: 'gray',
            fontSize: 12,
            fontWeight: 'bold',
            backgroundColor: 'white',
            marginRight: 5,
          }}>
          {' '}
          {new_todo_Item_details?.content?.length}/250{' '}
        </Text>
      </View>
    </View>
  );
};

export default Content_New_To_Do;

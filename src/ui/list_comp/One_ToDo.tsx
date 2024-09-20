import React, {useRef} from 'react';

import {
  Alert,
  Animated,
  I18nManager,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import hairlineWidth = StyleSheet.hairlineWidth;

import {TodoItem} from '../../interfaces/todo/todo_interfaces.ts';
import ToDo_Details_Comp from './children/ToDo_Details_Comp.tsx';

export interface One_Todo_Props {
  One_Todo_Data: TodoItem;
  index: number;
  comp_Height: number;
  t_width: number;
  navigation: any;
}

const One_ToDo: React.FC<One_Todo_Props> = ({
  One_Todo_Data,
  index,
  comp_Height,
  t_width,
  navigation,
}) => {
  // console.log('One_Todo_Data: ', One_Todo_Data);
  const indexPrimary = index;

  const first_part_height= comp_Height/3;

  return (
    <View
      style={{
        marginTop: 10,
        height: comp_Height,
        // backgroundColor: 'tomato',
        backgroundColor: '#f2f2f2',

        shadowColor: '#00000021',

        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,

        // backgroundColor: '#fff',

        paddingRight: 16,
        paddingVertical: 8,

        // backgroundColor: 'red',
        marginVertical: 5,
        borderRadius: 15,
        borderWidth: 2,
        marginHorizontal: 5,
        borderColor: 'lightslategrey',
      }}>
      <View
        style={{
          flexDirection: 'column',
          width: '100%',
          height: first_part_height,
          justifyContent: 'center',
          alignItems: 'flex-start',
          // marginVertical: 4,
          paddingLeft: 20,
          // borderRadius: 5,
          // borderBottomColor: 'grey',
          borderTopColor: '#f2f2f2',
          borderLeftColor: '#f2f2f2',
          borderRightColor: '#f2f2f2',
          // borderWidth: hairlineWidth,
          // marginBottom: 5,
        }}>
          <Text style={One_Note_Styles.title} key={One_Todo_Data.id}>
              {One_Todo_Data?.title
                  ? One_Todo_Data.title.length < 60
                      ? One_Todo_Data.title
                      : `${One_Todo_Data.title.slice(30)}...`
                  : null}
          </Text>

        <ToDo_Details_Comp
          navigation={navigation}
          todo_id={One_Todo_Data.id}
          todo_edit_date={One_Todo_Data.edit_date}
          // logger_ID={logger_ID}
          primary_Index={indexPrimary}
          compWidth={t_width}
        />
      </View>

      {/*feed Content and Time begins here*/}

      <View
        style={{
          flexDirection: 'row',
            height: comp_Height - first_part_height,

          flex: 10,

          paddingLeft: 10,
          paddingRight: 2,
          paddingVertical: 10,
          // backgroundColor: 'orange',
        }}>
        <View
          style={{
            flex: 10, // done of feb__23__2022
            alignItems: 'flex-start',
            justifyContent: 'center',
            flexDirection: 'column',

            // backgroundColor: 'skyblue',
          }}>


          <Text style={One_Note_Styles.description}>
            {One_Todo_Data?.title
              ? One_Todo_Data.title.length < 100
                ? One_Todo_Data.content
                : `${One_Todo_Data.content.slice(80)}...`
              : null}
            {/*{One_Todo_Data.content}*/}
          </Text>
        </View>
      </View>
    </View>
  );

  // }
};

export default One_ToDo;

const One_Note_Styles = StyleSheet.create({
  title: {
    fontSize: 16,
    // paddingBottom: 3,
    fontWeight: 'bold',
    color: 'black',
  },
  description: {
    fontSize: 14,
    color: '#646464',
  },
});

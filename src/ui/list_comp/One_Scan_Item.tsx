import React, {useRef} from 'react';

import {
  Alert,
  Animated,
  I18nManager,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import hairlineWidth = StyleSheet.hairlineWidth;
import {old_scan_result_data_interface} from '../../interfaces/scan/scan_interfaces.ts';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useAppDispatch} from '../../appStore/app/hooks.ts';
import {delete_one_scanned_item} from "../../appStore/features/scan/scan_Slice.ts";

// import {TodoItem} from '../../interfaces/todo/todo_interfaces.ts';
// import ToDo_Details_Comp from './children/ToDo_Details_Comp.tsx';

export interface One_Scan_Item_Props {
  One_Scan_Item_Data: old_scan_result_data_interface;
  index: number;
  comp_Height: number;
  t_width: number;
  navigation: any;
}

const One_Scan_Item: React.FC<One_Scan_Item_Props> = ({
  One_Scan_Item_Data,
  index,
  comp_Height,
  t_width,
  navigation,
}) => {

  const indexPrimary = index;

  const first_part_height = comp_Height / 3;
  const dispatch = useAppDispatch();

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
        // marginVertical: 5,
        borderRadius: 15,
        borderWidth: 2,
        marginHorizontal: 5,
        borderColor: 'lightslategrey',
        flexDirection: 'column',
        width: t_width - 20,
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignSelf: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <View
          style={{
            width: t_width - (20 + 60),
          }}>
          <Text style={One_Note_Styles.description}>
            Type:{' '}
            {One_Scan_Item_Data?.type
              ? One_Scan_Item_Data.type.length < 100
                ? One_Scan_Item_Data.type
                : `${One_Scan_Item_Data.type.slice(80)}...`
              : null}
            {/*{One_Scan_Item_Data.content}*/}
          </Text>

          <Text style={One_Note_Styles.title} key={One_Scan_Item_Data.value}>
            Value:{' '}
            {One_Scan_Item_Data?.value
              ? One_Scan_Item_Data.value.length < 60
                ? One_Scan_Item_Data.value
                : `${One_Scan_Item_Data.value.slice(30)}...`
              : null}
          </Text>
        </View>

        <Pressable
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'lightsteelblue' : 'transparent',
            },
          ]}
          onPress={() => {

            dispatch(delete_one_scanned_item(One_Scan_Item_Data));
            return;
          }}>
          {({pressed}) => (
            <Ionicons
              size={60}
              style={{
                color: 'cyan',
                textAlign: 'center',
                alignSelf: 'center',
              }}
              name={'remove-sharp'}
            />
          )}
        </Pressable>
      </View>

      {/*feed Content and Time begins here*/}
    </View>
  );

  // }
};

export default One_Scan_Item;

const One_Note_Styles = StyleSheet.create({
  title: {
    fontSize: 16,
    // paddingBottom: 3,
    fontWeight: 'bold',
    color: 'black',
  },
  description: {
    fontSize: 18,
    color: '#646464',
    // fontWeight: 'bold',
  },
});

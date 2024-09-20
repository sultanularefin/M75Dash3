import React, {useCallback, useState} from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import {
  StyleSheet,
  Alert,
  View,
  ActivityIndicator,
  // FlatList,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  useWindowDimensions,
  RefreshControl,
  SafeAreaView,
  TouchableNativeFeedback,
  Pressable,
  ListRenderItem,
  VirtualizedList,
  BackHandler,
} from 'react-native';

import {useFocusEffect, useIsFocused} from '@react-navigation/native';

import Snackbar from 'react-native-snackbar';
import {useAppDispatch, useAppSelector} from '../../appStore/app/hooks';





import {unwrapResult} from '@reduxjs/toolkit';
import {
    all_todo_Items,
    get_All_Logger__todos, remove_all_todos,
    todo_loading_state,
} from '../../appStore/features/auth/todo_Slice.ts';
import {TodoItem} from '../../interfaces/todo/todo_interfaces.ts';
import No_More_Items from '../comps/No_More_Items.tsx';
import Custom_Header_TODO_Page from '../header/Custom_Header_TODO_Page.tsx';
import List_Empty_Comp from '../comps/List_Empty_Comp.tsx';
import FloatingButton from '../floating_comp/FloatingButton.tsx';
import One_ToDo from '../list_comp/One_ToDo.tsx';
import FloatingButton_Scan_New from "../floating_comp/FloatingButton_Scan_New.tsx";

export interface Scanner_Root_Page_Props {

  navigation: any;
}

const Scanner_Root_Page: React.FC<Scanner_Root_Page_Props> = ({navigation}) => {
  const [refreshingState, setRefreshingState] = useState(false);



  const deviceWidth = useWindowDimensions().width;
  const deviceHeight = useWindowDimensions().height;

  const dispatch = useAppDispatch();

  const [master_Loading_State, set_Master_Loading_State] = useState(false);

  const todo_loading_state_1: boolean = useAppSelector(todo_loading_state);

  console.log("todo_loading_state_1: ",todo_loading_state_1);
    console.log("master_Loading_State: ",master_Loading_State);

  const all_todos: TodoItem[] = useAppSelector(all_todo_Items);




  console.log("all_todos: ",all_todos);



  useFocusEffect(
    useCallback(() => {
      const main = async () => {
        try {


        } catch (error) {
          console.log('error in userToken ||  fcmToken checking: ', error);
        }
      };

      main();

      const onBackPress = async () => {
        console.log(
          'onBackPress ________save__Before_Close_In_Notifications_Page',
        );
        await save__Before_Close_In_Notifications_Page();
      };

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        //@ts-ignore
        onBackPress,
      );

      return () => {
        backHandler.remove();
        // appState_SubsCription.remove();
      };
    }, []),
  );

  const get_all_Logger_Notifications_0 = async (loggerID: string) => {
    await dispatch(get_All_Logger__todos(true));

    // some set refresh code might be putted in this method...
  };

  const List_Footer_Comp_32 = () => (
    <No_More_Items
      first_String={'No More  Found.'}
      last_String={' Found.'}
      highlighted_String={"To Do's"}
    />
  );

  const listEmpty = () => {
    // if (emptyNotificationsState) {

    return (
      <List_Empty_Comp
        t_Height={deviceHeight}
        content_first={'Your '}
        content_last={' List is Empty.'}
        content_high_light={'Scanned Item'}
        t_width={deviceWidth}
      />
    );
    // partner_name
  };

  const delete_all_Button_Pressed_0 = async () => {

      dispatch(remove_all_todos(true));

      return;
  };

  const save__Before_Close_In_Notifications_Page = async () => {


  };

  const get_Item_Custom = (data: TodoItem[], index: number) => ({
    ...data[index],
    // key: `${index}`

    // key: `${index}${data[index].id}` ---THESE CAUSING PROBLEMS
  });

  // NHS F.... Begins here

  const onRefresh = () => {
    set_Master_Loading_State(true);

    // setInterval(code, delay)
    setTimeout(() => {
      // resolve("foo");
      set_Master_Loading_State(false);
    }, 600);

    // setTimeout()
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <Custom_Header_TODO_Page
        page_title={'Scanned Items'}
        comp_Height={deviceHeight / 14}
        total_Width={deviceWidth}
        // navigation={navigation}
        read_all_Button_Pressed={delete_all_Button_Pressed_0}
        save_before_Leave={save__Before_Close_In_Notifications_Page}
        show_back_button={false}
      />

      <FloatingButton_Scan_New
        // showFloatingButtonBoolean={true}
        isKeyboardVisibleStateBoolean={false}
        deviceHeightFB={deviceHeight}
        navigation={navigation}
        comp_width={65}
        comp_Height={94}
      />

      <View
        style={{
          justifyContent: 'center',
          flex: 1,
          // marginTop: 10,

          opacity: master_Loading_State ? 0.6 : todo_loading_state_1 ? 0.6 : 1,
        }}>
        <VirtualizedList
          // style={AnyUsersFeedzStyles.list}

          // DON'T FOUND THE PROBLEM IN DATA
          data={all_todos}
          renderItem={({item, index}) => (


            <One_ToDo
              One_Todo_Data={item}
              index={index}
              comp_Height={deviceHeight/6}
              t_width={deviceWidth}
              navigation={navigation}

            />

            /*<Text>eee</Text>*/
          )}
          getItemCount={data => data.length}
          getItem={get_Item_Custom}
          // keyExtractor={(item: one_partner_feedz_interface) => item.id}
          // renderItem={notificationRenderItem}
          ListEmptyComponent={listEmpty}
          ListFooterComponent={
            all_todos.length > 0 ? List_Footer_Comp_32 : null
          }
          keyExtractor={(item: TodoItem, index) =>
            `${index}${item.id}${item.id}`
          }
          // required ends here___

          indicatorStyle={'black'}
          horizontal={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshingState}
              onRefresh={onRefresh}
              title="Pull to refresh"
            />
          }
        />

        {(master_Loading_State || todo_loading_state_1) && (
          <View
            style={[
              {
                flexDirection: 'column',
                bottom: 510,
              },
              {
                position: 'absolute',
                left: 0,
                right: 0,
                top: 100,
              },
            ]}>
            <ActivityIndicator
              size="large"
              color="black"
              // color='crimson'
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );

  // NHS ends here
};

const notificationStyles = StyleSheet.create({});

export default Scanner_Root_Page;

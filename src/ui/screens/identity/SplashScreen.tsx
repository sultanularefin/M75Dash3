import React, {useState, useRef, useCallback, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Alert,
  Platform,
  SafeAreaView,
  Linking,
  // AsyncStorage,
} from 'react-native';
import {CommonActions, useFocusEffect} from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

import Snackbar from 'react-native-snackbar';
// import {useNetInfo} from "@react-native-community/netinfo";

import {useAppDispatch, useAppSelector} from '../../../appStore/app/hooks';

import {PayloadAction, unwrapResult} from '@reduxjs/toolkit';

// import {KeyValuePair} from "@react-native-async-storage/async-storage/lib/typescript/types";

import {RouteProp} from '@react-navigation/core/src/types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Native_Root_Stack_ParamList} from '../../../App';
// import ToDo_Home from '../ToDo_Home.tsx';

const splashImage = require('../../../assets/bs_23_logo.jpg');
import AsyncStorage from '@react-native-async-storage/async-storage';
import {populate_items_to_empty_array} from "../../../appStore/features/auth/todo_Slice.ts";


export interface AuthStateInterface {
  apiInovocatoinStatus: string;
  isFetching: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage: string;

  /*
      localStorage: localStorageInterface,

      loggerPerson: weXprez_Logger_User_Interface;// PREVIOUSLY IMPORTED FROM LOGIN SCREEN PAGE. USED THIS INTERFACE PERSON FROM AUTHSLICE
      // ON SEPTEMBER 1ST 2021

      */
}

export interface SplashScreen_Props {
  navigation: any;

  route: RouteProp<
    {
      params: {
        name: string;
      };
    },
    'params'
  >;
}

const SplashScreen = ({
  navigation,
  route,
}: NativeStackScreenProps<Native_Root_Stack_ParamList, 'SplashScreen'>) => {
  const dispatch = useAppDispatch();

  const isIOS = Platform.OS === 'ios';

  const [loadingState, setLoadingState] = useState<boolean>(false);

  const navigate_To_Home_Screen = () => {




        return navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'ToDo_Home'}],
          }),
        );




  };

  const check_local_Storage = async () => {

    console.log("at here <<check_local_Storage>>");


    let values__Wex_cred;
    try {
      values__Wex_cred = await AsyncStorage.getItem(
        'todos',
      ); //.then();
    } catch (error) {
      console.log('error in useEffect SplashScreen page: ', error);
    }


    console.log("values__Wex_cred: ",values__Wex_cred);

    if (values__Wex_cred !== null) {
      // you can ts_ignore this line march___29 ___actually some days ago.
      //@ts-ignore
      const entries2 = new Map(values__Wex_cred);

      // console.log("entries2: ", entries2);
      const obj2 = Object.fromEntries(entries2);

      const payload_is_ios: {is_Ios_Device: boolean} = {
        is_Ios_Device: isIOS,
      };

      if (obj2.login_id !== null) {
        console.log('need to populate');
        /*
                  const login_Payload: login_Request_API_payload_interface = {
                    // userName: (obj2.user_name === null)
                    //     ? ""
                    //     : obj2.user_name,
                    user_name: (obj2.user_name === null)
                        ? ""
                        : obj2.user_name,
                    mobile_no: (obj2.mobile_no === null)
                        ? ""
                        : obj2.mobile_no,

                    // obj2.mobile_no,
                    password: (obj2.pw === null) ? "" : obj2.pw,
                  };
                  return login_Common_Code__Splash_AND_Login_Screen_Page(login_Payload);

                  */

        return setTimeout(() => {
          // resolve("foo");
          navigate_To_Home_Screen();
        }, 600);
      }
    } else {


      console.log("at else local data not found");

      dispatch(populate_items_to_empty_array(null));

      return setTimeout(() => {
        // resolve("foo");
        navigate_To_Home_Screen();
      }, 600);




    }
  };

  useFocusEffect(
    useCallback(() => {
      const main = async () => {
        console.log('at useEffect of SplashScreen ');

        check_local_Storage();

      };
      main();
    }, [
      dispatch,
      // route?.params?.name,
      navigation,
      // netInfo,
      // userDataState.user_id
    ]),
  );

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={splashImage}
        style={{
          height: '100%',
          width: '100%',
        }}
        resizeMode={'contain'}
        // resizeMethod={'contain'}
      />
    </SafeAreaView>
  );

  // NHS F SplashScreen ENDs here. .....
};
export default SplashScreen;

const styles = StyleSheet.create({
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    // backgroundColor: '#ffffff',
    backgroundColor: '#000000',
    flex: 10,
    justifyContent: 'center',
  },
});

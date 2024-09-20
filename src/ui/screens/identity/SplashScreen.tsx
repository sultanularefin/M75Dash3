import React, {useState, useRef, useCallback, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Alert,
  Platform,
  SafeAreaView,
  Linking,
  useWindowDimensions,
  Text,
  // AsyncStorage,
} from 'react-native';
import {CommonActions, useFocusEffect} from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

import Snackbar from 'react-native-snackbar';
// import {useNetInfo} from "@react-native-community/netinfo";

import {useAppDispatch, useAppSelector} from '../../../appStore/app/hooks';

import {RouteProp} from '@react-navigation/core/src/types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Native_Root_Stack_ParamList} from '../../../App';
// import ToDo_Home from '../ToDo_Home.tsx';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Indicator_With_Loading_TextBottom from '../../indicator/Indicator_With_Loading_TextBottom.tsx';
import {ukbd_navy_blue} from '../../ui_utils/important_Colors.ts';

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

  const deviceWidth = useWindowDimensions().width;
  const deviceHeight = useWindowDimensions().height;

  const [loadingState, setLoadingState] = useState<boolean>(false);

  // const navigate_To_Home_Screen = () => {
  //   return navigation.dispatch(
  //     CommonActions.reset({
  //       index: 0,
  //       routes: [{name: 'ToDo_Home_Page'}],
  //     }),
  //   );
  // };


  const navigate_To_Home__Screen_For_Scanning = () => {
    return navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Scanner_Root_Page'}],
        }),
    );
  };

  const check_local_Storage = async () => {
    console.log('at here <<check_local_Storage>>');

    let values__Wex_cred;
    try {
      values__Wex_cred = await AsyncStorage.getItem('todos'); //.then();
    } catch (error) {
      console.log('error in useEffect SplashScreen page: ', error);
    }

    console.log('values__Wex_cred: ', values__Wex_cred);

    if (values__Wex_cred !== null) {
      // you can ts_ignore this line march___29 ___actually some days ago.
      //@ts-ignore
      const entries2 = new Map(values__Wex_cred);

      // console.log("entries2: ", entries2);
      const obj2 = Object.fromEntries(entries2);

      if (obj2.login_id !== null) {
        console.log('need to populate');

        return setTimeout(() => {
          navigate_To_Home__Screen_For_Scanning();
        }, 1000);
      }
    } else {
      console.log('at else local data not found');

      return setTimeout(() => {
        navigate_To_Home__Screen_For_Scanning();
      }, 1000);
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
    <SafeAreaView style={spl_styles.container}>
      <View style={spl_styles.common_view_container} />
      <View
        style={{
          display: 'flex',
          width: deviceWidth,
          flexDirection: 'column',
          flex: 2,
          backgroundColor: 'transparent',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={spl_styles.text_Style}>My Name is: Sultanul Arefin</Text>
        <Indicator_With_Loading_TextBottom
          device_width={deviceWidth}
          device_height={deviceHeight}
        />
      </View>
      <View style={spl_styles.common_view_container} />
    </SafeAreaView>
  );

  // NHS F SplashScreen ENDs here. .....
};
export default SplashScreen;

const spl_styles = StyleSheet.create({
  common_view_container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 4,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_Style: {
    textAlign: 'center',
    color: 'dodgerblue',
    // paddingTop: 20,
    fontWeight: 'bold',
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    // backgroundColor: '#000000',
    flex: 10,
    justifyContent: 'center',
  },
});

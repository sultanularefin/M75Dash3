import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';

import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  Keyboard,
  Modal,
  NativeSyntheticEvent,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TextInputSelectionChangeEventData,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useWindowDimensions,
  Pressable,
  View,
  PermissionsAndroid,
} from 'react-native';



import {
  useAppDispatch,
  useAppSelector
} from '../../appStore/app/hooks';
import Custom_Header_User_Name from '../header/Custom_Header_User_Name.tsx';
import {useActionSheet} from '@expo/react-native-action-sheet';
import Snackbar from 'react-native-snackbar';

import {
  all_items_where_scan_worked,
  current_Item_Scan_Success_success, current_Item_When_Scan_Succeeded,
  current_scanning_state_State, current_scan_result_found_and_update, update_scanning_state,
} from '../../appStore/features/scan/scan_Slice.ts';
import {

  Camera,
  Frame,
  useCameraDevice,
  useCameraDevices,
  useCodeScanner,
  useFrameProcessor,
} from 'react-native-vision-camera';
import {new_Theme_Place_Holder_Color} from '../ui_utils/important_Colors.ts';
import scanQRCodes from '../frame-processors/scanQRCodes.ts';
import {useFocusEffect} from '@react-navigation/native';
import warning_ios_Camera from '../../permissions/ios/warning_ios_Camera.ts';

import {
  checkMultiple,
  PERMISSIONS,
  requestMultiple,
  check,
  request,
} from 'react-native-permissions';
import Camera_Blocked_IOS from '../../permissions/ios/Camera_Blocked_IOS.tsx';
import {Code} from 'react-native-vision-camera/src/types/CodeScanner.ts';
import Label_Component_Scan_P from '../buttons/Label_Component_Scan_P.tsx';
import Indicator_Common from '../indicator/Indicator_Common.tsx';
import {old_scan_result_data_interface} from "../../interfaces/scan/scan_interfaces.ts";

export interface Logger_Scan_Page_Props {
  navigation: any;
}

const Logger_Scan_Page: React.FC<Logger_Scan_Page_Props> = ({navigation}) => {
  const displayWidth = useWindowDimensions().width;
  const displayHeight = useWindowDimensions().height;
  const dispatch = useAppDispatch();

  const Text_Input_Logger_Feedz_Content_Ref = useRef<TextInput>(null);

  const [master_Loading_State, set_Master_Loading_State] = useState(false);

  const all_scanned_items:old_scan_result_data_interface[] = useAppSelector(all_items_where_scan_worked);

  const current_Item_Detail:Code[] = useAppSelector(current_Item_When_Scan_Succeeded);

  const current_scanning_state_State_0: boolean = useAppSelector(
      current_scanning_state_State,
  );
  const current_scan_success: string = useAppSelector(
      current_Item_Scan_Success_success,
  );





  // console.log("current_Item_Detail: ",current_Item_Detail);
  // console.log("all_scanned_items: ",all_scanned_items);



  const TextInput_Report__Cause__Ref = useRef<TextInput>(null);



  const closeModal_change_visisble_State = () => {};

  const before_Going_Prev_Screen = () => {

    navigation.goBack();
  };



  const camera_Android = async () => {
    // console.log(' at index = = 0  ');

    await PermissionsAndroid.check('android.permission.CAMERA').then(
      async camera_Status => {



        // if ((statuses[PERMISSIONS.IOS.CAMERA] !== 'granted') || (statuses[PERMISSIONS.IOS.PHOTO_LIBRARY] !== 'granted')) {
        // return rmLocalIOS();
        if (camera_Status) {
          // setHasPermission(status === 'authorized');



          setHasPermission(camera_Status);
        } else {
          await PermissionsAndroid.request('android.permission.CAMERA').then(
            async camera_Status_2 => {
              //PermissionsAndroid.RESULTS
;

              if (camera_Status_2 === 'granted') {


                setHasPermission(true);

              } else if (camera_Status_2 === 'denied') {
                return warning_ios_Camera(camera_Status_2);
              } else if (camera_Status_2 === 'never_ask_again') {
                return warning_ios_Camera(camera_Status_2);
              }
            },
          );
        }
      },
    );
  };

  const camra_IOS = async () => {

    await check(PERMISSIONS.IOS.CAMERA).then(async statuses => {

      if (statuses === 'granted') {

        setHasPermission(true);
      } else if (statuses === 'blocked') {
        // setMasterLoadingState(false);
        return Camera_Blocked_IOS(statuses);
      } else {
        //--
        await request(PERMISSIONS.IOS.CAMERA).then(async camera_Status_2 => {
          if (camera_Status_2 === 'granted') {

            setHasPermission(true);

          } else {

            return warning_ios_Camera(camera_Status_2);
          }
        });
      }
    });
  };

  const check_Camera_Permissions = React.useCallback(() => {
    // camera:
    if (Platform.OS === 'android') {
      return camera_Android();
    } else {
      return camra_IOS();
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      // ADDED ON DECEMBER_21__FOR_OFFLINE CACHING...

      const main = async () => {
        await check_Camera_Permissions();
      };

      dispatch(update_scanning_state(true));

      main();
    }, []),
  );


 /* useEffect(() => {
    if (barcodes.length > 0) {
      // set_Show_Modal_With_QR_Code_State(true);

      set_Camera_Active_State(false);
      return view_Details(barcodes);


    } else {

      // toggle
      // set_Show_Modal_With_QR_Code_State(false);
      set_Camera_Active_State(true);
    }
  }, [
    current_scan_done,
  ]);*/










  const deviceWidth = useWindowDimensions().width;
  const deviceHeight = useWindowDimensions().height;

  const [hasPermission, setHasPermission] = React.useState(false);




  const device = useCameraDevice('back')

  // - **Barcode (EAN)**: EAN-13 or EAN-8 Barcodes
  // - **Barcode (Code)**: Code-128, Code-39 or Code-93 Barcodes
  // - **Barcode (other)**: Codabar, ITF-14, UPC-E or PDF-417 Barcodes

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13','upc-a','ean-8','code-128', 'code-39','code-93','codabar','pdf-417','upc-e','itf'],
      // codeTypes: ['upc-a'],
    onCodeScanned: (codes: Code[]) => {
      dispatch(current_scan_result_found_and_update(codes));
      // console.log(`Scanned ${codes.length} codes!`);
    },
  });

  const frameProcessor = useFrameProcessor((frame: Frame) => {
    'worklet';

    const qrCodes = scanQRCodes(frame);
    console.log(`QR Codes in Frame: ${qrCodes}`);
  }, []);

  // const frameProcessor = useFrameProcessor((frame) => {   'worklet'   const faces = scanFaces(frame)   console. log(`Faces: ${faces}`) }, [])

  // const [camera_Active_State, set_Camera_Active_State] =
  //   useState<boolean>(false);

  const label = current_scan_success ? 'Found' : 'Working';


  const label_Height= 42;
  const header_height= 40;
  const camera_height = displayHeight -(header_height+label_Height);





  return (
    <SafeAreaView
      style={{
        flexDirection: 'column-reverse',
        justifyContent: 'flex-start',
        height: displayHeight,
        position: 'relative',
      }}>

      <Label_Component_Scan_P
          comp_Height={label_Height}
          comp_width={displayWidth}
          zindex={4}

      />

      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: deviceWidth, //"100%",
          height: camera_height, //'100%',
          position: 'relative',
        }}>
        {(device === null) ? (
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              top: deviceHeight / 3,
              left: deviceWidth / 3,
              height: camera_height,
            }}>
            <Text style={Logger_Scan_Page_Styles.label_Text_Style}>
              device is null
            </Text>
          </View>
        ) : (device === undefined) ? (
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              top: deviceHeight / 3,
              left: deviceWidth / 3,
              height: camera_height,
            }}>
            <ActivityIndicator
              size="large"
              color={new_Theme_Place_Holder_Color}
            />
            <Text style={Logger_Scan_Page_Styles.label_Text_Style}>
              device un-defined
            </Text>
          </View>
        ) : (!hasPermission) ? (
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              top: deviceHeight / 3,
              left: deviceWidth / 3,
              height: camera_height,
            }}>
            <Text style={Logger_Scan_Page_Styles.label_Text_Style}>
              Camera Permission Not Available
            </Text>
          </View>
        ) : (
          <View
            style={{
              width: deviceWidth,
              height: camera_height,

              position: "relative",
              display: 'flex',
              flexDirection: 'column',

            }}>
            <Camera
              style={{
                height: camera_height,
                position: "relative"

              }}
              enableLocation={false}
              device={device}
              isActive={current_scanning_state_State_0}
              codeScanner={codeScanner}
            />

            <View
              style={{
                alignItems: 'center',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                bottom: 100,
                // left: 10,
                width: deviceWidth - 40,
                marginHorizontal: 20,
                height: displayHeight / 20,
              }}>
              <Text style={Logger_Scan_Page_Styles.label_Text_Style}>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                {/*Checking QR code. Please hold the camera on QR until it's finished processing.*/}
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Scanning QR code. Please point the camera towards the "QR Code",
                until scanned.
              </Text>
            </View>
          </View>
        )}
      </View>

      {master_Loading_State && (
        <View
          style={{
            flexDirection: 'column',
            bottom: 510,
            position: 'absolute',
            left: 0,
            right: 0,
            top: 100,
          }}>
          <Indicator_Common />
        </View>
      )}



      {/*Chooose Your Emotoin Modal Begin here*/}

      {/*Chooose Your Emotoin Modal ends here*/}



      <Custom_Header_User_Name
          name_String={`Scan Page`}
          font_size={24}
          total_Height={header_height}
          total_Width={displayWidth}
          navigation={navigation}
          save_before_Leave={before_Going_Prev_Screen}
          show_border={false}
          zindex={4}
      />
    </SafeAreaView>
  );
  // NHS ENDS HER..
};

const Logger_Scan_Page_Styles = StyleSheet.create({
  label_Text_Style: {
    fontSize: 16,
    fontWeight: '600',
    color: new_Theme_Place_Holder_Color, //"white",
  },

});

export default Logger_Scan_Page;

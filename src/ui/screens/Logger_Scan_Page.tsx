



import React, {
    useCallback,
    useRef,
    useState
} from "react";

import {
    ActivityIndicator,
    Alert,
    FlatList,
    Image,
    Keyboard,
    Modal, NativeSyntheticEvent,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput, TextInputSelectionChangeEventData,
    TouchableOpacity,
    TouchableWithoutFeedback,
    useWindowDimensions,
    Pressable,
    View, PermissionsAndroid
} from "react-native";

import {Rect,
    SafeAreaView as SafeArea_View_Context,
    useSafeAreaFrame,
    // useSafeAreaInsets
} from 'react-native-safe-area-context';



import {useAppDispatch, useAppSelector} from "../../appStore/app/hooks";
import Custom_Header_User_Name from "../header/Custom_Header_User_Name.tsx";
import {useActionSheet} from "@expo/react-native-action-sheet";
import Snackbar from "react-native-snackbar";
import {clear_new_todo_1, new_todo, update_current_new_note} from "../../appStore/features/auth/todo_Slice.ts";
import {TodoItem, user_todo_item_payload_interface} from "../../interfaces/todo/todo_interfaces.ts";
import Content_New_To_Do from "../inputs/Content_New_To_Do.tsx";
import Title_New_ToDo from "../inputs/Title_New_ToDo.tsx";
import Logger_Create_Note_Button from "../buttons/Logger_Create_Note_Button.tsx";
import {
    current_Item_Scan_Success_success,
    current_Scan_Loading_State_State
} from "../../appStore/features/scan/scan_Slice.ts";
import {Camera, Frame, useCameraDevice, useCameraDevices, useFrameProcessor} from "react-native-vision-camera";
import {new_Theme_Place_Holder_Color} from "../ui_utils/important_Colors.ts";
import scanQRCodes from "../frame-processors/scanQRCodes.ts";


export interface Logger_Scan_Page_Props {


    navigation:any,
}






const Logger_Scan_Page: React.FC<Logger_Scan_Page_Props> = ({ navigation}) => {

    const displayWidth =  useWindowDimensions().width;
    const displayHeight = useWindowDimensions().height;
    const dispatch = useAppDispatch();




    const Text_Input_Logger_Feedz_Content_Ref = useRef<TextInput>(null);


    const [keyboard_typing_active_State, set_Keyboard_typing_active_State] = useState<boolean>(false);
    const [post_Button_HTTP_Running_State, set_Post_Button_HTTP_Running_State] = useState(false);

    const [master_Loading_State, set_Master_Loading_State] = useState(false);



    const {showActionSheetWithOptions} = useActionSheet();



    const new_todo_Item_details: TodoItem = useAppSelector(new_todo);

    // console.log("new_todo_Item_details: ",new_todo_Item_details);


    const TextInput_Report__Cause__Ref = useRef<TextInput>(null);




    const android_KeyBoard_Focused__onPressIn__testing = (nativeEvent: any) => {

        // return;
        // console.log("_____________android_KeyBoard_Focused__onPressIn__testing_____________");

        set_Keyboard_typing_active_State(true);

    };


    const closeModal_change_visisble_State = /*async */ (/*value_Not_neccessary:boolean*/) => {




    };





    const before_Going_Prev_Screen=()=>{

        clear_one_note();
        // clear__comments_and_TextInput();
        navigation.goBack();
    };

    const clear_one_note = () => {

        //@ts-ignore
        Text_Input_Logger_Feedz_Content_Ref.current.clear();
        //@ts-ignore
        TextInput_Report__Cause__Ref.current.clear();




        dispatch(clear_new_todo_1(true));


    };












    const onEditing_End_Button_Pressed = ()=>{

        console.log("at <<onEditing_End_Button_Pressed>> ");
    }

    const onChange_Note_Content = (new_String:string)=>{


        const obj4: user_todo_item_payload_interface = {
            key: 'content',
            value_string: new_String,
            input_type: 'text',
            value_boolean: false,
        };

        return dispatch(update_current_new_note(obj4));
    }



    const OnChange_Title = (cause: string) => {


        const obj4: user_todo_item_payload_interface = {
            key: 'title',
            value_string: cause,
            input_type: 'text',
            value_boolean: false,
        };

        return dispatch(update_current_new_note(obj4));





    };

    const current_scan_done : boolean =useAppSelector(current_Scan_Loading_State_State);
    const current_scan_success: string =useAppSelector(current_Item_Scan_Success_success);



    const deviceWidth = useWindowDimensions().width;
    const deviceHeight = useWindowDimensions().height;


    const [hasPermission, setHasPermission] = React.useState(false);

    const device = useCameraDevice('back')
    // const devices = useCameraDevices();
    // const device = devices.back;

    // const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE], {
    //     checkInverted: true,
    // });


    const frameProcessor = useFrameProcessor((frame:Frame) => {
        'worklet';

        const qrCodes = scanQRCodes(frame);
        console.log(`QR Codes in Frame: ${qrCodes}`);
    }, []);

    // const frameProcessor = useFrameProcessor((frame) => {   'worklet'   const faces = scanFaces(frame)   console. log(`Faces: ${faces}`) }, [])


    const [camera_Active_State, set_Camera_Active_State] = useState<boolean>(false);


    const label= current_scan_success
        ? "Found"
        : "Working";


    return (


        <SafeArea_View_Context

            style={{
                flexDirection: 'column',
                justifyContent: 'flex-start',
                flex: 10,
            }}

        >


            <Custom_Header_User_Name
                name_String = {`Scan Page`}
                font_size={24}

                total_Height={displayHeight}
                total_Width={displayWidth}
                navigation={navigation}
                save_before_Leave={before_Going_Prev_Screen}
            />


            {/*Chooose Your Emotoin Modal Begin here*/}





            {/*Chooose Your Emotoin Modal ends here*/}



            <View
                style={{
                    flexDirection: 'column',
                    justifyContent: 'flex-start',


                    // height:  displayHeight/2.8,// from 3.7 on april 12, 2022
                    width: "100%",

                    paddingBottom: 10,


                }}
            >



                <View style={{

                    flexDirection: "column",
                    justifyContent: 'center',
                    alignItems: 'center',
                    // flex: 10,
                    width: deviceWidth,//"100%",
                    height: displayHeight,//'100%',
                    // width: "100%",
                    // height: '100%',

                }}>
                    {
                        (device === null) ?
                            (
                                <View style={{
                                    flexDirection: "column",
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    position: 'absolute',
                                    top: deviceHeight / 3,
                                    left: deviceWidth / 3,

                                }}>
                                    {/*<ActivityIndicator
                                    size="large"
                                    color={new_Theme_Place_Holder_Color}
                                />*/}
                                    <Text style={Logger_Scan_Page_Styles.label_Text_Style}>device is null</Text>
                                </View>
                            ) : (device === undefined) ?
                                (
                                    <View style={{


                                        flexDirection: "column",
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        position: 'absolute',
                                        top: deviceHeight / 3,
                                        left: deviceWidth / 3,

                                    }}>
                                        <ActivityIndicator
                                            size="large"
                                            color={new_Theme_Place_Holder_Color}
                                        />
                                        <Text style={Logger_Scan_Page_Styles.label_Text_Style}>device un-defined</Text>
                                    </View>
                                ) : (!hasPermission) ? (
                                    <View style={{


                                        flexDirection: "column",
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        position: 'absolute',
                                        top: deviceHeight / 3,
                                        left: deviceWidth / 3,

                                    }}>
                                        {/*  <ActivityIndicator
                                        size="large"
                                        color={new_Theme_Place_Holder_Color}
                                    />*/}
                                        <Text style={Logger_Scan_Page_Styles.label_Text_Style}>Camera Permission Not
                                            Available</Text>
                                    </View>

                                ) : (
                                    <View style={{


                                        width: deviceWidth,//"100%",
                                        height: displayHeight,//'100%',


                                        flexDirection: "column",
                                        flex: 10,
                                        // justifyContent: 'center',


                                    }}>
                                        <Camera
                                            style={StyleSheet.absoluteFill}
                                            device={device}
                                            isActive={camera_Active_State}
                                            frameProcessor={frameProcessor}
                                            fps={5}
                                        />

                                        <View style={{
                                            alignItems: 'center',
                                            position: 'absolute',
                                            bottom: 100,
                                            // left: 10,
                                            width: deviceWidth - 40,
                                            marginHorizontal: 20,
                                            height: displayHeight / 20,
                                            // backgroundColor: 'red',
                                        }}>
                                            <Text
                                                style={Logger_Scan_Page_Styles.label_Text_Style}>
                                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                                {/*Checking QR code. Please hold the camera on QR until it's finished processing.*/}

                                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                                Scanning QR code. Please point the camera towards the "QR Code", until scanned.
                                            </Text>
                                        </View>


                                    </View>
                                )
                    }


                </View>

                <View style={{

                    width: "100%",
                    justifyContent: 'center',
                    flexDirection: 'column',
                    flex: 2.5,
                }}>

                </View>
                <Logger_Create_Note_Button
                    comp_Height={displayHeight/20}
                    post_Button_HTTP_Running_State_2={post_Button_HTTP_Running_State}
                    comp_width={displayWidth}
                    navigation={navigation}

                />
            </View>




            {
                ( master_Loading_State && (<View
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
                    </View>)
                )
            }

        </SafeArea_View_Context>

    );
// NHS ENDS HER..


};

const Logger_Scan_Page_Styles = StyleSheet.create({

    label_Text_Style: {
        fontSize: 16,
        fontWeight: "600",
        color: new_Theme_Place_Holder_Color,//"white",
    },

    MiddleTextView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
    },

    MiddleText: {
        backgroundColor: "transparent",
        fontSize: 20,
        textAlign: "center",
        color: "white",
    },


});


export  default  Logger_Scan_Page;










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
    View,
    PermissionsAndroid
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
import {
    clear_editing_note,
    clear_new_todo_1, edit_indexed_editing_note,
    editing_to_do_item,

    update_current_new_note
} from "../../appStore/features/auth/todo_Slice.ts";
import {
    edit_todo_item_payload_interface,
    TodoItem,
    user_todo_item_payload_interface
} from "../../interfaces/todo/todo_interfaces.ts";
import Title_Edit_1_ToDO from "../inputs/edit/Title_Edit_1_ToDO.tsx";
import Content_Edit_1_To_Do from "../inputs/edit/Content_Edit_1_To_Do.tsx";
import Logger_Edit_Note_Button from "../buttons/Logger_Edit_Note_Button.tsx";


export interface Logger_Edit_Note_Page_Props {


    navigation:any,
}






const Logger_Edit_Note_Page: React.FC<Logger_Edit_Note_Page_Props> = ({ navigation}) => {

    const displayWidth =  useWindowDimensions().width;
    const displayHeight = useWindowDimensions().height;
    const dispatch = useAppDispatch();




    const Text_Input_Logger_Feedz_Content_Ref = useRef<TextInput>(null);


    const [keyboard_typing_active_State, set_Keyboard_typing_active_State] = useState<boolean>(false);
    const [post_Button_HTTP_Running_State, set_Post_Button_HTTP_Running_State] = useState(false);

    const [master_Loading_State, set_Master_Loading_State] = useState(false);



    const {showActionSheetWithOptions} = useActionSheet();



    const editing_to_do_item_details: TodoItem = useAppSelector(editing_to_do_item);



    const TextInput_Report__Cause__Ref = useRef<TextInput>(null);




    const android_KeyBoard_Focused__onPressIn__testing = (nativeEvent: any) => {

        // return;
        // console.log("_____________android_KeyBoard_Focused__onPressIn__testing_____________");

        set_Keyboard_typing_active_State(true);

    };







    const before_Going_Prev_Screen=()=>{

        clear_editing_note_0();

        navigation.goBack();
    };

    const clear_editing_note_0 = () => {

        //@ts-ignore
        Text_Input_Logger_Feedz_Content_Ref.current.clear();
        //@ts-ignore
        TextInput_Report__Cause__Ref.current.clear();

        dispatch(clear_editing_note(true));


    };












    const onEditing_End_Button_Pressed = ()=>{

        console.log("at <<onEditing_End_Button_Pressed>> ");
    }

    const onChange_Note_Content = (new_String:string)=>{


        const obj4: edit_todo_item_payload_interface = {
            key: 'content',
            value_string: new_String,
            input_type: 'text',
            value_boolean: false,
            id: editing_to_do_item_details.id,

        };

        return dispatch(edit_indexed_editing_note(obj4));
    }



    const edit_Title = (cause: string) => {




        const obj4: edit_todo_item_payload_interface = {
            key: 'title',
            value_string: cause,
            input_type: 'text',
            value_boolean: false,
            id: editing_to_do_item_details.id,

        };

        return dispatch(edit_indexed_editing_note(obj4));







    };


    return (


        <SafeArea_View_Context

            style={{
                flexDirection: 'column',
                justifyContent: 'flex-start',
                flex: 10,
            }}

        >


            <Custom_Header_User_Name
                name_String = {"Edit Note"}
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


                <Title_Edit_1_ToDO
                    t_Height={displayHeight}
                    users_name={"User"}
                    t_Width={displayWidth}
                    onChange____Report_Comment__Cause_2={edit_Title}
                    TextInput_Report_User_contentRef__2={TextInput_Report__Cause__Ref}
                    // onSelectionChange_test_2={}
                    android_KeyBoard_Focused__onPressIn__testing_2={android_KeyBoard_Focused__onPressIn__testing}
                />


                <Content_Edit_1_To_Do
                    t_Height={displayHeight}
                    logger_Name={"User"}
                    t_Width={displayWidth}
                    TextInput_feed_contentRef__2={Text_Input_Logger_Feedz_Content_Ref}

                    onChange_Note_Content={onChange_Note_Content}

                    android_KeyBoard_Focused__onPressIn__testing_2={android_KeyBoard_Focused__onPressIn__testing}

                    on_Editing_End_Pressed={onEditing_End_Button_Pressed}


                />


                <Logger_Edit_Note_Button
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

const Logger_Edit_Note_Styles = StyleSheet.create({



});


export  default  Logger_Edit_Note_Page;







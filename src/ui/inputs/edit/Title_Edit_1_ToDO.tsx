


import React, {
    // useRef
} from "react";

import {
    Keyboard,
    Platform,
    Text,
    TextInput,
    View

} from "react-native";
import {TodoItem} from "../../../interfaces/todo/todo_interfaces.ts";
import {useAppSelector} from "../../../appStore/app/hooks.ts";
import {
    editing_to_do_item
} from "../../../appStore/features/auth/todo_Slice.ts";




export interface Title_Edit_1_ToDO {

    t_Height: number,
    users_name: string,
    t_Width: number,

    onChange____Report_Comment__Cause_2: (new_String: string)=>void,


    TextInput_Report_User_contentRef__2:  React.RefObject<TextInput>,

    android_KeyBoard_Focused__onPressIn__testing_2: (nativeEvent: any)=>void,

}




const Title_Edit_1_ToDO: React.FC<Title_Edit_1_ToDO> = ({

                                                        t_Height,
                                                        users_name,
                                                        t_Width,
                                                        onChange____Report_Comment__Cause_2,
                                                        TextInput_Report_User_contentRef__2,
                                                        android_KeyBoard_Focused__onPressIn__testing_2,



                                                    }) => {


    const editing_to_do_item_details: TodoItem = useAppSelector(editing_to_do_item);



    const box_Height = t_Height/20;
    const padding_Start_Constant = 30;
    return(
        <View style={{
            flexDirection: 'column',

            height:  box_Height,
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
            marginTop: 10,
            marginBottom: 20,
        }}
        >

            <View style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                // width: t_Width,
                width: '85%',
                borderRadius: (box_Height)/2,
                backgroundColor: '#FFFFFF',

                alignItems: 'center',
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 2,
            }}
            >


                <View style={{
                    width: t_Width-60,
                    height: box_Height,

                }}>
                    <TextInput
                        style={{
                            height: box_Height,
                            borderRadius: (box_Height)/2,
                            paddingStart: (padding_Start_Constant<box_Height/3.8)?box_Height/3.8:padding_Start_Constant,
                            textAlign: 'left',
                            color: 'black',
                            // paddingTop: (Platform.OS==='android')?0: 10,

                        }}
                        underlineColorAndroid="transparent"
                        // placeholder= {`Description ${activity__Posters___F_Name}!`}
                        placeholder= {`To-Do Title`}
                        placeholderTextColor={"black"}

                        numberOfLines={5}
                        textAlignVertical="center"
                        blurOnSubmit={true}
                        // placeholderTextColor="#757575"
                        maxLength={60}
                        ref={TextInput_Report_User_contentRef__2}

                        onSubmitEditing={Keyboard.dismiss}

                        autoCapitalize="none"
                        keyboardType="default"
                        onChangeText={(report__Cause: string) =>
                            onChange____Report_Comment__Cause_2(report__Cause)
                        }

                        onPressIn={android_KeyBoard_Focused__onPressIn__testing_2}


                        value={editing_to_do_item_details?.title
                            ?editing_to_do_item_details.title:""}

                        multiline={true}
                        // editable={false}
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
                    }}
                >
                    {' '}
                    {editing_to_do_item_details?.title?.length}/60
                    {' '}
                </Text>


            </View>
        </View>

    );
};





export default Title_Edit_1_ToDO;



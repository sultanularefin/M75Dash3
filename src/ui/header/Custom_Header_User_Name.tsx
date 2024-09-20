import React from "react";

import {
    Text,
    TouchableOpacity,
    View
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
// import {Comments_CustomHeader_Props} from "../../home_Tabs/comments__Sub_Components/Comments_CustomHeader";



export interface Custom_Header_User_Name_Props{
    name_String: string,
    font_size: number,
    total_Height: number,
    total_Width: number,
    navigation: any,
    save_before_Leave: ()=>void,

}



const Custom_Header_User_Name: React.FC<Custom_Header_User_Name_Props> = ({
                                                                              name_String,
                                                                              font_size,
                                                                              navigation,
                                                                              total_Height,
                                                                              total_Width,
                                                                              save_before_Leave

                                                                          }) => {
// const Custom_Header_User_Name= () => {


    const save_before_Leave_2= async ()=>{
        // return
        await save_before_Leave();

    };


    return(
        <View style={{
            height: total_Height/14,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            // backgroundColor: 'transparent',
            width: total_Width,

        }}>


            <View
                style={{
                    // flex: 1,
                    height: '100%',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    width: total_Width,
                    borderBottomWidth: 1,
                    borderTopWidth: 1,
                    borderTopColor: '#000a12',
                    borderBottomColor: '#000a12',
                    // backgroundColor: 'blue',
                    // backgroundColor: 'transparent',


                }}
            >
                {/*partner name and image starts here*/}


                <View
                    style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        // backgroundColor: 'white',
                        // backgroundColor: 'red',
                        paddingStart: 16,
                        width: total_Width/6,



                    }}
                >


                    <TouchableOpacity
                        onPress={save_before_Leave_2}
                        style={{
                            width: (total_Width/6) -16,
                        }}
                    >
                        <Ionicons
                            name='arrow-back-sharp'
                            size={40}
                            color='black'
                        />
                    </TouchableOpacity>
                </View>



                <View style={{

                    flexDirection: 'column',
                    justifyContent: 'center',
                    // backgroundColor: 'white',
                    // backgroundColor: 'gold',
                    alignItems: 'center',
                    // paddingStart: 16,
                    width: (total_Width- (total_Width/6)*2),


                }}
                >
                    <Text style={{
                        color: 'black',
                        fontSize: font_size,
                        fontWeight: '600', //'bold',
                    }}>{name_String}</Text>


                </View>

                {/*partner name and image starts here*/}


                {/*Empty view begins here.*/}
                <View
                    style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        // backgroundColor: 'white',
                        // backgroundColor: 'red',
                        paddingStart: 16,
                        width: total_Width/6,
                    }}
                >
                </View>

                {/*Empty view begins here.*/}

            </View>
        </View>
    );
};
export default Custom_Header_User_Name;

import React from 'react';

import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {useAppDispatch, useAppSelector} from '../../appStore/app/hooks.ts';

import {Code} from 'react-native-vision-camera/src/types/CodeScanner.ts';
import {current_Item_When_Scan_Succeeded,
    // delete_one_scanned_item
} from '../../appStore/features/scan/scan_Slice.ts';
import Ionicons from 'react-native-vector-icons/Ionicons';

export interface Label_Scan_Page_Props {
    comp_Height: number;
    comp_width: number;
    zindex: number,
}

const Label_Component_Scan_P: React.FC<Label_Scan_Page_Props> = ({
                                                              comp_Height,
                                                              comp_width,
                                                              zindex,
                                                          }) => {
    const dispatch = useAppDispatch();

    const current_Item_Detail: Code[] = useAppSelector(
        current_Item_When_Scan_Succeeded,
    );

    return (
        <View
            style={{
                height: comp_Height,
                width: comp_width,
                // marginTop: 5,
                alignSelf: 'center',
                backgroundColor: 'steelblue',
                flexDirection: 'row',
                zIndex: zindex,
                paddingLeft:10,
                position: 'relative',
            }}>
            <View
                style={{
                    height: comp_Height - 5,
                    width: comp_width - (60),
                    backgroundColor: 'transparent',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    alignSelf: 'center',
                }}>
                {current_Item_Detail?.length > 0 ? (
                    <Text style={{
                        ...Label_Scan_Page_Styles.loginText,
                        letterSpacing: 1,
                    }}
                    >
                        Type:{current_Item_Detail[0]?.type}, Value:
                        {current_Item_Detail[0].value}
                    </Text>
                ) : (
                    <Text style={Label_Scan_Page_Styles.loginText}>
                        Detail Will be visible here...
                    </Text>
                )}
            </View>

            {current_Item_Detail?.length > 0 ? (

                <Pressable
                    style={({pressed}) => [
                        {
                            zIndex: 2,
                            backgroundColor: pressed ? 'lightsteelblue' : 'transparent',
                            height: 60,
                            width: 60,
                        },
                    ]}
                    onPress={() => {

                        dispatch(delete_one_scanned_item_From_Scanning_Page(One_Scan_Item_Data));
                        return;
                    }}>
                    {({pressed}) => (
                        <Ionicons
                            size={40}
                            style={{
                                color: 'cyan',
                                textAlign: 'left',
                                alignSelf: 'center',
                            }}
                            name={'remove-sharp'}
                        />
                    )}
                </Pressable>
            ) : (
                <View style={{

                    // zIndex: 2,
                    backgroundColor: 'transparent',
                    height: 60,
                    width: 60,
                }}
                ></View>
            )
            }
        </View>
    );
};



export default Label_Component_Scan_P;

const Label_Scan_Page_Styles = StyleSheet.create({
    loginText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        letterSpacing: 1.2,
    },
});
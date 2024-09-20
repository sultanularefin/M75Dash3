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

import No_More_Items from '../comps/No_More_Items.tsx';

import List_Empty_Comp from '../comps/List_Empty_Comp.tsx';

import FloatingButton_Scan_New from "../floating_comp/FloatingButton_Scan_New.tsx";
import {old_scan_result_data_interface} from "../../interfaces/scan/scan_interfaces.ts";
import {all_items_where_scan_worked, delete_all_scan_items} from "../../appStore/features/scan/scan_Slice.ts";
import Custom_Header_Root_Scan_Page from "../header/Custom_Header_Root_Scan_Page.tsx";
import Indicator_Common from "../indicator/Indicator_Common.tsx";
import One_Scan_Item from "../list_comp/One_Scan_Item.tsx";


export interface Scanner_Root_Page_Props {

    navigation: any;
}

const Scanner_Root_Page: React.FC<Scanner_Root_Page_Props> = ({navigation}) => {
    const [refreshingState, setRefreshingState] = useState(false);


    const deviceWidth = useWindowDimensions().width;
    const deviceHeight = useWindowDimensions().height;

    const dispatch = useAppDispatch();

    const [master_Loading_State, set_Master_Loading_State] = useState(false);

    console.log("master_Loading_State: ", master_Loading_State);

    const all_scanned_items: old_scan_result_data_interface[] = useAppSelector(all_items_where_scan_worked);



    const List_Footer_Comp_32 = () => (
        <No_More_Items
            first_String={'No More '}
            last_String={' Found.'}
            highlighted_String={"Scanned Item's"}
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


    const save__Before_Close_In_Notifications_Page = async () => {


    };

    const get_Item_Custom = (data: old_scan_result_data_interface[], index: number) => ({
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


    const delete_all_Button_Pressed_0 = async () => {

        dispatch(delete_all_scan_items(true));

        return;
    };



    const comp_Height= deviceHeight/10;
    const header__Height= deviceHeight/16;
    return (
        <SafeAreaView
            style={{
                flex: 1,
                flexDirection: 'column',
            }}>
            <Custom_Header_Root_Scan_Page
                page_title={'Scanned Items'}
                comp_Height={header__Height}
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

                    opacity: master_Loading_State ? 0.6 : 1,
                }}>
                <VirtualizedList
                    // style={AnyUsersFeedzStyles.list}

                    // DON'T FOUND THE PROBLEM IN DATA
                    data={all_scanned_items}
                    renderItem={({item, index}) => (


                        <One_Scan_Item
                            One_Scan_Item_Data={item}
                            index={index}
                            comp_Height={comp_Height}
                            t_width={deviceWidth}
                            navigation={navigation}
                        />

                    )}
                    getItemCount={data => data.length}
                    getItem={get_Item_Custom}
                    // keyExtractor={(item: one_partner_feedz_interface) => item.id}
                    // renderItem={notificationRenderItem}
                    ListEmptyComponent={listEmpty}
                    ListFooterComponent={
                        all_scanned_items.length > 0 ? List_Footer_Comp_32 : null
                    }
                    keyExtractor={(item: old_scan_result_data_interface, index) =>
                        `${index}${item.value}${item.type}`
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

                {
                    master_Loading_State ? (
                        <Indicator_Common/>
                    )
                        : null
                }


            </View>
        </SafeAreaView>
    );

    // NHS ends here
};

const notificationStyles = StyleSheet.create({});

export default Scanner_Root_Page;

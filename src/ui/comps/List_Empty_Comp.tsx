

import React from "react";

import {
    Text,
    View
} from "react-native";



export interface List_Empty_Comp_Props {

    t_Height: number,
    // content_String: string,
    t_width: number,


    content_first: string,
    content_last: string,
    content_high_light: string,



}


const List_Empty_Comp: React.FC<List_Empty_Comp_Props> = ({
                                                                                                                      t_Height,
                                                                                                                      // content_String,
                                                                                                                      t_width,

                                                                                                                      content_first,
                                                                                                                      content_last,
                                                                                                                      content_high_light

                                                                                                                  }) => (

// const List_Empty_Comp = () => (
    <View style={{
        // ...following_Partner_Styles.container,
        height: t_Height / 1.2,
        width: t_width - 18,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf: 'center',
    }}>
        <Text style={{
            textAlign: 'center',
            color: '#000',
            paddingTop: 20
        }}>{content_first}<Text style={{
            textAlign: 'center',
            color: '#000',
            paddingTop: 20,
            fontWeight: 'bold',
        }}>{content_high_light}</Text>
            {content_last}
        </Text>
    </View>
);

export default List_Empty_Comp;

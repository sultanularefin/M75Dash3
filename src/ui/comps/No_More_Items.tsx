import React from 'react';
import {Text, View} from 'react-native';

// import {EditFeed_Props} from "../../home_Tabs/EditFeed";

export interface No_More_Items_Props {
  first_String: string;
  last_String: string;
  highlighted_String: string;
}

const No_More_Items: React.FC<No_More_Items_Props> = ({
  first_String,
  last_String,
  highlighted_String,
}) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        // alignSelf: "center",
        justifyContent: 'center',
        alignItems: 'center',
        // alignContent: 'center',
        width: '100%',
        // marginBottom: 10,
        // backgroundColor: 'red',
      }}>
      <View
        style={{
          flexDirection: 'row',
          margin: 7,
        }}>
        <View
          style={{
            // width: Dimensions.get('window').width/2,
            // width: 220,
            borderRadius: 15,
            borderWidth: 1,
            borderColor: 'gray',
            // backgroundColor: '#000000',
            padding: 10,
            shadowColor: '#3d3d3d',
            shadowRadius: 2,
            shadowOpacity: 0.5,
            shadowOffset: {
              width: 1,
              height: 1,
            },
            backgroundColor: 'black',
            width: '80%',
            // backgroundColor: black',
          }}>
          <Text
            style={{
              fontSize: 15,
              color: '#ffffff',
              fontWeight: '400',
              // textAlign: "right",
              textAlign: 'center',
            }}>
            {first_String}
              <Text
                  style={{
                      fontSize: 15,
                      color: '#ffffff',
                      fontWeight: '600',
                      // textAlign: "right",
                      textAlign: 'center',
                  }}>{highlighted_String}</Text>
              {last_String}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default No_More_Items;

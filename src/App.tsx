/*function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />*/


import React, {useEffect} from 'react';

import {createNativeStackNavigator, NativeStackScreenProps} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ActionSheetProvider} from '@expo/react-native-action-sheet';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {store} from "./appStore/app/store";
import SplashScreen from "./ui/screens/identity/SplashScreen";

import Scanner_Root_Page from "./ui/screens/Scanner_Root_Page.tsx";
import Logger_Scan_Page from "./ui/screens/Logger_Scan_Page.tsx";

const Native_Root_Stack =
    createNativeStackNavigator<Native_Root_Stack_ParamList>();

// const RootStack = createNativeStackNavigator<Native_Root_StackParamList>();

export interface Props {
}

// export type Native_Root_Stack_ParamList = NonNullable<unknown>;





export type Native_Root_Stack_ParamList = {
    // SplashScreen: undefined;
    SplashScreen: {
        name: string,
    };
    Scanner_Root_Page: undefined,
    Logger_Scan_Page: undefined,
}
export interface Props {

}
const App: React.FC<Props> = (props) => {
    return (
        <View
            style={{
                flex: 1,
            }}>
            <Provider store={store}>
                <SafeAreaProvider>


                    <ActionSheetProvider>
                        <NavigationContainer>
                            <Native_Root_Stack.Navigator
                                initialRouteName={
                                    'SplashScreen'
                                }
                                screenOptions={{
                                    // cardOverlayEnabled: true,

                                    headerTitleStyle: {
                                        fontWeight: 'bold',
                                        // fontSize: rdx_dimension.width>360? 16:14,
                                        fontSize: 16,
                                    },
                                    headerTitleAlign: 'center',
                                }}>

                                <Native_Root_Stack.Screen
                                    name="SplashScreen"
                                    component={SplashScreen}
                                    options={{

                                        headerShown: false,

                                    }}

                                />


                                <Native_Root_Stack.Screen
                                    name="Scanner_Root_Page"
                                    component={Scanner_Root_Page}
                                    options={{
                                        headerShown: false,
                                        // headerShown: true,
                                    }}
                                />

                                <Native_Root_Stack.Screen
                                    name="Logger_Scan_Page"
                                    component={Logger_Scan_Page}
                                    options={{
                                        headerShown: false,


                                    }}
                                />

                            </Native_Root_Stack.Navigator>
                        </NavigationContainer>
                    </ActionSheetProvider>
                </SafeAreaProvider>
            </Provider>
        </View>
    );
};

export default App;

const AppStyles = StyleSheet.create({
    // hairLineWidth2: StyleSheet.hairlineWidth,

    commonHeaderStyle64: {
        backgroundColor: 'white',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'black',
    },
});


// export default App;

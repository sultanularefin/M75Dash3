import {Alert} from "react-native";
import Snackbar from "react-native-snackbar";


const Camera_Blocked_IOS = (status: string)=>{

  /*  return  Alert.alert(
        "Permission Denied",
        `Never Ask Again Selected, Assetrax cannot access your camera to capture photos.`,
        [
            {
                text: "Close",
                onPress: () => console.log("close Pressed"),
                style: "cancel"
            }

        ]
    );*/
    console.log(" Camera_Blocked_IOS : status:",status);

    Snackbar.show({

        text: 'Camera access permission blocked, please change permission from Settings of your phone.',
        duration: Snackbar.LENGTH_INDEFINITE,
        numberOfLines: 3,
        action: {
            text: 'close',
            textColor: 'green',
            onPress: () => {
                Snackbar.dismiss();
            },
        },
    });





    return false;
};

export default Camera_Blocked_IOS;

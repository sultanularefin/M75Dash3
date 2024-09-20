import {Alert} from "react-native";


const never_Ask_Again_Camera = (status: string)=>{

    return  Alert.alert(
        "Permission Denied",
        `Never Ask Again Selected, TripzChat cannot access your camera to capture photos.`,
        [
            {
                text: "Close",
                onPress: () => console.log("close Pressed"),
                style: "cancel"
            }

        ]
    );
};

export default never_Ask_Again_Camera;

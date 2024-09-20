import {Alert} from "react-native";


const warning_ios_Camera= (statuses2: string)=>{
    return  Alert.alert(
        "Permission Denied",
        `TripzChat cannot access your camera to capture photos.`,
        [
            {
                text: "Close",
                onPress: () => console.log("close Pressed"),
                style: "cancel"
            }

        ]
    );

};


export default warning_ios_Camera;

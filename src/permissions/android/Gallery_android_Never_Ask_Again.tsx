import {Alert} from "react-native";


const Gallery_android_Never_Ask_Again = (status_2:string)=>{

    return  Alert.alert(
        "Permission Denied",
        `Never Ask Again Selected, TripzChat cannot access your photos from your Storage.`,
        [
            {
                text: "Close",
                onPress: () => console.log("close Pressed"),
                style: "cancel"
            }

        ]
    );

};

export default Gallery_android_Never_Ask_Again;

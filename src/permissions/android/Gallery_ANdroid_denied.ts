import {Alert} from "react-native";


const Gallery_ANdroid_denied= (statuses2: string)=>{

    console.log("statuses2: ",statuses2);


    return  Alert.alert(
        "Permission Denied",
        `TripzChat cannot access your photos from your Storage.`,
        [
            {
                text: "Close",
                onPress: () => console.log("close Pressed"),
                style: "cancel"
            }

        ]
    );

};


export default Gallery_ANdroid_denied;

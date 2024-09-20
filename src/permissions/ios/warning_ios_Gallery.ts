import {Alert} from "react-native";


const warning_ios_Gallery= (statuses2: string)=>{

    console.log("statuses2: ",statuses2);

    return Alert.alert(
        // `${statuses2}`,
        `Permission Restricted`,
        `TripzChat cannot access your photos from your IOS Photo Library.`,
        [
            {
                text: "Close",
                onPress: () => console.log("close Pressed"),
                style: "cancel"
            }

        ]
    );

};


export default warning_ios_Gallery;

import {CodeType} from "react-native-vision-camera/src/types/CodeScanner.ts";

export interface old_scan_result_data_interface{
    type: CodeType | 'unknown'
    /**
     * The string value, or null if it cannot be decoded.
     */
    value?: string
}

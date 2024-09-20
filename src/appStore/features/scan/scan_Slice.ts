import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RootState} from '../../app/store';
import {baseInterface} from '../../../interfaces/baseInterface.ts';


export interface todo__State_Interface extends baseInterface {
    scan_Items: any[];


    current_Item: any,
    current_Scan_Loading_State: boolean,
    current_Item_Scan_Success: boolean


}

const initialState: todo__State_Interface = {
  api_Inovocation_Status: '',
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
  isComplete: false,

  scan_Items: [],

  current_Item: {},
  current_Scan_Loading_State: false,
  current_Item_Scan_Success: false,
};

const initial_State0 = initialState;






const scan_Slice = createSlice({
    name: 'scan_Slice',
    initialState,
    reducers: {

        // WHEN YOU ARE ONLINE CLEAR EVERYTHING AS WE WILL ONLY NEED USERID TO GET USER INFORMATION. // added 11th December,2021...
    },
    extraReducers: builder => {},
});

// password_Update_response

export const {



} = scan_Slice.actions;

export const select_logger_person_data = (state: RootState) =>
    state.scan_Reducer;




export const current_Scan_Loading_State_State = (state: RootState) => state.scan_Reducer.current_Scan_Loading_State;

export const current_Item_Scan_Success_success = (state: RootState) => state.scan_Reducer.current_Item_Scan_Success;



export default scan_Slice.reducer;

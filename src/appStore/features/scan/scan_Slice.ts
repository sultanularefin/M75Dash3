import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RootState} from '../../app/store';
import {baseInterface} from '../../../interfaces/baseInterface.ts';
import {edit_todo_item_payload_interface} from '../../../interfaces/todo/todo_interfaces.ts';
import {
  Code,
  CodeType,
} from 'react-native-vision-camera/src/types/CodeScanner.ts';
import {old_scan_result_data_interface} from '../../../interfaces/scan/scan_interfaces.ts';

export interface todo__State_Interface extends baseInterface {
  scan_Items: old_scan_result_data_interface[];

  current_Item: Code[];
  scanning_state: boolean;
  current_Item_Scan_Success: boolean;
}

const initialState: todo__State_Interface = {
  api_Inovocation_Status: '',
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
  isComplete: false,

  scan_Items: [],

  current_Item: [],
  scanning_state: true,
  current_Item_Scan_Success: false,
};

const initial_State0 = initialState;

const update_scanning_state_2 = (
  state: any,
  action: PayloadAction<boolean>,
) => {
  if (action.payload) {
    state.scanning_state = true;
    state.current_Item_Scan_Success = false;
  } else {
    state.scanning_state = false;
    state.current_Item_Scan_Success = false;
  }
};

const get_all__scan__items_2 = (state: any, action: PayloadAction<boolean>) => {
  // state.todo_loading_state = false;
  // const temp_up__Voter_Full_Name_String: string = action.payload;
};

const delete_all_scan_items_2 = (
  state: any,
  action: PayloadAction<boolean>,
) => {
  state.scan_Items = [];
  state.current_Item = [];
};

const current_scan_result_found_and_update_2 = (
  state: any,
  action: PayloadAction<Code[]>,
) => {
  const found_Code: Code[] = action.payload;

  console.log('found_Code: ', found_Code);

  const new_scan_item: old_scan_result_data_interface = {
    type: found_Code[0]?.type,
    value: found_Code[0]?.value,
  };

  const old_items_temp = state.scan_Items;


  if(old_items_temp.length > 0) {

    old_items_temp.unshift(new_scan_item);
    state.scan_Items = old_items_temp;

  }
  else{
    old_items_temp.push(new_scan_item);
    state.scan_Items = old_items_temp;
  }






  state.current_Item = found_Code;

  state.scanning_state = false;
  state.current_Item_Scan_Success = true;
};

const scan_Slice = createSlice({
  name: 'scan_Slice',
  initialState,
  reducers: {
    current_scan_result_found_and_update:
      current_scan_result_found_and_update_2,
    delete_all_scan_items: delete_all_scan_items_2,
    get_all_scan_items: get_all__scan__items_2,
    update_scanning_state: update_scanning_state_2,
  },
  extraReducers: builder => {},
});

export const {
  current_scan_result_found_and_update,
  delete_all_scan_items,
  get_all_scan_items,
  update_scanning_state,
} = scan_Slice.actions;

export const select_logger_person_data = (state: RootState) =>
  state.scan_Reducer;

export const current_scanning_state_State = (state: RootState) =>
  state.scan_Reducer.scanning_state;

export const current_Item_Scan_Success_success = (state: RootState) =>
  state.scan_Reducer.current_Item_Scan_Success;

export const current_Item_When_Scan_Succeeded = (state: RootState) =>
  state.scan_Reducer.current_Item;

export const all_items_where_scan_worked = (state: RootState) =>
  state.scan_Reducer.scan_Items;

export default scan_Slice.reducer;

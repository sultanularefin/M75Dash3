import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RootState} from '../../app/store';
import {baseInterface} from '../../../interfaces/baseInterface.ts';
import {
  edit_todo_item_payload_interface,
  one_todo_read_response_interface,
  read_one_todo_payload_interface,
  TodoItem,
  user_todo_item_payload_interface,
} from '../../../interfaces/todo/todo_interfaces.ts';

export interface todo__State_Interface extends baseInterface {
  items: TodoItem[];
  todo_loading_state: boolean;

  new_to_do: TodoItem;
  editing_todo_item: TodoItem;
}

const initialState: todo__State_Interface = {
  api_Inovocation_Status: '',
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
  isComplete: false,

  items: [],
  todo_loading_state: false,

  new_to_do: {} as TodoItem,
  editing_todo_item: {} as TodoItem,
};

const initial_State0 = initialState;

const update_edit_page_with_indexed_note_2 = (
  state: any,
  action: PayloadAction<number>,
) => {
  const old_todo_items_temp = state.items;

  state.editing_todo_item = old_todo_items_temp[action.payload];
  state.todo_loading_state = false;
};

const remove_all_todos_2 = (state: any, action: PayloadAction<boolean>) => {
  state.items = [];
  state.todo_loading_state = false;
};

const read_one_todo_by_id_2 = (
  state: any,
  action: PayloadAction<read_one_todo_payload_interface>,
) => {
  const old_todo_items_temp = state.items;

  // state.todo_loading_state = true;

  state.items = old_todo_items_temp.filter(
    (one_todo: TodoItem) => one_todo.id !== action.payload.todo_id,
  ); // put here thus

  state.todo_loading_state = false;

  // return 1;
};

const edit_indexed_editing_note_2 = (
  state: any,
  action: PayloadAction<edit_todo_item_payload_interface>,
) => {
  const input: edit_todo_item_payload_interface = action.payload;

  // const old_todo_items_temp = state.items;


  let editing_index_todo_TEMP = state.editing_todo_item;

  const date3 = new Date().toLocaleString('en-US', {timeZone: 'Asia/Dhaka'});

  editing_index_todo_TEMP = {
    ...editing_index_todo_TEMP,
    [input.key]:
      input.input_type === 'text' ? input.value_string : input.value_boolean,
    edit_date: date3,
    id: input.id,
  };

  state.editing_todo_item = editing_index_todo_TEMP;
};

const update_current_new_note_2 = (
  state: any,
  action: PayloadAction<user_todo_item_payload_interface>,
) => {
  const input: user_todo_item_payload_interface = action.payload;
  const old_todo_items_temp = state.items;

  let new_todo_TEMP = state.new_to_do;
  // {new Date(todo_edit_date).toLocaleString('en-IN',{timeZone: 'Asia/Dhaka'})}
  const date3 = new Date().toLocaleString('en-US', {timeZone: 'Asia/Dhaka'});

  new_todo_TEMP = {
    ...new_todo_TEMP,
    [input.key]:
      input.input_type === 'text' ? input.value_string : input.value_boolean,
    edit_date: date3,
    id: old_todo_items_temp.length,
  };

  state.new_to_do = new_todo_TEMP;
};

const update_edited_notes_to_store = (
  state: any,
  action: PayloadAction<number>,
) => {
  const editing_item_index = action.payload;

  let old_todo_items_temp = state.items;

  const editing_note_item = state.editing_todo_item;

  console.log("editing_item_index   (0): ",editing_item_index);
  console.log("old_todo_items_temp  (0): ",old_todo_items_temp);



  old_todo_items_temp[editing_item_index] = {...editing_note_item}; // .concat(editing_note_item);

  console.log("editing_item_index: (1)",editing_item_index);
  console.log("old_todo_items_temp: (1)",old_todo_items_temp);


  state.items = old_todo_items_temp;

  state.editing_todo_item = {} as TodoItem;
};
const save_new_todo_item_to_store = (
  state: any,
  action: PayloadAction<boolean>,
) => {
  const old_todo_items_temp = state.items;

  const new_todo_Temp = state.new_to_do;

  state.items = old_todo_items_temp.concat(new_todo_Temp);

  state.new_to_do = {} as TodoItem;
};

const clear_editing_note_2 = (state: any, action: PayloadAction<boolean>) => {
  state.editing_todo_item = {} as TodoItem;
};
const clear_new_todo_2 = (state: any, action: PayloadAction<boolean>) => {
  state.new_to_do = {} as TodoItem;
};

const populate_items_to_empty_array_2 = (
  state: any,
  action: PayloadAction<null>,
) => {
  state.items = [];
  state.todo_loading_state = false;
};

const populate_items_2 = (state: any, action: PayloadAction<TodoItem[]>) => {
  state.items = action.payload;
  state.todo_loading_state = false;
};

const get_All_Logger__todos2 = (state: any, action: PayloadAction<boolean>) => {
  state.todo_loading_state = false;
  // const temp_up__Voter_Full_Name_String: string = action.payload;
};

const todo_Slice = createSlice({
  name: 'todo_Slice',
  initialState,
  reducers: {
    logout10: state => {
      console.log('--rpg');
      // From here we can take action only at this "counter" state
      // But, as we have taken care of this particular "logout" action
      // in rootReducer, we can use it to CLEAR the complete Redux Store's state
    },

    // FOR LOGOUT
    clearState: state => {
      const returnedTarget = Object.assign(state, initial_State0);
      return returnedTarget;
    },

    get_All_Logger__todos: get_All_Logger__todos2,
    populate_items_1: populate_items_2,

    populate_items_to_empty_array: populate_items_to_empty_array_2,
    clear_new_todo_1: clear_new_todo_2,
    save_new_note_to_store_1: save_new_todo_item_to_store,
    update_current_new_note: update_current_new_note_2,

    // remove 1 and more begins here
    read_one_todo_by_id: read_one_todo_by_id_2,
    remove_all_todos: remove_all_todos_2,
    // remove 1 and more ends here

    // edit related begins here
    edit_indexed_editing_note: edit_indexed_editing_note_2,
    update_edit_page_with_indexed_note: update_edit_page_with_indexed_note_2,
    clear_editing_note: clear_editing_note_2,

    update_edited_notes_to_store_1: update_edited_notes_to_store,
    // edit related ends here

    // WHEN YOU ARE ONLINE CLEAR EVERYTHING AS WE WILL ONLY NEED USERID TO GET USER INFORMATION. // added 11th December,2021...
  },
  extraReducers: builder => {},
});

// password_Update_response

export const {
  clearState,
  logout10,
  get_All_Logger__todos,
  populate_items_1,
  populate_items_to_empty_array,

  clear_new_todo_1,
  update_current_new_note,
  save_new_note_to_store_1,

  // remove 1 and more begins here
  read_one_todo_by_id,
  remove_all_todos,
  // remove 1 and more ends here

  // edit related begins here
  edit_indexed_editing_note,
  update_edit_page_with_indexed_note,
  clear_editing_note,
  update_edited_notes_to_store_1,
  // edit related ends here
} = todo_Slice.actions;

export const select_logger_person_data = (state: RootState) =>
  state.todo_Reducer;
export const all_todo_Items = (state: RootState) => state.todo_Reducer.items;
export const todo_loading_state = (state: RootState) =>
  state.todo_Reducer.todo_loading_state;

export const new_todo = (state: RootState) => state.todo_Reducer.new_to_do;
export const editing_to_do_item = (state: RootState) =>
  state.todo_Reducer.editing_todo_item;

export default todo_Slice.reducer;

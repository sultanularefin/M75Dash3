



export interface TodoItem {
    id: number;
    title: string;
    content: string;
    isCompleted: boolean;
    edit_date: string
}


interface TodoList {
    items: TodoItem[];
}

export interface edit_todo_item_payload_interface{

    key: string,
    value_string: string,
    value_boolean: boolean,

    input_type: string,
    id: number,

}

export interface user_todo_item_payload_interface{

    key: string,
    value_string: string,
    value_boolean: boolean,

    input_type: string,
    // id: number,

}


export interface read_one_todo_payload_interface {
    todo_id: number,
    // logger_ID: number,
    index: number,
}



export interface one_todo_read_response_interface {
    success: boolean
    index: number,
    todo_id: number,

}

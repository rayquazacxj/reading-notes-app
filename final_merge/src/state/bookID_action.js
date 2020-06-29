export function set_current_bookID(id) {
    return {
        type: '@BOOKID/SET_CURRENT_ID',
        currentID:id
    };
}


export function book_name_state_change(val) {
    return {
        type: '@BOOK_NAME/BK_NAME_STATE_CHANGE',
        bookNameChange:val
       
    };
}
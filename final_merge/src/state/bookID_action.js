export function set_current_bookID(id) {
    return {
        type: '@BOOKID/SET_CURRENT_ID',
        currentID:id
    };
}
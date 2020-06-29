const initCurrentID = {
    currentID:1
};

export function CurrentID(state = initCurrentID, action) {
    switch (action.type) {
        case '@BOOKID/SET_CURRENT_ID':
            return {
                ...state,
                currentID:action.currentID
            }

        default:
            return state;
    }
}


const initBkNameState = {
    bookNameChange:false
};

export function BookName(state = initBkNameState, action) {
    switch (action.type) {
        case '@BOOK_NAME/BK_NAME_STATE_CHANGE':
            return {
                ...state,
                bookNameChange:action.bookNameChange
            }

        default:
            return state;
    }
}
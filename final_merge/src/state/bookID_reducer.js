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
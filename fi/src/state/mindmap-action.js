export function set_connect_candidate(candidate) {
    return {
        type: '@MINDMAP_CONNECT/SET_CONNECT_CANDIATES',
        candidate
    };
}
export function update_connectSet() {
    return {
        type: '@MINDMAP_CONNECT/UPDATE_CONNECTSET',
    };
}

export function init_connectSet(init_connectSet_) {
    return {
        type: '@MINDMAP_CONNECT/INIT_CONNECTSET',
        init_connectSet:init_connectSet_
    };
}


export function update_mindmapItemNum() {
    return {
        type: '@MINDMAP_INFO/UPDATE_ITEMNUM',
       
    };
}






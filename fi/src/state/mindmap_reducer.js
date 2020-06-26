const initMindMapState = {
    selectedKey1:0,
    selectedKey2:0,
    selectNum:0,
    connectSet:[]
};

export function ConnectMindmapItem(state = initMindMapState, action) {
    switch (action.type) {
        case '@MINDMAP_CONNECT/SET_CONNECT_CANDIATES':
            return {
                ...state,
                selectedKey2: state.selectedKey1,
                selectedKey1: action.candidate,
                selectNum:    state.selectNum+1
            }
        
        case '@MINDMAP_CONNECT/UPDATE_CONNECTSET':
            if(state.selectedKey1 == state.selectedKey2){
                return{
                    ...state,
                    selectedKey2: null,
                    selectNum:    1
                }
            }
            

            let newConnect = [state.selectedKey1 , state.selectedKey2]
            return {
                ...state,
                connectSet: [...state.connectSet, newConnect],
                selectedKey2: null,
                selectedKey1: null,
                selectNum:    0
               
            };
        
        default:
            return state;
    }
}

const initMindMapInfo = {
    mindmapItemNum:0,
    data:[]
};

export function MindmapInfo(state = initMindMapInfo, action) {
    switch (action.type) {
        case '@MINDMAP_INFO/UPDATE_ITEMNUM':
            return {
                ...state,
                mindmapItemNum: state.mindmapItemNum+1,    
            }  
           
        default:
            return state;
    }
}


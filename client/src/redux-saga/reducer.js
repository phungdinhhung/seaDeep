const defaultState = {
    user: {
        roleUser: [],
    },
    isLogedIn: false,
};

export const reducer = function (state = defaultState, action) {
    switch (action.type) {
        case "UPDATE_SESSION":
            state.isLogedIn = true;
            state.user = action.payload;
            return { ...state };
        case "UPDATE_AUTHENTICATION":
            state.isLogedIn = action.payload;
            return { ...state };
        case "CLEAR_SESSION":
            state.isLogedIn = false;
            state.user = {
                roleUser: [],
            };
            return { ...state };
        // case "UPDATE_CURRENT_DELETED_ITEM":
        //     state.currentDeletedItem = action.payload;
        //     return { ...state };
        // case "UPDATE_THEME":
        //     state.theme = action.payload;
        //     return { ...state };
        // case "UPDATE_GROUP_FORM":
        //     state.group = action.payload;
        //     return { ...state };
        // case "UPDATE_COUNCIL_FORM":
        //     state.council = action.payload;
        //     return { ...state };
        default:
            return state;
    }
};

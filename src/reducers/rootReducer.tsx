import { ADD_GROUP } from "../actions/action-types";
import { Group } from "../models/group";

interface IState { 
    groups: Group[] 
};

export interface IAction {
    type: string,
    payload: any
}

const initialState: IState = {
    groups: []
};

function rootReducer(state: IState = initialState, action: IAction) {
    switch(action.type) {
        case ADD_GROUP:
            return Object.assign({}, state, {groups: state.groups.concat(action.payload)});
        default:
            return state;
    }
}

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
import { Group } from "../models/group";
import { ADD_GROUP } from "./action-types";

export function addGroup(payload: Group) {
    return { type: ADD_GROUP, payload};
}

import { Group } from "../models/group";

// todo: give store actual type
export const getGroupsState = (store: any): Group[] => store.groups;

export const getGroupById = (store: any, id: string): Group | undefined => getGroupsState(store).find((group: Group) => group.id === id);

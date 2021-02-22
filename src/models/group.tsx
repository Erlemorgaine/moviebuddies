import { Show } from "./show";
import { v4 as uuidv4 } from 'uuid';

export class GroupMember {
    id!: number;
    email: string;
    name: string = '';
    shows: Show[] = [];
    avatar: string = '';

    constructor(email: string) {
        this.email = email;
    }
}

export class Group {
    id: string;
    name: string;
    members: GroupMember[];

    constructor(name: string, memberEmails: string[] = []) {
        this.id = uuidv4();
        this.name = name;
        this.members = this.createMembersFromEmails(memberEmails);
    }

    private createMembersFromEmails(emails: string[]): GroupMember[] {
        return emails.map((email) => new GroupMember(email))
    }
}
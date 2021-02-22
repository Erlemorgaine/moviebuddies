import React, { FormEvent, useState, ChangeEvent, KeyboardEvent } from 'react';
import { connect } from 'react-redux';
import Input from '../components/Input';
import { Group } from "../models/group";
import { addGroup } from "../actions/actions";
import { IAction } from "../reducers/rootReducer";
import { useHistory } from 'react-router-dom';

type AddGroupPageProps = {
    addGroup: (payload: Group) => IAction;   
}

function AddGroupPage(props: AddGroupPageProps) {
    const history = useHistory();

    const [name, setName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [memberEmails, setMemberEmails] = useState<string[]>([]);

    /**
     * Replaces the old email value with the updated email value
     * @param event 
     * @param emailIndex 
     */
    function onEmailChange(event: ChangeEvent<HTMLInputElement>, emailIndex: number): void {
        setMemberEmails(oldEmails => [...oldEmails.slice(0, emailIndex), event.target.value, ...oldEmails.slice(emailIndex + 1)]);
    }

    // todo: also fire on pressing a plus button
    function addNewEmail(event?: KeyboardEvent<HTMLInputElement>): void {
        if (!!event && event.key === 'Enter') {
            setMemberEmails(oldEmails => [...oldEmails, (event.target as HTMLInputElement).value]);
            setNewEmail('');
        }
    }

    function handleSubmit(event: FormEvent) {
        if (!!name && memberEmails.length !== 0) {
            const newGroup = new Group(name, memberEmails);
            props.addGroup(newGroup);
            history.push(`/group/${newGroup.id}`);
        } else {
            // todo: show validation
        }
    }

    return <form>
        <Input id={'groupName'} label={'Group name'} value={name} onChange={(e) => setName(e.target.value)}></Input>
        { memberEmails.map((email, i) => {
            return <Input key={'email' + i} id={'email' + i} value={email} onChange={(e) => onEmailChange(e, i)}></Input>   
        }) }
        <Input id={'newEmail'} value={newEmail} onChange={(e) => setNewEmail(e.target.value)} onKeyUp={addNewEmail}></Input>
        <button type="button" onClick={handleSubmit}>Create your group and invite the members</button>
    </form>;
}

export default connect(null, { addGroup })(AddGroupPage);
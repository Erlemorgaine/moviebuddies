import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getGroupById } from '../selectors/selectors';


function GroupPage() {
    const { groupId } = useParams<{ groupId: string }>();
    const group = useSelector(state => getGroupById(state, groupId));

    return <div>
        { group?.id }
    </div>;
}

export default GroupPage;
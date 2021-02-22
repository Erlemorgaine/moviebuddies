import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return <div>
        <Link to="/group">Make a group</Link>
    </div>;
}

export default HomePage;
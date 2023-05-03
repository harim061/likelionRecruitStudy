import React from 'react';
import { useParams, Outlet, Link } from 'react-router-dom';
import { users } from '../../db';

function User() {
    const { userId } = useParams();
    return (
        <h1>
            user {userId} : {users[Number(userId) - 1].name}
            <Link to="./followers">see</Link>
            <Outlet
                context={{ nameOfMyUser: users[Number(userId) - 1].name }}
            />
        </h1>
    );
}

export default User;

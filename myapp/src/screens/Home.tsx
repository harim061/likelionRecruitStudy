import { Link, useSearchParams } from 'react-router-dom';
import { users } from '../db';
import { useState } from 'react';
function Home() {
    const [readSearchParmas, setSearchParams] = useSearchParams();

    console.log(readSearchParmas.get('geto'));
    setTimeout(() => {
        setSearchParams({
            day: 'today',
            tomorrrow: '123',
        });
    });
    return (
        <h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link to={`/users/${user.id}`}>{user.name}</Link>
                    </li>
                ))}
            </ul>
        </h1>
    );
}

export default Home;

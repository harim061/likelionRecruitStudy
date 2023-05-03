import { Link, useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    const onClick = () => {
        navigate('/about');
    };
    return (
        <header>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/about'}>about</Link>
                </li>
                <button onClick={onClick}></button>
            </ul>
        </header>
    );
}

export default Header;

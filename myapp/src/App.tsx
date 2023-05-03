import { useState } from 'react';

function App() {
    const [value, setValue] = useState('');

    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        // console.log(event.currentTarget.value);
        const {
            currentTarget: { value },
        } = event;
        setValue(value);
    };

    const onSubmit = (event: React.FormEvent<HTMLElement>) => {
        event.preventDefault();
        console.log('hello', value);
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    onChange={onChange}
                    value={value}
                    placeholder="username"
                />
                <button>Login</button>
            </form>
        </div>
    );
}

export default App;

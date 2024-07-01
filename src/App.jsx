import './styles.css';

import { Landing } from './components/landing/Landing.tsx';
import { UsersList } from './components/UsersList.tsx';

function App() {
    return (
        <main>
            <Landing />
            <UsersList />
        </main>
    );
}

export default App;

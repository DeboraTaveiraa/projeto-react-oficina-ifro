import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import MyRoutes from './routes/MyRoutes';

function App() {
    return (
        <>
            <Provider>
                <BrowserRouter>
                    <MyRoutes/>
                </BrowserRouter>
            </Provider>
        </>
    )
}

export default App;



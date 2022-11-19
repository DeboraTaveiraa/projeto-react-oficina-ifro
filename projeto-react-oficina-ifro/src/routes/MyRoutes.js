import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Main from '../layout/Main';

export default() => {
    return (
        <Routes>
            <Route element={<Main Page={Home}></Main>} path="/" />
        </Routes>
    )
}
import { Route, Routes } from 'react-router-dom'
import HomeView from './components/HomeView'
import Form from './components/Form'

function AppRouter() {
    return (
        <Routes>
            <Route path='/' element={<HomeView/>} />
            <Route path='/Form' element={<Form/>}/>
            <Route path='*' element={<h1 style={{margin: '300px 100px 100px 590px'}}>Not Found</h1>} />
        </Routes>
    );
};

export default AppRouter;
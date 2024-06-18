import { Route, Routes } from 'react-router-dom'
import HomeView from './components/HomeView'
import FormHospital from './components/FormHospital'

function AppRouter() {
    return (
        <Routes>
            <Route path='/' element={<HomeView/>} />
            <Route path='/FormHospital' element={<FormHospital/>}/>
            <Route path='*' element={<h1 style={{margin: '300px 100px 100px 590px'}}>Not Found</h1>} />
        </Routes>
    );
};

export default AppRouter;
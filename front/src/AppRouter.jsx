import { Route, Routes } from 'react-router-dom'
import Lead from './components/forms/leadInfo'
import Hospitaldd1 from './components/forms/hospitalInfo1'
import Hospitaldd2 from './components/forms/hospitalInfo2'
import Tabela from './components/forms/tabela'

function AppRouter() {
    return (
        <Routes>
            <Route path='/' element={<Lead/>} />
            <Route path='/hospital1' element={<Hospitaldd1/>}/>
            <Route path='/hospital2' element={<Hospitaldd2/>}/>
            <Route path='/tabela' element={<Tabela/>}/>
            <Route path='*' element={<h1 style={{margin: '300px 100px 100px 590px'}}>Not Found</h1>} />
        </Routes>
    )
}

export default AppRouter;

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeView from './views/HomeView'
import AppLayout from './layouts/AppLayout'
import CategoryView from './views/CategoryView'

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<AppLayout />}>
                <Route path='/' element={<HomeView />} index />
                <Route path='/category/:categoryId' element={<CategoryView />} index />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

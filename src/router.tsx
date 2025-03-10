import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeView from './views/HomeView'
import AppLayout from './layouts/AppLayout'
import CategoryView from './views/CategoryView'
import SubcategoryView from './views/SubcategoryView'
import ProductView from './views/ProductView'

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<AppLayout />}>
                <Route path='/' element={<HomeView />} index />
                <Route path='/category/:categoryId' element={<CategoryView />} />
                <Route path='/category/:categoryId/subcategory/:subcategoryId' element={<SubcategoryView />} />
                <Route path='/category/:categoryId/subcategory/:subcategoryId/product/:productId' element={<ProductView />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

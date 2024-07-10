import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from '../pages/Home'
import History from '../pages/History'
import DefaultLayout from '../layouts/DefaultLayout'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<DefaultLayout/>}>
                <Route path="/" element={<Home />} />
                <Route path="/history" element={<History />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router
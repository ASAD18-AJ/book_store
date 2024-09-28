import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import AllBooks from './pages/AllBooks'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import SignUp from './pages/SignUp'
import LogIn from './pages/Login'
import Cart from './pages/Cart'
import Profile from './pages/Profile'
import ViewBookDetails from './components/ViewBookDetails/ViewBookDetails'

function App() {
  

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='all-books' element={<AllBooks/>} />
        <Route path='cart' element={<Cart />} />
        <Route path='profile' element={<Profile />} />
        <Route path='SignUp' element={<SignUp/>} />
        <Route path='LogIn' element={<LogIn />} />
        <Route path='view-book-details/:id' element={<ViewBookDetails/>} />
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App

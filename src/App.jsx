import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import News from './components/News';
import NewsDetail from './components/NewsDetail';
import Notes from './components/Notes';
import Comments from './components/Comments';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Share from './components/Share';
import ShareDetails from './components/ShareDetails';
import Signup from './components/Signup';
import Login from './components/Login';
import ShowNavbar from './components/Show/ShowNavbar';
import ShowFooter from './components/Show/ShowFooter';
import Profile from './components/Profile';
import Changepassword from './components/Changepassword';
import Forgotpassword from './components/ForgotPassword';
import Wishlist from './components/Wishlist';
import Signupemail from './components/Signupemail'
import UserState from './Context/UserState'

function App() {
  return (
    <UserState>
    <Router>
      <ShowNavbar>
      <Nav />
      </ShowNavbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path='/news/:title' element={<NewsDetail />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/PriceAndAnalysis' element={<Share />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/share/:id' element={<ShareDetails  />} />
        <Route path='/changePassword' element={<Changepassword  />}/>
        <Route path='/forgotPassword' element={<Forgotpassword  />}/>
        <Route path='/signupwithemail' element={<Signupemail />} />
        <Route path='/comments' element={<Comments />} />

      </Routes>
      <ShowFooter>
      <Footer />
      </ShowFooter>
    </Router>
    </UserState>
  );
}

export default App; 

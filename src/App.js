import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Blogs from './components/Blogs';
import AboutUs from './components/AboutUs';
import CustomSearch from './components/CustomSearch';
import RecentlyAnswered from './components/RecentlyAnswered';
import RecentlyAsked from './components/RecentlyAsked';
import TopUpvoted from './components/TopUpvoted';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';


function App() {
  var serviceUrl;
  if (window.location.href.includes('localhost')) {
    serviceUrl = 'http://localhost:8080';
  } else {
    serviceUrl = 'https://famous-website-backend-dot-famouswebsitereact.uc.r.appspot.com';
  }
  return (
    <div id = "main_div">
      <Navigation />
      <Routes>
        <Route exact path='/' component={Home} element={<Home serviceUrl={serviceUrl}/>}/>
        <Route path='/Home' component={Home} element={<Home serviceUrl={serviceUrl}/>}/>
        <Route path='/Blogs' component={Blogs} element={<Blogs />}/>
        <Route path='/AboutUs' component={AboutUs} element={<AboutUs />}/>
        <Route path='/RecentlyAsked' component={RecentlyAsked} element={<RecentlyAsked serviceUrl={serviceUrl}/>}/>
        <Route path='/TopUpvoted' component={TopUpvoted} element={<TopUpvoted />}/>
        <Route path='/RecentlyAnswered' component={RecentlyAnswered} element={<RecentlyAnswered />}/>
        <Route path='/CustomSearch' component={CustomSearch} element={<CustomSearch />}/>
      </Routes>
    </div>
  );
}

export default App;

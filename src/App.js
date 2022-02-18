import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import { Form } from 'react-bootstrap';
import Blogs from './components/Blogs';
import AboutUs from './components/AboutUs';
import CustomSearch from './components/CustomSearch';
import RecentlyAnswered from './components/RecentlyAnswered';
import RecentlyAsked from './components/RecentlyAsked';
import TopUpvoted from './components/TopUpvoted';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';


function App() {
  return (
    <div id = "main_div">
      <Navigation />
      <Routes>
        <Route exact path='/Home' component={Home} element={<Home />}/>
        <Route path='/Blogs' component={Blogs} element={<Blogs />}/>
        <Route path='/AboutUs' component={AboutUs} element={<AboutUs />}/>
        <Route path='/RecentlyAsked' component={RecentlyAsked} element={<RecentlyAsked />}/>
        <Route path='/TopUpvoted' component={TopUpvoted} element={<TopUpvoted />}/>
        <Route path='/RecentlyAnswered' component={RecentlyAnswered} element={<RecentlyAnswered />}/>
        <Route path='/CustomSearch' component={CustomSearch} element={<CustomSearch />}/>
      </Routes>
      <Home />
    </div>
  );
}

export default App;

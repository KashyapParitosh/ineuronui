import './App.css';
import Footer from './components/footer-sec/footer';
import Nav from './components/nav-sec/nav';
import SearchBar from './components/search-sec/search'
import BannerCard from './components/banner-sec/banner'
import ExploreSec from './components/explore-sec/explore'

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <SearchBar></SearchBar>
      <BannerCard></BannerCard>
      <ExploreSec></ExploreSec>
       <Footer></Footer>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Home/Navbar/Navbar';
import Banner from './Pages/Home/Banner/Banner';
import OffSection from './Pages/Home/OffSection/OffSection';
import BackSection from './Pages/Home/BackSection/BackSection';
import Newsletter from './Pages/Home/BackSection/Newsletter/Newsletter';

function App() {
  return (
    <div>

      <Navbar></Navbar>
      <Banner></Banner>
      <OffSection></OffSection>
      <BackSection></BackSection>
      <Newsletter></Newsletter>

    </div>
  );
}

export default App;

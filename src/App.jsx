import './App.css'
import About from './Components/About/About'
import Banner from './Components/Banner/Banner'
import Courses from './Components/Courses/Courses'
import Discount from './Components/Discount/Discount'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Media from './Components/Media/Media'
import Profile from './Components/Profile/Profile'
import Subscribe from './Components/Subscribe/Subscribe'
import Testimoni from './Components/Testimoni/Testimoni'


function App() {

  return (
    <div className='font-poppins tracking-normal'>
      <Header></Header>
      <Banner></Banner>
      <Media></Media>
      <Discount></Discount>
      <Profile></Profile>
      <Courses></Courses>
      <About></About>
      <Subscribe></Subscribe>
      <Testimoni></Testimoni>
      <Footer></Footer>
    </div>
  )
}

export default App

import './App.css'
import Banner from './Components/Banner/Banner'
import Courses from './Components/Courses/Courses'
import Discount from './Components/Discount/Discount'
import Header from './Components/Header/Header'
import Media from './Components/Media/Media'
import Profile from './Components/Profile/Profile'
import Testimoni from './Components/Testimoni/Testimoni'


function App() {

  return (
    <div className='font-poppins tracking-wide'>
      <Header></Header>
      <Banner></Banner>
      <Media></Media>
      <Discount></Discount>
      <Profile></Profile>
      <Courses></Courses>
      <Testimoni></Testimoni>
    </div>
  )
}

export default App

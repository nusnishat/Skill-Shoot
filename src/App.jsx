import './App.css'
import Banner from './Components/Banner/Banner'
import Discount from './Components/Discount/Discount'
import Header from './Components/Header/Header'
import Media from './Components/Media/Media'
import Profile from './Components/Profile/Profile'


function App() {

  return (
    <div className='font-poppins tracking-wide'>
      <Header></Header>
      <Banner></Banner>
      <Media></Media>
      <Discount></Discount>
      <Profile></Profile>
    </div>
  )
}

export default App

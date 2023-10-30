import './App.css'
import BuyAndTrade from './components/BuyAndTrade/BuyAndTrade'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import PartnerSection from './components/Partner/Partner'
import Tools from './components/Tools/Tools'
import Trendings from './components/Trendings/Trendings'
import Waitlist from './components/Waitlist/Waitlist'

function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <Trendings/>
    <BuyAndTrade/>
    <PartnerSection/>
    <Waitlist/>
    <Tools/>
    </>
  )
}

export default App

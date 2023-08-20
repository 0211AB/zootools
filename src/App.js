import './App.css'
import BarChart from './components/barchart/BarChart'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Details from './components/details/Details'

const App = () => {
  return (
    <div>
      <Header />
      <BarChart />
      <Hero />
      <Details />
    </div>
  )
}

export default App

import './App.css'
import Navbar from './components/Navbar'
import Btn from './components/Btn'

function App() {


  return (
    <div className='App flex justify-end pt-8 pr-7 h-screen'>
      <div className='heroSection sm:w-full md:w-6/12  flex flex-col justify-start items-center  h-fit'>
        <Navbar className='flex flex-col justify-between ' />

        <h2 className='  text-green-400 z-10 text-3xl text-blue-600 mt-10 text-center'>AI Technologies</h2>
        <h1 className='text-6xl font-bold text-gray-800 mb-0 text-center pb-10 pt-5'>Building Solutions, Creating Impact</h1>
        <h3 className=' sub-title text-green-400 relative bottom-6 z-10  text-3xl text-gray-600 mb-6 text-center'>Towards a Better World Through the Application of Technological Solutions</h3>
        <p className='py-10 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi laborum blanditiis at sapiente rerum ex amet vero iste. Blanditiis modi atque quia quo debitis deleniti illum unde sit temporibus numquam.</p>
        <footer className='flex-row justify-start space-x-4'>
        <Btn text='Learn More'></Btn>
        <Btn text='Regenerate with AI '></Btn>
        </footer>
      </div>
    </div>
  )
}

export default App

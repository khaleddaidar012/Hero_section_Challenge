
import './App.css'
import Navbar from './components/Navbar'
import Btn from './components/Btn'
import AiGenerator from './components/AiGenerator'




function App() {
 // <div className='w-full  block sm:hidden'><AiGenerator text='Regenerate with AI' /></div>


  return (
    <div className='App flex justify-end pt-8 pr-7 h-screen  bg-cover sm:flex-row '>
      <div className='flex sm:hidden lg:flex lg:relative lg:top-[-5%] lg:left-[-10%] lg:flex lg:items-baseline second_box_class sm:absolute sm:top-[40%] sm:left-[40%]'><AiGenerator text='Regenerate with AI' /></div>
      <div className='hheroSection sm:w-full  md:w-6/12 h-full flex flex-col items-center justify-start w-full sm:w-auto sm:order-1'>
        <Navbar className='flex flex-col justify-between ' />
        <h2 className='  text-green-400 z-10 text-3xl text-blue-600 mt-10 text-center'>AI Technologies</h2>
        <h1 className='text-6xl font-bold text-gray-800 mb-0 text-center pb-10 pt-5'>Building Solutions, Creating Impact</h1>
        <h3 className=' sub-title text-green-400 relative bottom-6 z-10  text-3xl text-gray-600 mb-6 text-center'>Towards a Better World Through the Application of Technological Solutions</h3>
        <footer className='flex-row justify-start space-x-4'>
        <img src="/png3.jpg" alt=""  className='z-20 w-20'/>
        <Btn text='Learn More'></Btn>
        <div className='w-full  lg:hidden'><AiGenerator text='Regenerate with AI' /></div>

        </footer>

        
      </div>
      
    </div>
    
  )
}

export default App

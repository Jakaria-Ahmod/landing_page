
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import { ThemeProvider } from './context/ThemeContext'
import { CartProvider } from './context/CartContext'
import Footer from './components/Footer'

function App() {


  return (
    <ThemeProvider>
      <CartProvider>
        <Navbar />
        <main className='min-h-screen'>
          <Outlet />
        </main>
        <Footer />
      </CartProvider>
    </ThemeProvider>
  )
}

export default App

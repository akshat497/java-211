
import { createRoot } from 'react-dom/client'
import App from './App'
import { Header } from './Header'
import { StrictMode } from 'react'
import './index.css'
import { Footer } from './Footer'
import Form from './form/Form'

createRoot(document.getElementById('root')).render(
<>
<StrictMode>
    <App/>
    <Header/>
    <Footer/>
     <Footer/>
      <Footer/>
       <Footer/>
       <Form/>
       <Form/>
    </StrictMode>
    </>
 
)

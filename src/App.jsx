import React from 'react'
import{blueGrey} from "@mui/material/colors"
import{ThemeProvider}from"@mui/material"
import{teal}from"@mui/material/colors"
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import Recipe from './Pages/Recipe'
import ReceipesList from './Pages/ReceipesList'
import {createTheme} from"@mui/material"


const  theme =createTheme({
  palette:{
    primary:{
      main:teal[500],
      dark:teal[700]
    },
    secondary:{
      main:blueGrey[500],
      dark:blueGrey[700]
    }

  } ,
  tyepgraphy:{
    fontFamily:'Roboto,sans-serif'
  }
})
function App() {


  return (
    <ThemeProvider theme={theme}>
   <div className="App">
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' Component={ReceipesList} />
          <Route path='/recipe/:id' Component={Recipe} />
        </Routes>
        </BrowserRouter>
   </div>
   </ThemeProvider>
  )
}
export default App
import { AppBar,  Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@mui/styles'

const useStyles= makeStyles((theme)=>({
    AppBar:{
        backgroundColor:'#fff',
        color:'#333',
        boxShadow: 'none'
    },
    toolbar:{
        display:"flex",
        justifyContent:"space-between"

    },
    navLink:{
        marginLeft:theme.spacing(4),
        textDecoration:'none',
        color:'black',
        "&:hover":{
            color:'#ffab00'
        }
    }
}))

export default function Navbar() {
    const classes= useStyles()
  return (
    <AppBar position='static' className={classes.AppBar}>
        <Toolbar className={classes.toolbar}>
            <Typography variant='h4'>
                Recipe App
            </Typography>
            <Typography variant='h5' component='nav'>
                <Link to='/'className={classes.navLink}>
                Home 
                </Link>
            </Typography>

        </Toolbar>
    </AppBar>
  )
}

import { CardContent, CardMedia, Card,Typography,  } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { recipes } from '../data'
import { useNavigate } from 'react-router-dom'


const useStyles=makeStyles({
    cardList:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        margin:'1em',
        justifyContent:'center',
    },
    card:{
        margin:'1em',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        height:'100%',
         cursor:'pointer',

    },
    CardMedia:{
        borderRadius:'20px',
        margin:'1em 2em',
        height:'350px',
        width:'300px',
       
    },
    cardtitle:{
        textAlign:'center',

    }
})




export default function ReceipesList() {
    const classes = useStyles();
    const navigate=useNavigate();
  return (
    <div>
        <Typography variant='h5' align='center'gutterBottom>
        Recipes
        </Typography>
        
        <div className={classes.cardList}>
            {
                recipes.map((recipe)=>(
                    <Card key={recipe.id}  onClick={()=> navigate(`/recipe/${recipe.id}`)}className={classes.card}>
                        <CardMedia image={recipe.image} title={recipe.title} className={classes.CardMedia}/>
                        <CardContent >
                            <Typography variant='h5'component='h5' className={classes.cardtitle}>
                                {recipe.title}
                            </Typography>
                        </CardContent>
                    </Card>

                ))
            }
        </div>
    </div>
  )
}

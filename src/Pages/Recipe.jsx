import React from 'react'
import { useParams } from 'react-router-dom'
import { recipes } from '../data'
import { Card,CardContent, CardMedia, Container,  Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles=makeStyles((theme) => ({
root:{
    paddingTop:theme.spacing(4),
    paddingBotton:theme.spacing(4)
},
card:{
    padding:theme.spacing(4)
},
CardMedia:{
    padding:'1em 2em',
    height:'150px',
    borderRadius:'100px',

}

}))

export default function Recipe() {
    const classes=useStyles();
    const {id}=useParams()
    const recipe=recipes.find((item) => item.id == id)
  return (
  <Container maxWidth='md' className={classes.root.title}>
    <Card className={classes.card}>
        <CardMedia component='img'image={recipe.image} title={recipe.title} className={classes.CardMedia}/>
        <CardContent>
            <Typography gutterBottom variant="h5"component='h5'style={{textAlign:'center'}}>
                {recipe.title}
            </Typography>
            <Typography variant='h6'component='h6'>
                Ingredient:
            </Typography>
            <Typography variant='body2'color='textSecondary'component='ol'>
                {recipe.ingredients.map((ingredients,index)=> <li key={index}>{ingredients}</li>)}
            </Typography>
            <Typography variant='h6'component='h6'>
                Instruction:
            </Typography>
            <Typography variant='body2'color='textSecondary'component='ol'>
                {recipe.instructions.map((instructions,index)=> <li key={index}>{instructions}</li>)}
            </Typography>
        </CardContent>
    </Card>

  </Container>
  )
}

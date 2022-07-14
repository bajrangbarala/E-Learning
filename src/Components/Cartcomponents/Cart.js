import { Box, Button, Rating } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import PregnantWomanSharpIcon from '@mui/icons-material/PregnantWomanSharp';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    mdcard:{
        borderRadius: "10px"
    },
    mdcon:{
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'start', 
        boxShadow: ' none !important' 
    },
    cardbtn:{
        padding: '12px 27px !important',
        background: '#319D8E !important',
        color: '#fff !important',
        borderRadius: '10px !important',
        fontSize: '12px !important',
        fontWeight: '400 !important',
        textTransform: 'capitalize !important',
    },
    boxcard:{
        display: 'flex', 
        justifyContent: 'space-between'
    },
    box_a:{
        display: 'flex', 
        alignItems: 'center'
    },
    box_b:{
        marginRight: '6px'
    },
    box_c:{
        fontSize: '13px'
    }

});
function Cart({ cardset }) {
const classes = useStyles();
    return (
        <>
            <Box >
                <Card sx={{ boxShadow:'none !important'}}>
                    <CardMedia className={classes.mdcard}
                        component="img"
                        image={cardset.image}
                        alt="green iguana"
                    />
                    <CardContent className={classes.mdcon}>
                        <Box>
                            <Typography gutterBottom variant="h5" component="div">
                                {cardset.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {cardset.sub}
                            </Typography>
                        </Box>
                        <CardActions>
                            <Button className={classes.cardbtn} >
                                Join Now
                            </Button>

                        </CardActions>

                    </CardContent>
                    <Box className={classes.boxcard}>
                        <Box className={classes.box_a}>
                            <SchoolOutlinedIcon className={classes.box_b} /><Typography className={classes.box_c} >19 Courses</Typography>
                        </Box>
                        <Box className={classes.box_a} >
                            <PregnantWomanSharpIcon className={classes.box_b} /><Typography  className={classes.box_c}>25,599 Students</Typography>
                        </Box>
                        <Box className={classes.box_a} >
                            <Rating name="customized-1" max={1} className={classes.box_b} /><Typography className={classes.box_c} >4.8</Typography>

                        </Box>
                    </Box>

                </Card>

            </Box>
        </>
    )
}

export default Cart
import React from 'react'
import { Card, CardContent, Typography, Grid, Container, Box } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';


//{data: {NewConfirmed, NewDeath, NewRecovered, TotalConfirmed, TotalDeaths, TotalRecovered}})

const Cards = ({data: {Global, Date}}) => {

    if(!Date) {
        return 'Loading...';
    }


    //console.log(Date)
    //console.log(Global)
    //console.log(Global.NewConfirmed)

    const { NewConfirmed, NewDeaths, NewRecovered, TotalConfirmed, TotalDeaths, TotalRecovered} = Global



    return (



        <Container maxWidth= {false} className={styles.container}>

            <Grid container justify="center" spacing={3} >



                <Grid item component={Card} className={(styles.card)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>New Recovered Cases</Typography>
                    <Typography variant="h5" component="h2">
                        <CountUp start={0} end={NewRecovered} duration={2.75} separator="," />
                    </Typography>
                    <Typography color="textSecondary"> {Date}</Typography>
                    <Typography variant="body2" component="p">Number of Recovered cases of COVID-19.</Typography>
                </CardContent>
                </Grid>

                <Grid item component={Card} className={(styles.card)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Death</Typography>
                    <Typography variant="h5" component="h2">
                        <CountUp start={0} end={NewDeaths} duration={2.75} separator="," />
                    </Typography>
                    <Typography color="textSecondary"> {Date}</Typography>
                    <Typography variant="body2" component="p">Number of Death cases of COVID-19.</Typography>
                </CardContent>
                </Grid>


            

            <Container maxWidth= {false} className={styles.container2}>
                <Grid item component={Card}>
                    <CardHeader className={(styles.header)}
                        avatar={
                        <Avatar alt="e" src="../../images/2.png" /> 

                        }
                        action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                        }
                        title="Worldwide Overview"
                        subheader= {Date}
                    />
                    <div className={(styles.card2)}>

                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Confirmed</Typography>
                            <Typography variant="h5" component="h2">
                                <CountUp start={0} end={TotalConfirmed} duration={2.75} separator="," />
                            </Typography>
                            <Typography variant="body2" component="p" className={styles.typography_padding}>
                                +
                                <CountUp start={0} end={NewRecovered} duration={2.75} separator="," />
                            </Typography>
                        </CardContent>

                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                            <Typography variant="h5" component="h2">
                                <CountUp start={0} end={TotalRecovered} duration={2.75} separator="," />
                            </Typography>
                            <Typography variant="body2" component="p" className={styles.typography_padding}>
                                +
                                <CountUp start={0} end={NewRecovered} duration={2.75} separator="," />
                            </Typography>
                        </CardContent>

                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Death</Typography>
                            <Typography variant="h5" component="h2">
                                <CountUp start={0} end={TotalDeaths} duration={2.75} separator="," />
                            </Typography>
                            <Typography variant="body2" component="p" className={styles.typography_padding}>
                                +
                                <CountUp start={0} end={NewDeaths} duration={2.75} separator="," />
                            </Typography>
                        </CardContent>

                    </div>        
                </Grid>

            </Container>






            </Grid>
        </Container>

    )
}



export default Cards
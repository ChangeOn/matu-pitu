import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TopBar from './TopBar';
import Contents from './Card';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            height: 700,
            width: 550
        },
        control: {
            padding: theme.spacing(2),
        },
        contents: {
            height: 680,
            width: 550,
            padding: 20,
            outline: 'none',
            border: 'none',
            resize: 'none',
            fontSize: 15,
        }
    })
);

export default function SpacingGrid() {
    const classes = useStyles();

    return (
        // <Grid container justify="center" spacing={3}>
        //     {[0, 1].map((value) => (
        //         <Grid key={value} item>
        //             <Paper className={classes.paper} elevation={3}>
        //                 <textarea className={classes.contents}/>
        //             </Paper>
        //         </Grid>
        //     ))}
        // </Grid>
        <Grid container justify="center" spacing={3}>
            <Grid item>
                <Paper className={classes.paper} elevation={3}>
                    <Contents isOriginal={true} />
                    {/*<div>*/}
                    {/*    <TopBar />*/}
                    {/*    <textarea className={classes.contents}/>*/}
                    {/*</div>*/}
                </Paper>
            </Grid>
            <Grid item>
                <Paper className={classes.paper} elevation={3}>
                    <Contents isOriginal={false} />
                </Paper>
            </Grid>
        </Grid>
    );
}

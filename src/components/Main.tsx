import React, {useState, useEffect} from 'react';
import {Button, Container, CssBaseline, Typography} from '@material-ui/core';
import SpacingGrid from './Form';
import BottomNav from './BottomNav';
import { makeStyles } from '@material-ui/core/styles';

const hanspell = require('hanspell');
const useStyles = makeStyles({
    root: {
        marginTop: '100px',
    },
});

function Main() {
    const [sentence, setSentence] = useState('리랜드는 얼굴 골격이 굵은게,');
    const classes = useStyles();

    const end = () => {
        console.log("// check ends");
    };
    const error = (error: string) => {
        console.error("// hanspell => " + error);
    };

    const checkSpell = () => {
        let daumResults = hanspell.spellCheckByDAUM(sentence ? sentence : "", 10000, 'return', end, error);
        let pnuResults = hanspell.spellCheckByPNU(sentence, 10000, 'return', end, error);
        console.log("daum", daumResults, "pnu", pnuResults);
    }

    return (
        <>
            <CssBaseline/>
            <Container maxWidth='lg'>
                {/*<Typography variant="h3" component="h4" gutterBottom>Matu Pitu(machu picchu)</Typography>*/}
                {/*<Typography variant="h4" gutterBottom>한국어 맞춤법 검사기 lite</Typography>*/}
                <div className={classes.root}>
                    <form id="originalTxt">
                        <SpacingGrid/>
                    </form>
                    <BottomNav checkSpell={checkSpell} />
                </div>
            </Container>
        </>
    );
}

export default Main;
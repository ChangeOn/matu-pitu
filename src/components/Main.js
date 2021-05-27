import React, {useState, useEffect} from 'react';
import {Button, Container, CssBaseline, Typography} from '@material-ui/core';
import SpacingGrid from './Form';
import BottomNav from './BottomNav';

const hanspell = require('hanspell');

function Main() {
    const [sentence, setSentence] = useState('리랜드는 얼굴 골격이 굵은게,');
    const end = () => {
        console.log("// check ends");
    };
    const error = (error) => {
        console.error("// hanspell => " + error);
    };

    const checkSpellD = () => {
        console.log('checkGrammarD', sentence)
        let results = hanspell.spellCheckByDAUM(sentence ? sentence : "", 10000, 'return', end, error);
        console.log('results Daum =>', results);
    };

    const checkSpellP = () => {
        let results = hanspell.spellCheckByPNU(sentence, 10000, 'return', end, error);
        console.log('results PNU =>', results)

    };

    return (
        <>
            <CssBaseline/>
            <Container maxWidth='lg'>
                {/*<Typography variant="h3" component="h4" gutterBottom>Matu Pitu(machu picchu)</Typography>*/}
                {/*<Typography variant="h4" gutterBottom>한국어 맞춤법 검사기 lite</Typography>*/}
                <div className="input-wrapper" style={{marginTop: '10%'}}>
                    <form id="originalTxt">
                        <SpacingGrid />
                    </form>
                    {/*<button onClick={() => setSentence(checkSpellD)}>Daum 서비스로 검사</button>*/}
                    {/*<button onClick={() => setSentence(checkSpellP)}>부산대학교 서비스로 검사</button>*/}
                    <BottomNav />
                </div>
            </Container>
        </>
    );
}

export default Main;
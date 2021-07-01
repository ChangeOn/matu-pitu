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


        let query = "exe file path + cmd options (separated by | )";
        // if (Utils.isWindows()) {
        //     query = ffprobeWinPath + ffprobeOption + path;
        // } else {
        //     query = ffprobeMacPath + ffprobeOption + path;
        // }
        let audioInfo = getExecString(query);
    }

    const getExecString = (query: string) => {
    /*    public String getExecString(String query) throws Exception {
                String[] cmd = org.apache.commons.lang.StringUtils.split(query , "|");
                Process oProcess;
                String inputLine;
                StringBuilder successBuilder = new StringBuilder();
                StringBuilder errorBuilder = new StringBuilder();
                try {
                    oProcess = new ProcessBuilder(cmd).start();
                    BufferedReader stdOut = new BufferedReader(new InputStreamReader(oProcess.getInputStream(), "UTF-8"));
                    BufferedReader stdError = new BufferedReader(new InputStreamReader(oProcess.getErrorStream(), "UTF-8"));
                    while ((inputLine = stdOut.readLine()) != null) {
                        successBuilder.append(inputLine);
                        successBuilder.append("\n");
                    }
                    while ((inputLine = stdError.readLine()) != null) {
                        errorBuilder.append(org.apache.commons.lang.StringUtils.trim(inputLine));
                        errorBuilder.append("\n");
                    }
                } catch (Exception e) {
                    throw new Exception(e.getMessage());
                }
    //		String errorMsg = errorBuilder.toString();
                return successBuilder.toString();
            }*/
        return null;
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
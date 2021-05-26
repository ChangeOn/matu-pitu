import React, {useState, useEffect} from 'react';

const hanspell = require('hanspell');

function Main() {
    const [sentence, setSentence] = useState('리랜드는 얼굴 골격이 굵은게,');
    const end = () => {
        console.log("// check ends");
    };
    const error = (error) => {
        console.error("// hanspell => " + error);
    };

    const checkGrammarD = () => {
        console.log('checkGrammarD', sentence)
        let results = hanspell.spellCheckByDAUM(sentence ? sentence : "", 10000, 'return', end, error);
        console.log('results Daum =>', results);
    };

    const checkGrammarP = () => {
        let results = hanspell.spellCheckByPNU(sentence, 10000, 'return', end, error);
        console.log('results PNU =>',results)

    };

    return (
        <>
            <div>
                <h1>Matu Pitu(machu picchu)</h1>
                <h2>한국어 맞춤법 검사기 lite</h2>
            </div>
            <div>
                <p>원문 : {sentence}</p>
                <button onClick={() => setSentence(checkGrammarD)}>Daum 서비스로 검사</button>
                <button onClick={() => setSentence(checkGrammarP)}>부산대학교 서비스로 검사</button>
            </div>
        </>
    );
}

export default Main;
import React, { useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import wordsToNumbers from 'words-to-numbers';

import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles';

const alanKey = 'd66adf1a3183e71980b97b4126c591102e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(-1);
    const classes = useStyles();

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles, number }) => {
                if( command === 'newHeadlines' ){
                    setNewsArticles(articles);
                    setActiveArticle(-1);
                } else if ( command === 'highlight'){
                    setActiveArticle(( prevActiveAticle ) => prevActiveAticle + 1 );
                } else if ( command === 'open'){
                    const parsedNumber = number.length > 2 ? wordsToNumbers( number, { fuzzy: true } ) : number;
                    const article = articles[parsedNumber - 1];

                    if(parsedNumber > 20){
                        alanBtn().playText('Please try that again.');
                    } else if ( article ){
                        console.log(article.url);
                        window.open(article.url, '_blank');
                        alanBtn().playText('Opening...');
                    }
                }
            }
        })
    },[])
        
    return (
        <div>
            <div className={classes.logoContainer}>
                <img src="data:image/jpeg;base64,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" className={classes.alanLogo} alt="logo" />
            </div>
            <NewsCards articles={newsArticles} activeArticle={activeArticle} />
        </div>
    )
}

export default App;
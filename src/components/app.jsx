import News from './news/news';
import NavBar from './navbar/NavBar';
import { Route, Switch } from 'react-router-dom'
import { useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web'
import wordsToNumbers from 'words-to-numbers'
const alanKey = 'd0a6ee2b29310a5c3fe23f7d41c430fe2e956eca572e1d8b807a3e2338fdd0dc/stage'
const App = () => {
    const [news, setNews] = useState([])
    const [activeArticle, setActiveArticle] = useState(0);

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles, number }) => {
                if (command === 'news') {
                    setNews(articles)
                    setActiveArticle(-1);
                } else if (command === 'highlight') {
                    setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
                } else if (command === 'open') {
                    const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
                    const article = articles[parsedNumber - 1];

                    if (parsedNumber > articles.length) {
                        alanBtn().playText('Please try that again...');
                    } else if (article) {
                        window.open(article.url, '_blank');
                        alanBtn().playText('Opening...');
                    } else {
                        alanBtn().playText('Please try that again...');
                    }
                }
            }
        });
    }, [])
    return (
        <>
            <NavBar />
            <Switch>
                <Route path='/' exact >
                    <News news={news} activeArticle={activeArticle} />
                </Route>
            </Switch>
        </>);
}


export default App;
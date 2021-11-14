import NewSingle from './NewSingle';
import InfoSingle from './infoSingle';
export default function News({ news, activeArticle }) {
    const infoCards = [
        { color: '#00838f', title: 'Latest News (Egypt)', text: 'Give me the latest news ' },
        { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me News about Technology' },
        { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'Tell me about PlayStation 5' },
        { color: '#283593', title: 'News by Sources', info: 'Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me news from Time' },
    ];

    return news.length > 0 ? (
        <div className='row container-fluid'>
            <h5 className='text-center return'>
                You can Say go back to return
            </h5>
            {news.map((item, i) =>
                <NewSingle
                    key={item.url}
                    item={item}
                    i={i}
                    activeArticle={activeArticle}
                />
            )}
        </div>
    ) : (<div>
        <h1 className='text-center'>
            How it Works ?
        </h1>
        <div className="d-flex justify-content-center">
            <div className="row">
                {
                    infoCards.map((item) => (
                        <InfoSingle
                            key={item.color}
                            item={item}
                        />
                    ))
                }
            </div>
        </div>
        <h5 className='my-5 text-center'>
            You can also say <strong>'what does this app do?'</strong> to get Help
        </h5>
    </div>
    )
}

import classNames from 'classnames'
import { useState, useEffect, createRef } from 'react'
export default function NewSingle({ item, i, activeArticle }) {
    const [elRefs, setElRefs] = useState([])
    const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

    useEffect(() => {
        window.scroll(0, 0);

        setElRefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()));
    }, []);

    useEffect(() => {
        if (i === activeArticle && elRefs[activeArticle]) {
            scrollToRef(elRefs[activeArticle]);
        }
    }, [i, activeArticle, elRefs]);
    return (
        <div ref={elRefs[i]} className={classNames('col-md-4 col-sm-6', activeArticle === i ? 'active' : '')}>
            <div className="card" >
                <img src={item.urlToImage} className="card-img-top" alt={item.description} />
                <div className="card-body">
                    <div className='d-flex justify-content-between'>
                        <span className='text-muted'>
                            {new Date(item.publishedAt).toDateString()}
                        </span>
                        <span className='text-muted'>
                            {item.source.name}
                        </span>
                    </div>
                    <h5 className="card-title">{item.title}</h5>
                    <a href={item.url} className="btn btn-secondary">Full Article</a>
                </div>
            </div>
        </div>
    )
}

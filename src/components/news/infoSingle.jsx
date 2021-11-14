import './info.scss'
export default function InfoSingle({ item }) {
    return (
        <div className='col m-3 info' style={{ backgroundColor: item.color }}>
            <h4 className='mb-4'>
                {item.title}
            </h4>
            <p>
                {item.info}
            </p>
            <p>
                Try Saying <strong>{item.text}</strong>
            </p>
        </div>
    )
}

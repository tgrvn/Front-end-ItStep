import './style.scss'

export function Button({ text, event }) {
    return <button onClick={event} className='btn'>{text}</button>
}
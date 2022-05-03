import './style.scss'

export function Input(props) {
    const { type, placeholder, event } = props;

    return <input className='input' type={type} placeholder={placeholder} onChange={event} />
}
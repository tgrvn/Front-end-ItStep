import './style.scss'

export function Input(props) {
    const { type, placeholder } = props;

    return <input className='input' type={type} placeholder={placeholder} />
}
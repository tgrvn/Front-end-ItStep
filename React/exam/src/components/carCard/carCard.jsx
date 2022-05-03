import './style.scss'
import 'animate.css';
import { useNavigate } from 'react-router-dom';


export function Card({ item }) {
    const navigate = useNavigate();

    return <div className='card animate__animated animate__fadeIn' onClick={() => navigate(`/cars/${item.userId}`)}>
        <img src={item.photoData.seoLinkM} alt="" />
        <h3>{item.markName} {item.modelName}</h3>
        <p>{item.USD}</p>
    </div>
}
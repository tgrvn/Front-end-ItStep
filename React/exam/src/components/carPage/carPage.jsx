import './style.scss'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { useNavigate, useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../../contexts/searchContext';

export function CarPage() {
    const { id } = useParams();
    const { getCurrentCar } = useContext(SearchContext);
    const tmp = getCurrentCar(id);
    const navigate = useNavigate();
    const { photoData, markName, modelName, updateDate, subCategoryName, locationCityName, color, autoData } = tmp[0];

    function handlerBack() {
        navigate('/')
    }


    return <div className='car-page-container'>
        <h2>{markName} {modelName}</h2>
        <div className="row">
            <img src={photoData.seoLinkB} alt="" />
            <div className="mini-descr">
                <p>{locationCityName}</p>
                <p>{subCategoryName}</p>
                <p>{autoData.driveName}</p>
                <p>{autoData.fuelName}</p>
                <p>{color.name}</p>
                <p>{autoData.gearboxName}</p>
                <p>{autoData.race}</p>
            </div>
        </div>
        <p className='descr'>{autoData.description}</p>
        <p className='date'>{updateDate}</p>
        <img onClick={handlerBack} src="https://cdn-icons-png.flaticon.com/512/0/340.png" className='back' />
    </div>
}
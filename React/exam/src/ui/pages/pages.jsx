import { useContext } from 'react';
import { FiltersContext } from '../../contexts/fiters';
import { SearchContext } from '../../contexts/searchContext';
import './style.scss'

export function Pages() {
    const { filters } = useContext(FiltersContext);
    const { getAds } = useContext(SearchContext);


    function handleClickPage(event) {
        if (event.target.tagName === 'P') {
            getAds(filters, event.target.textContent);
        }
    }

    return <div className='pages' onClick={handleClickPage}>
        <div className="number"><p>1</p></div>
        <div className="number"><p>2</p></div>
        <div className="number"><p>3</p></div>
        <div className="number"><p>4</p></div>
        <div className="number"><p>5</p></div>
        <div className="number"><p>6</p></div>
        <div className="number"><p>7</p></div>
        <div className="number"><p>8</p></div>
        <div className="number"><p>9</p></div>
    </div>
}
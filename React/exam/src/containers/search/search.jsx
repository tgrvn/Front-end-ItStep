import './style.scss'
import Select from 'react-select'
import Range from 'rc-slider';
import 'rc-slider/assets/index.css';
import { Button } from '../../ui/button/button';
import { Input } from '../../ui/input/input';
import { useContext, useState } from 'react';
import { SearchContext } from '../../contexts/searchContext';
import { FiltersContext } from '../../contexts/fiters';

export function Search() {
    let mark = null;
    let color = null;
    let priceOt = null;
    let priceDo = null;
    const [years, setyears] = useState([2000, 2004]);
    const [engineVol, setengineVol] = useState([1.1, 1.8]);
    const { getAds } = useContext(SearchContext);
    const { setfilters, filters } = useContext(FiltersContext);

    function handlerSearch() {
        const filter = {
            marks: `marka_id[0]=${mark}`,
            years: `s_yers[0]=${years[0]}&po_yers[0]=${years[1]}`,
            engineVol: `engineVolumeFrom=${engineVol[0]}&engineVolumeTo=${engineVol[1]}`,
            color: `color_id=${color}`,
            priceOt: `price_ot=${priceOt}`,
            priceDo: `price_do=${priceDo}`
        }
        setfilters(filter);
        getAds(filter);
    }

    const marks = [
        { value: '0', label: 'Any' },
        { value: '84', label: 'Volkswagen' },
        { value: '48', label: 'Mercedes' },
        { value: '55', label: 'Nissan' },
        { value: '38', label: 'Lexus' },
        { value: '79', label: 'Toyota' },
        { value: '29', label: 'Hyundai' }
    ]

    const colors = [
        { value: '0', label: 'Any' },
        { value: '2', label: 'Black' },
        { value: '15', label: 'White' },
        { value: '13', label: 'Red' },
        { value: '6', label: 'Gold' },
        { value: '3', label: 'Blue' },
        { value: '7', label: 'Green' }
    ]

    function hanlerSelectMark({ value }) {
        mark = value;
        console.log(mark);
    }

    function handlerSelectColor({ value }) {
        color = value;
    }

    function handlerCarYears(event) {
        setyears(event);
    }

    function handlerEngineVolume(event) {
        setengineVol(event);
    }

    function handlerPriceOt({ target: { value } }) {
        priceOt = value;
    }

    function handlerPriceDo({ target: { value } }) {
        priceDo = value;
    }

    return <div className='search'>
        <div className="filters">
            <div className="col">
                <div className="row">
                    <Select options={marks} onChange={hanlerSelectMark} placeholder={'Марка машины'}></Select>
                    <p>Года: {years[0]}-{years[1]}</p>
                    <Range range min={2000} max={2022} onChange={handlerCarYears} defaultValue={years} />
                </div>

                <div className="row">
                    <Select options={colors} onChange={handlerSelectColor} placeholder={'Цвет машины'}></Select>
                    <p>Объем двигателя: {engineVol[0].toFixed(1)}-{engineVol[1].toFixed(1)}</p>
                    <Range range min={1.1} max={5} step={0.1} onChange={handlerEngineVolume} defaultValue={engineVol} />
                </div>
            </div>
            <div className="col">
                <p>Цена</p>
                <Input placeholder={'От'} type={'number'} event={handlerPriceOt} />
                <Input placeholder={'До'} type={'number'} event={handlerPriceDo} />
            </div>
        </div>

        <Button text={'Искать'} event={handlerSearch} />
    </div>
}

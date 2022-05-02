import './style.scss'
import Select from 'react-select'
import Range from 'rc-slider';
import 'rc-slider/assets/index.css';
import { Button } from '../../ui/button/button';
import { Input } from '../../ui/input/input';
import { useState } from 'react';

export function Search() {
    const [years, setyears] = useState([2000, 2004]);
    const [engineVol, setengineVol] = useState([1.1, 1.8]);

    const marks = [
        { value: 'any', label: 'Any' },
        { value: 'volkswagen', label: 'Volkswagen' },
        { value: 'mercedes', label: 'Mercedes' },
        { value: 'nissan', label: 'Nissan' },
        { value: 'lexus', label: 'Lexus' },
        { value: 'toyota', label: 'Toyota' },
        { value: 'hyundai', label: 'Hyundai' }
    ]

    const colors = [
        { value: 'any', label: 'Any' },
        { value: 'black', label: 'Black' },
        { value: 'white', label: 'White' },
        { value: 'red', label: 'Red' },
        { value: 'gold', label: 'Gold' },
        { value: 'blue', label: 'Blue' },
        { value: 'green', label: 'Green' }
    ]

    function selectValue(event) {
        console.log(event.value);
    }

    function handlerCarYears(event) {
        setyears(event);
    }

    function handlerEngineVolume(event) {
        setengineVol(event)
    }

    return <div className='search'>
        <div className="filters">
            <div className="col">
                <div className="row">
                    <Select options={marks} onChange={selectValue} placeholder={'Марка машины'}></Select>
                    <p>Года: {years[0]}-{years[1]}</p>
                    <Range range min={2000} max={2022} onChange={handlerCarYears} defaultValue={years} />
                </div>

                <div className="row">
                    <Select options={colors} onChange={selectValue} placeholder={'Цвет машины'}></Select>
                    <p>Объем двигателя: {engineVol[0].toFixed(1)}-{engineVol[1].toFixed(1)}</p>
                    <Range range min={1.1} max={5} step={0.1} onChange={handlerEngineVolume} defaultValue={engineVol} />
                </div>
            </div>
            <div className="col">
                <p>Цена</p>
                <Input placeholder={'От'} type={'text'} />
                <Input placeholder={'До'} type={'text'} />
            </div>
        </div>

        <Button text={'Искать'} />
    </div>
}

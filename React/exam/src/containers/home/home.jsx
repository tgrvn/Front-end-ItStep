import { CarPage } from '../../components/carPage/carPage';
import { Head } from '../../components/head/head';
import { CarsContainer } from '../cars/cars';
import { Search } from '../search/search';

export function Home() {
    return <>
        <Head />
        <Search />
        <CarsContainer />
    </>
}
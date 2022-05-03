import React, { useState } from 'react';
import { search, getFromIds } from '../services/cars'

export const SearchContext = React.createContext(null);

export function SearchContextProvider({ children }) {
    const [searchResult, setsearchResult] = useState(null)

    async function getAds(filters, page = 0) {
        const res = await search(filters, page);

        if (!res
            || !res?.result?.search_result?.ids
            || !res?.result?.search_result?.ids?.length) {
            return;
        }

        const result = await getFromIds([], res.result.search_result.ids, 0);
        setsearchResult(result);
    }

    function getCurrentCar(id) {
        return searchResult.filter((item) => item.userId == id);
    }


    return <SearchContext.Provider value={{ getAds, searchResult, getCurrentCar }}>{children}</SearchContext.Provider>
}
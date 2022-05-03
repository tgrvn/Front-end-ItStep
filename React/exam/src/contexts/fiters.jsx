import React, { useState } from 'react';

export const FiltersContext = React.createContext(null);

export function FiltersContextProvider({ children }) {
    const [filters, setfilters] = useState(null);

    return <FiltersContext.Provider value={{ filters, setfilters }}>{children}</FiltersContext.Provider>
}
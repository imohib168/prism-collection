import React, { createContext, useReducer } from 'react';
import { CollectionReducer } from './CollectionReducer';
import { obj } from './CollectionData';

const initialState = obj;

export const CollectionContext = createContext();

export const CollectionProvider = ({ children }) => {

    let [state, dispatch] = useReducer(CollectionReducer, initialState);

    return (
        <CollectionContext.Provider value={{
            data: state,
        }}>
            {children}
        </CollectionContext.Provider>
    )
}
import React, { createContext, ReactNode, useReducer } from "react";
import {Phrase} from '../models/Phrase'
import { savePhrase } from "../repository/asyncStorage";

const mockData: Phrase[] = [
    {
        author: "Waldemar Valle Martins",
        title: 'O importante não é vencer todos os dias, mas lutar sempre.',
        done: false,
        id: "0",
    },
    {
        author: "Waldemar Valle Martins",
        title: 'O importante não é vencer todos os dias, mas lutar sempre.',
        done: false,
        id:  "1",
    },
    {
        author: "Waldemar Valle Martins",
        title: 'O importante não é vencer todos os dias, mas lutar sempre.',
        done: false,
        id: "2",
    },
];
export enum AppActionTypes {
    ADD_PHRASE = "@PHRASE_ADD_PHRASE",
    COMPLETE_PHRASE = "@PHRASE_COMPLETE_PHRASE"
}

export type AppState = {
    phrases: Phrase[]
}
const initialState = {
    phrases: mockData,
}

type ActionAddPhrase = {
    type: AppActionTypes.ADD_PHRASE,
    payload: Phrase,
}
type ActionCompletePhrase = {
    type: AppActionTypes.COMPLETE_PHRASE,
    payload: string,
};

type Actions = ActionAddPhrase | ActionCompletePhrase ;

const changeDoneState = (id: string, phrases: Phrase[]): Phrase[] =>  {
    const  updatedPhrase = phrases.map((phrase) => {
        if (phrase.id === id) {
            return {
                ...phrase,
                done: !phrase.done,
            }
        }
        return phrase;
    })
    return updatedPhrase
}

const reducer = (state: AppState, action: Actions): AppState => {
    switch(action.type) {
        case AppActionTypes.ADD_PHRASE:
            return {
                ...state,
                phrases: [...state.phrases, action.payload]
            }
        case AppActionTypes.COMPLETE_PHRASE:
            return {
                ...state,
                phrases: changeDoneState(action.payload, state.phrases)
            }
        default:
            return state;
    }
}

type AppContextType = {
    state: AppState,
    dispatch: (action: Actions) => void,
}
export const AppContext = createContext<AppContextType>({
    state: initialState,
    dispatch: () => null,
});


export type AppProviderProps = {
    children: ReactNode
}
export const AppProvider = ({ children }: AppProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch}}>
        {children}
        </AppContext.Provider>
    )
}
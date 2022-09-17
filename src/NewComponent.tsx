import React from 'react';
import {FilterType} from "./App";

type NewComponentType = {
    currentMoney: MoneyType[]
    onClickFilterHandler: (nameButton: FilterType) => void
/*    nameButton: string
    callBack: () => void*/

}

type MoneyType = {
    banknote: string,
    nominal: number,
    number: string
}


export const NewComponent = (props: NewComponentType) => {
    const onClickAllFilterHandler = () => {
        props.onClickFilterHandler('all')
    }
    const onClickRubleFilterHandler = () => {
        props.onClickFilterHandler('ruble')
    }
    const onClicDollarFilterHandler = () => {
        props.onClickFilterHandler('dollar')
    }
    return (
        <>
            <ul>
                {props.currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknote}</span>
                            <span>{objFromMoneyArr.nominal}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={onClickAllFilterHandler}>All</button>
                <button onClick={onClickRubleFilterHandler}>Rubles</button>
                <button onClick={onClicDollarFilterHandler}>Dollars</button>
            </div>
        </>
    );}

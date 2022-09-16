import React from 'react';

type NewComponentType = {
    currentMoney: MoneyType[]
/*    nameButton: string
    callBack: () => void*/

}

type MoneyType = {
    banknote: string,
    nominal: number,
    number: string
}


export const NewComponent = (props: NewComponentType) => {
/*    const onClickFilterHandler = (nameButton) => {
        props.callBack()
    }*/
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

        </>
    );}

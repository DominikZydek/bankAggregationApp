import React from 'react'

interface Props {
    title: string
    balance: number,
    currency: string,
    comparison: number
}

const AccountBalance = (props: Props) => {

    const isComparisonNegative = () => {
        return props.comparison < 0
    }

    return (
        <div className="p-5 bg-neutral-200 dark:bg-neutral-800 rounded-lg">
            <p className="text-xl ">{props.title}</p>
            <p className="text-3xl font-bold">{props.balance.toFixed(2)} {props.currency}</p>
            <div className={`w-fit px-2 py-1 rounded-2xl text-sm
            ${
                isComparisonNegative() ? 'bg-red-200 text-red-800' : 'bg-green-200 text-green-800'
            }`}>
                <span>
                    {isComparisonNegative() ? '' : '+'}
                    {props.comparison}% compared to last month
                </span>
            </div>
            {/*chart goes here*/}
        </div>
    )
}
export default AccountBalance

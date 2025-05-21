import React, {Dispatch, SetStateAction} from 'react'

interface Props {
    banks: string[],
    selectedBank: string,
    onSelect: Dispatch<SetStateAction<string>>
}

const BankSelection = (props: Props) => {
    return (
        <ul className="flex gap-3 text-xl">
            <li
                className={`px-4 py-1 rounded-3xl cursor-pointer ${
                    props.selectedBank === '' ? 'bg-indigo-600 text-neutral-200' : 'bg-indigo-200 text-neutral-800'
                }`}
                onClick={() => props.onSelect('')}
            >
                <span>All accounts</span>
            </li>
            {props.banks.map((bank, index) => (
                <li
                    key={index}
                    className={`px-4 py-1 rounded-3xl cursor-pointer ${
                        props.selectedBank === bank ? 'bg-indigo-600 text-neutral-200' : 'bg-indigo-200 text-neutral-800'
                    }`}
                    onClick={() => props.onSelect(bank)}
                >
                    <span>{bank}</span>
                </li>
            ))}
        </ul>
    )
}
export default BankSelection

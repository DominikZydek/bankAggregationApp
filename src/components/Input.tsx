'use client'

import React, { useState } from 'react';

interface Props {
    id: string;
    name: string;
    label: string;
    type: string;
}

const Input = (props: Props) => {
    const { id, name, label, type } = props;
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(false);
        setHasValue(e.target.value !== '');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHasValue(e.target.value !== '');
    };

    return (
        <div className="relative flex flex-col my-6">
            <div className="relative">
                <input
                    className="w-full px-4 py-2 text-base border rounded-lg outline-none transition-all duration-200
            bg-neutral-100 dark:bg-neutral-700 peer
            border-neutral-300 dark:border-neutral-600
            focus:border-indigo-600 dark:focus:border-indigo-400
            focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-800"
                    id={id}
                    name={name}
                    type={type}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleChange}
                />
                <label
                    className={`absolute left-3 transition-all duration-200 pointer-events-none
            ${(isFocused || hasValue)
                        ? '-top-6 text-sm text-indigo-600 dark:text-indigo-400 font-medium'
                        : 'top-2 text-base text-neutral-500 dark:text-neutral-400'}`}
                    htmlFor={id}
                >
                    {label}
                </label>
            </div>
        </div>
    );
};

export default Input;
'use client'

import React, {useMemo, useState} from 'react'
import AccountBalance from "@/components/AccountBalance";
import BankSelection from "@/components/BankSelection";

const Page = () => {

    const dummyBankData = [
        {
            name: 'PKO',
            balance: 13098.21,
            currency: 'PLN',
            comparison: 2.5
        },
        {
            name: 'mBank',
            balance: 1398.11,
            currency: 'PLN',
            comparison: -21.5
        },
        {
            name: 'ING',
            balance: 120,
            currency: 'PLN',
            comparison: 5.7
        },
        {
            name: 'Revolut',
            balance: 118.21,
            currency: 'PLN',
            comparison: 0
        }
    ];

    const [selectedBank, setSelectedBank] = useState('');

    const totalBalance = useMemo(() => {
        return dummyBankData.reduce((sum, bank) => sum + bank.balance, 0);
    }, [dummyBankData]);

    const averageComparison = useMemo(() => {
        const sum = dummyBankData.reduce((sum, bank) => sum + bank.comparison, 0);
        return (sum / dummyBankData.length).toFixed(1);
    }, [dummyBankData]);

    const selectedBankData = useMemo(() => {
        if(selectedBank === '') {
            return {
                title: 'All acounts',
                balance: totalBalance,
                currency: 'PLN',
                comparison: parseFloat(averageComparison)
            }
        }

        return dummyBankData.find(bank => bank.name === selectedBank)
    }, [selectedBank, dummyBankData, totalBalance, averageComparison]);

    return (
        <div className="space-y-5">
            <AccountBalance title={selectedBank || 'All accounts'}
                            balance={selectedBankData?.balance || 0}
                            currency={selectedBankData?.currency || 'PLN'}
                            comparison={selectedBankData?.comparison || 0}/>
            <BankSelection banks={dummyBankData.map(bank => bank.name)}
                           selectedBank={selectedBank}
                           onSelect={setSelectedBank} />
        </div>
    )
}
export default Page

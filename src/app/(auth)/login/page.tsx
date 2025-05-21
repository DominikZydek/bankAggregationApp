'use client'

import React, {useActionState} from 'react'
import Input from "@/components/Input";
import Button from "@/components/Button";
import { loginAction, FormState } from "@/app/(auth)/login/actions";

const Page = () => {
    const [state, formAction] = useActionState<FormState, FormData>(loginAction, {})

    return (
        <div className="w-full max-w-md mx-auto">
            <form action={formAction} className="p-5 bg-neutral-200 dark:bg-neutral-800 rounded-lg space-y-5">
                <Input id="email" name="email" type="email" label="E-mail" />
                <Input id="password" name="password" type="password" label="Password" />

                {state.error && (
                    <div className="p-3 text-red-800 bg-red-200 dark:bg-red-900 dark:text-red-200 rounded-lg">
                        {state.error}
                    </div>
                )}

                {state.success && (
                    <div className="p-3 text-green-800 bg-green-200 dark:bg-green-900 dark:text-green-200 rounded-lg">
                        Login successful!
                    </div>
                )}

                <div className="flex w-full justify-end gap-1">
                    <Button label="Don't have an account? Sign up here" variant="text" linkTo="/signup"/>
                    <Button label="Login" type="submit" />
                </div>
            </form>
        </div>
    )
}

export default Page
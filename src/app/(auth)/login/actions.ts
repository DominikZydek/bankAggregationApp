'use server'

export interface FormState {
    error?: string,
    success?: boolean
}

export async function loginAction(prevState: FormState, formData: FormData): Promise<FormState> {
    const email = formData.get('email') as string | null
    const password = formData.get('password') as string | null

    // TODO: insert actual logic here
    console.log('Login attempt:', email)

    try {
        // TODO: insert actual logic here
        if (!email || !password) {
            return { error: 'Email and password are required' }
        }

        return { success: true }
    } catch (error) {
        console.error('Error: ', error);
        return { error: 'Login failed. Please try again.' }
    }
}
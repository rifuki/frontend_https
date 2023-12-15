'use client';

import { useFormik } from 'formik';
import { FormikValues } from '@/types/login';
import { ChangeEvent } from 'react';
import useLoginUser from '@/features/login/useLoginUser';
import { useRouter } from 'next/navigation';

const initialValues: FormikValues = {
    username: 'rifuki',
    password: 'Baka!baka31!'
}

export default function Login() {
    const router = useRouter();
    const { mutate, data, error } = useLoginUser();

    const formik = useFormik<FormikValues>({
        initialValues,
        onSubmit: (values) => {
            mutate(values)
            console.log(data)
        }
    });

    function handleForm(e: ChangeEvent<HTMLInputElement>) {
        formik.setFieldValue(e.target.name, e.target.value)
    }

    return(
        <div>
            <button className="bg-blue-500 px-1.5 py-2 rounded-md" onClick={() => router.push("/logout")}>Logout</button>
            <p className="text-white">{error?.message}</p>
            <form className="p-5" onSubmit={formik.handleSubmit}>
                <div className="mb-3 flex gap-3">
                    <label htmlFor="username">Username</label>
                    <input onChange={handleForm} type="text" name="username" id="username" className="text-gray-600" value={formik.values.username}/>
                </div>
                <div className="mb-3 flex gap-3">
                    <label htmlFor="password">Password</label>
                    <input onChange={handleForm} type="text" name="password" id="password" className="text-gray-600" value={formik.values.password} />
                </div>
                <div>
                    <button type="submit" className="px-3 py-1.5 bg-blue-500 rounded-sm">Login</button>
                </div>
            </form>
        </div>
    );
}
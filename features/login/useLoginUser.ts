import { useMutation } from '@tanstack/react-query';
import { FormikValues, ResponseError, SuccessResponse } from '@/types/login';
import axios from '@/lib/axios';
import { AxiosError } from 'axios';

export default function useLoginUser() {
    return useMutation({
        mutationKey: ['login.user'],
        mutationFn: async (payload: FormikValues) => {
            try {
                const credentials = { credentials: payload };
                const { data } = await axios.post<SuccessResponse>('/api/auth/signin', credentials);
                return data;
            } catch (error) {
                const e = error as AxiosError<ResponseError>;
                console.log(e.response?.data)
                throw Error(e.response?.data.error.message)
            }
        },
    })
}
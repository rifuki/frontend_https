'use client'

import axios from "@/lib/axios";
import { ResponseError } from "@/types/login";
import { useQuery } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { useRouter } from "next/navigation";

export default function Logout() {
    const router = useRouter();

    const { isSuccess } = useQuery({
        queryKey: ['logout.user'],
        queryFn: async () => {
            try {
                const {data} = await axios.get("/api/auth/logout");
                return data
            } catch (error) {
                const e = error as AxiosError<ResponseError>;
                console.log(e.response?.data)
                throw Error(e.message)
            }
        }
    })

    if (isSuccess) router.push("/login");

    return(
        <div>logout</div>
    )
}
"use client"
import {useRouter} from "next/navigation";

export default function ButtonRedirect() {
    const router = useRouter();
    const handleNav = () => {
        router.push('/login')
    }
    return (
        <div>
            <button onClick={handleNav}>Login</button>
        </div>
    )
}
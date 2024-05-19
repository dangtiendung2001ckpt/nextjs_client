import {Input} from "@/components/ui/input";

export default function LoginPage() {
    return (
        <div className='text-center'>
            <h1> Login</h1>
            <form>
                <label>Email:</label>
                <Input type='text' />
            </form>
        </div>
    )
}
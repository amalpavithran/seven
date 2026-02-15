import Image from "next/image"
import Form from "next/form"
import InputBox, { InputType } from "../../public/components/InputBox"
import GreenButton from "@/public/components/GreenButton"
import Link from "next/link"

export default function CreateAccount() {
    return (
        <div className="flex flex-col items-start p-5 justify-start h-screen">
            <Image className="mt-10 w-[50%] p-2 self-center" src={"/logo.svg"} width={500} height={500} alt="logo"/>
            <div className="font-bold w-[80%] text-left text-xl"> Create your new account</div>
            <Form className="w-full" action="/">
                <InputBox text="Username" name="username" type={InputType.text}/>
                <InputBox text="Phone number" name="phoneno" type={InputType.phoneno}/>
                <InputBox text="Password" name="password" type={InputType.password}/>
                <div className="flex flex-row mb-2">
                <input type="checkbox" className="accent-signature-green w-5 outline-signature-green" name="tnc"/>
                <label className="text-xs ml-2">I Agree with <a href="/">Terms of Service</a> and <a href="/">Privacy Policy</a></label>
                </div>
            </Form>
            <Link href="/" className="text-signature-green text-sm block mx-auto mt-5">Back to Login</Link> 
        </div>
    )
}
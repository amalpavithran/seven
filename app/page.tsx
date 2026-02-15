import Image from "next/image";
import Link from "next/link";
import GreenButton from "../public/components/GreenButton";
import LoginButton from "./components/LoginButton";

export default function Login() {


  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="p-1 text-2xl">Welcome To</div>
      <Image className="w-[50%] pt-4 mb-20" src={"/logo.svg"} width={500} height={500} alt="logo" />
      <LoginButton/>
      <Link className="p-5 signature-text" href={"/home"}>Create new account</Link>
    </div>
  );
}

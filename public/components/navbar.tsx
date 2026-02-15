'use client'
import { auth } from "@/lib/firebase/client"
import { onAuthStateChanged } from "firebase/auth"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

type NavbarProps = {
}
const Navbar: React.FC<NavbarProps> = () => {
    const router = useRouter();
    const iconsSize = 30
    const [user, setUser] = useState("")
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                if (user.displayName != null) {
                    setUser(user.displayName)
                }
                else {
                    router.replace("/")
                }
            }
        })
    })
    return (
        <div className="w-3/4 m-auto justify-between h-20 bg-slate-50 border-1 border-slate-200 flex flex-row rounded-b-lg">
            <div className="flex">
                <Image className="justify-self-start p-5" src={"/logo.svg"} width={100} height={50} alt="logo" />
                <div className="border-r-1 border-l-1 border-slate-300 flex">
                    <div className="p-5 pt-7">Anvia Campus, Bagmane</div>
                </div>
            </div>
            <div className=" flex flex-row p-5">
                <div className="rounded-full bg-slate-200 w-100">
                    <Image className="mt-1 ml-2 flex" src={"/icons/search.png"} width={iconsSize} height={iconsSize} alt="search" />
                    <input type="string" />
                </div>
                <a className="pt-1 pr-2 pl-2"><Image src={"/icons/cart.png"} width={iconsSize} height={iconsSize} alt="cart" /></a>
                <a className="p-1"><Image src={"/icons/user.png"} width={iconsSize} height={iconsSize} alt="user" /></a>
            </div>
        </div>
    )
}

export default Navbar;
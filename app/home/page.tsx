import { db } from "@/lib/firebase/client";
import { Announcement } from "@/lib/types";
import Announcements from "@/public/components/Announcements";
import DataChart from "@/public/components/DataChart";
import Navbar from "@/public/components/navbar"
import { collection, getDocs } from "firebase/firestore";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
export default function Home() {
    const capacity = 90;

    
    return(
        <div className="w-full flex flex-col">
            <Navbar/>
            <div className="flex flex-col">
                <div className="flex flex-row flex-start">
                    <div className="flex flex-row mt-10 ml-10">Cafe Status: <div className="bg-red-500 text-white rounded pl-1 pr-1 ml-1">At {capacity}% capacity</div></div>
                </div>
                <DataChart/>
            </div>
            <Announcements/>
            {/* <div className="flex flex-row w-full justify-evenly mt-10">
                <div className="pt-10 pb-10 pl-20 pr-20 border-2 border-slate-200 rounded-lg">Potluck Party</div>
                <div className="pt-10 pb-10 pl-20 pr-20 border-2 border-slate-200 rounded-lg">Live Menu</div>
                <div className="pt-10 pb-10 pl-20 pr-20 border-2 border-slate-200 rounded-lg">Pre-Order</div>
            </div> */}
        </div>
    )
}
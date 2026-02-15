import { db } from "@/lib/firebase/client";
import { Announcement } from "@/lib/types";
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import { FC } from "react";

type AnnouncementsProps = {}
export default async function Announcements() {

    async function getAnnouncements(): Promise<Announcement[]> {
        const snapshot = await getDocs(collection(db, "announcements"));
        return snapshot.docs.map((doc): Announcement => { return { uid: doc.id, createdBy: doc.get("createdBy"), title: doc.get("title"), description: doc.get("description") } });
    }

    const announcements = await getAnnouncements();

    return (
        <div>
            <div className="m-10 mt-20">Announcements</div>
            <div className="w-full overflow-x-auto min-w-0 pl-10 mr-5 flex flex-row gap-5 scrollbar-none touch-pan-x">
                {getAnnouncements().then((announcements) => {
                    return announcements.map((announcement) => {
                        return (
                            <div className="flex flex-row shrink-0 w-sm p-5 rounded-xl border-2 border-slate-200">
                                <div className="flex flex-col justify-center"><Image width={48} height={48} src={"/icons/general_danger_full.png"} alt="danger-icon" /></div>
                                <div className="flex flex-col justify-center">
                                    <div className="text-xs font-bold text-slate-500">{announcement.createdBy}</div>
                                    <div className="text-sm font-bold pt-1">{announcement.title}</div>
                                </div>
                            </div>
                        )
                    })
                })}
            </div>
        </div>
    )
}

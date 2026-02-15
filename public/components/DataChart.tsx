"use client"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

export default function DataChart() {

        const bucketedData = [
  { time: "00:00", value: 6 },
  { time: "00:30", value: 0 },
  { time: "01:00", value: 6 },
  { time: "01:30", value: 3 },
  { time: "02:00", value: 0 },
  { time: "22:00", value: 5 },
  { time: "22:30", value: 7 },
  { time: "23:00", value: 0 },
  { time: "23:30", value: 0 }
];
    return (
        <ResponsiveContainer className="p-10" width="100%" height={200}>
            <BarChart data={bucketedData}>
            <XAxis dataKey="time" />
            <Bar dataKey="value" fill="#8884d8"/>
            <Tooltip/>
            </BarChart>
            </ResponsiveContainer>
    )
}
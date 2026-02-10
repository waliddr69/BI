import type { LucideIcon } from "lucide-react";
import "./statCard.css"

type params = {
    Icon:LucideIcon
    header:string
    value:number
    valueUnity:string
}
function StatCard({Icon,header,value,valueUnity}:params){
    return(
        <div className="stat-card border-2 p-0 rounded-3xl">
            <div className="card-wrapper flex flex-col gap-8 p-2 px-4">
                <div className="flex flex-row gap-4">
                    <div className='rounded-full p-2 flex justify-center items-center bg-[#eeeeee]'>
                        <Icon size={40}/>
                    </div>
                    <h3>{header}</h3>

                </div>
                <div>
                    <h2 className='text-start'><span className='text-black'>{value}</span> {valueUnity}</h2>
                </div>
                
            </div>
        </div>
    )
}

export default StatCard
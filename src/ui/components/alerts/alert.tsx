import { TriangleAlert } from "lucide-react";


function Alerts(){
    return(
        <div className="alerts bg-white border-2 rounded-3xl">
            <div className="alerts-wrapper flex gap-5 flex-col p-4">
                <h3>Alerts & insights</h3>
                <div className="flex flex-col gap-4">
                    <p className="flex flex-row gap-2 text-[#FF2F2F]"><TriangleAlert/> Low stock</p>
                    <ul>
                        <li>
                            - Iphone 13 (2 left)
                        </li>
                        <li>
                            - Samsung Charger (1 left)
                        </li>
                    </ul>
                </div>


            </div>
        </div>
    )
}

export default Alerts
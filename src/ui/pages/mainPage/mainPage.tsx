import { DollarSign, Users } from "lucide-react";
import StatCard from "../../components/statCard/statCard";
import SalesChart from "@/ui/components/Charts/lineChart";
import BarHorizontal from "@/ui/components/Charts/barChart";
import PieInteractive from "@/ui/components/Charts/pieChart";
import Alerts from "@/ui/components/alerts/alert";


function MainPage(){
    return(
        <main className="p-4 flex flex-col gap-15">
            <div className="cards flex flex-row gap-8 flex-wrap lg:flex-nowrap">
                <StatCard Icon={DollarSign} header="Revenue de ce jour" value={45980.00} valueUnity="DA"/>
                <StatCard Icon={Users} header="Nombre de clients de ce jour" value={40} valueUnity="clients"/>

            </div>

            <div className="sales-chart self-center flex w-full">
                <SalesChart/>
            </div>

            <div className="flex flex-row gap-10 pr-4">
                <BarHorizontal/>
                <PieInteractive/>
            </div>
            <Alerts/>
        </main>
    )
}

export default MainPage
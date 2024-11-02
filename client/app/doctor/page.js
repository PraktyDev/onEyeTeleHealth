import StatusCard from "@/components/StatusCard";
import { UserRoundCheck } from 'lucide-react';
import { UsersRound } from 'lucide-react';
import { Loader } from 'lucide-react';
import { DataTable } from "./patients/DataTable";
import DateCalender from "@/components/DateCalender";
import { columns } from "./patients/columns";
import Stat from "@/components/Stat";

async function getData() {[]}

const page = async () => {
  const data = getData();

  return (
    <section className="w-full laptop:container flex flex-col overflow-x-hidden">
      <div className="flex flex-col laptop:flex-row gap-1 px-5 py-1">
        <StatusCard icon={<UsersRound />} title="Total patient" number={20} desc="Total Patients" />
        <StatusCard icon={<Loader />} title="Waiting patient" number={5} desc="Waiting Patients" />
        <StatusCard icon={<UserRoundCheck />} title="Attended patient" number={15} desc="Total Patient" />
      </div>

      <div className="flex flex-col laptop:flex-row gap-1 px-5">
        <div className="flex flex-col gap-1 basis-3/4">
          <DataTable columns={columns} data={data} />
          <Stat />
        </div>
        
        <div className="flex flex-col gap-1 basis-1/4">
          <DateCalender />
          <DateCalender />
        </div>
      </div>
    </section>
  )
}

export default page
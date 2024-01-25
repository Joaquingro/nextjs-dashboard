import { fetchRevenue } from "../lib/data";
import RevenueChart from "../ui/dashboard/revenue-chart";

export default async function page() {
  // const revenue = await fetchRevenue();
  return (
    <div>
      <h1>Dashboard</h1>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {/* <RevenueChart revenue={revenue}/> */}

      </div>
    </div>
  )
}

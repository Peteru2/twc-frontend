import StatCard from "../components/dashboard/StatCard";
import RecentList from "../components/dashboard/RecentList";
import useDashboard from "../hooks/useDashboard";

import {
  Users,
  HandHelping,
  UserPlus,
  Globe
} from "lucide-react";

const Dashboard = () => {
  const { data, loading } = useDashboard();

  if (loading) return <p className="p-10">Loading dashboard...</p>;
  if (!data) return <p>Error loading dashboard</p>;

  const { stats, recent } = data;

  return (
    <div className="p-8 space-y-8 bg-gray-100 min-h-screen">

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6">

        <StatCard
          title="Members"
          value={stats.members}
          icon={Users}
          color=" bg-red-500 text-white"
        />

        <StatCard
          title="Prayer Requests"
          value={stats.prayerRequests}
          icon={HandHelping}
          color="bg-violet-500 text-white"
        />

        <StatCard
          title="First Time Visitors"
          value={stats.firstTimers}
          icon={UserPlus}
          color="bg-white shadow-xl text-black"
        />

        <StatCard
          title="Online Members"
          value={stats.onlineCommunity}
          icon={Globe}
          color="bg-gradient-to-r from-indigo-500 to-blue-500 text-white"
        />

      </div>

      {/* Prayer Requests + Celebrations */}
      <div className="grid md:grid-cols-2 gap-6">

        <RecentList
          title="Recent Prayer Requests"
          items={recent.prayerRequests}
          link="/admin/prayer"
          renderItem={(item) => (
            <div className="flex items-center gap-3">

             <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center">
                                <span className="text-violet-900 font-bold uppercase">

                    {item.firstName?.charAt(0)}
                    {item.lastName?.charAt(0)}

                </span>
                </div>

              <div>
                <p className="font-semibold text-sm">
                  {item.firstName} {" "}{item.last}
                </p> 
                <p className="text-sm text-gray-500">
                  {item.request}
                </p>
              </div>

              <span className="ml-auto text-xs text-gray-400">
                {new Date(item.createdAt).toLocaleTimeString()}
              </span>

            </div>
          )}
        />

        <RecentList
          title="Upcoming Celebrations"
          link="/admin/celebrations"
          items={recent.celebrations}
          renderItem={(item) => (
            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center">
                                                                <span className="text-violet-900 font-bold uppercase">


                    {item.firstName?.charAt(0)}
                    {item.lastName?.charAt(0)}

                </span>
                </div>

              <div>
                <p className="font-semibold text-sm">
                  {item.celebrationType}
                </p>
              </div>

              <span className="ml-auto text-sm text-gray-500">
                {item.duration}
              </span>

            </div>
          )}
        />

       

      </div>

      {/* First Timers */}
      <RecentList
                title="First Time Visitor Form Submissions"
                items={recent.firstTimers}
                link="/admin/firsttimer"  
                renderItem={(item) => (
                    <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center">
                                              <span className="text-violet-900 font-bold uppercase">

                    {item.firstName?.charAt(0)}
                    {item.lastName?.charAt(0)}

                </span>
                </div>

                    <span className="text-sm font-medium">
                        {item.firstName} {" "} 
                        {item.lastName}

                    </span>

                    <span className="ml-auto text-xs text-gray-400">
                        {new Date(item.createdAt).toDateString()}
                    </span>

    </div>
  )}
/>
 <div className="grid md:grid-cols-4 gap-4">

  <button className="bg-red-500 text-white p-3 rounded-lg shadow">
    + Add New Member
  </button>

  <button className="bg-pink-500 text-white p-3 rounded-lg shadow">
    + Review Prayer Requests
  </button>

  <button className="bg-teal-500 text-white p-3 rounded-lg shadow">
    + Register First Timer
  </button>

  <button className="bg-indigo-500 text-white p-3 rounded-lg shadow">
    + Manage Community
  </button>

</div>
    </div>
  );
};

export default Dashboard;
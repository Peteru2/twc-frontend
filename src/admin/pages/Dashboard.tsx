import { Users, HandHelping, UserPlus, Globe, Calendar } from "lucide-react";

import { motion } from "framer-motion";

import StatCard from "../components/dashboard/StatCard";
import RecentList from "../components/dashboard/RecentList";
import DashboardSkeleton from "../components/dashboard/DashboardSkeleton";

import useDashboard from "../hooks/useDashboard";

const Dashboard = () => {
  const { data, loading } = useDashboard();

  if (loading) {
    return <DashboardSkeleton />;
  }

  if (!data) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-bold">Unable to load dashboard</h2>

          <p className="text-gray-500 mt-2">
            Please check your connection and try again.
          </p>

          <button
            onClick={() => window.location.reload()}
            className="mt-5 bg-red-500 text-white px-5 py-2 rounded-lg"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  const { stats, admin, recent } = data;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-8 space-y-8 bg-gray-100 min-h-screen"
    >
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h1 className="text-2xl font-bold">Welcome back, {admin.name}</h1>

        <p className="text-gray-500 mt-2">
          Here is what is happening in your church community today.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        <StatCard
          title="Members"
          value={stats.members}
          icon={Users}
          color="bg-red-500 text-white"
        />

        <StatCard
          title="Prayer Requests"
          value={stats.prayerRequests}
          icon={HandHelping}
          color="bg-violet-500 text-white"
        />

        <StatCard
          title="First Timers"
          value={stats.firstTimers}
          icon={UserPlus}
          color="bg-white text-black"
        />

        <StatCard
          title="Online Community"
          value={stats.onlineCommunity}
          icon={Globe}
          color="bg-gradient-to-r from-indigo-500 to-blue-500 text-white"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <RecentList
          title="Recent Prayer Requests"
          link="/admin/prayer"
          items={recent.prayerRequests}
          emptyMessage="No prayer requests submitted yet."
          renderItem={(item) => (
            <div>
              <p className="font-semibold">{item.firstName} {" "}{item.lastName}</p>

              <p className="text-[17px] text-gray-500">{item.prayerRequest}</p>

              <p className="text-xs text-gray-400 mt-2">
                {new Date(item.createdAt).toLocaleDateString()}
              </p>
            </div>
          )}
        />

        <RecentList
          title="Upcoming Celebrations"
          link="/admin/celebrations"
          items={recent.celebrations}
          emptyMessage="No upcoming celebrations."
          renderItem={(item) => (
            <div className="flex items-center gap-3">
              <Calendar className="text-red-500" />

              <div>
                <p className="font-semibold">{item.celebrationType}</p>

                <p className="text-sm text-gray-500">
                  {new Date(item.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          )}
        />
      </div>

      <RecentList
        title="First Time Visitors"
        link="/admin/firsttimer"
        items={recent.firstTimers}
        emptyMessage="No first-time visitors yet."
        renderItem={(item) => (
          <div>
            <p className="font-semibold">{item.firstName} {" "} {item.lastName}</p>

            <p className="text-xs text-gray-400">
              {new Date(item.createdAt).toDateString()}
            </p>
          </div>
        )}
      />
    </motion.div>
  );
};

export default Dashboard;

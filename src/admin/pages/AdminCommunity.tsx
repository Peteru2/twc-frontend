import { useEffect, useState } from "react";
import { getCommunity } from "../services/others";
import AdminTable from "../components/modal/AdminTable";
import SkeletonLoader from "../components/SkeletonLoader";
import AdminPageHeader from "../components/AdminPageHeader";
import { Globe, RefreshCcw } from "lucide-react";

interface CommunityMember {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  createdAt: string;
}

const AdminCommunity = () => {
  const [data, setData] = useState<CommunityMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(false);

      const res = await getCommunity();

      setData(res.data.data);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    {
      label: "Name",
      key: "name",

      render: (row: CommunityMember) => (
        <div className="flex items-center gap-3">
          <div
            className="
              w-10
              h-10
              rounded-full
              bg-blue-100
              flex
              items-center
              justify-center
              text-blue-600
              font-semibold
            "
          >
            {row.firstName?.charAt(0)}
            {row.lastName?.charAt(0)}
          </div>

          <div>
            <p className="font-medium text-gray-800">
              {row.firstName} {row.lastName}
            </p>

            <p className="text-xs text-gray-400">Online Community Member</p>
          </div>
        </div>
      ),
    },

    {
      label: "Email",
      key: "email",
    },

    {
      label: "Phone",
      key: "phone",
    },

    {
      label: "Country",
      key: "country",
    },

    {
      label: "Date",
      key: "createdAt",

      render: (row: CommunityMember) => (
        <span className="text-gray-500">
          {new Date(row.createdAt).toDateString()}
        </span>
      ),
    },
  ];

  const fields = [
    {
      label: "First Name",
      key: "firstName",
    },

    {
      label: "Last Name",
      key: "lastName",
    },

    {
      label: "Email",
      key: "email",
    },

    {
      label: "Phone",
      key: "phone",
    },

    {
      label: "Country",
      key: "country",
    },

    {
      label: "State",
      key: "state",
    },

    {
      label: "Connection Method",
      key: "connectionMethod",
    },

    {
      label: "First Time Attending TWC?",
      key: "firstTime",
    },

    {
      label: "Prayer Request",
      key: "prayerRequest",
    },
  ];

  if (loading) {
    return (
      <div className="p-8">
        <SkeletonLoader />
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="
          min-h-[500px]
          flex
          items-center
          justify-center
        "
      >
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-800">
            Unable to load online community
          </h2>

          <p className="text-gray-500 mt-2">
            Something went wrong while fetching community members.
          </p>

          <button
            onClick={fetchData}
            className="
              mt-5
              flex
              items-center
              gap-2
              mx-auto
              bg-red-500
              hover:bg-red-600
              transition
              text-white
              px-5
              py-2
              rounded-lg
            "
          >
            <RefreshCcw size={16} />
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 space-y-6">
      <AdminPageHeader
        title="Online Community"
        description="Manage people connecting with the church through online platforms"
        icon={Globe}
      />

      <AdminTable
        title="Online Community"
        data={data}
        columns={columns}
        modalFields={fields}
      />
    </div>
  );
};

export default AdminCommunity;

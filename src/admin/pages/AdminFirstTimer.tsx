
import AdminTable from "../components/modal/AdminTable";
import { getFirstTimers } from "../services/others";
import SkeletonLoader from "../components/SkeletonLoader";
import AdminPageHeader from "../components/AdminPageHeader";
import useAdminFetch from "../hooks/useAdminFetch";
import { RefreshCcw, UserPlus } from "lucide-react";

interface FirstTimer {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  createdAt: string;
}

const AdminFirstTimers = () => {
  const { data, loading, error, retry } = useAdminFetch(getFirstTimers);

  const columns = [
    {
      label: "Name",
      key: "name",

      render: (row: FirstTimer) => (
        <div className="flex items-center gap-3">
          <div
            className="
              w-10
              h-10
              rounded-full
              bg-red-100
              flex
              items-center
              justify-center
              text-red-600
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

            <p className="text-xs text-gray-400">First Timer</p>
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

      render: (row: FirstTimer) => (
        <span className="text-gray-500">
          {new Date(row.createdAt).toDateString()}
        </span>
      ),
    },
  ];

  const fields = [
    { label: "First Name", key: "firstName" },
    { label: "Last Name", key: "lastName" },
    { label: "Email", key: "email" },
    { label: "Phone", key: "phone" },
    { label: "Gender", key: "gender" },
    { label: "Country", key: "country" },
    { label: "State", key: "state" },
    { label: "Street", key: "street" },
    { label: "Membership Class", key: "membershipClass" },
    { label: "Born Again", key: "bornAgain" },
    { label: "Hear About Us", key: "hearAboutUs" },
    { label: "Contact Preference", key: "contact" },
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
            Unable to load first timers
          </h2>

          <p className="text-gray-500 mt-2">
            Something went wrong while fetching first timer records.
          </p>

          <button
            onClick={retry}
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
        title="First Timers"
        description="Manage and follow up with new visitors who submitted their information"
        icon={UserPlus}
      />

      <AdminTable
        title="First Timers"
        data={data}
        columns={columns}
        modalFields={fields}
      />
    </div>
  );
};

export default AdminFirstTimers;

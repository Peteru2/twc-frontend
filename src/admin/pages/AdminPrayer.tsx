import { getPrayer } from "../services/others";
import AdminTable from "../components/modal/AdminTable";
import SkeletonLoader from "../components/SkeletonLoader";
import AdminPageHeader from "../components/AdminPageHeader";
import useAdminFetch from "../hooks/useAdminFetch";
import { HandHelping, RefreshCcw } from "lucide-react";

interface PrayerRequest {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt: string;
}

const AdminPrayer = () => {
  const { data, loading, error, retry } = useAdminFetch(getPrayer);
  

  const columns = [
    {
      label: "Name",
      key: "name",

      render: (row: PrayerRequest) => (
        <div className="flex items-center gap-3">
          <div
            className="
              w-10
              h-10
              rounded-full
              bg-violet-100
              flex
              items-center
              justify-center
              text-violet-700
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

            <p className="text-xs text-gray-400">Prayer Request</p>
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
      label: "Date",
      key: "createdAt",

      render: (row: PrayerRequest) => (
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
      label: "Prayer Type",
      key: "prayerType",
    },

    {
      label: "Prayer Request",
      key: "prayerRequest",
    },

    {
      label: "Contact Method",
      key: "contactMethod",
    },

    {
      label: "Membership Class",
      key: "membershipClass",
    },

    {
      label: "Should this be confidential?",
      key: "confidential",
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
            Unable to load prayer requests
          </h2>

          <p className="text-gray-500 mt-2">
            Something went wrong while fetching prayer requests.
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
        title="Prayer Requests"
        description="Review submitted prayer requests and follow up with members"
        icon={HandHelping}
      />

      <AdminTable
        title="Prayer Requests"
        data={data}
        columns={columns}
        modalFields={fields}
      />
    </div>
  );
};

export default AdminPrayer;

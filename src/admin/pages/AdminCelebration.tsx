import { useEffect, useState } from "react";
import { getCelebrations } from "../services/others";
import AdminTable from "../components/modal/AdminTable";
import SkeletonLoader from "../components/skeletonLoader";
import AdminPageHeader from "../components/AdminPageHeader";
import { PartyPopper, RefreshCcw } from "lucide-react";

interface Celebration {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  createdAt: string;
}

const AdminCelebrations = () => {
  const [data, setData] = useState<Celebration[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(false);

      const res = await getCelebrations();

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

      render: (row: Celebration) => (
        <div className="flex items-center gap-3">
          <div
            className="
              w-10
              h-10
              rounded-full
              bg-amber-100
              flex
              items-center
              justify-center
              text-amber-600
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

            <p className="text-xs text-gray-400">Celebration Submission</p>
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

      render: (row: Celebration) => (
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
      label: "Celebration Type",
      key: "celebrationType",
    },

    {
      label: "Day of Celebration",
      key: "celebrationDay",
    },

    {
      label: "Membership Class",
      key: "membershipClass",
    },

    {
      label: "Born Again",
      key: "bornAgain",
    },

    {
      label: "How did you hear about us?",
      key: "hearAboutUs",
    },

    {
      label: "Contact Preference",
      key: "contact",
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
            Unable to load celebrations
          </h2>

          <p className="text-gray-500 mt-2">
            Something went wrong while fetching celebrations.
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
        title="Celebrations"
        description="Review celebrations, testimonies, and special moments shared by members"
        icon={PartyPopper}
      />

      <AdminTable
        title="Celebrations"
        data={data}
        columns={columns}
        modalFields={fields}
      />
    </div>
  );
};

export default AdminCelebrations;

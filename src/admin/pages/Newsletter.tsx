import { useEffect, useState } from "react";
import { getNewsLetter } from "../services/others";
import AdminTable from "../components/modal/AdminTable";
import SkeletonLoader from "../components/skeletonLoader";
import AdminPageHeader from "../components/AdminPageHeader";
import { Mail, RefreshCcw } from "lucide-react";

interface NewsletterSubscriber {
  _id: string;
  email: string;
  createdAt: string;
}

const AdminNewsLetter = () => {
  const [data, setData] = useState<NewsletterSubscriber[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(false);

      const res = await getNewsLetter();

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
      label: "Email",
      key: "email",

      render: (row: NewsletterSubscriber) => (
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
            "
          >
            <Mail size={18} />
          </div>

          <div>
            <p className="font-medium text-gray-800">{row.email}</p>

            <p className="text-xs text-gray-400">Newsletter Subscriber</p>
          </div>
        </div>
      ),
    },

    {
      label: "Subscribed Date",
      key: "createdAt",

      render: (row: NewsletterSubscriber) => (
        <span className="text-gray-500">
          {new Date(row.createdAt).toDateString()}
        </span>
      ),
    },
  ];

  const fields = [
    {
      label: "Email",
      key: "email",
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
            Unable to load newsletter subscribers
          </h2>

          <p className="text-gray-500 mt-2">
            Something went wrong while fetching newsletter records.
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
        title="Newsletters"
        description="Manage people subscribed to receive church updates and announcements"
        icon={Mail}
      />

      <AdminTable
        title="Newsletters"
        data={data}
        columns={columns}
        modalFields={fields}
      />
    </div>
  );
};

export default AdminNewsLetter;

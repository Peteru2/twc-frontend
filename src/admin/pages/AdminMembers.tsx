import { getMembers } from "../services/others";
import AdminTable from "../components/modal/AdminTable";
import { RefreshCcw, Users } from "lucide-react";
import SkeletonLoader from "../components/SkeletonLoader";
import useAdminFetch from "../hooks/useAdminFetch";
import AdminPageHeader from "../components/AdminPageHeader";

const AdminMembers = () => {
  const { data, loading, error, retry } = useAdminFetch(getMembers);

  const columns = [
    {
      label: "Name",
      key: "name",
      render: (row: any) => `${row.firstName} ${row.lastName}`,
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
      render: (row: any) => new Date(row.createdAt).toDateString(),
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
  ];

  if (loading) {
    return (
      <div className="p-8 space-y-6">
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
          <h2 className="text-xl font-semibold">Unable to load members</h2>

          <p className="text-gray-500 mt-2">
            Something went wrong while fetching members.
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
    <div className="p-8">
      <AdminPageHeader
        title="Members"
        description="Manage church members and their information"
        icon={Users}

/>
      <AdminTable
        title="Members"
        data={data}
        columns={columns}
        modalFields={fields}
      />
    </div>
  );
};

export default AdminMembers;

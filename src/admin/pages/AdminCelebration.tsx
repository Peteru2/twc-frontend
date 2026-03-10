import { useEffect, useState } from "react";
import { getCelebrations} from "../services/others";
import AdminTable from "../components/modal/AdminTable";


const AdminCelebrations = () => {
 const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await getCelebrations();
    setData(res.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const columns = [
    {
      label: "Name",
      key: "name",
      render: (row: any) =>
        `${row.firstName} ${row.lastName}`,
    },
    { label: "Email", key: "email" },
    { label: "Phone", key: "phone" },
    { label: "Country", key: "country" },
    {
      label: "Date",
      key: "createdAt",
      render: (row: any) =>
        new Date(row.createdAt).toDateString(),
    }
  ];

  const fields = [
    { label: "First Name", key: "firstName" },
    { label: "Last Name", key: "lastName" },
    { label: "Email", key: "email" },
    { label: "Phone", key: "phone" },
    { label: "Country", key: "country" },
    { label: "State", key: "state" },
    { label: "Celebration Type", key: "celebrationType" },
    { label: "Membership Class", key: "membershipClass" },
    { label: "Born Again", key: "bornAgain" },
    { label: "Hear About Us", key: "hearAboutUs" },
    { label: "Contact Preference", key: "contact" }
  ];

  return (
    <AdminTable
      title="First Timers"
      data={data}
      columns={columns}
      modalFields={fields}
    />
  );
};

export default AdminCelebrations;
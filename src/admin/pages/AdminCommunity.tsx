import { useEffect, useState } from "react";
import { getCommunity} from "../services/others";
import AdminTable from "../components/modal/AdminTable";


const AdminCommunity = () => {
 const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await getCommunity();
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
    { label: "Connection Method", key: "connectionMethod" },
    { label: "First Time Attending Twc?", key: "firstTime" },
    { label: "Prayer Request", key: "prayerRequest" }
  ];

  return (
    <AdminTable
      title="Online Community"
      data={data}
      columns={columns}
      modalFields={fields}
    />
  );
};

export default AdminCommunity;
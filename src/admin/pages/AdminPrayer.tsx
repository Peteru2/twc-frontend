import { useEffect, useState } from "react";
import { getPrayer} from "../services/others";
import AdminTable from "../components/modal/AdminTable";


const AdminPrayer = () => {
 const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await getPrayer();
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
    { label: "Prayer Type ", key: "prayerType" },
    { label: "Prayer Request ", key: "prayerRequest" },
    { label: "Contact Method", key: "contactMethod" },
    { label: "Membership Class", key: "membershipClass" },
    { label: "Should this be confidential", key: "confidential" },
    
  ];

  return (
    <AdminTable
      title="Celebrations"
      data={data}
      columns={columns}
      modalFields={fields}
    />
  );
};

export default AdminPrayer;
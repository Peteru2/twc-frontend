import { useEffect, useState } from "react";
import { getNewsLetter } from "../services/others";
import AdminTable from "../components/modal/AdminTable";


const AdminNewsLetter = () => {
 const [data, setData] = useState([]);
  const fetchData = async () => {
    const res = await getNewsLetter();
    setData(res.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const columns = [
    { label: "Email", key: "email" },
    {
      label: "Date",
      key: "createdAt",
      render: (row: any) =>
        new Date(row.createdAt).toDateString(),
    }
  ];

  const fields = [
    { label: "Email", key: "email" },
  ];

  return (
    <AdminTable
      title="Newsletters"
      data={data}
      columns={columns}
      modalFields={fields}
    />
  );
};

export default AdminNewsLetter;
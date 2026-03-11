import { useEffect, useState } from "react";
import { getMembers} from "../services/others";
import AdminTable from "../components/modal/AdminTable";


const AdminMembers = () => {
 const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await getMembers();
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
    { label: "City", key: "city" },
    { label: "State", key: "state" },
    { label: "Birth Day", key: "birthday" },
    { label: "Gender", key: "gender" },
    { label: "Age Range", key: "ageRange" },
    { label: "Marital Status", key: "maritalStatus" },
    { label: "Employment Status", key: "employmentStatus" },
    { label: "Have you completed your Membership Class?", key: "membershipClass" },
    
    


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

export default AdminMembers;
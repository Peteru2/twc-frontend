import { useState } from "react";
import DataModal from "./DataModal";

interface Column {
  label: string;
  key: string;
  render?: (row: any) => React.ReactNode;
}

interface Field {
  label: string;
  key: string;
}

interface Props {
  title: string;
  data: any[];
  columns: Column[];
  modalFields: Field[];
}

const AdminTable = ({ title, data, columns, modalFields }: Props) => {
  const [selected, setSelected] = useState<any>(null);

  return (
    <div className="p-6">

      <h1 className="text-xl font-semibold mb-6">
        {title}
      </h1>

      <div className="bg-white shadow rounded-xl overflow-hidden">

        <table className="w-full text-sm">

          <thead className="bg-gray-100 text-gray-600">

            <tr>
              {columns.map((col) => (
                <th key={col.key} className="p-4 text-left">
                  {col.label}
                </th>
              ))}
            </tr>

          </thead>

          <tbody>

            {data.map((row) => (
              <tr
                key={row._id}
                onClick={() => setSelected(row)}
                className="border-b hover:bg-gray-50 cursor-pointer transition"
              >

                {columns.map((col) => (
                  <td key={col.key} className="p-4">

                    {col.render
                      ? col.render(row)
                      : row[col.key]}

                  </td>
                ))}

              </tr>
            ))}

          </tbody>

        </table>

      </div>

      {selected && (
        <DataModal
          title={title}
          data={selected}
          fields={modalFields}
          onClose={() => setSelected(null)}
        />
      )}

    </div>
  );
};

export default AdminTable;
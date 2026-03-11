import { useEffect, useState } from "react";
import { getSermons, deleteSermon } from "../services/sermonService";
import { toast } from "react-toastify";
import { Link } from "react-router";

const ViewAllSermons = () => {
  const [sermons, setSermons] = useState([]);

  const fetchSermons = async () => {
    const res = await getSermons();
    setSermons(res.data.data);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this sermon?")) return;

    try {
      const res = await deleteSermon(id);
      toast.success(res.data.message || "Sermon deleted successfully");
      fetchSermons();
    } catch (error) {
      toast.error("Failed to delete sermon");
    }
  };
  useEffect(() => {
    fetchSermons();
  }, []);

  return (
    <div className="">
      <div className="flex w-full mb-4">
        <h1 className="text-xl font-semibold mb-6">Sermons</h1>
        <Link
          to={"/admin/addsermon"}
          className="px-4 ml-auto bg-[#243a5e] text-center flex items-center text-white rounded-xl"
        >
          Upload Sermon
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {sermons.map((sermon: any) => (
          <div key={sermon._id} className="bg-white rounded-xl shadow p-4">
            <img
              src={sermon.imageUrl}
              className="rounded-lg mb-3 h-40 w-full object-cover"
            />

            <h2 className="font-semibold">{sermon.title}</h2>

            <p className="text-sm text-gray-500">{sermon.preacher}</p>

            <p className="text-xs text-gray-400 mb-3">
              {new Date(sermon.date).toDateString()}
            </p>

            <div className="flex gap-3">
              <button className="bg-blue-500 cursor-pointer text-white px-3 py-1 rounded">
                Edit
              </button>

              <button
                onClick={() => handleDelete(sermon._id)}
                className="bg-red-500 cursor-pointer  text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAllSermons;

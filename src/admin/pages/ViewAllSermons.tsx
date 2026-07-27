import { useEffect, useState } from "react";
import { getSermons, deleteSermon } from "../services/sermonService";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Mic2, Plus, RefreshCcw, Trash2, Edit, Inbox } from "lucide-react";
import AdminPageHeader from "../components/AdminPageHeader";

interface Sermon {
  _id: string;
  title: string;
  preacher: string;
  imageUrl: string;
  date: string;
}

const ViewAllSermons = () => {
  const [sermons, setSermons] = useState<Sermon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);

  const fetchSermons = async () => {
    try {
      setLoading(true);
      setError(false);

      const res = await getSermons();

      setSermons(res.data.data);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this sermon?",
    );

    if (!confirmDelete) return;

    try {
      setDeleting(id);

      const res = await deleteSermon(id);

      toast.success(res.data.message || "Sermon deleted successfully");

      fetchSermons();
    } catch (error) {
      toast.error("Failed to delete sermon");
    } finally {
      setDeleting(null);
    }
  };

  useEffect(() => {
    fetchSermons();
  }, []);

  if (loading) {
    return (
      <div className="p-8">
        <div className="grid md:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="
bg-white
rounded-2xl
p-4
shadow-sm
animate-pulse
"
            >
              <div
                className="
h-40
bg-gray-200
rounded-xl
mb-4
"
              />

              <div
                className="
h-5
bg-gray-200
rounded
w-3/4
mb-3
"
              />

              <div
                className="
h-4
bg-gray-200
rounded
w-1/2
"
              />
            </div>
          ))}
        </div>
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
          <h2 className="text-xl font-semibold">Unable to load sermons</h2>

          <p className="text-gray-500 mt-2">
            Something went wrong while fetching sermons.
          </p>

          <button
            onClick={fetchSermons}
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
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <AdminPageHeader
          title="Sermons"
          description="Manage uploaded sermons, messages, and teaching resources"
          icon={Mic2}
        />

        <Link
          to="/admin/addsermon"
          className="
ml-6
flex
items-center
gap-2
bg-[#243a5e]
text-white
px-5
py-3
rounded-xl
hover:opacity-90
transition
"
        >
          <Plus size={18} />
          Upload Sermon
        </Link>
      </div>

      {sermons.length === 0 ? (
        <div
          className="
bg-white
rounded-2xl
border
border-gray-100
py-20
flex
flex-col
items-center
justify-center
"
        >
          <div
            className="
w-16
h-16
rounded-full
bg-gray-100
flex
items-center
justify-center
mb-4
"
          >
            <Inbox className="text-gray-400" />
          </div>

          <h3 className="font-semibold text-gray-700">No sermons available</h3>

          <p className="text-sm text-gray-400 mt-2">
            Upload your first sermon to get started.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {sermons.map((sermon) => (
            <div
              key={sermon._id}
              className="
bg-white
rounded-2xl
shadow-sm
border
border-gray-100
overflow-hidden
hover:shadow-md
transition
"
            >
              <img
                src={sermon.imageUrl}
                className="
h-44
w-full
object-cover
"
                alt={sermon.title}
              />

              <div className="p-5">
                <h2
                  className="
font-semibold
text-gray-800
text-lg
"
                >
                  {sermon.title}
                </h2>

                <p
                  className="
text-sm
text-gray-500
mt-1
"
                >
                  {sermon.preacher}
                </p>

                <p
                  className="
text-xs
text-gray-400
mt-2
"
                >
                  {new Date(sermon.date).toDateString()}
                </p>

                <div
                  className="
flex
gap-3
mt-5
"
                >
                  <Link
                    to={`/admin/edit-sermon/${sermon._id}`}
                    className="
flex
items-center
gap-1
bg-blue-500
text-white
px-4
py-2
rounded-lg
text-sm
"
                  >
                    <Edit size={15} />
                    Edit
                  </Link>

                  <button
                    disabled={deleting === sermon._id}
                    onClick={() => handleDelete(sermon._id)}
                    className="
flex
items-center
gap-1
bg-red-500
disabled:opacity-50
text-white
px-4
py-2
rounded-lg
text-sm
"
                  >
                    {deleting === sermon._id ? (
                      "Deleting..."
                    ) : (
                      <>
                        <Trash2 size={15} />
                        Delete
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewAllSermons;

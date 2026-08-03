// Replace your AdminEvents component with this version that calls the API directly

import { useState, useMemo, useEffect } from "react";
import { getEvents, updateEvent, deleteEvent } from "../services/others";
import AdminTable from "../components/modal/AdminTable";
import SkeletonLoader from "../components/SkeletonLoader";
import AdminPageHeader from "../components/AdminPageHeader";
import { Calendar, MapPin, RefreshCcw, Search, Trash2, Edit, Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import uploadFile from "../utils/UploadFile";
import useApi from "../hooks/useApi";
import { Link } from "react-router";




interface Event {
  _id: string;
  title: string;
  description: string;
  flier: string[];
  startDate: string;
  endDate: string;
  dateDisplay: string;
  location: string;
  createdAt: string;
}

type EventStatus = "upcoming" | "ongoing" | "past";

interface EditFormInputs {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  dateDisplay: string;
  location: string;
  flier?: FileList;
}

const AdminEvents = () => {
  // Call API directly instead of using useAdminFetch
  const [allEventsArray, setAllEventsArray] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // const { request: updateRequest, loading: updating } = useApi();
  const { request: deleteRequest, loading: deleting } = useApi();

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<EventStatus | "all">("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const itemsPerPage = 10;

  // Fetch events directly
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await getEvents();
        console.log("📊 API Response:", response);
        
        // Access .data to get the actual response (AxiosResponse wraps it)
        const apiData = response.data || response;
        
        let events: Event[] = [];
        
        // Handle different response structures
        if (Array.isArray(apiData)) {
          console.log("Response is array, length:", apiData.length);
          events = apiData;
        } else if (apiData.data) {
          if (Array.isArray(apiData.data)) {
            console.log("Response.data is array, length:", apiData.data.length);
            events = apiData.data;
          } else if (apiData.data.ongoing !== undefined) {
            console.log("Response.data has categorized events");
            const { ongoing = [], upcoming = [], past = [] } = apiData.data;
            events = [...ongoing, ...upcoming, ...past];
          }
        } else if (apiData.ongoing !== undefined) {
          console.log("Response has categorized events at root");
          const { ongoing = [], upcoming = [], past = [] } = apiData;
          events = [...ongoing, ...upcoming, ...past];
        }
        
        console.log(`Total events: ${events.length}`);
        setAllEventsArray(events);
      } catch (err: any) {
        console.error("Error fetching events:", err);
        setError(err.message || "Failed to fetch events");
        setAllEventsArray([]);
      } finally {
        setLoading(false);
      }
    };
    
    fetchEvents();
  }, []);

  const allEvents = useMemo(() => {
    return allEventsArray;
  }, [allEventsArray]);

  const getEventStatus = (event: Event): EventStatus => {
    const now = new Date();
    const startDate = new Date(event.startDate);
    const endDate = new Date(event.endDate);

    if (now < startDate) return "upcoming";
    if (now >= startDate && now <= endDate) return "ongoing";
    return "past";
  };

  const filteredEvents = useMemo(() => {
    return allEvents.filter((event) => {
      // Add null/undefined checks before calling toLowerCase
      const title = event?.title || "";
      const location = event?.location || "";
      const description = event?.description || "";
      
      const matchesSearch = title
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
        location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === "all" || getEventStatus(event) === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [allEvents, searchTerm, statusFilter]);

  const paginatedEvents = useMemo(() => {
    const startIdx = (currentPage - 1) * itemsPerPage;
    return filteredEvents.slice(startIdx, startIdx + itemsPerPage);
  }, [filteredEvents, currentPage]);

  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);

  const handleDelete = async (eventId: string) => {
    if (!window.confirm("Are you sure you want to delete this event?")) return;

    await deleteRequest(async () => {
      return deleteEvent(eventId);
    }, "Event deleted successfully!");

    // Refresh events
    const response = await getEvents();
    const apiData = response.data || response;
    let events: Event[] = [];
    if (Array.isArray(apiData)) {
      events = apiData;
    } else if (apiData.data?.ongoing !== undefined) {
      const { ongoing = [], upcoming = [], past = [] } = apiData.data;
      events = [...ongoing, ...upcoming, ...past];
    } else if (apiData.ongoing !== undefined) {
      const { ongoing = [], upcoming = [], past = [] } = apiData;
      events = [...ongoing, ...upcoming, ...past];
    }
    setAllEventsArray(events);
  };

  const handleEditClick = (event: Event) => {
    setEditingEvent(event);
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setEditingEvent(null);
  };

  const StatusBadge = ({ status }: { status: EventStatus }) => {
    const colors = {
      upcoming: "bg-blue-100 text-blue-800",
      ongoing: "bg-green-100 text-green-800",
      past: "bg-gray-100 text-gray-800",
    };

    const labels = {
      upcoming: "Upcoming",
      ongoing: "Ongoing",
      past: "Past",
    };

    return (
      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${colors[status]}`}>
        {labels[status]}
      </span>
    );
  };

  const columns = [
    {
      label: "Event",
      key: "event",
      render: (row: Event) => (
        <div className="flex items-center gap-3">
          <img
            src={row.flier[0]}
            alt={row.title}
            className="w-12 h-12 rounded-lg object-cover"
          />
          <div>
            <p className="font-medium text-gray-800">{row.title}</p>
            <p className="text-xs text-gray-500">{row.dateDisplay}</p>
          </div>
        </div>
      ),
    },

    {
      label: "Location",
      key: "location",
      render: (row: Event) => (
        <div className="flex items-center gap-2 text-gray-600">
          <MapPin size={14} />
          <span>{row.location}</span>
        </div>
      ),
    },

    {
      label: "Status",
      key: "status",
      render: (row: Event) => <StatusBadge status={getEventStatus(row)} />,
    },

    {
      label: "Date",
      key: "createdAt",
      render: (row: Event) => (
        <span className="text-gray-500">
          {new Date(row.createdAt).toLocaleDateString()}
        </span>
      ),
    },

    {
      label: "Actions",
      key: "actions",
      render: (row: Event) => (
        <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleEditClick(row);
            }}
            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
            title="Edit event"
          >
            <Edit size={16} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleDelete(row._id);
            }}
            disabled={deleting}
            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition disabled:opacity-50"
            title="Delete event"
          >
            <Trash2 size={16} />
          </button>
        </div>
      ),
    },
  ];

  const fields = [
    { label: "Title", key: "title" },
    { label: "Description", key: "description" },
    {
      label: "Start Date",
      key: "startDate",
      render: (value: string) => new Date(value).toLocaleString(),
    },
    {
      label: "End Date",
      key: "endDate",
      render: (value: string) => new Date(value).toLocaleString(),
    },
    { label: "Display Date", key: "dateDisplay" },
    { label: "Location", key: "location" },
    {
      label: "Status",
      key: "status",
      render: (row: Event) => getEventStatus(row),
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
      <div className="min-h-[500px] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-800">
            Unable to load events
          </h2>

          <p className="text-gray-500 mt-2">{error}</p>

          <button
            onClick={() => window.location.reload()}
            className="mt-5 flex items-center gap-2 mx-auto bg-red-500 hover:bg-red-600 transition text-white px-5 py-2 rounded-lg"
          >
            <RefreshCcw size={16} />
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8  space-y-6">
      <div className="flex items-center justify-between">
      <AdminPageHeader
        title="Events Management"
        description="Manage all events, view details, edit, and delete events"
        icon={Calendar}
      />
       <Link
          to="/admin/addevent"
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
          Add Event
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search by title, location, or description..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="flex gap-2">
            {(["all", "upcoming", "ongoing", "past"] as const).map((status) => (
              <button
                key={status}
                onClick={() => {
                  setStatusFilter(status);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  statusFilter === status
                    ? "bg-red-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="text-sm text-gray-600">
          Showing {paginatedEvents.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0} to{" "}
          {Math.min(currentPage * itemsPerPage, filteredEvents.length)} of{" "}
          {filteredEvents.length} events
        </div>
      </div>

      {paginatedEvents.length > 0 ? (
        <>
          <AdminTable
            title="Events"
            data={paginatedEvents}
            columns={columns}
            modalFields={fields}
          />

          {totalPages > 1 && (
            <div className="bg-white rounded-lg shadow p-6 flex items-center justify-between">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>

              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-2 rounded-lg font-medium transition ${
                      currentPage === page
                        ? "bg-red-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="bg-white rounded-lg shadow p-12 text-center">
          <Calendar size={48} className="mx-auto text-gray-300 mb-4" />
          <h3 className="text-lg font-medium text-gray-700">No events found</h3>
          <p className="text-gray-500 mt-2">
            {searchTerm || statusFilter !== "all"
              ? "Try adjusting your search or filter criteria"
              : "Create your first event to get started"}
          </p>
        </div>
      )}

      {showEditModal && editingEvent && (
        <EditEventModal
          event={editingEvent}
          onClose={handleCloseEditModal}
          onSuccess={() => {
            // Refresh events after edit
            getEvents().then((response) => {
              const apiData = response.data || response;
              let events: Event[] = [];
              if (Array.isArray(apiData)) {
                events = apiData;
              } else if (apiData.data?.ongoing !== undefined) {
                const { ongoing = [], upcoming = [], past = [] } = apiData.data;
                events = [...ongoing, ...upcoming, ...past];
              } else if (apiData.ongoing !== undefined) {
                const { ongoing = [], upcoming = [], past = [] } = apiData;
                events = [...ongoing, ...upcoming, ...past];
              }
              setAllEventsArray(events);
            });
            handleCloseEditModal();
          }}
        />
      )}
    </div>
  );
};

// EditEventModal component
const EditEventModal = ({
  event,
  onClose,
  onSuccess,
}: {
  event: Event;
  onClose: () => void;
  onSuccess: () => void;
}) => {
  const { request, loading } = useApi();
  const { register, handleSubmit, formState: { errors } } = useForm<EditFormInputs>({
    defaultValues: {
      title: event.title,
      description: event.description,
      startDate: event.startDate.slice(0, 16),
      endDate: event.endDate.slice(0, 16),
      dateDisplay: event.dateDisplay,
      location: event.location,
    },
  });

  const onSubmit = async (data: EditFormInputs) => {
    try {
      console.log("Updating event with ID:", event._id);
      
      await request(async () => {
        let flierUrls = event.flier;

        if (data.flier && data.flier.length > 0) {
          const files = Array.from(data.flier);
          flierUrls = await Promise.all(
            files.map((file) => uploadFile(file, "image"))
          );
        }

        const updateData = {
          title: data.title,
          description: data.description,
          startDate: data.startDate,
          endDate: data.endDate,
          dateDisplay: data.dateDisplay,
          location: data.location,
          flier: flierUrls,
        };
        
        console.log("📤 Sending update data:", updateData);
        console.log("🔗 Event ID:", event._id);
        
        return updateEvent(event._id, updateData);
      }, "Event updated successfully!");

      onSuccess();
    } catch (error: any) {
      console.error("❌ Update error:", error);
      console.error("Error response:", error.response?.data);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">Edit Event</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title
            </label>
            <input
              {...register("title", { required: "Title is required" })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              {...register("description", {
                required: "Description is required",
              })}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Start Date
              </label>
              <input
                type="datetime-local"
                {...register("startDate", {
                  required: "Start date is required",
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              {errors.startDate && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.startDate.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                End Date
              </label>
              <input
                type="datetime-local"
                {...register("endDate", { required: "End date is required" })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              {errors.endDate && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.endDate.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Display Date
            </label>
            <input
              {...register("dateDisplay", {
                required: "Display date is required",
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            {errors.dateDisplay && (
              <p className="text-red-500 text-sm mt-1">
                {errors.dateDisplay.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <input
              {...register("location", { required: "Location is required" })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            {errors.location && (
              <p className="text-red-500 text-sm mt-1">
                {errors.location.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Event Flyers (Optional - leave empty to keep existing)
            </label>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {event.flier.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Flier ${idx + 1}`}
                  className="h-24 w-full object-cover rounded-lg"
                />
              ))}
            </div>
            <input
              type="file"
              multiple
              accept="image/*"
              {...register("flier")}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="flex gap-3 justify-end pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 font-medium"
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminEvents;
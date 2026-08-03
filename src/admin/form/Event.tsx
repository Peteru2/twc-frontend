import { useForm } from "react-hook-form";
import uploadFile from "../utils/UploadFile";
import { createEvent } from "../services/others";
import useApi from "../hooks/useApi";
import { LoaderCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

export interface EventFormInputs {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  dateDisplay: string;
  location: string;
  flier: FileList;
}

const AddEventForm = () => {
  const { request, loading } = useApi();
  const [imagePreview, setImagePreview] = useState<string[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm<EventFormInputs>();

  const startDate = watch("startDate");
  const endDate = watch("endDate");

  const onSubmit = async (data: EventFormInputs) => {
    // Clear previous file error
    setFileError("");

    // Validate files were selected
    if (selectedFiles.length === 0) {
      setFileError("At least one flyer image is required");
      return;
    }

    // Validate end date is after start date
    if (new Date(data.endDate) < new Date(data.startDate)) {
      alert("End date must be after start date");
      return;
    }

    await request(async () => {
      const flierUrls = await Promise.all(
        selectedFiles.map((file) => uploadFile(file, "image"))
      );

      return createEvent({
        title: data.title,
        description: data.description,
        startDate: data.startDate,
        endDate: data.endDate,
        dateDisplay: data.dateDisplay,
        location: data.location,
        flier: flierUrls,
      });
    }, "Event created successfully!");

    reset();
    setImagePreview([]);
    setSelectedFiles([]);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const fileArray = Array.from(files);
      setSelectedFiles(fileArray);
      setFileError(""); // Clear error when files are selected

      // Create previews
      const previews = fileArray.map((file) => URL.createObjectURL(file));
      setImagePreview(previews);
    }
  };

  return (
    <div className="flex justify-center p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-xl shadow w-full max-w-2xl space-y-5"
      >
        <h2 className="text-2xl font-bold text-[#E80F1A] text-center">
          Create Event
        </h2>

        {/* TITLE */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Event Title *
          </label>
          <input
            placeholder="Enter event title"
            {...register("title", { required: "Event title is required" })}
            className="w-full px-3 py-4
      border border-gray-300
      rounded-md
      bg-white
      text-sm
      outline-none
      transition-all duration-200
      focus:border-red-500
      focus:ring-2 focus:ring-red-100"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">
              {errors.title.message}
            </p>
          )}
        </div>

        {/* DESCRIPTION */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description *
          </label>
          <textarea
            placeholder="Describe the event details"
            rows={4}
            {...register("description", {
              required: "Event description is required",
            })}
            className="w-full px-3 py-4
      border border-gray-300
      rounded-md
      bg-white
      text-sm
      outline-none
      transition-all duration-200
      focus:border-red-500
      focus:ring-2 focus:ring-red-100
      resize-none"
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* DATE FIELDS */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Start Date & Time *
            </label>
            <input
              type="datetime-local"
              {...register("startDate", {
                required: "Start date is required",
              })}
              className="w-full px-3 py-4
        border border-gray-300
        rounded-md
        bg-white
        text-sm
        outline-none
        transition-all duration-200
        focus:border-red-500
        focus:ring-2 focus:ring-red-100"
            />
            {errors.startDate && (
              <p className="text-red-500 text-sm mt-1">
                {errors.startDate.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              End Date & Time *
            </label>
            <input
              type="datetime-local"
              {...register("endDate", {
                required: "End date is required",
              })}
              className="w-full px-3 py-4
        border border-gray-300
        rounded-md
        bg-white
        text-sm
        outline-none
        transition-all duration-200
        focus:border-red-500
        focus:ring-2 focus:ring-red-100"
            />
            {errors.endDate && (
              <p className="text-red-500 text-sm mt-1">
                {errors.endDate.message}
              </p>
            )}
            {startDate && endDate && new Date(endDate) < new Date(startDate) && (
              <p className="text-orange-500 text-sm mt-1 flex items-center gap-1">
                <AlertCircle size={14} /> End date must be after start date
              </p>
            )}
          </div>
        </div>

        {/* DISPLAY DATE */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Display Date (for UI) *
          </label>
          <input
            placeholder="Example: 1ST MAY – 7TH MAY, 2026"
            {...register("dateDisplay", {
              required: "Display date is required",
            })}
            className="w-full px-3 py-4
      border border-gray-300
      rounded-md
      bg-white
      text-sm
      outline-none
      transition-all duration-200
      focus:border-red-500
      focus:ring-2 focus:ring-red-100"
          />
          <p className="text-xs text-gray-500 mt-1">
            This is how the date will display to users
          </p>
          {errors.dateDisplay && (
            <p className="text-red-500 text-sm mt-1">
              {errors.dateDisplay.message}
            </p>
          )}
        </div>

        {/* LOCATION */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Location *
          </label>
          <input
            placeholder="Event venue or location"
            {...register("location", {
              required: "Location is required",
            })}
            className="w-full px-3 py-4
      border border-gray-300
      rounded-md
      bg-white
      text-sm
      outline-none
      transition-all duration-200
      focus:border-red-500
      focus:ring-2 focus:ring-red-100"
          />

          {errors.location && (
            <p className="text-red-500 text-sm mt-1">
              {errors.location.message}
            </p>
          )}
        </div>

        {/* FLIER UPLOAD */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Event Flyers *
          </label>
          <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-red-500 hover:bg-red-50 transition">
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
            <svg
              className="w-8 h-8 text-gray-400 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            <span className="text-sm text-gray-600">
              Click to upload or drag and drop
            </span>
            <span className="text-xs text-gray-500 mt-1">
              PNG, JPG, GIF up to 10MB
            </span>
          </label>

          {imagePreview.length > 0 && (
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-700 mb-2">
                Preview ({imagePreview.length} file{imagePreview.length !== 1 ? "s" : ""})
              </p>
              <div className="grid grid-cols-3 gap-3">
                {imagePreview.map((preview, idx) => (
                  <img
                    key={idx}
                    src={preview}
                    alt={`Preview ${idx + 1}`}
                    className="h-24 w-full object-cover rounded-lg border border-gray-200"
                  />
                ))}
              </div>
            </div>
          )}

          {fileError && (
            <p className="text-red-500 text-sm mt-2">
              {fileError}
            </p>
          )}
        </div>

        {/* SUBMIT BUTTON */}
        <button
          disabled={loading}
          type="submit"
          className={`w-full py-3 rounded-lg font-medium text-white transition-all duration-200 flex items-center justify-center gap-2 ${
            loading
              ? "bg-red-700 cursor-not-allowed"
              : "bg-[#E80F1A] hover:bg-red-700"
          }`}
        >
          {loading ? (
            <>
              Creating event{" "}
              <LoaderCircle size={18} className="animate-spin" />
            </>
          ) : (
            "Create Event"
          )}
        </button>
      </form>
    </div>
  );
};

export default AddEventForm;
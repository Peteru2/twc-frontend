import { useForm } from "react-hook-form";
import uploadFile from "../utils/UploadFile";
import { createEvent } from "../services/others";
import useApi from "../hooks/useApi";
import { LoaderCircle } from "lucide-react";


export interface EventFormInputs {
  title: string;
  dateISO?: string;
  dateDisplay: string;
  location: string;
  flier: FileList;
}

const AddEventForm = () => {
  const { request, loading } = useApi();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EventFormInputs>();

  const onSubmit = async (data: EventFormInputs) => {
    await request(async () => {
      const files = Array.from(data.flier);

      const flierUrls = await Promise.all(
        files.map((file) => uploadFile(file, "image"))
      );

      return createEvent({
        title: data.title,
        dateISO: data.dateISO,
        dateDisplay: data.dateDisplay,
        location: data.location,
        flier: flierUrls,
      });
    }, "Event uploaded successfully!");

    reset();
  };

  return (
    <div className="flex justify-center p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-xl shadow w-full max-w-lg space-y-5"
      >
        <h2 className="text-xl  viga  text-[#E80F1A] font-bold text-center">
          Upload Event
        </h2>

        {/* TITLE */}
        <div>
          <input
            placeholder="Event Title"
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

        {/* DATE ISO */}
        <div>
          <input
            type="datetime-local"
            {...register("dateISO")}
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
        </div>

        {/* DATE DISPLAY */}
        <div>
          <input
            placeholder="Display Date (Example: 1ST MAY – 7TH MAY, 2026)"
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

          {errors.dateDisplay && (
            <p className="text-red-500 text-sm mt-1">
              {errors.dateDisplay.message}
            </p>
          )}
        </div>

        {/* LOCATION */}
        <div>
          <input
            placeholder="Location"
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
          <input
            type="file"
            multiple
            accept="image/*"
            {...register("flier", {
              required: "Please upload at least one flyer",
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

          {errors.flier && (
            <p className="text-red-500 text-sm mt-1">
              {errors.flier.message}
            </p>
          )}
        </div>

        {/* BUTTON */}
         <button
          disabled={loading}
          type="submit"
          className={`${loading ? "bg-red-700" : ""} w-full bg-[#E80F1A] text-white text-center py-3 cursor-pointer rounded-lg hover:bg-red-700`}
        >
          {loading ? (
            <>
              <h2 className="flex text-center w-full items-center justify-center">
                Uploading{" "}
                <LoaderCircle size="18" className="ml-2 animate-spin h-6 w-6" />
              </h2>
            </>
          ) : (
            <>Upload Event</>
          )}
          </button>
      </form>
    </div>
  );
};

export default AddEventForm;
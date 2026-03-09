import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";
import { Upload } from "lucide-react";
import Input from "../SermonInput";

export interface SermonFormInputs {
  title: string;
  scripture: string;
  preacher: string;
  category: string;
  date: string;
  duration: number;
  image: FileList;
  audio: FileList;
  placeholder:string
}

interface Props {
  onSubmit: (data: SermonFormInputs) => Promise<void>;
  loading: boolean;
}

const AddSermonForm = ({ onSubmit, loading }: Props) => {
  const [imageName, setImageName] = useState("");
  const [audioName, setAudioName] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SermonFormInputs>();

  const submitHandler: SubmitHandler<SermonFormInputs> = async (data) => {
    await onSubmit(data);
  };

  return (
    <div className="flex justify-center items-start min-h-screen p-4">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg space-y-4"
      >
        <h2 className="text-2xl font-bold text-red-600 mb-6 text-center">
          Add Sermon
        </h2>
         <Input
                  placeholder="Title"
                          {...register("title", {
                            required: "Title is required",
                          
                          })} />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}


        <Input
           placeholder="Scripture"
            {...register("scripture", {
            required: "Scripture is required",
                          
                          })} />
        {errors.scripture && (
          <p className="text-red-500">{errors.scripture.message}</p>
        )}


<Input
           placeholder="Preacher"
            {...register("preacher", {
            required: "Preacher is required",
                          
                          })} />
       {errors.preacher && (
          <p className="text-red-500">{errors.preacher.message}</p>
        )}

        
    

       
        

        <select
          {...register("category", { required: "Category is required" })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg
          
          outline-none
      transition-all duration-200
      focus:border-red-500
      focus:ring-2 focus:ring-red-100
          "
        >
          <option value="Faith">Faith</option>
          <option value="Grace">Grace</option>
          <option value="Prayer">Prayer</option>
          <option value="Salvation">Salvation</option>
          <option value="Worship">Worship</option>
          <option value="Other">Other</option>
        </select>



        <Input
          {...register("date", { required: "Date is required" })}
          type="date"
        
        />
        {errors.date && <p className="text-red-500">{errors.date.message}</p>}

        <Input
          {...register("duration", {
            required: "Duration is required",
            valueAsNumber: true,
          })}
          type="number"
          placeholder="Duration (seconds)"
        />
        {errors.duration && (
          <p className="text-red-500">{errors.duration.message}</p>
        )}

        <div>
          <label className="block mb-2 font-medium text-gray-500">Upload Image</label>

          <label className="flex items-center justify-center w-full p-4 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50">
            <span className="flex items-center justify-center gap-2 text-gray-600">
              <Upload size={18} />
              {imageName || "Click to upload image"}
            </span>

            <input
              type="file"
              accept="image/*"
              className="hidden"
              {...register("image", { required: "Image is required" })}
              onChange={(e) => {
                setImageName(e.target.files?.[0]?.name || "");
              }}
            />
          </label>

          {errors.image && (
            <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
          )}
        </div>

        <label className="block mb-2 font-medium mt-4 text-gray-500">Upload Audio</label>

        <label className="flex items-center justify-center w-full p-4 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50">
          <span className="flex items-center justify-center gap-2 text-gray-600">
            <Upload size={18} />
            {audioName || "Click to upload audio"}
          </span>

          <input
            type="file"
            accept="audio/*"
            className="hidden"
            {...register("audio", { required: "Audio is required" })}
            onChange={(e) => {
              setAudioName(e.target.files?.[0]?.name || "");
            }}
          />
        </label>

        {errors.audio && (
          <p className="text-red-500 text-sm mt-1">{errors.audio.message}</p>
        )}

        <button
          disabled={loading}
          type="submit"
          className={`${loading ? "bg-red-700" : ""} w-full bg-[#E80F1A] text-white text-center py-3 cursor-pointer rounded-lg hover:bg-red-700`}
        >
          {loading ? (
            <>
              <h2 className="flex text-center w-full items-center justify-center">
                Adding Sermon{" "}
                <LoaderCircle size="18" className="ml-2 animate-spin h-6 w-6" />
              </h2>
            </>
          ) : (
            <>Add Sermon</>
          )}
        </button>
      </form>
    </div>
  );
};

export default AddSermonForm;

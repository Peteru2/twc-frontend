import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

export interface SermonFormInputs {
  title: string;
  scripture: string;
  preacher: string;
  category: string;
  date: string;
  duration: number;
  image: FileList;
//   audio: FileList;
}

interface Props {
  onSubmit: (data: SermonFormInputs) => Promise<void>; 
}

const AddSermonForm = ({ onSubmit }: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<SermonFormInputs>();

  const submitHandler: SubmitHandler<SermonFormInputs> = async (data) => {
    await onSubmit(data); 
  };

  return (
    <div className="flex justify-center items-start min-h-screen p-4">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg space-y-4"
      >
        <h2 className="text-2xl font-bold text-[#E80F1A] mb-6 text-center">Add Sermon</h2>

        <input {...register("title", { required: "Title is required" })} placeholder="Title" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}

        <input {...register("scripture", { required: "Scripture is required" })} placeholder="Scripture" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
        {errors.scripture && <p className="text-red-500">{errors.scripture.message}</p>}

        <input {...register("preacher", { required: "Preacher is required" })} placeholder="Preacher" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
        {errors.preacher && <p className="text-red-500">{errors.preacher.message}</p>}

        <select {...register("category", { required: "Category is required" })} className="w-full px-4 py-3 border border-gray-300 rounded-lg">
          <option value="Faith">Faith</option>
          <option value="Grace">Grace</option>
          <option value="Prayer">Prayer</option>
          <option value="Salvation">Salvation</option>
          <option value="Worship">Worship</option>
          <option value="Other">Other</option>
        </select>

        <input {...register("date", { required: "Date is required" })} type="date" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
        {errors.date && <p className="text-red-500">{errors.date.message}</p>}

        <input {...register("duration", { required: "Duration is required", valueAsNumber: true })} type="number" placeholder="Duration (seconds)" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
        {errors.duration && <p className="text-red-500">{errors.duration.message}</p>}

         <input {...register("image", { required: "Image is required" })} type="file" accept="image/*" />
        {errors.image && <p className="text-red-500">{errors.image.message}</p>}

        {/*
        <input {...register("audio", { required: "Audio is required" })} type="file" accept="audio/*" />
        {errors.audio && <p className="text-red-500">{errors.audio.message}</p>} */}

        <button type="submit" className="w-full bg-[#E80F1A] text-white py-3 cursor-pointer rounded-lg hover:bg-red-700">Add Sermon</button>
      </form>
    </div>
  );
};

export default AddSermonForm;
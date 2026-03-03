// // components/AddSermonForm.tsx
// import { useForm,  Controller } from "react-hook-form";
// import type {SubmitHandler} from "react-hook-form";

// interface SermonFormInputs {
//   title: string;
//   scripture: string;
//   preacher: string;
//   category: string;
//   date: string;
//   duration: number;
//   image: FileList;
//   audio: FileList;
// }

// interface Props {
//   onSubmit: (data: FormData) => void;
// }

// const AddSermonForm = ({ onSubmit }: Props) => {
//   const { register, handleSubmit, control, formState: { errors } } =
//     useForm<SermonFormInputs>();

//   const submitHandler: SubmitHandler<SermonFormInputs> = (data) => {
//     const formData = new FormData();
//     formData.append("title", data.title);
//     formData.append("scripture", data.scripture);
//     formData.append("preacher", data.preacher);
//     formData.append("category", data.category);
//     formData.append("date", data.date);
//     formData.append("duration", data.duration.toString());
//     formData.append("image", data.image[0]);
//     formData.append("audio", data.audio[0]);

//     onSubmit(formData);
//   };

//   return (
//     <div className="flex justify-center items-start min-h-screen  p-4">
//       <form
//         onSubmit={handleSubmit(submitHandler)}
//         className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg space-y-4"
//       >
//         <h2 className="text-2xl viga font-bold text-[#E80F1A] mb-6 text-center">
//           Add Sermon
//         </h2>

//         <input
//           {...register("title", { required: "Title is required" })}
//           type="text"
//           placeholder="Title"
//           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E80F1A]"
//         />
//         {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}

//         <input
//           {...register("scripture", { required: "Scripture is required" })}
//           type="text"
//           placeholder="Scripture (e.g., Phil. 1:20)"
//           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E80F1A]"
//         />
//         {errors.scripture && <p className="text-red-500 text-sm">{errors.scripture.message}</p>}

//         <input
//           {...register("preacher", { required: "Preacher is required" })}
//           type="text"
//           placeholder="Preacher"
//           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E80F1A]"
//         />
//         {errors.preacher && <p className="text-red-500 text-sm">{errors.preacher.message}</p>}

//         <select
//           {...register("category", { required: "Category is required" })}
//           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E80F1A]"
//         >
//           <option value="Faith">Faith</option>
//           <option value="Grace">Grace</option>
//           <option value="Prayer">Prayer</option>
//           <option value="Salvation">Salvation</option>
//           <option value="Worship">Worship</option>
//           <option value="Other">Other</option>
//         </select>

//         <input
//           {...register("date", { required: "Date is required" })}
//           type="date"
//           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E80F1A]"
//         />
//         {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}

//         <input
//           {...register("duration", { required: "Duration is required", valueAsNumber: true })}
//           type="number"
//           placeholder="Duration (seconds)"
//           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E80F1A]"
//         />
//         {errors.duration && <p className="text-red-500 text-sm">{errors.duration.message}</p>}

//         <input
//           {...register("image", { required: "Image is required" })}
//           type="file"
//           accept="image/*"
//         />
//         {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}

//         <input
//           {...register("audio", { required: "Audio is required" })}
//           type="file"
//           accept="audio/*"
//         />
//         {errors.audio && <p className="text-red-500 text-sm">{errors.audio.message}</p>}

//         <button
//           type="submit"
//           className="w-full lato cursor-pointer  bg-[#E80F1A] text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors mt-4"
//         >
//           Add Sermon
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddSermonForm;
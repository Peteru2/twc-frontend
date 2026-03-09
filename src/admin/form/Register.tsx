import { useForm,  } from "react-hook-form";
import type {SubmitHandler} from "react-hook-form";
import { LoaderCircle } from 'lucide-react';

interface RegisterFormInputs {
  name: string;
  email: string;
  password: string;
}

interface Props {
  onSubmit: (data: RegisterFormInputs) => void;
  loading: boolean
}

const AdminRegisterForm = ({ onSubmit, loading }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>();

  const submitHandler: SubmitHandler<RegisterFormInputs> = (data) => {
    onSubmit(data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen  p-4">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="bg-white shadow-4xl rounded-2xl shadow-lg p-4 w-full max-w-md"
      >
        <h2 className="text-2xl viga font-bold text-[#E80F1A] mb-6 text-center">
          Register Admin
        </h2>

        <input
          {...register("name", { required: "Name is required" })}
          type="text"
          placeholder="Name"
          className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E80F1A]"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mb-2">{errors.name.message}</p>
        )}

        <input
          {...register("email", { required: "Email is required" })}
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E80F1A]"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mb-2">{errors.email.message}</p>
        )}

        <input
          {...register("password", {
            required: "Password is required",
            minLength: { value: 6, message: "Password must be at least 6 characters" },
          })}
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E80F1A]"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mb-2">{errors.password.message}</p>
        )}

        <button
          type="submit"
          className="w-full lato cursor-pointer lato bg-[#E80F1A] text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
        >

          
           {loading?
        (
            <>
            <h2 className="flex text-center w-full items-center justify-center">Registering  <LoaderCircle size="18" className="ml-2 animate-spin h-6 w-6"/></h2></>
          ) :(
            <>
             Register
            </>
          ) 
        }
        </button>
      </form>
    </div>
  );
};

export default AdminRegisterForm;
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { LoaderCircle } from 'lucide-react';


interface LoginFormInputs {
  email: string;
  password: string;
}

interface Props {
  onSubmit: (data: LoginFormInputs) => void;
  loading: boolean

}

const AdminLoginForm = ({ onSubmit, loading }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const submitHandler: SubmitHandler<LoginFormInputs> = (data) => {
    onSubmit(data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen  p-4">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-md"
      >
        <h2 className="text-2xl viga font-bold text-[#E80F1A] mb-6 text-center">
          Admin Login
        </h2>

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
          {...register("password", { required: "Password is required" })}
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E80F1A]"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mb-2">{errors.password.message}</p>
        )}

        <button
          type="submit"
          className="w-full bg-[#E80F1A] lato  cursor-pointer text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
        >

           {loading?
        (
            <>
            <h2 className="flex text-center w-full items-center justify-center">Login in   <LoaderCircle size="18" className="ml-2 animate-spin h-6 w-6"/></h2></>
          ) :(
            <>
             Login
            </>
          ) 
        }
         
        </button>
      </form>
    </div>
  );
};

export default AdminLoginForm;
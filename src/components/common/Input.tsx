
const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    className="
      w-full px-3 py-2
      border border-gray-300
      rounded-md
      bg-white
      text-sm
      outline-none
      transition-all duration-200
      focus:border-red-500
      focus:ring-2 focus:ring-blue-100
    "
    {...props}
  />
);

export default Input
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];          
  register?: any;             
  name?: string;              
  error?: string;            
}

const Select = ({ options, register, name, error, ...props }: SelectProps) => {
  return (
    <div>
      <select
        {...(register && name ? register(name) : {})} 
        {...props} 
        className={`
          w-full px-3 py-2
          border border-gray-300
          rounded-md
          bg-white
          text-sm
          outline-none
          transition-all duration-200
          focus:border-blue-500
          focus:ring-2 focus:ring-blue-100
        `}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Select;
const Select = () => (
  <select
    className="
      w-full px-3 py-2
      border border-gray-300
      rounded-md
      bg-white
      text-sm
      outline-none
      transition-all duration-200
      focus:border-blue-500
      focus:ring-2 focus:ring-blue-100
    "
  >
    <option>Under 18</option>
    <option>18-25</option>
    <option>26-35</option>
  </select>
);


export default Select
interface RadioGroupProps {
  options: string[];
  name: string;
  register: any;
  style: string;
}

const RadioGroup = ({ options, name, register, style }: RadioGroupProps) => {
  return (
    <div className={`${style} flex gap-3 mt-2`}>
      {options.map((option) => (
        <label
          key={option}
          className="flex items-center gap-2 text-sm cursor-pointer"
        >
          <input
            type="radio"
            value={option}
            {...register(name, { required: true })}
            className="accent-blue-600"
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
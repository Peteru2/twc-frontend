interface RadioGroupProps {
  options: string[];
  name?: string;
  style:string;
}

const CheckBox = ({ options, style, name = "radio-group" }: RadioGroupProps) => {
  return (
    <div className={`${style} flex  gap-3 mt-2`}>
      {options.map((option) => (
        <label
          key={option}
          className="flex items-center gap-2 text-sm cursor-pointer"
        >
          <input
            type="checkbox"
            name={name}
            value={option}
            className="accent-blue-600"
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default CheckBox;
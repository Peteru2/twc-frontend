import type { UseFormRegister } from "react-hook-form";

interface CheckBoxProps {
  options: string[];
  name: string;
  style: string;
  register: UseFormRegister<any>;
}

const CheckBox = ({ options, style, name, register }: CheckBoxProps) => {
  return (
    <div className={`${style} flex gap-3 mt-2`}>
      {options.map((option) => (
        <label
          key={option}
          className="flex items-center gap-2 text-sm cursor-pointer"
        >
          <input
            type="checkbox"
            value={option}
            {...register(name)}
            className="accent-blue-600"
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default CheckBox;
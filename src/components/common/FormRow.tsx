interface FormRowProps {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
  error?: string | any;
}

const FormRow = ({ label, required, children, className, error }: FormRowProps) => (
  <div className={`mb-4 ${className || ""}`}>
    
    <div className="flex">
      <label className="text-sm font-medium mb-2 text-gray-700">
        {label}{" "}
        {required && <span className="text-red-500">(Required)</span>}
      </label>

      {error && (
        <span className="text-red-500 text-sm ml-auto">
          {error}
        </span>
      )}
    </div>

    <div>{children}</div>

  </div>
);

export default FormRow
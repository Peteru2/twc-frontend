interface FormRowProps {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}

const FormRow = ({ label, required, children, className }: FormRowProps) => (
  <div className={`mb-6 ${className || ""}`}>
    <label className="text-sm font-medium text-gray-700">
      {label}{" "}
      {required && <span className="text-red-500">(Required)</span>}
    </label>

    <div className="mt-2">{children}</div>
  </div>
);

export default FormRow
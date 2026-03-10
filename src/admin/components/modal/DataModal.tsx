interface Props {
  title: string;
  data: any;
  fields: { label: string; key: string }[];
  onClose: () => void;
}

const DataModal = ({ title, data, fields, onClose }: Props) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white w-[500px] rounded-xl shadow-lg p-6 relative">

        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 cursor-pointer"
        >
          ✕
        </button>

        <h2 className="text-lg font-semibold mb-5">
          {title} Details
        </h2>

        <div className="grid grid-cols-2 gap-4 text-sm">

          {fields.map((field) => (
            <div key={field.key}>
              <p className="text-gray-500">{field.label}</p>
              <p className="font-medium">
                {data[field.key]}
              </p>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default DataModal;
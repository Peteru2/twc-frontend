const FirstTimerModal = ({ data, close }: any) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-xl shadow-xl w-[500px] p-6 relative">

        <button
          onClick={close}
          className="absolute top-4 right-4 text-gray-500"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-4">
          First Timer Details
        </h2>

        <div className="grid grid-cols-2 gap-4 text-sm">

          <Info label="First Name" value={data.firstName} />
          <Info label="Last Name" value={data.lastName} />
          <Info label="Email" value={data.email} />
          <Info label="Phone" value={data.phone} />
          <Info label="Gender" value={data.gender} />
          <Info label="Country" value={data.country} />
          <Info label="State" value={data.state} />
          <Info label="Street" value={data.street} />
          <Info label="Membership Class" value={data.membershipClass} />
          <Info label="Born Again" value={data.bornAgain} />
          <Info label="Heard About Us" value={data.hearAboutUs} />
          <Info label="Contact Preference" value={data.contact} />

        </div>

      </div>

    </div>
  );
};

const Info = ({ label, value }: any) => (
  <div>
    <p className="text-gray-500">{label}</p>
    <p className="font-medium">{value}</p>
  </div>
);

export default FirstTimerModal;
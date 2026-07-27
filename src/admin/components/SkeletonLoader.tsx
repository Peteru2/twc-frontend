const SkeletonLoader = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 animate-pulse">
      <div className="flex justify-between mb-6">
        <div className="h-6 w-40 bg-gray-200 rounded" />

        <div className="h-10 w-32 bg-gray-200 rounded" />
      </div>

      <div className="space-y-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="
grid
grid-cols-4
gap-5
items-center
"
          >
            <div className="h-4 bg-gray-200 rounded" />

            <div className="h-4 bg-gray-200 rounded" />

            <div className="h-4 bg-gray-200 rounded" />

            <div className="h-4 bg-gray-200 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonLoader;

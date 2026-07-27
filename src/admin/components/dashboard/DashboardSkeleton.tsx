const DashboardSkeleton = () => {
  return (
    <div className="p-8 space-y-8 bg-gray-100 min-h-screen animate-pulse">

      {/* Welcome Skeleton */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="h-6 w-48 bg-gray-200 rounded mb-3"></div>
        <div className="h-4 w-72 bg-gray-200 rounded"></div>
      </div>


      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm p-6 h-32"
          >
            <div className="h-4 w-24 bg-gray-200 rounded"></div>
            <div className="h-10 w-16 bg-gray-300 rounded mt-5"></div>
          </div>
        ))}
      </div>


      {/* Lists */}
      <div className="grid md:grid-cols-2 gap-6">

        {Array.from({ length: 2 }).map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-sm"
          >

            <div className="h-5 w-40 bg-gray-300 rounded mb-6"></div>


            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-4 mb-5"
              >

                <div className="w-10 h-10 rounded-full bg-gray-300"></div>

                <div className="flex-1">
                  <div className="h-4 w-32 bg-gray-300 rounded mb-2"></div>
                  <div className="h-3 w-48 bg-gray-200 rounded"></div>
                </div>

              </div>
            ))}

          </div>
        ))}

      </div>


      {/* First Timers */}
      <div className="bg-white rounded-xl shadow-sm p-6">

        <div className="h-5 w-56 bg-gray-300 rounded mb-6"></div>


        {Array.from({ length: 3 }).map((_, i)=>(
          <div
            key={i}
            className="flex items-center gap-4 mb-5"
          >

            <div className="w-10 h-10 rounded-full bg-gray-300"></div>

            <div className="h-4 w-40 bg-gray-300 rounded"></div>

          </div>
        ))}

      </div>

    </div>
  );
};


export default DashboardSkeleton;
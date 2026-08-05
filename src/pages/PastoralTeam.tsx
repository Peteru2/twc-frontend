import Team from "../components/pastoralTeam/Team";
import { Seo } from "../components/seo/Seo";
const PastoralTeam = () => {
  return (
    <>
    <Seo
      title="Meet Our Pastoral Team"
      description="Meet the dedicated pastors and ministry leaders of True Worshippers Church. Learn about the team committed to shepherding, teaching God's Word, and serving the church with excellence."
      url="/team"
    />
      <section className="relative">
        {/* Hero Background */}
        <div className="relative h-[120px] md:h-[290px] overflow-hidden">
          <img
            src="/hero-bg.png"
            alt="Pastoral Team"
            className="absolute inset-0 z-20 w-full h-full object-cover"
          />

          {/* Tomato Overlay */}
          <div className="absolute inset-0 bg-[#E80F1A]"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            {/* Tag */}
            <span className="px-3 py-1 rounded-full bg-red-300/70 text-[9px] tracking-widest uppercase text-gray-700 font-semibold">
              The Leaders
            </span>

            {/* Heading */}
            <div className="relative mt-3">
              <h1 className="uppercase font-black leading-none text-4xl md:text-7xl">
                <span className="text-black">Pastoral</span>{" "}
                <span className="text-white">Team</span>
              </h1>
              <img
                src="/whiteLine.png"
                alt=""
                className="absolute left-1/2 -translate-x-1/2 mt-1 w-44 md:w-72"
              />
            </div>
          </div>
        </div>
        <Team />
      </section>
    </>
  );
};

export default PastoralTeam;

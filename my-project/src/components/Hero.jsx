import heroImage from "../assets/images/hero.png";

const Hero = () => {
  return (
    <section className="flex items-center justify-center p-7 sm:px-6 bg-gradient-to-br from-blue-100 to-white">
      <div className="max-w-4xl mx-auto flex flex-col-reverse md:flex-row items-center gap-6 md:gap-12 w-full">
        
        {/* Text Content */}

        <div className="relative z-10 w-full md:w-1/2 flex justify-center md:justify-start">
          <div
            className="
              backdrop-blur-lg 
              bg-white/40 
              border border-white/30 
              rounded-xl md:rounded-3xl 
              shadow-xl 
              p-4 sm:p-6 md:p-10 
              text-center md:text-left 
              space-y-3 sm:space-y-5 md:space-y-6
              transition-all
              w-full
              max-w-xl
            "
            style={{
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)",
              border: "1px solid rgba(255,255,255,0.18)",
            }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              ADmyBRAND AI Suite – <span className="text-blue-600">Marketing Reinvented</span>
            </h1>
            <p className="text-gray-700 text-sm sm:text-base md:text-xl">
              Say goodbye to manual marketing. Leverage AI to automate, analyze, and grow.
            </p>
            <button className=" sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-black rounded-full hover:bg-blue-700 transition shadow-lg shadow-blue-200/40 font-semibold text-sm sm:text-base md:text-lg">
              Try Free
            </button>
          </div>
        </div>

        {/* Image Content */}

        <div className="relative z-0 flex justify-center w-full md:w-1/2 mb-4 md:mb-0">
          <div className="backdrop-blur-lg bg-white/30 rounded-xl md:rounded-3xl shadow-lg p-2 sm:p-4 w-full max-w-[200px] sm:max-w-sm md:max-w-md lg:max-w-lg flex justify-center">
            <img
              src={heroImage}
              alt="AI Marketing Illustration"
              className="
                w-full 
                h-auto
                object-contain
                transition-all
              "
              style={{
                borderRadius: "1rem",
                boxShadow: "0 4px 24px 0 rgba(31, 38, 135, 0.10)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

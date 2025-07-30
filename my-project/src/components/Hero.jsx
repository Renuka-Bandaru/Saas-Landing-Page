import heroImage from "../assets/images/hero.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 bg-gradient-to-br from-blue-100 to-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
        {/* Text Content */}
        <div className="relative z-10 w-full">
          <div
            className="
              backdrop-blur-lg 
              bg-white/40 
              border border-white/30 
              rounded-2xl md:rounded-3xl 
              shadow-xl 
              p-6 sm:p-8 md:p-10 
              text-center md:text-left 
              space-y-5 md:space-y-6
              transition-all
            "
            style={{
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)",
              border: "1px solid rgba(255,255,255,0.18)",
            }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              ADmyBRAND AI Suite – <span className="text-blue-600">Marketing Reinvented</span>
            </h1>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl">
              Say goodbye to manual marketing. Leverage AI to automate, analyze, and grow.
            </p>
            <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-black rounded-full hover:bg-blue-700 transition shadow-lg shadow-blue-200/40 font-semibold text-base md:text-lg">
              Try Free
            </button>
          </div>
        </div>
        {/* Image Content */}
        <div className="relative z-0 flex justify-center w-full">
          <div className="backdrop-blur-lg bg-white/30 rounded-2xl md:rounded-3xl shadow-lg p-2 sm:p-4 w-full flex justify-center">
            <img
              src={heroImage}
              alt="AI Marketing Illustration"
              className="
                w-full 
                max-w-xs 
                sm:max-w-sm 
                md:max-w-md 
                lg:max-w-lg 
                mx-auto
                h-auto
                object-contain
                transition-all
              "
              style={{
                borderRadius: "1.5rem",
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

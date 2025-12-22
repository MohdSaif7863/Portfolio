import HeroImage from "../assets/saif.jpg";
import Resume from "../assets/Mohd-Saif.pdf";

const Hero = () => {
  const openResume = () => {
    const resumeUrl = `${window.location.origin}${Resume}`;
    window.open(resumeUrl, "_blank");
  };

  return (
    <div className="bg-black text-white text-center py-16">
      <img
        src={HeroImage}
        alt="Mohd Saif"
        className="mx-auto mb-8 w-[250px] h-[250px] rounded-[50%] object-cover transform 
        transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Mohd Saif
        </span>
        , Full-Stack Developer
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        I specialize in building modern and responsive web applications.
      </p>

      <div className="mt-8 space-x-4">
        <a
          href="mailto:mohdsaif5725@gmail.com"
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Contact With Me
        </a>

        <button
          onClick={openResume}
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          View / Download Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;

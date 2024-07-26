import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <h1 className="text-3xl font-bold">Moeed Rafi</h1>
      <p className="text-center text-gray-200 font-light md:px-20">
        Dedicated and passionate Frontend Developer adept at creating dynamic,
        responsive, and user-friendly web applications with a keen eye for
        design andperformance optimization. I am passionate about crafting
        innovative solutions to enhance user experiences.
      </p>

      <div className="flex gap-5">
        <a
          href="https://www.github.com/moeedrafi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/github-dark.svg" alt="LinkedIn" width={30} height={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/moeed-rafi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/linkedin-dark.svg"
            alt="LinkedIn"
            width={30}
            height={30}
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const handleDownload = () => {
    const url = "/resume.pdf";
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [text] = useTypewriter({
    words: ["Software Developer.", "Front-End Developer.", "UI Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });

  const resumePdf = process.env.PUBLIC_URL + "../public/resume.pdf";

  return (
    <div className="max-w-[1240px] md:px-10 flex items-center justify-center h-screen lg:mx-auto mb-10">
      <div className="md:w-[95%] w-full flex flex-col p-5 gap-7">
        <p className="text-[#5651ef] tracking-widest lowercase font-serif">
          Hi, my name is{" "}
        </p>
        <h1 className="lg:text-6xl sm:text-4xl text-gray-700 tracking-wide font-serif ">
          Prince Nimako,
        </h1>
        <h1 className="lg:text-6xl sm:text-4xl text-gray-300 tracking-wide font-sans">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#5651ef"
          />
        </h1>
        <p className="text-gray-600 sm:text-sm lg:text-[16px] text-justify font-light lg:w-[80%]">
          I am a front-end web developer specializing in building exceptional
          UI. Currently, I&apos;m focused on building responsive front-end web
          applications using React/Next.js while learning back-end technologies.
        </p>
        <div className="mt-5 flex gap-5">
          <button
            onClick={handleDownload}
            className="cursor-pointer uppercase text-lg text-[#5651ef] p-3 w-fit border-2 border-[#5651ef] hover:bg-[#5651ef] hover:text-white ease-in duration-300"
          >
            Download resume
          </button>
          <a href={resumePdf} target="_blank" rel="noopener noreferrer">
            <button className="cursor-pointer uppercase text-lg text-white bg-[#5651ef] p-3 w-fit border-2 border-[#5651ef] hover:bg-white hover:text-[#5651ef] ease-in duration-300">
              View Resume (PDF)
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

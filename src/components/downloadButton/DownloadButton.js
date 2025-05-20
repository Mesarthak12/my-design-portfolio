import React from "react";

const DownloadButton = () => {
  return (
    <div>
      <a
        href="/cindrella dsouza resume.pdf"
        download="Cindrella_Dsouza_Resume.pdf"
      >
        <button className="text-white w-[169px] h-[64px] cursor-pointer !bg-[#03045E] rounded-lg transition duration-300 ease-in-out transform hover:scale-110">
          <h1 className="font-medium text-xl font-poppins ">Download CV</h1>
        </button>
      </a>
    </div>
  );
};

export default DownloadButton;

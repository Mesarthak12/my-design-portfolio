import React from "react";

const Contact = () => {
  return (
    <div className="pt-[72px] lg:mb-28 bg-white">
      <div className="text-center">
        <div className="mt-4 text-black font-poppins font-semibold text-5xl/[72px] ">
          Contact Me
        </div>
        <div className="flex justify-center">
          <div className="mt-2 w-[731px] text-black font-poppins font-normal text-base/[24px]">
            What’s Next? Feel Free To Reach Out To Me If You Are Looking For A
            Developer, Have A Query, Or Simply Want To Connect.
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-[824px] h-auto bg-white mt-[72px] p-8 rounded-xl ">
            <form action={"/api/send-mail"} method="POST">
              <div className="flex flex-col justify-start mb-6 ">
                <label
                  className="flex text-black font-semibold text-base font-poppins mb-3"
                  for="username"
                >
                  Name
                </label>
                <input
                  className="h-[64px] rounded-lg p-6 placeholder:italic bg-[#F8F8F8]"
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter the name"
                  required
                />
              </div>
              <div className="flex flex-col justify-start mb-6">
                <label
                  className="flex text-black font-semibold text-base font-poppins mb-3"
                  for="email"
                >
                  Email-id
                </label>
                <input
                  className="h-[64px] rounded-lg p-6 placeholder:italic bg-[#F8F8F8]"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter the mail-id"
                  required
                />
              </div>
              <div className="flex flex-col justify-start mb-8">
                <label
                  className="flex text-black font-semibold text-base font-poppins mb-3"
                  for="message"
                >
                  Message
                </label>
                <textarea
                  className="h-[200px] rounded-lg p-6 placeholder:italic bg-[#F8F8F8]"
                  type="text"
                  id="message"
                  name="message"
                  placeholder="Enter the message "
                  required
                />
              </div>
              <div className="flex justify-end">
                <input
                  type="submit"
                  value="Contact me"
                  className="transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer	 p-2 font-poppins bg-[#03045E] text-white W-[136px] h-[46px] font-medium text-xl rounded-lg"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

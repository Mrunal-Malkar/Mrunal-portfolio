import { useState } from "react";
import PersonalCard from "../components/personalcard";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";
import Collaborate from "../components/collaborate";
import { motion } from "motion/react";

const About = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function sendEmail() {
    if (!email || !message) {
      return toast.error("Please fill all the fields of the form!");
    }

    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const isValidGmail = gmailRegex.test(email);
    if (!isValidGmail) {
      return toast.error("Please enter a valid Gmail address");
    }

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_SERVICE_ID!,
        import.meta.env.VITE_TEMPLATE_ID!,
        {
          email,
          message,
        },
        import.meta.env.VITE_PUBLIC_KEY!
      );

      if (response.status === 200) {
        toast.success(
          "Email sent successfully! Thank you for reaching out, I’ll get back to you soon!"
        );
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Error sending email, please try again later.");
    }
  }

  return (
    <>
      <motion.div
            initial={{ opacity: 0, x: 0, y:-200 }}
            whileInView={{ opacity: 100, x: 0, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.2 }}
      className=" w-full xl:w-5/12 p-2 xl:block flex flex-col items-center">
        <ToastContainer />
        <div className="w-full flex flex-col gap-y-4">
          <div className="text-white">
            <h1 className="text-5xl  xl:text-start text-center md:text-7xl font-bold">
              More about 
              <span className="text-[#914BF1] m-1 mx-2">
              me
              </span>
            </h1>
          </div>
          <div className="w-full overflow-hidden">
            <div className="w-full tracking-wide font-semisolid bg-[#272829] text-gray-300 rounded-2xl text-2xl xl:p-6 p-4">
              <p className="mb-4">
                I'm a 17-year-old passionate developer with over 8 months of
                self-driven learning fueled by curiosity. Along this journey,
                I've built several high-quality projects. My curiosity led me to
                explore fields like video editing, creative writing, 3D
                animation using Blender, and even trying my hand at being a
                faceless YouTuber. But nothing clicked like coding did.
              </p>
              <p className="mb-4">
                I'm also an avid reader, and some of the books that have shaped
                my mindset include:
              </p>
              <ul className="list-disc list-inside text-lg mb-4 font-medium flex flex-col gap-y-4">
                <li>
                  <strong>Atomic Habits</strong> – James Clear
                </li>
                <li>
                  <strong>Think and Grow Rich</strong> – Napoleon Hill
                </li>
                <li>
                  <strong>The Power of Your Subconscious Mind</strong> – Joseph
                  Murphy
                </li>
                <li>
                  <strong>Zero to One</strong> – Peter Thiel
                </li>
                <li>
                  <strong>Rich Dad Poor Dad</strong> – Robert Kiyosaki
                </li>
              </ul>
              <p className="mb-4">
                These books have helped me level up mentally and gain valuable
                insights. My ambition is to create something that will
                positively impact the world. Becoming a full-stack developer is
                my first and an important step on that path. Want to see if I’m
                capable of working with you? Let’s catch up on a call!
              </p>
            </div>
            <motion.div
            initial={{ opacity: 0, x: 0, y:-200 }}
            whileInView={{ opacity: 100, x: 0, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col xl:items-start items-center my-6 bg-[#272829] rounded-2xl overflow-hidden p-4">
              <h1 className="text-2xl font-bold text-white sm:text-3xl m-2">Reach me:</h1>
              <span className="text-lg mb-2 font-semibold text-white sm:text-2xl">Send an email</span>
              <div className="flex w-full border-t-2 border-t-slate-300 items-center p-4 justify-between rounded-xl overflow-hidden sm:w-[560px] xl:w-full">
                <p className="w-16 font-semibold h-full text-gray-100">Email:</p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  value={email}
                  placeholder="enter your email"
                  className="p-3 mb-2 border sm:w-[550px] h-full bg-slate-800 outline-0 font-medium text-white w-full xl:w-full border-gray-300 rounded-lg "
                />
              </div>
              <div className="flex flex-col w-full border-b-2 border-y-slate-300 rounded-xl p-4 items-center justify-between sm:w-[560px] xl:w-full">
                <div className="flex p-4 items-center justify-between w-full">
                <p className="text-gray-100 me-2 w-18">Message:</p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  placeholder="Enter your message"
                  className="p-3 mb-2 xl:w-full sm:w-[550px] w-full border outline-0 text-white font-medium rounded-lg border-gray-300 bg-slate-800"
                ></textarea>
                </div>
              <button
                onClick={sendEmail}
                className="p-2 px-4 w-full font-semibold tracking-wider ronded-lg overflow-hidden m-3 rounded-lg text-black bg-gray-400 hover:bg-gray-600"
              >
                Send
              </button>
              </div>
            </motion.div>
          </div>
        </div>
        <Collaborate />
      </motion.div>
      <span className="block xl:hidden">
        <PersonalCard />
      </span>
    </>
  );
};

export default About;

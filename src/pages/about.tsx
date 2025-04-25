import { useState } from "react";
import PersonalCard from "../components/personalcard";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "emailjs-com";
import Collaborate from "../components/collaborate";

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
      <div className="bg-amber-700 w-full xl:w-5/12 p-2">
        <ToastContainer />
        <div className="w-full flex bg-purple-400 flex-col gap-y-4">
          <div className="bg-green-200">
            <h1 className="text-5xl  xl:text-start text-center md:text-7xl font-bold">
              More about me
            </h1>
          </div>
          <div className="w-full bg-green-600">
            <div className="w-full text-2xl bg-green-200 p-4">
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
              <ul className="list-disc list-inside text-lg mb-4">
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
                my first and an important step on that path. Want to see if
                I’m capable of working with you? Let’s catch up on a call!
              </p>
            </div>
            <div className="flex flex-col xl:items-start items-center bg-blue-300 p-4">
              <h1 className="text-2xl mb-2">Reach me:</h1>
              <span className="text-lg mb-2">Send an email</span>
              <div className="flex w-full items-center justify-between sm:w-[560px] xl:w-full">
                <p className="w-16 bg-amber-200">Email:</p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  value={email}
                  placeholder="enter your email"
                  className="p-2 mb-2 border sm:w-[550px] w-full xl:w-full bg-red-400 border-gray-400 rounded "
                />
              </div>
              <div className="flex w-full items-center justify-between sm:w-[560px] xl:w-full">
                <p className="bg-amber-300 w-18">Message:</p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  placeholder="Enter your message"
                  className="p-2 mb-2 xl:w-full sm:w-[550px] w-full border border-gray-400 rounded "
                ></textarea>
              </div>
              <button
                onClick={sendEmail}
                className="bg-red-400 p-2 rounded text-white hover:bg-red-500"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      <Collaborate/>
      </div>
      <span className="block xl:hidden">
        <PersonalCard />
      </span>
    </>
  );
};

export default About;

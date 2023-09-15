'use client'

import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import toast from 'react-hot-toast';
import { TailSpin } from "react-loader-spinner";


const EmailSection = () => {

  const [loading, setLoading] = React.useState(false);

  // adding vlaidation

  const validate = () => {
    if (!user.email || !user.subject || !user.message) {
        toast.error('Please ensure all fields are filled correctly.');
        return false;
    }
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(user.email)) {
        toast.error('Please enter a valid email address.');
        return false;
    }
    return true;
};


const [user, setUser] = React.useState({
  email: "",
  subject: "",
  message: ""
});

const [status, setStatus] = React.useState(null);


const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form data
    if (!validate()) {
      return;
  }

  setLoading(true);

    try {
        const response = await fetch('/api/contact', {
            method:'POST',
            headers:{"Content_Type":"application/json"},
            body: JSON.stringify({
                email:user.email,
                subject:user.subject,
                message:user.message
            })
        })
        // Set the status based on the response from the API route
        if (response.status === 200) {
            setUser({
                email: "",
                subject: "",
                message: ""
            })
            toast.success('Message Sent Successfully!');

        } else {
          toast.error('There was an error during submission.');
        }

    }catch (e) {
      toast.error('Server error, please try again later.');
    }finally{
      setLoading(false);

    }


}

function handleChange(e){
    setUser({...user, [e.target.name]: e.target.value})
    console.log(setUser)
}








  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let`&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/fitsaleem">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/saleem-raza-3aa6b0204/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div className="z-10">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              id="email"
              value={user.email}
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="saleem@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="subject"
              id="subject"
              value={user.subject}
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Enter Your Subject"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              onChange={handleChange}
              name="message"
              id="message"
              value={user.message}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          {loading ? (
    <div className="flex justify-center items-center">
        <TailSpin type="ThreeDots" color="#FFFFFF" height={50} width={50} visible={loading}/>
    </div>
) : (
    <button
        type="submit"
        className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
    >
        Send Message
    </button>
)}

        </form>
      </div>
    </section>
  );
};

export default EmailSection;

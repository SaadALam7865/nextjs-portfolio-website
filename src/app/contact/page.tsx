

"use client"

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';


export default function Contact() {
  const notify = () => toast("Submitting...");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "c90d5da8-11f4-4b81-9dbd-42303eb033c4");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    });

    const result = await response.json();
    if (result.success) {
      notify();
      console.log(result);
      // Optionally reset the form after successful submission
      event.currentTarget.reset();
    } else {
      toast.error("Submission failed. Please try again.");
    }
  }

  return (
    <section data-aos="fade-down" data-aos-duration="3000">
      <div className="container px-6 md:px-12">
        <div className="block rounded-lg bg-black px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:py-16 md:px-12">
          {/* Contact Info Section */}
          <div className="contact-icons">
            {/* WhatsApp */}
            <div className="icon-container">
              <FaWhatsapp size={40} style={{ color: '#25D366' }}/>
              <p>WhatsApp: +92 312 0004527</p>
            </div>

            {/* Email */}
            <div className="icon-container">
              <FaEnvelope size={40} style={{ color: 'blue' }}  />
              <p>Email: saadalam929@gmail.com</p>
            </div>

            {/* Address */}
            <div className="icon-container">
              <FaMapMarkerAlt size={40} style={{ color: '#FF5733' }}/>
              <p>Address: Orangi Town, Karachi, Pakistan</p>
            </div>
          </div>
          {/* Contact Form */}
          <form onSubmit={handleSubmit}>
            <div className="relative mb-6">
              <input
                type="text"
                className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-2 px-3 leading-6 outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 focus:text-primary"
                name="name"
                required
                placeholder="Your Name"
              />
            </div>
            <div className="relative mb-6">
              <input
                type="email"
                className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-2 px-3 leading-6 outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 focus:text-primary"
                name="email"
                required
                placeholder="Your Email"
              />
            </div>
            <div className="relative mb-6">
              <textarea
                className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-2 px-3 leading-6 outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100"
                rows={3}
                name="message"
                required
                placeholder="Your Message"
              />
            </div>
            <button
              type="submit"
              onClick={notify}
              className="mb-6 w-full rounded-lg bg-gradient-to-r from-sky-500 to-sky-600 text-white px-6 py-2 text-xs font-medium uppercase leading-normal transition-all duration-300 ease-in-out hover:from-sky-600 hover:to-sky-900"
            >
              Submit
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </section>
  );
}
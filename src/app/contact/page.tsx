"use client";

import { useState } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";
import SendIcon from "@mui/icons-material/Send";
import PersonIcon from "@mui/icons-material/Person";
import SubjectIcon from "@mui/icons-material/Subject";
import ChatIcon from "@mui/icons-material/Chat";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    setSubmitted(true);

    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-background text-text flex flex-col items-center py-10 px-4">
      <h2 className="text-3xl font-bold text-accent mb-6 flex items-center gap-2">
        <EmailIcon className="text-accent" /> Contact Us
      </h2>

      {/* Contact Information */}
      <div className="bg-primary p-6 rounded-lg shadow-lg w-full max-w-lg text-center space-y-4">
        <p className="flex items-center justify-center gap-2">
          <PlaceIcon className="text-accent" />
          <span className="text-secondary">123 Main Street, City, Country</span>
        </p>
        <p className="flex items-center justify-center gap-2">
          <PhoneIcon className="text-accent" />
          <span className="text-secondary">+254 758 834 321</span>
        </p>
        <p className="flex items-center justify-center gap-2">
          <EmailIcon className="text-accent" />
          <a href="mailto:bontehbonnie9@gmail.com" className="text-accent">
            bontehbonnie9@gmail.com
          </a>
        </p>
        <a
          href="https://wa.me/254758834321"
          className="bg-accent text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2"
        >
          <WhatsAppIcon /> Chat on WhatsApp
        </a>
      </div>

      {/* Inquiry Form */}
      <div className="w-full max-w-lg mt-8 bg-primary p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-accent mb-4 flex items-center gap-2">
          <ChatIcon className="text-accent" /> Inquiry Form
        </h3>
        <p className="text-sm text-secondary mb-4">Fill in the form below and we'll get back to you.</p>

        {submitted ? (
          <p className="text-green-500 text-center font-semibold">✅ Your message has been sent successfully!</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Full Name</label>
              <div className="flex items-center gap-2 bg-secondary p-3 rounded-md">
                <PersonIcon className="text-accent" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full bg-transparent text-text border-none outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-1">Email Address</label>
              <div className="flex items-center gap-2 bg-secondary p-3 rounded-md">
                <AlternateEmailIcon className="text-accent" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full bg-transparent text-text border-none outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-1">Subject</label>
              <div className="flex items-center gap-2 bg-secondary p-3 rounded-md">
                <SubjectIcon className="text-accent" />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is your inquiry about?"
                  className="w-full bg-transparent text-text border-none outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-1">Your Message</label>
              <div className="flex items-start gap-2 bg-secondary p-3 rounded-md">
                <ChatIcon className="text-accent" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full bg-transparent text-text border-none outline-none h-32 resize-none"
                  required
                />
              </div>
            </div>

            <button type="submit" className="w-full bg-accent text-white py-3 rounded-md text-lg font-semibold flex items-center justify-center gap-2">
              <SendIcon /> Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;

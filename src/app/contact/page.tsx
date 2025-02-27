"use client";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";

export default  function Contact(){

  return (
    <div className="min-h-screen bg-background text-text flex flex-col items-center py-10 px-4">
      <h2 className="text-3xl font-bold text-accent mb-6 flex items-center gap-2">
        <EmailIcon className="text-accent" /> Contact Us
      </h2>

      {/* Contact Information */}
      <div className="bg-primary p-6 rounded-lg shadow-lg w-full max-w-lg text-center space-y-4">
        <p className="flex items-center justify-center gap-2">
          <PlaceIcon className="text-accent" />
          <span className="text-secondary">Uhuru market Jogoo Road</span>
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

      <div className="w-full max-w-lg mt-8 bg-primary p-6 rounded-lg shadow-lg text-center">
  <h3 className="text-xl font-semibold text-accent mb-4">Get in Touch</h3>
  <p className="text-sm text-secondary mb-4">
    Have questions or need assistance? Contact us through email, phone, or WhatsApp.
  </p>
  <a href="mailto:bontehbonnie9@gmail.com"
     className="block bg-accent text-white px-6 py-3 rounded-lg font-semibold mb-3">
    Email Us
  </a>
  <a href="tel:+254758834321"
     className="block bg-accent text-white px-6 py-3 rounded-lg font-semibold mb-3">
    Call Us
  </a>
  <a href="https://wa.me/254758834321"
     className="block bg-green-500 text-white px-6 py-3 rounded-lg font-semibold">
    Chat on WhatsApp
  </a>
</div>

         
            
      
    </div>
  );
};



"use client";
import { Instagram, Twitter, LinkedIn } from "@mui/icons-material"; // Material Icons
import PlaceIcon from "@mui/icons-material/Place";
export default function Footer() {
  return (
    <footer className="bg-primary text-text py-10 mt-12">
      <div className="container mx-auto text-center text-sm space-y-6">
        
        {/* Social Media Section */}
        <div>
          <h2 className="text-lg font-semibold text-accent mb-2">Follow Us on social media platforms</h2>
          <div className="flex justify-center space-x-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-text hover:opacity-80">
              <Instagram fontSize="large" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-text hover:opacity-80">
              <Twitter fontSize="large" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-text hover:opacity-80">
              <LinkedIn fontSize="large" />
            </a>
          </div>
        </div>
        <div className="mt-4 flex flex-col items-center text-gray-400">
  <div className="flex items-center gap-2">
    <PlaceIcon fontSize="small" className="text-accent" />
    <span className="text-lg font-medium text-gray-300">Nairobi, Kenya</span>
  </div>
  <span className="text-sm text-gray-400">Uhuru Market, Jogoo Road</span>
</div>

        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-semibold text-accent mb-2">Contact Us</h2>
          <p>Email: <a href="mailto:bontehbonnie9@gmail.com" className="hover:text-accent">contact@bonniegraphics.com</a></p>
          <p>Phone: <span className="text-black font-black">+254 758 834 321</span></p>
        </div>

        {/* Copyright Section */}
        <div>
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Bonnie Graphics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

const Footer = () => (
  <footer className="bg-gray-800 text-white py-6">
    <div className="container mx-auto text-center px-4">
      <p>&copy; {new Date().getFullYear()} Cinema System. All rights reserved.</p>
      <p>Contact us at <a href="mailto:info@cinemasystem.com" className="text-red-500 hover:underline">info@cinemasystem.com</a></p>
    </div>
  </footer>
);

export default Footer;

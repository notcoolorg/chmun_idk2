import { Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800 py-12 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Contact Information */}
          <div className="flex flex-col space-y-3">
            <div>
              <h3 className="text-lg font-semibold">Secretary General</h3>
              <p className="text-gray-300">Priyanshu Biswas: +91 93533 00298</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Director General</h3>
              <p className="text-gray-300">Srihitha Moole: +91 88845 19519</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <a
                href="mailto:chmun@gmail.com"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                chmun@gmail.com
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-start sm:items-center md:items-start">
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <a
              href="https://www.instagram.com/chmun25/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
            >
              <Instagram className="w-6 h-6 mr-2" />
              Instagram
            </a>
          </div>

          {/* School Information */}
          <div className="flex flex-col sm:items-end text-left sm:text-right">
            <p className="text-sm text-gray-400 mb-3">Chrysalis High Kadugodi</p>
            <p className="text-gray-300">
              Chrysalis High School,
              <br />
              Kadugodi, Bengaluru,
              <br />
              Karnataka 560067, India
            </p>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-10 mb-[-2rem] pt-4 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Chrysalis High Model United Nations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

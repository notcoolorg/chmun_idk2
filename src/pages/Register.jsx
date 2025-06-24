import { Button } from "../components/ui/button";
import { ExternalLink } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Register() {
      const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="min-h-screen bg-black text-white pt-20 flex flex-col items-center">
      {/* Top Section with Logo Background */}
      <section
        className="w-full flex flex-col items-center bg-contain bg-center bg-no-repeat py-32"
        style={{
          backgroundImage: `url('/chmunlogo.png')`,
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h1 className="text-6xl md:text-9xl font-black tracking-tight text-center mt-12 mb-16">
            Registrations
          </h1>
        </div>
      </section>

      {/* Registration Content */}
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Individual Registration */}
        <section className="w-full mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Individual Registration
          </h2>
          <p className="text-lg md:text-xl text-gray-300 text-center mb-4">
            Fee: ₹1200
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeIcYjMOnZpoPOh6rShryvpPtXJSYAOL9tBaZTL-EIvs3utvw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center"
          >
            <Button className="bg-white text-black hover:cursor-pointer hover:bg-gray-200 text-lg font-semibold px-8 py-3 rounded-lg">
              Register Now <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </section>

        {/* Delegation Registration */}
        <section className="w-full mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Delegation Registration
          </h2>
          <p className="text-lg md:text-xl text-gray-300 text-center mb-4">
            Fee: ₹1200 per Delegate
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeIcYjMOnZpoPOh6rShryvpPtXJSYAOL9tBaZTL-EIvs3utvw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center"
          >
            <Button className="bg-white text-black hover:cursor-pointer hover:bg-gray-200 text-lg font-semibold px-8 py-3 rounded-lg">
              Register Now <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </section>

        {/* Last Date of Registration */}
        <p className="text-lg md:text-xl text-gray-300 mb-12">
          Last Date for Registration: August 15, 2025
        </p>
      </div>
    </div>
  );
}

export default Register;

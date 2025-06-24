import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Committees() {
    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const committees = [
    {
      abbr: "DISEC",
      fullForm: "Disarmament and International Security Committee",
      agenda: "The Role of Cybersecurity in Maintaining International Peace and Security",
      bgImage: "disec.jpg",
      path: "/committees/disec",
    },
    {
      abbr: "UNHRC",
      fullForm: "United Nations Human Rights Council",
      agenda: "Promoting Global Human Rights",
      bgImage: "unhrc.jpeg",
      path: "/committees/unhrc",
    },   
    {
      abbr: "UNODC",
      fullForm: "United Nations Office on Drugs and Crime",
      agenda: "Preventing and Disrupting International Arms Trafficking Networks",
      bgImage: "unodc.jpeg",
      path: "/committees/unodc",
    },
    {
      abbr: "UNSC",
      fullForm: "United Nations Security Council",
      agenda: "Addressing Global Security Threats",
      bgImage: "/unsc.avif",
      path: "/committees/unsc",
    },
    {
      abbr: "CCC",
      fullForm: "Crisis Committee Council",
      agenda: "Managing Global Crises",
      bgImage: "ccc.jpeg",
      path: "/committees/ccc",
    },

    {
      abbr: "AIPPM",
      fullForm: "All India Political Parties Meet",
      agenda:
        "Deliberation on UCC with special emphasis on the recent WAQF bill",
      bgImage: "/aippm.avif",
      path: "/committees/aippm",
    },
  ];

  return (
    <div className="mt-[-1.5rem] bg-black text-white pt-20">
      {committees.map((committee, index) => (
        <section
          key={committee.abbr}
          className="relative w-full h-[600px] flex items-center bg-cover bg-center"
          style={{ backgroundImage: `url(${committee.bgImage})` }}
        >
          {/* Diagonal Slash with Transparency */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent clip-path-diagonal"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl w-full pl-8 sm:pl-12 lg:pl-16 text-left">
            <h2 className="text-7xl md:text-9xl font-black tracking-tight">
              {committee.abbr}
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mt-2 ml-1 md:ml-0">
              {committee.fullForm}
            </p>
            <p className="text-2xl md:text-2xl text-gray-200 mt-12">
              Agenda: {committee.agenda}
            </p>
            <Link to={committee.path}>
              <Button
                className="hover:cursor-pointer mt-10 bg-white text-black text-lg font-semibold px-8 py-3 rounded-lg relative overflow-hidden group"
                style={{ transition: "color 300ms ease-in-out" }}
              >
                <span className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
                  Learn More
                </span>
              </Button>
            </Link>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Committees;

import Logo from "../assets/image 1.png";
import GlobeIcon from "../assets/Icon (6).svg";
import GithubIcon from "../assets/Icon (7).svg";
import MailIcon from "../assets/Icon (8).svg";

const Footer = () => {
  return (
    <footer className="bg-white rounded-t-3xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-12 lg:py-14">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-10">
          
          {/* Logo */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <img
              src={Logo}
              alt="VComPRESS"
              className="h-7 sm:h-8 w-auto"
            />

            <p className="mt-4 max-w-xs text-sm leading-6 text-[#666]">
              Engineered for precision. <br /> Optimized for the future of  <br /> digital
              storage.
            </p>
          </div>

          {/* Product + Resources + Legal */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-3 gap-4 text-center lg:text-left">
              
              {/* Product */}
              <div>
                <h4 className="mb-4 text-sm font-semibold text-black">
                  Product
                </h4>

                <ul className="space-y-2 sm:space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-xs sm:text-sm text-[#555] hover:text-[#0F3DBF] transition-colors"
                    >
                      Features
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-xs sm:text-sm text-[#555] hover:text-[#0F3DBF] transition-colors"
                    >
                      Pricing
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-xs sm:text-sm text-[#555] hover:text-[#0F3DBF] transition-colors"
                    >
                      API
                    </a>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="mb-4 text-sm font-semibold text-black">
                  Resources
                </h4>

                <ul className="space-y-2 sm:space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-xs sm:text-sm text-[#555] hover:text-[#0F3DBF] transition-colors"
                    >
                      Documentation
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-xs sm:text-sm text-[#555] hover:text-[#0F3DBF] transition-colors"
                    >
                      Support
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-xs sm:text-sm text-[#555] hover:text-[#0F3DBF] transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="mb-4 text-sm font-semibold text-black">
                  Legal
                </h4>

                <ul className="space-y-2 sm:space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-xs sm:text-sm text-[#555] hover:text-[#0F3DBF] transition-colors"
                    >
                      Privacy
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-xs sm:text-sm text-[#555] hover:text-[#0F3DBF] transition-colors"
                    >
                      Terms
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="my-8 sm:my-10 h-px bg-[#D9D9D9]" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center gap-4 sm:gap-5 md:flex-row md:justify-between">
          
          <p className="text-center text-xs sm:text-sm text-[#666] md:text-left">
            © 2026 VComPRESS. Engineered for precision.
          </p>

          <div className="flex items-center justify-center gap-4 sm:gap-5">
            <img
              src={GlobeIcon}
              alt="Website"
              className="h-5 w-5 cursor-pointer hover:opacity-70 transition-opacity"
            />

            <img
              src={GithubIcon}
              alt="Github"
              className="h-5 w-5 cursor-pointer hover:opacity-70 transition-opacity"
            />

            <img
              src={MailIcon}
              alt="Mail"
              className="h-5 w-5 cursor-pointer hover:opacity-70 transition-opacity"
            />
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
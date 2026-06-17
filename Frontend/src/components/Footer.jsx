import Logo from "../assets/image 1.png";
import GlobeIcon from "../assets/Icon (6).svg";
import GithubIcon from "../assets/Icon (7).svg";
import MailIcon from "../assets/Icon (8).svg";



const Footer = () => {
  return (
    <footer className="bg-white rounded-t-3xl">
      <div className="container mx-auto px-10 py-14">

        {/* Top Section */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">

          {/* Logo */}
          <div>
            <img
              src={Logo}
              alt="VComPRESS"
              className="h-8 w-auto"
            />

            <p className="mt-5 max-w-xs text-sm leading-7 text-[#666]">
              Engineered for precision.
              <br />
              Optimized for the future of
              <br />
              digital storage.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-5 text-sm font-semibold text-black">
              Product
            </h4>

            <ul className="space-y-4">
              <li>
                <a href="#" className="text-sm text-[#555]">
                  Features
                </a>
              </li>

              <li>
                <a href="#" className="text-sm text-[#555]">
                  Pricing
                </a>
              </li>

              <li>
                <a href="#" className="text-sm text-[#555]">
                  API
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-5 text-sm font-semibold text-black">
              Resources
            </h4>

            <ul className="space-y-4">
              <li>
                <a href="#" className="text-sm text-[#555]">
                  Documentation
                </a>
              </li>

              <li>
                <a href="#" className="text-sm text-[#555]">
                  Support
                </a>
              </li>

              <li>
                <a href="#" className="text-sm text-[#555]">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-5 text-sm font-semibold text-black">
              Legal
            </h4>

            <ul className="space-y-4">
              <li>
                <a href="#" className="text-sm text-[#555]">
                  Privacy
                </a>
              </li>

              <li>
                <a href="#" className="text-sm text-[#555]">
                  Terms
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-[#D9D9D9]" />

        {/* Bottom Section */}
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

          <p className="text-sm text-[#666]">
            © 2026 VComPRESS. Engineered for precision.
          </p>

          <div className="flex items-center gap-5">
            <img
              src={GlobeIcon}
              alt=""
              className="h-5 w-5"
            />

            <img
              src={GithubIcon}
              alt=""
              className="h-5 w-5"
            />

            <img
              src={MailIcon}
              alt=""
              className="h-5 w-5"
            />
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
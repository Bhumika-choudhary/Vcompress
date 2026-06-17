
import logo from "../assets/image 1.png"; // Update the path according to your project

const Navbar = () => {
  return (
    <header className=" bg-linear-to-br from-[#DFE4FE] to-[#EDE1FE]">
      <div className="max-w-7xl mx-auto h-14 px-8 flex items-center justify-between">

        
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="VCompress"
            className="h-8 w-auto"
          />
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-10">
          <a
            href="#"
            className="text-[12px] font-semibold text-[#0F3DBF]"
          >
            Compress
          </a>

          <a
            href="#"
            className="text-[12px] font-medium text-[#1A1A1A] hover:text-[#0F3DBF] transition-colors duration-200"
          >
            Features
          </a>

          <a
            href="#"
            className="text-[12px] font-medium text-[#1A1A1A] hover:text-[#0F3DBF] transition-colors duration-200"
          >
            Pricing
          </a>

          <a
            href="#"
            className="text-[12px] font-medium text-[#1A1A1A] hover:text-[#0F3DBF] transition-colors duration-200"
          >
            API
          </a>

          <button className="ml-4 bg-[#0F3DBF] text-white text-[12px] font-semibold px-6 py-2 rounded-full hover:bg-[#0c34a0] transition-all duration-200">
            Compress Now
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
import { useEffect, useState } from "react";

//  import images svg

import Img1 from "../assets/Background (2).svg";
import Img2 from "../assets/Background (1).svg";
import Img3 from "../assets/Background (3).svg";
import Img4 from "../assets/Icon.png";
import Img5 from "../assets/Background.svg";
import Img6 from "../assets/Icon (2).svg";
import Img7 from "../assets/Icon (3).svg";
import Img8 from "../assets/Icon (4).svg";
import Img9 from "../assets/Icon (5).svg";

import Img10 from "../assets/Background (4).svg";
import Img11 from "../assets/Icon.svg"
import Img12 from "../assets/Container.svg"
import Img13 from "../assets/Background (5).svg"
// import Img14 from "../assets/Icon.svg"
import Img15 from "../assets/Container.png"
import Img16 from "../assets/Icon (1).svg"

// container

import Container from "../assets/AB6AXuADG_TCsmGxkTE-pB_PaxPWoYCMdfG8kyZWiaywR0Gb1fdL7ZfY5S2qMyVyYWg8yBJmi50QT482vqETWT9PFR-iEKY9vFF7yFMKhEBeNlsum0BN2qflkZJARk4qies_f639E7Mjjh3tsHhu3GdRRtoXvOm-z3Wc-0_vSBdk6QLd1L5NcHpKNh2xRZtTLGYYL_TZF2vhRsNoWj7rRw.png";

// icon

import Icon from "../assets/icon9.svg";

// Counter Component
const Counter = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const timer = setInterval(() => {
      start += 1;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, duration / end);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const HeroSection = () => {
  return (
    <>
      <section className="min-h-screen flex items-center bg-linear-to-br from-[#DFE4FE] to-[#EDE1FE]">
        <div className="max-w-7xl mx-auto px-8 py-16 w-full z">
          {/* Hero Content */}
          <div className="grid lg:grid-cols-2 gap-24 items-center lg:mx-16">
            {/* Left Side */}
            <div className="max-w-md">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white shadow-sm mb-8">
                <span className="text-[11px] font-medium text-[#4C31CE]">
                  ✨ AI-Powered File Compression Platform
                </span>
              </div>

              <h1 className="text-[60px] leading-[1.08] font-bold tracking-[-2px] text-black">
                Compress
                <br />
                Everything.
                <br />
                <span className="text-[#0037B0]">
                  Keep What
                  <br />
                  Matters.
                </span>
              </h1>

              <p className="mt-6 max-w-md text-[13px] leading-6 text-[#434655]">
                Reduce file sizes without sacrificing quality. Compress images,
                PDFs, videos, audio, and documents from a single intelligent
                platform.
              </p>

              <div className="flex items-center gap-4 mt-8">
                <button className="h-12 px-7 rounded-[14px] bg-[#2F38D3] text-white text-[15px] font-medium shadow-lg hover:bg-[#2430C8] transition">
                  Start Compressing Free
                </button>

                <button className="h-12 px-7 rounded-[14px] bg-white text-sm font-medium text-gray-700 shadow-sm">
                  View Demo
                </button>
              </div>
            </div>

            {/* Right Side Card */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg rounded-[22px] bg-[#F5F4FA] p-6 shadow-md">
                {/* Top Header */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#FF5F57]"></span>
                    <span className="h-3 w-3 rounded-full bg-[#FEBC2E]"></span>
                    <span className="h-3 w-3 rounded-full bg-[#28C840]"></span>
                  </div>

                  <div className="rounded-full bg-[#E9F0FF] px-3 py-1 text-[13px] font-medium text-[#2F38D3]">
                   Optimizing Engine v2.4
                  </div>
                </div>

                {/* File 1 */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between rounded-2xl bg-white px-5 py-4">
                    <div className="flex items-center gap-3">
                      <img src={Img1} alt="" className="h-10 w-10" />

                      <div>
                        <p className="text-[16px] font-medium text-black">
                          Annual_Report.pdf
                        </p>
                        <p className="text-[12px] text-gray-400">12.8 MB</p>
                      </div>
                    </div>

                    <span className="text-[16px] font-semibold text-[#22C55E]">
                      -84%
                    </span>
                  </div>

                  {/* File 2 */}
                  <div className="flex items-center justify-between rounded-2xl bg-white px-5 py-4">
                    <div className="flex items-center gap-3">
                      <img src={Img2} alt="" className="h-10 w-10" />

                      <div>
                        <p className="text-[16px] font-medium text-black">
                          Product_Demo.mp4
                        </p>
                        <p className="text-[12px] text-gray-400">256 MB</p>
                      </div>
                    </div>

                    <div className="rounded-full border border-[#2F38D3] px-2.5 py-1 text-[10px] font-semibold text-[#2F38D3]">
                      77%
                    </div>
                  </div>

                  {/* File 3 */}
                  <div className="flex items-center justify-between rounded-2xl bg-white px-5 py-4">
                    <div className="flex items-center gap-3">
                      <img src={Img3} alt="" className="h-10 w-10" />

                      <div>
                        <p className="text-[16px] font-medium text-black">
                          Hero_Background.jpg
                        </p>
                        <p className="text-[12px] text-gray-400">8.5 MB</p>
                      </div>
                    </div>

                    <span className="text-[12px] font-semibold text-[#2F38D3]">
                      1.2 MB
                    </span>
                  </div>
                </div>

                {/* Floating Analytics Card */}
                <div className="absolute -right-10 -top-5 rounded-2xl bg-white px-4 py-3 shadow-xl">
                  <img src={Img4} alt="" className=" mb-2 h-6 w-6" />

                  <h4 className="text-[24px] font-bold leading-none text-black">
                    32.4x
                  </h4>

                  <p className="mt-1 text-[12px] text-gray-400">
                    Throughput Boost
                  </p>
                </div>

                {/* Success Card */}
                <div
                  className="absolute -bottom-1 right-6 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl"
                  style={{ marginBottom: "29px" }}>
                  <img src={Img5} alt="" className="h-12 w-12" />

                  <div>
                    <p className="text-[14px] font-semibold text-black">
                      Compression Complete
                    </p>

                    <p className="text-[10px] text-gray-400">
                      Saved 42.5 MB in 2.4s
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mt-25 text-center">
            <div>
              <h3 className="text-[48px] font-bold text-[#2F38D3]">
                <Counter end={95} suffix="%" />
              </h3>

              <p className="mt-2 text-[12px] uppercase tracking-[1.5px] text-[#666]">
                Avg Size Reduction
              </p>
            </div>

            <div>
              <h3 className="text-[48px] font-bold text-[#2F38D3]">
                <Counter end={5} suffix="+" />
              </h3>

              <p className="mt-2 text-[12px] uppercase tracking-[1.5px] text-[#666]">
                File Types Supported
              </p>
            </div>

            <div>
              <h3 className="text-[48px] font-bold text-[#2F38D3]">
                <Counter end={3} />
              </h3>

              <p className="mt-2 text-[12px] uppercase tracking-[1.5px] text-[#666]">
                Compression Levels
              </p>
            </div>

            <div>
              <h3 className="text-[48px] font-bold text-[#2F38D3]">
                <Counter end={100} suffix="%" />
              </h3>

              <p className="mt-2 text-[12px] uppercase tracking-[1.5px] text-[#666]">
                Secure Processing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===============compression feature  section===============*/}

      <section className="bg-[#f5efff] py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-[48px] leading-14 font-semibold text-[#111111]">
              One Platform. Every File Type.
            </h2>

            <p className="text-[#6B7280] text-[14px] max-w-lg mx-auto mt-4">
              Powerful algorithms tailored for each medium, ensuring high
              fidelity and extreme size reduction.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-12 gap-4">
            {/* Universal Compression */}
            <div className="col-span-12 lg:col-span-8 bg-white rounded-3xl p-8 relative overflow-hidden min-h-44">
              <div className="mb-4">
                <img
                  src={Img10}
                  alt=""
                  className="w-9 h-8"
                />
              </div>

              <h3 className="text-[22px] font-semibold text-black mb-3">
                Universal Compression
              </h3>

              <p className="text-[#6B7280] text-[14px]  max-w-md">
                Our neural engine supports Images, PDF, Audio, Video, and Docs
                with format-specific optimization protocols.
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {[
                  "PNG / JPEG",
                  "MP4 / MOV",
                  "MP3 / WAV",
                  "PDF",
                  "DOC / DOCX",
                ].map((item, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 rounded-full bg-[#F5F5F5] text-xs text-[#555]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Decorative image */}
              <img
                src="/images/shape.png"
                alt=""
                className="absolute right-0 bottom-0 w-44"
              />
            </div>

            {/* Lightning Fast */}
            <div className="col-span-12 lg:col-span-4 bg-[#0D40C6]  rounded-3xl p-8 min-h-44 flex flex-col justify-center items-center text-center">
              <img
                src={Img11}
                alt=""
                className="w-10 h-10 mb-5"
              />

              <h3 className="text-white text-[24px] font-semibold mb-3">
                Lightning Fast
              </h3>

              <p className="text-white/80 text-[14px] leading-6 max-w-xs">
                Seconds, not minutes. Real-time processing for heavy enterprise
                assets.
              </p>
            </div>

            {/* Quality Control */}
            <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-white rounded-3xl p-8 min-h-44">
              <img
                src={Img12}
                alt=""
                className="w-8 h-8 mb-5"
              />

              <h3 className="text-[20px] font-semibold mb-3">
                Quality Control
              </h3>

              <p className="text-[#6B7280] text-[14px] leading-6">
                Pixel-perfect preservation with AI-enhanced reconstruction.
              </p>
            </div>

            {/* Storage Optimization */}
            <div className="col-span-12 md:col-span-6 lg:col-span-8 bg-white rounded-3xl p-8 min-h-44 flex justify-between items-center">
              <div>
                <img
                  src={Img13}
                  alt=""
                  className="w-8 h-8 mb-5"
                />

                <h3 className="text-[20px] font-semibold mb-3">
                  Storage Optimization
                </h3>

                <p className="text-[#6B7280] text-[14px] leading-6 max-w-[320px]">
                  Slash your cloud storage costs by up to 80% without deleting a
                  single file.
                </p>
              </div>

              {/* Bars Image */}
              <img
                src={Img15}
                alt=""
                className="hidden lg:block w-70 h-25"
              />
            </div>

            {/* Lower Bandwidth */}
            <div className="col-span-12 lg:col-span-6 bg-[#24292E] rounded-3xl p-8 min-h-30 flex items-center">
              <img
                src={Img16}
                alt=""
                className="w-6 h-6 mr-4"
              />

              <div>
                <h3 className="text-[#65E6F7] text-[20px] font-semibold mb-1">
                  Lower Bandwidth
                </h3>

                <p className="text-white/70 text-[14px]">
                  Faster site loads and lower egress fees for global delivery.
                </p>
              </div>
            </div>

            {/* Simplified Workflow */}
            <div className="col-span-12 lg:col-span-6 bg-white rounded-3xl p-8 min-h-30 flex items-center">
              <img
                src={Img16}
                alt=""
                className="w-8 h-8 mr-4"
              />

              <div>
                <h3 className="text-[20px] font-semibold mb-1">
                  Simplified Workflow
                </h3>

                <p className="text-[#6B7280] text-[14px]">
                  One API to handle all your asset optimization needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*=============compression profile section==========*/}

      <section className="bg-[#E9EDFD] py-20">
        <div className="mx-auto max-w-7xl px-10">
          {/* Top Card */}
          <div className="rounded-2xl border border-[#D9DDE8] bg-[#F7F7FA] shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
            <div className="flex items-center justify-between px-10 py-8">
              {/* Left Content */}
              <div className="max-w-md">
                <h2 className="text-[26px] font-bold leading-8 text-[#111111]">
                  Choose Your
                  <br />
                  Compression Profile
                </h2>

                <p className="mt-4 text-[12px] leading-5 text-[#6B7280]">
                  Every file is different. Select the profile that matches your
                  intent, from maximum size reduction to archival quality.
                </p>

                {/* Profile Slider */}
                <div className="mt-8">
                  <div className="relative h-1w-72 rounded-full bg-[#C9D2F8]">
                    <div className="mt-5 h-2 overflow-hidden rounded-md bg-gray-200">
                      <div className="h-full w-2/4 bg-blue-700" />
                    </div>
                  </div>

                  <div className="mt-3 flex w-72 justify-between">
                    <div className="text-center">
                      <p className="text-[11px] font-semibold text-[#111]">
                        Low
                      </p>
                      <p className="text-[10px] text-[#7B7B7B]">
                        Max Reduction
                      </p>
                    </div>

                    <div className="text-center">
                      <p className="text-[11px] font-semibold text-[#1D4DFF]">
                        Medium
                      </p>
                      <p className="text-[10px] text-[#7B7B7B]">
                        Perfect Balance
                      </p>
                    </div>

                    <div className="text-center">
                      <p className="text-[11px] font-semibold text-[#111]">
                        High
                      </p>
                      <p className="text-[10px] text-[#7B7B7B]">Max Quality</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="h-50 w-120 overflow-hidden rounded-[14px] border-4 border-white shadow-md">
                <img
                  src={Container}
                  alt="Compression Profile"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 grid items-center gap-14 lg:grid-cols-2">
            {/* Left Card */}
            <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-lg border border-gray-100">
              {/* Top Row */}
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[8px] font-semibold uppercase tracking-wider text-gray-400">
                    Original
                  </p>

                  <h3 className="text-3xl font-bold text-gray-900">124 MB</h3>
                </div>

                <div className="mt-3 text-gray-500">→</div>

                <div className="text-right">
                  <p className="text-[8px] font-semibold uppercase tracking-wider text-gray-400">
                    VCompressed
                  </p>

                  <h3 className="text-3xl font-bold text-blue-700">28 MB</h3>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-5 h-10 overflow-hidden rounded-md bg-gray-200">
                <div className="h-full w-1/4 bg-blue-700" />
              </div>

              {/* Bottom Stats */}
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs font-medium text-blue-900">
                  28MB vs 124MB
                </span>

                <span className="text-xs font-semibold text-blue-700">
                  77% Space Saved
                </span>
              </div>

              {/* Wave Image */}
              <div className="mt-2">
                {/* <img
          src={}
          alt="Wave"
          className="w-full"
        /> */}
              </div>
            </div>

            {/* Right Content */}
            <div className="max-w-md">
              <h2 className="text-[48px] font-bold text-[#111111]">
                See Results Before You Download
              </h2>

              <p className="mt-5 text-[13px] leading-6 text-[#666666]">
                Our real-time analytics engine calculates the exact space
                savings and visual quality metrics before you commit to the
                download. Transparency in every byte.
              </p>

              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-2 text-[12px] font-medium text-[#111]">
                  <span className="flex items-center">
                    <img src={Icon} alt="icon" className="h-4 w-4" />
                  </span>
                  Structural Similarity Index (SSIM) Calculation
                </li>

                <li className="flex items-center gap-2 text-[12px] font-medium text-[#111]">
                  <img src={Icon} alt="icon" className="h-4 w-4" />
                  Peak Signal-to-Noise Ratio (PSNR) Reports
                </li>

                <li className="flex items-center gap-2 text-[12px] font-medium text-[#111]">
                  <img src={Icon} alt="icon" className="h-4 w-4" />
                  Bitrate Allocation Visualization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/*==========simplicity engineered=========*/}

      <section className="bg-[#eafbff] py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}
          <div className="mb-20 text-center">
            <h2 className="text-5xl font-bold text-black">
              Simplicity Engineered.
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative mx-auto max-w-5xl">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#C7D6FF]" />

            {/* Step 1 */}
            <div className="relative mb-24 grid grid-cols-2 items-center">
              <div className="pr-20 text-right">
                <h3 className="mb-2 text-xl font-semibold">Upload Assets</h3>

                <p className="ml-auto max-w-xs text-sm leading-6 text-[#666]">
                  Drag and drop individual files or complete folders. Our batch
                  processor handles up to 500 items at once.
                </p>
              </div>

              <div className="pl-20">
                <img src={Img6} alt="" className="h-10 w-10 opacity-100" />
              </div>

              <div className="absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#0F36C7] text-xs font-bold text-white shadow-lg">
                1
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative mb-24 grid grid-cols-2 items-center">
              <div className="flex justify-end">
                <img
                  src={Img7}
                  alt=""
                  className="h-12 w-12 opacity-100 mr-20"
                />
              </div>

              <div className="pl-20">
                <h3 className="mb-2 text-xl font-semibold">Choose Quality</h3>

                <p className="max-w-xs text-sm leading-6 text-[#666]">
                  Select from our presets or define custom bitrate constraints
                  for surgical precision.
                </p>
              </div>

              <div className="absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#7B3FF2] text-xs font-bold text-white shadow-lg">
                2
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative mb-24 grid grid-cols-2 items-center">
              <div className="pr-20 text-right">
                <h3 className="mb-2 text-xl font-semibold">AI Compression</h3>

                <p className="ml-auto max-w-xs text-sm leading-6 text-[#666]">
                  Our V-Core engine analyzes each frame and pixel, discarding
                  metadata while preserving visual integrity.
                </p>
              </div>

              <div className="pl-20">
                <img src={Img8} alt="" className="h-10 w-10 opacity-100" />
              </div>

              <div className="absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#0F36C7] text-xs font-bold text-white shadow-lg">
                3
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative grid grid-cols-2 items-center">
              <div className="flex justify-end">
                <img
                  src={Img9}
                  alt=""
                  className="h-10 w-10 opacity-100 mr-20"
                />
              </div>

              <div className="pl-20">
                <h3 className="mb-2 text-xl font-semibold">Instant Download</h3>

                <p className="max-w-xs text-sm leading-6 text-[#666]">
                  Retrieve your optimized files via a single ZIP or individual
                  assets. API users receive immediate webhooks.
                </p>
              </div>

              <div className="absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#0A5964] text-xs font-bold text-white shadow-lg">
                4
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============reduce file size=============*/}

      <section className="bg-linear-to-r from-[#E3E8FE] to-[#AFF3FE] py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-6xl rounded-3xl border border-[#1A7BFF] p-0.5 bg-linear-to-r from-[#0F3DCC] via-[#6E2AF4] to-[#005F78]">
            <div className="rounded-3xl bg-linear-to-br from-[#123CCB] via-[#6F2EF2] to-[#005E77] py-24 px-8 text-center">
              <h2 className="mx-auto max-w-lg text-5xl font-bold leading-tight text-white">
                Ready To Reduce
                <br />
                File Sizes?
              </h2>

              <p className="mx-auto mt-6 max-w-md text-sm leading-6 text-white/80">
                Join 10,000+ developers and companies who have optimized over
                5PB of data with VComPRESS.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <button className="h-13 rounded-full bg-white px-8 text-sm font-semibold text-[#123CCB] transition hover:scale-105">
                  Start Compressing Now
                </button>

                <button className="h-13 rounded-full border border-white/30 px-8 text-sm font-medium text-white transition hover:bg-white/10">
                  View Documentation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

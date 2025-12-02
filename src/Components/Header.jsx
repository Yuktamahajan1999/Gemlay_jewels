import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Header() {
    return (
        <div className="w-full bg-[#009B8C] text-white text-[12px] sm:text-[13px]">
            <div className="max-w-[1440px] mx-auto flex items-center justify-between px-3 sm:px-6 h-[32px]">

                {/* Refer text */}
                <div className="flex-1 flex justify-center sm:justify-start overflow-hidden">
                    <span className="truncate whitespace-nowrap">
                        Refer and earn extra discount{" "}
                        <span className="cursor-pointer text-blue-200 hover:underline">
                            Click here…
                        </span>
                    </span>
                </div>

                {/* Pincode + Flag */}
                <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="cursor-pointer">Pincode</span>
                    <HiOutlineLocationMarker className="text-[16px] sm:text-[18px] cursor-pointer" />
                    <img
                        src="/images/india-flag.png"
                        alt="flag"
                        className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] rounded-full cursor-pointer"
                    />
                </div>
            </div>
        </div>
    );
}
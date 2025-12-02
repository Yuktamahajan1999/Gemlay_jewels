import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Header() {
    return (
        <div className="w-full bg-[#009B8C] text-white text-[13px]">
            <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 h-[32px]">

                <div className="flex-1 flex justify-center">
                    <span>
                        Refer and earn extra discount{" "}
                        <span className="cursor-pointer text-blue-500 hover:underline">
                            Click here…
                        </span>
                    </span>
                </div>

                <div className="flex items-center gap-2 text-[13px]">
                    <span className="cursor-pointer">Pincode</span>
                    <HiOutlineLocationMarker className="text-[18px] cursor-pointer" />

                    <img
                        src="/images/india-flag.png"
                        alt="flag"
                        className="w-[20px] h-[20px] rounded-full cursor-pointer"
                    />
                </div>
            </div>
        </div>
    );
}

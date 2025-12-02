import { useState } from "react";
import { IoChevronForwardOutline } from "react-icons/io5";

const items = [
    {
        title: "Buy Gold Jewellery Online in India",
        details:
            "Buying gold jewellery online in India has become easier and more trusted than ever. With certified products, transparent pricing, and doorstep delivery, customers can shop confidently and conveniently from the comfort of their homes. Online stores now offer detailed product descriptions, high-resolution images, and 360° views so you can examine every piece closely. You can also compare prices, explore the latest trends, and make informed decisions without stepping out."
    },
    {
        title: "Variety of options",
        details:
            "Choose from a wide range of designs, including rings, earrings, bangles, necklaces, and more. Each piece is crafted with attention to detail, offering something unique for every style and occasion. Whether you're shopping for everyday wear, festive looks, or special events, online collections bring endless possibilities. New arrivals, traditional patterns, and modern minimalist designs ensure there’s something for everyone."
    },
    {
        title: "Pay as per your convenience",
        details:
            "Enjoy flexible payment options such as net banking, credit/debit cards, UPI, and easy EMI plans. Our secure checkout ensures a smooth and hassle-free transaction every time. You can also choose cash-on-delivery in select locations. With instant confirmations and secure gateways, you can shop with peace of mind, knowing your payments are completely safe."
    },
    {
        title: "Customize as you like",
        details:
            "Create jewellery that truly reflects your style. From choosing gold purity and weight to customizing designs with gemstones or engravings, our experts help you craft the perfect personalized piece. Whether it’s for gifting, weddings, or personal use, custom jewellery adds a special touch. You can also request design previews, virtual consultations, and guidance from certified designers."
    },
    {
        title: "Crowd-free Buying Diamond Jewellery Online in India",
        details:
            "Skip the queues and shop for diamond jewellery peacefully from home. Explore certified pieces with detailed specifications, high-quality imagery, secure delivery, and complete transparency — all without stepping into a crowded store. Online platforms allow you to view diamond grading reports, clarity details, and craftsmanship quality. This makes choosing premium jewellery easier, faster, and more comfortable."
    }
];



export default function ExploreMore() {
    const [selected, setSelected] = useState(items[0]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-6 px-6 py-10">
            {/* SideBar: List options User can click */}
            <ul className="space-y-1 border-r pr-4">
                {items.map((item, index) => (
                    <div key={index}>
                        <li
                            onClick={() => setSelected(item)}
                            className={`flex items-center gap-2 py-2 cursor-pointer text-[15px] transition
                ${selected.title === item.title ? "text-teal-700 font-semibold" : "text-slate-700 hover:text-teal-600"}
              `} >
                            <IoChevronForwardOutline
                                className={`text-[12px] ${selected.title === item.title ? "text-teal-700" : "text-slate-600"
                                    }`}
                            />

                            {item.title}
                        </li>
                        {index !== items.length - 1 && <hr className="border-slate-200" />}
                    </div>
                ))}
            </ul>

            {/* Content Area: Displays details of selected items*/}
            <div className="ml-10 p-6 rounded-xl bg-gradient-to-r from-white to-slate-50 shadow-lg border border-slate-200 max-w-md transition hover:shadow-xl">
                <h3 className="text-2xl font-bold mb-4 text-slate-900 tracking-wide">
                    {selected.title}
                </h3>

                <p className="text-base text-slate-700 leading-relaxed text-justify">
                    {selected.details}
                </p>
            </div>
        </div >
    );
}
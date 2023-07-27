import { useState } from "react";
import { Link } from "react-router-dom";
import TotalBest from "./TotalBest";
import BrandBest from "./BrandBest";
import BeautyBest from "./BeautyBest";


export default function TodayCategoryBest() {
    const [active, setActive] = useState(true);
    const [activeBrand, setActiveBrand] = useState(false);
    const [activeBeauty, setActiveBeauty] = useState(false);

    const toggleActiveButton = () => {
        setActive(true) + setActiveBrand(false) + setActiveBeauty(false)
    }
    const toggleActBrandButton = () => {
        setActive(false) + setActiveBrand(true) + setActiveBeauty(false)
    }
    const toggleActBeautyButton = () => {
        setActive(false) + setActiveBrand(false) + setActiveBeauty(true)
    }

    return (
        <>
            {/* text */}
            <div className="text_wrap">
                <h2 className="text-xl font-bold my-4 text-center md:text-left">TODAY 카테고리 베스트</h2>
            </div>

            {/* categoryButton */}
            <div className="btn flex gap-2">
                <div className={"border rounded-full text-center w-20 " + (active ? "bg-red-400" : "bg-white")}>
                    <button
                        onClick={toggleActiveButton}
                        className={"p-1 text-sm font-medium " + (active ? "text-white" : "text-gray-400")}
                    >전 체</button>
                </div>
                <div className={"border rounded-full text-center w-20 " + (activeBrand ? "bg-red-400" : "bg-white")}>
                    <button
                        onClick={toggleActBrandButton}
                        className={"p-1 text-sm font-medium " + (activeBrand ? "text-white" : "text-gray-400")}
                    >브랜드</button>
                </div>
                <div className={"border rounded-full text-center w-20 " + (activeBeauty ? "bg-red-400" : "bg-white")}>
                    <button
                        onClick={toggleActBeautyButton}
                        className={"p-1 text-sm font-medium " + (activeBeauty ? "text-white" : "text-gray-400")}
                    >뷰 티</button>
                </div>
            </div>

            {/* totalList */}
            {active && <><ul className="list_wrap mt-2 "><TotalBest /></ul>

                {/* more */}
                <div className="btn_wrap mt-4 mx-auto w-1/2 p-2 border rounded-full text-center md:mx-auto ">
                    <button className="text-sm font-medium text-gray-600 ">
                        <Link to="/totalBest"><strong className="font-semibold"> 베스트 </strong>더보기</Link>
                    </button>
                </div>
            </>}

            {/* brandList */}
            {activeBrand && <><ul className="list_wrap mt-2 "><BrandBest /></ul>

            {/* more */}
                <div className="btn_wrap mt-4 mx-auto w-1/2 p-2 border rounded-full text-center md:mx-auto ">
                    <button className="text-sm font-medium text-gray-600 ">
                        <Link to="/brandBest"><strong className="font-semibold"> 브랜드 베스트 </strong>더보기</Link>
                    </button>
                </div>
            </>}

            {/* beautyList */}
            {activeBeauty && <><ul className="list_wrap mt-2 "><BeautyBest /></ul>

                {/* more */}
                <div className="btn_wrap mt-4 mx-auto w-1/2 p-2 border rounded-full text-center md:mx-auto ">
                    <button className="text-sm font-medium text-gray-600 ">
                        <Link to="/beautyBest"><strong className="font-semibold"> 뷰티 베스트 </strong>더보기</Link>
                    </button>
                </div>
            </>}
        </>
    )
}
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function BestTemplate() {
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
        <div className="contents">
            {/* button */}
            <div className="btn p-3 bg-gray-100 flex justify-center gap-10">
                <div className="">
                    <button onClick={toggleActiveButton}
                        className={"p-1 text-sm  " + (active ? "font-bold text-black" : "text-gray-400")}>
                    <Link to="/totalBest">전 체</Link>
                    </button>
                </div>

                <div >
                    <button onClick={toggleActBrandButton}
                        className={"p-1 text-sm  " + (activeBrand ? "font-bold text-black" : "text-gray-400")}>
                    <Link to="/brandBest">브랜드</Link>
                    </button>
                </div>
                
                <div>
                    <button onClick={toggleActBeautyButton}
                    className={"p-1 text-sm  " + (activeBeauty ? "font-bold text-black" : "text-gray-400")}>
                    <Link to="/beautyBest">뷰 티</Link>
                    </button>
                </div>
            </div>

            <Outlet/>

        </div>
    )
}
import { useEffect, useRef } from "react"

export default function Header() {
    return (
        <div id="header" className="md:hidden">
            <div className="top-banner " >
                <div className="wrap w-full">
                    <img src="https://cdn.pixabay.com/photo/2015/04/04/18/51/offer-706850__480.jpg" alt="광고" />
                </div>
            </div>
            <div className="search-bar ">              
                    <Search />
            </div>
        </div>
    )
}

function Search() {
    const inputRef = useRef(null)
    function handleChange(e) {
    }
    useEffect(() => {
        // input에 focus >> 자동으로 커서 깜빡임
        inputRef.current.focus();
    })
    return (
        <div className="px-2">
            <div className="mb-4">
                <input
                    type="text"
                    className="border px-2 py-1 w-full"
                    onChange={handleChange}
                    placeholder="Search"
                    ref={inputRef}
                />
            </div>
        </div>
    )
}
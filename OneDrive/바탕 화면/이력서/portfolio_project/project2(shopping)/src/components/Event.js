import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const limit=4;
function articleData() {
    const articles = [
        <div key={1} className="event1">
            <Link className="">
                <img
                    alt="이미지1"
                    src="https://image.brandi.me/event/2023/07/21/1689899668_banner_1_JCVyb9.jpg" />
            </Link>
        </div>,
        <div key={2} className="event2">
            <Link className="">
                <img
                    alt="이미지2"
                    src="https://image.brandi.me/event/2023/07/21/1689899672_banner_1_vLCZWV.jpg" />
            </Link>
        </div>,
        <div key={3} className="event3">
            <Link className="">
                <img
                    alt="이미지3"
                    src="https://image.brandi.me/event/2023/07/21/1689929726_banner_1_13euf9.jpg" />
            </Link>
        </div>,
        <div key={4} className="event4">
            <Link className="">
                <img
                    alt="이미지4"
                    src="https://image.brandi.me/event/2023/06/30/1688109892_banner_1_Y9WgFS.jpg" />
            </Link>
        </div>,
        <div key={5} className="event5">
            <Link className="">
                <img
                    alt="이미지5"
                    src="https://image.brandi.me/event/2023/07/24/1690163971_banner_1_etMnLu.jpg" />
            </Link>
        </div>,
        <div key={6} className="event6">
            <Link className="">
                <img
                    alt="이미지6"
                    src="https://image.brandi.me/event/2023/07/20/1689838941_banner_1_GvyiX7.jpg" />
            </Link>
        </div>,
        <div key={7} className="event7">
            <Link className="">
                <img
                    alt="이미지7"
                    src="https://image.brandi.me/event/2023/07/19/1689742373_banner_1_gzCAKv.jpg" />
            </Link>
        </div>,
        <div key={8} className="event8">
            <Link className="">
                <img
                    alt="이미지8"
                    src="https://image.brandi.me/event/2023/07/19/1689742062_banner_1_DiNVjd.jpg" />
            </Link>
        </div>,
        <div key={9} className="event9">
            <Link className="">
                <img
                    alt="이미지9"
                    src="https://image.brandi.me/event/2023/07/24/1690161430_banner_1_oWYTbD.jpg" />
            </Link>
        </div>,
        <div key={10} className="event10">
            <Link className="">
                <img
                    alt="이미지10"
                    src="https://image.brandi.me/event/2023/07/24/1690161100_banner_1_haZXTV.jpg" />
            </Link>
        </div>
    ];

    const promise = new Promise((res, rej) => {
        setTimeout(() => {
            res(articles)
        }, 1000)
    })

    return promise;
};

export default function Event() {
    const [articles, setArticles] = useState([]);
    const [skip, setSkip] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    // 게시물 가져오기 요청
    useEffect(() => {
        articleData()
            .then(data => {
                setArticles([...articles, ...data])
            })
            .catch(error => {
                setError(error)
            })
            .finally(() => setIsLoaded(true))
    }, [skip]);

    return (
            <div className="">
                {/* 게시물 리스트 */}
                <div className="eventList grid grid-cols-1 gap-4 md:grid-cols-2">
                    {articles.map(article => (
                        <div>
                            {article}
                        </div>
                    ))}
                </div>
                
                {/* 로딩 구현 (스피너) */}
                {!isLoaded && <p className="flex justify-center mb-4">... &#128193;</p>}
                {/* 에러 메시지 출력 */}
                {error && <p className="flex justify-center mb-4">&#128581;</p>}

                {/* 더보기 버튼 */}
                <div className="flex justify-center mt-4">
                    <button className="w-1/3 border p-1 text-blue-500" onClick={() => setSkip(skip+limit)} >더보기</button>
                </div>

            </div>

    )
}
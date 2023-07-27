import React, { useEffect, useState } from "react";
import Data from "./Data";

export default function BeautyBest() {
    const [articles, setArticles] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    // 게시물 가져오기 요청
    useEffect(() => {
        Data()
            .then(data => {
                setArticles([...articles, ...data])
            })
            .catch(error => {
                setError(error)
            })
            .finally(() => setIsLoaded(true))
    }, []);

    if (!articles) {
        return;
      }

    const beautyList = articles.filter(item => {
        if (item.props.className == "beauty_list_item ") {
            return item
        }
    })

    return(
        <>
        <ul className="list_wrap mt-2  grid grid-cols-2 gap-4  md:grid-cols-4">{beautyList}</ul>
        </>
    )
}

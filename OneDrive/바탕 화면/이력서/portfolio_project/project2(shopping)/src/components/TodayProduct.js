import { Link } from "react-router-dom";

export default function TodayProduct() {
    return (
      <div className="">
        <div className="text_wrap">
          <h2 className="text-xl font-bold my-4 text-center md:text-left ">오늘은 이 상품 어때요?</h2>
        </div>
        <ul className="product_list grid grid-cols-2 gap-4 md:grid-cols-4">
  
          <div className="list_item ">
            <div>
              <Link to="/"><img src="https://image.brandi.me/cproduct/2022/12/05/SB000000000080080508_1670234929_image1_S.jpeg" alt="옷" /></Link>
              <div className="info ">
                <h4 className="seller text-zinc-400 text-xs">럽앤썸</h4>
                <h3 className="pro_name text-sm truncate">[국내!/퀄리티대박~!] 카라넥 / 하이넥 아방핏 벌룬 투웨이 꽈배기 니트 집업 5color_럽앤썸</h3>
              </div>
              <div className="item_price flex">
                <strong className="dc text-sm text-red-500 mr-2" >10%</strong>
                <h3 className="price text-sm"> 37,400원</h3>
              </div>
            </div>
          </div>
          <div className="list_item ">
            <div>
              <Link to="/"><img src="https://image.brandi.me/cproduct/2021/09/28/SB000000000011492948_1632798286_image1_S.jpeg" alt="신발" /> </Link>
              <div className="info ">
                <h4 className="seller text-zinc-400 text-xs">슈슐랭</h4>
                <h3 className="pro_name text-sm truncate">[쿠폰][260까지 빅사이즈/ 숏/ 컬러추가] 뒷지퍼 절개 롱 부츠</h3>
              </div>
              <div className="item_price flex">
                <strong className="dc text-sm text-red-500"></strong>
                <h3 className="price text-sm">21,800원</h3>
              </div>
            </div>
          </div>
          <div className="list_item ">
            <div>
              <Link to="/"><img src="https://image.brandi.me/cproduct/2022/10/24/SB000000000076123604_1666594937_image1_S.jpeg" alt="무스탕" /> </Link>
              <div className="info ">
                <h4 className="seller text-zinc-400 text-xs">리나셀</h4>
                <h3 className="pro_name text-sm truncate">[MD강력추천+무료배송] 부드러운 클래식 무스탕/1월13일(금) 6차 재입고</h3>
              </div>
              <div className="item_price flex">
                <strong className="dc text-sm text-red-500">5%</strong>
                <h3 className="price text-sm">47,310원</h3>
              </div>
            </div>
          </div>
          <div className="list_item ">
            <div>
              <Link to="/"><img src="https://image.brandi.me/cproduct/2022/10/23/SB000000000076075884_1666535612_image1_S.jpeg" alt="원피스" /> </Link>
              <div className="info ">
                <h4 className="seller text-zinc-400 text-xs">반하리마켓</h4>
                <h3 className="pro_name text-sm truncate">[도톰/투피스SET] 트위드 스퀘어 더블 버튼 크롭 블라우스 미니 스커트 세트_반하리마켓</h3>
              </div>
              <div className="item_price flex">
                <strong className="dc text-sm text-red-500">10%</strong>
                <h3 className="price text-sm">37,260원</h3>
              </div>
            </div>
          </div>
          <div className="list_item ">
            <div>
              <Link to="/"><img src="https://image.brandi.me/cproduct/2022/11/22/SB000000000041336569_1669125784_image1_S.jpeg" alt="헤어밴드" /> </Link>
              <div className="info ">
                <h4 className="seller text-zinc-400 text-xs">샵포엠</h4>
                <h3 className="pro_name text-sm truncate">[당일출고/누적판매량7800개] 벨벳 머리띠 파스텔 헤어밴드 곱창밴드 머리끈 (2개이상구매)</h3>
              </div>
              <div className="item_price flex">
                <strong className="dc text-sm text-red-500"></strong>
                <h3 className="price text-sm">3,900원</h3>
              </div>
            </div>
          </div>
        </ul>
      </div>
    )
  }
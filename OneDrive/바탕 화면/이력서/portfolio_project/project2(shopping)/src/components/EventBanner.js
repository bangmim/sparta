import { Link, Route } from "react-router-dom";

export default function EventBanner() {

    return (
      <div className="">
        <div className="text_wrap">
          <h2 className="text-xl font-bold my-4 text-center md:text-left">지금 뜨고 있는 혜택</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
          <ul className="flex flex-wrap">
            <li className="basis-full ">
              <div className="list_item relative h-64">
                <Link to="/" ><img className="w-full h-full" src="https://cdn.pixabay.com/photo/2017/06/04/01/23/coming-soon-2370148_1280.png" alt="event" /></Link>
                <div className="more">
                  <div className="box_wrap absolute bottom-3 right-0 ">
                    <Link to="event"><span className="p-2 bg-gray-200">더보기</span></Link>
                  </div>
                </div>
              </div>
            </li>
            <ul className="grid grid-cols-3 gap-3">
              <li className="list_item">
                <Link to="/"><img src="https://image.brandi.me/cproduct/2022/03/07/SB000000000054945271_1646683721_image1_S.jpeg" alt="옷" /></Link>
                <div className="info ">
                  <h4 className="seller text-zinc-400 text-xs">제니엘</h4>
                  <h3 className="pro_name text-sm truncate">당일출고 스텝 오프숄더 카라 셔츠 니트 뷔스티에 블라우스</h3>
                </div>
                <div className="item_price flex">
                  <strong className="dc text-sm text-red-500 mr-2" >5%</strong>
                  <h3 className="price text-sm"> 39,900원</h3>
                </div>
              </li>
              <li className="list_item">
                <Link to="/"><img src="https://image.brandi.me/cproduct/2023/01/20/SB000000000083205817_1674207914_image1_S.jpeg" alt="옷" /></Link>
                <div className="info ">
                  <h4 className="seller text-zinc-400 text-xs">아이미마인</h4>
                  <h3 className="pro_name text-sm truncate">디바 배색 트위드 금장 크롭자켓 플레어 테니스 미니스커트 하객 투피스세트 (2color)</h3>
                </div>
                <div className="item_price flex">
                  <strong className="dc text-sm text-red-500 mr-2" >14%</strong>
                  <h3 className="price text-sm"> 58,300원</h3>
                </div>
              </li>
              <li className="list_item">
                <Link to="/"><img src="https://image.brandi.me/cproduct/2023/01/18/SB000000000076075884_1674024221_image1_S.jpeg" alt="옷" /></Link>
                <div className="info ">
                  <h4 className="seller text-zinc-400 text-xs">반하리마켓</h4>
                  <h3 className="pro_name text-sm truncate">[도톰/투피스SET] 트위드 스퀘어 더블 버튼 크롭 블라우스 미니 스커트 세트_반하리마켓</h3>
                </div>
                <div className="item_price flex">
                  <strong className="dc text-sm text-red-500 mr-2" >10%</strong>
                  <h3 className="price text-sm"> 37,260원</h3>
                </div>
              </li>
            </ul>
          </ul>
          <ul className="flex flex-wrap mt-5 md:mt-0">
            <li className="basis-full">
              <div className="list_item relative h-64">
                <Link to="/"><img className="w-full h-full" src="https://cdn.pixabay.com/photo/2019/11/06/14/26/black-friday-4606219_1280.jpg" alt="event" /></Link>
                <div className="more">
                  <div className="box_wrap absolute bottom-3 right-0 ">
                    <Link to="event"><span className="p-2 bg-gray-200">더보기</span></Link>
                  </div>
                </div>
              </div>
            </li>
            <ul className="grid grid-cols-3 gap-4 mt-1.5">
              <li className="list_item">
                <Link to="/"><img src="https://image.brandi.me/cproduct/2020/11/13/23558749_1605243292_image1_M.jpg" alt="옷" /></Link>
                <div className="info ">
                  <h4 className="seller text-zinc-400 text-xs">레터프롬문</h4>
                  <h3 className="pro_name text-sm truncate">파리지앵 울 트렌치 코트 ( 아이보리 )</h3>
                </div>
                <div className="item_price flex">
                  <strong className="dc text-sm text-red-500 mr-2" >15%</strong>
                  <h3 className="price text-sm"> 136,000원</h3>
                </div>
              </li>
              <li className="list_item">
                <Link to="/"><img src="https://image.brandi.me/cproduct/2022/11/01/SB000000000077120831_1667274542_image1_S.jpeg" alt="옷" /></Link>
                <div className="info ">
                  <h4 className="seller text-zinc-400 text-xs">에잇세컨즈</h4>
                  <h3 className="pro_name text-sm truncate">[에잇세컨즈] 토글 버튼 시어링 아우터  베이지 (112Y3VCY1A)</h3>
                </div>
                <div className="item_price flex">
                  <strong className="dc text-sm text-red-500 mr-2" ></strong>
                  <h3 className="price text-sm"> 89,900원</h3>
                </div>
              </li>
              <li className="list_item">
                <Link to="/"><img src="https://image.brandi.me/cproduct/2021/11/10/SN000000000044334078_1636533486_image1_S.jpeg" alt="옷" /></Link>
                <div className="info ">
                  <h4 className="seller text-zinc-400 text-xs">엽페</h4>
                  <h3 className="pro_name text-sm truncate">STAN HANDMADE COAT_GRAY</h3>
                </div>
                <div className="item_price flex">
                  <strong className="dc text-sm text-red-500 mr-2" >20%</strong>
                  <h3 className="price text-sm"> 260,000원</h3>
                </div>
              </li>
            </ul>
          </ul>
        </div>
  
        <div className="btn_wrap mt-4 mx-auto w-1/2 p-2 border rounded-full text-center md:mx-auto ">
          <button
            className="text-sm font-medium text-gray-600 "
          ><Link to="event"><strong className="font-semibold">더 많은 혜택 </strong>보러가기</Link></button>
        </div>
      </div>
    )
  }
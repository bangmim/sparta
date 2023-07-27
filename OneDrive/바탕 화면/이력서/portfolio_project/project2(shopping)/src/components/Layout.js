import { Link, Outlet } from "react-router-dom";

export default function Layout() {

  return (
    <div className="max-w-md mx-auto pt-16 md:max-w-5xl">

      {/* 모바일 */}
      <nav className="top_menu ">
        <ul className="flex fixed p-2 top-0 left-0 w-full border-b z-10 bg-white justify-between md:hidden">
          {/* home */}
          <li className="font-bold">
            <Link to="/" className="block p-2">Home</Link>
          </li>
          {/* event */}
          <li className="font-bold">
            <Link to="/event" className="block p-2">혜택존</Link>
          </li>
          {/* best */}
          <li className="font-bold">
            <Link to="/totalBest" className="block p-2">베스트</Link>
          </li>
         
        </ul>
      </nav>

      {/* 데스크탑 */}
      <nav className="top-menu hidden md:block fixed top-0 w-full z-10 bg-white max-w-5xl pt-5">
        {/* nav1 */}
        <ul className=" p-2 flex flex-wrap justify-between">
          {/* 로고 */}
          <li className="logo w-1/4 self-center ">
            <div className="logo_wrap flex ">
              <div className="icon_wrap self-center">
                <svg className="w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0h12.6c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7V448c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V197.7l-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0h12.6z" /></svg>
              </div>
              <div className="text-wrap">
                <span className="text-xl font-bold">MY쇼핑몰</span>
              </div>
            </div>
          </li>
          {/* 검색 */}
          <div className="search_wrap w-1/2 self-center">
            <li className="search relative ">
              <div className="search_wrap ">
                <input
                  type="text"
                  className="border px-2 py-1 w-full"
                  placeholder="Search"
                />
              </div>
              <div className="icon_wrap ">
                <svg className="w-5 absolute top-0 right-0 mt-2 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" /></svg>
              </div>
            </li>
          </div>
          {/* 마이페이지 */}
          <li className="profile w-1/4 self-center">
            <ul className="flex flex-wrap justify-end gap-3">
              {/* 장바구니 */}
              <li><Link to="/cart" className="block p-2"><svg className="w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg></Link> </li>
              {/* 좋아요 */}
              <li>
                <Link to="/favorite" className="block p-2"><svg className="w-7 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" /></svg></Link>
              </li>
              {/* 마이페이지 */}
              <li>
                <Link to="/login" className="block p-2"><svg className="w-6  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg></Link>
              </li>
            </ul>
          </li>
        </ul>

        {/* nav2*/}
        <ul className="flex p-1 justify-between ">
          <li className="font-bold">
            <Link to="/" className="block p-2 ">Home</Link>
          </li>
          <li className="font-bold">
            <Link to="/event" className="block p-2">혜택존</Link>
          </li>
          <li className="font-bold">
            <Link to="/totalBest" className="block p-2">베스트</Link>
          </li>
        </ul>
      </nav>

      {/* bottom */}
      <nav className="bottom_menu">
        <ul className="flex fixed p-2 bottom-0 left-0 w-full border-t z-10 bg-white justify-between items-center md:hidden">
          {/* 홈 */}
          <li>
            <Link to="/" className="block p-2"><svg className="w-8 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg></Link>
          </li>
          {/* 하루배송 */}
          <li>
            <Link to="/" className="block p-2"><svg className="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM208 416c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zm272 48c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48z" /></svg></Link>
          </li>
          {/* 카테고리 */}
          <li>
            <Link to="/" className="block p-2"><svg className="w-7 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 96V224H288V96H448zm0 192V416H288V288H448zM224 224H64V96H224V224zM64 288H224V416H64V288zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" /></svg></Link>
          </li>
          {/* 좋아요 */}
          <li>
            <Link to="/" className="block p-2"><svg className="w-7 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" /></svg></Link>
          </li>
          {/* 마이페이지 */}
          <li>
            <Link to="/login" className="block p-2"><svg className="w-6  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg></Link>
          </li>
        </ul>

      </nav>

      {/* 바뀌는 부분 */}
      <div className="md:mt-14 mb-20">
      <Outlet />
      </div>


    </div>
  )
}


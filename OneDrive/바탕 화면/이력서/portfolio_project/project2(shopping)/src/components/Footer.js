
export default function Footer() {
    return (
        <div className="footer">
            <div className="bg-gray-100 pb-12">
                <div className="px-3 mx-auto">
                    <div className="flex flex-wrap justify-between w-90 ">
                        {/* flex-wrap 속성이 적용되어 flex-basis 적용할 수 있음.*/}
                        <div className="basis-full p-3">
                            
                            <ul className="mt-2 flex gap-1">
                                <li className=" border-r-2"><a href=""><span className="text-xs p-1">이용약관
                                    </span></a></li>
                                <li className=" border-r-2"><a href=""><span className="text-xs font-semibold	 p-1">개인정보처리방침
                                    </span></a></li>
                                <li className=" border-r-2"><a href=""><span className="text-xs  p-1">사업자정보확인
                                    </span></a></li>
                                <li className=" border-r-2"><a href=""><span className="text-xs p-1">인재채용
                                    </span></a></li>
                            </ul>
                        </div>

                        <div className="basis-full p-3 ">
                            <h3 className="text-sm font-bold">(주)쇼핑몰</h3>
                            <div>
                                <span className="text-xs">현 쇼핑몰에서는 통신 판매중개자로서 통신판매 당사자가 아니며, 판매자가 등록한 상품정보 및 거래에 (주)쇼핑몰은 책임을 지지 않습니다.</span>
                            </div>
                        </div>

                        <div className="basis-full p-3 ">
                            <h3 className="text-sm font-bold">고객센터 1522-2222</h3>
                            <ul>
                                <li className="text-xs mb-0.5"><span className="mr-2" >영업시간</span><span>AM 10:00 ~ PM 17:00 (주말 및 공휴일 휴무) </span></li>
                                <li className="text-xs mb-0.5"><span className="mr-2" >점심시간</span><span>PM 12:30 ~ PM 13:30</span></li>
                                <li className="text-xs mb-0.5"><span className="mr-2"  >고객문의</span><a href="">mihyun@example.com</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center border-t border-black">
                        <h3 className="text-sm py-2">Frontend Developer&PARKMIHYUN</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
// # 1주차 숙제

let fruit_list = ['사과','감','감','포도','포도','배','딸기','포도','감','수박','딸기']

// (1) 딸기는 몇 개일까? (map 함수 이용)
count=0
let a = fruit_list.map((a,i)=>{
    if(a=="딸기"){
        count+=1;
    }
})
console.log(count)


// (2) 포도만 들어있는 podo_list 구현 (filter함수 이용)
let podo_list = fruit_list.filter((a,i)=>{
    if(a=="포도"){
        return a
    }
})

console.log(podo_list)

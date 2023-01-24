const children = ["철수", "영희", "훈이"]
// undefined

for(let i = 0; i < 3; i++) {
    console.log(children[i]+"입니다.")
}
// VM974:2 철수입니다.
// VM974:2 영희입니다.
// VM974:2 훈이입니다.
undefined

for(let i = 0; i < 4; i++) {
    console.log(children[i]+"입니다.")
}
// VM990:2 철수입니다.
// VM990:2 영희입니다.
// VM990:2 훈이입니다.
// VM990:2 undefined입니다.
// undefined

for(let i = 0; i < children.length; i++) {
    console.log(children[i]+"입니다.")
}
// VM1060:2 철수입니다.
// VM1060:2 영희입니다.
// VM1060:2 훈이입니다.

children.length
// 3

let persons = [
    {name: "철수", age: 17},
    {name: "영희", age: 22},
    {name: "도우너", age: 5},
    {name: "그루트", age: 65},
    {name: "도비", age: 3}
]
// undefined

for(let count = 0; count < persons.length; count++) {

    if(persons[count].age >= 19) {
        console.log("성인입니다.")
    } else {
        console.log("미성년자입니다.")
    }
}
// VM2182:6 미성년자입니다.
// VM2182:4 성인입니다.
// VM2182:6 미성년자입니다.
// VM2182:4 성인입니다.
// VM2182:6 미성년자입니다.
// undefined

for(let count = 0; count < persons.length; count++) {

    if(persons[count].age >= 19) {
        console.log(persons[count].name+"님은 성인입니다.")
    } else {
        console.log(persons[count].name+"님은 미성년자입니다.")
    }
}
// VM2522:6 철수님은 미성년자입니다.
// VM2522:4 영희님은 성인입니다.
// VM2522:6 도우너님은 미성년자입니다.
// VM2522:4 그루트님은 성인입니다.
// VM2522:6 도비님은 미성년자입니다.
// undefined


// 퀴즈

const fruits = [
    { number: 1, title: "레드향" },
    { number: 2, title: "샤인머스캣" },
    { number: 3, title: "산청딸기" },
    { number: 4, title: "한라봉" },
    { number: 5, title: "사과" },
    { number: 6, title: "애플망고" },
    { number: 7, title: "딸기" },
    { number: 8, title: "천혜향" },
    { number: 9, title: "과일선물세트" },
    { number: 10, title: "귤" },
]
undefined

for(let i=0; i< fruits.length; i++) {
    console.log(fruits[i].age+" "+fruits[i].title)
}
// 1 레드향
// 2 샤인머스캣
// 3 산청딸기
// 4 한라봉
// 5 사과
// 6 애플망고
// 7 딸기
// 8 천혜향
// 9 과일선물세트
// 10 귤
undefined

for(let i=0; i< fruits.length; i++) {
    console.log(fruits[i].number+" "+fruits[i].title)
}
// 1 레드향
// 2 샤인머스캣
// 3 산청딸기
// 4 한라봉
// 5 사과
// 6 애플망고
// 7 딸기
// 8 천혜향
// 9 과일선물세트
// 10 귤
undefined

for(let i=0; i< fruits.length; i++) {
    console.log(`${fruits[i].number} ${fruits[i].title}`)
}

// 1 레드향
// 2 샤인머스캣
// 3 산청딸기
// 4 한라봉
// 5 사과
// 6 애플망고
// 7 딸기
// 8 천혜향
// 9 과일선물세트
// 10 귤
undefined

for(let i=0; i< fruits.length; i++) {
    console.log(`과일 차트 ${fruits[i].number}위는 ${fruits[i].title}입니다`)
}

// 과일 차트 1위는 레드향입니다
// 과일 차트 2위는 샤인머스캣입니다
// 과일 차트 3위는 산청딸기입니다
// 과일 차트 4위는 한라봉입니다
// 과일 차트 5위는 사과입니다
// 과일 차트 6위는 애플망고입니다
// 과일 차트 7위는 딸기입니다
// 과일 차트 8위는 천혜향입니다
// 과일 차트 9위는 과일선물세트입니다
// 과일 차트 10위는 귤입니다
undefined


// 수학 개체
Math.floor( Math.random() * 100000 )
69837

String ( Math.floor( Math.random() * 100000 ) )
'65647'

String ( Math.floor( Math.random() * 100000 ) )
'59362'

String ( Math.floor( Math.random() * 100000 ) )
'92261'

String ( Math.floor( Math.random() * 100000 ) )
'97072'

String ( Math.floor( Math.random() * 100000 ) )
'81236'

String ( Math.floor( Math.random() * 100000 ) ).padStart(6, "0")
'017014'

String ( Math.floor( Math.random() * 100000 ) ).padStart(6, "0")
'006068'

String ( Math.floor( Math.random() * 100000 ) ).padStart(6, "0")
'040300'

let result = String ( Math.floor( Math.random() * 100000 ) ).padStart(6, "0")
undefined

result
'049976'

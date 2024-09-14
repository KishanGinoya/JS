//stack memory
let name1="kishan"
let name2=name1;

name2="ram"
console.log(name1)
console.log(name2)

//heap memory
let heap1={
    email:"k@gmail.com",
    pass:"123"
}
let heap2=heap1

heap2.email="kishan@gmail.com"
console.log(heap1.email)
console.log(heap2.email)
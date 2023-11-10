
let btn = document.getElementById("btn")

btn.onclick = function front22(){
    let str = document.getElementById("matn").value
    let p = document.getElementById("par")
    let text1 =str.substring(0,2)

    return p.innerHTML = text1+str+text1
}
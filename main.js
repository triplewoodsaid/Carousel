
let n
init_img()
setInterval(()=>{
    makeleave(GetImg(n)).one('transitionend', (e)=>{
    makeenter($(e.currentTarget))
  })
  makecurrent(GetImg(n+1))
n++
},4000)

function x(n){
    n=n%5
    if(n===0)n=5
    
    return n;
}
function GetImg(n){
    return $(`.images > img:nth-child(${x(n)})`)
}
function makecurrent($node){
    return $node.removeClass('leave enter').addClass('current')
    n=n+1
}
function makeleave($node){
    return $node.removeClass('current enter').addClass('leave')
}
function makeenter($node){
    return $node.removeClass('leave current').addClass('enter')
}
function init_img(){
    n=1
    $('.images > img:nth-child(1)').addClass('current')
$('.images > img:nth-child(2)').addClass('enter')
$('.images > img:nth-child(3)').addClass('enter')
$('.images > img:nth-child(4)').addClass('enter')
$('.images > img:nth-child(5)').addClass('enter')
}
function jump_page(url) {
    location.href = url
}


// 回到顶部按钮事件
(function (){
    let btttDiv = document.querySelector('.back_to_the_top')

    btttDiv.addEventListener('click', function () {
        window.scrollTo(0,0)
    })

})();


// "联系我们" 滚动到底部(有邮箱信息)
(function (){
    let contactUs = document.querySelector('.contact-us')
    let footer = document.querySelector('#footer')

    contactUs.addEventListener('click', function (){
        window.scrollTo(0,footer.offsetTop)
    })

})();
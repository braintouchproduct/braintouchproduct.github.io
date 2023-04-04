(function () {
    // 通过冒泡绑定点击事件
    let navUl = document.getElementById('nav-ul')

    navUl.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
            // 获取电梯导航对应的内容 元素
            let _className = `.elevator-content-${e.target.dataset.id}`
            let _top = document.querySelector(_className).getBoundingClientRect().y

            // 需要减去的头部高度
            let headerHeight = document.querySelector('.header-wrapper').offsetHeight

            // 需要加上目前滚动条已滚动的距离
            let hasScrollTop = document.documentElement.scrollTop

            let _scrollTop = parseInt(_top - headerHeight + hasScrollTop)

            // 当前已在滚动位置, 则不发生滚动;
            if (_scrollTop > 0) {
                document.documentElement.scrollTop = _scrollTop  // 让浏览器滚动到这个距离
            }

            // // 清除样式
            // clearUlActive()
            //
            // // 当前被点击元素高亮
            // e.target.classList.add('active')
        }
    })
})();



// 滚动条滚动触发的事件, 使对应的电梯导航高亮
function scrollEvent() {
    // 头部导航栏高度
    let headerHeight = parseInt(document.querySelector('.header-wrapper').offsetHeight)

    // 当前滚动条已卷过的距离
    const scrollPos = parseInt(document.documentElement.scrollTop) + 1
    // console.log(scrollPos)

    // 右侧定位盒子到头部 body 的距离
    let basicHeight = parseInt(document.querySelector('.main-content').offsetTop - headerHeight)

    let eleContentArr = document.querySelectorAll('[class^=elevator-content]');

    // console.log(eleContentArr)

    let posArr = []
    eleContentArr.forEach(function (item, index){
        posArr.push(parseInt(item.offsetTop + basicHeight))
    })

    // console.log(posArr)

    for (let i = 0; i < posArr.length - 1; i++){

        clearUlActive()

        // console.log(`scrollPos:${scrollPos}`)

        if (scrollPos < posArr[i] && i === 0 ) {
            document.querySelector(`.elevator-${i + 1}`).classList.add('active')
            // console.log(`posArr[i]:${posArr[i]}`)
            break
        }

        else if ((i === posArr.length - 2 && scrollPos >= posArr[i + 1])) {

            document.querySelector(`.elevator-${i + 2}`).classList.add('active')
            // console.log(`posArr[i]:${posArr[i]}`)
            break
        }

        else if ( scrollPos >= posArr[i] && scrollPos < posArr[i + 1]) {
            // 当前电梯高亮
            document.querySelector(`.elevator-${i + 1}`).classList.add('active')
            // console.log(`posArr[i]:${posArr[i]}`)
            break
        }
    }
    // 使滚动到 ... 位置
}


(function(){
    // 节流
    window.addEventListener('scroll', _.throttle(scrollEvent, 300))
})();


function clearUlActive() {
    let lastHighLight = document.querySelector('#nav-ul .active')

    // 清除原来的高亮效果
    if (lastHighLight != null) {
        lastHighLight.classList.remove('active')
    }
}



(function (){
    let divArr = document.querySelectorAll('[class^=project-hub]')

    divArr.forEach(function (item, index){
        item.addEventListener('click', function (e){
            location.href = 'product_hub.html'
        })
    })

})()


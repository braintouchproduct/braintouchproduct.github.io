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




// "购买咨询" 按钮绑定事件
(function (){

    let mask = document.querySelector('.mask')
    let close_icon = document.querySelector('.close-icon')
    let btn = document.querySelector('.purchase-consultation')

    if(btn){
        btn.addEventListener('click', function (e){
            // 显示遮罩层
            mask.style.display = 'block'
            // 填写用户信息的 div 显示
        })
    }

    if(close_icon) {
        close_icon.addEventListener('click', function (e){
            // 显示遮罩层
            mask.style.display = 'none'
            // 填写用户信息的 div 显示
        })
    }

    document.querySelector('input[name=unit]').addEventListener('change', function (e){
        let val = e.target.value.trim()
        if (val) e.target.nextElementSibling.innerText = ''
    })

    document.querySelector('input[name=contact]').addEventListener('change', function (e){
        let val = e.target.value.trim()
        if (val) e.target.nextElementSibling.innerText = ''
    })

    // 限制数值不能小于 0
    document.querySelector('input[name=purchase]').addEventListener('change', function (e){
        let num = $(e.target).val()
        if(num <= 0){
            $(e.target).val(1)
        }
    })

    // 按钮提交事件
    let submitBtn = document.querySelector('#submit')
    submitBtn.addEventListener('click', function (e){
        // e.target.preventDefault()
        // e.target.stopPropagation()
        let isValid = true

        let unitInput = document.querySelector('input[name=unit]')
        let contactInput = document.querySelector('input[name=contact]')
        let contactStr = contactInput.value.trim()
        let purchaseInput = document.querySelector('input[name=purchase]')

        if(unitInput.value.trim() === '') {
            isValid = false
            unitInput.nextElementSibling.innerText = `请输入公司/机构名称`
        }

        if(contactStr === '') {
            isValid = false
            contactInput.nextElementSibling.innerText = `请输入联系方式`
        } else if (!/^1[3-9]\d{9}$/.test(contactStr)){

        }

        if(purchaseInput.value.trim() === '') {
            isValid = false
            purchaseInput.nextElementSibling.innerText = `请输入购买数量`
        }


        if(isValid) {
            // 验证成功 - 发送 ajax 请求
/*            $.ajax({
                type: 'post',
                url: 'http://39.107.40.115:9000/api/purchase',
                contentType: 'application/json',
                data:JSON.stringify({
                    unit: unitInput.value.trim(),
                    contact: contactStr,
                    purchase: purchaseInput.value.trim()
                }),
                dataType:'json',
                success: function(response) {
                    if(response.code === 200){
                        unitInput.value = ''
                        contactInput.value = ''
                        alert(`我们将于 2 个工作日内联系您`)

                        document.querySelector('.mask').style= 'none'

                    } else if(response.code !== 200) {
                        alert(response.msg)
                    }
                }
            })*/

            // https 2 http
            let unit = unitInput.value.trim()
            let contact = contactStr
            let purchase = purchaseInput.value.trim()

            try {
                const img = new Image()
                img.src = `http://39.107.40.115:9000/api/purchase?unit=${unit}&contact=${contact}&purchase${purchase}`
                alert(`submitted successfully, We will contact you within 2 working days`)
                document.querySelector('.mask').style= 'none'
            } catch (error) {
                alert('failed')
                return
            } finally {

            }
        }
    })

})();
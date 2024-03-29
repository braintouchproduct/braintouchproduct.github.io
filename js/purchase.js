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
            $.ajax({
                type: 'post',
                url: 'https://braintouch.naolubrain.cn:8080/api/purchase',
                contentType: 'application/json',
                data:JSON.stringify({
                    unit: unitInput.value.trim(),
                    contact: contactStr,
                    purchase: purchaseInput.value.trim()
                }),
                dataType:'json',
                success: function(response) {
                    if(response.code === 200){
                        document.querySelector('.mask').style= 'none'
                        unitInput.value = ''
                        contactInput.value = ''
                        alert(`我们将在 1 个工作日内联系您`)

                    } else if(response.code !== 200) {
                        alert(response.msg)
                    }
                },
                error: function (xhr, status, errorThrown){
                    console.log(`状态:${xhr.readyState}`);//当前状态,0-未初始化，1-正在载入，2-已经载入，3-数据进行交互，4-完成。
                    console.log(`错误信息: ${xhr.statusText}`);
                    console.log(`响应:${xhr.responseText}`);
                    console.log(errorThrown);
                    alert(`状态码: ${xhr.status}\n状态:${xhr.readyState}\n错误信息: ${xhr.statusText}\n响应:${xhr.responseText}`)
                    alert(errorThrown)
                }
            })
        }
    })
})();

(function (){
    let video = document.querySelector('.banner-div-video video')
    setTimeout(function (){
        video.style.display = 'block'
        console.log('显示 banner 视频')
    }, 4 * 1000)
})();


// 控制视频加载顺序
(function (){
    let videoArr = document.querySelectorAll('.video');
    let bannerVideo = videoArr[0]  // 1,340 KB       banner_video_less.mp4
    let secondVideo = videoArr[1]  // 5,997 KB       video_01.mp4
    let DemoVideo_01 = videoArr[2] // 68,682 KB      demo_01.mp4
    let DemoVideo_02 = videoArr[3] // 169,700 KB     demo_02_hololens.mp4

    let focusVideo_01 = videoArr[4] // 4,564 KB      riding_scene.mp4
    let focusVideo_02 = videoArr[5] // 18,811 KB     als_scene.mp4
    let focusVideo_03 = videoArr[6] // 3,904 KB      drive_scene.mp4

    // 加载第 1 个视频
    bannerVideo.src = 'https://media.githubusercontent.com/media/braintouchproduct/braintouchproduct.github.io/main/video/sdk/banner_video_less.mp4'
    // 第 1 个视频加载完成事件
    bannerVideo.addEventListener('canplaythrough', function (){
        console.log('第 1 个视频加载完成')

        // 加载第 2 个视频
        secondVideo.src = 'https://media.githubusercontent.com/media/braintouchproduct/braintouchproduct.github.io/main/video/sdk/video_01.mp4'
    })

    // 第 2 个视频加载完成事件
    secondVideo.addEventListener('canplaythrough', function (){
        console.log('第 2 个视频加载完成')

        // 加载第 3 个视频
        focusVideo_03.src = 'https://media.githubusercontent.com/media/braintouchproduct/braintouchproduct.github.io/main/video/sdk/drive_scene.mp4'
    })

    // 第 3 个视频加载完成事件
    focusVideo_03.addEventListener('canplaythrough', function (){
        console.log('第 3 个视频加载完成')

        // 加载第 4 个视频
        focusVideo_01.src = 'https://media.githubusercontent.com/media/braintouchproduct/braintouchproduct.github.io/main/video/sdk/riding_scene.mp4'
    })

    // 第 4 个视频加载完成事件
    focusVideo_01.addEventListener('canplaythrough', function (){
        console.log('第 4 个视频加载完成')

        // 加载第 5 个视频
        focusVideo_02.src = 'https://media.githubusercontent.com/media/braintouchproduct/braintouchproduct.github.io/main/video/sdk/als_scene.mp4'
    })

    // 第 5 个视频加载完成事件
    focusVideo_02.addEventListener('canplaythrough', function (){
        console.log('第 5 个视频加载完成')

        // 加载第 6 个视频
        DemoVideo_01.src = 'https://media.githubusercontent.com/media/braintouchproduct/braintouchproduct.github.io/main/video/sdk/demo_01.mp4'
    })

    // 第 6 个视频加载完成事件
    DemoVideo_01.addEventListener('canplaythrough', function (){
        console.log('第 6 个视频加载完成')

        // 加载第 7 个视频
        DemoVideo_02.src = 'https://media.githubusercontent.com/media/braintouchproduct/braintouchproduct.github.io/main/video/sdk/demo_02_hololens.mp4'
    })

    // 第 7 个视频加载完成事件
    DemoVideo_02.addEventListener('canplaythrough', function (){
        console.log('第 7 个视频加载完成')
    })

})();

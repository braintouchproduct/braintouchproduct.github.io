
(function (){
   let btnArr = document.querySelectorAll('.project-hub-btn')

   btnArr.forEach(function (item,index){
       item.addEventListener('click', function (e){
           location.href = 'product_hub.html'
       })
   })
})()
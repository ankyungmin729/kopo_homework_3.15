console.log("연결확인");

const btnBg = document.querySelector('.btn--toggle');
const btnBgReset = document.querySelector('.btn--reset');
const btnBgGray = document.querySelector('.btn--gray');
const btnBgImg = document.querySelector('.btn--img');

btnBg.addEventListener('click', function(){
    document.body.classList.remove('bgcolor--gray','bg_img');
    document.body.classList.toggle('bgcolor--blue');
});

btnBgReset.addEventListener('click', function(){
    document.body.classList.remove('bgcolor--gray','bgcolor--blue','bg_img');
});

btnBgGray.addEventListener('click',function(){
    document.body.classList.remove('bgcolor--blue','bg_img');
    document.body.classList.add('bgcolor--gray');
});

btnBgImg.addEventListener('click',function(){
    document.body.classList.remove('bgcolor--blue','bgcolor--gray');
    document.body.classList.add('bg_img','bg_img_show');
})
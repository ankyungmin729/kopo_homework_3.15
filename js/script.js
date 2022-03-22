console.log("연결확인");

const btnBg = document.querySelector('.btn--toggle');
const btnBgReset = document.querySelector('.btn--reset');
const btnBgGray = document.querySelector('.btn--gray');
const btnBgImg = document.querySelector('.btn--img');
const BgContainer = document.querySelector('.bg_img');

btnBg.addEventListener('click', function(){
    document.body.classList.remove('bgcolor--gray','bg_img');
    BgContainer.classList.remove('bg_img_show');
    document.body.classList.toggle('bgcolor--blue');
});

btnBgReset.addEventListener('click', function(){
    document.body.classList.remove('bgcolor--gray','bgcolor--blue','bg_img');
    BgContainer.classList.remove('bg_img_show');
});

btnBgGray.addEventListener('click',function(){
    document.body.classList.remove('bgcolor--blue','bg_img');
    BgContainer.classList.remove('bg_img_show');
    document.body.classList.add('bgcolor--gray');
});

btnBgImg.addEventListener('click',function(){
    document.body.classList.remove('bgcolor--blue','bgcolor--gray');
    BgContainer.classList.add('bg_img_show');
})
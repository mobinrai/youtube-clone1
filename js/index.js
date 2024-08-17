(function(){
    var p = window.location.pathname;
    if(p=='/single-video.html'){
        document.getElementsByTagName('body')[0].classList.add('pl-100');

    }
    if(p=='/index.html'){
        document.querySelector('.btn-three-bar').addEventListener('click',()=>{
            const body = document.querySelector('.body')
            const maniLeft = document.querySelector('.sidebar');
            const hideOnSmall = document.querySelector('.hide-on-small');
            const menuListSmall = document.querySelectorAll('.menu-list-small');
            const container = document.querySelector('.container');
            const rightWrapper = document.querySelector('.right-wrapper');
            if(maniLeft.classList.contains('wd-90')){
                body.classList.remove('pl-100');
                container.classList.remove('p-0');
                rightWrapper.classList.remove('columns-5fr')
                maniLeft.classList.remove('wd-90', 'ng-margin-left', 'ng-margin-left');
                hideOnSmall.classList.remove('d-none');
                menuListSmall.forEach(item=>{
                    item.classList.remove('on-small');
                });
            }else{
                body.classList.add('pl-100');
                container.classList.add('p-0');
                rightWrapper.classList.add('columns-5fr');
                maniLeft.classList.add('wd-90', 'ng-margin-left', 'ng-margin-left');
                hideOnSmall.classList.add('d-none');
                menuListSmall.forEach(item=>{
                    item.classList.add('on-small');
                });
            }
        })
    }
})()
$(function() {
    let brTit = document.querySelectorAll('.brTit')         /* 2개짜리 큰 탭*/
    let cateName = document.querySelectorAll('.cateName')   /* 5개짜리 작은 탭 */
    let prodList = document.querySelectorAll('.prodList')   /* 숨겨져 있는 5개 요소 */

    for(let i = 0; i < cateName.length; i++) {              /* 첫번째 반복문은 클래스 추가를 위해 필요 */   
        cateName[i].addEventListener('click' , function(){  /*  cateName[i]에 클릭 이벤트와 함수 생성 */
            for (let j = 0; j < cateName.length; j++) {     /* 두번째 반복문은 클릭시 클래스 제거를 위해 필요 */
                if (j == i) {                               /* i가 0이나 1로 시작,j는0으로 시작해서 i = 0 ,j = 0 일때는 if가 작동한 후 다시 for으로 돌아서 j++ 을 실행하여 j=1이 됨  */
                    cateName[i].classList.add('caTabOn')    /* cateName[i]는  */
                    prodList[i].classList.add('prTabOn') 
                } else {                                      /* j=1 인 상태로 조건문을 다시 실행하면 i=0,j==0인 상태이니 j==i는 성립될 수 없으며 else 실행    */
                    cateName[j].classList.remove('caTabOn');    /* j=1 이기에 cateName[j] => cateName[1] 인 상태, cateName[1]의 클래스를 제거한 후 다시 for으로 돌아서 j++ 을 실행 */
                    prodList[j].classList.remove('prTabOn');    /* cateName.length의 인덱스(길이)는 4니 cateName[4] 반복한 후 for문 종료 */
                }                                             

                if (0 <= i && i <= 2) {                         /* cateName.length[0 또는 1 또는 2] 일 때*/
                    brTit[0].classList.add('titleTabOn');       /*  큰 탭[0]에 클래스 추가 */
                    brTit[1].classList.remove('titleTabOn');    /*  큰 탭[1]에 클래스 제거 */
                } else if (3 <= i && i <= 4) {                 /* cateName.length[3 또는 4] 일 때*/
                    brTit[0].classList.remove('titleTabOn');     /*  큰 탭[0]에 클래스 제거 */
                    brTit[1].classList.add('titleTabOn');        /*  큰 탭[1]에 클래스 추가 */
                }                                                 
            }
        }) 
    }

    for(let k = 0; k < brTit.length; k++) {                     /* 큰 탭의 갯수(인덱스,length) */
        brTit[k].addEventListener('click' , function(){
            for(let t = 0; t < cateName.length; t++) {
                if(k !== 0) {
                    cateName[t].classList.remove('caTabOn')
                    prodList[t].classList.remove('prTabOn') 
                    brTit[0].classList.remove('titleTabOn')
                    cateName[3].classList.add('caTabOn')
                    prodList[3].classList.add('prTabOn') 
                    brTit[1].classList.add('titleTabOn')
                } else{
                    cateName[t].classList.remove('caTabOn')
                    prodList[t].classList.remove('prTabOn') 
                    brTit[1].classList.remove('titleTabOn')
                    cateName[0].classList.add('caTabOn')
                    prodList[0].classList.add('prTabOn') 
                    brTit[0].classList.add('titleTabOn')
                } 
            }   
        })
    }
})
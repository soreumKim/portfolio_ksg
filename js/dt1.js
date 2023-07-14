$(function () {
    let $tab1 = $('#brand .brandTap .tapDepth1'),
        $tab2 = $('#brand .brandTap .tapDepth1 .category .tapDepth2'),
        i = $tab1.index(),
        o = $tab2.index(),
        $cont = $('#brand .brandCont .cont'),
        $cont1 = $('#brand .brandCont .cont1 .info'),
        $cont2 = $('#brand .brandCont .cont2 .info');

    $tab1.on('click', function() {
        $(this).siblings().removeClass('on')
        $(this).eq(i).addClass('on')
        $(this).siblings().children('.category').children().eq(0).removeClass('on')
        $(this).eq(i).children('.category').children().eq(0).addClass('on')
        $cont.eq(i).siblings().children().eq(0).removeClass('view')
        $cont.eq(i).children().eq(0).addClass('view')
    })
})
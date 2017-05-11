/* 
* @Author: Marte
* @Date:   2017-04-11 18:15:16
* @Last Modified by:   Marte
* @Last Modified time: 2017-04-28 14:31:18
*/

$(document).ready(function(){
    //第一页
    (function(){
        $('.pageOneIco2').click(function(){
            $('.pageOneMsk').fadeIn(400);
            $('.pageThreeClose').click(function(){
                $(this).parents('.pageOneMsk').fadeOut(400);
            });
            $('.get_check').click(function(){
                    if($('.phone_text').val()===""){
                        $('.shoujiInfo').fadeIn(400);
                    }else{
                        $('.shoujiInfo').fadeOut(400);
                    }
            });
            $('.mskInfo .pageThreeClose1').click(function(){
                $('.mskInfo').fadeOut(400);
            })
            $('.pageOneTiJiao').click(function(){

                if($('.phone_text').val() != "" && $('.check_text').val() != ""){
                    $('.pageOneMsk').fadeOut(400);
                    $('.pageOne').slideUp(400);
                    $('.pageTwo').slideDown(400);

                }else{
                    alert("输入内容不能为空！");
                    return false;
                }
            });
        });
    })();

    // 第二页
    (function(){
        $(".pageTwo").swipe({
            swipe:function(event, direction, distance, duration, fingerCount) {
                if(direction == "up"){
                    $(this).slideUp(400);
                    $(".pageThree").slideDown(400);
                }else if(direction == "down"){
                    $(this).slideUp(400);
                    $(".pageOne").slideDown(400);
                }
            }
        });
        $('.pageTwoGet').click(function(){
            $('.pageTwoMsk').fadeIn(400);
        });
        $('.pageTwoClose').click(function(){
            $('.pageTwoMsk').fadeOut(400);
        });     
    })();
    
    // 第三页
    (function(){
        $('.pageThreeBtn').click(function(){
            $('.pageThreeMsk').fadeIn(400);
        });
        $('.pageThreeClose').click(function(){
            $('.pageThreeMsk').fadeOut(400);
        });
        $('.pageThreeClose1').click(function(){
            $('.pageThreeMsk1').fadeOut(400);
        });
        $(".pageThree").swipe({
            swipe:function(event, direction, distance, duration, fingerCount) {
                if(direction == "up"){
                    $(this).slideUp(400);
                    $(".pageFour").slideDown(400);
                    setTimeout(function(){
                        $('.swipeUp2').fadeIn(300);
                    },3200);
                }else if(direction == "down"){
                    $(this).slideUp(400);
                    $(".pageTwo").slideDown(400);
                }
            }
        });
    })();

    // 第四页
    (function(){
        $('.pageFourBtn').click(function(){
            $('.pageFourMsk').fadeIn(400);
        });
        $('.pageFourClose').click(function(){
            $('.pageFourMsk').fadeOut(400);
        });
        //打开咪咕音乐弹窗
        $('.pageFour1Btn1').click(function(){
            $('.pageFour1Msk').fadeIn(400);
        });
        //关闭咪咕音乐弹窗
        $('.pageFourClose').click(function(){
            $(this).parents('.pageFour1Msk').fadeOut(400);
        });
        //关闭咪咕视频弹窗
        $('.pageFourClose').click(function(){
            $(this).parents('.pageFour1Msk1').fadeOut(400);
        });
        //关闭升级套餐弹窗
        $('.pageFourClose').click(function(){
            $(this).parents('.pageFour1Msk2').fadeOut(400);
        });
        //滑动效果
        $(".pageFour").swipe({
            swipe:function(event, direction, distance, duration, fingerCount) {
                if(direction == "up"){
                    $(this).slideUp(400);
                    $('.pageFive1').slideDown(400);
                }else if(direction == "down"){
                    $(this).slideUp(400);
                    $('.pageThree').slideDown(400);
                }
            }
        });
        $(".pageFour1").swipe({
            swipe:function(event, direction, distance, duration, fingerCount) {
                if(direction == "up"){
                    $(this).slideUp(400);
                    $('.pageFive1').slideDown(400);
                }else if(direction == "down"){
                    $(this).slideUp(400);
                    $('.pageThree').slideDown(400);
                }
            }
        });
    })();
    
    // 第五页
    (function(){
        //来电页面弹窗
        $('.pageFive1Btn').click(function(){
            $('.pageMask').fadeIn(400);
        });
        //关闭
        $('.x').click(function(){
            $(this).parents('.pageMask').fadeOut(400);
        });
        $('.pageFive2Btn').click(function(){
            $(this).parents('.pageWrap').siblings('.pageMask1').fadeIn(400);
        });
        $(".pageFive1").swipe({
            swipe:function(event, direction, distance, duration, fingerCount) {
                if(direction == "up"){
                    $(this).slideUp(400);
                    $('.pageSix').slideDown(400);
                }else if(direction == "down"){
                    $(this).slideUp(400);
                    $('.pageFour').slideDown(400);
                }
            }
        });
        $(".pageFive2").swipe({
            swipe:function(event, direction, distance, duration, fingerCount) {
                if(direction == "up"){
                    $(this).slideUp(400);
                    $('.pageSix').slideDown(400);
                }else if(direction == "down"){
                    $(this).slideUp(400);
                    $('.pageFour').slideDown(400);
                }
            }
        });
        $(".pageFive3").swipe({
            swipe:function(event, direction, distance, duration, fingerCount) {
                if(direction == "up"){
                    $(this).slideUp(400);
                    $('.pageSix').slideDown(400);
                }else if(direction == "down"){
                    $(this).slideUp(400);
                    $('.pageFour').slideDown(400);
                }
            }
        });
    })();

    // 第六页
    (function(){
        $(".pageSix").swipe({
            swipe:function(event, direction, distance, duration, fingerCount) {
                if(direction == "up"){
                    $(this).slideUp(400);
                    $('.pageSeven').slideDown(400);
                }else if(direction == "down"){
                    $(this).slideUp(400);
                    $('.pageFive1').slideDown(400);

                }
            }

        });
    })();

    // 第七页
    (function(){
        $(".pageSeven").swipe({
            swipe:function(event, direction, distance, duration, fingerCount) {
                if(direction == "up"){
                    $(this).slideUp(400);
                    $('.pageEight').slideDown(400);
                    move();
                }else if(direction == "down"){
                    $(this).slideUp(400);
                    $('.pageSix').slideDown(400);
                }
            }
            
        });
    })();

    //第八页
    (function(){
        $(".pageEight").swipe({
            swipe:function(event, direction, distance, duration, fingerCount) {
                if(direction == "down"){
                    $(this).slideUp(400);
                    $('.pageSeven').slideDown(400);
                }
            }
        });
        //分享
        $('.share-button').click(function(){
            $('.share').fadeIn(400);
        });
        $('.share').click(function(){
            $(this).fadeOut(400);
        });
        //我要加分
        $('.moreAdd').click(function(){
            // var randomNum = Math.floor(Math.random() * 3)+1;
            // $(this).parents('.pageWrap').siblings('.pageMask'+randomNum).fadeIn(400);
            $('.pageMask4').fadeIn(400);
        });
        //
    })();
});
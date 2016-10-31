/**
 * Created by zhongjiao on 2016/10/26.
 */
$(function(){
    var width = $(".banner-left").width();
    var timer = null;
    var index = 0;
    animate();
    function animate(){
        $(".imgs").stop()
            .animate({left:'-'+(width*(index+2))+'px'},500,function(){
            index++;
            var x = $(".imgs").position();
            if(x.left < -2950){
                $(".imgs").css('left',"-590px");
                index = 0;
            }
            $(".carouselTags li")
                .eq(index)
                .addClass('active')
                .siblings()
                .removeClass('active');
        });
    }
    timer = setInterval(animate,2000);
    $(".banner-left").hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(animate,2000);
    });
    $(".carouselTags li").click(function(){
        index = $(this).index()-1;
        animate();
    });
//    伤残老兵
    $(".oldSoldier").hover(function(){
        $(".oldSoldier-image").stop().animate({top:0},500);
    },function(){
        $(".oldSoldier-image").stop().animate({top:'172'},500);
    });
//    背景图片
    (function(){
        for(var i = 1;i <= 10;i++){
            $(".heros" + i + "-" + i)
                .css("background-image","url(images/images/" + i + ".png)")
                .hover(function(){
                    $(this).stop().fadeTo(300,1);
                },function(){
                    $(this).stop().fadeTo(300,0);
                })
        }
    })();
//    视频图片
    (function(){
        for(var i = 1;i <= 6;i++){
            $(".video" + i + "-image").css("background","url(images/" + i + ".jpg) no-repeat center center")
        }
    })();

});
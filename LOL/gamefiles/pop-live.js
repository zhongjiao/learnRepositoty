//ֱ��
var dateM = ['2016-05-04 13:30:00','2016-05-08 16:30:00','2016-05-13 13:30:00','2016-05-16 13:30:00'];

function timeTransform(times){
    var timeStr = times.replace('-',' ').replace('-',' ').split(' ');
    return new Date(timeStr[0]+'/'+timeStr[1]+'/'+timeStr[2]+' '+timeStr[3]).getTime();
}
//console.log(timeTransform('2015-05-01 13:30:00'))

for(var i= 0;i<4;i++){
    dateM[i] = timeTransform(dateM[i]);
}

var nowtime = timeTransform(json_curdate);

function ShowPop(){
    need("biz.dialog-min",function(Dialog){
        Dialog.show({
            id:'J_popLive',
            bgcolor:'#000',
            opacity:80
        });
    });
    $('#liveCon').html('<iframe src="http://qt.qq.com/zhibo/index.html?tag=764502578&ADTAG=zhibo.inner.lolweb.msi" width="850" height="480" frameborder="0" scrolling="no"></iframe>');
    //var video = new tvp.VideoInfo();
    //video.setChannelId('105414601');
    //var myplayer = new tvp.Player();
    //myplayer.create({
    //    width: 850,
    //    height: 480,
    //    video: video,
    //    type: 1,
    //    modId: "liveCon",
    //    flashWmode:"opaque",
    //    autoplay: true
    //});
    jQuery('#J_popSide').hide();
    setTimeout(function(){pgvSendClick({hottag:'lolweb.poplive.msi'})}, 5000 )
}
function ClosePop(){
    need("biz.dialog-min",function(Dialog){
        Dialog.hide();
    });
    jQuery("#liveCon").html("");
    jQuery('#J_popSide').show();
}

//��¼�û�COOKIE���״η��ʵ�������Сʱ���ٴν�������
var setCookies = function(cookieName,value){
    var exdate=new Date();
    exdate.setTime(exdate.getTime() + (30*60*1000));
    document.cookie = cookieName + "="+ value + "; expires="+exdate.toUTCString();
},
    getCookies = function(cookieName)//ȡcookies����
    {
        var arr = document.cookie.match(new RegExp("(^| )"+cookieName+"=([^;]*)(;|$)"));
        if(arr != null) return unescape(arr[2]); return null;
    };

jQuery(document).ready(function(){
    if(getCookies("isFirstLive")==null && ((nowtime > dateM[0] && nowtime < dateM[1]) || (nowtime > dateM[2] && nowtime < dateM[3]))){//�״η��ʲ�������Ч����
        setCookies('isFirstLive',"isFirstLive");
        ShowPop();
    }else{
        if((nowtime > dateM[0] && nowtime < dateM[1]) || (nowtime > dateM[2] && nowtime < dateM[3])){
            ClosePop();
        }else{
            ClosePop();jQuery('#J_popSide').hide();
        }
        //if(live_open == 0){ClosePop();jQuery('#J_popSide').hide();}else{ ClosePop();}
    }
});

//jQuery(".link-act3").hover(function(){
//    jQuery(".img-act3").show()
//},function(){
//    jQuery(".img-act3").hide()
//});
//jQuery(".link-act1").hover(function(){
//    jQuery(".img-act1").show()
//},function(){
//    jQuery(".img-act1").hide()
//});

/*  |xGv00|c3b78810bac855751d41fd01b1befd5e */
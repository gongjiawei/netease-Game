window.onload=function(){
//    轮播部分开始
    var timer=null;
    var index=0;//index在里面执行一次，就会重置一次，index就一直从0开始+
    function play(){

        index++;
        if(index==5){
            index=0;
        }
        $(".lunbo .parent").eq(index).fadeIn(500).siblings(".parent").fadeOut(500);
        $(".lunbo .dian li").eq(index).css("background","#CF0F32").siblings().css("background","#fff");
    }
    timer=setInterval(play,5000);

//    li的鼠标移入事件,css中用：在js是一个方法
    $(".lunbo .dian li").hover(function(){
        clearInterval(timer);
        index=$(this).index();
        $(".lunbo .dian li").eq(index).css("background","#CF0F32").siblings().css("background","#fff");
        $(".lunbo .parent").eq(index).fadeIn(300).siblings(".parent").fadeOut(300);
    },function(){
        timer=setInterval(play,5000);
    });
    //轮播 左右的点击按钮
    $(".lunbo .ll").hover(function(){
    //    $(".lunbo .yugao").fadeIn(300);
        $(".lunbo .ll").css("opacity","0.8");
        clearInterval(timer);
    },function(){
    //    $(".lunbo .yugao").fadeOut(300);
        timer=setInterval(play,5000);
        $(".lunbo .ll").css("opacity","1");
    });
    $(".lunbo .left-f").click(function(){
        index--;
        if(index==-1){
            index=4
        }
        $(".lunbo .dian li").eq(index).css("background","#CF0F32").siblings().css("background","#fff");
        $(".lunbo .parent").eq(index).fadeIn(300).siblings(".parent").fadeOut(300);
        //$(".lunbo .yugao").eq(index-1).fadeIn(300).siblings(".yugao").fadeOut(300);
    });
    $(".lunbo .right-f").click(function(){
        index++;
        if(index==5){
            index=0
        }
        $(".lunbo .dian li").eq(index).css("background","#CF0F32").siblings().css("background","#fff");
        $(".lunbo .parent").eq(index).fadeIn(300).siblings(".parent").fadeOut(300);
        //$(".lunbo .yugao").eq(index+1).fadeIn(300).siblings(".yugao").fadeOut(300);
    });
    //轮播下边的那个a的点击事件开始￥
    var num=0;
    $(".nb").hover(function(){
        num=$(this).index();
        $(".nb").eq(num).css("background","#727272");

    });
    $(".nb").click(function(){
        num=$(this).index();
        $(".nb").eq(num).css("background","#727272").siblings().css("background","#282B2D");
        if(num==0){
            $(".left-two .all").css("left","0px");
        }else{
            $(".left-two .all").css("left","-640px");
        }
    })
//    换一组鼠标点击事件
    var num1=0;
    $("#qie").click(function(){
        num1++;
        if(num1==3){
            num1=0;
        }
        $(".show").eq(num1).show().siblings().hide();
        $(".show").eq(num1).children(".show-box").addClass("zoomIn")
    });
    var num2=0;
    $("#qie2").click(function(){
        num2++;
        if(num2==3){
            num2=0;
        }
        $(".show2").eq(num2).show().siblings().hide();
        $(".show2").eq(num2).children(".show-box").addClass("zoomIn");
        console.log(123)
    });
//    todo 滑动门特效开始
    $(".door li").hover(function(){
        $(this).css("width","30%").siblings().css("width","10%");
        $(this).children(".hui,.text").css("display","none");
    },function(){
        $(this).children().css("display","block");
        $(this).css("width","12.5%").siblings().css("width","12.5%");
    })
//    star 移入事件
    $(".door-all").hover(function(){
        $(".door-all .star").css("left","2000px");
    },function(){
        $(".door-all .star").css("left","-450px");
    })
//    边框属性
    $(".tc a").mouseover(function() {
        $(this).children(".one").css({width: "135px", transition: "all 0.1s linear 0s"});
        $(this).children(".two").css({height: "73px", transition: "all 0.1s linear 0.1s"});
        $(this).children(".three").children(".three1").css({left: "0", transition: "all 0.1s linear 0.2s"});
        $(this).children(".four").children(".four1").css({top: "0", transition: "all 0.1s linear 0.3s"});
    });
        $(".tc a").mouseout(function(){
        $(this).children(".one").css({width:"0px",transition:"all 0.1s linear 0.3s"});
        $(this).children(".two").css({height:"0px",transition:"all 0.1s linear 0.2s"});
        $(this).children(".three").children(".three1").css({left:"100%",transition:"all 0.1s linear 0.1s"});
        $(this).children(".four").children(".four1").css({top:"100%",transition:"all 0.1s linear 0s"});
        });
};

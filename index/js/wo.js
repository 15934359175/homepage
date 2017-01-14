$(function(){





    var flag=true;
   $(".banner .jiahao").click(function(){
       if(flag==true){
           $(".jiahao span:eq(0)").css("transform","rotate(45deg)");
           $(".jiahao span:eq(1)").css("transform","rotate(45deg)");
           $(".banner .imgbox").animate({width:"75%"},1000);
           $(".banner .smallbox").animate({width:"25%",height:"100%"})
           $(".banner .smallbox").slideDown(1000,function(){
               $(".smallbox span").css("opacity","1")
           });

           flag=false;
       }else{
           $(".banner .smallbox").animate({width:"0",height:"0"},1000)
           $(".jiahao span:eq(0)").css("transform","rotate(0deg)");
           $(".jiahao span:eq(1)").css("transform","rotate(0deg)");
           $(".banner .imgbox").animate({width:"100%"},1000);
           $(".smallbox span").css("opacity","0")
           $(".banner .smallbox").slideUp(1000);
           flag=true;
       }

});


    var h=$(window).height();
    $(".banner").css({
        height:h
    });
    $(".person-items1").css({
        width:"1200px",
        background:"green",
        margin:"auto",
        height:h
    });
    $(".person-items").css({
        height:h

    });


    $(window).resize(function(){
       h=$(window).height();
        $(".banner").css({
            height:h
        });
        $(".person-items1").css({
            width:"1200px",
            background:"green",
            margin:"auto",
            height:h
        });
        $(".person-items").css({
            height:h

        });
    })












    var num=0;
   function mover(type){
       type=type||"right"
       if(type=="right"){
           num++;
           if(num==3){
               num=0;
           }
           $(".imgbox .image").css("opacity","0").eq(num).animate({opacity:1});
           $(".btns .btn-list").css("background","#ccc").eq(num).css("background","#E61736");
       }
       if(type=="left"){
           num--;
           if(num==-1){
               num=2;
           }
           $(".imgbox .image").css("opacity","0").eq(num).animate({opacity:1});
           $(".btns .btn-list").css("background","#ccc").eq(num).css("background","#E61736");
       }

   }








    var t1=setInterval(mover,3000);

    $(".btns .btn-list").mouseover(function(){
        clearInterval(t1);
        var index=$(this).index();
        $(".imgbox .image").css("opacity",0);
        $(".imgbox .image").eq(index).animate({opacity:1});
        $(".btns .btn-list").css("background","#ccc");
        $(this).css("background","#E61736");
        num=index;
    }).mouseout(function(){
        t1=setInterval(mover,3000);
    });




    $(".imgbox .imgbox-left").mouseover(function(){
        clearInterval(t1);
    }).mouseout(function(){
        t1=setInterval(mover,3000);
    });
    $(".imgbox .imgbox-right").mouseover(function(){
        clearInterval(t1);
    }).mouseout(function(){
        t1=setInterval(mover,3000);
    });
    //左右按钮点击
    $(".imgbox-left .leftbtn").click(function(){
        mover("left");
    })
    $(".imgbox-right .rightbtn").click(function(){
        mover("right");
    })
    //这样可以实时的获取它的高度
    setInterval(function(){
        var height=$(".smallbox").height();
        $(".smallbox div").css("line-height",height*0.333+"px");
    },300);











    var flag=true;
    var nums=0;
    $(window).mousewheel(function(){
        nums--;
        if(nums==-1){
         return;
        }
        $(document).scrollTop(nums*$(window).height());
        figure();
    },function(){
        nums++;
        if(nums==4){
           return;
        }
        $(document).scrollTop(nums*$(window).height());
        figure();
    });




    $(".smallbox div").click(function(){
            var index=$(this).index();
        nums=index+1;
        $(document).scrollTop(nums*h);
        figure();
    })



    //    $(".person-items .personBox li").each(function(index,obj){
    //    $(this).css({
    //        background:"url(img/34.jpg)  "+(1200-120*index)+"px 0px "
    //});
    //    });
    //    $(".person-items .personBox1 li").each(function(index,obj){
    //    $(this).css({
    //            background:"url(img/38.jpg)  "+(1200-120*index)+"px 0px "
    //        });
    //    });




        function figure(){

    if(nums==1){
            $(".person-items .personBox li").each(function(index,obj){
                $(this).css({
                    background:"url(img/21.jpg)  "+(1200-120*index)+"px 0px ",
                    animation:"one 0.5s linear forwards  "+(index*0.1)+"s"
                })
            });
        }else{
            $(".person-items .personBox li").each(function(index,obj){
                $(this).css({
                    background:"url(img/21.jpg)  "+(1200-120*index)+"px 0px ",
                    animation:"ones 0.5s linear forwards     "+(index*0.1)+"s"
                })
            })
        }








        if(nums==2){
            $(".person-items .personBox1 li").each(function(index,obj){
                $(this).css({
                    background:"url(img/22.jpg)  "+(1200-120*index)+"px 0px ",
                    animation:"two 0.5s linear forwards  "+(index*0.1)+"s"
                })
            });
        }else{
            $(".person-items .personBox1 li").each(function(index,obj){
                $(this).css({
                    background:"url(img/22.jpg) no-repeat "+(1200-120*index)+"px 0px ",
                    animation:"twos 0.5s linear forwards  "+(index*0.1)+"s"
                })
            })
        }
        }
        $(".person-items li")[9].addEventListener("webkitAnimationEnd",function(){
          if(nums==1){
            $(".personBox .pernsonAtte").css({
                animation:"moves 1s linear forwards"
            })
              $(".personBox .pernsonAttr").css({
                  opacity:1
              });
          }else{
              $(".personBox .pernsonAtte").css({animation:"moves1 1s linear forwards"
              });
              $(".personBox .pernsonAttr").css({opacity:0});
          }

            if(nums==2){
                $(".personBox1 .pernsonAtts").css({
                    animation:"moved 1s linear forwards"
                });
                $(".personBox1 .pernsonAtte").css({animation:"moves 1s linear forwards"
                });
            }else{
                $(".personBox1 .pernsonAtts").css({animation:"moved1 1s linear forwards"
                });
                $(".personBox1 .pernsonAtte").css({animation:"moves1 1s linear forwards"
                });
            }

        });



























})
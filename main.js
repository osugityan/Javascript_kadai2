var is_calc = false;


//ACを押した時
$(".all_clear").click(function(){
    $(".input_screen").val("0");
    is_calc = false;
    console.log($(".input_screen").val());
});

//数字ボタンが押された時
$(".btn").click(function(){
    var screen_value = $(".input_screen").val();
    var btn_value = $(this).val();
    if(is_calc){
        $(".input_screen").val("0");
        is_calc = false;
        console.log($(".input_screen").val());
    }
    
    else if(screen_value == "0" && btn_value == "0"){
        $(".input_screen").val("0");
    }else if(screen_value == "0" && btn_value == "00"){
        $(".input_screnn").val("0");
    }else if(screen_value == "0" && btn_value == "."){
        $(".input_screen").val("0."); 
    }else if(is_point_last() && btn_value == "."){
        $(".input_screen").val(screen_value.slice(0,-1) + btn_value);
    }else if(screen_value == "0"){
        $(".input_screen").val(btn_value);
    }else{
        $(".input_screen").val(screen_value + btn_value);
    }
});

//演算子が押されたら
$(".oparation").click(function(){
    var screen_value = $(".input_screen").val();
    var btn_value = $(this).val();
    
    if(is_calc) is_calc = false;
    
    if(is_ope_last()){
        $(".input_screen").val(screen_value.slice(0,-1) + btn_value);
    }else {
        $(".input_screen").val(screen_value + btn_value);
    }
});

//=が押された時
$(".equal").click(function(){
    if(is_ope_last()){
        $(".input_screen").val(eval($(".input_screen").val().slice(0,-1)));
    }
    else{
        $(".input_screen").val(eval($(".input_screen").val()));
    }
    is_calc = true;
    
    console.log(is_calc);
    
});

function is_ope_last(){
    return["+","-","*","/"].includes($(".input_screen").val().slice(-1));
}

function is_point_last(){
    return["."].includes($(".input_screen").val().slice(-1));
}
   
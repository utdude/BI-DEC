$(document).ready(function(){

    function btod(val){
        var x="";
        var i,k;
        for(i=10; i>=0; i--){
            k = val >> i;
            if(k & 1){
                x=x+="1";
            }else{
                x=x+="0";
            }
        }
        return x;
    }

    function dtob(v){
        //alert(parseInt(v, 2).toString(10));
        return parseInt(v, 2).toString(10);
        
    }


    $(".dtob,.btod").hide();
    $("#dtob_toggle").click(function(){
        if($(".dtob").toggle()){
            $(".btod").hide();
        }
        
    });
    $("#btod_toggle").click(function(){
        if($(".btod").toggle()){
            $(".dtob").hide();
        }
        
    });


    $("#btod_convert").click(function(){
       
        var val = $("#btod_val").val();
        var res = btod(val);
        $("#btod_res").css("display","block");
        $("#btod_res").html("The Binary for "+val+" is : "+res);
        
    });

    $("#dtob_convert").click(function(){
        
        var val = parseInt(document.getElementById("dtob_val").value);
        let res = dtob(val);
        $("#dtob_res").css("display","block");
        $("#dtob_res").html("The Decimal for "+val+" is : "+res);
    });
    
});
$(document).ready(function()
{
    function btod(v)
    {
        return parseInt(v, 2).toString(10);
    }

    function dtob(v)
    {
        var x="";
        var i,k;
        for(i=10; i>=0; i--)
        {
            k = v >> i;
            if(k & 1)
                x=x+="1";
            else
                x=x+="0";
        }
        return x;
        //alert(parseInt(v, 2).toString(10));    
    }
    function dtohd(v)
    {
        return v.toString(16).toUpperCase();
    }
    function hdtod(v)
    {
        hexstring=v.toString(16);
        return parseInt(hexstring,16);
    }


    $(".dtob,.btod,.dtohd,.hdtod").hide();

    $("#dtob_toggle").click(function(){
        if($(".dtob").toggle()){
            $(".btod").hide();
            $(".dtohd").hide();
        }
        
    });
    
    $("#btod_toggle").click(function(){
        if($(".btod").toggle()){
            $(".dtob").hide();
            // $(".dtob").reset();
            $(".dtohd").hide();
            // $(".dtohd").reset();
        }
        
    });

    $("#dtohd_toggle").click(function()
    {
        if($(".dtohd").toggle())
            {
                $(".dtob").hide();
                $(".btod").hide();
                $(".hdtod").hide();
            }
    });

    $("#hdtod_toggle").click(function()
    {
        if($(".hdtod").toggle())
            {
                $(".dtob").hide();
                $(".btod").hide();
                $(".dtohd").hide();
            }
    });


    $("#btod_convert").click(function(){       
        var val = $("#btod_val").val();
        var res = btod(val);
        $("#btod_res").css("display","block");
        $("#btod_res").html("The Decimal for "+val+" is : "+res);
        
    });

    $("#dtob_convert").click(function(){
        
        var val = parseInt(document.getElementById("dtob_val").value);
        let res = dtob(val);
        $("#dtob_res").css("display","block");
        $("#dtob_res").html("The Binary for "+val+" is : "+res);
    });

    $("#dtohd_convert").click(function()
    {        
        var val = parseInt(document.getElementById("dtohd_val").value);
        let res = dtohd(val);
        $("#dtohd_res").css("display","block");
        $("#dtohd_res").html("The HexaDecimal for "+val+" is : "+res);
    });
    
    $("#hdtod_convert").click(function()
    {        
        var val = parseInt(document.getElementById("hdtod_val").value);
        let res = hdtod(val);
        $("#hdtod_res").css("display","block");
        $("#hdtod_res").html("The Decimal for "+val+" is : "+res);
    });
});
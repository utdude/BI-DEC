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
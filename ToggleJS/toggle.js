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
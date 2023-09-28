$("#dtob_toggle").click(function(){
    if($(".dtob").toggle())
    {
        $(".btod").hide();
        $(".dtohd").hide();
        $(".hdtod").hide();
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
$("#CharToAscii_toggle").click(function()
{
    if($(".CharToAscii").toggle())
            $(".AsciiToChar").hide();
});

$("#AsciiToChar_toggle").click(function()
{
    if($(".AsciiToChar").toggle())
            $(".CharToAscii").hide();
});

$("#nmbr_system").click(function()
{
    if($(".number_system").toggle())
            $(".Ascii").hide();
});

$("#ascii").click(function()
{
    if($(".Ascii").toggle())
            $(".number_system").hide();
});
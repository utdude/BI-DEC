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
//Decimal to hexadecimal
function dtohd(v)
{
    return v.toString(16).toUpperCase();
}

//binary to decimal
function btod(v)
{
    return parseInt(v, 2).toString(10);
}

// decimal to binary
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
}

// hexa decimal to decimal
function hdtod(v)
{
    hexstring=v.toString(16);
    return parseInt(hexstring,16);
}

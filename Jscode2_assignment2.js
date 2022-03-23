function answer(){               // function for the answer//
    var n1=parseInt(document.getElementById('n1').value); //taking the first input from user using var type//
    var n2=parseInt(document.getElementById('n2').value); // taking the second in put from user using var type//
    let opr=document.getElementById('operators').value;   //selecting the operator and storing the value in opr//
    function sum(a1, a2)    //function for the addition operation//
        {
            this.n1=a1;
            this.n2=a2;
            return a1+a2;
        }
        function sub(b1, b2)  //function for the substraction operation//
        {
            this.n1=b1;
            this.n2=b2;
            return b1-b2;
        }
        function mul(c1, c2) //function for the multiplication operation//
        {
            this.n1=c1;
            this.n2=c2;
            return c1*c2;
        }
        function div(d1, d2)  //function for the divide operation//
        {
            this.n1=d1;
            this.n2=d2;
            return d1/d2;
        }
    if(opr === '+')          //checking the operation if '+' or not//
    {   if(Number.isInteger(n1) && Number.isInteger(n2)) //if block for '+' operation starts here//
        {
        let res=sum(n1,n2);
        document.getElementById('result').value=res;
        }
        else{
            alert(`Error: Entered value should be integer.your entered value is ${n1},${n2}`); //Used template literal//
        }    //if block for '+' operation ends here 
    }
    if(opr === '-')              //checking the operation if '-' or not//
    {   if(Number.isInteger(n1) && Number.isInteger(n2)) //if block for '-' operation starts here//
        {
        let res=sub(n1,n2);
        document.getElementById('result').value=res;
        }
        else{
            alert(`Error: Entered value should be integer.your entered value is ${n1},${n2}`); //Used template literal//
        } //if block for '-' operation ends here//
    }
    if(opr === '*')           //checking the operation if '*' or not//
    {   if(Number.isInteger(n1) && Number.isInteger(n2)) //if block for '*' operation starts here//
        {
        let res=mul(n1,n2);
        document.getElementById('result').value=res;
        }
        else{
            alert(`Error: Entered value should be integer.your entered value is ${n1},${n2}`); //Used template literal//
        }        //if block for '*' operation ends here//
    }
    if(opr === '/' )          //checking the operation if '/' or not//
    {   if(n2 !==0 && Number.isInteger(n1) && Number.isInteger(n2)) //if block for '/' operation starts here//
        {
        let res=div(n1,n2);
        document.getElementById('result').value=res;
        }
        else{
            alert(`Error:cannot divide by 0 or Entered value should be integer.your entered value is ${n1},${n2}`); //Used template literal//
           } //if block for '/' operation ends here//
    }
}

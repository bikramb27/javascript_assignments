function answer(){               // function for the answer//
    var number1=parseInt(document.getElementById('number1').value); //taking the first input from user using var type//
    var number2=parseInt(document.getElementById('number2').value); // taking the second in put from user using var type//
    let opr=document.getElementById('operators').value;   //selecting the operator and storing the value in opr//
    function sum(a1, a2)    //function for the addition operation//
        {
            this.number1=a1;
            this.number2=a2;
            return a1+a2;
        }
        function sub(b1, b2)  //function for the substraction operation//
        {
            this.number1=b1;
            this.number2=b2;
            return b1-b2;
        }
        function mul(c1, c2) //function for the multiplication operation//
        {
            this.number1=c1;
            this.number2=c2;
            return c1*c2;
        }
        function div(d1, d2)  //function for the divide operation//
        {
            this.number1=d1;
            this.number2=d2;
            return d1/d2;
        }
    if(opr === '+')          //checking the operation if '+' or not//
    {   if(Number.isInteger(number1) && Number.isInteger(number2)) //if block for '+' operation starts here//
        {
        let res=sum(number1,number2);
        document.getElementById('result').value=res;
        }
        else{
            alert(`Error: Entered value should be integer.your entered value is ${number1},${number2}`); //Used template literal//
        }    //if block for '+' operation ends here 
    }
    if(opr === '-')              //checking the operation if '-' or not//
    {   if(Number.isInteger(number1) && Number.isInteger(number2)) //if block for '-' operation starts here//
        {
        let res=sub(number1,number2);
        document.getElementById('result').value=res;
        }
        else{
            alert(`Error: Entered value should be integer.your entered value is ${number1},${number2}`); //Used template literal//
        } //if block for '-' operation ends here//
    }
    if(opr === '*')           //checking the operation if '*' or not//
    {   if(Number.isInteger(number1) && Number.isInteger(number2)) //if block for '*' operation starts here//
        {
        let res=mul(number1,number2);
        document.getElementById('result').value=res;
        }
        else{
            alert(`Error: Entered value should be integer.your entered value is ${number1},${number2}`); //Used template literal//
        }        //if block for '*' operation ends here//
    }
    if(opr === '/' )          //checking the operation if '/' or not//
    {   if(number2 !==0 && Number.isInteger(number1) && Number.isInteger(number2)) //if block for '/' operation starts here//
        {
        let res=div(number1,number2);
        document.getElementById('result').value=res;
        }
        else{
            alert(`Error:cannot divide by 0 or Entered value should be integer.your entered value is ${number1},${number2}`); //Used template literal//
           } //if block for '/' operation ends here//
    }
}

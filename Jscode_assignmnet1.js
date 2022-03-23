function answer(){               // function for the answer//
    let n1=parseInt(document.getElementById('n1').value); //taking the first input from user//
    let n2=parseInt(document.getElementById('n2').value); // taking the second in put from user//
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
    if(opr === '+')          //checking the operation if + or not//
    {
        let res=sum(n1,n2);
        document.getElementById('result').value=res;
    }
    if(opr === '-')              //checking the operation if - or not//
    {
        let res=sub(n1,n2);
        document.getElementById('result').value=res;
    }
    if(opr === '*')           //checking the operation if * or not//
    {
        let res=mul(n1,n2);
        document.getElementById('result').value=res;
    }
    if(opr === '/')          //checking the operation if / or not//
    {
        if(n2 == 0){
           alert("Cannot divide by 0"); //error handling alert //
        }
    let res=div(n1,n2);
    document.getElementById('result').value=res;
    }
}
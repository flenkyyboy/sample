const { PreconditionRequired } = require("http-errors")

function add(num1,num2,callback)
{
    let err=false
    if(num1===0)
    {
        err=true
    }
callback(num1+num2,err)
}


function mul(num1,num2,callback)
    {
callback(num1*num2)
    }

function divi(num1,num2,callback)
{
callback(num1/num2)
}

add(10,12,(sum,err)=>{
   if(err)
   {
       console.log('First number is 0')
   }
   else
   {
mul(sum,1,(product)=>{
    divi(product,2,(result)=>{
        console.log(result)
    })
})
   }
})

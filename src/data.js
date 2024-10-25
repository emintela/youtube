
// function to convert data in the millions and thousands
const converter = (value)=>{
    if(value >= 1000000){
        return Math.floor(value/1000000)+"M"
    }
    else if (value > 1000)
    {
        return Math.floor(value/1000)+"k"
    }
    else{
        return value
    }
}

export default converter
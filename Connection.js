const  mongoose= require('mongoose');

const connect=mongoose.connect('mongodb+srv://shippingdata:4MK20EC404@cluster0.yjg5ptc.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
},
(error)=>{
    if (!error){
        console.log("connected to mongodb");
    }
    else{
        console.log(error);
    }
}

);
module.exports=connect
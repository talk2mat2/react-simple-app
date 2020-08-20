const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const router = express.Router()


process.env.NODE_ENV !== "production" ? require("dotenv").config() : null;


const stripe = require('stripe')(process.env.SECRET_KEYS);

const PORT = process.env.PORT || 8080;

app.use(express.json({ extended: false }));
app.use(express.static(path.join(__dirname, "client/build")));

// app.set('view'.__dirname+'/views')
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.get("*", (req, res) => {
  res.send(path.join(__dirname, "clent/build", "index.html"));
});


const paymentRouter=router.post('/paynow',async (req,res)=>{
    const {currency,amount,source,description} = req.body;
  
    try{
        const charge = await stripe.charges.create({
            amount,
            currency,
            source,
            description,
          });
          res.status(200).send({message:'payment processing successful'})
    }
    catch(err){res.status(500).send({message:'error in payment processing'})}
      
})
app.use(paymentRouter)



app.listen(PORT, (err, succsss) => {
  if (err) console.log(err);

  console.log(`server running on port ${PORT}`);
});

// app.listen(port,()=>(console.log('server runinng on port 8080')));

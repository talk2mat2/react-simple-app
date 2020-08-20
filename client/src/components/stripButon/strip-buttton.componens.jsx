import React ,{useContext} from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import {Datacontext} from '../Dataprovider'


const StripeCheckoutButton = ({ price }) => {
    const[state,setState]=useContext(Datacontext)
  const priceforstrip = price * 100;
  const publishablekey =
    "pk_test_51HHYK3BVXjWXCuapROBOuAJK0hPg3ea8uUmx4sMwPHnZKLul3IRsrjrBE1Z3DoGEmYkO7Xbei1FZ0hRntUZkMFTx00rfvkfaGB";
   
  const onToken = (token) => {
    axios({
      method: "post",
      url: "paynow",
      data: {
        publishablekey,
        amount: priceforstrip,
        currency: "usd",
        source: token.id,
        description: "test charge on card payments",
      },
    })
      .then((response) => {console.log(response)
    setState({...state,paymentStatus:response.data.message})})
      .catch((err) => {console.log(err)
      setState({...state,paymentStatus:"payments unsuccessful"})});
    // console.log(token);
    alert("payment Successful");
  };
  return (
    <StripeCheckout
      label="pay Now"
      name="CRWN Clothing ltd"
      billingAddress
      shippingAdress
      image="https://www.nairaland.com/attachments/12157912_img20200524082321_jpege3b3ce7ff7c6e27620302ea1dc5b3749"
      description={`your total is $${price}`}
      amount={priceforstrip}
      panelLabel="pay Now"
      token={onToken}
      stripeKey={publishablekey}
    />
  );
};

export default StripeCheckoutButton;

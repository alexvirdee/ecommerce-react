import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Ff8BuBxq7ixwQMXtQ6cJx39Q8wnw4Ze5aJJzfci4n7xQo6AOgZKpc9EwirRs6F9Qpor6ydJ5sz5Tyn3UX6hnX1i00Mqw5kNtC';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }


    return (
        <StripeCheckout 
          label='Pay Now'
          name='CRWN Clothing Ltd.'
          billingAddress
          shippingAddress
          image='https://svgshare.com/i/CUz.svg'
          description={`Your total is $${price}`}
          amount={priceForStripe}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
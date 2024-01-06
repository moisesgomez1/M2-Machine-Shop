/* The word "thunk" is a programming term that means "a piece of code that does some delayed work".
Rather than execute some logic now, we can write a function body or code that can be used to perform the work later. */

/* If you are using middleware such as Redux Thunk for handling asynchronous actions, and it
 is set up to automatically dispatch actions, it might be dispatching the getCart() action when the component is mounted. */
import * as actions from '../actions/actions.js';

export function getCart () {
  return function getCartThunk (dispatch, getState) {
    fetch('http://localhost:3000/api/cart')
      .then(response => response.json())
      .then(data => {
        console.log('Data recieved from fetching the cart', data);
        dispatch(actions.getCartActionCreator(data[0].items));
      })
      .catch(err => console.log(err));
  };
};

// thunk function to add item to cart that will update the store and send a POST request with the product id and cart id
export function addItemToCart (itemId) {
  return function addItemThunk (dispatch, getState) {
    const requestData = {
      product: itemId,
      cartId: "6598a6802758b071bb956e49"
    };
    fetch('http://localhost:3000/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    })
      .then(response => response.json())
      .then(data => {
        const cartId = '6598a6802758b071bb956e49';
        dispatch(actions.addItemToCartSuccessActionCreator(cartId));
        dispatch(actions.addItemtoCartActionCreator());

        console.log('Cart Id recieved from creating a cart', cartId);
      })
      .catch(err => console.log(err));
  };
}

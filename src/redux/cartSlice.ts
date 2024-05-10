import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  // Define your cart item properties here
  id: number;
  name: string;
  imageSrc: string;
  price: number;
  size: string;
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
  cartCount: number;
}

// Get stored cart items from local storage
const persistedCartItems = localStorage.getItem("cartItems");
const initialCartItems: CartItem[] = persistedCartItems
  ? JSON.parse(persistedCartItems)
  : [];
const initialCartCount: number = initialCartItems.reduce(
  (count, item) => count + item.quantity,
  0
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: initialCartItems,
    cartCount: initialCartCount,
  } as CartState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const { id } = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === id && item.size === newItem.size
      );
      console.log(state, "aaa", action);
      if (existingItemIndex !== -1) {
        // If item with the same ID exists, increment its quantity
        state.cartItems[existingItemIndex].quantity++;
      } else {
        // If item with the same ID doesn't exist, add it to the cart
        state.cartItems.push(newItem);
      }

      // Update localStorage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

      // Update cart count
      state.cartCount = state.cartItems.reduce(
        (count, item) => count + item.quantity,
        0
      );
    },

    updateCart: (state, action: PayloadAction<CartItem[]>) => {
      const updatedCartItems = action.payload;
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      const updatedCartCount = updatedCartItems.reduce(
        (count, item) => count + item.quantity,
        0
      );
      return {
        ...state,
        cartItems: updatedCartItems,
        cartCount: updatedCartCount,
      };
    },

    removeFromCart: (state, action: PayloadAction<CartItem>) => {
      const itemToRemove = action.payload;
      const updatedCartItems = state.cartItems.filter(
        (item) => item.id !== itemToRemove.id || item.size !== itemToRemove.size
      );
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      const updatedCartCount = updatedCartItems.reduce(
        (count, item) => count + item.quantity,
        0
      );
      return {
        ...state,
        cartItems: updatedCartItems,
        cartCount: updatedCartCount,
      };
    },

    decreaseCartItemQuantity: (
      state,
      action: PayloadAction<{ id: number }>
    ) => {
      const { id } = action.payload;
      const updatedCartItems = state.cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      const updatedCartCount = updatedCartItems.reduce(
        (count, item) => count + item.quantity,
        0
      );
      return {
        ...state,
        cartItems: updatedCartItems,
        cartCount: updatedCartCount,
      };

      // const { id } = action.payload;
      // const existingCartItem = state.cartItems.find((item) => item.id === id);

      // if (existingCartItem && existingCartItem.quantity > 1) {
      //   existingCartItem.quantity -= 1;
      //   localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      //   state.cartCount = state.cartItems.reduce(
      //     (count, item) => count + item.quantity,
      //     0
      //   );
      // }
    },
  },
});

export const {
  addToCart,
  updateCart,
  removeFromCart,
  decreaseCartItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;

"use client";

import { createContext, useReducer } from "react";
import data from "../data/product.json";

const initialState = {
  products: [],
};

const actions = {
  INIT_ITEM: "INIT_ITEM",
  ADD_SELECTED_ITEM: "ADD_SELECTED_ITEM",
  REMOVE_SELECTED_ITEM: "REMOVE_SELECTED_ITEM",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.INIT_ITEM:
      return {
        ...state,
        products: data.map((ele) => {
          return { ...ele, isSelected: false };
        }),
      };

    case actions.ADD_SELECTED_ITEM:
      return {
        ...state,
        products: data.map((ele) => {
          return ele.sku === action.sku ? { ...ele, isSelected: true } : ele;
        }),
      };
    case actions.REMOVE_SELECTED_ITEM:
      return {
        ...state,
        products: data.map((ele) => {
          return ele.sku === action.sku ? { ...ele, isSelected: false } : ele;
        }),
      };
    default:
      return state;
  }
};

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {
    products: state.products,
    initProducts: () => {
      dispatch({ type: actions.INIT_ITEM });
    },
    addSelected: (sku) => {
      dispatch({ type: actions.ADD_SELECTED_ITEM, sku });
    },
    removeSelected: (sku) => {
      dispatch({ type: actions.REMOVE_SELECTED_ITEM, sku });
    },
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

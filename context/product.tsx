"use client";

import { createContext, useContext, useReducer } from "react";
import data from "../data/product.json";
import { IProduct } from "@/types/product";

export interface IProductContext {
  products: IProduct[];
  initProducts: () => void;
  addSelected: (sku: string) => void;
  removeSelected: (sku: string) => void;
  resetSelected: () => void;
}

export interface IAction {
  type: string;
  sku?: string;
}

const initialState = {
  products: [],
  initProducts: () => {},
  addSelected: (sku: string) => {},
  removeSelected: (sku: string) => {},
  resetSelected: () => {},
};

const actions = {
  INIT_ITEM: "INIT_ITEM",
  ADD_SELECTED_ITEM: "ADD_SELECTED_ITEM",
  REMOVE_SELECTED_ITEM: "REMOVE_SELECTED_ITEM",
  RESET_SELECTED_ITEM: "RESET_SELECTED_ITEM",
};

const reducer = (state: IProductContext, action: IAction) => {
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
        products: state.products.map((ele) => {
          return ele.sku === action.sku ? { ...ele, isSelected: true } : ele;
        }),
      };
    case actions.REMOVE_SELECTED_ITEM:
      return {
        ...state,
        products: state.products.map((ele) => {
          return ele.sku === action.sku ? { ...ele, isSelected: false } : ele;
        }),
      };
    case actions.RESET_SELECTED_ITEM:
      return {
        ...state,
        products: state.products.map((ele) => {
          return { ...ele, isSelected: false };
        }),
      };
    default:
      return state;
  }
};

export const ProductContext = createContext<IProductContext>(initialState);

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {
    products: state.products,
    initProducts: () => {
      dispatch({ type: actions.INIT_ITEM });
    },
    addSelected: (sku: string) => {
      dispatch({ type: actions.ADD_SELECTED_ITEM, sku });
    },
    removeSelected: (sku: string) => {
      dispatch({ type: actions.REMOVE_SELECTED_ITEM, sku });
    },
    resetSelected: () => {
      dispatch({ type: actions.RESET_SELECTED_ITEM });
    },
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

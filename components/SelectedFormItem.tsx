import { IProductCategory } from "@/types/productCategory";
import Image from "next/image";
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";
import React from "react";
import { IProduct } from "@/types/product";
import { ISampleForm } from "@/app/catalogue/sample-form/page";

interface ISelectedFormItemProps {
  category: IProductCategory;
  products: IProduct[];
  index: number;
  register: UseFormRegister<ISampleForm>;
  options;
  required?: boolean;
  removeCategory: (sku: string) => void;
  errors?: FieldErrors<ISampleForm>;
}

const SelectedFormItem: React.FC<ISelectedFormItemProps> = ({
  category,
  index,
  register,
  options,
  required,
  products,
  errors,
  removeCategory,
}) => {
  const applications = ["ceiling", "wall", "floor"];
  return (
    <div className="border-b border-b-[#979797] flex w-full">
      <div className="relative flex flex-col w-full gap-2 pb-8 mt-5 pr-14">
        <div>
          <h4 className="text-base font-normal uppercase text-[#999]">
            you are requesting for
          </h4>
          <h2 className="text-base font-normal">{`(${index}) ${category.name}`}</h2>
        </div>
        <div>
          <h3 className="uppercase text-base font-normal text-[#979797]">
            Area of Application (Optional)
          </h3>
          <div>
            {applications.map((app, idx) => {
              return (
                <div key={idx} className="relative flex items-center gap-3">
                  <label className="flex gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      value={app}
                      // name=""
                      {...register(`products.applications`, {
                        required,
                        ...options,
                      })}
                      className="bg-[#eee] text-[20px] font-medium p-2 rounded"
                    />
                    <span className="text-base font-medium capitalize">
                      {app}
                    </span>
                  </label>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dimension */}
        <div>
          <h3 className="uppercase text-base font-normal text-[#979797]">
            Dimension
          </h3>
          {/* {errors && (
            <p className="text-red-500">Dimension is required</p>
          )} */}
          <div>
            {products.map((product, idx) => {
              return (
                product.productId === category.productId && (
                  <div key={idx} className="relative flex items-center gap-3">
                    <label className="cursor-pointer flex gap-2">
                      <input
                        type="checkbox"
                        value={product.sku}
                        // name=""
                        {...register(`products.${category.index}.products`, {
                          required: true,
                        })}
                        className="bg-[#eee] text-[20px] font-medium p-2 rounded"
                      />
                      <span className="text-base font-medium capitalize">
                        {product.dimension}
                      </span>
                    </label>
                  </div>
                )
              );
            })}
          </div>
        </div>

        <div className="absolute top-0 right-0">
          <button
            onClick={() => {
              removeCategory(category.productId);
            }}
            className="w-[20px] h-[20px]"
          >
            <Image
              src="/icons/cancel.svg"
              alt="cancel icon"
              width="28"
              height="28"
              className="w-full h-full"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectedFormItem;

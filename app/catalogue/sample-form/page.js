"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { useContext } from "react";

import SelectedFormItem from "@/components/SelectedFormItem";
import { ProductContext } from "@/context/product";

const Input = ({
  label,
  name,
  type = "text",
  register,
  options,
  required,
  errors,
  placeholder,
  labelColor = "#000",
}) => (
  <div className="flex flex-col gap-2">
    <label className={`text-[20px] font-medium text-[${labelColor}]`}>
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      {...register(name, { required, ...options })}
      className="bg-[#eee] text-[20px] font-medium p-2"
    />
    {errors[name] && <p role="alert">{errors[name].message}</p>}
  </div>
);

export default function SampleFormPage() {
  const { products, removeSelected } = useContext(ProductContext);
  let number = 0;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const res = await fetch("/api/sample-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(res.json());
    console.log(data);
  };

  return (
    <main>
      <section className="container mx-auto px-[15px] mt-[50px]">
        <h2 className="text-[40px] text-center font-semibold font-inter">
          Sample Form
        </h2>
      </section>

      <section className="mt-[50px] container mx-auto px-[15px]">
        <div className="flex items-center justify-center gap-6 py-7 border-y border-y-[#D9D9D9]">
          <div>
            <Image
              src="/icons/Bizsafe.svg"
              alt="biz safe"
              width="65"
              height="65"
            />
          </div>
          <div>
            <Image
              src="/icons/Delivery.svg"
              alt="free delivery"
              width="65"
              height="65"
            />
          </div>
          <div>
            <Image
              src="/icons/Self Collection.svg"
              alt="self collection"
              width="65"
              height="65"
            />
          </div>
        </div>
      </section>

      {/* sample form */}
      <section className="mt-[50px] container mx-auto px-[15px]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center gap-6"
        >
          <div className="w-full">
            {products.map((product, index) => {
              return (
                product.isSelected && (
                  <SelectedFormItem
                    key={index}
                    product={product}
                    index={(number += 1)}
                    register={register}
                    errors={errors}
                    removeSelected={removeSelected}
                  />
                )
              );
            })}
          </div>
          <div className="flex flex-col w-full gap-[25px]">
            <Input
              label="Name:"
              name="name"
              register={register}
              // options={{ required: "Name is required." }}
              required="Name is required."
              errors={errors}
            />
            <Input
              label="Company:"
              name="company"
              register={register}
              required="Company is required."
              // options={{ required: "Name is required." }}
              errors={errors}
            />
            <Input
              label="Email Address:"
              name="email"
              type="email"
              register={register}
              // options={{ required: "Name is required." }}
              errors={errors}
              placeholder="Optional"
            />
            <Input
              label="Phone:"
              name="phone"
              register={register}
              // options={{ required: "Name is required." }}
              required="Phone is required."
              errors={errors}
              placeholder="(+65)"
            />
            <Input
              label="Remarks:"
              name="remarks"
              register={register}
              // options={{ required: "Name is required." }}
              errors={errors}
              placeholder="Optional"
            />
            <div className="flex flex-col">
              <label className="text-[20px] font-medium mb-[8px]">
                Mailing Address:
              </label>
              <select
                {...register("mailing", {
                  required: "Mailing address is required.",
                  pattern: {
                    value: /^Singapore$|^Malaysia$/,
                    message: "Invalid mailing address",
                  },
                })}
                className="bg-[#eee] text-[20px] font-medium p-2"
              >
                <option value="" disabled>
                  Singapore / Malaysia
                </option>
                <option value="Singapore">Singapore</option>
                <option value="Malaysia">Malaysia</option>
              </select>
              {errors.mailing && <p role="alert">{errors.mailing.message}</p>}

              <select
                {...register("delivery", {
                  required: "Delivery or Pick up?",
                  pattern: {
                    value: /^delivery$|^pickup$/,
                    message: "Delivery or Pick up?",
                  },
                })}
                defaultValue=""
                className="text-[20px] font-medium p-2 bg-[#fff] w-3/4"
              >
                <option value="" disabled>
                  Delivery / Pick up
                </option>
                <option value="delivery">Delivery</option>
                <option value="pickup">Pick up</option>
              </select>
              {errors.delivery && <p role="alert">{errors.delivery.message}</p>}
            </div>

            <Input
              label="Address line 1"
              name="address1"
              labelColor="#767676"
              register={register}
              required="Address is required."
              errors={errors}
              placeholder="Example: 54 Senoko Rd"
            />

            <Input
              label="Address line 2 (Optional)"
              name="address2"
              labelColor="#767676"
              register={register}
              // options={{ required: "Name is required." }}
              errors={errors}
              placeholder="Example: Floor 1"
            />

            <Input
              label="City"
              name="city"
              labelColor="#767676"
              register={register}
              required="City is required."
              errors={errors}
              placeholder="Example: Singapore"
            />

            <Input
              label="Zip / Postcode"
              name="postcode"
              labelColor="#767676"
              register={register}
              required="Zip or Postcode is required."
              errors={errors}
              placeholder="Example: 758118"
            />
          </div>

          <div className="lg:hidden">
            <p className="text-[#979797]">To proceed, please place request.</p>
          </div>

          <div className="flex flex-col md:flex-row-reverse md:gap-10 md:justify-center md:items-center lg:flex-col gap-4 fixed lg:static bottom-0 bg-[#fff] z-10 w-full items-center py-[20px] shadow-[0px_-4px_5px_rgba(0,0,0,0.25)] lg:shadow-none">
            <input
              type="submit"
              value={`Place request (${
                products.filter((product) => product.isSelected).length
              })`}
              className="cursor-pointer rounded-[40px] px-[32px] py-[24px] bg-[#488791] text-[#fff] uppercase text-[13px] font-semibold tracking-[2px] shadow-[0px_15px_20px_rgba(0,0,0,0.2)]"
            />
            <div className="flex flex-col items-center justify-center gap-2">
              <p className="text-[10px] leading-[12px]">or contact us at</p>
              <div className="flex gap-10">
                <div className="w-[45px] h-[45px]">
                  <Image
                    src="/icons/whatsapp.svg"
                    alt="whatsapp icon"
                    width="52"
                    height="52"
                    className="w-full h-full"
                  />
                </div>
                <div className="w-[45px] h-[45px]">
                  <Image
                    src="/icons/phone.svg"
                    alt="phone icon"
                    width="52"
                    height="52"
                    className="w-full h-full"
                  />
                </div>
              </div>
              <p className="text-[10px] leading-[12px]">
                to better understand your needs
              </p>
            </div>
          </div>
        </form>
      </section>

      {/* color bar */}
      <section className="mt-[50px]">
        <span className="block h-[70px] w-full bg-primary"></span>
      </section>
    </main>
  );
}

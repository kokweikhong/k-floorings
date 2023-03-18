"use client";

import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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

const NotProductIsSelected = () => {
  return (
    <section className="container mx-auto px-[15px] mt-[50px]">
      <div className="flex flex-col items-center justify-center text-[20px] h-screen">
        <p className="font-medium">
          You have not selected any product sample to submit
        </p>
        <p className="font-medium">
          Please visit{" "}
          <Link
            href="/product"
            className="font-bold underline uppercase text-primary"
          >
            our product page
          </Link>{" "}
          to select your desired samples.
        </p>
      </div>
    </section>
  );
};

const SendingEmail = () => {
  return (
    <section className="container mx-auto px-[15px] mt-[50px]">
      <div className="flex items-center justify-center h-screen gap-4">
        <div>
          <svg
            aria-hidden="true"
            className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-primary"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
        <p className="text-xl font-medium">
          Sending request form, please stay for a while...
        </p>
      </div>
    </section>
  );
};

const EmailHasSubmitted = () => {
  useEffect(() => {
    setTimeout(() => {}, 2000);
  }, []);
  return (
    <section className="container mx-auto px-[15px] mt-[50px]">
      <div className="flex flex-col items-center justify-center text-[20px] h-screen">
        <p className="font-medium">Your request has been submitted.</p>
        <p className="font-medium">You will receive a confirmation email:</p>
        <p className="text-[#D9D9D9] uppercase">hello@calvarycarpentry.com</p>
      </div>
    </section>
  );
};

const FailedToSubmitRequestEmail = () => {
  return (
    <section className="container mx-auto px-[15px] mt-[50px]">
      <div className="flex flex-col items-center justify-center text-[20px] h-screen font-medium">
        <p>Oh no, your request has not been submitted.</p>
        <p>Please check your connection or change browser.</p>
      </div>
    </section>
  );
};

export default function SampleFormPage() {
  const { products, removeSelected, resetSelected } =
    useContext(ProductContext);
  const [sumSelected, setSumSelected] = useState(0);
  const [isFailToSubmit, setIsFailToSubmit] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isSendingRequest, setIsSendingRequest] = useState(false);
  const router = useRouter();
  let number = 0;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    setIsSendingRequest(true);
    try {
      const res = await fetch("/api/sample-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(res);
      reset();
      resetSelected();
      setIsSubmit(true);
    } catch (e) {
      setIsFailToSubmit(true);
    }
  };

  useEffect(() => {
    setSumSelected(
      products.reduce((a, b) => {
        return b.isSelected ? (a += 1) : a;
      }, 0)
    );
    console.log(sumSelected);
  }, [products, sumSelected]);

  useEffect(() => {
    setIsSendingRequest(false);
    let isRedirect;
    if (isSubmit) {
      isRedirect = true;
    }

    setTimeout(() => {
      setIsFailToSubmit(false);
      setIsSubmit(false);
      setIsSendingRequest(false);
      if (isRedirect) {
        router.push("/");
      }
    }, 5000);
  }, [isFailToSubmit, isSubmit]);

  if (isSendingRequest) return <SendingEmail />;
  if (isSubmit) return <EmailHasSubmitted />;
  if (isFailToSubmit) return <FailedToSubmitRequestEmail />;
  if (sumSelected < 1) return <NotProductIsSelected />;
  console.log(isSubmit);
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

import Image from "next/image";

export default function SelectedFormItem({
  product,
  index,
  register,
  options,
  required,
  removeSelected,
}) {
  const applications = ["ceiling", "wall", "floor"];
  return (
    <div className="border-b border-b-[#979797] flex w-full">
      <div className="relative flex flex-col w-full gap-2 pb-8 mt-5 pr-14">
        <div>
          <h4 className="text-base font-normal uppercase text-[#999]">
            you are requesting for
          </h4>
          <h2 className="text-base font-normal">{`(${index}) ${product?.name}`}</h2>
        </div>
        <div>
          <h3 className="uppercase text-base font-normal text-[#979797]">
            Area of Application (Optional)
          </h3>
          <div>
            {applications.map((app, idx) => {
              return (
                <div key={idx} className="relative flex items-center gap-3">
                  <input
                    type="checkbox"
                    value={app}
                    // name=""
                    {...register(`products.${product?.index}.application`, {
                      required,
                      ...options,
                    })}
                    className="bg-[#eee] text-[20px] font-medium p-2 rounded"
                  />
                  <label className="text-base font-medium capitalize">
                    {app}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        <div className="absolute top-0 right-0">
          <button
            onClick={() => {
              removeSelected(product.sku);
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
}

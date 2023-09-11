import Image from "next/image";

export default function Card({ props, name, background, margintop }) {
  const frontend_value40 = props.attr.ct40 || "";
  const frontend_value39 = props.attr.ct39 || "";

  const garage_space = props.attr.ct38 || "";
  return (
    <div className={`${margintop} flex w-full flex-col rounded-lg shadow-md`}>
      <div
        className={`${background} rounded-tl-lg rounded-tr-lg py-2 text-center text-lg font-medium text-white`}
      >
        {name}
      </div>
      <div className="flex flex-row items-center justify-between p-2">
        <div className="flex flex-row items-center gap-4">
          <Image
            src={props.thumbnail}
            width={props.thumbnail_width}
            height={props.thumbnail_height}
            alt={props.name}
            priority={true}
            style={{ width: 256, height: 128 }}
          />
          <div className="flex flex-col gap-2">
            <div className="text-xl font-bold">{props.name}</div>
            <div className="font-normal">
              {frontend_value40.frontend_value}{" "}
              <span
                className={`${
                  frontend_value40.frontend_value !== undefined
                    ? "inline"
                    : "hidden"
                }`}
              >
                —
              </span>{" "}
              {frontend_value39.frontend_value}
            </div>
            <div className="font-normal">
              <span
                className={`${
                  garage_space.frontend_value !== undefined
                    ? "inline"
                    : "hidden"
                }`}
              >
                Garage: {garage_space.frontend_value}
              </span>
            </div>
          </div>
        </div>
        <div className="text-lg font-medium">
          {`$${props.attr.ct13.formatted_value}`}
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date();
  return (
    <div className="flex h-16 w-full items-center justify-center p-4">
      <div className="">
        ©{currentYear.getFullYear()}{" "}
        <Link href={"https://github.com/mr-munshi"} className="text-blue-600">
          Mr Munshi
        </Link>{" "}
        | All Rights Reserved
      </div>
    </div>
  );
}

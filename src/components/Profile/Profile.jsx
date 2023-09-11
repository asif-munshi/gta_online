"use client";

import { useRef } from "react";
import { LinkIcon } from "@heroicons/react/24/outline";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import Image from "next/image";
import profile from "../../lib/profile.json";

export default function Profile() {
  const toastId = useRef(null);

  const copyPageUrl = async () => {
    try {
      await navigator.clipboard.writeText(location.href);
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast("Link Copied!", {
          type: "success",
          theme: "colored",
        });
      }
    } catch (err) {
      toast("Failed to copy!", {
        type: "error",
        theme: "colored",
      });
    }
  };

  return (
    <div className="mt-4 flex flex-col gap-4">
      <div className="xs:flex-row flex w-full flex-col items-center justify-between gap-0">
        <div className="flex flex-row items-center gap-2">
          <Image
            src={profile.picture}
            width={110}
            height={100}
            alt={"profile picture"}
            priority={true}
            className="rounded-full"
            style={{ width: 110, height: 100 }}
          />
          <div className="flex flex-row gap-1">
            <div className="text-3xl font-bold">{profile.name}</div>
            <button onClick={copyPageUrl}>
              <LinkIcon height={22} width={22} viewBox="0 0 24 24" />
            </button>
            <ToastContainer
              position="top-center"
              transition={Bounce}
              autoClose={1000}
              hideProgressBar={false}
              pauseOnFocusLoss={false}
              limit={1}
              closeButton={false}
            />
          </div>
        </div>
        <div className="xs:pt-0 flex flex-col items-start gap-4 py-4">
          <div className="font-semibold">Socials</div>
          <div className="flex flex-row gap-4">
            {profile.socials.map((social) => (
              <Link key={social.id} href={social.link}>
                <Image
                  src={social.icon}
                  width={24}
                  height={24}
                  alt={social.name}
                  priority={true}
                  style={{ width: 24, height: 24 }}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-0 md:grid-cols-3 lg:grid-cols-5">
        <div className="flex flex-col items-center gap-4 pb-4 lg:items-start">
          <div className="xs:text-lg text-base font-bold">PROPERTIES</div>
          <div className="xs:text-2xl text-xl font-bold">1</div>
        </div>
        <div className="flex flex-col items-center gap-4 pb-4 lg:items-start">
          <div className="xs:text-lg text-base font-bold">CARS</div>
          <div className="xs:text-2xl text-xl font-bold">1</div>
        </div>
        <div className="flex flex-col items-center gap-4 pb-4 lg:items-start">
          <div className="xs:text-lg text-base font-bold">MOTORCYCLES</div>
          <div className="xs:text-2xl text-xl font-bold">1</div>
        </div>
        <div className="flex flex-col items-center gap-4 pb-4 lg:items-start">
          <div className="xs:text-lg text-base font-bold">PLANES</div>
          <div className="xs:text-2xl text-xl font-bold">1</div>
        </div>
        <div className="col-span-2 flex flex-col items-center gap-4 pb-4 lg:col-auto lg:items-start">
          <div className="xs:text-lg text-base font-bold">NET WORTH VALUE</div>
          <div className="xs:text-2xl text-xl font-bold text-green-500">$1</div>
        </div>
      </div>
    </div>
  );
}

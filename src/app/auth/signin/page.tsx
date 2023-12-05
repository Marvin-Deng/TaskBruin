"use client";

import {
  ClientSafeProvider,
  LiteralUnion,
  getProviders,
  signIn,
  useSession,
} from "next-auth/react";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { BuiltInProviderType } from "next-auth/providers/index";

export default function SignIn() {
  const [providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>();
  const { status: authStatus } = useSession();
  useEffect(() => {
    const getProvidersAsync = async () => {
      const oauthProviders = await getProviders();
      setProviders(oauthProviders);
    };

    getProvidersAsync(); // run it, run it
  }, []);

  if (authStatus == "authenticated") {
    return redirect("/");
  }

  return (
    <>
      <div className="max-w-md mx-auto mt-8 p-6 flex flex-col items-center">
        <div className="text-3xl mb-3">Sign In</div>
        <div className="text-sm text-slate-400">
          Welcome to TaskBruin, our UCLA service platform that connects you with
          Bruins to help with food delivery, laundry, scooter rental, and more.
        </div>
        <br></br>
        {providers &&
          Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                className={
                  provider.name == "GitHub"
                    ? "text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
                    : ""
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
      </div>
    </>
  );
}
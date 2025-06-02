"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { Button } from "./ui/button";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/dashboard",
    });

    if (!result?.ok) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-gray-300 bg-white p-10">
        <h1 className="mb-6 text-center text-3xl font-semibold text-gray-800">
          Instafy
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border px-4 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl border px-4 py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="text-sm text-red-500">{error}</p>}
          <Button className="w-full bg-blue-500 text-white hover:bg-blue-600">
            Sign in
          </Button>
        </form>

        <hr className="my-6" />

        <Button
          className="w-full rounded-xl bg-red-500 text-white hover:bg-red-600"
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
        >
          Sign in with Google
        </Button>

        <div className="mt-6 text-center text-sm text-gray-500">
          Not affiliated with Instagram. For demo purposes only.
        </div>
      </div>
    </div>
  );
}

// "use client";

// import { signIn } from "next-auth/react";
// import { useFormStatus } from "react-dom";
// import { Button } from "./ui/button";

// export default function LoginForm() {
//   return (
//     <div className="flex min-h-screen items-center justify-center px-4">
//       <div className="w-full max-w-md rounded-2xl border border-gray-300 bg-white p-10">
//         <h1 className="mb-6 text-center text-3xl font-semibold text-gray-800">
//           Instafy
//         </h1>

//         <p className="mb-4 text-center text-gray-600">
//           Please log in to continue.
//         </p>

//         <LoginButton />

//         <div className="mt-6 text-center text-sm text-gray-500">
//           Not affiliated with Instagram. For demo purposes only.
//         </div>
//       </div>
//     </div>
//   );
// }

// function LoginButton() {
//   const { pending } = useFormStatus();

//   return (
//     <Button
//       className="mt-4 w-full rounded-xl bg-blue-500 text-white hover:bg-blue-600"
//       variant="default"
//       aria-disabled={pending}
//       onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
//     >
//       Log in with Google
//     </Button>
//   );
// }


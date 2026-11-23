
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/auth-client";
import api from "@/lib/api";
import { Scissors, Loader2 } from "lucide-react";

export default function SignInPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await signIn.email({
        email: email.trim(),
        password,
      });

      if (result.error) {
        setError(result.error.message || "Invalid email or password.");
        return;
      }

      const response = await api.get("/api/me");
      const role = response.data.user.role;

      if (role === "admin") {
        router.replace("/admin");
      } else {
        router.replace("/dashboard");
      }
    } catch (err: unknown) {
      console.error("Sign in error:", err);
      setError("Unable to sign in. Please check your details and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F1F6FF] px-5 py-12">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl shadow-blue-900/5 sm:p-10">
        <Link
          href="/"
          className="mb-8 flex items-center justify-center gap-2 text-2xl font-extrabold text-[#1765D1]"
        >
          <Scissors size={25} />
          SalonBook
        </Link>

        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-slate-900">
            Welcome Back
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Sign in to manage your SalonBook account.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#1765D1] focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#1765D1] focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {error && (
            <p className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#1765D1] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1559BD] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading && <Loader2 size={18} className="animate-spin" />}
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <p className="mt-7 text-center text-sm text-slate-500">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="font-semibold text-[#1765D1] hover:underline"
          >
            Create Account
          </Link>
        </p>

        <Link
          href="/"
          className="mt-5 block text-center text-sm text-slate-400 hover:text-[#1765D1]"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}

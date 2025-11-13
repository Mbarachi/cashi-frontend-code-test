import React from "react";
import LoginForm from "./LoginForm";
import loginImage from '@assets/images/fintrack.png'
import { Wallet } from "lucide-react";

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 text-white">
      {/* Left */}
      <div className="hidden lg:flex flex-col justify-between bg-[#112217] p-8">
        <div className="flex items-center gap-3">
          <Wallet />
          <h1 className="text-xl font-bold">FinTrack</h1>
        </div>

        <div>
          <h2 className="mb-4 text-4xl font-black leading-tight">
            Take Control of Your Finances
          </h2>
          <p className="text-base text-white/80">
            Track, budget, and grow your wealth with confidence.
          </p>
        </div>

        <div
          className="w-full rounded-lg aspect-video bg-cover bg-center"
          style={{
            backgroundImage: `url(${loginImage})`
          }}
        ></div>
      </div>

      {/* Right */}
      <div className="flex items-center justify-center p-6 sm:p-8">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
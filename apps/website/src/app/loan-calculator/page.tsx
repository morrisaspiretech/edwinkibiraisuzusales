"use client";

import React, { useState, useMemo } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FaCalculator, FaArrowRight, FaPhone } from "react-icons/fa6";
import Link from "next/link";

const PHONE = "+254722000000";

function formatKES(value: number) {
  return "KSH " + Math.round(value).toLocaleString("en-KE");
}

export default function LoanCalculatorPage() {
  const [vehiclePrice, setVehiclePrice] = useState<string | number>(4500000);
  const [depositAmount, setDepositAmount] = useState<string | number>(900000);
  const [interestRate, setInterestRate] = useState<string | number>(14);
  const [months, setMonths] = useState<string | number>(72);

  const results = useMemo(() => {
    const vPrice = Number(vehiclePrice) || 0;
    const dAmount = Number(depositAmount) || 0;
    const iRate = Number(interestRate) || 0;
    const m = Number(months) || 1;

    // Ensure deposit doesn't exceed vehicle price
    const actualDeposit = Math.min(dAmount, vPrice);
    const principal = vPrice - actualDeposit;
    const monthlyRate = iRate / 100 / 12;
    let monthly = 0;
    if (monthlyRate === 0) {
      monthly = principal / m;
    } else {
      monthly =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, m)) /
        (Math.pow(1 + monthlyRate, m) - 1);
    }
    const totalPayable = monthly * m + actualDeposit;
    const totalInterest = totalPayable - vPrice;
    return { deposit: actualDeposit, principal, monthly, totalPayable, totalInterest };
  }, [vehiclePrice, depositAmount, interestRate, months]);

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="bg-[#1A1A1A] pt-32 pb-20 px-6 sm:px-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#D62B2B] rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/3"></div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#D62B2B]/10 text-[#D62B2B] mb-6">
            <FaCalculator size={30} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight mb-6">
            Calculate <span className="text-[#D62B2B]">Your Financing</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Get an instant estimate of your monthly Isuzu loan repayment. We work with leading banks to offer you the best financing rates in Kenya.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="flex-1 py-16 sm:py-24 px-6 sm:px-8">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-start">

          {/* Inputs */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 sm:p-10">
            <h2 className="text-xl font-black text-[#1A1A1A] uppercase tracking-wider mb-8">
              Enter Your Details
            </h2>

            {/* Vehicle Price */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Vehicle Price (KSH)</label>
                <input
                  type="number"
                  min={0}
                  value={vehiclePrice}
                  onChange={(e) => setVehiclePrice(e.target.value)}
                  className="w-32 text-right text-sm font-black text-[#D62B2B] bg-transparent border-b-2 border-gray-200 focus:border-[#D62B2B] outline-none pb-1"
                />
              </div>
              <input
                type="range"
                min={500000}
                max={20000000}
                step={100000}
                value={Number(vehiclePrice) || 0}
                onChange={(e) => setVehiclePrice(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-[#D62B2B]"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>KSH 500K</span>
                <span>KSH 20M</span>
              </div>
            </div>

            {/* Deposit */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Deposit Amount</label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-gray-400 font-bold">KSH</span>
                    <input
                      type="number"
                      min={0}
                      max={Number(vehiclePrice) || 0}
                      value={depositAmount}
                      onChange={(e) => setDepositAmount(e.target.value)}
                      className="w-24 text-right text-sm font-black text-[#D62B2B] bg-transparent border-b-2 border-gray-200 focus:border-[#D62B2B] outline-none pb-1"
                    />
                  </div>
                  <span className="text-gray-300">|</span>
                  <div className="flex items-center gap-1">
                    <input
                      type="number"
                      min={0}
                      max={100}
                      value={Number(vehiclePrice) > 0 ? ((Number(depositAmount) / Number(vehiclePrice)) * 100).toFixed(1) : 0}
                      onChange={(e) => setDepositAmount(Math.round((Number(e.target.value) / 100) * (Number(vehiclePrice) || 0)))}
                      className="w-12 text-right text-sm font-black text-[#D62B2B] bg-transparent border-b-2 border-gray-200 focus:border-[#D62B2B] outline-none pb-1"
                    />
                    <span className="text-xs font-black text-[#D62B2B]">%</span>
                  </div>
                </div>
              </div>
              <input
                type="range"
                min={0}
                max={Number(vehiclePrice) || 0}
                step={50000}
                value={Number(depositAmount) || 0}
                onChange={(e) => setDepositAmount(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-[#D62B2B]"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>KSH 0</span>
                <span>{formatKES(Number(vehiclePrice) || 0)}</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Interest Rate (p.a.)</label>
                <div className="flex items-center gap-1">
                  <input
                    type="number"
                    min={0}
                    step={0.1}
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    className="w-16 text-right text-sm font-black text-[#D62B2B] bg-transparent border-b-2 border-gray-200 focus:border-[#D62B2B] outline-none pb-1"
                  />
                  <span className="text-sm font-black text-[#D62B2B]">%</span>
                </div>
              </div>
              <input
                type="range"
                min={10}
                max={24}
                step={0.5}
                value={Number(interestRate) || 0}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-[#D62B2B]"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>10%</span>
                <span>24%</span>
              </div>
            </div>

            {/* Repayment Period */}
            <div className="mb-2">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Repayment Period</label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min={1}
                    max={72}
                    value={months}
                    onChange={(e) => setMonths(e.target.value)}
                    className="w-16 text-right text-sm font-black text-[#D62B2B] bg-transparent border-b-2 border-gray-200 focus:border-[#D62B2B] outline-none pb-1"
                  />
                  <span className="text-sm font-black text-[#D62B2B]">months</span>
                </div>
              </div>
              <input
                type="range"
                min={1}
                max={72}
                step={1}
                value={Number(months) || 1}
                onChange={(e) => setMonths(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-[#D62B2B]"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>1 month</span>
                <span>72 months</span>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {/* Monthly Payment */}
            <div className="bg-[#1A1A1A] rounded-2xl p-8 sm:p-10 text-center">
              <p className="text-white/60 text-sm font-bold uppercase tracking-widest mb-3">Estimated Monthly Payment</p>
              <p className="text-4xl sm:text-5xl font-black text-white mb-2">
                {formatKES(results.monthly)}
              </p>
              <p className="text-white/40 text-xs font-medium">per month for {Number(months) || 1} months</p>
            </div>

            {/* Breakdown */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 space-y-4">
              <h3 className="text-sm font-black text-gray-900 uppercase tracking-wider mb-6">Loan Breakdown</h3>

              {[
                { label: "Vehicle Price", value: Number(vehiclePrice) || 0 },
                { label: "Deposit Amount", value: results.deposit },
                { label: "Loan Amount", value: results.principal },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                  <span className="text-gray-600 font-medium">{label}</span>
                  <span className="font-black text-gray-900">{formatKES(value)}</span>
                </div>
              ))}
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-gray-400 leading-relaxed">
              * This calculator provides an estimate only. Actual rates and terms are subject to bank approval and may vary. Contact us for a precise quotation from our banking partners.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="flex-1 flex items-center justify-center gap-2 bg-[#D62B2B] text-white px-6 py-4 font-black uppercase text-sm tracking-widest hover:bg-red-700 transition-colors rounded-lg"
              >
                Apply for Financing <FaArrowRight size={14} />
              </Link>
              <a
                href={`tel:${PHONE}`}
                className="flex-1 flex items-center justify-center gap-2 bg-[#1A1A1A] text-white px-6 py-4 font-black uppercase text-sm tracking-widest hover:bg-gray-800 transition-colors rounded-lg"
              >
                <FaPhone size={14} /> Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

'use client';

import { useState, useEffect } from 'react';

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(450000);
  const [downPayment, setDownPayment] = useState(90000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [propertyTax, setPropertyTax] = useState(5000);
  const [homeInsurance, setHomeInsurance] = useState(1500);
  const [pmi, setPmi] = useState(0);
  const [hoaFees, setHoaFees] = useState(0);

  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [principalAndInterest, setPrincipalAndInterest] = useState(0);
  const [monthlyPropertyTax, setMonthlyPropertyTax] = useState(0);
  const [monthlyInsurance, setMonthlyInsurance] = useState(0);
  const [monthlyPmi, setMonthlyPmi] = useState(0);
  const [monthlyHoa, setMonthlyHoa] = useState(0);

  // Calculate mortgage payment
  useEffect(() => {
    const principal = homePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    // Calculate monthly principal and interest
    let pi = 0;
    if (monthlyRate === 0) {
      pi = principal / numberOfPayments;
    } else {
      pi = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    }

    // Calculate PMI (if down payment is less than 20%)
    const downPaymentPercent = (downPayment / homePrice) * 100;
    const calculatedPmi = downPaymentPercent < 20 ? (principal * 0.005) / 12 : 0;

    // Monthly breakdown
    const monthlyTax = propertyTax / 12;
    const monthlyIns = homeInsurance / 12;
    const monthlyPmiAmount = pmi > 0 ? pmi : calculatedPmi;
    const monthlyHoaAmount = hoaFees;

    // Total monthly payment
    const total = pi + monthlyTax + monthlyIns + monthlyPmiAmount + monthlyHoaAmount;

    setPrincipalAndInterest(pi);
    setMonthlyPropertyTax(monthlyTax);
    setMonthlyInsurance(monthlyIns);
    setMonthlyPmi(monthlyPmiAmount);
    setMonthlyHoa(monthlyHoaAmount);
    setMonthlyPayment(total);
  }, [homePrice, downPayment, interestRate, loanTerm, propertyTax, homeInsurance, pmi, hoaFees]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const downPaymentPercent = ((downPayment / homePrice) * 100).toFixed(1);
  const loanAmount = homePrice - downPayment;

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Calculator Inputs */}
        <div className="lg:col-span-3">
          <div className="bg-white p-8 md:p-10 rounded-sm shadow-xl border border-gray-200">
            <h3 className="text-xl font-serif font-light text-black mb-8">Calculate Your Payment</h3>
            
            <div className="space-y-8">
              {/* Home Price */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-black">Home Price</label>
                  <span className="text-gold font-mono text-sm">{formatCurrency(homePrice)}</span>
                </div>
                <input
                  type="range"
                  min="100000"
                  max="2000000"
                  step="10000"
                  value={homePrice}
                  onChange={(e) => setHomePrice(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold"
                />
                <div className="flex justify-between text-xs text-[var(--color-ink-300)] mt-1">
                  <span>$100K</span>
                  <span>$2M</span>
                </div>
              </div>

              {/* Down Payment */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-black">Down Payment</label>
                  <div className="flex items-center gap-2">
                    <span className="text-gold font-mono text-sm">{formatCurrency(downPayment)}</span>
                    <span className="text-xs text-[var(--color-ink-300)]">({downPaymentPercent}%)</span>
                  </div>
                </div>
                <input
                  type="range"
                  min="0"
                  max={homePrice * 0.5}
                  step="5000"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold"
                />
                <div className="flex justify-between text-xs text-[var(--color-ink-300)] mt-1">
                  <span>$0</span>
                  <span>{formatCurrency(homePrice * 0.5)}</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-black">Interest Rate</label>
                  <span className="text-gold font-mono text-sm">{interestRate.toFixed(2)}%</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="12"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold"
                />
                <div className="flex justify-between text-xs text-[var(--color-ink-300)] mt-1">
                  <span>2%</span>
                  <span>12%</span>
                </div>
              </div>

              {/* Loan Term */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-black">Loan Term</label>
                  <span className="text-gold font-mono text-sm">{loanTerm} years</span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[15, 20, 30].map((term) => (
                    <button
                      key={term}
                      onClick={() => setLoanTerm(term)}
                      className={`py-3 px-4 rounded-sm border-2 text-sm font-semibold transition-all duration-200 ${
                        loanTerm === term
                          ? 'border-gold bg-gold text-white'
                          : 'border-gray-200 text-[var(--color-ink-300)] hover:border-gold'
                      }`}
                    >
                      {term} Years
                    </button>
                  ))}
                </div>
              </div>

              {/* Additional Costs */}
              <div className="pt-6 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-black mb-6">Additional Monthly Costs</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Property Tax */}
                  <div>
                    <label className="text-xs text-[var(--color-ink-300)] mb-2 block">Annual Property Tax</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-ink-300)]">$</span>
                      <input
                        type="number"
                        value={propertyTax}
                        onChange={(e) => setPropertyTax(Number(e.target.value))}
                        className="w-full pl-8 pr-4 py-2 border border-gray-200 rounded-sm focus:outline-none focus:border-gold text-sm"
                      />
                    </div>
                  </div>

                  {/* Home Insurance */}
                  <div>
                    <label className="text-xs text-[var(--color-ink-300)] mb-2 block">Annual Home Insurance</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-ink-300)]">$</span>
                      <input
                        type="number"
                        value={homeInsurance}
                        onChange={(e) => setHomeInsurance(Number(e.target.value))}
                        className="w-full pl-8 pr-4 py-2 border border-gray-200 rounded-sm focus:outline-none focus:border-gold text-sm"
                      />
                    </div>
                  </div>

                  {/* PMI */}
                  <div>
                    <label className="text-xs text-[var(--color-ink-300)] mb-2 block">Monthly PMI (if applicable)</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-ink-300)]">$</span>
                      <input
                        type="number"
                        value={pmi}
                        onChange={(e) => setPmi(Number(e.target.value))}
                        className="w-full pl-8 pr-4 py-2 border border-gray-200 rounded-sm focus:outline-none focus:border-gold text-sm"
                        placeholder="Auto-calculated"
                      />
                    </div>
                  </div>

                  {/* HOA Fees */}
                  <div>
                    <label className="text-xs text-[var(--color-ink-300)] mb-2 block">Monthly HOA Fees</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-ink-300)]">$</span>
                      <input
                        type="number"
                        value={hoaFees}
                        onChange={(e) => setHoaFees(Number(e.target.value))}
                        className="w-full pl-8 pr-4 py-2 border border-gray-200 rounded-sm focus:outline-none focus:border-gold text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Panel */}
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-br from-gold to-gold-dark p-8 md:p-10 rounded-sm shadow-2xl text-white sticky top-24">
            <h3 className="text-2xl font-serif font-light mb-2">Monthly Payment</h3>
            <div className="text-5xl font-light mb-8 font-mono">{formatCurrency(monthlyPayment)}</div>

            {/* Payment Breakdown */}
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center pb-3 border-b border-white/20">
                <span className="text-sm">Principal & Interest</span>
                <span className="font-mono text-sm">{formatCurrency(principalAndInterest)}</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-white/20">
                <span className="text-sm">Property Tax</span>
                <span className="font-mono text-sm">{formatCurrency(monthlyPropertyTax)}</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-white/20">
                <span className="text-sm">Home Insurance</span>
                <span className="font-mono text-sm">{formatCurrency(monthlyInsurance)}</span>
              </div>
              {monthlyPmi > 0 && (
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="text-sm">PMI</span>
                  <span className="font-mono text-sm">{formatCurrency(monthlyPmi)}</span>
                </div>
              )}
              {monthlyHoa > 0 && (
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="text-sm">HOA Fees</span>
                  <span className="font-mono text-sm">{formatCurrency(monthlyHoa)}</span>
                </div>
              )}
            </div>

            {/* Loan Summary */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-sm space-y-3">
              <div className="flex justify-between text-sm">
                <span className="opacity-90">Loan Amount:</span>
                <span className="font-mono">{formatCurrency(loanAmount)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="opacity-90">Down Payment:</span>
                <span className="font-mono">{downPaymentPercent}%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="opacity-90">Interest Rate:</span>
                <span className="font-mono">{interestRate.toFixed(2)}%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="opacity-90">Loan Term:</span>
                <span className="font-mono">{loanTerm} years</span>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="text-xs mt-6 opacity-75 leading-relaxed">
              *This calculator provides estimates only. Actual payments may vary. Consult with a mortgage professional for accurate quotes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


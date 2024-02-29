"use client";

import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { TaxPayerInfo, taxData } from '@/types/income';


const TaxCalculator = () => {
  const [selectedYear, setSelectedYear] = useState<number>(2023);
  const [income, setIncome] = useState<number | string>("");
  const [frequency, setFrequency] = useState<'daily' | 'weekly' | 'monthly' | 'yearly'>('monthly');
  const [currency, setCurrency] = useState<'USD' | 'ZWL'>('USD');
  const [age, setAge] = useState<number>(30);
  const [hasMedicalCondition, setHasMedicalCondition] = useState<boolean>(false);
  const [tax, setTax] = useState<number | string>('0');

  const calculateTax = (income: number, year: number, freq: string, currency: 'USD' | 'ZWL', age: number, hasMedicalCondition: boolean): number => {
    const yearData = taxData.find(y => y.year === year);
    if (!yearData) return 0;

    const frequencies = yearData.currencies[currency];
    const brackets = frequencies[freq as keyof typeof frequencies];
    let totalTax = 0;
    let takeHomeIncome = 0;

    for (const bracket of brackets) {
      // Convert 'Infinity' to numeric Infinity for comparison, or use the numeric value directly
      const upperLimit = bracket.to === 'Infinity' ? Infinity : bracket.to;
  
      if (income > bracket.from && income <= upperLimit) {
        totalTax = (income * bracket.rate) - bracket.deduct;
        
        
        // Calculate additional credits if applicable
        if (bracket.additionalCredits) {
          const info: TaxPayerInfo = { age, hasMedicalCondition, currency };
          totalTax -= bracket.additionalCredits(info);
        }
        break; // Exit the loop once the correct bracket is found and calculation is done
      }
    }
    
    return totalTax;
  };

  const handleCalculate = () => {
    const calculatedTax = calculateTax(Number(income), selectedYear, frequency, currency, age, hasMedicalCondition);
    if (calculatedTax < 0) {
      setTax("0.00"); // Set tax to "0.00" if negative
  } else {
      setTax(calculatedTax.toFixed(2)); // Format to two decimal places if not negative
  }
  };

  const handleIncomeInformationSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Assuming calculateTax is a function that calculates the tax based on the provided inputs
    const calculatedTax = calculateTax(Number(income), selectedYear, frequency, currency, age, hasMedicalCondition);
    if (calculatedTax < 0) {
      setTax("0.00"); // Set tax to "0.00" if negative
  } else {
      setTax(calculatedTax.toFixed(2)); // Format to two decimal places if not negative
  }
  };

  return (
    <section id="calculator" className="w-full p-2 pt-0 mx-auto md:p-8 max-w-7xl">
    <h1 className="mt-0 mb-5 text-3xl font-bold">Income Calculator</h1>
    <form className="flex flex-col items-start gap-5" onSubmit={handleIncomeInformationSubmission}>
      <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
       

        {/* Year Selection */}
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="year" className="text-sm font-medium">Year</label>
          <Select defaultValue={selectedYear.toString()} onValueChange={(val) => setSelectedYear(Number(val))}>
          <SelectTrigger>
              <SelectValue>{selectedYear.toString()}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              {taxData.map(({ year }) => (
                <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
              ))}
            </SelectContent>
            </Select>
        </div>

        {/* Frequency Selection */}
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="frequency" className="text-sm font-medium">Frequency</label>
          <Select defaultValue={frequency} onValueChange={(val) => setFrequency(val as 'monthly' | 'yearly' | 'daily' | 'weekly')}>
          <SelectTrigger>
              <SelectValue>{frequency}</SelectValue>
            </SelectTrigger>
            <SelectContent>
            <SelectItem value="daily">Daily</SelectItem>
            <SelectItem value="weekly">Weekly</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
            <SelectItem value="yearly">Yearly</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Currency Selection */}
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="currency" className="text-sm font-medium">Currency</label>
          <Select defaultValue={currency} onValueChange={(val) => setCurrency(val as 'USD' | 'ZWL')}>
            <SelectTrigger>
              <SelectValue>{currency}</SelectValue>
            </SelectTrigger>
            <SelectContent>
            <SelectItem value="USD">USD</SelectItem>
            <SelectItem value="ZWL">ZWL</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Age Input */}
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="age" className="text-sm font-medium">Age</label>
          <Input
            id="age"
            type="number"
            value={age.toString()} // Convert the number state to a string for the input value
            placeholder="Enter your age"
            onChange={(e) => setAge(+e.target.value)} // Convert the string value to a number
          />
        </div>

        

        {/* Income Input */}
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="income" className="text-sm font-medium">Income</label>
          <Input
            id="income"
            type="text" // Keeping as text to allow for decimal and formatting
            value={income.toString()} // Convert the number to a string for displaying
            placeholder="$0.00"
            onChange={(e) => setIncome(Number(e.target.value.replace(/[^0-9.-]+/g, "")))} // Remove non-numeric characters before conversion
          />
        </div>

        {/* Medical Condition Checkbox */}
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="medicalCondition" className="text-sm font-medium">Medical Aid(tick if any)</label>
          <input type="checkbox" checked={hasMedicalCondition} className="items-center w-5 h-5" onChange={(e) => setHasMedicalCondition(e.target.checked)} />
        </div>

        {/* Submit Button */}
        <Button type="submit">Calculate</Button>
      </div>

      {/* Display Tax */}

      <div className="flex flex-col items-start w-full gap-3">
      <div className="flex items-center justify-between w-full mt-2">
        <h3 className="text-xl font-semibold">Gross Income</h3>
        <h3 className="text-xl font-semibold">${income}</h3>
      </div>

      <div className="flex items-center justify-between w-full mt-2">
        <h3 className="text-xl font-semibold">Tax</h3>
        <h3 className="text-xl font-semibold">${tax}</h3>
      </div>
      <div className="flex items-center justify-between w-full mt-2">
        <h3 className="text-xl font-semibold">Take Home</h3>
        <h3 className="text-xl font-semibold">
          ${(Number(income) - Number(tax))}
        </h3>
      </div>
    </div>
    </form>
  </section>
  );
};

export default TaxCalculator;

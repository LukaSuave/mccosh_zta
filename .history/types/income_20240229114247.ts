export interface TaxBracket {
  from: number;
  to: number | 'Infinity'; // Use string 'Infinity' for typescript compatibility
  rate: number;
  deduct: number;
  additionalCredits?: (info: TaxPayerInfo) => number; // Function to calculate additional credits based on age and medical conditions
}

export interface TaxFrequency {
  daily: TaxBracket[];
  weekly: TaxBracket[];
  monthly: TaxBracket[];
  yearly: TaxBracket[];
}

export interface TaxYear {
  year: number;
  currencies: {
    [currency: string]: TaxFrequency; // Allows for different frequencies per currency
  };
}


// Example of incorporating age, medical condition, and currency into tax data




// Assuming TaxYear, TaxPayerInfo, and taxData are defined elsewhere based on the new structure
export interface TaxPayerInfo {
  age: number;
  hasMedicalCondition: boolean;
  currency: 'USD' | 'ZWL';
}


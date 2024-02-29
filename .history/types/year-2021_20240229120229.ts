import { TaxPayerInfo } from "./income";

export const year2021: TaxYear = {
    year: 2021,
    currencies: {
      USD: {
        daily: [
          {
            from: 0,
            to: 2.30,
            rate: 0.0,
            deduct: 0,
            additionalCredits: (info: TaxPayerInfo) => {
              if (info.age > 55 && info.hasMedicalCondition) {
                return 2.96; // Above 55 and has medical needs
              } else if (info.age > 55) {
                return 2.47; // Above 55 and no medical needs
              } else if (info.hasMedicalCondition) {
                return 2.47; // Below 55 and has medical needs
              } else {
                return 0; // Below 55 and no medical needs
              }
            },
          },
          {
            from: 2.31,
            to: 9.86,
            rate: 0.2,
            deduct: 0.46,
            additionalCredits: (info: TaxPayerInfo) => {
              if (info.age > 55 && info.hasMedicalCondition) {
                return 2.96; // Above 55 and has medical needs
              } else if (info.age > 55) {
                return 2.47; // Above 55 and no medical needs
              } else if (info.hasMedicalCondition) {
                return 2.47; // Below 55 and has medical needs
              } else {
                return 0; // Below 55 and no medical needs
              }
            },
          },
          {
            from: 9.87,
            to: 32.88,
            rate: 0.25,
            deduct: 0.95,
            additionalCredits: (info: TaxPayerInfo) => {
              if (info.age > 55 && info.hasMedicalCondition) {
                return 2.96; // Above 55 and has medical needs
              } else if (info.age > 55) {
                return 2.47; // Above 55 and no medical needs
              } else if (info.hasMedicalCondition) {
                return 2.47; // Below 55 and has medical needs
              } else {
                return 0; // Below 55 and no medical needs
              }
            },
          },
          {
            from: 32.89,
            to: 65.75,
            rate: 0.3,
            deduct: 2.6,
            additionalCredits: (info: TaxPayerInfo) => {
              if (info.age > 55 && info.hasMedicalCondition) {
                return 2.96; // Above 55 and has medical needs
              } else if (info.age > 55) {
                return 2.47; // Above 55 and no medical needs
              } else if (info.hasMedicalCondition) {
                return 2.47; // Below 55 and has medical needs
              } else {
                return 0; // Below 55 and no medical needs
              }
            },// No additional credits in this bracket
          },
          {
            from: 65.76,
            to: 98.63, // Use numeric Infinity for comparisons
            rate: 0.35,
            deduct: 5.88,
            additionalCredits: (info: TaxPayerInfo) => {
              if (info.age > 55 && info.hasMedicalCondition) {
                return 2.96; // Above 55 and has medical needs
              } else if (info.age > 55) {
                return 2.47; // Above 55 and no medical needs
              } else if (info.hasMedicalCondition) {
                return 2.47; // Below 55 and has medical needs
              } else {
                return 0; // Below 55 and no medical needs
              }
            },
          },
          {
          from: 98.64,
          to: Infinity, // Use numeric Infinity for comparisons
          rate: 0.4,
          deduct: 10.82,
          additionalCredits: (info: TaxPayerInfo) => {
            if (info.age > 55 && info.hasMedicalCondition) {
              return 2.96; // Above 55 and has medical needs
            } else if (info.age > 55) {
              return 2.47; // Above 55 and no medical needs
            } else if (info.hasMedicalCondition) {
              return 2.47; // Below 55 and has medical needs
            } else {
              return 0; // Below 55 and no medical needs
            }
          },
        },
        ],
        weekly: [
          {
            from: 0,
            to: 16.15,
            rate: 0.0,
            deduct: 0,
            additionalCredits: (info: TaxPayerInfo) => {
              if (info.age > 55 && info.hasMedicalCondition) {
                return 20.77; // Above 55 and has medical needs
              } else if (info.age > 55) {
                return 17.21; // Above 55 and no medical needs
              } else if (info.hasMedicalCondition) {
                return 17.31; // Below 55 and has medical needs
              } else {
                return 0; // Below 55 and no medical needs
              }
            },
          },
          {
            from: 16.16,
            to: 69.23,
            rate: 0.2,
            deduct: 3.23,
            additionalCredits: (info: TaxPayerInfo) => {
              if (info.age > 55 && info.hasMedicalCondition) {
                return 20.77; // Above 55 and has medical needs
              } else if (info.age > 55) {
                return 17.21; // Above 55 and no medical needs
              } else if (info.hasMedicalCondition) {
                return 17.31; // Below 55 and has medical needs
              } else {
                return 0; // Below 55 and no medical needs
              }
            },
          },
          {
            from: 69.24,
            to: 230.77,
            rate: 0.25,
            deduct: 6.69,
            additionalCredits: (info: TaxPayerInfo) => {
              if (info.age > 55 && info.hasMedicalCondition) {
                return 20.77; // Above 55 and has medical needs
              } else if (info.age > 55) {
                return 17.21; // Above 55 and no medical needs
              } else if (info.hasMedicalCondition) {
                return 17.31; // Below 55 and has medical needs
              } else {
                return 0; // Below 55 and no medical needs
              }
            },
          },
          {
            from: 230.78,
            to: 461.54,
            rate: 0.3,
            deduct: 18.23,
            additionalCredits: (info: TaxPayerInfo) => {
              if (info.age > 55 && info.hasMedicalCondition) {
                return 20.77; // Above 55 and has medical needs
              } else if (info.age > 55) {
                return 17.21; // Above 55 and no medical needs
              } else if (info.hasMedicalCondition) {
                return 17.31; // Below 55 and has medical needs
              } else {
                return 0; // Below 55 and no medical needs
              }
            },// No additional credits in this bracket
          },
          {
            from: 461.55,
            to: 692.31, // Use numeric Infinity for comparisons
            rate: 0.35,
            deduct: 41.31,
            additionalCredits: (info: TaxPayerInfo) => {
              if (info.age > 55 && info.hasMedicalCondition) {
                return 20.77; // Above 55 and has medical needs
              } else if (info.age > 55) {
                return 17.21; // Above 55 and no medical needs
              } else if (info.hasMedicalCondition) {
                return 17.31; // Below 55 and has medical needs
              } else {
                return 0; // Below 55 and no medical needs
              }
            },
          },
          {
          from: 692.32,
          to: Infinity, // Use numeric Infinity for comparisons
          rate: 0.4,
          deduct: 75.92,
          additionalCredits: (info: TaxPayerInfo) => {
            if (info.age > 55 && info.hasMedicalCondition) {
              return 20.77; // Above 55 and has medical needs
            } else if (info.age > 55) {
              return 17.21; // Above 55 and no medical needs
            } else if (info.hasMedicalCondition) {
              return 17.31; // Below 55 and has medical needs
            } else {
              return 0; // Below 55 and no medical needs
            }
          },
        },
        ],
        monthly: [
          {
            from: 0,
            to: 70,
            rate: 0.0,
            deduct: 0,
            additionalCredits: (info: TaxPayerInfo) => {
              if (info.age > 55 && info.hasMedicalCondition) {
                return 90; // Above 55 and has medical needs
              } else if (info.age > 55) {
                return 75; // Above 55 and no medical needs
              } else if (info.hasMedicalCondition) {
                return 75; // Below 55 and has medical needs
              } else {
                return 0; // Below 55 and no medical needs
              }
            },
          },
          {
            from: 70.01,
            to: 300,
            rate: 0.2,
            deduct: 14,
            additionalCredits: (info: TaxPayerInfo) => {
              if (info.age > 55 && info.hasMedicalCondition) {
                return 90; // Above 55 and has medical needs
              } else if (info.age > 55) {
                return 75; // Above 55 and no medical needs
              } else if (info.hasMedicalCondition) {
                return 75; // Below 55 and has medical needs
              } else {
                return 0; // Below 55 and no medical needs
              }
            },
          },
          {
            from: 300.01,
            to: 1000,
            rate: 0.25,
            deduct: 29,
            additionalCredits: (info: TaxPayerInfo) => {
              if (info.age > 55 && info.hasMedicalCondition) {
                return 90; // Above 55 and has medical needs
              } else if (info.age > 55) {
                return 75; // Above 55 and no medical needs
              } else if (info.hasMedicalCondition) {
                return 75; // Below 55 and has medical needs
              } else {
                return 0; // Below 55 and no medical needs
              }
            },
          },
          {
            from: 1000.01,
            to: 2000,
            rate: 0.3,
            deduct: 79,
            additionalCredits: (info: TaxPayerInfo) => {
              if (info.age > 55 && info.hasMedicalCondition) {
                return 90; // Above 55 and has medical needs
              } else if (info.age > 55) {
                return 75; // Above 55 and no medical needs
              } else if (info.hasMedicalCondition) {
                return 75; // Below 55 and has medical needs
              } else {
                return 0; // Below 55 and no medical needs
              }
            }, // No additional credits in this bracket
          },
          {
            from: 2000.01,
            to: 3000, // Use numeric Infinity for comparisons
            rate: 0.35,
            deduct: 179,
            additionalCredits: (info: TaxPayerInfo) => {
              if (info.age > 55 && info.hasMedicalCondition) {
                return 90; // Above 55 and has medical needs
              } else if (info.age > 55) {
                return 75; // Above 55 and no medical needs
              } else if (info.hasMedicalCondition) {
                return 75; // Below 55 and has medical needs
              } else {
                return 0; // Below 55 and no medical needs
              }
            },
          },
          {
          from: 3000.01,
          to: Infinity, // Use numeric Infinity for comparisons
          rate: 0.4,
          deduct: 329,
          additionalCredits: (info: TaxPayerInfo) => {
            if (info.age > 55 && info.hasMedicalCondition) {
              return 90; // Above 55 and has medical needs
            } else if (info.age > 55) {
              return 75; // Above 55 and no medical needs
            } else if (info.hasMedicalCondition) {
              return 75; // Below 55 and has medical needs
            } else {
              return 0; // Below 55 and no medical needs
            }
          },
        },
        ], 
        yearly: [
          {
            from: 0,
            to: 840,
            rate: 0.0,
            deduct: 0,
            additionalCredits: (info: TaxPayerInfo) => {
              if (info.age > 55 && info.hasMedicalCondition) {
                return 1080; // Above 55 and has medical needs
              } else if (info.age > 55) {
                return 90; // Above 55 and no medical needs
              } else if (info.hasMedicalCondition) {
                return 90; // Below 55 and has medical needs
              } else {
                return 0; // Below 55 and no medical needs
              }
            },
          },
          {
            from: 841,
            to: 3600,
            rate: 0.2,
            deduct: 168,
            additionalCredits: (info: TaxPayerInfo) => {
              if (info.age > 55 && info.hasMedicalCondition) {
                return 1080; // Above 55 and has medical needs
              } else if (info.age > 55) {
                return 90; // Above 55 and no medical needs
              } else if (info.hasMedicalCondition) {
                return 90; // Below 55 and has medical needs
              } else {
                return 0; // Below 55 and no medical needs
              }
            },
          },
          {
            from: 3601,
            to: 12000,
            rate: 0.25,
            deduct: 348,
            additionalCredits: (info: TaxPayerInfo) => {
              if (info.age > 55 && info.hasMedicalCondition) {
                return 1080; // Above 55 and has medical needs
              } else if (info.age > 55) {
                return 90; // Above 55 and no medical needs
              } else if (info.hasMedicalCondition) {
                return 90; // Below 55 and has medical needs
              } else {
                return 0; // Below 55 and no medical needs
              }
            },
          },
          {
            from: 12001,
            to: 24000,
            rate: 0.3,
            deduct: 948,
            additionalCredits: (info: TaxPayerInfo) => {
              if (info.age > 55 && info.hasMedicalCondition) {
                return 1080; // Above 55 and has medical needs
              } else if (info.age > 55) {
                return 90; // Above 55 and no medical needs
              } else if (info.hasMedicalCondition) {
                return 90; // Below 55 and has medical needs
              } else {
                return 0; // Below 55 and no medical needs
              }
            },// No additional credits in this bracket
          },
          {
            from: 24001,
            to: 36000, // Use numeric Infinity for comparisons
            rate: 0.35,
            deduct: 2148,
            additionalCredits: (info: TaxPayerInfo) => {
              if (info.age > 55 && info.hasMedicalCondition) {
                return 1080; // Above 55 and has medical needs
              } else if (info.age > 55) {
                return 90; // Above 55 and no medical needs
              } else if (info.hasMedicalCondition) {
                return 90; // Below 55 and has medical needs
              } else {
                return 0; // Below 55 and no medical needs
              }
            },
          },
          {
          from: 36001,
          to: Infinity, // Use numeric Infinity for comparisons
          rate: 0.4,
          deduct: 3948,
          additionalCredits: (info: TaxPayerInfo) => {
            if (info.age > 55 && info.hasMedicalCondition) {
              return 1080; // Above 55 and has medical needs
            } else if (info.age > 55) {
              return 90; // Above 55 and no medical needs
            } else if (info.hasMedicalCondition) {
              return 90; // Below 55 and has medical needs
            } else {
              return 0; // Below 55 and no medical needs
            }
          },
        },
        ],
      },
      ZWL: {
        daily: [
          {
            from: 0,
            to: 328.77,
            rate: 0.0,
            deduct: 0,
            additionalCredits: (info: TaxPayerInfo) => {
              if (info.age > 55 && info.hasMedicalCondition) {
                return 1479.45; // Above 55 and has medical needs
              } else if (info.age > 55) {
                return 1232.88; // Above 55 and no medical needs
              } else if (info.hasMedicalCondition) {
                return 1232.88; // Below 55 and has medical needs
              } else {
                return 0; // Below 55 and no medical needs
              }
            },
          },
          {
            from: 328.78,
            to: 986.30,
            rate: 0.2,
            deduct: 65.75,
            additionalCredits: (info: TaxPayerInfo) => {
              if (info.age > 55 && info.hasMedicalCondition) {
                return 1479.45; // Above 55 and has medical needs
              } else if (info.age > 55) {
                return 1232.88; // Above 55 and no medical needs
              } else if (info.hasMedicalCondition) {
                return 1232.88; // Below 55 and has medical needs
              } else {
                return 0; // Below 55 and no medical needs
              }
            },
          },
          {
            from: 986.31,
            to: 1972.60,
            rate: 0.25,
            deduct: 115.07,
            additionalCredits: (info: TaxPayerInfo) => {
              if (info.age > 55 && info.hasMedicalCondition) {
                return 1479.45; // Above 55 and has medical needs
              } else if (info.age > 55) {
                return 1232.88; // Above 55 and no medical needs
              } else if (info.hasMedicalCondition) {
                return 1232.88; // Below 55 and has medical needs
              } else {
                return 0; // Below 55 and no medical needs
              }
            },
          },
          {
            from: 1972.61,
            to: 3945.21,
            rate: 0.3,
            deduct: 213.70,
            additionalCredits: (info: TaxPayerInfo) => {
              if (info.age > 55 && info.hasMedicalCondition) {
                return 1479.45; // Above 55 and has medical needs
              } else if (info.age > 55) {
                return 1232.88; // Above 55 and no medical needs
              } else if (info.hasMedicalCondition) {
                return 1232.88; // Below 55 and has medical needs
              } else {
                return 0; // Below 55 and no medical needs
              }
            },// No additional credits in this bracket
          },
          {
            from: 3945.22,
            to: 8219.18, // Use numeric Infinity for comparisons
            rate: 0.35,
            deduct: 410.96,
            additionalCredits: (info: TaxPayerInfo) => {
              if (info.age > 55 && info.hasMedicalCondition) {
                return 1479.45; // Above 55 and has medical needs
              } else if (info.age > 55) {
                return 1232.88; // Above 55 and no medical needs
              } else if (info.hasMedicalCondition) {
                return 1232.88; // Below 55 and has medical needs
              } else {
                return 0; // Below 55 and no medical needs
              }
            },
          },
          {
          from: 8219.19,
          to: Infinity, // Use numeric Infinity for comparisons
          rate: 0.4,
          deduct: 821.92,
          additionalCredits: (info: TaxPayerInfo) => {
            if (info.age > 55 && info.hasMedicalCondition) {
              return 1479.45; // Above 55 and has medical needs
            } else if (info.age > 55) {
              return 1232.88; // Above 55 and no medical needs
            } else if (info.hasMedicalCondition) {
              return 1232.88; // Below 55 and has medical needs
            } else {
              return 0; // Below 55 and no medical needs
            }
          },
        },
        ],
        weekly: [
          {
            from: 0,
            to: 2307.69,
            rate: 0.0,
            deduct: 0,
            additionalCredits: (info: TaxPayerInfo) => {
              if (info.age > 55 && info.hasMedicalCondition) {
                return 10384.62; // Above 55 and has medical needs
              } else if (info.age > 55) {
                return 8653.85; // Above 55 and no medical needs
              } else if (info.hasMedicalCondition) {
                return 8653.85; // Below 55 and has medical needs
              } else {
                return 0; // Below 55 and no medical needs
              }
            },
          },
          {
            from: 2307.70,
            to: 6923.08,
            rate: 0.2,
            deduct: 461.54,
            additionalCredits: (info: TaxPayerInfo) => {
              if (info.age > 55 && info.hasMedicalCondition) {
                return 10384.62; // Above 55 and has medical needs
              } else if (info.age > 55) {
                return 8653.85; // Above 55 and no medical needs
              } else if (info.hasMedicalCondition) {
                return 8653.85; // Below 55 and has medical needs
              } else {
                return 0; // Below 55 and no medical needs
              }
            },
          },
          {
            from: 6923.09,
            to: 13846.15,
            rate: 0.25,
            deduct: 807.69,
            additionalCredits: (info: TaxPayerInfo) => {
              if (info.age > 55 && info.hasMedicalCondition) {
                return 10384.62; // Above 55 and has medical needs
              } else if (info.age > 55) {
                return 8653.85; // Above 55 and no medical needs
              } else if (info.hasMedicalCondition) {
                return 8653.85; // Below 55 and has medical needs
              } else {
                return 0; // Below 55 and no medical needs
              }
            },
          },
          {
            from: 13846.16,
            to: 27692.31,
            rate: 0.3,
            deduct: 1500.00,
            additionalCredits: (info: TaxPayerInfo) => {
              if (info.age > 55 && info.hasMedicalCondition) {
                return 10384.62; // Above 55 and has medical needs
              } else if (info.age > 55) {
                return 8653.85; // Above 55 and no medical needs
              } else if (info.hasMedicalCondition) {
                return 8653.85; // Below 55 and has medical needs
              } else {
                return 0; // Below 55 and no medical needs
              }
            },// No additional credits in this bracket
          },
          {
            from: 27692.32,
            to: 57692.31, // Use numeric Infinity for comparisons
            rate: 0.35,
            deduct: 2884.62,
            additionalCredits: (info: TaxPayerInfo) => {
              if (info.age > 55 && info.hasMedicalCondition) {
                return 10384.62; // Above 55 and has medical needs
              } else if (info.age > 55) {
                return 8653.85; // Above 55 and no medical needs
              } else if (info.hasMedicalCondition) {
                return 8653.85; // Below 55 and has medical needs
              } else {
                return 0; // Below 55 and no medical needs
              }
            },
          },
          {
          from: 57692.32,
          to: Infinity, // Use numeric Infinity for comparisons
          rate: 0.4,
          deduct: 5769.23,
          additionalCredits: (info: TaxPayerInfo) => {
            if (info.age > 55 && info.hasMedicalCondition) {
              return 10384.62; // Above 55 and has medical needs
            } else if (info.age > 55) {
              return 8653.85; // Above 55 and no medical needs
            } else if (info.hasMedicalCondition) {
              return 8653.85; // Below 55 and has medical needs
            } else {
              return 0; // Below 55 and no medical needs
            }
          },
        },
        ],
        monthly: [
          {
            from: 0,
            to: 10000.00,
            rate: 0.0,
            deduct: 0,
            additionalCredits: (info: TaxPayerInfo) => {
              if (info.age > 55 && info.hasMedicalCondition) {
                return 45000; // Above 55 and has medical needs
              } else if (info.age > 55) {
                return 37500; // Above 55 and no medical needs
              } else if (info.hasMedicalCondition) {
                return 37500; // Below 55 and has medical needs
              } else {
                return 0; // Below 55 and no medical needs
              }
            },
          },
          {
            from: 10000.01,
            to: 30000.00,
            rate: 0.2,
            deduct: 2000.00,
            additionalCredits: (info: TaxPayerInfo) => {
              if (info.age > 55 && info.hasMedicalCondition) {
                return 45000; // Above 55 and has medical needs
              } else if (info.age > 55) {
                return 37500; // Above 55 and no medical needs
              } else if (info.hasMedicalCondition) {
                return 37500; // Below 55 and has medical needs
              } else {
                return 0; // Below 55 and no medical needs
              }
            },
          },
          {
            from: 30000.01,
            to: 60000,
            rate: 0.25,
            deduct: 3500.00,
            additionalCredits: (info: TaxPayerInfo) => {
              if (info.age > 55 && info.hasMedicalCondition) {
                return 45000; // Above 55 and has medical needs
              } else if (info.age > 55) {
                return 37500; // Above 55 and no medical needs
              } else if (info.hasMedicalCondition) {
                return 37500; // Below 55 and has medical needs
              } else {
                return 0; // Below 55 and no medical needs
              }
            },
          },
          {
            from: 60000.01,
            to: 120000,
            rate: 0.3,
            deduct: 6500,
            additionalCredits: (info: TaxPayerInfo) => {
              if (info.age > 55 && info.hasMedicalCondition) {
                return 45000; // Above 55 and has medical needs
              } else if (info.age > 55) {
                return 37500; // Above 55 and no medical needs
              } else if (info.hasMedicalCondition) {
                return 37500; // Below 55 and has medical needs
              } else {
                return 0; // Below 55 and no medical needs
              }
            },
          },
          {
            from: 120000.01,
            to: 250000, // Use numeric Infinity for comparisons
            rate: 0.35,
            deduct: 12500,
            additionalCredits: (info: TaxPayerInfo) => {
              if (info.age > 55 && info.hasMedicalCondition) {
                return 45000; // Above 55 and has medical needs
              } else if (info.age > 55) {
                return 37500; // Above 55 and no medical needs
              } else if (info.hasMedicalCondition) {
                return 37500; // Below 55 and has medical needs
              } else {
                return 0; // Below 55 and no medical needs
              }
            },
          },
          {
          from: 250000.01,
          to: Infinity, // Use numeric Infinity for comparisons
          rate: 0.4,
          deduct: 25000,
          additionalCredits: (info: TaxPayerInfo) => {
            if (info.age > 55 && info.hasMedicalCondition) {
              return 45000; // Above 55 and has medical needs
            } else if (info.age > 55) {
              return 37500; // Above 55 and no medical needs
            } else if (info.hasMedicalCondition) {
              return 37500; // Below 55 and has medical needs
            } else {
              return 0; // Below 55 and no medical needs
            }
          },
        },
        ],
        yearly: [
          {
            from: 0,
            to: 120000,
            rate: 0.0,
            deduct: 0,
            additionalCredits: (info: TaxPayerInfo) => {
              if (info.age > 55 && info.hasMedicalCondition) {
                return 540000; // Above 55 and has medical needs
              } else if (info.age > 55) {
                return 450000; // Above 55 and no medical needs
              } else if (info.hasMedicalCondition) {
                return 450000; // Below 55 and has medical needs
              } else {
                return 0; // Below 55 and no medical needs
              }
            },
          },
          {
            from: 120001,
            to: 360000,
            rate: 0.2,
            deduct: 24000,
            additionalCredits: (info: TaxPayerInfo) => {
              if (info.age > 55 && info.hasMedicalCondition) {
                return 540000; // Above 55 and has medical needs
              } else if (info.age > 55) {
                return 450000; // Above 55 and no medical needs
              } else if (info.hasMedicalCondition) {
                return 450000; // Below 55 and has medical needs
              } else {
                return 0; // Below 55 and no medical needs
              }
            },
          },
          {
            from: 360001,
            to: 720000,
            rate: 0.25,
            deduct: 42000,
            additionalCredits: (info: TaxPayerInfo) => {
              if (info.age > 55 && info.hasMedicalCondition) {
                return 540000; // Above 55 and has medical needs
              } else if (info.age > 55) {
                return 450000; // Above 55 and no medical needs
              } else if (info.hasMedicalCondition) {
                return 450000; // Below 55 and has medical needs
              } else {
                return 0; // Below 55 and no medical needs
              }
            },
          },
          {
            from: 720001,
            to: 1440000,
            rate: 0.3,
            deduct: 78000,
            additionalCredits: (info: TaxPayerInfo) => {
              if (info.age > 55 && info.hasMedicalCondition) {
                return 540000; // Above 55 and has medical needs
              } else if (info.age > 55) {
                return 450000; // Above 55 and no medical needs
              } else if (info.hasMedicalCondition) {
                return 450000; // Below 55 and has medical needs
              } else {
                return 0; // Below 55 and no medical needs
              }
            },
          },
          {
            from: 1440001,
            to: 3000000, // Use numeric Infinity for comparisons
            rate: 0.35,
            deduct: 150000,
            additionalCredits: (info: TaxPayerInfo) => {
              if (info.age > 55 && info.hasMedicalCondition) {
                return 540000; // Above 55 and has medical needs
              } else if (info.age > 55) {
                return 450000; // Above 55 and no medical needs
              } else if (info.hasMedicalCondition) {
                return 450000; // Below 55 and has medical needs
              } else {
                return 0; // Below 55 and no medical needs
              }
            },
          },
          {
          from: 3000001,
          to: Infinity, // Use numeric Infinity for comparisons
          rate: 0.4,
          deduct: 300000,
          additionalCredits: (info: TaxPayerInfo) => {
            if (info.age > 55 && info.hasMedicalCondition) {
              return 540000; // Above 55 and has medical needs
            } else if (info.age > 55) {
              return 450000; // Above 55 and no medical needs
            } else if (info.hasMedicalCondition) {
              return 450000; // Below 55 and has medical needs
            } else {
              return 0; // Below 55 and no medical needs
            }
          },
        },
        ],
        // Define ZWL brackets similarly, possibly with different rates/deductions
      },
    },
  }

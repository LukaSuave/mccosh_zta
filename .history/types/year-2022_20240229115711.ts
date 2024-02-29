import { TaxPayerInfo } from "./income";

export const year2022 = {
    year: 2022,
    currencies: {
      USD: {
        daily: [
          {
            from: 0,
            to: 3.29,
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
            from: 3.3,
            to: 9.86,
            rate: 0.2,
            deduct: 0.66,
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
            deduct: 1.15,
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
            deduct: 2.79,
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
            deduct: 6.08,
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
          deduct: 11.01,
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
            to: 23.08,
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
            from: 23.09,
            to: 69.23,
            rate: 0.2,
            deduct: 4.62,
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
            deduct: 8.08,
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
            deduct: 19.62,
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
            deduct: 42.69,
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
          deduct: 77.31,
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
            to: 100,
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
            from: 100.01,
            to: 300,
            rate: 0.2,
            deduct: 20,
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
            deduct: 35,
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
            deduct: 85,
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
            deduct: 185,
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
          deduct: 335,
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
            to: 1200,
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
            from: 1200.01,
            to: 3600,
            rate: 0.2,
            deduct: 240,
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
            from: 3600.01,
            to: 12000,
            rate: 0.25,
            deduct: 420,
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
            from: 12000.01,
            to: 24000,
            rate: 0.3,
            deduct: 1020,
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
            from: 24000.01,
            to: 36000, // Use numeric Infinity for comparisons
            rate: 0.35,
            deduct: 2220,
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
          from: 36000.01,
          to: Infinity, // Use numeric Infinity for comparisons
          rate: 0.4,
          deduct: 4020,
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
            to: 825.47,
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
            from: 825.48,
            to: 2806.60,
            rate: 0.2,
            deduct: 165.09,
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
            from: 2806.61,
            to: 6202.83,
            rate: 0.25,
            deduct: 305.42,
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
            from: 6202.84,
            to: 12995.28,
            rate: 0.3,
            deduct: 615.57,
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
            from: 12995.29,
            to: 27712.26, // Use numeric Infinity for comparisons
            rate: 0.35,
            deduct: 1265.33,
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
          from: 27712.27,
          to: Infinity, // Use numeric Infinity for comparisons
          rate: 0.4,
          deduct: 2650.94,
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
            to: 5833.33,
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
            from: 5833.34,
            to: 19833.33,
            rate: 0.2,
            deduct: 1166.67,
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
            from: 19833.34,
            to: 43833.33,
            rate: 0.25,
            deduct: 2158.33,
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
            from: 43833.34,
            to: 91833.33,
            rate: 0.3,
            deduct: 4350.00,
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
            from: 91833.34,
            to: 195833.33, // Use numeric Infinity for comparisons
            rate: 0.35,
            deduct: 8941.67,
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
          from: 195833.34,
          to: Infinity, // Use numeric Infinity for comparisons
          rate: 0.4,
          deduct: 18733.33,
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
            to: 25000.00,
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
            from: 25000.01,
            to: 85000.00,
            rate: 0.2,
            deduct: 5000.00,
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
            from: 85000.01,
            to: 187857.14,
            rate: 0.25,
            deduct: 9250.00,
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
            from: 187857.15,
            to: 393571.43,
            rate: 0.3,
            deduct: 18642.86,
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
            from: 393571.44,
            to: 839285.71, // Use numeric Infinity for comparisons
            rate: 0.35,
            deduct: 38321.43,
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
          from: 839285.72,
          to: Infinity, // Use numeric Infinity for comparisons
          rate: 0.4,
          deduct: 80285.71,
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
            to: 175000,
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
            from: 175000.01,
            to: 595000,
            rate: 0.2,
            deduct: 35000,
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
            from: 595000.01,
            to: 1315000,
            rate: 0.25,
            deduct: 64750,
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
            from: 1315000.01,
            to: 2755000,
            rate: 0.3,
            deduct: 130500,
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
            from: 2755000.01,
            to: 5875000, // Use numeric Infinity for comparisons
            rate: 0.35,
            deduct: 268250,
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
          from: 5875000.01,
          to: Infinity, // Use numeric Infinity for comparisons
          rate: 0.4,
          deduct: 562000,
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

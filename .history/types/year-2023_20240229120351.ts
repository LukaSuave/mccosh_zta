import { TaxPayerInfo, TaxYear } from "./income";

export const year2023: TaxYear = {
    year: 2023,
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
            to: 3013.7,
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
            from: 3013.71,
            to: 10520.55,
            rate: 0.2,
            deduct: 602.74,
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
            from: 10520.56,
            to: 18016.44,
            rate: 0.25,
            deduct: 1128.77,
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
            from: 18016.45,
            to: 25512.33,
            rate: 0.3,
            deduct: 2029.59,
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
            from: 25512.34,
            to: 32876.71, // Use numeric Infinity for comparisons
            rate: 0.35,
            deduct: 3305.21,
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
          from: 32876.72,
          to: Infinity, // Use numeric Infinity for comparisons
          rate: 0.4,
          deduct: 4949.04,
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
            to: 21153.85,
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
            from: 21153.86,
            to: 73846.15,
            rate: 0.2,
            deduct: 4230.77,
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
            from: 73846.16,
            to: 126461.54,
            rate: 0.25,
            deduct: 7923.08,
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
            from: 126461.55,
            to: 179076.92,
            rate: 0.3,
            deduct: 14246.15,
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
            from: 179076.93,
            to: 230769.23, // Use numeric Infinity for comparisons
            rate: 0.35,
            deduct: 23200,
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
          from: 230769.24,
          to: Infinity, // Use numeric Infinity for comparisons
          rate: 0.4,
          deduct: 34738.46,
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
            to: 91666.67,
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
            from: 91666.68,
            to: 320000,
            rate: 0.2,
            deduct: 18333.33,
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
            from: 320000.01,
            to: 548000,
            rate: 0.25,
            deduct: 34333.33,
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
            from: 548000.01,
            to: 776000,
            rate: 0.3,
            deduct: 61733.33,
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
            from: 776000.01,
            to: 1000000, // Use numeric Infinity for comparisons
            rate: 0.35,
            deduct: 100533.33,
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
          from: 1000000.01,
          to: Infinity, // Use numeric Infinity for comparisons
          rate: 0.4,
          deduct: 150533.33,
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
            to: 1100000,
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
            from: 1100000.01,
            to: 3840000,
            rate: 0.2,
            deduct: 220000,
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
            from: 3840000.01,
            to: 6576000,
            rate: 0.25,
            deduct: 412000,
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
            from: 6576000.01,
            to: 9312000,
            rate: 0.3,
            deduct: 740800,
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
            from: 9312000.01,
            to: 12000000, // Use numeric Infinity for comparisons
            rate: 0.35,
            deduct: 1206400,
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
          from: 12000000.01,
          to: Infinity, // Use numeric Infinity for comparisons
          rate: 0.4,
          deduct: 1806400,
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
  };
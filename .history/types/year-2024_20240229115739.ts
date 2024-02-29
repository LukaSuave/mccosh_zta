import { TaxPayerInfo } from "./income";

export const year2024 = {
    year: 2024,
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
            to: 24590.16,
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
            from: 24590.17,
            to: 73770.49,
            rate: 0.2,
            deduct: 4918.03,
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
            from: 73770.50,
            to: 245901.64,
            rate: 0.25,
            deduct: 8606.56,
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
            from: 245901.65,
            to: 491803.28,
            rate: 0.3,
            deduct: 20901.64,
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
            from: 491803.29,
            to: 737704.92, // Use numeric Infinity for comparisons
            rate: 0.35,
            deduct: 45491.80,
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
          from: 737704.93,
          to: Infinity, // Use numeric Infinity for comparisons
          rate: 0.4,
          deduct: 82377.05,
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
            to: 173076.92,
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
            from: 173076.93,
            to: 519230.77,
            rate: 0.2,
            deduct: 34615.38,
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
            from: 519230.78,
            to: 1730769.23,
            rate: 0.25,
            deduct: 60576.92,
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
            from: 1730769.24,
            to: 3461538.46,
            rate: 0.3,
            deduct: 147115.38,
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
            from: 3461538.47,
            to: 5192307.69, // Use numeric Infinity for comparisons
            rate: 0.35,
            deduct: 320192.31,
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
          from: 5192307.70,
          to: Infinity, // Use numeric Infinity for comparisons
          rate: 0.4,
          deduct: 579807.69,
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
            to: 750000,
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
            from: 750000.01,
            to: 2250000,
            rate: 0.2,
            deduct: 150000,
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
            from: 2250000.01,
            to: 7500000,
            rate: 0.25,
            deduct: 262500,
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
            from: 7500000.01,
            to: 15000000,
            rate: 0.3,
            deduct: 637500,
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
            from: 15000000.01,
            to: 22500000, // Use numeric Infinity for comparisons
            rate: 0.35,
            deduct: 1387500,
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
          from: 22500000.01,
          to: Infinity, // Use numeric Infinity for comparisons
          rate: 0.4,
          deduct: 2512500,
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
            to: 9000000,
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
            from: 9000000.01,
            to: 27000000,
            rate: 0.2,
            deduct: 1800000,
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
            from: 27000000.01,
            to: 90000000,
            rate: 0.25,
            deduct: 3150000,
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
            from: 90000000.01,
            to: 180000000,
            rate: 0.3,
            deduct: 7650000,
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
            from: 180000000.01,
            to: 270000000, // Use numeric Infinity for comparisons
            rate: 0.35,
            deduct: 16650000,
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
          from: 270000000.01,
          to: Infinity, // Use numeric Infinity for comparisons
          rate: 0.4,
          deduct: 30150000,
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
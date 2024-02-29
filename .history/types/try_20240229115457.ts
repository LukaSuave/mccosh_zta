// {
//     year: 2021,
//     currencies: {
//       USD: {
//         daily: [
//           {
//             from: 0,
//             to: 2.30,
//             rate: 0.0,
//             deduct: 0,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 2.96; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 2.47; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 2.47; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 2.31,
//             to: 9.86,
//             rate: 0.2,
//             deduct: 0.46,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 2.96; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 2.47; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 2.47; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 9.87,
//             to: 32.88,
//             rate: 0.25,
//             deduct: 0.95,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 2.96; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 2.47; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 2.47; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 32.89,
//             to: 65.75,
//             rate: 0.3,
//             deduct: 2.6,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 2.96; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 2.47; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 2.47; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },// No additional credits in this bracket
//           },
//           {
//             from: 65.76,
//             to: 98.63, // Use numeric Infinity for comparisons
//             rate: 0.35,
//             deduct: 5.88,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 2.96; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 2.47; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 2.47; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//           from: 98.64,
//           to: Infinity, // Use numeric Infinity for comparisons
//           rate: 0.4,
//           deduct: 10.82,
//           additionalCredits: (info: TaxPayerInfo) => {
//             if (info.age > 55 && info.hasMedicalCondition) {
//               return 2.96; // Above 55 and has medical needs
//             } else if (info.age > 55) {
//               return 2.47; // Above 55 and no medical needs
//             } else if (info.hasMedicalCondition) {
//               return 2.47; // Below 55 and has medical needs
//             } else {
//               return 0; // Below 55 and no medical needs
//             }
//           },
//         },
//         ],
//         weekly: [
//           {
//             from: 0,
//             to: 16.15,
//             rate: 0.0,
//             deduct: 0,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 20.77; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 17.21; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 17.31; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 16.16,
//             to: 69.23,
//             rate: 0.2,
//             deduct: 3.23,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 20.77; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 17.21; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 17.31; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 69.24,
//             to: 230.77,
//             rate: 0.25,
//             deduct: 6.69,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 20.77; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 17.21; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 17.31; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 230.78,
//             to: 461.54,
//             rate: 0.3,
//             deduct: 18.23,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 20.77; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 17.21; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 17.31; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },// No additional credits in this bracket
//           },
//           {
//             from: 461.55,
//             to: 692.31, // Use numeric Infinity for comparisons
//             rate: 0.35,
//             deduct: 41.31,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 20.77; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 17.21; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 17.31; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//           from: 692.32,
//           to: Infinity, // Use numeric Infinity for comparisons
//           rate: 0.4,
//           deduct: 75.92,
//           additionalCredits: (info: TaxPayerInfo) => {
//             if (info.age > 55 && info.hasMedicalCondition) {
//               return 20.77; // Above 55 and has medical needs
//             } else if (info.age > 55) {
//               return 17.21; // Above 55 and no medical needs
//             } else if (info.hasMedicalCondition) {
//               return 17.31; // Below 55 and has medical needs
//             } else {
//               return 0; // Below 55 and no medical needs
//             }
//           },
//         },
//         ],
//         monthly: [
//           {
//             from: 0,
//             to: 70,
//             rate: 0.0,
//             deduct: 0,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 90; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 75; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 75; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 70.01,
//             to: 300,
//             rate: 0.2,
//             deduct: 14,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 90; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 75; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 75; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 300.01,
//             to: 1000,
//             rate: 0.25,
//             deduct: 29,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 90; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 75; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 75; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 1000.01,
//             to: 2000,
//             rate: 0.3,
//             deduct: 79,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 90; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 75; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 75; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             }, // No additional credits in this bracket
//           },
//           {
//             from: 2000.01,
//             to: 3000, // Use numeric Infinity for comparisons
//             rate: 0.35,
//             deduct: 179,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 90; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 75; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 75; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//           from: 3000.01,
//           to: Infinity, // Use numeric Infinity for comparisons
//           rate: 0.4,
//           deduct: 329,
//           additionalCredits: (info: TaxPayerInfo) => {
//             if (info.age > 55 && info.hasMedicalCondition) {
//               return 90; // Above 55 and has medical needs
//             } else if (info.age > 55) {
//               return 75; // Above 55 and no medical needs
//             } else if (info.hasMedicalCondition) {
//               return 75; // Below 55 and has medical needs
//             } else {
//               return 0; // Below 55 and no medical needs
//             }
//           },
//         },
//         ], 
//         yearly: [
//           {
//             from: 0,
//             to: 840,
//             rate: 0.0,
//             deduct: 0,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 1080; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 90; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 90; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 841,
//             to: 3600,
//             rate: 0.2,
//             deduct: 168,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 1080; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 90; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 90; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 3601,
//             to: 12000,
//             rate: 0.25,
//             deduct: 348,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 1080; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 90; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 90; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 12001,
//             to: 24000,
//             rate: 0.3,
//             deduct: 948,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 1080; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 90; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 90; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },// No additional credits in this bracket
//           },
//           {
//             from: 24001,
//             to: 36000, // Use numeric Infinity for comparisons
//             rate: 0.35,
//             deduct: 2148,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 1080; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 90; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 90; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//           from: 36001,
//           to: Infinity, // Use numeric Infinity for comparisons
//           rate: 0.4,
//           deduct: 3948,
//           additionalCredits: (info: TaxPayerInfo) => {
//             if (info.age > 55 && info.hasMedicalCondition) {
//               return 1080; // Above 55 and has medical needs
//             } else if (info.age > 55) {
//               return 90; // Above 55 and no medical needs
//             } else if (info.hasMedicalCondition) {
//               return 90; // Below 55 and has medical needs
//             } else {
//               return 0; // Below 55 and no medical needs
//             }
//           },
//         },
//         ],
//       },
//       ZWL: {
//         daily: [
//           {
//             from: 0,
//             to: 328.77,
//             rate: 0.0,
//             deduct: 0,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 1479.45; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 1232.88; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 1232.88; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 328.78,
//             to: 986.30,
//             rate: 0.2,
//             deduct: 65.75,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 1479.45; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 1232.88; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 1232.88; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 986.31,
//             to: 1972.60,
//             rate: 0.25,
//             deduct: 115.07,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 1479.45; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 1232.88; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 1232.88; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 1972.61,
//             to: 3945.21,
//             rate: 0.3,
//             deduct: 213.70,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 1479.45; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 1232.88; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 1232.88; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },// No additional credits in this bracket
//           },
//           {
//             from: 3945.22,
//             to: 8219.18, // Use numeric Infinity for comparisons
//             rate: 0.35,
//             deduct: 410.96,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 1479.45; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 1232.88; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 1232.88; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//           from: 8219.19,
//           to: Infinity, // Use numeric Infinity for comparisons
//           rate: 0.4,
//           deduct: 821.92,
//           additionalCredits: (info: TaxPayerInfo) => {
//             if (info.age > 55 && info.hasMedicalCondition) {
//               return 1479.45; // Above 55 and has medical needs
//             } else if (info.age > 55) {
//               return 1232.88; // Above 55 and no medical needs
//             } else if (info.hasMedicalCondition) {
//               return 1232.88; // Below 55 and has medical needs
//             } else {
//               return 0; // Below 55 and no medical needs
//             }
//           },
//         },
//         ],
//         weekly: [
//           {
//             from: 0,
//             to: 2307.69,
//             rate: 0.0,
//             deduct: 0,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 10384.62; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 8653.85; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 8653.85; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 2307.70,
//             to: 6923.08,
//             rate: 0.2,
//             deduct: 461.54,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 10384.62; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 8653.85; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 8653.85; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 6923.09,
//             to: 13846.15,
//             rate: 0.25,
//             deduct: 807.69,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 10384.62; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 8653.85; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 8653.85; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 13846.16,
//             to: 27692.31,
//             rate: 0.3,
//             deduct: 1500.00,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 10384.62; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 8653.85; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 8653.85; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },// No additional credits in this bracket
//           },
//           {
//             from: 27692.32,
//             to: 57692.31, // Use numeric Infinity for comparisons
//             rate: 0.35,
//             deduct: 2884.62,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 10384.62; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 8653.85; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 8653.85; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//           from: 57692.32,
//           to: Infinity, // Use numeric Infinity for comparisons
//           rate: 0.4,
//           deduct: 5769.23,
//           additionalCredits: (info: TaxPayerInfo) => {
//             if (info.age > 55 && info.hasMedicalCondition) {
//               return 10384.62; // Above 55 and has medical needs
//             } else if (info.age > 55) {
//               return 8653.85; // Above 55 and no medical needs
//             } else if (info.hasMedicalCondition) {
//               return 8653.85; // Below 55 and has medical needs
//             } else {
//               return 0; // Below 55 and no medical needs
//             }
//           },
//         },
//         ],
//         monthly: [
//           {
//             from: 0,
//             to: 10000.00,
//             rate: 0.0,
//             deduct: 0,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 45000; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 37500; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 37500; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 10000.01,
//             to: 30000.00,
//             rate: 0.2,
//             deduct: 2000.00,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 45000; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 37500; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 37500; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 30000.01,
//             to: 60000,
//             rate: 0.25,
//             deduct: 3500.00,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 45000; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 37500; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 37500; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 60000.01,
//             to: 120000,
//             rate: 0.3,
//             deduct: 6500,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 45000; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 37500; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 37500; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 120000.01,
//             to: 250000, // Use numeric Infinity for comparisons
//             rate: 0.35,
//             deduct: 12500,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 45000; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 37500; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 37500; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//           from: 250000.01,
//           to: Infinity, // Use numeric Infinity for comparisons
//           rate: 0.4,
//           deduct: 25000,
//           additionalCredits: (info: TaxPayerInfo) => {
//             if (info.age > 55 && info.hasMedicalCondition) {
//               return 45000; // Above 55 and has medical needs
//             } else if (info.age > 55) {
//               return 37500; // Above 55 and no medical needs
//             } else if (info.hasMedicalCondition) {
//               return 37500; // Below 55 and has medical needs
//             } else {
//               return 0; // Below 55 and no medical needs
//             }
//           },
//         },
//         ],
//         yearly: [
//           {
//             from: 0,
//             to: 120000,
//             rate: 0.0,
//             deduct: 0,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 540000; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 450000; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 450000; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 120001,
//             to: 360000,
//             rate: 0.2,
//             deduct: 24000,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 540000; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 450000; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 450000; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 360001,
//             to: 720000,
//             rate: 0.25,
//             deduct: 42000,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 540000; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 450000; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 450000; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 720001,
//             to: 1440000,
//             rate: 0.3,
//             deduct: 78000,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 540000; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 450000; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 450000; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 1440001,
//             to: 3000000, // Use numeric Infinity for comparisons
//             rate: 0.35,
//             deduct: 150000,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 540000; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 450000; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 450000; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//           from: 3000001,
//           to: Infinity, // Use numeric Infinity for comparisons
//           rate: 0.4,
//           deduct: 300000,
//           additionalCredits: (info: TaxPayerInfo) => {
//             if (info.age > 55 && info.hasMedicalCondition) {
//               return 540000; // Above 55 and has medical needs
//             } else if (info.age > 55) {
//               return 450000; // Above 55 and no medical needs
//             } else if (info.hasMedicalCondition) {
//               return 450000; // Below 55 and has medical needs
//             } else {
//               return 0; // Below 55 and no medical needs
//             }
//           },
//         },
//         ],
//         // Define ZWL brackets similarly, possibly with different rates/deductions
//       },
//     },
//   },
//   {
//     year: 2022,
//     currencies: {
//       USD: {
//         daily: [
//           {
//             from: 0,
//             to: 3.29,
//             rate: 0.0,
//             deduct: 0,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 2.96; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 2.47; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 2.47; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 3.3,
//             to: 9.86,
//             rate: 0.2,
//             deduct: 0.66,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 2.96; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 2.47; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 2.47; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 9.87,
//             to: 32.88,
//             rate: 0.25,
//             deduct: 1.15,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 2.96; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 2.47; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 2.47; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 32.89,
//             to: 65.75,
//             rate: 0.3,
//             deduct: 2.79,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 2.96; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 2.47; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 2.47; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },// No additional credits in this bracket
//           },
//           {
//             from: 65.76,
//             to: 98.63, // Use numeric Infinity for comparisons
//             rate: 0.35,
//             deduct: 6.08,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 2.96; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 2.47; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 2.47; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//           from: 98.64,
//           to: Infinity, // Use numeric Infinity for comparisons
//           rate: 0.4,
//           deduct: 11.01,
//           additionalCredits: (info: TaxPayerInfo) => {
//             if (info.age > 55 && info.hasMedicalCondition) {
//               return 2.96; // Above 55 and has medical needs
//             } else if (info.age > 55) {
//               return 2.47; // Above 55 and no medical needs
//             } else if (info.hasMedicalCondition) {
//               return 2.47; // Below 55 and has medical needs
//             } else {
//               return 0; // Below 55 and no medical needs
//             }
//           },
//         },
//         ],
//         weekly: [
//           {
//             from: 0,
//             to: 23.08,
//             rate: 0.0,
//             deduct: 0,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 20.77; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 17.21; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 17.31; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 23.09,
//             to: 69.23,
//             rate: 0.2,
//             deduct: 4.62,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 20.77; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 17.21; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 17.31; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 69.24,
//             to: 230.77,
//             rate: 0.25,
//             deduct: 8.08,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 20.77; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 17.21; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 17.31; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 230.78,
//             to: 461.54,
//             rate: 0.3,
//             deduct: 19.62,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 20.77; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 17.21; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 17.31; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },// No additional credits in this bracket
//           },
//           {
//             from: 461.55,
//             to: 692.31, // Use numeric Infinity for comparisons
//             rate: 0.35,
//             deduct: 42.69,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 20.77; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 17.21; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 17.31; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//           from: 692.32,
//           to: Infinity, // Use numeric Infinity for comparisons
//           rate: 0.4,
//           deduct: 77.31,
//           additionalCredits: (info: TaxPayerInfo) => {
//             if (info.age > 55 && info.hasMedicalCondition) {
//               return 20.77; // Above 55 and has medical needs
//             } else if (info.age > 55) {
//               return 17.21; // Above 55 and no medical needs
//             } else if (info.hasMedicalCondition) {
//               return 17.31; // Below 55 and has medical needs
//             } else {
//               return 0; // Below 55 and no medical needs
//             }
//           },
//         },
//         ],
//         monthly: [
//           {
//             from: 0,
//             to: 100,
//             rate: 0.0,
//             deduct: 0,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 90; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 75; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 75; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 100.01,
//             to: 300,
//             rate: 0.2,
//             deduct: 20,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 90; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 75; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 75; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 300.01,
//             to: 1000,
//             rate: 0.25,
//             deduct: 35,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 90; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 75; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 75; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 1000.01,
//             to: 2000,
//             rate: 0.3,
//             deduct: 85,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 90; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 75; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 75; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             }, // No additional credits in this bracket
//           },
//           {
//             from: 2000.01,
//             to: 3000, // Use numeric Infinity for comparisons
//             rate: 0.35,
//             deduct: 185,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 90; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 75; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 75; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//           from: 3000.01,
//           to: Infinity, // Use numeric Infinity for comparisons
//           rate: 0.4,
//           deduct: 335,
//           additionalCredits: (info: TaxPayerInfo) => {
//             if (info.age > 55 && info.hasMedicalCondition) {
//               return 90; // Above 55 and has medical needs
//             } else if (info.age > 55) {
//               return 75; // Above 55 and no medical needs
//             } else if (info.hasMedicalCondition) {
//               return 75; // Below 55 and has medical needs
//             } else {
//               return 0; // Below 55 and no medical needs
//             }
//           },
//         },
//         ],
        
//         yearly: [
//           {
//             from: 0,
//             to: 1200,
//             rate: 0.0,
//             deduct: 0,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 1080; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 90; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 90; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 1200.01,
//             to: 3600,
//             rate: 0.2,
//             deduct: 240,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 1080; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 90; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 90; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 3600.01,
//             to: 12000,
//             rate: 0.25,
//             deduct: 420,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 1080; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 90; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 90; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 12000.01,
//             to: 24000,
//             rate: 0.3,
//             deduct: 1020,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 1080; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 90; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 90; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },// No additional credits in this bracket
//           },
//           {
//             from: 24000.01,
//             to: 36000, // Use numeric Infinity for comparisons
//             rate: 0.35,
//             deduct: 2220,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 1080; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 90; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 90; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//           from: 36000.01,
//           to: Infinity, // Use numeric Infinity for comparisons
//           rate: 0.4,
//           deduct: 4020,
//           additionalCredits: (info: TaxPayerInfo) => {
//             if (info.age > 55 && info.hasMedicalCondition) {
//               return 1080; // Above 55 and has medical needs
//             } else if (info.age > 55) {
//               return 90; // Above 55 and no medical needs
//             } else if (info.hasMedicalCondition) {
//               return 90; // Below 55 and has medical needs
//             } else {
//               return 0; // Below 55 and no medical needs
//             }
//           },
//         },
//         ],
//       },
//       ZWL: {
//         daily: [
//           {
//             from: 0,
//             to: 825.47,
//             rate: 0.0,
//             deduct: 0,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 1479.45; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 1232.88; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 1232.88; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 825.48,
//             to: 2806.60,
//             rate: 0.2,
//             deduct: 165.09,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 1479.45; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 1232.88; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 1232.88; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 2806.61,
//             to: 6202.83,
//             rate: 0.25,
//             deduct: 305.42,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 1479.45; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 1232.88; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 1232.88; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 6202.84,
//             to: 12995.28,
//             rate: 0.3,
//             deduct: 615.57,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 1479.45; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 1232.88; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 1232.88; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },// No additional credits in this bracket
//           },
//           {
//             from: 12995.29,
//             to: 27712.26, // Use numeric Infinity for comparisons
//             rate: 0.35,
//             deduct: 1265.33,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 1479.45; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 1232.88; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 1232.88; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//           from: 27712.27,
//           to: Infinity, // Use numeric Infinity for comparisons
//           rate: 0.4,
//           deduct: 2650.94,
//           additionalCredits: (info: TaxPayerInfo) => {
//             if (info.age > 55 && info.hasMedicalCondition) {
//               return 1479.45; // Above 55 and has medical needs
//             } else if (info.age > 55) {
//               return 1232.88; // Above 55 and no medical needs
//             } else if (info.hasMedicalCondition) {
//               return 1232.88; // Below 55 and has medical needs
//             } else {
//               return 0; // Below 55 and no medical needs
//             }
//           },
//         },
//         ],
//         weekly: [
//           {
//             from: 0,
//             to: 5833.33,
//             rate: 0.0,
//             deduct: 0,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 10384.62; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 8653.85; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 8653.85; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 5833.34,
//             to: 19833.33,
//             rate: 0.2,
//             deduct: 1166.67,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 10384.62; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 8653.85; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 8653.85; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 19833.34,
//             to: 43833.33,
//             rate: 0.25,
//             deduct: 2158.33,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 10384.62; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 8653.85; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 8653.85; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 43833.34,
//             to: 91833.33,
//             rate: 0.3,
//             deduct: 4350.00,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 10384.62; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 8653.85; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 8653.85; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },// No additional credits in this bracket
//           },
//           {
//             from: 91833.34,
//             to: 195833.33, // Use numeric Infinity for comparisons
//             rate: 0.35,
//             deduct: 8941.67,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 10384.62; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 8653.85; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 8653.85; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//           from: 195833.34,
//           to: Infinity, // Use numeric Infinity for comparisons
//           rate: 0.4,
//           deduct: 18733.33,
//           additionalCredits: (info: TaxPayerInfo) => {
//             if (info.age > 55 && info.hasMedicalCondition) {
//               return 10384.62; // Above 55 and has medical needs
//             } else if (info.age > 55) {
//               return 8653.85; // Above 55 and no medical needs
//             } else if (info.hasMedicalCondition) {
//               return 8653.85; // Below 55 and has medical needs
//             } else {
//               return 0; // Below 55 and no medical needs
//             }
//           },
//         },
//         ],
//         monthly: [
//           {
//             from: 0,
//             to: 25000.00,
//             rate: 0.0,
//             deduct: 0,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 45000; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 37500; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 37500; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 25000.01,
//             to: 85000.00,
//             rate: 0.2,
//             deduct: 5000.00,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 45000; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 37500; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 37500; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 85000.01,
//             to: 187857.14,
//             rate: 0.25,
//             deduct: 9250.00,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 45000; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 37500; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 37500; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 187857.15,
//             to: 393571.43,
//             rate: 0.3,
//             deduct: 18642.86,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 45000; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 37500; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 37500; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 393571.44,
//             to: 839285.71, // Use numeric Infinity for comparisons
//             rate: 0.35,
//             deduct: 38321.43,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 45000; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 37500; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 37500; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//           from: 839285.72,
//           to: Infinity, // Use numeric Infinity for comparisons
//           rate: 0.4,
//           deduct: 80285.71,
//           additionalCredits: (info: TaxPayerInfo) => {
//             if (info.age > 55 && info.hasMedicalCondition) {
//               return 45000; // Above 55 and has medical needs
//             } else if (info.age > 55) {
//               return 37500; // Above 55 and no medical needs
//             } else if (info.hasMedicalCondition) {
//               return 37500; // Below 55 and has medical needs
//             } else {
//               return 0; // Below 55 and no medical needs
//             }
//           },
//         },
//         ],
//         yearly: [
//           {
//             from: 0,
//             to: 175000,
//             rate: 0.0,
//             deduct: 0,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 540000; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 450000; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 450000; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 175000.01,
//             to: 595000,
//             rate: 0.2,
//             deduct: 35000,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 540000; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 450000; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 450000; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 595000.01,
//             to: 1315000,
//             rate: 0.25,
//             deduct: 64750,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 540000; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 450000; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 450000; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 1315000.01,
//             to: 2755000,
//             rate: 0.3,
//             deduct: 130500,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 540000; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 450000; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 450000; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 2755000.01,
//             to: 5875000, // Use numeric Infinity for comparisons
//             rate: 0.35,
//             deduct: 268250,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 540000; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 450000; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 450000; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//           from: 5875000.01,
//           to: Infinity, // Use numeric Infinity for comparisons
//           rate: 0.4,
//           deduct: 562000,
//           additionalCredits: (info: TaxPayerInfo) => {
//             if (info.age > 55 && info.hasMedicalCondition) {
//               return 540000; // Above 55 and has medical needs
//             } else if (info.age > 55) {
//               return 450000; // Above 55 and no medical needs
//             } else if (info.hasMedicalCondition) {
//               return 450000; // Below 55 and has medical needs
//             } else {
//               return 0; // Below 55 and no medical needs
//             }
//           },
//         },
//         ],
//         // Define ZWL brackets similarly, possibly with different rates/deductions
//       },
//     },
//   },
//   {
//     year: 2023,
//     currencies: {
//       USD: {
//         daily: [
//           {
//             from: 0,
//             to: 3.29,
//             rate: 0.0,
//             deduct: 0,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 2.96; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 2.47; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 2.47; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 3.3,
//             to: 9.86,
//             rate: 0.2,
//             deduct: 0.66,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 2.96; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 2.47; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 2.47; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 9.87,
//             to: 32.88,
//             rate: 0.25,
//             deduct: 1.15,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 2.96; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 2.47; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 2.47; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 32.89,
//             to: 65.75,
//             rate: 0.3,
//             deduct: 2.79,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 2.96; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 2.47; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 2.47; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },// No additional credits in this bracket
//           },
//           {
//             from: 65.76,
//             to: 98.63, // Use numeric Infinity for comparisons
//             rate: 0.35,
//             deduct: 6.08,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 2.96; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 2.47; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 2.47; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//           from: 98.64,
//           to: Infinity, // Use numeric Infinity for comparisons
//           rate: 0.4,
//           deduct: 11.01,
//           additionalCredits: (info: TaxPayerInfo) => {
//             if (info.age > 55 && info.hasMedicalCondition) {
//               return 2.96; // Above 55 and has medical needs
//             } else if (info.age > 55) {
//               return 2.47; // Above 55 and no medical needs
//             } else if (info.hasMedicalCondition) {
//               return 2.47; // Below 55 and has medical needs
//             } else {
//               return 0; // Below 55 and no medical needs
//             }
//           },
//         },
//         ],
//         weekly: [
//           {
//             from: 0,
//             to: 23.08,
//             rate: 0.0,
//             deduct: 0,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 20.77; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 17.21; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 17.31; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 23.09,
//             to: 69.23,
//             rate: 0.2,
//             deduct: 4.62,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 20.77; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 17.21; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 17.31; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 69.24,
//             to: 230.77,
//             rate: 0.25,
//             deduct: 8.08,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 20.77; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 17.21; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 17.31; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 230.78,
//             to: 461.54,
//             rate: 0.3,
//             deduct: 19.62,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 20.77; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 17.21; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 17.31; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },// No additional credits in this bracket
//           },
//           {
//             from: 461.55,
//             to: 692.31, // Use numeric Infinity for comparisons
//             rate: 0.35,
//             deduct: 42.69,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 20.77; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 17.21; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 17.31; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//           from: 692.32,
//           to: Infinity, // Use numeric Infinity for comparisons
//           rate: 0.4,
//           deduct: 77.31,
//           additionalCredits: (info: TaxPayerInfo) => {
//             if (info.age > 55 && info.hasMedicalCondition) {
//               return 20.77; // Above 55 and has medical needs
//             } else if (info.age > 55) {
//               return 17.21; // Above 55 and no medical needs
//             } else if (info.hasMedicalCondition) {
//               return 17.31; // Below 55 and has medical needs
//             } else {
//               return 0; // Below 55 and no medical needs
//             }
//           },
//         },
//         ],
//         monthly: [
//           {
//             from: 0,
//             to: 100,
//             rate: 0.0,
//             deduct: 0,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 90; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 75; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 75; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 100.01,
//             to: 300,
//             rate: 0.2,
//             deduct: 20,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 90; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 75; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 75; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 300.01,
//             to: 1000,
//             rate: 0.25,
//             deduct: 35,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 90; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 75; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 75; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 1000.01,
//             to: 2000,
//             rate: 0.3,
//             deduct: 85,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 90; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 75; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 75; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             }, // No additional credits in this bracket
//           },
//           {
//             from: 2000.01,
//             to: 3000, // Use numeric Infinity for comparisons
//             rate: 0.35,
//             deduct: 185,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 90; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 75; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 75; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//           from: 3000.01,
//           to: Infinity, // Use numeric Infinity for comparisons
//           rate: 0.4,
//           deduct: 335,
//           additionalCredits: (info: TaxPayerInfo) => {
//             if (info.age > 55 && info.hasMedicalCondition) {
//               return 90; // Above 55 and has medical needs
//             } else if (info.age > 55) {
//               return 75; // Above 55 and no medical needs
//             } else if (info.hasMedicalCondition) {
//               return 75; // Below 55 and has medical needs
//             } else {
//               return 0; // Below 55 and no medical needs
//             }
//           },
//         },
//         ],
        
//         yearly: [
//           {
//             from: 0,
//             to: 1200,
//             rate: 0.0,
//             deduct: 0,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 1080; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 90; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 90; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 1200.01,
//             to: 3600,
//             rate: 0.2,
//             deduct: 240,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 1080; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 90; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 90; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 3600.01,
//             to: 12000,
//             rate: 0.25,
//             deduct: 420,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 1080; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 90; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 90; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 12000.01,
//             to: 24000,
//             rate: 0.3,
//             deduct: 1020,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 1080; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 90; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 90; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },// No additional credits in this bracket
//           },
//           {
//             from: 24000.01,
//             to: 36000, // Use numeric Infinity for comparisons
//             rate: 0.35,
//             deduct: 2220,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 1080; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 90; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 90; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//           from: 36000.01,
//           to: Infinity, // Use numeric Infinity for comparisons
//           rate: 0.4,
//           deduct: 4020,
//           additionalCredits: (info: TaxPayerInfo) => {
//             if (info.age > 55 && info.hasMedicalCondition) {
//               return 1080; // Above 55 and has medical needs
//             } else if (info.age > 55) {
//               return 90; // Above 55 and no medical needs
//             } else if (info.hasMedicalCondition) {
//               return 90; // Below 55 and has medical needs
//             } else {
//               return 0; // Below 55 and no medical needs
//             }
//           },
//         },
//         ],
//       },
//       ZWL: {
//         daily: [
//           {
//             from: 0,
//             to: 3013.7,
//             rate: 0.0,
//             deduct: 0,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 1479.45; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 1232.88; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 1232.88; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 3013.71,
//             to: 10520.55,
//             rate: 0.2,
//             deduct: 602.74,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 1479.45; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 1232.88; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 1232.88; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 10520.56,
//             to: 18016.44,
//             rate: 0.25,
//             deduct: 1128.77,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 1479.45; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 1232.88; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 1232.88; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 18016.45,
//             to: 25512.33,
//             rate: 0.3,
//             deduct: 2029.59,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 1479.45; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 1232.88; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 1232.88; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },// No additional credits in this bracket
//           },
//           {
//             from: 25512.34,
//             to: 32876.71, // Use numeric Infinity for comparisons
//             rate: 0.35,
//             deduct: 3305.21,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 1479.45; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 1232.88; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 1232.88; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//           from: 32876.72,
//           to: Infinity, // Use numeric Infinity for comparisons
//           rate: 0.4,
//           deduct: 4949.04,
//           additionalCredits: (info: TaxPayerInfo) => {
//             if (info.age > 55 && info.hasMedicalCondition) {
//               return 1479.45; // Above 55 and has medical needs
//             } else if (info.age > 55) {
//               return 1232.88; // Above 55 and no medical needs
//             } else if (info.hasMedicalCondition) {
//               return 1232.88; // Below 55 and has medical needs
//             } else {
//               return 0; // Below 55 and no medical needs
//             }
//           },
//         },
//         ],
//         weekly: [
//           {
//             from: 0,
//             to: 21153.85,
//             rate: 0.0,
//             deduct: 0,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 10384.62; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 8653.85; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 8653.85; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 21153.86,
//             to: 73846.15,
//             rate: 0.2,
//             deduct: 4230.77,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 10384.62; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 8653.85; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 8653.85; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 73846.16,
//             to: 126461.54,
//             rate: 0.25,
//             deduct: 7923.08,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 10384.62; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 8653.85; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 8653.85; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 126461.55,
//             to: 179076.92,
//             rate: 0.3,
//             deduct: 14246.15,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 10384.62; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 8653.85; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 8653.85; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },// No additional credits in this bracket
//           },
//           {
//             from: 179076.93,
//             to: 230769.23, // Use numeric Infinity for comparisons
//             rate: 0.35,
//             deduct: 23200,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 10384.62; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 8653.85; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 8653.85; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//           from: 230769.24,
//           to: Infinity, // Use numeric Infinity for comparisons
//           rate: 0.4,
//           deduct: 34738.46,
//           additionalCredits: (info: TaxPayerInfo) => {
//             if (info.age > 55 && info.hasMedicalCondition) {
//               return 10384.62; // Above 55 and has medical needs
//             } else if (info.age > 55) {
//               return 8653.85; // Above 55 and no medical needs
//             } else if (info.hasMedicalCondition) {
//               return 8653.85; // Below 55 and has medical needs
//             } else {
//               return 0; // Below 55 and no medical needs
//             }
//           },
//         },
//         ],
//         monthly: [
//           {
//             from: 0,
//             to: 91666.67,
//             rate: 0.0,
//             deduct: 0,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 45000; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 37500; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 37500; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 91666.68,
//             to: 320000,
//             rate: 0.2,
//             deduct: 18333.33,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 45000; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 37500; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 37500; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 320000.01,
//             to: 548000,
//             rate: 0.25,
//             deduct: 34333.33,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 45000; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 37500; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 37500; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 548000.01,
//             to: 776000,
//             rate: 0.3,
//             deduct: 61733.33,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 45000; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 37500; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 37500; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 776000.01,
//             to: 1000000, // Use numeric Infinity for comparisons
//             rate: 0.35,
//             deduct: 100533.33,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 45000; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 37500; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 37500; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//           from: 1000000.01,
//           to: Infinity, // Use numeric Infinity for comparisons
//           rate: 0.4,
//           deduct: 150533.33,
//           additionalCredits: (info: TaxPayerInfo) => {
//             if (info.age > 55 && info.hasMedicalCondition) {
//               return 45000; // Above 55 and has medical needs
//             } else if (info.age > 55) {
//               return 37500; // Above 55 and no medical needs
//             } else if (info.hasMedicalCondition) {
//               return 37500; // Below 55 and has medical needs
//             } else {
//               return 0; // Below 55 and no medical needs
//             }
//           },
//         },
//         ],
//         yearly: [
//           {
//             from: 0,
//             to: 1100000,
//             rate: 0.0,
//             deduct: 0,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 540000; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 450000; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 450000; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 1100000.01,
//             to: 3840000,
//             rate: 0.2,
//             deduct: 220000,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 540000; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 450000; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 450000; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 3840000.01,
//             to: 6576000,
//             rate: 0.25,
//             deduct: 412000,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 540000; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 450000; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 450000; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 6576000.01,
//             to: 9312000,
//             rate: 0.3,
//             deduct: 740800,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 540000; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 450000; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 450000; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 9312000.01,
//             to: 12000000, // Use numeric Infinity for comparisons
//             rate: 0.35,
//             deduct: 1206400,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 540000; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 450000; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 450000; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//           from: 12000000.01,
//           to: Infinity, // Use numeric Infinity for comparisons
//           rate: 0.4,
//           deduct: 1806400,
//           additionalCredits: (info: TaxPayerInfo) => {
//             if (info.age > 55 && info.hasMedicalCondition) {
//               return 540000; // Above 55 and has medical needs
//             } else if (info.age > 55) {
//               return 450000; // Above 55 and no medical needs
//             } else if (info.hasMedicalCondition) {
//               return 450000; // Below 55 and has medical needs
//             } else {
//               return 0; // Below 55 and no medical needs
//             }
//           },
//         },
//         ],
//         // Define ZWL brackets similarly, possibly with different rates/deductions
//       },
//     },
//   },

//   {
//     year: 2024,
//     currencies: {
//       USD: {
//         daily: [
//           {
//             from: 0,
//             to: 3.29,
//             rate: 0.0,
//             deduct: 0,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 2.96; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 2.47; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 2.47; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 3.3,
//             to: 9.86,
//             rate: 0.2,
//             deduct: 0.66,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 2.96; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 2.47; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 2.47; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 9.87,
//             to: 32.88,
//             rate: 0.25,
//             deduct: 1.15,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 2.96; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 2.47; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 2.47; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 32.89,
//             to: 65.75,
//             rate: 0.3,
//             deduct: 2.79,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 2.96; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 2.47; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 2.47; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },// No additional credits in this bracket
//           },
//           {
//             from: 65.76,
//             to: 98.63, // Use numeric Infinity for comparisons
//             rate: 0.35,
//             deduct: 6.08,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 2.96; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 2.47; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 2.47; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//           from: 98.64,
//           to: Infinity, // Use numeric Infinity for comparisons
//           rate: 0.4,
//           deduct: 11.01,
//           additionalCredits: (info: TaxPayerInfo) => {
//             if (info.age > 55 && info.hasMedicalCondition) {
//               return 2.96; // Above 55 and has medical needs
//             } else if (info.age > 55) {
//               return 2.47; // Above 55 and no medical needs
//             } else if (info.hasMedicalCondition) {
//               return 2.47; // Below 55 and has medical needs
//             } else {
//               return 0; // Below 55 and no medical needs
//             }
//           },
//         },
//         ],
//         weekly: [
//           {
//             from: 0,
//             to: 23.08,
//             rate: 0.0,
//             deduct: 0,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 20.77; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 17.21; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 17.31; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 23.09,
//             to: 69.23,
//             rate: 0.2,
//             deduct: 4.62,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 20.77; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 17.21; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 17.31; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 69.24,
//             to: 230.77,
//             rate: 0.25,
//             deduct: 8.08,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 20.77; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 17.21; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 17.31; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 230.78,
//             to: 461.54,
//             rate: 0.3,
//             deduct: 19.62,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 20.77; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 17.21; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 17.31; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },// No additional credits in this bracket
//           },
//           {
//             from: 461.55,
//             to: 692.31, // Use numeric Infinity for comparisons
//             rate: 0.35,
//             deduct: 42.69,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 20.77; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 17.21; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 17.31; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//           from: 692.32,
//           to: Infinity, // Use numeric Infinity for comparisons
//           rate: 0.4,
//           deduct: 77.31,
//           additionalCredits: (info: TaxPayerInfo) => {
//             if (info.age > 55 && info.hasMedicalCondition) {
//               return 20.77; // Above 55 and has medical needs
//             } else if (info.age > 55) {
//               return 17.21; // Above 55 and no medical needs
//             } else if (info.hasMedicalCondition) {
//               return 17.31; // Below 55 and has medical needs
//             } else {
//               return 0; // Below 55 and no medical needs
//             }
//           },
//         },
//         ],
//         monthly: [
//           {
//             from: 0,
//             to: 100,
//             rate: 0.0,
//             deduct: 0,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 90; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 75; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 75; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 100.01,
//             to: 300,
//             rate: 0.2,
//             deduct: 20,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 90; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 75; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 75; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 300.01,
//             to: 1000,
//             rate: 0.25,
//             deduct: 35,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 90; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 75; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 75; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 1000.01,
//             to: 2000,
//             rate: 0.3,
//             deduct: 85,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 90; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 75; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 75; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             }, // No additional credits in this bracket
//           },
//           {
//             from: 2000.01,
//             to: 3000, // Use numeric Infinity for comparisons
//             rate: 0.35,
//             deduct: 185,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 90; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 75; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 75; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//           from: 3000.01,
//           to: Infinity, // Use numeric Infinity for comparisons
//           rate: 0.4,
//           deduct: 335,
//           additionalCredits: (info: TaxPayerInfo) => {
//             if (info.age > 55 && info.hasMedicalCondition) {
//               return 90; // Above 55 and has medical needs
//             } else if (info.age > 55) {
//               return 75; // Above 55 and no medical needs
//             } else if (info.hasMedicalCondition) {
//               return 75; // Below 55 and has medical needs
//             } else {
//               return 0; // Below 55 and no medical needs
//             }
//           },
//         },
//         ],
        
//         yearly: [
//           {
//             from: 0,
//             to: 1200,
//             rate: 0.0,
//             deduct: 0,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 1080; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 90; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 90; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 1200.01,
//             to: 3600,
//             rate: 0.2,
//             deduct: 240,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 1080; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 90; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 90; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 3600.01,
//             to: 12000,
//             rate: 0.25,
//             deduct: 420,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 1080; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 90; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 90; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 12000.01,
//             to: 24000,
//             rate: 0.3,
//             deduct: 1020,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 1080; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 90; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 90; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },// No additional credits in this bracket
//           },
//           {
//             from: 24000.01,
//             to: 36000, // Use numeric Infinity for comparisons
//             rate: 0.35,
//             deduct: 2220,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 1080; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 90; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 90; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//           from: 36000.01,
//           to: Infinity, // Use numeric Infinity for comparisons
//           rate: 0.4,
//           deduct: 4020,
//           additionalCredits: (info: TaxPayerInfo) => {
//             if (info.age > 55 && info.hasMedicalCondition) {
//               return 1080; // Above 55 and has medical needs
//             } else if (info.age > 55) {
//               return 90; // Above 55 and no medical needs
//             } else if (info.hasMedicalCondition) {
//               return 90; // Below 55 and has medical needs
//             } else {
//               return 0; // Below 55 and no medical needs
//             }
//           },
//         },
//         ],
//       },
//       ZWL: {
//         daily: [
//           {
//             from: 0,
//             to: 24590.16,
//             rate: 0.0,
//             deduct: 0,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 1479.45; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 1232.88; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 1232.88; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 24590.17,
//             to: 73770.49,
//             rate: 0.2,
//             deduct: 4918.03,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 1479.45; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 1232.88; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 1232.88; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 73770.50,
//             to: 245901.64,
//             rate: 0.25,
//             deduct: 8606.56,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 1479.45; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 1232.88; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 1232.88; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 245901.65,
//             to: 491803.28,
//             rate: 0.3,
//             deduct: 20901.64,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 1479.45; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 1232.88; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 1232.88; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },// No additional credits in this bracket
//           },
//           {
//             from: 491803.29,
//             to: 737704.92, // Use numeric Infinity for comparisons
//             rate: 0.35,
//             deduct: 45491.80,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 1479.45; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 1232.88; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 1232.88; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//           from: 737704.93,
//           to: Infinity, // Use numeric Infinity for comparisons
//           rate: 0.4,
//           deduct: 82377.05,
//           additionalCredits: (info: TaxPayerInfo) => {
//             if (info.age > 55 && info.hasMedicalCondition) {
//               return 1479.45; // Above 55 and has medical needs
//             } else if (info.age > 55) {
//               return 1232.88; // Above 55 and no medical needs
//             } else if (info.hasMedicalCondition) {
//               return 1232.88; // Below 55 and has medical needs
//             } else {
//               return 0; // Below 55 and no medical needs
//             }
//           },
//         },
//         ],
//         weekly: [
//           {
//             from: 0,
//             to: 173076.92,
//             rate: 0.0,
//             deduct: 0,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 10384.62; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 8653.85; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 8653.85; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 173076.93,
//             to: 519230.77,
//             rate: 0.2,
//             deduct: 34615.38,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 10384.62; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 8653.85; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 8653.85; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 519230.78,
//             to: 1730769.23,
//             rate: 0.25,
//             deduct: 60576.92,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 10384.62; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 8653.85; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 8653.85; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 1730769.24,
//             to: 3461538.46,
//             rate: 0.3,
//             deduct: 147115.38,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 10384.62; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 8653.85; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 8653.85; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },// No additional credits in this bracket
//           },
//           {
//             from: 3461538.47,
//             to: 5192307.69, // Use numeric Infinity for comparisons
//             rate: 0.35,
//             deduct: 320192.31,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 10384.62; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 8653.85; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 8653.85; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//           from: 5192307.70,
//           to: Infinity, // Use numeric Infinity for comparisons
//           rate: 0.4,
//           deduct: 579807.69,
//           additionalCredits: (info: TaxPayerInfo) => {
//             if (info.age > 55 && info.hasMedicalCondition) {
//               return 10384.62; // Above 55 and has medical needs
//             } else if (info.age > 55) {
//               return 8653.85; // Above 55 and no medical needs
//             } else if (info.hasMedicalCondition) {
//               return 8653.85; // Below 55 and has medical needs
//             } else {
//               return 0; // Below 55 and no medical needs
//             }
//           },
//         },
//         ],
//         monthly: [
//           {
//             from: 0,
//             to: 750000,
//             rate: 0.0,
//             deduct: 0,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 45000; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 37500; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 37500; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 750000.01,
//             to: 2250000,
//             rate: 0.2,
//             deduct: 150000,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 45000; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 37500; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 37500; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 2250000.01,
//             to: 7500000,
//             rate: 0.25,
//             deduct: 262500,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 45000; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 37500; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 37500; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 7500000.01,
//             to: 15000000,
//             rate: 0.3,
//             deduct: 637500,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 45000; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 37500; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 37500; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 15000000.01,
//             to: 22500000, // Use numeric Infinity for comparisons
//             rate: 0.35,
//             deduct: 1387500,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 45000; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 37500; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 37500; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//           from: 22500000.01,
//           to: Infinity, // Use numeric Infinity for comparisons
//           rate: 0.4,
//           deduct: 2512500,
//           additionalCredits: (info: TaxPayerInfo) => {
//             if (info.age > 55 && info.hasMedicalCondition) {
//               return 45000; // Above 55 and has medical needs
//             } else if (info.age > 55) {
//               return 37500; // Above 55 and no medical needs
//             } else if (info.hasMedicalCondition) {
//               return 37500; // Below 55 and has medical needs
//             } else {
//               return 0; // Below 55 and no medical needs
//             }
//           },
//         },
//         ],
//         yearly: [
//           {
//             from: 0,
//             to: 9000000,
//             rate: 0.0,
//             deduct: 0,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 540000; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 450000; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 450000; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 9000000.01,
//             to: 27000000,
//             rate: 0.2,
//             deduct: 1800000,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 540000; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 450000; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 450000; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 27000000.01,
//             to: 90000000,
//             rate: 0.25,
//             deduct: 3150000,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 540000; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 450000; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 450000; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 90000000.01,
//             to: 180000000,
//             rate: 0.3,
//             deduct: 7650000,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 540000; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 450000; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 450000; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//             from: 180000000.01,
//             to: 270000000, // Use numeric Infinity for comparisons
//             rate: 0.35,
//             deduct: 16650000,
//             additionalCredits: (info: TaxPayerInfo) => {
//               if (info.age > 55 && info.hasMedicalCondition) {
//                 return 540000; // Above 55 and has medical needs
//               } else if (info.age > 55) {
//                 return 450000; // Above 55 and no medical needs
//               } else if (info.hasMedicalCondition) {
//                 return 450000; // Below 55 and has medical needs
//               } else {
//                 return 0; // Below 55 and no medical needs
//               }
//             },
//           },
//           {
//           from: 270000000.01,
//           to: Infinity, // Use numeric Infinity for comparisons
//           rate: 0.4,
//           deduct: 30150000,
//           additionalCredits: (info: TaxPayerInfo) => {
//             if (info.age > 55 && info.hasMedicalCondition) {
//               return 540000; // Above 55 and has medical needs
//             } else if (info.age > 55) {
//               return 450000; // Above 55 and no medical needs
//             } else if (info.hasMedicalCondition) {
//               return 450000; // Below 55 and has medical needs
//             } else {
//               return 0; // Below 55 and no medical needs
//             }
//           },
//         },
//         ],
//         // Define ZWL brackets similarly, possibly with different rates/deductions
//       },
//     },
//   },
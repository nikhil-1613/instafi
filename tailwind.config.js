import { withUt } from "uploadthing/tw";

export default withUt({
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0px" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0px" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
});

// // // tailwind.config.js
// // const { fontFamily } = require('tailwindcss/defaultTheme');

// // module.exports = {
// //   content: [
// //     "./app/**/*.{js,ts,jsx,tsx}",
// //     "./components/**/*.{js,ts,jsx,tsx}",
// //   ],
// //   theme: {
// //     extend: {
// //       colors: {
// //         background: "hsl(var(--background))",
// //         foreground: "hsl(var(--foreground))",
// //         border: "hsl(var(--border))",
// //         input: "hsl(var(--input))",
// //         ring: "hsl(var(--ring))",
// //         card: "hsl(var(--card))",
// //         "card-foreground": "hsl(var(--card-foreground))",
// //         primary: "hsl(var(--primary))",
// //         "primary-foreground": "hsl(var(--primary-foreground))",
// //         secondary: "hsl(var(--secondary))",
// //         "secondary-foreground": "hsl(var(--secondary-foreground))",
// //         muted: "hsl(var(--muted))",
// //         "muted-foreground": "hsl(var(--muted-foreground))",
// //         accent: "hsl(var(--accent))",
// //         "accent-foreground": "hsl(var(--accent-foreground))",
// //         destructive: "hsl(var(--destructive))",
// //         "destructive-foreground": "hsl(var(--destructive-foreground))",
// //         popover: "hsl(var(--popover))",
// //         "popover-foreground": "hsl(var(--popover-foreground))",
// //       },
// //       borderRadius: {
// //         lg: "var(--radius)",
// //         md: "calc(var(--radius) - 2px)",
// //         sm: "calc(var(--radius) - 4px)",
// //       },
// //     },
// //   },
// //   plugins: [],
// // };

// // // import * as tw from "uploadthing/tw";
// // const { withUt } = require("uploadthing/tw");
// // export default tw.withUt({
// //   darkMode: ["class"],
// //   content: [
// //     "./pages/**/*.{ts,tsx}",
// //     "./components/**/*.{ts,tsx}",
// //     "./app/**/*.{ts,tsx}",
// //     "./src/**/*.{ts,tsx}",
// //   ],
// //   theme: {
// //     container: {
// //       center: true,
// //       padding: "2rem",
// //       screens: {
// //         "2xl": "1400px",
// //       },
// //     },
// //     extend: {
// //       colors: {
// //         border: "hsl(var(--border))",
// //         input: "hsl(var(--input))",
// //         ring: "hsl(var(--ring))",
// //         background: "hsl(var(--background))",
// //         foreground: "hsl(var(--foreground))",
// //         primary: {
// //           DEFAULT: "hsl(var(--primary))",
// //           foreground: "hsl(var(--primary-foreground))",
// //         },
// //         secondary: {
// //           DEFAULT: "hsl(var(--secondary))",
// //           foreground: "hsl(var(--secondary-foreground))",
// //         },
// //         destructive: {
// //           DEFAULT: "hsl(var(--destructive))",
// //           foreground: "hsl(var(--destructive-foreground))",
// //         },
// //         muted: {
// //           DEFAULT: "hsl(var(--muted))",
// //           foreground: "hsl(var(--muted-foreground))",
// //         },
// //         accent: {
// //           DEFAULT: "hsl(var(--accent))",
// //           foreground: "hsl(var(--accent-foreground))",
// //         },
// //         popover: {
// //           DEFAULT: "hsl(var(--popover))",
// //           foreground: "hsl(var(--popover-foreground))",
// //         },
// //         card: {
// //           DEFAULT: "hsl(var(--card))",
// //           foreground: "hsl(var(--card-foreground))",
// //         },
// //       },
// //       borderRadius: {
// //         lg: "var(--radius)",
// //         md: "calc(var(--radius) - 2px)",
// //         sm: "calc(var(--radius) - 4px)",
// //       },
// //       keyframes: {
// //         "accordion-down": {
// //           from: { height: "0px" },
// //           to: { height: "var(--radix-accordion-content-height)" },
// //         },
// //         "accordion-up": {
// //           from: { height: "var(--radix-accordion-content-height)" },
// //           to: { height: "0px" },
// //         },
// //       },
// //       animation: {
// //         "accordion-down": "accordion-down 0.2s ease-out",
// //         "accordion-up": "accordion-up 0.2s ease-out",
// //       },
// //     },
// //   },
// //   plugins: [require("tailwindcss-animate")],
// // });
// // /** @type {import('tailwindcss').Config} */
// // export default {
// //   content: [
// //     "./app/**/*.{js,ts,jsx,tsx}",
// //     "./components/**/*.{js,ts,jsx,tsx}",
// //   ],
// //   theme: {
// //     extend: {
// //         colors: {
// //         border: 'hsl(var(--border))', // use your CSS variable
// //       },
// //     },
// //   },
// //   plugins: [], // or [require('@tailwindcss/forms')] etc
// // };

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//     darkMode: ["class"],
//     content: [],
//   theme: {
//   	extend: {
//   		borderRadius: {
//   			lg: 'var(--radius)',
//   			md: 'calc(var(--radius) - 2px)',
//   			sm: 'calc(var(--radius) - 4px)'
//   		},
//   		colors: {
//   			background: 'hsl(var(--background))',
//   			foreground: 'hsl(var(--foreground))',
//   			card: {
//   				DEFAULT: 'hsl(var(--card))',
//   				foreground: 'hsl(var(--card-foreground))'
//   			},
//   			popover: {
//   				DEFAULT: 'hsl(var(--popover))',
//   				foreground: 'hsl(var(--popover-foreground))'
//   			},
//   			primary: {
//   				DEFAULT: 'hsl(var(--primary))',
//   				foreground: 'hsl(var(--primary-foreground))'
//   			},
//   			secondary: {
//   				DEFAULT: 'hsl(var(--secondary))',
//   				foreground: 'hsl(var(--secondary-foreground))'
//   			},
//   			muted: {
//   				DEFAULT: 'hsl(var(--muted))',
//   				foreground: 'hsl(var(--muted-foreground))'
//   			},
//   			accent: {
//   				DEFAULT: 'hsl(var(--accent))',
//   				foreground: 'hsl(var(--accent-foreground))'
//   			},
//   			destructive: {
//   				DEFAULT: 'hsl(var(--destructive))',
//   				foreground: 'hsl(var(--destructive-foreground))'
//   			},
//   			border: 'hsl(var(--border))',
//   			input: 'hsl(var(--input))',
//   			ring: 'hsl(var(--ring))',
//   			chart: {
//   				'1': 'hsl(var(--chart-1))',
//   				'2': 'hsl(var(--chart-2))',
//   				'3': 'hsl(var(--chart-3))',
//   				'4': 'hsl(var(--chart-4))',
//   				'5': 'hsl(var(--chart-5))'
//   			}
//   		}
//   	}
//   },
//   plugins: [require("tailwindcss-animate")],
// }


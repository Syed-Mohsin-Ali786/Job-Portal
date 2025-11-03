// This file tells TypeScript the shape of the 'k-convert' module

declare module "k-convert" {
  // This is the interface you already wrote!
  interface KConvert {
    convertTo: (value: number) => string;
    // You can add other functions here if the library has them
    // e.g., convertFrom: (value: string) => number;
  }

  const kconvert: KConvert;
  export default kconvert;
}
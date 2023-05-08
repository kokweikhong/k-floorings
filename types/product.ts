export interface IProduct {
  index: string;
  sku: string;
  name: string;
  pattern: {
    name: string;
    src: string;
  };
  grain: {
    name: string;
    src: string;
  };
  description: string;
  specification: {
    species: string;
    dimensions: string[];
    thickness: string;
    grain: string;
  };
  showcase: string;
  patternColor: string;
  thumbnail: string;
  images: string[];
  isSelected?: boolean;
}

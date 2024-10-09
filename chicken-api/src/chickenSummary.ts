export type Chicken = ChickenSummary & {
  id: number;
  age: number;
  eggs: number;
  freeRange: boolean;
  gender: string;
  feathersColor: string;
  about: string;
  mother: ChickenSummary;
  father: ChickenSummary;
};

export type ChickenSummary = {
  name: string;
  breed?: string;
};

export type TFilters = {
  name: string;
  metadata: {
    id: string;
    name: string;
    slug: string;
    quantity: number;
    value?: string;
  }[];
};

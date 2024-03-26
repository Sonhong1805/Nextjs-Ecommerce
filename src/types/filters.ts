export type TMetadata = {
  id: string;
  name: string;
  slug: string;
  quantity: number;
  value?: string;
};

export type TFilters = {
  name: string;
  metadata: TMetadata[];
};

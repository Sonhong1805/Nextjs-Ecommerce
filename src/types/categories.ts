export type TCategories = {
  id: string;
  name: string;
  slug: string;
  children: [
    {
      id: string;
      name: string;
      slug: string;
    }
  ];
};

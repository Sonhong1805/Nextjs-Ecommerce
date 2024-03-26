type TProduct = {
  id: number;
  name: string;
  images: string[];
  price: number;
  discount: number;
  type: [
    {
      name: string;
      value: string[];
    }[]
  ];
  color: string[];
  address: {
    name: string;
    value: string;
  };
  idCategoryParent: string;
  idCategoryChildren: string;
  sold: number;
  descriptions: string[];
  evaluates: [
    {
      name: string;
      star: number;
      content: string;
      time: string;
    }[]
  ];
  tags: string[];
};

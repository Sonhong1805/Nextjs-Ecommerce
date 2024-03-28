type TProductType = {
  name: string;
  slug: string;
  value: [
    {
      name: string;
      slug: string;
    }
  ];
};

type TProductEvaluate = {
  id: number;
  content: string;
  name: string;
  star: number;
  time: string;
};

type TProduct = {
  id: number;
  name: string;
  slug: string;
  images: string[];
  price: number;
  discount: number;
  type: TProductType[];
  color: string[];
  address: {
    name: string;
    value: string;
  };
  idCategoryParent: string;
  idCategoryChildren: string;
  sold: number;
  descriptions: string[];
  evaluates: TProductEvaluate[];
  tags: string[];
};

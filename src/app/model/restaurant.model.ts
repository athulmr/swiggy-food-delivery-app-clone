export interface RestaurantInfo {
  name: string;
  imgUrl?: string;
  address: string;
  rating: string;
  deliveryTime: number;
  costForTwo: number;
  discount: number;
  bestSafety?: boolean;
}

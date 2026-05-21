// Shared types between frontend and backend

export interface Location {
  latitude: number;
  longitude: number;
  address: string;
}

export interface Attraction {
  _id: string;
  name: string;
  description: string;
  region: string;
  category: string;
  location: Location;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  tags: string[];
  bestVisitTime: string;
  ticketPrice: number | null;
  openingHours: string;
  createdAt: string;
  updatedAt: string;
}

export interface RecommendedDish {
  name: string;
  price: number;
  description: string;
}

export interface BusinessHours {
  [key: string]: {
    open: string;
    close: string;
    isClosed?: boolean;
  };
}

export interface Restaurant {
  _id: string;
  name: string;
  description: string;
  region: string;
  cuisine: string;
  location: Location;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  businessHours: BusinessHours;
  recommendedDishes: RecommendedDish[];
  priceRange: string;
  phone: string;
  website?: string;
  createdAt: string;
  updatedAt: string;
}

export interface SpecialtyFood {
  name: string;
  recommendedStall: string;
  description: string;
}

export interface NightMarket {
  _id: string;
  name: string;
  region: string;
  location: Location;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  operatingDays: string[];
  operatingHours: string;
  specialtyFoods: SpecialtyFood[];
  createdAt: string;
  updatedAt: string;
}

export interface Review {
  _id: string;
  userId: string;
  userName: string;
  rating: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  _id: string;
  username: string;
  email: string;
  avatar?: string;
  favorites: {
    attractions: string[];
    restaurants: string[];
    nightMarkets: string[];
  };
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

export type Region = 
  | '台北'
  | '新北'
  | '桃園'
  | '新竹'
  | '苗栗'
  | '台中'
  | '彰化'
  | '南投'
  | '雲林'
  | '嘉義'
  | '台南'
  | '高雄'
  | '屏東'
  | '宜蘭'
  | '花蓮'
  | '台東'
  | '澎湖'
  | '金門'
  | '馬祖';

export type AttractionCategory =
  | '自然景觀'
  | '歷史文化'
  | '主題樂園'
  | '宗教聖地'
  | '美術館'
  | '博物館'
  | '溫泉'
  | '海灘'
  | '山脈'
  | '公園'
  | '古跡';

export type CuisineType =
  | '台灣菜'
  | '日本料理'
  | '中華料理'
  | '泰式料理'
  | '韓式料理'
  | '義大利料理'
  | '法式料理'
  | '美式料理'
  | '海鮮'
  | '火鍋'
  | '烤肉'
  | '素食'
  | '小吃';

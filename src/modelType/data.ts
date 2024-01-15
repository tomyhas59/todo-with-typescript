// const data = {
//   name: "북경반점",
//   category: "중식",
//   address: {
//     city: "서울",
//     detail: "관악구 OO동 OO번지",
//     zipCode: 234234,
//   },
//   menu: [
//     { name: "짜장면", price: 5000 },
//     { name: "짬뽕", price: 6000 },
//     { name: "탕수육", price: 15000 },
//   ],
// };

export type ChineseFood = {
  name: string;
  category: string;
  address: Address;
  menu: Menu[];
};

export type Address = {
  city: string;
  detail: string;
  zipCode: number;
};

export type Menu = {
  name: string;
  price: number;
};

export type AddressWithoutZipCode = Omit<Address, "zipCode">;
//타입을 제거

export type ChineseFoodOnlyCategory = Pick<ChineseFood, "category">;
//해당 타입 선택

export type ApiResponse<T> = {
  data: T[];
};
export type ChineseFoodResponse = ApiResponse<ChineseFood>;

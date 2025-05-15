export const BASE_CATEGORIES = [
  { name: "음식점", id: "DINING" },
  { name: "카페", id: "CAFE" },
];

export const SUB_DINING = [
  { name: "한식", id: "DINING_KOREAN" },
  { name: "일식", id: "DINING_JAPANESE" },
  { name: "중식", id: "DINING_CHINESE" },
  { name: "양식", id: "DINING_WESTERN" },
  { name: "아시안", id: "DINING_ASIAN" },
  { name: "패밀리레스토랑", id: "DINING_FAMILY" },
  { name: "분식", id: "DINING_SNACK" },
  { name: "패스트푸드", id: "DINING_FASTFOOD" },
  { name: "피자", id: "DINING_PIZZA" },
  { name: "치킨", id: "DINING_CHICKEN" },
  { name: "주점", id: "DINING_BAR" },
  { name: "기타", id: "DINING_ETC" },
];

export const SUB_CAFE = [
  { name: "커피", id: "CAFE_COFFEE" },
  { name: "제과점", id: "CAFE_BAKERY" },
  { name: "아이스크림", id: "CAFE_ICECREAM" },
  { name: "기타", id: "CAFE_ETC" },
];

export const FILTER_BY_OPENHOUR = [
  {
    name: "영업 중",
    value: ["영업 중", "곧 영업 종료"],
  },
  {
    name: "24시간 영업",
    value: ["24시간 영업"],
  },
];

//siteSort
export const SORT_BY = [
  { name: "관련도순", id: 0 },
  { name: "거리순", id: 1 },
];

export const DEFAULT_TYPE = "음식점";
export const DEFAULT_SITESORT = 0;

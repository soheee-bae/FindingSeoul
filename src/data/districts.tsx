import {
  Dobonggu,
  Dongdaemungu,
  Dongjakgu,
  Eunpyeonggu,
  Gangbukgu,
  Gangdonggu,
  Gangnamgu,
  Ganseogu,
  Geumcheongu,
  Gurogu,
  Gwanakgu,
  Gwangjingu,
  Jongnogu,
  Junganggu,
  Junggu,
  Mapogu,
  Nowongu,
  Seochogu,
  Seodaemungu,
  Seongbukgu,
  Seongdonggu,
  Songpagu,
  Yangcheongu,
  Yeongdeungpogu,
  Yongsangu,
} from "@/icons";
import { District } from "@/interfaces/district";

export const SEOUL_DISTRICTS: District[] = [
  {
    name: "강남구",
    mapImage: <Gangnamgu />,
  },
  {
    name: "강동구",
    mapImage: <Gangdonggu />,
  },
  {
    name: "강북구",
    mapImage: <Gangbukgu />,
  },
  {
    name: "강서구",
    mapImage: <Ganseogu />,
    x: 8,
    y: 175,
  },
  {
    name: "관악구",
    mapImage: <Gwanakgu />,
  },
  {
    name: "광진구",
    mapImage: <Gwangjingu />,
  },
  {
    name: "구로구",
    mapImage: <Gurogu />,
  },
  {
    name: "금천구",
    mapImage: <Geumcheongu />,
  },
  {
    name: "노원구",
    mapImage: <Nowongu />,
  },
  {
    name: "도봉구",
    mapImage: <Dobonggu />,
  },
  {
    name: "동대문구",
    mapImage: <Dongdaemungu />,
  },
  {
    name: "동작구",
    mapImage: <Dongjakgu />,
  },
  {
    name: "마포구",
    mapImage: <Mapogu />,
  },
  {
    name: "서대문구",
    mapImage: <Seodaemungu />,
  },
  {
    name: "서초구",
    mapImage: <Seochogu />,
  },
  {
    name: "성동구",
    mapImage: <Seongdonggu />,
  },
  {
    name: "성북구",
    mapImage: <Seongbukgu />,
  },
  {
    name: "송파구",
    mapImage: <Songpagu />,
  },
  {
    name: "양천구",
    mapImage: <Yangcheongu />,
  },
  {
    name: "영등포구",
    mapImage: <Yeongdeungpogu />,
  },
  {
    name: "용산구",
    mapImage: <Yongsangu />,
  },
  {
    name: "은평구",
    mapImage: <Eunpyeonggu />,
  },
  {
    name: "종로구",
    mapImage: <Jongnogu />,
  },
  {
    name: "중구",
    mapImage: <Junggu />,
  },
  {
    name: "중랑구",
    mapImage: <Junganggu />,
  },
];

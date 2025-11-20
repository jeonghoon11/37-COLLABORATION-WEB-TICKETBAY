import { type DropdownOption } from "@widgets/select-ticket/types/dropdown";

// 공연일시 필터 옵션
export const PERFORMANCE_DATE_OPTIONS: DropdownOption[] = [
  {
    id: "2025-10-31T18:30:00",
    label: "2025-10-31(금) 18:30",
  },
  {
    id: "2025-11-01T18:30:00",
    label: "2025-11-01(토) 18:30",
  },
  {
    id: "2025-11-02T18:30:00",
    label: "2025-11-02(일) 18:30",
  },
];

// 좌석등급 필터 옵션
export const SEAT_GRADE_OPTIONS: DropdownOption[] = [
  {
    id: "premium",
    label: "프리미엄석",
  },
  {
    id: "table",
    label: "테이블석",
  },
  {
    id: "exciting",
    label: "익사이팅존",
  },
  {
    id: "outfield",
    label: "외야석(그린석)",
  },
];

// 수량 필터 옵션
export const QUANTITY_OPTIONS: DropdownOption[] = [
  {
    id: "1",
    label: "1",
  },
  {
    id: "2",
    label: "2",
  },
  {
    id: "3",
    label: "3",
  },
  {
    id: "4",
    label: "4",
  },
  {
    id: "5+",
    label: "5+",
  },
];

// 좌석구역 필터 옵션
export const SEAT_AREA_OPTIONS: DropdownOption[] = [
  {
    id: "118",
    label: "118구역",
  },
  {
    id: "410",
    label: "410구역",
  },
  {
    id: "507",
    label: "507구역",
  },
];

// 거래방식 필터 옵션
export const TRANSACTION_METHOD_OPTIONS: DropdownOption[] = [
  {
    id: "pin",
    label: "PIN",
  },
  {
    id: "delivery",
    label: "배송",
  },
  {
    id: "onsite",
    label: "현장",
  },
  {
    id: "other",
    label: "기타",
  },
];

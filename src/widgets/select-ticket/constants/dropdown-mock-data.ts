import { type DropdownConfig } from "@widgets/select-ticket/types/dropdown";

export const DROPDOWN_CONFIGS: DropdownConfig[] = [
  {
    id: "performanceDate",
    label: "공연일시",
    options: [
      { id: "2025-10-31T18:30:00", label: "2025-10-31(금) 18:30" },
      { id: "2025-11-01T18:30:00", label: "2025-11-01(토) 18:30" },
      { id: "2025-11-02T18:30:00", label: "2025-11-02(일) 18:30" },
    ],
  },
  {
    id: "seatGrade",
    label: "좌석선택",
    options: [
      { id: "premium", label: "프리미엄석" },
      { id: "table", label: "테이블석" },
      { id: "exciting", label: "익사이팅존" },
      { id: "outfield", label: "외야석(그린석)" },
    ],
  },
  {
    id: "quantity",
    label: "수량",
    options: [
      { id: "1", label: "1" },
      { id: "2", label: "2" },
      { id: "3", label: "3" },
      { id: "4", label: "4" },
      { id: "5+", label: "5+" },
    ],
  },
  {
    id: "transactionMethod",
    label: "거래방식",
    options: [
      { id: "pin", label: "PIN" },
      { id: "delivery", label: "배송" },
      { id: "onsite", label: "현장" },
      { id: "other", label: "기타" },
    ],
  },
];

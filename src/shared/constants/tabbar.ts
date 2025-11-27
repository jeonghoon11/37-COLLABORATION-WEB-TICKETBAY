import {
  CartIcon,
  CategoryIcon as CategorySvgIcon,
  HomeIcon,
  MyIcon,
  TicketregisterIcon,
} from "@assets/icons";

export const TABS = [
  { id: "home", label: "홈", Icon: HomeIcon },
  { id: "category", label: "카테고리", Icon: CategorySvgIcon },
  { id: "sell", label: "판매등록", Icon: TicketregisterIcon },
  { id: "compare", label: "비교담기", Icon: CartIcon },
  { id: "my", label: "MY", Icon: MyIcon },
] as const;

export type TabId = (typeof TABS)[number]["id"];
export type TabItem = (typeof TABS)[number];

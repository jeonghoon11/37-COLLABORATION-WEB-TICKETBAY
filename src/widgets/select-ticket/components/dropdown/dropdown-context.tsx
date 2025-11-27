import { createContext, type ReactNode, useContext } from "react";

import { useDropdown } from "../../hooks/use-dropdown";

interface DropdownProviderProps {
  children: ReactNode;
}

export interface DropdownContextValue {
  openDropdown: (id: string) => void;
  closeDropdown: () => void;
  isOpen: (id: string) => boolean;
  selectedId: (id: string) => string | null;
  selectOption: (dropdownId: string, optionId: string | null) => void;
  setDropdownRef: (id: string, element: HTMLElement | null) => void;
}

export const DropdownContext = createContext<DropdownContextValue | null>(null);

export const DropdownProvider = ({ children }: DropdownProviderProps) => {
  const dropdownValue = useDropdown();

  return <DropdownContext.Provider value={dropdownValue}>{children}</DropdownContext.Provider>;
};

export const useDropdownContext = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("Context는 Provider 내부에서만 사용해주세요!");
  }
  return context;
};

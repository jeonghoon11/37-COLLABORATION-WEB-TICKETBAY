export interface DropdownOption {
  id: string;
  label: string;
}

export interface DropdownConfig {
  id: string;
  label: string;
  options: DropdownOption[];
}

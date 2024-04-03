export interface Profile {
  [key: string]: string;
}

export interface User {
  name: string;
  status: string;
}

export interface searchResult {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  data: User[];
  handleStatusChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

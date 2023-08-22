import { createContext, useState, ReactNode } from "react";

interface MenuContextType {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MenuContext = createContext<MenuContextType | null>(null);

interface MenuProviderProps {
  children: ReactNode;
}

export const MenuProvider = ({ children }: MenuProviderProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <MenuContext.Provider value={{ showMenu, setShowMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

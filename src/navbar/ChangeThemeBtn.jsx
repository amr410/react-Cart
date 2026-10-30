import { Moon, Sun } from "lucide-react";

const ChangeThemeBtn = ({ theme, changeTheme }) => {
  return (
    <div onClick={changeTheme} className="mt-2.5">
      {theme ? <Sun className="text-black" /> : <Moon className="text-white" />}
    </div>
  );
};

export default ChangeThemeBtn;

import { Store } from "lucide-react";

const Brand = ({ theme }) => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <Store />
        <span
          className={`text-xl font-bold ${theme ? "text-gray-900" : "text-white"} `}
        >
          koshk
        </span>
      </div>
    </div>
  );
};

export default Brand;

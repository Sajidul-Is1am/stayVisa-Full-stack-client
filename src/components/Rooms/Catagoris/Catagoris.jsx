import { useSearchParams } from "react-router-dom";
import CatarogieBox from "./CatarogieBox";
import { categories } from "./catagorisData";

const Catagoris = () => {
    const [params, setParams] = useSearchParams();
    const catagory = params.get("catagory");
  return (
    <div className="flex items-center justify-between pb-16 pt-5 overflow-x-auto">
      {categories?.map((item, idx) => (
        <CatarogieBox
          key={idx}
          icon={item?.icon}
              lavel={item.label}
              selcted = {catagory === item.label}
        ></CatarogieBox>
      ))}
    </div>
  );
};

export default Catagoris;

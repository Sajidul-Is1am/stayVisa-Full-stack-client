import queryString from "query-string";
import { useNavigate, useSearchParams } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const CatarogieBox = ({ icon: Icon, lavel: title, selcted }) => {
  const [params, setParams] = useSearchParams();
  params.get("catagory");
  const navigate = useNavigate();

  const handleClick = () => {
    let currentQuery = {};
    if (params) {
      currentQuery = queryString.parse(params.toString());
    }
      const updatedQuery = { ...currentQuery, catagory: title };
      const url = queryString.stringifyUrl({
        url: "/",
        query: updatedQuery,
      });
      navigate(url);
  };
  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer flex-col items-center text-center justify-center gap-2 p-3 text-neutral-500  hover:text-neutral-800 transition ${
        selcted ? "border-b-4 text-neutral-800 border-black" : "border-b-2"
      } `}
    >
      <div className="flex justify-center">
        <Icon size={30} />
      </div>
      <div className="">{title}</div>
    </div>
  );
};

export default CatarogieBox;

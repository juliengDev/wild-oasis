import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function Sortby({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  function handleChange(event) {
    searchParams.set("sortBy", event.target.value);
    setSearchParams(searchParams);
  }
  return <Select options={options} type="white" onChange={handleChange} />;
}

export default Sortby;

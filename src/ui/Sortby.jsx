import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function Sortby({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get("sortBy") || options[0].value;
  function handleChange(event) {
    searchParams.set("sortBy", event.target.value);
    setSearchParams(searchParams);
  }
  return <Select value={sortBy} options={options} type="white" onChange={handleChange} />;
}

export default Sortby;

import axios from "../config/axios";

export const getAccommodationsTypes = async () => {
  const { data: accommodationsTypesData } = await axios.get(
    "/accommodation-types"
  );
  return accommodationsTypesData;
};

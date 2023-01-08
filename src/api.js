import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID McBCgX1UX1d2cdEBNKB4zvJtNwAh-R5XkOBQxCPZcMI",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;

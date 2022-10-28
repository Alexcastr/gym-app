export const exerciseOptions = {
 method: "GET",
 headers: {
  "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
  "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
 },
};

export const youtubeOptions = {
 method: "GET",
 headers: {
  "X-RapidAPI-Host": process.env.REACT_APP_YOUTUBE_HOST,
  "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
 },
};

export const fetchData = async (url, options) => {
 const res = await fetch(url, options);
 const data = await res.json();

 return data;
};

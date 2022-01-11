import { useParams } from "react-router-dom";
import { useEffect } from "react";
function Detail() {
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []); // API call은 첫 렌더링에만 하게 하기 위함.
  return <h1>Detail</h1>;
}

export default Detail;

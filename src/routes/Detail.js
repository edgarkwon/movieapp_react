import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState("");
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    //console.log(json);
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []); // API call은 첫 렌더링에만 하게 하기 위함.
  return (
    <div>
      {loading ? (
        <h2>loading...</h2>
      ) : (
        <div>
          <h2>{movie.title}</h2>
          <img src={movie.medium_cover_image}></img>
          <p>{movie.description_full}</p>
          <button>
            <Link to="/">Back</Link>
          </button>
        </div>
      )}
    </div>
  );
}

export default Detail;

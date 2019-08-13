import React from "react"
import PropTypes from "prop-types"
import YouTube from "react-youtube"
import "./Movie.css"

function Movie({ year, title, summary, poster, yt_trailer_code, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={`${title}의 포스터`} title={title} />
      <div className="movie__data">
        <div className="movie__data-column">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {genres.map((genre, index) => (
              <li key={index} className="genres__genre">
                {genre}
              </li>
            ))}
          </ul>
        </div>
        <p className="movie__summary">{summary.slice(0, 140)}</p>
      </div>
      {/* <YouTube
        videoId={yt_trailer_code}
        opts={{
          height: "390",
          width: "640",
          playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0
          }
        }}
      /> */}
    </div>
  )
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  yt_trailer_code: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie

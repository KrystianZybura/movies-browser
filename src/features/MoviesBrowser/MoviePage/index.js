import PeopleList from "../../../common/PeopleList";
import MovieInfo from "./MovieInfo";
import MovieTop from "./MovieTop";
import { MoviePageWrapper } from "./styled";

const MoviePage = ({
  poster,
  posterBig,
  title,
  longTitle,
  productionYear,
  productionPlace,
  date,
  tags,
  rate,
  votes,
  description,
  personPicture,
  personName,
  personRole,
}) => {
  return (
    <>
      <MoviePageWrapper>
        <MovieTop
          poster={posterBig}
          title={longTitle ?? title}
          rate={rate}
          votes={votes}
        />
        <MovieInfo
          title={title}
          productionYear={productionYear}
          productionPlace={productionPlace}
          date={date}
          tags={tags}
          rate={rate}
          votes={votes}
          description={description}
          poster={poster}
        />
        <PeopleList
          picture={personPicture}
          name={personName}
          role={personRole}
          title={"Cast"}
          moviePage
        />
        {/* It might require some adjustance after syncing it with API */}
        <PeopleList
          picture={personPicture}
          name={personName}
          role={personRole}
          title={"Crew"}
          moviePage
        />
      </MoviePageWrapper>
    </>
  );
};

export default MoviePage;
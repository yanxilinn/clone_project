import '../SearchBar/SearchBar.css'; 
import {getTrails,getTrail,fetchTrails,fetchTrail} from '../../store/trail';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getReviews } from '../../store/review';
import { useEffect } from 'react';
import * as React from 'react';
import Fuse from 'fuse.js';
import TerrainSharpIcon from '@mui/icons-material/TerrainSharp';

const SearchBar = ({searchTrail}) => {
  const dispatch = useDispatch();
  // const {trailId} = useParams();
  useEffect (() => {
      dispatch(fetchTrails());
      // dispatch(fetchTrail(trailId));
  }, [dispatch]);


const trails = useSelector(getTrails);
let keyWord = searchTrail
// console.log(keyWord);
const options = {
  shouldSort: true,
  threshold: 0.4,
  keys: ["tName","id"]
}
const filter = new Fuse(trails, options);
const searchResults = filter.search(keyWord);
const trailsList = searchResults.map((trail) => {
    return(
      <div className='searchResult'>
        <TerrainSharpIcon style={{marginLeft:"1%", marginRight:"1%", color:"green"}}/>
        <Link className='trailLink' to={`/trails/${trail.item.id}`}>
        {trail.item.tName}
        </Link>
      </div>
    )
  }
)

if(keyWord && searchResults.length==0){
  return(
  <div className='noResult'>
  No Result for "{keyWord}"
  </div>
  )
}
else
{
  return (
    <div className='showResults'>
      {trailsList}
    </div>
  );
};
return(<>123</>);
}


export default SearchBar;
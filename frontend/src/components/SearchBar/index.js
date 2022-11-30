import '../SearchBar/SearchBar.css'; 
import {getTrails,getTrail} from '../../store/trail';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getReviews } from '../../store/review';

const SearchBar = () => {
  const dispatch = useDispatch();
  // const {trailId} = useParams();
  // let allTrails = useSelector(getTrails);
  // console.log(allTrails);
  // debugger;
//   const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const arrList = arr.map((ele) => {
//     return (
//         <div key={ele}>
//             <div eleNum>{ele}</div>
//         </div>
//     )
// })

return (
  <></>
  // <div>{arrList}</div>
)
}

export default SearchBar;

// const SearchBar = () => {

// export default SearchBar; 
//////////////////////////////////////////////////
// [
  // {
    // "trail_name": "Mount Tamalpais State Trail",
    // "trail_Id": 1
  // },
  // {
    // "trail_name": "East and West Drive Loop",
    // "trail_Id": 2
  // },
  // {
    // "trail_name": "Jennings Beach To Pine Creek Point Trail",
    // "trail_Id": 3
  // },
  // {
//     "trail_name": "Twin Brooks Park Loop",
//     "trail_Id": 4
//   },
//   {
//     "trail_name": "Teepee to Thrilla to Viper to IMBA Loop",
//     "trail_Id": 5
//   },
//   {
//     "trail_name": "Forest Park Loop",
//     "trail_Id": 6
//   },
//   {
//     "trail_name": "Alley Pond Park Loop",
//     "trail_Id": 7 
//   },
//   {
//     "trail_name": "Joe Michaels Mile",
//     "trail_Id": 8
//   },
//   {
//     "trail_name": "Pelham Bay Park and Pelham Parkway",
//     "trail_Id": 9
//   },
//   {
//     "trail_name": "hunter Island Loop Trail",
//     "trail_Id": 10
//   }
// ]

// const options = {
//   isCaseSensitive: false,
//   // includeScore: false,
//   // shouldSort: true,
//   // includeMatches: false,
//   // findAllMatches: false,
//   // minMatchCharLength: 1,
//   // location: 0,
//   // threshold: 0.6,
//   // distance: 100,
//   // useExtendedSearch: false,
//   // ignoreLocation: false,
//   // ignoreFieldNorm: false,
//   // fieldNormWeight: 1,

//   keys: [
//     "trail_name"
//   ]
// };

// const fuse = new Fuse(list, options);

// // Change the pattern
// const pattern = ""
// const result = fuse.search(pattern)
// return result

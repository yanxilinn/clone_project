import '../SearchBar/SearchBar.css'; 
import {getTrails,getTrail} from '../../store/trail';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getReviews } from '../../store/review';

const SearchBar = () => {
  const dispatch = useDispatch();
  // const {trailId} = useParams();
  let allTrails = useSelector(getReviews);
  // debugger;
  

return (
  <>
  </>
)
}

export default SearchBar;

// const SearchBar = () => {

// var content = [
//     'Mount Tamalpais State Trail',
//     'East and West Drive Loop',
//     'Jennings Beach To Pine Creek Point Trail',
//     'Twin Brooks Park Loop',
//     'Teepee to Thrilla to Viper to IMBA Loop',
//     'Forest Park Loop',
//     'Alley Pond Park Loop',
//     'Joe Michaels Mile',
//     'Pelham Bay Park and Pelham Parkway',
//     'hunter Island Loop Trail',
//   ]
//   var inp = document.querySelector('input');
//   var showBox = document.getElementById('searchList');
//   var box = document.getElementById('box');

//   inp.oninput = () => {
//     createNode();
//   }

//   function getVal() {
//     let inpVal = inp.value;
//     let arrVal = [];

//     arrVal = inpVal.trim().split(' ').filter(item => {
//       return item && !arrVal.includes(item);
//     })
//     return arrVal;
//   }

//   function createNode() {

//     showBox.innerHTML = '';
//     let val = getVal();
//     let newArr = [];
 
//     if (val.length < 1) {
//       return;
//     }
//     for (let i = 0; i < content.length; i++) {

//       let result = val.some(item => {
//         return content[i].includes(item);
//       })
//       if (result) {
//         let str = content[i];
 
//         for (let j = 0; j < val.length; j++) {
//           str = str.replaceAll(val[j], "<span>" + val[j] + "</span>");
//         }
//         newArr.push(str);
//       }
//     }

//     for (let i = 0; i < newArr.length; i++) {
//       let li = document.createElement('li');
//       li.innerHTML = newArr[i];
//     //   searchList.appendChild(li);
//     };
//   };

// }

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
// const pattern = "HUNTER"
// const result = fuse.search(pattern)
// return result

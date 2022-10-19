import '../SearchBar/SearchBar.css'; 

const SearchBar = () => {

var content = [
    'Mount Tamalpais State Trail',
    'East and West Drive Loop',
    'Jennings Beach To Pine Creek Point Trail',
    'Twin Brooks Park Loop',
    'Teepee to Thrilla to Viper to IMBA Loop',
    'Forest Park Loop',
    'Alley Pond Park Loop',
    'Joe Michaels Mile',
    'Pelham Bay Park and Pelham Parkway',
    'hunter Island Loop Trail',
  ]
  var inp = document.querySelector('input');
  var showBox = document.getElementById('searchList');
  var box = document.getElementById('box');

  inp.oninput = () => {
    createNode();
  }

  function getVal() {
    let inpVal = inp.value;
    let arrVal = [];

    arrVal = inpVal.trim().split(' ').filter(item => {
      return item && !arrVal.includes(item);
    })
    return arrVal;
  }

  function createNode() {

    showBox.innerHTML = '';
    let val = getVal();
    let newArr = [];
 
    if (val.length < 1) {
      return;
    }
    for (let i = 0; i < content.length; i++) {

      let result = val.some(item => {
        return content[i].includes(item);
      })
      if (result) {
        let str = content[i];
 
        for (let j = 0; j < val.length; j++) {
          str = str.replaceAll(val[j], "<span>" + val[j] + "</span>");
        }
        newArr.push(str);
      }
    }

    for (let i = 0; i < newArr.length; i++) {
      let li = document.createElement('li');
      li.innerHTML = newArr[i];
    //   searchList.appendChild(li);
    };
  };

}

export default SearchBar; 

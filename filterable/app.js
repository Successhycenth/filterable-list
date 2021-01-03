//get iput element by id 
let filterInput = document.getElementById('filterInput');
//add event listener

filterInput.addEventListener('keyup', filterNames);

function filterNames() {
  //Get value of input
  let filterValue = document.getElementById('filterInput').value

  console.log({filterValue});
  //get names ur

  let ul = document.getElementById('names');
  //get li from url
  let li = ul.querySelectorAll('li.collection-item');

  // loop through collection-item lis
  
  for(let i = 0; i < li.length; i++){
    let a = li[i].children[0]

    // console.log(a.innerHTML)
    // if matched input 
    if(!a.innerHTML.toLowerCase().includes(filterValue.toLowerCase())){
      
      li[i].style.display = 'none';
    } else {
      li[i].style.display = '';
    }
  }
} 
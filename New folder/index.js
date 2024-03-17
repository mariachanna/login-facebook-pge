// var getul = document.getElementById('ul')
// function foo(){
//    var a = document.getElementById('inp')
//     var li = document.createElement('li')
//     var liText = document.createTextNode(a.value)
//     li.appendChild(liText)
//     getul.appendChild(li)
//     a.value = ''


//     var deletebtn = document.createElement('button')
//     var deletebtnText = document.createTextNode('delete')
//     deletebtn.appendChild(deletebtnText)
//     li.appendChild(deletebtn)
//     deletebtn.setAttribute('onclick','dell(this)')

//     var editbtn = document.createElement('button')
//     var editbtnText = document.createTextNode('edit')
//     editbtn.appendChild(editbtnText)
//     li.appendChild(editbtn)
//     editbtn.setAttribute('onclick','edit(this)')



//     console.log(li)
// }


// function dell(e){
//     e.parentNode.remove()
// }

// function edit(e){
// var a = prompt('enter edit value',e.parentNode, firstChild.nodeValue)
//  e.parentNode.firstChild.nodeValue=a
// }
// function del(){
//     getul.innerHTML = ''
// }




//START
//LOGIN / SING IN/SIGN UP PASSWORD
function signup(){
    var email = document.getElementById('semail').value
    var pass = document.getElementById('spass').value
    localStorage.setItem('Email', email)
    localStorage.setItem('Password', pass)
}

function signin(){
  var email = document.getElementById('lemail').value
  var pass = document.getElementById('lpass').value
  if (localStorage.getItem('Email')== email &&
  localStorage.getItem('Password')== pass)
  location.href ="./wellcome.html"


  else{
    alert('sorry signup karo')
    location.href ="./signup.html"
  }
}

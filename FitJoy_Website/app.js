let filterInput = document.getElementById('filter-input')
filterInput.addEventListener('keyup', filterNames)

function filterNames(){
  let filterValue = filterInput.value.toUpperCase();
  
  let ul = document.getElementById('names')
  let li = ul.querySelectorAll('li.collection-item');
  
  for(i=0;i < li.length;i++){
    let a = li[i].getElementsByTagName('a')[0];
    if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }
}

let showBtn = document.querySelectorAll('#show');
let loginForm = document.querySelector('.login-form');
let box = document.querySelector('.box')
let closebtn = document.getElementById('close');
let userNameInput = document.getElementById('user-name');
let passwordInput = document.getElementById('password');
let loginBtn = document.getElementById('login-btn');
let message = document.getElementById('message');
let body = document.querySelector('.container-result')

// let userName = 'Bankole Samson';
// let password = 'samsonbanks8989';

let students = [
  samsonBankole = {
    userName : 'Bankole Samson',
    password : 'samsonbanks8989',
    result : {
      marketing: 85,
      English: 74,
      civic: 80,
      physics: 64,
      chemistry: 69,
      geography: 73,
      Agric: 82,
      total: 85.3
    }
  },
  AbrahamDoyinsola = {
    userName : 'Abraham Doyinsola',
    password : 'abraham8989',
    result : {
      marketing: 80,
      English: 75,
      civic: 80,
      physics: 64,
      chemistry: 69,
      geography: 73,
      Agric: 82,
      total: 83
    }
  },
  AjokeFisayomi = {
    userName : 'Ajoke Fisayomi',
    password : 'Adejoke8989',
    result : {
      marketing: 85,
      English: 74,
      civic: 80,
      physics: 64,
      chemistry: 69,
      geography: 73,
      Agric: 82,
      total: 85.3
    }
  },
  AdejokeBimbo = {
    userName : 'Adejoke Bimbo',
    password : 'Bimbo8989',
    result : {
      marketing: 85,
      English: 74,
      civic: 80,
      physics: 64,
      chemistry: 69,
      geography: 73,
      Agric: 82,
      total: 85.3
    }
  },
  AbrahamDoyinsola = {
    userName : 'Akanbi Wariz',
    password : 'Wariz8989',
    result : {
      marketing: 85,
      English: 74,
      civic: 80,
      physics: 64,
      chemistry: 69,
      geography: 73,
      Agric: 82,
      total: 85.3
    }
  },
  AbrahamDoyinsola = {
    userName : 'Abraham Akanji',
    password : 'abraham8989',
    result : {
      marketing: 85,
      English: 74,
      civic: 80,
      physics: 64,
      chemistry: 69,
      geography: 73,
      Agric: 82,
      total: 85.3
    }
  },
  AbrahamDoyinsola = {
    userName : 'Abraham Faith',
    password : 'abraham8989',
    result : {
      marketing: 85,
      English: 74,
      civic: 80,
      physics: 64,
      chemistry: 69,
      geography: 73,
      Agric: 82,
      total: 85.3
    }
  },
  AbrahamDoyinsola = {
    userName : 'Adam Dola',
    password : 'abraham8989',
    result : {
      marketing: 85,
      English: 74,
      civic: 80,
      physics: 64,
      chemistry: 69,
      geography: 73,
      Agric: 82,
      total: 85.3
    }
  },
  AbrahamDoyinsola = {
    userName : 'Abraham Doyin',
    password : 'abraham8989',
    result : {
      marketing: 85,
      English: 74,
      civic: 80,
      physics: 64,
      chemistry: 69,
      geography: 73,
      Agric: 82,
      total: 85.3
    }
  },
]

// for(i=0;i<students.length; i++) {
//   console.log(students[i].userName)
// }

// switch(students[0].Username){
//   case userNameInput:
//     console.log('Worked')

// }

// console.log(students[0].Username)

// let h1 = document.querySelector('.collection-header')

// h1.innerHTML = `
//   <h1>${students[0].Username}</h1>
// `


// loginBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   if(userNameInput.value === userName && passwordInput.value === password){
  //     message.textContent = `Welcome ${userNameInput.value}`
//     message.style.color = 'green'
//     // loginForm.style.display = 'block';
//   } else if(userNameInput.value === '' || passwordInput.value === '') {
//     message.textContent = 'Please enter Username and Password'
//     message.style.color = 'red'
//   } else {
  //     message.textContent = 'Incorrect username or password Try Again'
//     message.style.color = 'red'
//     message.style.fontSize = 'larger'
//   }
// });

loginBtn.addEventListener('click', (e)=> {
  e.preventDefault();
  let resultDisplay = document.getElementById('table');
  // let resultDisplay = document.querySelector('.something')
  for(i=0;i<students.length; i++) {
    if(userNameInput.value.toUpperCase() === students[i].userName.toUpperCase() && passwordInput.value === students[i].password){
      let marketingSub = students[i].result.marketing
      let englishSub = students[i].result.English
      let civicSub = students[i].result.civic
      let physicsSub = students[i].result.physics
      let chemistrySub = students[i].result.chemistry
      let geographySub = students[i].result.geography
      let agricSub = students[i].result.Agric
      let totalper = students[i].result.total

      // let closes = document.getElementById("closes")
      // closes.style.display = 'block'
      
      resultDisplay.innerHTML = `
      <tr>
        <td class="td" colspan="7">
          <h1>Welcome Back ${students[i].userName}</h1>
          <h3>This Term Results are</h3>
        </td>
      </tr>
      <tr>
        <th>No.</th>
        <th>Subjects</th>
        <th>Test Score</th>
        <th>C.A Score</th>
        <th>Examination Score</th>
        <th>Total Score</th>
      </tr>
      <tr>
        <td>01</td>
        <td>Marketing</td>
        <td>Test Score</td>
        <td>C.A Score</td>
        <td>Examination Score</td>
        <td>${marketingSub}</td>
      </tr>
      <tr>
        <td>02</td>
        <td>English</td>
        <td>Test Score</td>
        <td>C.A Score</td>
        <td>Examination Score</td>
        <td>${englishSub}</td>
      </tr>
      <tr>
        <td>03</td>
        <td>Civic</td>
        <td>Test Score</td>
        <td>C.A Score</td>
        <td>Examination Score</td>
        <td>${civicSub}</td>
      </tr>
      <tr>
        <td>04</td>
        <td>Physics</td>
        <td>Test Score</td>
        <td>C.A Score</td>
        <td>Examination Score</td>
        <td>${physicsSub}</td>
      </tr>
      <tr>
      <td>06</td>
      <td>Chemistry</td>
      <td>Test Score</td>
        <td>C.A Score</td>
        <td>Examination Score</td>
        <td>${chemistrySub}</td>
      </tr>
      <tr>
        <td>07</td>
        <td>Geography</td>
        <td>Test Score</td>
        <td>C.A Score</td>
        <td>Examination Score</td>
        <td>${geographySub}</td>
      </tr>
      <tr>
        <td>08</td>
        <td>Agric</td>
        <td>Test Score</td>
        <td>C.A Score</td>
        <td>Examination Score</td>
        <td>${agricSub}</td>
        </tr>
          `;
          resultDisplay.style.display = 'block'
          loginForm.style.display = 'none';
          body.style.display = 'none'
          
        } else if(userNameInput.value=== '' || passwordInput.value === ''){
          message.textContent = 'Please enter Username and Password'
        } else {
          message.textContent = 'No Student Found'
        }
      }
    })
    // let table = document.querySelector('.something')
    // let closesbtn = document.getElementById('closes')
    // closesbtn.addEventListener('click', function(){
    //   window.location.reload();
    // });

closebtn.addEventListener('click', close);
// showBtn.addEventListener('click', loginBox);
// loginBtn.addEventListener('click', check);

// function check(){
  //   if(userNameInput.value === userName && passwordInput.value == password){
    //     message.textContent = `Welcome ${userNameInput.value}`
//     loginForm.style.display = 'block';
//   } else {
  //     message.textContent = 'Incorrect username or password'
//   }
// }


showBtn.forEach((button) =>{
  button.addEventListener('click', loginBox)
})

function loginBox(){
  loginForm.style.display = 'block';
}

function close(){
  loginForm.style.display = 'none';
}

let scroll = document.querySelector('.scroll');
let navbar = document.querySelector('.navbar')
let y = window.scrollY;

window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    // document.querySelector('#navbar').style.opacity = 0.9;
    navbar.style.position = 'fixed';
    navbar.style.opacity = 0.8;
    scroll.style.display = 'block'
  } else {
    navbar.style.opacity = 1;
    navbar.style.position = 'relative'
    scroll.style.display = 'none'
  }
});

// $('#navbar a, .btn').on('click', function(event) {
//   if (this.hash !== '') {
//     event.preventDefault();

//     const hash = this.hash;

//     $('html, body').animate(
//       {
//         scrollTop: $(hash).offset().top
//       },
//       800
//     );
//   }
// });

// let marketingSub = students[0].result.marketing
// let englishSub = students[0].result.English
// let civicSub = students[0].result.civic
// let physicsSub = students[0].result.physics
// let chemistrySub = students[0].result.chemistry
// let geographySub = students[0].result.geography
// let agricSub = students[0].result.Agric
// let totalper = students[0].result.total

// let resultDisplay = document.getElementById('result-show');

// resultDisplay.innerHTML = `
//       <h1>Welcome Back ${students[0].userName}</h1>
//       <p>Here are Your Results for this terms works</p>
//       <h4>
//         Marketing: ${marketingSub}<br>
//         English: ${englishSub}<br>
//         Civic: ${civicSub}<br>
//         Physics: ${physicsSub}<br>
//         Chemistry: ${chemistrySub}<br>
//         Geography: ${geographySub}<br>
//         Agric: ${agricSub}<br>
//       </h4>
//       <h2>And Your Total Score/Average percentage is ${totalper}</h2>
//       `;
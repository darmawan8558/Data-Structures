const contacts = [
  {
    id: 1,
    fullName: "Genna Arnli",
    phoneNumber: "5278765234",
    email: "garnli0@photobucket.com",
    gender: "Female"
  },
  {
    id: 2,
    fullName: "Jojo Scotchford",
    phoneNumber: "7925766855",
    email: "jscotchford1@booking.com",
    gender: "Female"
  },
  {
    id: 3,
    fullName: "Kakalina Pietasch",
    phoneNumber: "3118199662",
    email: "kpietasch2@auda.org.au",
    gender: "Female"
  },
  {
    id: 4,
    fullName: "Araldo Coil",
    phoneNumber: "5887272284",
    email: "acoil3@behance.net",
    gender: "Male"
  },
  {
    id: 5,
    fullName: "Shadow Maffi",
    phoneNumber: "8455497996",
    email: "smaffi4@bravesites.com",
    gender: "Male"
  }
];

function view(){
  // array.map
const contac = contacts.map(function (view){
	console.log(view.id, view.fullName, view.phoneNumber, view.email, view.gender);
	//(view.id, view.fullName, view.phoneNumber, view.email, view.gender)
	});
	
};
view(); 
		

function add() {
  // spread operator ...

	var id1 = document.getElementById('id').value;
		var id = parseInt(id1);
	var fullName =  document.getElementById('fullName').value;
	var phoneNumber =  document.getElementById('phone').value;
	var email =  document.getElementById('email').value;
	var gender =  document.getElementById('gender').value;
	
	
	
	const add = contacts.push({id, fullName, phoneNumber, email, gender});
		
	console.log(contacts);
	
		
};


function edit() {
	id1 = document.getElementById('id').value;
	id = parseInt(id1);
	fullName =  document.getElementById('fullName').value;
	phoneNumber =  document.getElementById('phone').value;
	email =  document.getElementById('email').value;
	gender =  document.getElementById('gender').value;
	// array.filter
	// spread operator ...
/*	var id1 = document.getElementById('id').value;
	var id = parseInt(id1);
	var edited = contacts.filter(function (ided){
		return ided.id == id;
  });
  console.log(edited);*/
  
  //Find index of specific object using findIndex method.    
objIndex = contacts.findIndex((obj => obj.id == id));

//Log object to Console.
console.log("Before update: ", contacts[objIndex])

//Update object's name property.
contacts[objIndex].fullName = fullName;
contacts[objIndex].phoneNumber = phoneNumber;
contacts[objIndex].email = email;
contacts[objIndex].gender = gender;

//Log object to console again.
console.log("After update: ", contacts[objIndex])
};

function remove() {
  // array.fil`ter
  // spread operator ....
id1 = document.getElementById('id').value;
id = parseInt(id1);
fullName =  document.getElementById('fullName').value;
phoneNumber =  document.getElementById('phone').value;
email =  document.getElementById('email').value;
gender =  document.getElementById('gender').value;
	
  //Find index of specific object using findIndex method.    
objIndex = contacts.findIndex((obj => obj.id == id));

//Log object to Console.


//Update object's name property.
contacts[objIndex].fullName = '';
contacts[objIndex].phoneNumber = '';
contacts[objIndex].email = '';
contacts[objIndex].gender = '';
contacts[objIndex].id = '';

//Log object to console again.
console.log(contacts,[objIndex])
  
};



/*view(contacts);
add(contacts);
edit(contacts, 1);
remove(contacts, 1); */

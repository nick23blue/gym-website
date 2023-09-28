function joins(e){
	var fname = document.getElementById("fname");
	var lname = document.getElementById("lname");
	var age = document.getElementById("age");
	var exp = document.getElementById("exp");
	
	
	if(fname.value !="" && lname.value !="" && age.value !="" && exp.value!=""  ){
		
	alert("You Are Now A Member of 23 Boxing");
	}else{
		alert("Please fill out all fields");
		e.preventDefault();
	}
}

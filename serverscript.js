function getTable(){
    var table = db.Execute('SELECT * FROM lostTable');
    return table;
}                 
function getFound(){
    
}
function getLost(){
}
function addLost(){
    db.Execute('INSERT TOP(1) INTO lostTable VALUES(@currentUser,@title,@details)');
    return getTable();
}
function addFound(){
}
function removeLost(){
}
function removeFound(){
}
function getData(){
    // Use Student object to retrieve all available student info
    var studentInfo = {
		career: user.Student.Career,
		faculty: user.Student.Faculty,
		departments: user.Student.Departments,
		plans: user.Student.PlanTitles,
		formOfStudy: user.Student.FormOfStudy,
		level: user.Student.Level,
		studentNum: user.Student.StudentNumber
	};
    
	// Can log the whole object to check what is being returned
	console.log(studentInfo);
	
	// Return final result	
    return studentInfo;
}
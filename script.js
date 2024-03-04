function student_Info(){
    alert("INFORMATION SUBMITTED SUCCESSFULLY...!")

    //to get information from html form
    let name,contact,add;
    name=document.getElementById("name").value;
    contact=document.getElementById("contact").value;
    add=document.getElementById("add").value;

    //push the content to localstorage
    localStorage.setItem("name",name);
    localStorage.setItem("contact",contact);
    localStorage.setItem("add",add);
}
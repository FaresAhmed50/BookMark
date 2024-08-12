
// ! declaring the global var
var bookMark_name = document.getElementById("BookMark_name");
var bookMark_url = document.getElementById("website_url");
var bookMarkList = [];
var regex = {
    BookMark_name : {
        rexg_exp : /^([a-z]|[A-z]|[0-9]){3,10}$/,
        status : false,
    },

    website_url : {
        rexg_exp : /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/,
        status : false,
    }
}

// * check if the local storage haavve any value stored in it 
// * if it have then it will push in the array then displayed on the screen
if(localStorage.getItem("BookMark") != null){

    bookMarkList = JSON.parse(localStorage.getItem("BookMark"));
    displayBookMark(bookMarkList);
}


// ! function used to add a new bookmaek
function addBookMark(){

    var Marks= {
        name : bookMark_name.value,
        url : bookMark_url.value,
    }


    if(regex[bookMark_name.id].status && regex[bookMark_url.id].status){

        if(bookMarkList.length > 0 && checkdouble(Marks.name , Marks.url) == true){
            alertdouble();
            removeValidation(bookMark_name);
            removeValidation(bookMark_url);
            clearForm();
            console.log("fareessss");
        }else{

            bookMarkList.push(Marks);
            displayBookMark(bookMarkList);
            updateLocalStorage();
            removeValidation(bookMark_name);
            removeValidation(bookMark_url);
            clearForm();
        }
    }else{
        alertMassage();
    }

    
}


// ! function used to check if the data entered by the user has been entered befor or not
function checkdouble(name , url){

    for(var i = 0 ; i < bookMarkList.length ; i++){

        if(bookMarkList[i].name == name || bookMarkList[i].url == url){
            return true;
        }
    }


}



// ! function used to display the bookmarks that the user have stored
function displayBookMark(list){

    var cartona = "";

    for(var i = 0 ; i < list.length ; i++){

        cartona += `
<tr>
                                <td>${i + 1}</td>
                                <td>${bookMarkList[i].name}</td>
                                <td>
                                    <button onclick="bookMark_Visit(${i})" class="btn btn-primary ">
                                        <i class="fa-solid fa-eye fa-2 pe-2 special"></i>
                                        Visit
                                    </button>
                                    </td>
                                <td>
                                    <button onclick="deleteBookMark(${i})" class="btn btn-danger">
                                        <i class="fa-solid fa-trash-can special"></i>
                                        Delete
                                    </button>
                                </td>
</tr>`;
    }


    document.getElementById("userData").innerHTML = cartona;
}


// ! the function used to update the local storage
function updateLocalStorage(){

    localStorage.setItem("BookMark" , JSON.stringify(bookMarkList));
}

// ! function used to delete the unwanted bookmarks
function deleteBookMark(index){

    bookMarkList.splice(index , 1);
    updateLocalStorage();
    displayBookMark(bookMarkList);
}

// !function used to vallidate the user input
function validationInput(obj){

    if(regex[obj.id].rexg_exp.test(obj.value)){

        obj.classList.add("is-valid")
        obj.classList.remove("is-invalid");
        regex[obj.id].status = true;

    }else{
        
        obj.classList.add("is-invalid");
        obj.classList.remove("is-valid");
        regex[obj.id].status = false;
    }
}


// ! function used to visit the url that the user enter
function bookMark_Visit(index){

    open(bookMarkList[index].url);
}


// * function used to clear the form after the user submet the required data
function clearForm(){

    bookMark_name.value = null;
    bookMark_url.value = null;
}


function removeValidation(obj){

    obj.classList.remove("is-valid");
    regex[obj.id].status = false;
}

//! the alert function that used to call for the alert massage 
function alertMassage(){

    Swal.fire({
        title: `Site Name or Url is not valid
        Please follow the rules below :`,
        
        
        html: 
            `<div class="d-flex  flex-column align-items-start">
            <p> <i class="fa-regular fa-circle-right p-2 fa-col" style="color:#bb4120;"></i> Site name must contain at least 3 characters</p>
            <p> <i class="fa-regular fa-circle-right p-2" style="color:#bb4120;" ></i> Site URL must be a valid one</p>
            </div>`,

        icon: "error",
        showCloseButton: true,
});
}


function alertdouble(){

    Swal.fire({
        title: "The name or the URL is already been saved",

        html:`<div class="d-flex  flex-column align-items-start">
            <p> <i class="fa-regular fa-circle-right p-2 fa-col" style="color:#bb4120;"></i>Please enter anothe name or URL</p>
            </div>`,

        icon: "error",
        showCloseButton: true,
    })
}
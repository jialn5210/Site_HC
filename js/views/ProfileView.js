import UserController from '../controllers/UserController.js'
import UserModel from '../models/UserModel.js'

export default class ProfileView {
    constructor() {
        this.userController = new UserController();
        this.userModel = new UserModel();

        //DOM references
        this.userName = document.getElementById('txtName');
        this.userEmail = document.getElementById('txtEmail');
        this.userAge = document.getElementById('txtAge');
        this.userAdress = document.getElementById('txtAdress');
        this.userPhoto = document.getElementById('txtPhoto');
        this.userPassword = document.getElementById('txtPassword');
        this.editBtn = document.querySelector("#btnEdit");
        this.editMessage = document.querySelector("#editProfileMessage");
        this.getUserPhoto1=document.getElementById('UserPhoto1')
        this.fillProfileInfo() ; 
        this.bindEditProfile();

    }

    fillProfileInfo()  {
        
        const currentUser = this.userController.getCurrentUser()
        
         this.userName.value = currentUser.username
         this.userPassword.value = currentUser.password
        this.userEmail.value = currentUser.email
        this.userAge.value = currentUser.age
        this.userAdress.value = currentUser.adress
        this.userPhoto.value = currentUser.photo 
        this.getUserPhoto1.setAttribute("src",sessionStorage.getItem("userPhoto"))
    }
    
    bindEditProfile() {
        this.editBtn.addEventListener("click", event => {
            event.preventDefault();
            try {
                if (confirm("Are you Sure you want to Save?")) {
                    if (this.userName.value != "" && this.userEmail.value != "" && this.userAge.value != "" && this.userAdress.value != "" && this.userPhoto.value != "")
                     {
                            this.userController.editProfile(this.userName.value,this.userPassword.value,this.userPhoto.value,"user",this.userAge.value,this.userAdress.value,this.userEmail.value,"true")
                            alert("Information saved with success")
                            sessionStorage.setItem('userPhoto',this.userPhoto.value)
                           
                            
                            setTimeout(() => {
                                location.href = "profile.html";
                            },
                                1000)
                    }
                    else {
                        throw Error("There are empty fields")
                    }
                }
            }
            catch (e) {
                this.displayEditMessage(e, "danger")
            }
        })
    }

    displayEditMessage(message, type) {
        this.editMessage.innerHTML =
          `<div class="alert alert-${type} d-flex justify-content-center" role="alert">${message}</div>`;
      }
 
















}


import DoctorController from '../controllers/DoctorController.js'

export default class DoctorAddView {
    constructor() {
        this.doctorController = new DoctorController();

        // add doctor DOM
        this.addDoctorForm = document.getElementById('formAddDoctor');
        this.doctorName = document.getElementById('txtName');
        this.doctorEmail = document.getElementById('txtEmail');
        this.doctorLatitude = document.getElementById('txtLatitude');
        this.doctorLongitude = document.getElementById('txtLongitude');
        this.doctorSpecialty = document.getElementById('sltSpecialty');
        this.doctorPhoto = document.getElementById('txtPhoto');
        this.doctorDescription = document.getElementById('txtDescription');
        this.pCatalog = document.querySelector('#pCatalog')
        this.addDoctorMessage = document.getElementById('addDoctorMessage');
        this.bindAddAddDoctorForm();
        this.renderCatalog(this.doctorController.getDoctors());
        
        this.bindRemoveEvent()
    }

    bindAddAddDoctorForm() {
        this.addDoctorForm.addEventListener('submit', event => {
            event.preventDefault();

            try {
                this.doctorController.addDoctor(
                    this.doctorName.value,
                    this.doctorEmail.value,
                    this.doctorLatitude.value,
                    this.doctorLongitude.value,
                    this.doctorSpecialty.value,
                    this.doctorPhoto.value,
                    this.doctorDescription.value,
                    "true",
                    ""

                );
                this.displayAddDoctorMessage('Doctor added with success!', 'success');

               
                setTimeout(() => {
                    location.href = "adminDoctors.html";
                },
                    1000);
            } catch (e) {
                this.displayAddDoctorMessage(e, 'danger');
            }
        });
    }

    displayAddDoctorMessage(message, type) {
        this.addDoctorMessage.innerHTML =
            `<div class="alert alert-${type}" role="alert">${message}</div>`;
    }

  




}

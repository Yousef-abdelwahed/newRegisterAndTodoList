
class Login{
    constructor(form,fields){
        this.form=form,
        this.fields=fields,
        this.validateonSubmit()
    };

    validateonSubmit(){
        let self=this;
        this.form.addEventListener("submit",(e)=>{
            e.preventDefault();
            var error=0;
            self.fields.forEach((field)=>{
              const  input=document.querySelector(`#${field}`)
                //check validation user
                if(self.validatFields(input)==false){
                    error++;
                }
            });
            if(error == 0){
                localStorage.setItem("auth",1)
                this.form.submit();
            }
        });
    }
    validatFields(field){
        if(field.value.trim()==""){
            this.setStatus( field,`${field.previousElementSibling.innerText} cannot be blank`,"error");
            return false;
        }else{
            if(field.type=="password"){
                if(field.value.length<8){
                    this.setStatus(
                        field,
                        `${field.previousElementSibling.innerText} must be atlist 8 charachters`,
                        "error"
                    );
                    return false
                }
            }else{
                this.setStatus(field,null,"success");
                return true
            }
        }
    }
    setStatus(field,message,_status ){
        const errorMessage=field.parentElement.querySelector(".error-message")
        if(_status=="error"){
            errorMessage.innerText=message;
            field.classList.add("input-error");
        }
        if(_status=="success"){
            errorMessage.innerText="";
            field.classList.add("input-error");
        }
    }   
}

const form = document.querySelector(".loginForm");
if (form) {
	const fields = ["username", "password"];
	const validator = new Login(form, fields);
}
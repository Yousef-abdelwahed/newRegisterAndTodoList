class Auth{
    constructor(){
        //create validation script
         document.querySelector("body").style.display="none";
        const auth= localStorage.getItem("auth");
        this.validateAuthg(auth);
    }
    validateAuthg(auth){
        if(auth != 1){
            window.location.replace("/HTML");
        }else {
            document.querySelector("body").style.display="block";
        }
    }
    logout(){
        localStorage.removeItem("auth");
        localStorage.removeItem("tasks")
        window.location.replace("/index.html");
    }
}
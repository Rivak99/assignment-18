const btn_add = document.getElementById("btn_add");
const btn_get = document.getElementById("btn_get");
const btn_delete_key_1 = document.getElementById("btn_delete_key_1");
const btn_delete_key_2 = document.getElementById("btn_delete_key_2");
const btn_clear = document.getElementById("btn_clear");

btn_add.addEventListener("click",()=>{
    sessionStorage.setItem("key_1","value_1");
    sessionStorage.setItem("key_2","value_2");
});

btn_get.addEventListener("click",()=>{
    console.log(sessionStorage.getItem("key_1"));
    console.log(sessionStorage.getItem("key_2"));
});

btn_delete_key_1.addEventListener("click",()=>{
    sessionStorage.removeItem("key_1");
});

btn_delete_key_2.addEventListener("click",()=>{
    sessionStorage.removeItem("key_2");
});


btn_clear.addEventListener("click",()=>{
    sessionStorage.clear();
});
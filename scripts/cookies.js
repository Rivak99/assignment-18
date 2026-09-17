const btn_add = document.getElementById("btn_add");
const btn_get_key_1 = document.getElementById("btn_get_key_1");
const btn_get_key_2 = document.getElementById("btn_get_key_2");
const btn_delete_key_1 = document.getElementById("btn_delete_key_1");
const btn_delete_key_2 = document.getElementById("btn_delete_key_2");

const getValueFromCookies = (key) => {
    const cookies = decodeURIComponent(document.cookie);
    const array = cookies.split("; ");
    const index = array.findIndex((element) => element.split("=")[0] === key);
    let value;
    if (!((array.length == 1 && array[0] == "") || index == -1))
    value = array[index].split("=")[1];
    else value = "";
    return value;
}

btn_add.addEventListener("click",()=>{
    const time = 60 * 60 * 24 * 7;
    document.cookie = `key_1=value_1; max-age=${time}`;
    document.cookie = `key_2=value_2; max-age=${time}`;
});

btn_get_key_1.addEventListener("click",()=>{
    console.log(getValueFromCookies("key_1"));
});

btn_get_key_2.addEventListener("click",()=>{
    console.log(getValueFromCookies("key_2"));
});

btn_delete_key_1.addEventListener("click",()=>{
    document.cookie = `key_1=null; max-age=${0}`;
});

btn_delete_key_2.addEventListener("click",()=>{
    document.cookie = `key_2=null; max-age=${0}`;
});
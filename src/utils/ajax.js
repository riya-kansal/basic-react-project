import { CONFIG } from "./constants";

export function fetchProducts(fn){
    var xmlHttpRequest = new window.XMLHttpRequest();
    xmlHttpRequest.onreadystatechange=function()
    {
        console.log(xmlHttpRequest.readyState,xmlHttpRequest.responseText);
        console.log('Data is ',xmlHttpRequest.responseText);
            if(xmlHttpRequest.readyState==4 &&xmlHttpRequest.status==200)
            {
                fn(xmlHttpRequest.responseText);
            console.log('Data is ',xmlHttpRequest.responseText);
            }

        }
        xmlHttpRequest.open('GET',CONFIG.URL,true);
        xmlHttpRequest.send(null);
    }
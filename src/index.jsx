'use strict';

export default (url, funct, err_funct) => {
  let xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = () => {
    if(xmlhttp.readyState == 4) {
      if(xmlhttp.status == 200) {
        if(funct != undefined) {
          funct(xmlhttp.responseText);
        }
      }
      else {
        if(err_funct != undefined) {
          err_funct(xmlhttp.status);
        }
      }
    }
  };

  xmlhttp.open('GET', url, true);
  xmlhttp.send();
};

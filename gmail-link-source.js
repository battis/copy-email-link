emailElt = document.querySelector('.gb_Ab').nextElementSibling;
email = emailElt && emailElt.innerText ? emailElt.innerText : '0';
navigator.clipboard.writeText(
  window.location.href.replace(/(\/u\/0)\/.*\/(.+$)/, `/u/${email}/#all/$2`)
);

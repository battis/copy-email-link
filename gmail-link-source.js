const emailElt = document.querySelector('.gb_Ab').nextElementSibling;
const email = emailElt && emailElt.innerText ? emailElt.innerText : '0';
navigator.clipboard.writeText(
  window.location.href.replace(/(\/u\/0)\/.*\/(.+$)/, `/u/${email}/#all/$2`)
);
document
  .querySelector(
    'script[src="https://groton-school.github.io/gmail-link-bookmarklet/gmail-link-source.js"])'
  )
  .remove();

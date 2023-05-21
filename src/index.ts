(() => {
  const emailElt = document.querySelector('.gb_Ab')
    ?.nextElementSibling as HTMLElement;
  const email = emailElt && emailElt.innerText ? emailElt.innerText : '0';
  navigator.clipboard.writeText(
    window.location.href.replace(/(\/u\/0)\/.*\/(.+$)/, `/u/${email}/#all/$2`)
  );
  const id = `notification-${crypto.randomUUID()}`;
  const message = document.createElement('div');
  const subject = (document.querySelector('#:1s') as HTMLElement).innerText;
  message.id = id;
  message.setAttribute(
    'style',
    'position: absolute; top: 1em; right: 1em; padding: 1em; background: lightgoldenrodyellow; color: darkgoldenrod; border-radius: 0.5em; border: solid 1px goldenrod; z-index:100000;'
  );
  message.innerText = `Copied message link to "${subject}" to  clipboard`;
  document.body.append(message);
  setTimeout(() => document.body.querySelector(`#${id}`)?.remove(), 1000);
})();

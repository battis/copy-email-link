import './styles.scss';

(() => {
  const email = (window as unknown as { GLOBALS: string[] }).GLOBALS[10];
  navigator.clipboard.writeText(
    window.location.href.replace(/(\/u\/0)\/.*\/(.+$)/, `/u/${email}/#all/$2`)
  );
  const id = `notification-${crypto.randomUUID()}`;
  const message = document.createElement('div');
  const subject = (document.querySelector('.ha .hP') as HTMLElement).innerText;
  message.id = id;
  message.className = 'message';
  message.innerText = `Copied message link to "${subject}" to  clipboard`;
  document.body.append(message);
  setTimeout(() => document.body.querySelector(`#${id}`)?.remove(), 1000);
})();

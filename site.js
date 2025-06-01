async function loadComponent(id, url) {
  const res = await fetch(url);
  if (res.ok) {
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
  } else {
    console.error('Could not load', url);
  }
}

loadComponent('header-placeholder', 'header.html');
loadComponent('footer-placeholder', 'foo.html');

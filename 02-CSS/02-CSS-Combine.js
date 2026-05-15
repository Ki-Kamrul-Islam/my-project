const pages = ['all-properties','intro','syntax','selectors','colors','background','table'];

function showPage(id) {
  pages.forEach(p => {
    document.getElementById('page-' + p).classList.remove('active');
    const nav = document.getElementById('nav-' + p);
    if (nav) nav.classList.remove('active');
  });
  document.getElementById('page-' + id).classList.add('active');
  const nav = document.getElementById('nav-' + id);
  if (nav) nav.classList.add('active');
  window.scrollTo(0, 0);
}
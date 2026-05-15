const pages = {
  'intro': 'page-intro',
  'editors': 'page-editors',
  'basic': 'page-basic',
  'elements': 'page-elements',
  'attributes': 'page-attributes',
  'headings': 'page-headings',
  'paragraphs': 'page-paragraphs',
  'styles': 'page-styles',
  'formatting': 'page-formatting',
  'links': 'page-links',
  'images': 'page-images',
  'tables': 'page-tables',
  'lists': 'page-lists',
  'video': 'page-video',
  'forms': 'page-forms',
  'input-types': 'page-input-types',
  'form-elements': 'page-form-elements'
};

function showPage(key) {
  // hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  // show target
  const el = document.getElementById(pages[key]);
  if (el) el.classList.add('active');

  // update sidebar
  document.querySelectorAll('.sidebar-link').forEach(l => {
    l.classList.remove('active');
    if (l.getAttribute('onclick') && l.getAttribute('onclick').includes(`'${key}'`)) {
      l.classList.add('active');
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}
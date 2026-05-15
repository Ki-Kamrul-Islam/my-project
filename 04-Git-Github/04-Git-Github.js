const pages = ['class-writing','introduction','syntax','statements','comments','variables','types','operators','arithmetic','assignment','compasirons','conditional','if','if-else','ternary','switch','booleans','logical','loops','loops-for','loops-while','break','continue','control-flow','strings','string-templates','string-methods','string-search','string-reference','numbers','numbers-methods','numbers-properties','numbers-reference','numbers-bitwise','number-biglnt','function-path','function-intro','function-invocation','function-parameters','function-returns','function-arguments','function-expressions','function-arrow','function-quize','object-path','object-intro','object-properties','object-methods','object-this','object-display','object-constructors','scope','code-blocks','code-hoisting','code-strict-mode','dates','date-formats','date-get','date-set','date-methods','arrays','array-methods','array-search','array-sort','array-iterations','array-reference','array-const'];

function showPage(id) {
  pages.forEach(p => {
    // পেজ এবং নেভিগেশন এলিমেন্টগুলো ভেরিয়েবলে নিচ্ছি
    const pageElement = document.getElementById('page-' + p);
    const navElement = document.getElementById('nav-' + p);

    // যদি পেজ এলিমেন্ট থাকে তবেই ক্লাস রিমুভ করবে
    if (pageElement) {
        pageElement.classList.remove('active');
    }
    
    if (navElement) {
        navElement.classList.remove('active');
    }
  });

  // টার্গেট পেজটি দেখানোর আগে চেক করে নিচ্ছি সেটি আছে কি না
  const targetPage = document.getElementById('page-' + id);
  const targetNav = document.getElementById('nav-' + id);

  if (targetPage) {
    targetPage.classList.add('active');
  } else {
    console.warn("Page not found: page-" + id);
  }

  if (targetNav) {
    targetNav.classList.add('active');
  }

  window.scrollTo(0, 0);
}

// ওয়েবসাইট লোড হওয়ার সময় ডিফল্টভাবে 'class-writing' পেজটি দেখাবে
window.onload = function() {
    showPage('class-writing');
};
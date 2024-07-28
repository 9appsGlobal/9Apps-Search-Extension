document.addEventListener('DOMContentLoaded', function() {
  const searchButton = document.getElementById('searchButton');
  const searchInput = document.getElementById('searchInput');

  searchButton.addEventListener('click', function() {
    const keyword = searchInput.value;
    const searchUrl = `https://9apps.biz/?s=${encodeURIComponent(keyword)}`;
    chrome.tabs.create({ url: searchUrl });
  });
});

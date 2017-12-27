// ==UserScript==
// @name        Get Humble Bundle Keys
// @include     https://www.humblebundle.com/home/keys
// @version     0.1
// ==/UserScript==
var hbkeys = {
};
scrapekeys = function () {
  lastpage = - 1;
  //console.log('****Humble Bundle Scraper***');
  output = "";
  output += "Game name;Key\n";
  $('div.pagination div.jump-to-page').each(function (i)
  {
    // console.log($(this));
    if ($(this).data('index') > lastpage) {
      lastpage = $(this).data('index');
    }
  });
  // console.log('Last ' + lastpage);
    i= 0;
  while (i <= lastpage)  {
    $('div.jump-to-page[data-index="' + i + '"]').trigger('click');
    $('div.keyfield').each(function (i)
    {
      parent = $(this).parents('tr').first();
      // console.log('Parent ' + parent);
      gamename = $(parent).find('td.game-name h4').first().attr('title');
      //output += gamename + ';' + $(this).attr('title') + "\n";
      if ($(this).attr('title') != "Reveal your Steam key"){
          link = "https://store.steampowered.com/account/registerkey?key=" + $(this).attr('title')+"\n";
          output += link;
          window.open(link, '_blank');
      }
        hbkeys[gamename] = $(this).attr('title');
    });
    i += 1;
  }
  document.hbkeys = hbkeys;
  console.log(output);

};
$(document).ready(function () {
  setTimeout(scrapekeys, 2000);
});

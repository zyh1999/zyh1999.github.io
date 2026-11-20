'use strict';
const controls = document.querySelector('.filters');
const papers = Array.from(document.querySelectorAll('.publication'));
const status = document.querySelector('#filter-status');
if (controls && papers.length && status) {
  controls.hidden = false;
  controls.addEventListener('click', event => {
    const button = event.target.closest('button[data-filter]');
    if (!button || !controls.contains(button)) return;
    const topic = button.dataset.filter;
    controls.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    let visible = 0;
    papers.forEach(paper => {
      paper.hidden = topic !== 'all' && paper.dataset.topic !== topic;
      if (!paper.hidden) visible += 1;
    });
    status.textContent = `Showing ${visible} ${visible === 1 ? 'publication' : 'publications'}.`;
  });
}

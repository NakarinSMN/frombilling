const inputcar4 = document.getElementById('input4');
const dropdowncar4 = document.getElementById('dropdowncar4');


inputcar4.addEventListener('input', () => {
  const value = inputcar4.value.toLowerCase();
  const items = dropdowncar4.querySelectorAll('div');

  let hasMatch = false;
  items.forEach(item => {
    if (item.textContent.toLowerCase().includes(value)) {
      item.style.display = 'block';
      hasMatch = true;
    } else {
      item.style.display = 'none';
    }
  });

  dropdowncar4.style.display = hasMatch ? 'block' : 'none';
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.custom-select')) {
    dropdowncar4.style.display = 'none';
  }
});


dropdowncar4.addEventListener('click', (e) => {
  if (e.target.tagName === 'DIV') {
    inputcar4.value = e.target.textContent;
    dropdowncar4.style.display = 'none';
  }
});




const inputcar = document.getElementById('input11');
const dropdowncar11 = document.getElementById('dropdowncar11');

// Show dropdowncar11 when typing
inputcar.addEventListener('input', () => {
  const value = inputcar.value.toLowerCase();
  const items = dropdowncar11.querySelectorAll('div');

  let hasMatch = false;
  items.forEach(item => {
    if (item.textContent.toLowerCase().includes(value)) {
      item.style.display = 'block';
      hasMatch = true;
    } else {
      item.style.display = 'none';
    }
  });

  dropdowncar11.style.display = hasMatch ? 'block' : 'none';
});

// Hide dropdowncar11 when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.custom-select')) {
    dropdowncar11.style.display = 'none';
  }
});

// Select item from dropdowncar11
dropdowncar11.addEventListener('click', (e) => {
  if (e.target.tagName === 'DIV') {
    inputcar.value = e.target.textContent;
    dropdowncar11.style.display = 'none';
  }
});


const inputcar12 = document.getElementById('input12');
const dropdowncar12 = document.getElementById('dropdowncar12');


inputcar12.addEventListener('input', () => {
  const value = inputcar12.value.toLowerCase();
  const items = dropdowncar12.querySelectorAll('div');

  let hasMatch = false;
  items.forEach(item => {
    if (item.textContent.toLowerCase().includes(value)) {
      item.style.display = 'block';
      hasMatch = true;
    } else {
      item.style.display = 'none';
    }
  });

  dropdowncar12.style.display = hasMatch ? 'block' : 'none';
});

// Hide dropdowncar11 when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.custom-select')) {
    dropdowncar12.style.display = 'none';
  }
});

// Select item from dropdowncar11
dropdowncar12.addEventListener('click', (e) => {
  if (e.target.tagName === 'DIV') {
    inputcar12.value = e.target.textContent;
    dropdowncar12.style.display = 'none';
  }
});


const inputcar13 = document.getElementById('input13');
const dropdowncar13 = document.getElementById('dropdowncar13');


inputcar13.addEventListener('input', () => {
  const value = inputcar13.value.toLowerCase();
  const items = dropdowncar13.querySelectorAll('div');

  let hasMatch = false;
  items.forEach(item => {
    if (item.textContent.toLowerCase().includes(value)) {
      item.style.display = 'block';
      hasMatch = true;
    } else {
      item.style.display = 'none';
    }
  });

  dropdowncar13.style.display = hasMatch ? 'block' : 'none';
});

// Hide dropdowncar11 when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.custom-select')) {
    dropdowncar13.style.display = 'none';
  }
});

// Select item from dropdowncar11
dropdowncar13.addEventListener('click', (e) => {
  if (e.target.tagName === 'DIV') {
    inputcar13.value = e.target.textContent;
    dropdowncar13.style.display = 'none';
  }
});



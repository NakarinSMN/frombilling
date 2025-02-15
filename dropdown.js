const input4 = document.getElementById('inputcycle4');
const dropdown4 = document.getElementById('dropdown4');


input4.addEventListener('input', () => {
  const value = input4.value.toLowerCase();
  const items = dropdown4.querySelectorAll('div');

  let hasMatch = false;
  items.forEach(item => {
    if (item.textContent.toLowerCase().includes(value)) {
      item.style.display = 'block';
      hasMatch = true;
    } else {
      item.style.display = 'none';
    }
  });

  dropdown4.style.display = hasMatch ? 'block' : 'none';
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.custom-select')) {
    dropdown4.style.display = 'none';
  }
});


dropdown4.addEventListener('click', (e) => {
  if (e.target.tagName === 'DIV') {
    input4.value = e.target.textContent;
    dropdown4.style.display = 'none';
  }
});




const input = document.getElementById('inputcycle11');
const dropdown11 = document.getElementById('dropdown11');

// Show dropdown11 when typing
input.addEventListener('input', () => {
  const value = input.value.toLowerCase();
  const items = dropdown11.querySelectorAll('div');

  let hasMatch = false;
  items.forEach(item => {
    if (item.textContent.toLowerCase().includes(value)) {
      item.style.display = 'block';
      hasMatch = true;
    } else {
      item.style.display = 'none';
    }
  });

  dropdown11.style.display = hasMatch ? 'block' : 'none';
});

// Hide dropdown11 when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.custom-select')) {
    dropdown11.style.display = 'none';
  }
});

// Select item from dropdown11
dropdown11.addEventListener('click', (e) => {
  if (e.target.tagName === 'DIV') {
    input.value = e.target.textContent;
    dropdown11.style.display = 'none';
  }
});


const input12 = document.getElementById('inputcycle12');
const dropdown12 = document.getElementById('dropdown12');


input12.addEventListener('input', () => {
  const value = input12.value.toLowerCase();
  const items = dropdown12.querySelectorAll('div');

  let hasMatch = false;
  items.forEach(item => {
    if (item.textContent.toLowerCase().includes(value)) {
      item.style.display = 'block';
      hasMatch = true;
    } else {
      item.style.display = 'none';
    }
  });

  dropdown12.style.display = hasMatch ? 'block' : 'none';
});

// Hide dropdown11 when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.custom-select')) {
    dropdown12.style.display = 'none';
  }
});

// Select item from dropdown11
dropdown12.addEventListener('click', (e) => {
  if (e.target.tagName === 'DIV') {
    input12.value = e.target.textContent;
    dropdown12.style.display = 'none';
  }
});


const input13 = document.getElementById('inputcycle13');
const dropdown13 = document.getElementById('dropdown13');


input13.addEventListener('input', () => {
  const value = input13.value.toLowerCase();
  const items = dropdown13.querySelectorAll('div');

  let hasMatch = false;
  items.forEach(item => {
    if (item.textContent.toLowerCase().includes(value)) {
      item.style.display = 'block';
      hasMatch = true;
    } else {
      item.style.display = 'none';
    }
  });

  dropdown13.style.display = hasMatch ? 'block' : 'none';
});

// Hide dropdown11 when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.custom-select')) {
    dropdown13.style.display = 'none';
  }
});

// Select item from dropdown11
dropdown13.addEventListener('click', (e) => {
  if (e.target.tagName === 'DIV') {
    input13.value = e.target.textContent;
    dropdown13.style.display = 'none';
  }
});



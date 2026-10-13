const users = [
  { name: 'Jan de Vries',  email: 'jan@bedrijf.nl',  role: 'admin', active: true  },
  { name: 'Lisa Bakker',   email: 'lisa@bedrijf.nl', role: 'user',  active: true  },
  { name: 'Tom Visser',    email: 'tom@bedrijf.nl',  role: 'user',  active: false },
  { name: 'Sara Meijer',   email: 'sara@bedrijf.nl', role: 'admin', active: true  },
];

let filter = 'all';

const usersContainer = document.getElementById('users');

const showUsers = (users) => {
  usersContainer.innerHTML = '';
  users.forEach(user => {
    const{ name, email, role, active } = user;
    const article = document.createElement('article');
    article.innerHTML = `
      <h3>${name}</h3>
      <p>${email}</p>
      <p>${role}</p>
      <p>${active ? 'Active' : 'Inactive'}</p>`;
      usersContainer.appendChild(article);
  });
};

const filterUsers = () => {
  let result = users;

  if (filter === 'admin') {
    result = users.filter(user => user.role === 'admin');
  }
  showUsers(result);
};

document.getElementById('filter-admin').addEventListener('click', () => {
  filter = 'admin';
  filterUsers();
});

document.getElementById('filter-all').addEventListener('click', () => {
  filter = 'all';
  filterUsers();
});

const userForm = document.getElementById('user-form');
userForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const role = document.getElementById('role').value;
  
  const defaultUser = {
    active: true
  };

  const newUser = {
    ...defaultUser,
    name,
    email,
    role
  };

  users.push(newUser);
  filterUsers();

  userForm.reset();
});

filterUsers();

const h1 = document.querySelector('.container h1');
const data = new Date();
const opcoes = {
  dateStyle: 'full',
  timeStyle: 'short'
};

h1.innerHTML = Intl.DateTimeFormat('pt-BR', { dateStyle: "full", timeStyle: "short" }).format(new Date())
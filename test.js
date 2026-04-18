fetch('http://localhost:3000/en').then(res => res.text()).then(t => console.log(t)).catch(e => console.error(e));

function onSubmit(e, type) {
  e.preventDefault();

  const formData = new FormData(e.target);

  const data = {};
  for (let key of formData.keys()) {
    data[key] = formData[key === 'genres' ? 'getAll' : 'get'](key);
  }

  fetch(`/${type}/create`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then((res) => res.ok && location.replace(res.url));
}

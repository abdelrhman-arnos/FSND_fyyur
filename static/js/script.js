function formData(form) {
  const data = {};
  const formData = new FormData(form);

  for (let key of formData.keys()) {
    if (key === 'genres') data[key] = JSON.stringify(formData.getAll(key));
    else data[key] = formData.get(key);
  }

  return JSON.stringify(data);
}

function createSubmission(e, type) {
  e.preventDefault();

  fetch(`/${type}/create`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: formData(e.target),
  }).then((res) => res.ok && location.replace(res.url));
}

function editSubmission(e, type, id) {
  e.preventDefault();

  fetch(`/${type}/${id}/edit`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: formData(e.target),
  }).then((res) => res.ok && location.replace(res.url));
}

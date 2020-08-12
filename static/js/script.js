const $seeking_description = document.getElementById('seeking_desc_wrapper');

document
  .querySelector('#seeking_talent input[value="True"]')
  .addEventListener('change', function ({ target }) {
    if (target.checked) $seeking_description.style.display = 'block';
  });

document
  .querySelector('#seeking_talent input[value="False"]')
  .addEventListener('change', function ({ target }) {
    if (target.checked) {
      $seeking_description.style.display = 'none';
      document.getElementById('seeking_description').value = '';
    }
  });

function redirection({ ok, url }) {
  return ok && location.replace(url);
}

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
  }).then(redirection);
}

function editSubmission(e, type, id) {
  e.preventDefault();

  fetch(`/${type}/${id}/edit`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: formData(e.target),
  }).then(redirection);
}

function onDelete(type, id, name) {
  const confirmation = confirm(`Are you sure to delete ${name}?`);

  if (confirmation)
    fetch(`/${type}/${id}`, { method: 'POST' }).then(redirection);
}

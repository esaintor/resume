window.onload = function () {
  Object.keys(user).forEach((key) => {
    if (document.getElementById(key)) {
      if (key === 'web') {
        document.getElementById(key).href = user[key];
      }
      if (['web', 'phone', 'email'].includes(key)) {
        document.getElementById(key).innerHTML = `&rarr; ${user[key]}`;
      } else {
        document.getElementById(key).innerText = user[key];
      }
    }
  });
  const experiencesHTML = document.getElementById('experiences');
  experiences.forEach(e => {
    const card = document.createElement('div');
    card.className = 'experiences';
    const title = document.createElement('h4');
    title.innerText = e.as;
    card.appendChild(title);
    const second = document.createElement('span');
    second.innerText = `${e.from} - ${e.to}`;
    card.appendChild(second);
    const description = document.createElement('p');
    description.innerText = e.description;
    card.appendChild(description);
    experiencesHTML.appendChild(card);
  });
  const certificatesHTML = document.getElementById('certificates');
  certificates.forEach(e => {
    const card = document.createElement('div');
    card.className = 'certificates';
    const title = document.createElement('h4');
    title.innerText = e.description;
    card.appendChild(title);
    const tags = document.createElement('span');
    tags.innerText = e.tags.join(', ');
    card.appendChild(tags);
    certificatesHTML.appendChild(card);
  });

  const educationsHTML = document.getElementById('educations');
  educations.forEach(e => {
    const card = document.createElement('div');
    card.className = 'educations';
    const title = document.createElement('h4');
    title.innerText = `${e.where} of ${e.as}`;
    card.appendChild(title);
    const second = document.createElement('span');
    second.innerText = `${e.from} - ${e.to}`;
    card.appendChild(second);
    const description = document.createElement('p');
    description.innerText = e.description ? e.description : 'Description';
    card.appendChild(description);
    educationsHTML.appendChild(card);
  });
  const skillsHTML = document.getElementById('skills');
  skills.forEach(e => {
    const item = document.createElement('li');
    item.innerText = e;
    skillsHTML.appendChild(item)
  });
  
}
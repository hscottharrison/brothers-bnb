async function fetchProjectData() {
  const response = await (await fetch('/project-data')).json();
  return response;
}

async function init() {
  const projectCardData = await fetchProjectData();
  renderProjectCards(projectCardData);
}

init();

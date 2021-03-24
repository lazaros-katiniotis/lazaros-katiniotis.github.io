const getProjects = async () => {
  const endpoint = "https://api.github.com/users/lazaros-katiniotis/repos";

  try {
    const response = await fetch(endpoint);
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    console.log(error);
    return projects_backup;
  }
}


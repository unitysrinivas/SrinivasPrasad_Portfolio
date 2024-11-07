// Mock data inline for testing
const data = [
    {
      "id": "1",
      "title": "Endless Runner",
      "image": "images/p1.png",
      "description": "Advanced AI system for enemies to defeat player.",
      "technologies": ["Unity", "C#", "AI"]
    },
    {
      "id": "2",
      "title": "First Person Shooter",
      "image": "images/p2.jpg",
      "description": "Secure client and assassinate enemy.",
      "technologies": ["Unity", "3D Modeling", "Multiplayer"]
    }
  ];
  
  // Get project ID from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get("id");
  
  // Find the project by ID
  const project = data.find((item) => item.id === projectId);
  if (project) {
    // Populate the page with project details
    document.getElementById("project-title").textContent = project.title;
    document.getElementById("project-image").src = project.image;
    document.getElementById("project-description").textContent = project.description;
  
    // Populate technologies list
    const techList = document.getElementById("project-technologies");
    project.technologies.forEach((tech) => {
      const li = document.createElement("li");
      li.textContent = tech;
      techList.appendChild(li);
    });
  } else {
    document.getElementById("project-details").innerHTML = "<p>Project not found.</p>";
  }  
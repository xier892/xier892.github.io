const renderProject = (data) => {
  const fragment = document.createDocumentFragment();

  Object.entries(data).forEach((array) => {
    const [entry, { title, description }] = array;
    const project = document.createElement('li');
    project.className = 'project';
    project.role = 'listitem';
    fragment.insertBefore(project, fragment.firstChild);

    const generateProjectImage = () => {
      // image section
      const projectImage = document.createElement('div');
      projectImage.className = 'projectImage';
      projectImage.setAttribute('role', 'img');
      // image container
      const projectImageContainer = document.createElement('a');
      projectImageContainer.className = ('projectImageContainer');
      projectImageContainer.href = `/${entry}`;
      // actual image
      const projectImageContainerPicture = document.createElement('picture');
      if (isInternetExplorer || isWindowsPhone) {
        projectImage.classList.add('projectImageIE');
        projectImageContainer.style.backgroundImage = isWindowsPhone ? `url(dist/assets/image/${entry}-1@1x.jpg)` : `url(dist/assets/image/${entry}-2@1x.jpg)`;
        projectImageContainer.style.backgroundSize = 'cover';
        projectImageContainer.style.backgroundPosition = 'center center';
      } else {
        const projectImageSource1 = document.createElement('source');
        const projectImageSource2 = document.createElement('source');
        const projectImageContainerIMG = document.createElement('img');
        projectImageSource1.media = '(min-width: 320px)';
        projectImageSource1.type = 'image/jpg';
        projectImageSource1.srcset = `dist/assets/image/${entry}-1@1x.jpg 1x,
          dist/assets/image/${entry}-1@2x.jpg 2x`;
        projectImageSource2.media = '(min-width: 768px)';
        projectImageSource2.type = 'image/jpg';
        projectImageSource2.srcset = `dist/assets/image/${entry}-2@1x.jpg 1x,
          dist/assets/image/${entry}-2@2x.jpg 2x`;
        projectImageContainerIMG.src = `dist/assets/image/${entry}-2@1x.jpg`;
        projectImageContainerIMG.alt = title;
        projectImageContainerPicture.appendChild(projectImageSource2);
        projectImageContainerPicture.appendChild(projectImageSource1);
        projectImageContainerPicture.appendChild(projectImageContainerIMG);
      }
      // append children
      if (!isInternetExplorer && !isWindowsPhone) {
        projectImageContainer.appendChild(projectImageContainerPicture);
      }
      projectImage.appendChild(projectImageContainer);
      project.appendChild(projectImage);
    };

    const generateProjectText = () => {
      // text section
      const projectText = document.createElement('div');
      projectText.className = 'projectText';
      projectText.setAttribute('role', 'group');
      // text header
      const projectTextHeader = document.createElement('header');
      projectTextHeader.className = 'projectTextHeader';
      projectTextHeader.setAttribute('role', 'heading');
      projectTextHeader.setAttribute('aria-level', '2');
      // title
      const projectTextHeaderTitle = document.createElement('h2');
      projectTextHeaderTitle.className = 'projectTextHeaderTitle';
      projectTextHeaderTitle.appendChild(document.createTextNode(title));
      // description
      const projectTextDescription = document.createElement('p');
      projectTextDescription.className = 'projectTextDescription';
      projectTextDescription.appendChild(document.createTextNode(description));
      // append children
      projectTextHeader.appendChild(projectTextHeaderTitle);
      projectText.appendChild(projectTextHeader);
      projectText.appendChild(projectTextDescription);
      project.appendChild(projectText);
    };

    generateProjectImage();
    generateProjectText();
  });

  const grid = document.createElement('ul');
  grid.className = 'grid';
  grid.setAttribute('role', 'list');
  grid.appendChild(fragment);
  document.getElementById('projects').appendChild(grid);
};

const projectResults = document.querySelector('#project')

const frame = function(el) {
    return `
        <div class="col xs--12 sm--12 md--6 lg--6 bg__grey--darkest">
            <img src="${el.img_url}" alt="">
        </div>
        <div class="col xs--12 sm--12 md--6 lg--6 bg__grey--darkest">
            <h4>${el.name}</h4>
            <p>${el.description}</p>
        </div>
    `;
}

async function getProject() {
    const urlParams = window.location.pathname;
    const urlSlug = urlParams.split('/')[2];

    let response = await fetch(`/api/v1/project/${urlSlug}`)
    let data = await response.json()
    let el = data.rows

    console.log(data);

    const dataFrame = document
                        .createRange()                    
                        .createContextualFragment(frame(el))
    projectResults.appendChild(dataFrame)
}

getProject()
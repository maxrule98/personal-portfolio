const projectResults = document.querySelector('#projects')

const frame = function(el) {
    return `
        <div class="col xs--12 sm--6 md--4 lg--3 bg__grey--darkest">
            <article class="card">
                <a href="/project/${el.slug}">
                </a>
                    <img src="${el.img_url}" alt="">
                    <h4>${el.name}</h4>
                    <p>${el.description}</p>
            </article>
        </div>
    `;
}

async function getProjects() {
    let response = await fetch('/api/v1/projects')
    let data = await response.json()

    for (let i = 0; i < data.rows.length; i++) {
        const el = data.rows[i];
        console.log(el);
        const dataFrame = document
                                .createRange()                    
                                .createContextualFragment(frame(el))
        projectResults.appendChild(dataFrame)
    }
}

getProjects()
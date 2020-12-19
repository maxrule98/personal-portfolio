const projects = document.querySelector('#projects')

async function fetchProjects() {
    const result = await fetch('/api/v1/projects');
    const data = await result.json()

    for (let i = 0; i < data.rows.length; i++) {
        const el = data.rows[i];
        console.log(el[0]);

        const row = document.createElement('div')
        row.classList.add('col', 'xs--12', 'sm--6', 'md--6', 'lg--3', 'bg__grey--darkest', 'fade-in')

        row.innerHTML = `
        <article class="card">
        <a href="${el[0].slug}">
        </a>
            <img src="https://images.unsplash.com/photo-1593642532871-8b12e02d091c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80" alt="">
            <h5>${el[0].name}</h5>
            <p>${el[0].desc}</p>
        </article>
        `

        projects.append(row)
    }
}

fetchProjects();
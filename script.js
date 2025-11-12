function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('linkedin-icon').addEventListener('click', function() {
        window.open('https://www.linkedin.com/in/rayan-taghizadeh/', '_blank');
    });

    document.getElementById('github-icon').addEventListener('click', function() {
        window.open('https://www.github.com/rayantag', '_blank');
    });

    document.getElementById('chess-icon').addEventListener('click', function() {
        window.open('https://www.chess.com/member/fibrinogen', '_blank');
    });

    document.getElementById('email-icon').addEventListener('click', function() {
        window.location.href = 'mailto:rayant@berkeley.edu';
    });
});

const aboutMeText = "Hi! My name is Rayan, and I studied computer science 💻 and chemical biology 🧬 at UC Berkeley. I am interested in using computer science to increase human safety and longevity, addressed in fields like drug discovery, computer vision for autonomy, reliability, and many others. At Berkeley, I was a project manager for <a href='https://bd.studentorg.berkeley.edu' target='_blank' class='bold-blue-link'>Big Data at Berkeley</a>, a developer for <a href='https://www.dailycal.org' target='_blank' class='bold-blue-link'>The Daily Californian</a> 🗞️, a member of CS course staff, and a 2x intramural soccer champion ⚽️. In my free time, I play chess ♟️, watch a variety of sports, and lift weights when I'm not already hurt."
document.getElementById('about_me_text').innerHTML = aboutMeText;

const p1description = "An exploration into methods of LLM fine-tuning to adapt to various syntactic structures ('Yoda-like', in this example). Hyperparameters included varying LoRA rank, target modules, and joint training. Trained on a Kaggle Yoda dataset and benchmarked with loss function and Perplexity score metrics. Exciting, this endeavor was."
document.getElementById('p1desc').innerHTML = p1description;

const p2description = "Inspired by Las Vegas. Web interface featuring LLM-derived sports articles, seasonal stat leaders, and input bar for a user to specify a current NBA player. The page then displays the predicted number of points the player will score in their next game, advised by a neural network trained on >750,000 previous games. Still tinkering to beat the odds."
document.getElementById('p2desc').innerText = p2description;

const p3description = "Premilinary investigation into the effect of <a href='https://arxiv.org/abs/2003.04960' target='_blank' class='bold-blue-link'>curriculum learning</a> on generation of drug-like molecules. Scoring functions included molecular weight and number of hydrogen bonds, among a few others listed in this <a href='https://jcheminf.biomedcentral.com/articles/10.1186/s13321-024-00812-5' target='_blank' class='bold-blue-link'>REINVENT4</a> paper. Schedules were benchmarked against 'expert' (me), notified by my <a href='https://github.com/rayantag/Drug_Discovery_Models' target='_blank' class='bold-blue-link'>previous attempts at molecular generation</a> and past collaboration with Prescient Design. More work should be done to derive actionable results.";
document.getElementById('p3desc').innerHTML = p3description;

const p4description = "Mock fellowship paper in a molecular biology laboratory to characterize the Kinesin-5 protein. Procedures included molecular cloning, PCR, Bradford assays, Malachite Green assays, Western Blotting, purification, and other standard techniques recorded in a Benchling notebook. Future direction to translate experiments to Eg5, the human analog of Kinesin-5 with research shown to have potential anti-cancer effects when inhibited. Final slide deck presents the conclusions made from important experiments, and the next steps derived from them."
document.getElementById('p4desc').innerText = p4description;

const p5description = "Program to encrypt and decrypt cryptographic messages akin to the Engima machine used in WW2, via progressive substitution ciphers performed by rotors. Didn't work so well in the 1940s, so I wouldn't put too much faith in it now. <a href='https://inst.eecs.berkeley.edu/~cs61b/sp22/materials/proj/proj1/index.html' target='_blank' class='bold-blue-link'>Assignment description</a>"
document.getElementById('p5desc').innerHTML = p5description;

const interests_c = "I first picked up a chess piece when I was four years old and haven't put it down since. Throughout my time playing, I have been: <br>■ UC Berkeley Team Captain<br> ■ 1x bronze medal 🥉 (tied for 1st) representing team USA at the U-12 world championship <br> ■ 4x junior national champion <br> ■ 6x junior all-American team <br> ■ >100 students taught through camps and lessons <br> ■ >2900 peak rating on chess.com in blitz and bullet (top 500 out of ~30,000,000 activate players)"
const interests_s = "I have been playing soccer since I was five, and my favorite team is Arsenal FC. I also watch and play a variety of other sports somewhat competitively, including basketball (favorite team varies 🙂‍↕️), football (49ers and Ravens), and tennis."
const interests_m = "Other current interests include cooking, reading, and walking."

function showTooltip(id) {
    const tooltipContainer = document.getElementById('tooltip_container');
    const tooltipLogo = document.getElementById('tooltip_logo');
    const tooltipDescription = document.getElementById('tooltip_description');
    const tooltipTitle = document.getElementById('tooltip_title');

    let logoSrc;
    let description;
    let title;

    switch(id) {
        case 'sambanova':
            logoSrc = './assets/sambanova.svg';
            title = 'Current Position';
            description = 'placeholder';
            break;
        case 'tesla':
            logoSrc = './assets/tesla.svg';
            title = 'Engineering Intern, Summer 2024';
            description = 'Linking the Cell Reliability and Data Engineering teams by creating tools to automate cell test analysis.';
            break;
        case 'rivian':
            logoSrc = './assets/rivian.svg';
            title = 'GenAI Software Engineer, Fall 2023 - Spring 2024';
            description = "The <b>first task</b> was to build a pipeline to construct an external Design Failure Mode and Effect Analysis (DFMEA) database. Using Google's SERP API and the GPT-4 API, this function allowed reliability engineers to query information about EV parts not already included internally, eliminating the need for manual lookup. The <b>second project</b> involved reworking RivChat, the reliability team's interal ChatBot. We engineered a RAG-based agent capable of retrieving relevant information from their internal database via <a href='https://platform.openai.com/docs/guides/function-calling' target='_blank' class='bold-blue-link'>OpenAI's Function Calling</a>, and the generated external database through <a href='https://platform.openai.com/docs/guides/embeddings/use-cases' target='_blank' class='bold-blue-link'>embeddings</a>.";
            break;
        case 'bdab':
            logoSrc = './assets/bigdata.png';
            title = 'Data Consultant -> Project Manager, Fall 2022 - Winter 2023';
            description = "As a data consultant for <b>American Eagle</b> team, I helped write an optimization algorithm to minimize shipping costs by placing specific products in 1 of 7 national AE distribution centers. This was achieved through parsing millions of previous orders, placing specific emphasis on geographic biases, and products commonly ordered together. On the <b>Hologic</b> team, we implemented <a href='https://arxiv.org/abs/2103.03230' target='_blank' class='bold-blue-link'> Barlow Twins</a> on black and white images to generate dense breast cancer image embeddings, which were then used downstream to classify various characteristics. As a project manager for <b>Quokka Brew</b>, I led a team in gathering substantial information on market competition, UI/UX design, and product recommendations.";
            break;
        case 'gene':
            logoSrc = './assets/genentech.svg';
            title = 'SMPC Data Science Intern, Summer 2022';
            description = 'Only intern on the Small Molecule Process Chemistry (SMPC) team. Created an ETL Pipeline using SQLAlchemy to construct a relational database with over 700,000 reaction molecules to facilitate machine learning predictions; evaluated multi-objective optimization algorithms against ligands for catalytic reactions, while generating descriptive PowerBI and Tableau visualizations. The database was later applied towards publications by R&D scientists.';
            break;
    }

    tooltipLogo.innerHTML = `<img src="${logoSrc}" alt="${id} logo">`;
    tooltipDescription.innerHTML = description;
    tooltipTitle.textContent = title;

    // Use smooth transition
    tooltipContainer.classList.add('show');
    tooltipContainer.dataset.activeId = id;

    document.querySelectorAll('.exp_images').forEach(img => img.classList.remove('hover-highlighted'));
    document.getElementById(id).classList.add('hover-highlighted');
}

document.addEventListener('DOMContentLoaded', function() {
    showDesc('chess', document.querySelector('.menu_button'));
});

function showDesc(name, event) {
    let description;
    switch(name) {
        case 'chess':
            description = interests_c;
            break;
        case 'sports':
            description = interests_s;
            break;
        case 'misc':
            description = interests_m;
            break;
    }
    document.getElementById('i_desc_par').innerHTML = description;

    var buttons = document.querySelectorAll('.menu_button');
    buttons.forEach(function(button) {
        button.classList.remove('active');
    });

    event.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.1
    });

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        observer.observe(project);
    });
});

// Rotating text functionality
const rotatingTexts = [
    "Student at UC Berkeley",
    "Software Engineer",
    "Chess Player"
];
let currentTextIndex = 0;

function rotateText() {
    const textElement = document.querySelector('.section__text_p2');

    // Fade out
    textElement.classList.add('fade');

    setTimeout(() => {
        // Change text
        currentTextIndex = (currentTextIndex + 1) % rotatingTexts.length;
        textElement.textContent = rotatingTexts[currentTextIndex];

        // Fade in
        textElement.classList.remove('fade');
    }, 500); // Wait for fade out to complete
}

// Start rotation every 3 seconds
setInterval(rotateText, 3000);
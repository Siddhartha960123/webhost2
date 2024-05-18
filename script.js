/*Login form*/

document.getElementById('signInButton').onclick = function() {
    document.getElementById('loginModal').style.display = 'flex';
}

window.onclick = function(event) {
    var modal = document.getElementById('loginModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

/*Login form ends*/

/*Sign Up form starts here*/

document.getElementById('signUpButton').onclick = function() {
    document.getElementById('SignUpModal').style.display = 'flex';
}

window.onclick = function(event) {
    var modal1 = document.getElementById('SignUpModal');
    if (event.target == modal1) {
        modal1.style.display = 'none';
    }
}

/*Sign up form ends here*/


document.addEventListener("DOMContentLoaded", function() {
    // Get the login form
    var loginForm = document.getElementById("loginForm");

    // Get the button that opens the login form
    var signInButton = document.querySelector(".auth-buttons a[href='#signin']");

    // Get the <span> element that closes the login form
    var closeBtn = document.getElementById("closeLoginForm");

    // When the user clicks the button, open the login form
    signInButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior
        loginForm.style.display = "block";
    });

    // When the user clicks on <span> (x), close the login form
    closeBtn.addEventListener("click", function() {
        loginForm.style.display = "none";
    });

    // When the user clicks anywhere outside of the login form, close it
    window.addEventListener("click", function(event) {
        if (event.target == loginForm) {
            loginForm.style.display = "none";
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const uploadFileButton = document.getElementById('uploadFileButton');
    const addUrlButton = document.getElementById('addUrlButton');
    const addTextButton = document.getElementById('addTextButton');
    const startSummarizingButton = document.getElementById('startSummarizingButton');

    const uploadFileSection = document.getElementById('uploadFileSection');
    const addUrlSection = document.getElementById('addUrlSection');
    const addTextSection = document.getElementById('addTextSection');
    const container = document.querySelector('.container');

    function hideAllSections() {
        uploadFileSection.style.display = 'none';
        addUrlSection.style.display = 'none';
        addTextSection.style.display = 'none';
    }

    uploadFileButton.addEventListener('click', function() {
        hideAllSections();
        uploadFileSection.style.display = 'block';
    });

    addUrlButton.addEventListener('click', function() {
        hideAllSections();
        addUrlSection.style.display = 'block';
    });

    addTextButton.addEventListener('click', function() {
        hideAllSections();
        addTextSection.style.display = 'block';
    });

    // Default to show the text section
    addTextButton.click();

    startSummarizingButton.addEventListener('click', function() {
        container.scrollIntoView({ behavior: 'smooth' });
    });
});

/Navbar links functioning/

document.addEventListener('DOMContentLoaded', () => {   /aboutlink func./
    const aboutLink = document.getElementById('aboutLink');
    const aboutsection = document.getElementById('summary');

    aboutLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default anchor link behavior
        aboutsection.scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', () => {   /servicelink func./
    const serviceLink = document.getElementById('serviceLink');
    const servicesection = document.getElementById('service');

    serviceLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default anchor link behavior
        servicesection.scrollIntoView({ behavior: 'smooth' });
    });
});
 


/*Dark and light theme*/

document.addEventListener('DOMContentLoaded', function() {
    const themeToggleButton = document.getElementById('themeToggleButton');
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        themeToggleButton.classList.remove('fa-moon');
        themeToggleButton.classList.add('fa-sun');
    }

    themeToggleButton.addEventListener('click', function() {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'light') {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggleButton.classList.remove('fa-moon');
            themeToggleButton.classList.add('fa-sun');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeToggleButton.classList.remove('fa-sun');
            themeToggleButton.classList.add('fa-moon');
        }
    });
});
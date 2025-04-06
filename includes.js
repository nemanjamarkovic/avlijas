document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    console.log('Loading includes for:', window.location.pathname);
    console.log('Header element:', header);
    console.log('Footer element:', footer);

    // Add loading indicators
    header.innerHTML = '<div class="text-center py-3">Loading...</div>';
    footer.innerHTML = '<div class="text-center py-3">Loading...</div>';

    // Load header
    fetch('header.html')
        .then(response => {
            console.log('Header fetch response:', response);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            header.innerHTML = data;
            setActiveStates();
        })
        .catch(error => {
            console.error('Error loading header:', error);
            header.innerHTML = '<div class="alert alert-danger">Error loading header. Please refresh the page.</div>';
        });

    // Load footer
    fetch('footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            footer.innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading footer:', error);
            footer.innerHTML = '<div class="alert alert-danger">Error loading footer. Please refresh the page.</div>';
        });
});

function setActiveStates() {
    // Get current path
    const currentPath = window.location.pathname;
    
    // Remove all active classes first
    document.querySelectorAll('.nav-link, .dropdown-item').forEach(link => {
        link.classList.remove('active');
    });
    
    // Set active states based on current path
    if (currentPath === '/' || currentPath === '/index.html') {
        document.querySelector('a[href="/"]').classList.add('active');
    } else if (currentPath.includes('/nemacka')) {
        document.querySelector('a[href="/nemacka"]').classList.add('active');
        document.querySelector('.dropdown-toggle').classList.add('active');
    } else if (currentPath.includes('/austrija')) {
        document.querySelector('a[href="/austrija"]').classList.add('active');
        document.querySelector('.dropdown-toggle').classList.add('active');
    } else if (currentPath.includes('/svajcarska')) {
        document.querySelector('a[href="/svajcarska"]').classList.add('active');
        document.querySelector('.dropdown-toggle').classList.add('active');
    }
} 
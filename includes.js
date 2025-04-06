document.addEventListener('DOMContentLoaded', function() {
    // Get the header and footer container elements
    const headerContainer = document.querySelector('#header-container');
    const footerContainer = document.querySelector('#footer-container');

    console.log('Document loaded, debugging includes');
    
    // Debug information
    const debugInfo = {
        url: window.location.href,
        path: window.location.pathname,
        origin: window.location.origin,
        containers: {
            header: headerContainer ? 'Found' : 'Not found',
            footer: footerContainer ? 'Found' : 'Not found'
        }
    };
    
    console.log('Debug info:', debugInfo);
    
    // Display debug panel
    const debugPanel = document.createElement('div');
    debugPanel.style.position = 'fixed';
    debugPanel.style.bottom = '0';
    debugPanel.style.right = '0';
    debugPanel.style.backgroundColor = 'rgba(0,0,0,0.8)';
    debugPanel.style.color = 'white';
    debugPanel.style.padding = '10px';
    debugPanel.style.zIndex = '9999';
    debugPanel.style.maxHeight = '300px';
    debugPanel.style.overflowY = 'auto';
    debugPanel.style.maxWidth = '500px';
    debugPanel.innerHTML = `
        <h5>Include Debugger</h5>
        <p>URL: ${debugInfo.url}</p>
        <p>Path: ${debugInfo.path}</p>
        <p>Header container: ${debugInfo.containers.header}</p>
        <p>Footer container: ${debugInfo.containers.footer}</p>
        <div id="debug-log"></div>
        <button id="test-direct-content">Test Direct Content</button>
    `;
    document.body.appendChild(debugPanel);
    
    // Direct content test
    document.getElementById('test-direct-content').addEventListener('click', function() {
        // Try setting direct HTML to containers to see if they work
        if (headerContainer) {
            headerContainer.innerHTML = `
                <div class="top-bar py-2">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-md-6">
                                <div class="contact-info">Test Header - Direct Content</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            logDebug('Set direct content to header successfully');
        } else {
            logDebug('Header container not found for direct content test');
        }
        
        if (footerContainer) {
            footerContainer.innerHTML = `
                <footer class="bg-dark text-white py-4">
                    <div class="container">
                        <p>Test Footer - Direct Content</p>
                    </div>
                </footer>
            `;
            logDebug('Set direct content to footer successfully');
        } else {
            logDebug('Footer container not found for direct content test');
        }
    });
    
    function logDebug(message) {
        const logElement = document.getElementById('debug-log');
        const time = new Date().toLocaleTimeString();
        logElement.innerHTML += `<p>[${time}] ${message}</p>`;
        console.log(`[${time}] ${message}`);
    }
    
    // First try to load header with inline fetch status logging
    if (headerContainer) {
        headerContainer.innerHTML = '<div class="text-center py-3">Attempting to load header...</div>';
        
        logDebug('Attempting to load header.html');
        
        // Try with a direct inline fetch to see exactly what happens
        fetch('header.html')
            .then(response => {
                logDebug(`Header fetch status: ${response.status} ${response.statusText}`);
                return response.text();
            })
            .then(data => {
                logDebug(`Header content loaded: ${data.length} characters`);
                headerContainer.innerHTML = data;
                logDebug('Header content inserted into DOM');
            })
            .catch(error => {
                logDebug(`Header fetch error: ${error.message}`);
                headerContainer.innerHTML = `<div class="alert alert-danger">Error: ${error.message}</div>`;
            });
    }
    
    // Try to load footer with similar debugging
    if (footerContainer) {
        footerContainer.innerHTML = '<div class="text-center py-3">Attempting to load footer...</div>';
        
        logDebug('Attempting to load footer.html');
        
        fetch('footer.html')
            .then(response => {
                logDebug(`Footer fetch status: ${response.status} ${response.statusText}`);
                return response.text();
            })
            .then(data => {
                logDebug(`Footer content loaded: ${data.length} characters`);
                footerContainer.innerHTML = data;
                logDebug('Footer content inserted into DOM');
            })
            .catch(error => {
                logDebug(`Footer fetch error: ${error.message}`);
                footerContainer.innerHTML = `<div class="alert alert-danger">Error: ${error.message}</div>`;
            });
    }
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
        document.querySelector('a[href="/"]')?.classList.add('active');
    } else if (currentPath.includes('/nemacka')) {
        document.querySelector('a[href="/nemacka"]')?.classList.add('active');
        document.querySelector('.dropdown-toggle')?.classList.add('active');
    } else if (currentPath.includes('/austrija')) {
        document.querySelector('a[href="/austrija"]')?.classList.add('active');
        document.querySelector('.dropdown-toggle')?.classList.add('active');
    } else if (currentPath.includes('/svajcarska')) {
        document.querySelector('a[href="/svajcarska"]')?.classList.add('active');
        document.querySelector('.dropdown-toggle')?.classList.add('active');
    }
} 
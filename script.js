function navigateTo(page) {
    fetch(page, { method: 'HEAD' })
        .then(response => {
            if (response.ok) {
                window.location.href = page; 
            } else {
                console.warn(`Page not found: ${page}`);
            }
        })
        .catch(error => {
            console.error(`Error checking page: ${page}`, error);
        });
}

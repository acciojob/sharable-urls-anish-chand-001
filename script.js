// your code here
        const form = document.getElementById('urlForm');
        const nameInput = document.getElementById('name');
        const yearInput = document.getElementById('year');
        const urlDisplay = document.getElementById('url');

        form.addEventListener('submit', function(event) {
            // Prevent the default form submission page reload
            event.preventDefault(); 

            const baseUrl = 'https://localhost:8080/';
            const params = [];

            const nameValue = nameInput.value.trim();
            const yearValue = yearInput.value.trim();

            // Check if name has a value, encode it for safe URL formatting
            if (nameValue) {
                params.push(`name=${encodeURIComponent(nameValue)}`);
            }

            // Check if year has a value
            if (yearValue) {
                params.push(`year=${encodeURIComponent(yearValue)}`);
            }

            // Construct the final URL based on whether params exist
            if (params.length > 0) {
                urlDisplay.textContent = `${baseUrl}?${params.join('&')}`;
            } else {
                urlDisplay.textContent = baseUrl;
            }
        });

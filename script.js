const form = document.getElementById('urlForm');
        const nameInput = document.getElementById('name');
        const yearInput = document.getElementById('year');
        const urlDisplay = document.getElementById('url');

        form.addEventListener('submit', function(event) {
            // CRITICAL: Stops the page from refreshing when "Submit" is clicked
            event.preventDefault(); 

            const baseUrl = 'https://localhost:8080/';
            const params = [];

            // Read raw values from the inputs
            const nameValue = nameInput.value.trim();
            const yearValue = yearInput.value.trim();

            if (nameValue) {
                params.push(`name=${encodeURIComponent(nameValue)}`);
            }

            if (yearValue) {
                params.push(`year=${encodeURIComponent(yearValue)}`);
            }

            // Exactly match the string structure the testing assertions look for
            if (params.length > 0) {
                urlDisplay.textContent = `${baseUrl}?${params.join('&')}`;
            } else {
                urlDisplay.textContent = baseUrl;
            }
        });
        function shortenURL() {
            const longURL = document.getElementById("urlInput").value;
            const shortURL = generateRandomString(10); 
            localStorage.setItem(shortURL, longURL);

            document.getElementById("shortURL").textContent = "Short URL: " + shortURL;
        }

       
        function expandURL() {
            const shortURL = document.getElementById("shortURLInput").value;

            
            const longURL = localStorage.getItem(shortURL);

            if (longURL) {
                document.getElementById("expandedURL").textContent = "Expanded URL: " + longURL;
            } else {
                document.getElementById("expandedURL").textContent = "Short URL not found";
            }
        }

        
        function generateRandomString(length) {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let result = '';
            for (let i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            return result;
        }
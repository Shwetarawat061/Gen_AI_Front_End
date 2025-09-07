        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault();

            // Simple validation
            const firstName = document.getElementById('first-name').value;
            const lastName = document.getElementById('last-name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || message.trim() === '') {
                showModal('Please fill out all the fields.', 'bg-red-500');
                return;
            }

            // Create a custom modal for the success message
            showModal('Thank you! Your message has been sent.', 'bg-green-500');

            // You can add your form submission logic here
            // For example, using fetch() to send the data to a server
            // console.log('Form submitted:', { firstName, lastName, email, subject: document.getElementById('subject').value, message });
        });

        function showModal(message, bgColor) {
            // Remove any existing modal
            const existingModal = document.getElementById('custom-modal');
            if (existingModal) {
                existingModal.remove();
            }

            // Create a new modal element
            const modal = document.createElement('div');
            modal.id = 'custom-modal';
            modal.className = 'fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center';
            modal.innerHTML = `
                <div class="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full mx-4 text-center">
                    <p class="text-lg font-semibold mb-4">${message}</p>
                    <button class="px-4 py-2 rounded-lg text-white ${bgColor} hover:opacity-80">Close</button>
                </div>
            `;
            document.body.appendChild(modal);

            // Add event listener to close the modal
            modal.querySelector('button').addEventListener('click', () => {
                modal.remove();
            });
        }
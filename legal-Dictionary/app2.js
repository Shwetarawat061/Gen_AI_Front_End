
        // Sample data for the dictionary
        const dictionaryData = {
            "Consideration": {
                phonetic: "/kənˌsidəˈreɪʃən/",
                simple: "Something of value (like money, goods, or services) that each party gives to the other in a contract to make it legally binding.",
                legal: "In contract law, consideration is the exchange of something of value between parties that makes their agreement legally enforceable. Without consideration, a contract is typically not valid.",
                example: "If you agree to paint someone's house for $500, your consideration is the painting work, and their consideration is the $500 payment. Both parties are giving something of value.",
                related: ["Contract", "Agreement", "Mutual Assent", "Bargained-for Exchange"],
                types: ["Executed Consideration", "Past Consideration", "Nominal Consideration"]
            },
            "Covenant": {
                phonetic: "/ˈkʌvənənt/",
                simple: "A formal agreement or promise, often in a contract or legal document.",
                legal: "A solemn, binding promise or agreement. In real estate, it's a promise by a landowner to do or not do certain things on their property.",
                example: "A homeowner might sign a deed with a restrictive covenant promising not to build a fence over a certain height.",
                related: ["Agreement", "Contract", "Promise"],
                types: ["Express Covenant", "Implied Covenant"]
            },
            "Demise": {
                phonetic: "/dɪˈmaɪz/",
                simple: "The transfer of an estate, especially in property or land, for a limited term.",
                legal: "The legal term for a transfer of an estate, particularly in a lease.",
                example: "The lease agreement stated the demise of the property was for a period of ten years.",
                related: ["Lease", "Estate", "Transfer"],
                types: ["Leasehold Demise"]
            },
            "Party of the First Part": {
                phonetic: "/ˈpɑːrti əv ðə fɜːrst pɑːrt/",
                simple: "A formal way to refer to the first person or company mentioned in a contract.",
                legal: "A legal term for the first party listed in a contract or agreement.",
                example: "The agreement between the Party of the First Part (the seller) and the Party of the Second Part (the buyer) was signed today.",
                related: ["Contract", "Party", "Agreement"],
                types: []
            },
            "Whereas": {
                phonetic: "/wɛərˈæz/",
                simple: "A word used at the beginning of a legal document to introduce a statement of fact or a preamble.",
                legal: "A formal introductory word used to start a recital in a legal document, stating background facts or considerations.",
                example: "WHEREAS, the parties have agreed to the terms herein, NOW, THEREFORE, they have executed this agreement.",
                related: ["Preamble", "Recital", "Contract"],
                types: []
            }
        };

        const categories = {
            "Contract Law": ["Consideration", "Covenant", "Party of the First Part"],
            "Property Law": ["Demise", "Whereas"],
            "Corporate Law": [],
            "Criminal Law": []
        };

        // Function to render the list of terms
        function renderTerms() {
            const popularTermsList = document.getElementById('popular-terms-list');
            popularTermsList.innerHTML = '';
            const terms = Object.keys(dictionaryData);
            terms.forEach(term => {
                const li = document.createElement('li');
                li.className = 'term-item text-gray-600';
                li.textContent = term;
                li.onclick = () => showTermDetails(term);
                popularTermsList.appendChild(li);
            });
        }

        // Function to render the categories
        function renderCategories() {
            const categoriesList = document.getElementById('categories-list');
            categoriesList.innerHTML = '';
            const categoryKeys = Object.keys(categories);
            categoryKeys.forEach(category => {
                const li = document.createElement('li');
                li.className = 'category-item text-blue-600';
                li.textContent = category;
                li.onclick = () => {
                    alert(`Displaying terms for category: ${category}`);
                    // You would add logic here to filter and display terms
                };
                categoriesList.appendChild(li);
            });
        }

        // Function to show term details on the right pane
        function showTermDetails(term) {
            const detailsContainer = document.getElementById('term-details');
            const data = dictionaryData[term];
            if (!data) {
                detailsContainer.innerHTML = `<div class="text-center text-gray-500 mt-20">Term not found.</div>`;
                return;
            }

            // Remove active class from all terms
            document.querySelectorAll('.term-item').forEach(el => el.classList.remove('active'));
            // Add active class to the clicked term
            const clickedTerm = Array.from(document.querySelectorAll('.term-item')).find(el => el.textContent === term);
            if (clickedTerm) {
                clickedTerm.classList.add('active');
            }

            detailsContainer.innerHTML = `
                <div class="mb-6">
                    <h2 class="text-3xl font-bold text-gray-800">${term}</h2>
                    <p class="text-gray-500 mt-1">${data.phonetic}</p>
                </div>
                <div class="space-y-6">
                    <div>
                        <h3 class="text-lg font-semibold text-blue-600 mb-2">Simple Definition:</h3>
                        <p class="text-gray-700">${data.simple}</p>
                    </div>
                    <div>
                        <h3 class="text-lg font-semibold text-blue-600 mb-2">Legal Definition:</h3>
                        <p class="text-gray-700">${data.legal}</p>
                    </div>
                    <div>
                        <h3 class="text-lg font-semibold text-blue-600 mb-2">Example:</h3>
                        <div class="example-box">
                            <p class="text-gray-700">${data.example}</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <button class="pronounce-btn" onclick="handlePronounce('${term}')">
                            <svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M12 19l4-4 4 4M8.464 15.536a5 5 0 000-7.072M5 12h14" />
                            </svg>
                            <span>Pronounce</span>
                        </button>
                        <button class="translate-btn" onclick="handleTranslate('${term}')">
                            <svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <span>Translate</span>
                        </button>
                    </div>
                    <div class="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0">
                        <div>
                            <h3 class="text-lg font-semibold text-gray-700 mb-2">Related Terms:</h3>
                            <ul class="list-disc list-inside space-y-1">
                                ${data.related.map(item => `<li class="text-blue-600 hover:underline cursor-pointer" onclick="showTermDetails('${item}')">${item}</li>`).join('')}
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold text-gray-700 mb-2">Types:</h3>
                            <ul class="list-disc list-inside space-y-1">
                                ${data.types.map(item => `<li class="text-gray-700">${item}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        }

        // JavaScript functions for the buttons
        function handlePronounce(term) {
            alert(`You clicked 'Pronounce' for the term: ${term}`);
        }

        function handleTranslate(term) {
            alert(`You clicked 'Translate' for the term: ${term}`);
        }

        // Initialize the app with a default term
        window.onload = () => {
            renderTerms();
            renderCategories();
            showTermDetails("Consideration");
        };
   
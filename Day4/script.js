let ascendingOrder = true;

        function filter(order) {
            ascendingOrder = order === 'ascending';
            sort();
        }

        function sort(by) {
            const table = document.getElementById('userTable');
            const tbody = table.querySelector('tbody');
            const rows = Array.from(tbody.querySelectorAll('tr'));

            rows.sort((a, b) => {
                let valueA, valueB;
                if (by === 'name' || by === undefined) {
                    valueA = a.cells[1].textContent.trim();
                    valueB = b.cells[1].textContent.trim();
                } else if (by === 'date') {
                    valueA = new Date(a.cells[3].textContent.trim());
                    valueB = new Date(b.cells[3].textContent.trim());
                } else if (by === 'id') {
                    valueA = parseInt(a.cells[0].textContent.trim());
                    valueB = parseInt(b.cells[0].textContent.trim());
                }
                return ascendingOrder ? compareValues(valueA, valueB) : compareValues(valueB, valueA);
            });

            rows.forEach(row => {
                tbody.appendChild(row);
            });
        }

        function compareValues(valueA, valueB) {
            if (valueA === valueB) {
                return 0;
            }
            return valueA < valueB ? -1 : 1;
        }
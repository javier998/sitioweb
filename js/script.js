// ===== MENÚ RESPONSIVO =====
        const btn = document.querySelector('.nav-toggle');
        const nav = document.querySelector('.nav');
        btn && btn.addEventListener('click', () => nav.classList.toggle('open'));

        // ===== BUSCADOR =====
        const form = document.querySelector('#searchForm');
        const inputSearch = document.querySelector('#searchInput');
        const mainInterface = document.querySelector('#mainInterface');
        const resultArea = document.querySelector('#resultArea');
        const mensaje = resultArea.querySelector('.mensaje');  // <--- importante
        const btnVolver = document.querySelector('#btnVolver'); // <--- importante

        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const term = inputSearch.value.trim();

            if (term === "") {
                resultArea.classList.remove('hidden');
                btnVolver.classList.remove('hidden');
                return;
            }

            buscar(term);
        });

        function buscar(valor) {
            // Ocultar contenido principal
            mainInterface.classList.add('hidden');

            // Mostrar área de resultados
            resultArea.classList.remove('hidden');

            // Mostrar mensaje sin borrar el botón
            mensaje.textContent = `Buscando información de "${valor}"...`;

            // Mostrar botón
            btnVolver.classList.remove('hidden');

            limpiar();
        }

        btnVolver.addEventListener('click', function () {
            // Restaurar contenido principal
            mainInterface.classList.remove('hidden');

            // Ocultar área de resultados
            resultArea.classList.add('hidden');

            // Ocultar el botón otra vez
            btnVolver.classList.add('hidden');
        });

        function limpiar() {
            inputSearch.value = "";
        }
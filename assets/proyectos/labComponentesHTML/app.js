let tareas = [];
let total = 0;
let completadas = 0;

const lista = document.getElementById("lista");
const totalSpan = document.getElementById("total");
const completadasSpan = document.getElementById("completadas");

console.log("App iniciada");

// Mostrar campo "otra"
document.getElementById("categoria").addEventListener("change", function () {
    const otra = document.getElementById("otraCategoria");

    if (this.value === "otra") {
        otra.style.display = "block";
    } else {
        otra.style.display = "none";
    }
});

// Agregar tarea
function agregarTarea()
{
    const input = document.getElementById("inputTarea");
    const categoria = document.getElementById("categoria").value;
    const otraInput = document.getElementById("otraCategoria");
    const error = document.getElementById("error");

    let texto = input.value.trim();

    if (texto === "") {
        error.textContent = "La tarea no puede estar vacía";
        return;
    }

    error.textContent = "";

    let categoriaFinal = categoria === "otra" ? otraInput.value : categoria;

    const li = document.createElement("li");

    li.innerHTML = `
        ${categoriaFinal} - ${texto}
        <button onclick="marcarHecha(this)">✔</button>
        <button onclick="marcarUrgente(this)">⚠</button>
        <button onclick="eliminarTarea(this)">❌</button>
    `;

    lista.appendChild(li);

    total++;
    actualizarContador();

    input.value = "";

    console.log("Tarea agregada:", texto);
}

// Marcar hecha
function marcarHecha(btn)
{
    const li = btn.parentElement;

    if (!li.classList.contains("hecha")) {
        li.classList.add("hecha");
        completadas++;
    } else {
        li.classList.remove("hecha");
        completadas--;
    }

    actualizarContador();
}

// Marcar urgente
function marcarUrgente(btn)
{
    const li = btn.parentElement;
    li.classList.toggle("urgente");
}

// Eliminar tarea
function eliminarTarea(btn) {
    const li = btn.parentElement;

    const ok = confirm("¿Eliminar esta tarea?");

    if (ok) {
        if (li.classList.contains("hecha")) {
            completadas--;
        }

        li.remove();
        total--;

        actualizarContador();

        console.log("Tarea eliminada");
    }
}

// Contador
function actualizarContador()
{
    totalSpan.textContent = total;
    completadasSpan.textContent = completadas;
}

// Extra
function limpiarCompletadas()
{
    const hechas = document.querySelectorAll(".hecha");

    if (hechas.length === 0) return;

    const ok = confirm(`Eliminar ${hechas.length} tareas completadas?`);

    if (ok) {
        hechas.forEach(t => t.remove());

        total -= hechas.length;
        completadas = 0;

        actualizarContador();
    }
}
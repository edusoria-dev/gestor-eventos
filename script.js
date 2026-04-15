// Obtengo el contenedor principal del HTML
const contenedorPrincipal = document.getElementById("app");

// Creo el título principal
const tituloPrincipal = document.createElement("h1");
tituloPrincipal.textContent = "Gestor de eventos";
contenedorPrincipal.appendChild(tituloPrincipal);

// Creo la sección del formulario
const seccionFormulario = document.createElement("section");
seccionFormulario.id = "seccion-formulario";
seccionFormulario.className = "caja";

// Creo el título de la sección del formulario
const tituloFormulario = document.createElement("h2");
tituloFormulario.textContent = "Nuevo evento";
seccionFormulario.appendChild(tituloFormulario);

// Creo la caja de errores
const cajaErrores = document.createElement("div");
cajaErrores.id = "caja-errores";
seccionFormulario.appendChild(cajaErrores);

// Creo el formulario
const formularioEvento = document.createElement("form");
formularioEvento.id = "formulario-evento";

// ===== CAMPO TÍTULO =====
const grupoTitulo = document.createElement("div");
grupoTitulo.className = "grupo-campo";

const etiquetaTitulo = document.createElement("label");
etiquetaTitulo.textContent = "Título del evento";
etiquetaTitulo.setAttribute("for", "titulo");

const entradaTitulo = document.createElement("input");
entradaTitulo.type = "text";
entradaTitulo.id = "titulo";
entradaTitulo.name = "titulo";
entradaTitulo.placeholder = "Ejemplo: Reunión de grupo";

grupoTitulo.appendChild(etiquetaTitulo);
grupoTitulo.appendChild(entradaTitulo);

// ===== CAMPO DESCRIPCIÓN =====
const grupoDescripcion = document.createElement("div");
grupoDescripcion.className = "grupo-campo";

const etiquetaDescripcion = document.createElement("label");
etiquetaDescripcion.textContent = "Descripción";
etiquetaDescripcion.setAttribute("for", "descripcion");

const entradaDescripcion = document.createElement("textarea");
entradaDescripcion.id = "descripcion";
entradaDescripcion.name = "descripcion";
entradaDescripcion.placeholder = "Escribe una breve descripción del evento";

grupoDescripcion.appendChild(etiquetaDescripcion);
grupoDescripcion.appendChild(entradaDescripcion);

// ===== CAMPO FECHA =====
const grupoFecha = document.createElement("div");
grupoFecha.className = "grupo-campo";

const etiquetaFecha = document.createElement("label");
etiquetaFecha.textContent = "Fecha";
etiquetaFecha.setAttribute("for", "fecha");

const entradaFecha = document.createElement("input");
entradaFecha.type = "date";
entradaFecha.id = "fecha";
entradaFecha.name = "fecha";

grupoFecha.appendChild(etiquetaFecha);
grupoFecha.appendChild(entradaFecha);

// ===== CAMPO CATEGORÍA =====
const grupoCategoria = document.createElement("div");
grupoCategoria.className = "grupo-campo";

const etiquetaCategoria = document.createElement("label");
etiquetaCategoria.textContent = "Categoría";
etiquetaCategoria.setAttribute("for", "categoria");

const selectorCategoria = document.createElement("select");
selectorCategoria.id = "categoria";
selectorCategoria.name = "categoria";

const opcionVacia = document.createElement("option");
opcionVacia.value = "";
opcionVacia.textContent = "Selecciona una categoría";

const opcionEstudio = document.createElement("option");
opcionEstudio.value = "Estudio";
opcionEstudio.textContent = "Estudio";

const opcionTrabajo = document.createElement("option");
opcionTrabajo.value = "Trabajo";
opcionTrabajo.textContent = "Trabajo";

const opcionPersonal = document.createElement("option");
opcionPersonal.value = "Personal";
opcionPersonal.textContent = "Personal";

const opcionOcio = document.createElement("option");
opcionOcio.value = "Ocio";
opcionOcio.textContent = "Ocio";

selectorCategoria.appendChild(opcionVacia);
selectorCategoria.appendChild(opcionEstudio);
selectorCategoria.appendChild(opcionTrabajo);
selectorCategoria.appendChild(opcionPersonal);
selectorCategoria.appendChild(opcionOcio);

grupoCategoria.appendChild(etiquetaCategoria);
grupoCategoria.appendChild(selectorCategoria);

// ===== BOTÓN DEL FORMULARIO =====
const botonAgregar = document.createElement("button");
botonAgregar.type = "submit";
botonAgregar.textContent = "Añadir evento";
botonAgregar.className = "boton-principal";

// Inserto todos los campos dentro del formulario
formularioEvento.appendChild(grupoTitulo);
formularioEvento.appendChild(grupoDescripcion);
formularioEvento.appendChild(grupoFecha);
formularioEvento.appendChild(grupoCategoria);
formularioEvento.appendChild(botonAgregar);

// Inserto el formulario dentro de la sección
seccionFormulario.appendChild(formularioEvento);

// Creo la sección de eventos
const seccionEventos = document.createElement("section");
seccionEventos.id = "seccion-eventos";
seccionEventos.className = "caja";

// Creo el título de la sección de eventos
const tituloEventos = document.createElement("h2");
tituloEventos.textContent = "Lista de eventos";

// Creo la zona de contadores
const zonaContadores = document.createElement("div");
zonaContadores.className = "zona-contadores";

const contadorTotal = document.createElement("p");
contadorTotal.id = "contador-total";
contadorTotal.textContent = "Total: 0";

const contadorFavoritos = document.createElement("p");
contadorFavoritos.id = "contador-favoritos";
contadorFavoritos.textContent = "Favoritos: 0";

zonaContadores.appendChild(contadorTotal);
zonaContadores.appendChild(contadorFavoritos);

// ===== ZONA DE FILTROS =====
const zonaFiltros = document.createElement("div");
zonaFiltros.className = "zona-filtros";

const entradaBusqueda = document.createElement("input");
entradaBusqueda.type = "text";
entradaBusqueda.id = "busqueda";
entradaBusqueda.placeholder = "Buscar por título o descripción";

const filtroCategoria = document.createElement("select");
filtroCategoria.id = "filtro-categoria";

const opcionTodasCategorias = document.createElement("option");
opcionTodasCategorias.value = "Todas";
opcionTodasCategorias.textContent = "Todas las categorías";

const opcionFiltroEstudio = document.createElement("option");
opcionFiltroEstudio.value = "Estudio";
opcionFiltroEstudio.textContent = "Estudio";

const opcionFiltroTrabajo = document.createElement("option");
opcionFiltroTrabajo.value = "Trabajo";
opcionFiltroTrabajo.textContent = "Trabajo";

const opcionFiltroPersonal = document.createElement("option");
opcionFiltroPersonal.value = "Personal";
opcionFiltroPersonal.textContent = "Personal";

const opcionFiltroOcio = document.createElement("option");
opcionFiltroOcio.value = "Ocio";
opcionFiltroOcio.textContent = "Ocio";

filtroCategoria.appendChild(opcionTodasCategorias);
filtroCategoria.appendChild(opcionFiltroEstudio);
filtroCategoria.appendChild(opcionFiltroTrabajo);
filtroCategoria.appendChild(opcionFiltroPersonal);
filtroCategoria.appendChild(opcionFiltroOcio);

const filtroFavoritos = document.createElement("select");
filtroFavoritos.id = "filtro-favoritos";

const opcionTodos = document.createElement("option");
opcionTodos.value = "Todos";
opcionTodos.textContent = "Todos";

const opcionSoloFavoritos = document.createElement("option");
opcionSoloFavoritos.value = "Favoritos";
opcionSoloFavoritos.textContent = "Solo favoritos";

filtroFavoritos.appendChild(opcionTodos);
filtroFavoritos.appendChild(opcionSoloFavoritos);

zonaFiltros.appendChild(entradaBusqueda);
zonaFiltros.appendChild(filtroCategoria);
zonaFiltros.appendChild(filtroFavoritos);

// Creo el texto inicial
const textoSinEventos = document.createElement("p");
textoSinEventos.id = "texto-sin-eventos";
textoSinEventos.textContent = "Todavía no hay eventos creados.";

// Creo el contenedor de la lista de eventos
const listaEventos = document.createElement("div");
listaEventos.id = "lista-eventos";
let tarjetaEnEdicion = null;

// Inserto los elementos en la sección de eventos
seccionEventos.appendChild(tituloEventos);
seccionEventos.appendChild(zonaContadores);
seccionEventos.appendChild(zonaFiltros);
seccionEventos.appendChild(textoSinEventos);
seccionEventos.appendChild(listaEventos);

// Inserto ambas secciones en el contenedor principal
contenedorPrincipal.appendChild(seccionFormulario);
contenedorPrincipal.appendChild(seccionEventos);

// ===== FUNCIONES AUXILIARES =====
function limpiarErrores() {
  cajaErrores.textContent = "";

  entradaTitulo.classList.remove("campo-error");
  entradaDescripcion.classList.remove("campo-error");
  entradaFecha.classList.remove("campo-error");
  selectorCategoria.classList.remove("campo-error");
}

function mostrarError(mensaje) {
  cajaErrores.textContent = mensaje;
}

function comprobarSiHayEventos() {
  if (listaEventos.children.length === 0) {
    textoSinEventos.style.display = "block";
  } else {
    textoSinEventos.style.display = "none";
  }
}

function actualizarContadores() {
  const tarjetas = listaEventos.querySelectorAll(".tarjeta-evento");
  const tarjetasFavoritas = listaEventos.querySelectorAll(".tarjeta-evento.favorito");

  contadorTotal.textContent = "Total: " + tarjetas.length;
  contadorFavoritos.textContent = "Favoritos: " + tarjetasFavoritas.length;
}

function guardarEventosEnLocalStorage() {
  const tarjetas = listaEventos.querySelectorAll(".tarjeta-evento");
  const eventosGuardados = [];

  tarjetas.forEach(function (tarjeta) {
    const titulo = tarjeta.querySelector("h3").textContent;
    const descripcion = tarjeta.querySelector(".texto-descripcion").textContent;
    const fecha = tarjeta.querySelector(".texto-fecha").textContent.replace("Fecha: ", "");
    const categoria = tarjeta.getAttribute("data-categoria");
    const favorito = tarjeta.getAttribute("data-favorito") === "true";

    eventosGuardados.push({
      titulo: titulo,
      descripcion: descripcion,
      fecha: fecha,
      categoria: categoria,
      favorito: favorito
    });
  });

  localStorage.setItem("eventos", JSON.stringify(eventosGuardados));
}

function filtrarEventos() {
  const textoBusqueda = entradaBusqueda.value.toLowerCase().trim();
  const categoriaSeleccionada = filtroCategoria.value;
  const favoritosSeleccionados = filtroFavoritos.value;

  const tarjetas = listaEventos.querySelectorAll(".tarjeta-evento");

  tarjetas.forEach(function (tarjeta) {
    const titulo = tarjeta.querySelector("h3").textContent.toLowerCase();
    const descripcion = tarjeta.querySelector(".texto-descripcion").textContent.toLowerCase();
    const categoria = tarjeta.getAttribute("data-categoria");
    const esFavorito = tarjeta.getAttribute("data-favorito") === "true";

    const coincideTexto =
      titulo.includes(textoBusqueda) || descripcion.includes(textoBusqueda);

    const coincideCategoria =
      categoriaSeleccionada === "Todas" || categoria === categoriaSeleccionada;

    const coincideFavorito =
      favoritosSeleccionados === "Todos" ||
      (favoritosSeleccionados === "Favoritos" && esFavorito);

    if (coincideTexto && coincideCategoria && coincideFavorito) {
      tarjeta.style.display = "block";
    } else {
      tarjeta.style.display = "none";
    }
  });
}

function crearTarjetaEvento(titulo, descripcion, fecha, categoria, favorito = false) {
  const tarjetaEvento = document.createElement("article");
  tarjetaEvento.className = "tarjeta-evento";
  tarjetaEvento.setAttribute("data-categoria", categoria);
  tarjetaEvento.setAttribute("data-favorito", favorito ? "true" : "false");

  if (favorito) {
    tarjetaEvento.classList.add("favorito");
  }

  const tituloTarjeta = document.createElement("h3");
  tituloTarjeta.textContent = titulo;

  const descripcionTarjeta = document.createElement("p");
  descripcionTarjeta.textContent = descripcion;
  descripcionTarjeta.className = "texto-descripcion";

  const fechaTarjeta = document.createElement("p");
  fechaTarjeta.textContent = "Fecha: " + fecha;
  fechaTarjeta.className = "texto-fecha";

  const categoriaTarjeta = document.createElement("p");
  categoriaTarjeta.textContent = "Categoría: " + categoria;
  categoriaTarjeta.className = "texto-categoria";

  const zonaBotones = document.createElement("div");
  zonaBotones.className = "zona-botones";

  const botonEditar = document.createElement("button");
  botonEditar.type = "button";
  botonEditar.textContent = "✏️ Editar";
  botonEditar.className = "boton-editar";
  botonEditar.setAttribute("data-accion", "editar");

  const botonFavorito = document.createElement("button");
  botonFavorito.type = "button";
  botonFavorito.textContent = "⭐ Favorito";
  botonFavorito.className = "boton-secundario";
  botonFavorito.setAttribute("data-accion", "favorito");

  const botonEliminar = document.createElement("button");
  botonEliminar.type = "button";
  botonEliminar.textContent = "🗑 Eliminar";
  botonEliminar.className = "boton-eliminar";
  botonEliminar.setAttribute("data-accion", "eliminar");

  zonaBotones.appendChild(botonEditar);
  zonaBotones.appendChild(botonFavorito);
  zonaBotones.appendChild(botonEliminar);

  tarjetaEvento.appendChild(tituloTarjeta);
  tarjetaEvento.appendChild(descripcionTarjeta);
  tarjetaEvento.appendChild(fechaTarjeta);
  tarjetaEvento.appendChild(categoriaTarjeta);
  tarjetaEvento.appendChild(zonaBotones);

  listaEventos.appendChild(tarjetaEvento);
}

function cargarEventosDesdeLocalStorage() {
  const eventosGuardados = localStorage.getItem("eventos");

  if (!eventosGuardados) {
    return;
  }

  const eventos = JSON.parse(eventosGuardados);

  eventos.forEach(function (evento) {
    crearTarjetaEvento(
      evento.titulo,
      evento.descripcion,
      evento.fecha,
      evento.categoria,
      evento.favorito
    );
  });

  comprobarSiHayEventos();
  actualizarContadores();
  filtrarEventos();
}

// ===== FUNCIONAMIENTO DEL FORMULARIO =====
formularioEvento.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const titulo = entradaTitulo.value.trim();
  const descripcion = entradaDescripcion.value.trim();
  const fecha = entradaFecha.value;
  const categoria = selectorCategoria.value;

  limpiarErrores();

  if (titulo === "") {
    mostrarError("El título es obligatorio.");
    entradaTitulo.classList.add("campo-error");
    return;
  }

  if (titulo.length < 3) {
    mostrarError("El título debe tener al menos 3 caracteres.");
    entradaTitulo.classList.add("campo-error");
    return;
  }

  if (descripcion === "") {
    mostrarError("La descripción es obligatoria.");
    entradaDescripcion.classList.add("campo-error");
    return;
  }

  if (descripcion.length < 10) {
    mostrarError("La descripción debe tener al menos 10 caracteres.");
    entradaDescripcion.classList.add("campo-error");
    return;
  }

  if (fecha === "") {
    mostrarError("Debes seleccionar una fecha.");
    entradaFecha.classList.add("campo-error");
    return;
  }

  if (categoria === "") {
    mostrarError("Debes seleccionar una categoría.");
    selectorCategoria.classList.add("campo-error");
    return;
  }

  if (tarjetaEnEdicion !== null) {
  const tituloTarjeta = tarjetaEnEdicion.querySelector("h3");
  const descripcionTarjeta = tarjetaEnEdicion.querySelector(".texto-descripcion");
  const fechaTarjeta = tarjetaEnEdicion.querySelector(".texto-fecha");
  const categoriaTarjeta = tarjetaEnEdicion.querySelector(".texto-categoria");

  tituloTarjeta.textContent = titulo;
  descripcionTarjeta.textContent = descripcion;
  fechaTarjeta.textContent = "Fecha: " + fecha;
  categoriaTarjeta.textContent = "Categoría: " + categoria;

  tarjetaEnEdicion.setAttribute("data-categoria", categoria);

  tarjetaEnEdicion = null;
  botonAgregar.textContent = "Añadir evento";
} else {
  const tarjetaEvento = document.createElement("article");
  tarjetaEvento.className = "tarjeta-evento";
  tarjetaEvento.setAttribute("data-categoria", categoria);
  tarjetaEvento.setAttribute("data-favorito", "false");

  const tituloTarjeta = document.createElement("h3");
  tituloTarjeta.textContent = titulo;

  const descripcionTarjeta = document.createElement("p");
  descripcionTarjeta.textContent = descripcion;
  descripcionTarjeta.className = "texto-descripcion";

  const fechaTarjeta = document.createElement("p");
  fechaTarjeta.textContent = "Fecha: " + fecha;
  fechaTarjeta.className = "texto-fecha";

  const categoriaTarjeta = document.createElement("p");
  categoriaTarjeta.textContent = "Categoría: " + categoria;
  categoriaTarjeta.className = "texto-categoria";

  const zonaBotones = document.createElement("div");
  zonaBotones.className = "zona-botones";

  const botonEditar = document.createElement("button");
  botonEditar.type = "button";
  botonEditar.textContent = "Editar";
  botonEditar.className = "boton-editar";
  botonEditar.setAttribute("data-accion", "editar");

  const botonFavorito = document.createElement("button");
  botonFavorito.type = "button";
  botonFavorito.textContent = "Favorito";
  botonFavorito.className = "boton-secundario";
  botonFavorito.setAttribute("data-accion", "favorito");

  const botonEliminar = document.createElement("button");
  botonEliminar.type = "button";
  botonEliminar.textContent = "Eliminar";
  botonEliminar.className = "boton-eliminar";
  botonEliminar.setAttribute("data-accion", "eliminar");

  zonaBotones.appendChild(botonEditar);
  zonaBotones.appendChild(botonFavorito);
  zonaBotones.appendChild(botonEliminar);

  tarjetaEvento.appendChild(tituloTarjeta);
  tarjetaEvento.appendChild(descripcionTarjeta);
  tarjetaEvento.appendChild(fechaTarjeta);
  tarjetaEvento.appendChild(categoriaTarjeta);
  tarjetaEvento.appendChild(zonaBotones);

  listaEventos.appendChild(tarjetaEvento);

  
}

  comprobarSiHayEventos();
  actualizarContadores();
  filtrarEventos();
  guardarEventosEnLocalStorage();
  limpiarErrores();
  formularioEvento.reset();
});

// ===== EVENTOS DE LOS FILTROS =====
entradaBusqueda.addEventListener("input", filtrarEventos);
filtroCategoria.addEventListener("change", filtrarEventos);
filtroFavoritos.addEventListener("change", filtrarEventos);

listaEventos.addEventListener("click", function (evento) {
  const botonPulsado = evento.target.closest("button");

  if (!botonPulsado) {
    return;
  }

  const accion = botonPulsado.getAttribute("data-accion");

  if (!accion) {
    return;
  }

  const tarjetaEvento = botonPulsado.closest(".tarjeta-evento");

  if (!tarjetaEvento) {
    return;
  }

  if (accion === "editar") {
    const tituloTarjeta = tarjetaEvento.querySelector("h3");
    const descripcionTarjeta = tarjetaEvento.querySelector(".texto-descripcion");
    const fechaTarjeta = tarjetaEvento.querySelector(".texto-fecha");
    const categoriaTarjeta = tarjetaEvento.querySelector(".texto-categoria");

    entradaTitulo.value = tituloTarjeta.textContent;
    entradaDescripcion.value = descripcionTarjeta.textContent;
    entradaFecha.value = fechaTarjeta.textContent.replace("Fecha: ", "");
    selectorCategoria.value = tarjetaEvento.getAttribute("data-categoria");

    tarjetaEnEdicion = tarjetaEvento;
    botonAgregar.textContent = "Guardar cambios";
    entradaTitulo.focus();
  }

  if (accion === "favorito") {
    tarjetaEvento.classList.toggle("favorito");

    if (tarjetaEvento.classList.contains("favorito")) {
      tarjetaEvento.setAttribute("data-favorito", "true");
    } else {
      tarjetaEvento.setAttribute("data-favorito", "false");
    }

    actualizarContadores();
    filtrarEventos();
    guardarEventosEnLocalStorage();
  }

  if (accion === "eliminar") {
    if (tarjetaEnEdicion === tarjetaEvento) {
      tarjetaEnEdicion = null;
      botonAgregar.textContent = "Añadir evento";
      formularioEvento.reset();
      limpiarErrores();
      guardarEventosEnLocalStorage();
    }

    tarjetaEvento.remove();
    comprobarSiHayEventos();
    actualizarContadores();
    filtrarEventos();
  }
});

cargarEventosDesdeLocalStorage();
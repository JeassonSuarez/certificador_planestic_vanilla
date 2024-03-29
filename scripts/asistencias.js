import { modeloAsistencias } from "../models/modeloAsistencia.js";

const mostrarListadoAsistencias = (listado) => {
  console.log(listado);
  const $fargmento = document.createDocumentFragment(),
    $template = document.getElementById("template-renglon-asistencia").content,
    $tbody = document.getElementById("tbody-table-asistencia");
  $tbody.innerHTML = "";
  listado.forEach((asistencia, index) => {
    $template.querySelector("tr").innerHTML = `
        <tr>
            <td>${asistencia.nombreEstudiante}</td>
            <td>${asistencia.tipoDoc}</td>
            <td>${asistencia.documento}</td>
            <td>${asistencia.numeroAsistencias}</td>
            <td>${asistencia.ultimaAsistencia}</td>
            <td class="td-acciones">
            <span class="material-symbols-outlined" title="Ver cohortes">
                <a href="../pages/CursoConTutorCohortesPage.html"
                >visibility</a
                ></span
            >
            </td>
        </tr>
        `;

    let clone = document.importNode($template, true);

    $fargmento.appendChild(clone);
  });
  $tbody.appendChild($fargmento);
};

mostrarListadoAsistencias(modeloAsistencias);

let d = document;
let orderBool = false;
d.addEventListener("click", (e) => {
  if (e.target === d.getElementById("asistencia-tipo-sort")) {
    console.log("nombre completo sort");
    orderBool = !orderBool;
    //ORDENAMIENTO DE z A a
    if (orderBool) {
      modeloAsistencias.sort((a, b) => {
        if (a.tipoDoc < b.tipoDoc) {
          return 1;
        } else if (a.tipoDoc > b.tipoDoc) {
          return -1;
        } else {
          return 0;
        }
      });
    } else {
      //ORDENAMIENTO DE a A z
      modeloAsistencias.sort((a, b) => {
        if (a.tipoDoc > b.tipoDoc) {
          return 1;
        } else if (a.tipoDoc < b.tipoDoc) {
          return -1;
        } else {
          return 0;
        }
      });
    }
    obtenerDocEstudianteAsistencia(modeloAsistencias);
  } else if (e.target === d.getElementById("asistencia-numdoc-sort")) {
    console.log("numero documento sort");
    orderBool = !orderBool;
    //ORDENAMIENTO DE MAYOR A MENOR
    if (orderBool) {
      modeloAsistencias.sort((a, b) => b.documento - a.documento);
    } else {
      //ORDENAMIENTO DE MENOR A MAYOR
      modeloAsistencias.sort((a, b) => a.documento - b.documento);
    }
    obtenerDocEstudianteAsistencia(modeloAsistencias);
  } else if (e.target === d.getElementById("asistencia-nombreE-sort")) {
    console.log("nombre completo sort");
    orderBool = !orderBool;
    //ORDENAMIENTO DE z A a
    if (orderBool) {
      modeloAsistencias.sort((a, b) => {
        if (a.nombreEstudiante < b.nombreEstudiante) {
          return 1;
        } else if (a.nombreEstudiante > b.nombreEstudiante) {
          return -1;
        } else {
          return 0;
        }
      });
    } else {
      //ORDENAMIENTO DE a A z
      modeloAsistencias.sort((a, b) => {
        if (a.nombreEstudiante > b.nombreEstudiante) {
          return 1;
        } else if (a.nombreEstudiante < b.nombreEstudiante) {
          return -1;
        } else {
          return 0;
        }
      });
    }
    obtenerDocEstudianteAsistencia(modeloAsistencias);
  } else if (e.target === d.getElementById("asistencia-numasis-sort")) {
    console.log("numero documento sort");
    orderBool = !orderBool;
    //ORDENAMIENTO DE MAYOR A MENOR
    if (orderBool) {
      modeloAsistencias.sort(
        (a, b) => b.numeroAsistencias - a.numeroAsistencias
      );
    } else {
      //ORDENAMIENTO DE MENOR A MAYOR
      modeloAsistencias.sort(
        (a, b) => a.numeroAsistencias - b.numeroAsistencias
      );
    }
    obtenerDocEstudianteAsistencia(modeloAsistencias);
  }
  else if (e.target === d.getElementById("asistencia-ultasis-sort")) {
    console.log("finicial");
    orderBool = !orderBool;
    //ORDENAMIENTO DE MAYOR A MENOR
    if (orderBool) {
      modeloAsistencias.sort(
        (a, b) => b.ultimaAsistencia - a.ultimaAsistencia
      );
    } else {
      //ORDENAMIENTO DE MENOR A MAYOR
      modeloAsistencias.sort(
        (a, b) => a.ultimaAsistencia - b.ultimaAsistencia
      );
    }
    obtenerDocEstudianteAsistencia(modeloAsistencias);
  }
});

document
  .getElementById("input-buscador-asistencia")
  .addEventListener("input", (event) => {
    let filtro = event.target.value.toLowerCase();
    console.log(filtro);
    let filtrado = modeloAsistencias.filter((asitente) => {
      return (
        asitente.nombreEstudiante.toLowerCase().includes(filtro) ||
        asitente.tipoDoc.toLowerCase().includes(filtro) ||
        asitente.documento.toString().toLowerCase().includes(filtro) ||
        asitente.numeroAsistencias.toString().toLowerCase().includes(filtro) ||
        asitente.ultimaAsistencia.toString().toLowerCase().includes(filtro)
      );
    });
    console.log(filtrado);
    // obtenerIdCohorte(filtrado);
    obtenerDocEstudianteAsistencia(filtrado);
  });

const obtenerDocEstudianteAsistencia = (listado) => {
  mostrarListadoAsistencias(listado);
};

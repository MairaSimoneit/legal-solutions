function mostrarContenido(idDelTramite) {
    debugger;
    document.getElementById("tramite-principal").style = "display:none";
    document.getElementsByClassName("oculto")[0].style = "display:none";
    document.getElementsByClassName("oculto")[1].style = "display:none";
    document.getElementsByClassName("oculto")[2].style = "display:none";
    document.getElementsByClassName("oculto")[3].style = "display:none";
    document.getElementsByClassName("oculto")[4].style = "display:none";
    document.getElementsByClassName("oculto")[5].style = "display:none";
    document.getElementsByClassName("oculto")[6].style = "display:none";
    document.getElementsByClassName("oculto")[7].style = "display:none";

    document.getElementById(idDelTramite).style = "display:block";
}

class Tramite {
    constructor(
        nombreTramite,
        organismo,
        telefono,
        web,
        localidad,
        direccion,
        ubicacion
    ) {
        this.nombreTramite = nombreTramite;
        this.organismo = organismo;
        this.telefono = telefono;
        this.web = web;
        this.localidad = localidad;
        this.direccion = direccion;
        this.ubicacion = ubicacion;
        this.info = `Tramite ${this.nombreTramite}, me realizo en ${this.organismo}`;
    }
}

function dibujarContenido() {
    arrayTramitesFiltrados.map((t) => {
        contenedor.innerHTML =
            contenedor.innerHTML +
            `<section>
                            <h3>${t.nombreTramite}</h3>
                            <ul>
                                <li><strong>Organismo:</strong>${t.organismo}</li>
                                <li><strong>Teléfono:</strong>${t.telefono}</li>
                                <li><strong>Web:</strong><a href="${t.web}">${t.web}</a></li>
                                <li><strong>Localidad:</strong>${t.localidad}</li>
                                <li><strong>Dirección:</strong>${t.direccion}</li>
                                <li><strong>Ubicación:</strong><a href="${t.ubicacion}">Ver en mapa</a></li>
                            </ul>
                        </section>
`;
    });
}

let tramiteUno = new Tramite(
    "DNI",
    "RENAPER",
    "0800-999-9364",
    "https://www.argentina.gob.ar/renaper",
    "Rosario",
    "San Luis 2950",
    "https://www.google.com/maps?q=San+Luis+2950,+Rosario"
);

let tramiteDos = new Tramite(
    "Certificado de antecedentes penales",
    "Registro Nacional de Reincidencia",
    "0800-666-0055",
    "https://www.argentina.gob.ar/justicia/reincidencia",
    "Rosario",
    "Mitre 150, Planta Baja",
    "https://www.google.com/maps?q=Mitre+150,+Rosario"
);

let tramiteTres = new Tramite(
    "Pasaporte",
    "RENAPER",
    "0800-999-9364",
    "https://www.argentina.gob.ar/interior/pasaporte",
    "Rosario",
    "San Luis 2950",
    "https://www.google.com/maps?q=San+Luis+2950,+Rosario"
);

let tramiteCuatro = new Tramite(
    "Clave Fiscal AFIP",
    "AFIP",
    "0800-999-2347",
    "https://www.afip.gob.ar/clavefiscal/",
    "Rosario",
    "Córdoba 1452",
    "https://www.google.com/maps?q=Córdoba+1452,+Rosario"
);

let tramiteCinco = new Tramite(
    "Inscripción de monotributo",
    "AFIP",
    "0800-999-2347",
    "https://www.afip.gob.ar/monotributo/",
    "Rosario",
    "Córdoba 1452",
    "https://www.google.com/maps?q=Córdoba+1452,+Rosario"
);

let tramiteSeis = new Tramite(
    "Certificado Único de Discapacidad (CUD)",
    "Agencia Nacional de Discapacidad",
    "0800-555-3472",
    "https://www.argentina.gob.ar/andis/cud",
    "Rosario",
    "Moreno 960",
    "https://www.google.com/maps?q=Moreno+960,+Rosario"
);

let tramiteSietes = new Tramite(
    "Licencia de conducir",
    "General de Tránsito",
    "(0341) 480-2400",
    "https://www.rosario.gob.ar/web/licencia-de-conducir",
    "Rosario",
    "Montevideo 2852",
    "https://www.google.com/maps?q=Montevideo+2852,+Rosario"
);

let tramiteOcho = new Tramite(
    "Turno judicial (Consulta de causas)",
    "Poder Judicial de Santa Fe",
    "(0341) 472-1700",
    "https://www.justiciasantafe.gov.ar",
    "Rosario",
    "Balcarce 1651",
    "https://www.google.com/maps?q=Balcarce+1651,+Rosario"
);

let tramiteNueve = new Tramite(
    "Partida de nacimiento",
    "Registro Civil",
    "(0341) 480-2444",
    "https://www.santafe.gob.ar/index.php/web/content/view/full/190228",
    "Rosario",
    "Salta 2752",
    "https://www.google.com/maps?q=Salta+2752,+Rosario"
);

let tramiteDiez = new Tramite(
    "DNI (Nuevo ejemplar)",
    "RENAPER (Registro Nacional de las Personas) / Gobierno de CABA",
    "Turnos vía WhatsApp con “Boti” al +54 9 11 5050‑0147; retiro también consultable llamando al 147 opción 2‑3",
    "https://buenosaires.gob.ar/tramites/dni-nuevo-ejemplar?utm_source=chatgpt.com",
    "Buenos Aires",
    "varias delegaciones municipales (colectivas por CABA)",
    "https://www.google.com/maps/search/Delegaci%C3%B3n+RENAPER+CABA%2C+CABA%2C+Argentina?utm_source=chatgpt.com"
);

let tramiteOnce = new Tramite(
    "Certificado de antecedentes penales",
    "Registro Nacional de Reincidencia – Ministerio de Justicia / Renaper",
    "consulta y trámite online vía MiArgentina",
    "Argentina.gob.ar – Solicitar certificado de antecedentes penales",
    "Buenos Aires",
    "se retira con turno asignado en sede física (varía según Renaper/CABA)",
    "https://www.google.com/maps/search/SCBA+%E2%80%93+Poder+Judicial+sede+CABA,+CABA,+Argentina/@-34.5624829,-58.4488258,12z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDYwMy4wIKXMDSoASAFQAw%3D%3D"
);

let tramiteDoce = new Tramite(
    "Pasaporte",
    "RENAPER – Ministerio del Interior (a través de CABA o Renaper)",
    "Turnos por WhatsApp Boti (+54 9 11 5050‑0147) o línea 147",
    "https://buenosaires.gob.ar/tramites/pasaporte?utm_source=chatgpt.com",
    "Buenos Aires",
    "vdelegaciones civiles de CABA",
    "https://www.google.com/maps/search/Delegaci%C3%B3n+RENAPER+CABA,+CABA,+Argentina/@-34.6101907,-58.4044698,13z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDYwMy4wIKXMDSoASAFQAw%3D%3D"
);

let tramiteTrece = new Tramite(
    "Clave Fiscal AFIP",
    "ARCA – AFIP",
    "0810‑999‑2722 (lunes a viernes 9–16 h)",
    "AFIP – sección “Obtén tu Clave Fiscal”",
    "Buenos Aires",
    "podés gestionar en línea sin sede física (hay oficinas AFIP en CABA)",
    "https://www.google.com/maps/search/AFIP+%E2%80%93+ARCA+oficina+CABA%2C+CABA%2C+Argentina?utm_source=chatgpt.com"
);

let tramiteCatorce = new Tramite(
    "Inscripción de Monotributo",
    "ARCA – AFIP",
    "0810‑999‑2722 (lunes a viernes 9–16 h)",
    "AFIP – “Inscribirme como monotributista”",
    "Buenos Aires",
    "trámite online, oficina ARCA si necesitas asesoramiento",
    "https://www.google.com/maps/search/AFIP+%E2%80%93+ARCA+oficina+CABA%2C+CABA%2C+Argentina?utm_source=chatgpt.com"
);

let tramiteQuince = new Tramite(
    "Certificado Único de Discapacidad (CUD)",
    "ANDiS (Agencia Nacional de Discapacidad) + CABA",
    "info@snr.gov.ar / 0800‑555‑3472 (ANDis)",
    "Buenosaires.gob.ar – “Solicitud de CUD” + Argentina.gob.ar – ANDis/CUD https://buenosaires.gob.ar/tramites/solicitud-de-certificado-unico-de-discapacidad-cud?utm_source=chatgpt.com",
    "Buenos Aires",
    "múltiples centros en CABA (p. ej. Holmberg 2548, Cabildo 3067, Coronel Díaz 2110…) ",
    "https://www.google.com/maps/search/ANDis+%2F+Junta+Evaluadora+CUD%2C+Palermo%2C+CABA%2C+Argentina?utm_source=chatgpt.com"
);

let tramiteDieciseis = new Tramite(
    "Licencia de conducir",
    "Dirección General de Licencias – CABA",
    "+54 11 5050‑0147 (Boti)",
    "https://buenosaires.gob.ar/tramites/otorgamiento-de-licencia-de-conducir?utm_source=chatgpt.com",
    "Buenos Aires",
    "Centro Emisor SW en varias comunas; ejemplo: CGPC N°12 – Holmberg 2548 – Tel (11) 5197‑6196",
    "https://curso.seguridadvial.gob.ar/ansv/index.php/centros_emisores?id_localidad=0&id_provincia=3&utm_source=chatgpt.com"
);

let tramiteDiecisiete = new Tramite(
    "Turno judicial (consulta de causas)",
    "Poder Judicial / Suprema Corte provincia BA",
    "canal telefónico vía SCBA (dependencia según departamento judicial), https://www.scba.gov.ar/?utm_source=chatgpt.com",
    "https://www.pjn.gov.ar/?utm_source=chatgpt.com",
    "Buenos Aires",
    "varía por juzgado o sede judicial",
    "https://www.google.com/maps/search/SCBA+%E2%80%93+Poder+Judicial+sede+CABA,+CABA,+Argentina/@-34.5624829,-58.4488258,12z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDYwMy4wIKXMDSoASAFQAw%3D%3D"
);

let tramiteDieciocho = new Tramite(
    "Partida de nacimiento",
    "Registro Civil – CABA o Provincia de Buenos Aires",
    "a través de Buenosaires.gob.ar, 147 opción 2–3, o por delegación local",
    "https://www.gba.gob.ar/registrodelaspersonas/dni_pasaportes?utm_source=chatgpt.com",
    "Buenos Aires",
    "Delegaciones del Registro Civil",
    "hhttps://www.google.com/maps/search/Registro+Civil+%E2%80%93+CABA,+CABA,+Argentina/@-34.6265613,-58.4368873,13z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDYwMy4wIKXMDSoASAFQAw%3D%3D"
);

let tramiteDiecinueve = new Tramite(
    "DNI",
    "Registro Civil de la Provincia de Santa Fe",
    "0800‑777‑0801 (Gobierno de Santa Fe, atención de trámites en general)",
    "https://www.santafe.gov.ar/tramites?utm_source=chatgpt.com",
    "Santa Fe",
    "https://www.santafe.gov.ar/tramites?utm_source=chatgpt.com",
    "(atención por turno): Hernandarias 1097 (3º Sección), Estanislao Zeballos 4063 (4º Sección), Blas Parera 8300 (5º Sección), Almirante Brown 6998 "
);

let tramiteVeinte = new Tramite(
    "Certificado de antecedentes penales",
    "Policía – División Documentación (Certificado de Conducta)",
    "0800‑777‑0801 (informes y turnos generales)",
    "https://www.santafe.gob.ar/index.php/tramites/modul1/index?id=97975&m=descripcion&utm_source=chatgpt.com",
    "Santa Fe",
    "Área Documentología: 1° Junta 2851, Santa Fe",
    "https://www.google.com/maps/search/%C3%81rea+Documentolog%C3%ADa+-+1%C2%B0+Junta+2851%2C+Santa+Fe%2C+Santa+Fe%2C+Argentina?utm_source=chatgpt.com"
);

let tramiteVeintiuno = new Tramite(
    "Pasaporte",
    "Registro Civil de la Provincia de Santa Fe",
    "0800‑777‑0801 (Gobierno de Santa Fe, atención de trámites en general)",
    "https://www.santafe.gov.ar/tramites?utm_source=chatgpt.com",
    "Santa Fe",
    "San Luis 2950 (Santa Fe capital) – DNI/Pasaporte",
    "https://www.google.com/maps/search/Registro+Civil+-+San+Luis+2950%2C+Santa+Fe%2C+Santa+Fe%2C+Argentina?utm_source=chatgpt.com"
);

let tramiteVeintidos = new Tramite(
    "Clave Fiscal AFIP",
    "AFIP (ARCA)",
    "https://serviciosweb.afip.gob.ar/publico/turnos/turnos.aspx?utm_source=chatgpt.com",
    "https://serviciosweb.afip.gob.ar/publico/turnos/turnos.aspx?utm_source=chatgpt.com",
    "Santa Fe",
    "oficinas locales; turno online exigido para atención presencial",
    "https://www.google.com/maps/search/AFIP+-+Oficina+Santa+Fe+%28turno+online%29%2C+Santa+Fe%2C+Santa+Fe%2C+Argentina?utm_source=chatgpt.com"
);

let tramiteVeintitres = new Tramite(
    "Inscripción Monotributo",
    "AFIP (ARCA)",
    "https://serviciosweb.afip.gob.ar/publico/turnos/turnos.aspx?utm_source=chatgpt.com",
    "https://serviciosweb.afip.gob.ar/publico/turnos/turnos.aspx?utm_source=chatgpt.com",
    "Santa Fe",
    "oficinas locales; turno online exigido para atención presencial",
    "https://www.google.com/maps/search/AFIP+-+Oficina+Santa+Fe+%28turno+online%29%2C+Santa+Fe%2C+Santa+Fe%2C+Argentina?utm_source=chatgpt.com"
);

let tramiteVeinticuatro = new Tramite(
    "Certificado Único de Discapacidad (CUD)",
    "Agencia Nacional de Discapacidad (ANDis) / SENADIS + Registro Civil",
    "Consultá vía Argentina.gob.ar — al momento no hay información local clara en Santa Fe. Se sugiere contacto vía MiArgentina o línea 0800 nacional.",
    "Consultá vía Argentina.gob.ar — al momento no hay información local clara en Santa Fe. Se sugiere contacto vía MiArgentina o línea 0800 nacional.",
    "Santa Fe",
    "Consultas en Registro Civil (mismas sedes del DNI), puede requerirse sede médica adicional.",
    "ver mapa"
);

let tramiteVeinticinco = new Tramite(
    "Licencia de conducir",
    "Provincia de Santa Fe – División Licencias",
    "0800‑777‑0801 (turnos y consultas generales)",
    "https://santafeciudad.gov.ar/licencia-de-conducir/?utm_source=chatgpt.com",
    "Santa Fe",
    "sedes provinciales de Santa Fe Capital (consultar al sacar turno).",
    "https://www.google.com/maps/search/Divisi%C3%B3n+Licencias+-+Santa+Fe+Capital%2C+Santa+Fe%2C+Santa+Fe%2C+Argentina?utm_source=chatgpt.com"
);

let tramiteVeintiseis = new Tramite(
    "Turno judicial (Consulta de causas)",
    "Poder Judicial – Tribunales provinciales",
    "vía Información Central del Poder Judicial / 0800‑777‑0801",
    "santafe.gov.ar – sección de turnos judiciales o página oficial Poder Judicial Santa Fe",
    "Santa Fe",
    "Tribunales de Santa Fe capital (ubicaciones según jurisdicción)",
    "https://www.google.com/maps/search/Tribunales+Santa+Fe+Capital%2C+Santa+Fe%2C+Santa+Fe%2C+Argentina?utm_source=chatgpt.com"
);

let tramiteVeintisiete = new Tramite(
    "Partida de nacimiento",
    "Registro Civil – Santa Fe Capital",
    "0800‑777‑0801 (turnos y consultas)",
    "https://www.santafe.gov.ar/tramites?utm_source=chatgpt.com",
    "Santa Fe",
    "San Luis 2950",
    "https://www.google.com/maps/search/Registro+Civil+-+San+Luis+2950%2C+Santa+Fe%2C+Santa+Fe%2C+Argentina?utm_source=chatgpt.com"
);

let arrayTramites = [
    tramiteUno,
    tramiteDos,
    tramiteTres,
    tramiteCuatro,
    tramiteCinco,
    tramiteSeis,
    tramiteSietes,
    tramiteOcho,
    tramiteNueve,
    tramiteDiez,
    tramiteOnce,
    tramiteDoce,
    tramiteTrece,
    tramiteCuatro,
    tramiteQuince,
    tramiteDieciseis,
    tramiteDiecisiete,
    tramiteDieciocho,
    tramiteDiecinueve,
    tramiteVeinte,
    tramiteVeintiuno,
    tramiteVeintidos,
    tramiteVeintitres,
    tramiteVeinticinco,
    tramiteVeintiseis,
    tramiteVeintisiete,
];

let contenedor = document.getElementById("contenido-dinamico");
let arrayTramitesFiltrados = [];

function filtrarUbicacion(filtro) {
    debugger;
    contenedor.innerHTML = "";
    arrayTramitesFiltrados = [];
    arrayTramitesFiltrados = arrayTramites.filter((t) => {
        return t.localidad == filtro;
    });
    dibujarContenido();
}

function filtrarTipo(filtro) {
    alert(filtro);
}

function buscarTema() {
    const texto = document
        .getElementById("buscador")
        .value.toLowerCase()
        .trim();
    const arraySecciones = document.querySelectorAll(".opciones");

    arraySecciones.forEach((seccion) => {
        const contenido = seccion.innerText.toLowerCase();
        if (contenido.includes(texto)) {
            seccion.style.display = "block";
        } else {
            seccion.style.display = "none";
        }
    });
}

/*
  CONTENIDO DEL SITIO
  ===================
  Todo el texto de la página vive en este archivo. Para cambiar algo,
  edita aquí y guarda; no hace falta tocar el HTML.

  - Cada texto tiene versión en español (es) y en inglés (en).
  - Para añadir un proyecto: copia un bloque de "projects", cambia el id
    (sin espacios ni acentos), pon sus fotos en img/<id>/ y ajusta los textos.
    El orden de la lista es el orden en la página.
  - tags: categorías del proyecto para los filtros (ver "categories").

  Tipos de imagen en "media":
    plan: true -> dibujo con fondo transparente (los aviones)
    fit: true  -> render con fondo blanco; se muestra completo, sin recortar
    tall: true -> imagen o video vertical
    (sin nada) -> foto normal
*/

window.SITE = {
  person: {
    name: 'Jorge Talavera',
    // Correo opcional: si lo pones aquí aparece un botón en Contacto. Vacío = no se muestra.
    email: '',
    kicker: {
      es: 'Ingeniero · Mantenimiento industrial y diseño mecánico',
      en: 'Engineer · Industrial maintenance and mechanical design'
    }
  },

  // Portada: foto de fondo y su mapa de profundidad (blanco = cerca, negro = lejos),
  // que da el efecto de diorama al mover el ratón.
  hero: {
    src: 'img/hero/main-header.webp',
    srcSmall: 'img/hero/main-header-1200.webp',
    depth: 'img/hero/main-header-depth.png'
  },

  links: [
    { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/jorge-talavera11/' },
    { label: 'YouTube', icon: 'youtube', href: 'https://youtube.com/@George_tala11' }
  ],

  categories: {
    mant: { es: 'Mantenimiento', en: 'Maintenance' },
    aero: { es: 'Aeronáutica', en: 'Aeronautics' },
    mec:  { es: 'Diseño mecánico', en: 'Mechanical design' },
    sim:  { es: 'Simulación', en: 'Simulation' },
    ges:  { es: 'Gestión', en: 'Management' },
    soft: { es: 'Software', en: 'Software' }
  },

  // icon: cad, sim, wrench, data, team, code
  skills: [
    { icon: 'cad', tags: ['mec'],
      title: { es: 'Diseño mecánico y CAD', en: 'Mechanical design and CAD' },
      text: { es: 'Modelado 3D de piezas, ensambles y máquinas completas, con renders y animaciones de ensamble. Comparto modelos propios en GrabCAD.', en: '3D modeling of parts, assemblies and complete machines, with renders and assembly animations. I share my own models on GrabCAD.' } },
    { icon: 'sim', tags: ['sim'],
      title: { es: 'Simulación FEA y CFD', en: 'FEA and CFD simulation' },
      text: { es: 'Análisis de esfuerzos, optimización topológica y simulaciones aerodinámicas y de flujo para validar un diseño antes de fabricarlo.', en: 'Stress analysis, topology optimization and aerodynamic and flow simulations to validate a design before building it.' } },
    { icon: 'wrench', tags: ['mant'],
      title: { es: 'Planes de mantenimiento', en: 'Maintenance planning' },
      text: { es: 'Planes preventivos, programa MP, carga de trabajo y backlog para líneas de producción.', en: 'Preventive plans, PM schedules, workload and backlog for production lines.' } },
    { icon: 'data', tags: ['mant', 'soft'],
      title: { es: 'Datos de CMMS (Maximo)', en: 'CMMS data (Maximo)' },
      text: { es: 'Exportaciones de activos, planes, MP y órdenes de trabajo convertidas en indicadores y planificación.', en: 'Asset, plan, PM and work order exports turned into indicators and planning.' } },
    { icon: 'team', tags: ['ges'],
      title: { es: 'Dirección de equipos y proyectos', en: 'Team and project leadership' },
      text: { es: 'Presidente de un grupo estudiantil de ingeniería aeronáutica: planificación, reclutamiento, capacitación y seguimiento de la fabricación.', en: 'President of an aeronautical engineering student group: planning, recruiting, training and manufacturing follow-up.' } },
    { icon: 'code', tags: ['soft'],
      title: { es: 'Python y herramientas web', en: 'Python and web tools' },
      text: { es: 'Scripts en Python y paneles en HTML y JavaScript que convierten datos de planta en herramientas que se abren con doble clic.', en: 'Python scripts and HTML/JavaScript dashboards that turn plant data into tools anyone can open with a double click.' } }
  ],

  projects: [
    {
      id: 'gemelo-digital',
      tags: ['mant', 'soft'],
      year: 2026,
      title: { es: 'Gemelo digital de mantenimiento', en: 'Maintenance digital twin' },
      context: { es: 'Proyecto propio', en: 'Personal project' },
      role: { es: 'Diseño y desarrollo', en: 'Design and development' },
      discipline: { es: 'Mantenimiento y software', en: 'Maintenance and software' },
      summary: {
        es: 'Un panel que muestra cada equipo de la planta en 3D junto a su programa de mantenimiento. Se genera desde un Excel y cabe en un solo archivo HTML.',
        en: 'A dashboard that shows every machine in the plant in 3D next to its maintenance schedule. It is generated from a spreadsheet and fits in a single HTML file.'
      },
      body: {
        es: [
          'El panel junta en un solo lugar lo que normalmente está repartido entre el CMMS, hojas de cálculo y planos: un gemelo 3D y un esquema de cada línea, el plan maestro anual, la carga semanal, la planificación, el backlog y la ficha técnica de cada equipo.',
          'Cada equipo se colorea según su estado (MP atrasado, OT abierta, MP esta semana o al día), calculado con el programa de mantenimiento y las órdenes de trabajo a una fecha de corte.',
          'Para montar el panel de una planta nueva se llena una plantilla de Excel con planta, líneas, etapas, activos, planes, tareas y programa MP. Un script en Python valida los datos, avisa de lo que no cuadra y escribe el HTML en un par de segundos. Después, el panel también lee las exportaciones CSV del CMMS para las actualizaciones mensuales.',
          'Se abre con doble clic en cualquier navegador, sin instalar nada y sin servidor, así que se puede dejar en SharePoint, Drive o una carpeta de red.'
        ],
        en: [
          'The dashboard brings together what usually lives across the CMMS, spreadsheets and drawings: a 3D twin and a schematic of each line, the annual master plan, the weekly workload, planning, the backlog and a data sheet for every machine.',
          'Each machine is colored by status (overdue PM, open work order, PM this week or up to date), computed from the maintenance schedule and work orders at a cut-off date.',
          'To build the dashboard for a new plant you fill in an Excel template with the plant, lines, stages, assets, plans, tasks and PM schedule. A Python script validates the data, flags anything that does not add up and writes the HTML in a couple of seconds. After that, the dashboard also reads CSV exports from the CMMS for monthly updates.',
          'It opens with a double click in any browser, with nothing to install and no server, so it can live on SharePoint, Drive or a network folder.'
        ]
      },
      results: {
        es: ['Gemelo 3D y esquema de cada línea, con el estado de cada equipo', 'Plan maestro anual, carga semanal y planificación', 'Backlog y ficha técnica de cada equipo', 'Generación desde una plantilla de Excel, con validación en Python', 'Lectura de exportaciones CSV del CMMS para las actualizaciones', 'Un solo archivo HTML que se abre sin instalar nada ni servidor'],
        en: ['3D twin and schematic of each line, with every machine’s status', 'Annual master plan, weekly workload and planning', 'Backlog and data sheet for every machine', 'Generated from an Excel template, validated in Python', 'Reads CSV exports from the CMMS for updates', 'A single HTML file that opens with nothing to install and no server']
      },
      // ready: false oculta el botón hasta que la demo esté en demos/gemelo/
      demo: {
        ready: true,
        href: 'demos/gemelo/',
        label: { es: 'Abrir la demo', en: 'Open the demo' },
        note: { es: 'La demo usa una planta ficticia de alimentos.', en: 'The demo uses a fictional food plant.' }
      },
      cover: 'img/gemelo-digital/cover.webp',
      media: [
        { src: 'img/gemelo-digital/gemelo-3d.webp', caption: { es: 'Gemelo 3D de una línea: al pasar sobre un equipo se ven su estado, sus MP y sus OT abiertas.', en: '3D twin of a line: hovering over a machine shows its status, PMs and open work orders.' } },
        { src: 'img/gemelo-digital/plan-maestro.webp', caption: { es: 'Plan maestro anual: cada MP en su semana, por tipo de mantenimiento.', en: 'Annual master plan: every PM in its week, by maintenance type.' } },
        { src: 'img/gemelo-digital/carga-semanal.webp', caption: { es: 'Carga semanal: horas de mano de obra planificadas durante el año.', en: 'Weekly workload: planned labor hours across the year.' } },
        { src: 'img/gemelo-digital/backlog.webp', caption: { es: 'Backlog: MP vencidos y órdenes preventivas pendientes, con su retraso.', en: 'Backlog: overdue PMs and pending preventive work orders, with their delay.' } }
      ],
      links: []
    },
    {
      id: 'xinavia',
      tags: ['aero'],
      year: 2024,
      title: { es: 'Xinavia', en: 'Xinavia' },
      context: { es: 'SAE Aerodesign México 2024, Aerodesign Tec de Monterrey Campus Toluca', en: 'SAE Aerodesign Mexico 2024, Aerodesign Tec de Monterrey Campus Toluca' },
      role: { es: 'Asesor del equipo', en: 'Team advisor' },
      discipline: { es: 'Aeronáutica', en: 'Aeronautics' },
      summary: {
        es: 'Asesoré al equipo en el diseño y la construcción de su avión para SAE Aerodesign México 2024. Hizo 6 vuelos exitosos de 6 y terminó 4.º en la general.',
        en: 'I advised the team on the design and construction of their aircraft for SAE Aerodesign Mexico 2024. It flew 6 successful flights out of 6 and finished 4th overall.'
      },
      body: {
        es: ['Después de mi temporada como presidente del grupo, orienté y apoyé a la nueva generación durante las fases de diseño y construcción del avión para la competencia SAE Aerodesign México 2024.'],
        en: ['After my season as president of the group, I guided and supported the new generation through the design and construction phases of the aircraft for the SAE Aerodesign Mexico 2024 competition.']
      },
      results: {
        es: ['6 de 6 vuelos exitosos', 'Carga útil máxima de 2.52 kg', '4.º lugar en la general', '3.er lugar en puntuación de vuelo'],
        en: ['6 of 6 successful flights', 'Maximum payload of 2.52 kg', '4th place overall', '3rd place in flight scores']
      },
      cover: 'img/xinavia/runway.webp',
      media: [
        { src: 'img/xinavia/airframe.webp', plan: true, caption: { es: 'Modelo 3D de la estructura de Xinavia.', en: '3D model of the Xinavia airframe.' } },
        { src: 'img/xinavia/runway.webp', caption: { es: 'Xinavia en la pista.', en: 'Xinavia on the runway.' } },
        { src: 'img/xinavia/team-competition.webp', caption: { es: 'El equipo en la competencia.', en: 'The team at the competition.' } },
        { src: 'img/xinavia/team-hangar.webp', caption: { es: 'El equipo en SAE Aerodesign México 2024.', en: 'The team at SAE Aerodesign Mexico 2024.' } }
      ],
      links: [{ href: 'https://www.instagram.com/p/C5HtsI1gqRR/', label: { es: 'Ver la publicación en Instagram', en: 'See the post on Instagram' } }]
    },
    {
      id: 'teus',
      tags: ['aero', 'ges', 'sim'],
      year: 2023,
      title: { es: 'Teus', en: 'Teus' },
      context: { es: 'SAE Aerodesign México 2023, Aerodesign Tec de Monterrey Campus Toluca', en: 'SAE Aerodesign Mexico 2023, Aerodesign Tec de Monterrey Campus Toluca' },
      role: { es: 'Presidente del grupo estudiantil', en: 'President of the student group' },
      discipline: { es: 'Aeronáutica y gestión de proyectos', en: 'Aeronautics and project management' },
      summary: {
        es: 'Como presidente de Aerodesign dirigí el proyecto completo del avión Teus, del modelado 3D y las simulaciones a la manufactura y el cableado. Terminamos 6.º en la general con 202 puntos.',
        en: 'As president of Aerodesign I led the whole Teus aircraft project, from 3D modeling and simulation to manufacturing and wiring. We finished 6th overall with 202 points.'
      },
      body: {
        es: [
          'Aerodesign es el grupo estudiantil del Tec de Monterrey Campus Toluca que diseña y construye vehículos aéreos no tripulados para la competencia SAE Aerodesign. El proyecto cubre todo el proceso de ingeniería: diseño y modelado 3D del avión, simulaciones topológicas, de resistencia de materiales y aerodinámicas, manufactura y cableado electrónico.',
          'En la temporada 2023 fui presidente del grupo y gestioné de principio a fin el proyecto Teus. Después de la competencia arrancamos el reclutamiento y la capacitación de la siguiente generación.'
        ],
        en: [
          'Aerodesign is the student group at Tec de Monterrey Campus Toluca that designs and builds unmanned aerial vehicles for the SAE Aerodesign competition. The project covers the whole engineering process: design and 3D modeling of the aircraft, topology, material-strength and aerodynamic simulations, manufacturing and electronic wiring.',
          'In the 2023 season I was president of the group and managed the Teus project end to end. After the competition we started recruiting and training the next generation.'
        ]
      },
      results: {
        es: ['4 de 6 vuelos exitosos', '6.º lugar en la general con 202 puntos', 'Mejora clara respecto al año anterior'],
        en: ['4 of 6 successful flights', '6th place overall with 202 points', 'A clear improvement over the previous year']
      },
      cover: 'img/teus/competition.webp',
      media: [
        { src: 'img/teus/airframe.webp', plan: true, caption: { es: 'Modelo 3D de la estructura de Teus.', en: '3D model of the Teus airframe.' } },
        { src: 'img/teus/competition.webp', caption: { es: 'Preparación del avión en la competencia.', en: 'Preparing the aircraft at the competition.' } },
        { src: 'img/teus/team-wing.webp', caption: { es: 'El equipo con el ala de Teus.', en: 'The team with the Teus wing.' } },
        { src: 'img/teus/team-sunset.webp', caption: { es: 'Cierre de la competencia.', en: 'End of the competition.' } }
      ],
      links: [{ href: 'https://www.linkedin.com/posts/jorge-talavera11_tecdemonterrey-aerodesign-activity-7050500642871631872-GXZA', label: { es: 'Ver la publicación en LinkedIn', en: 'See the post on LinkedIn' } }]
    },
    {
      id: 'mezclador-v',
      tags: ['mec'],
      year: 2023,
      title: { es: 'Mezclador en V', en: 'V-mixer' },
      context: { es: 'Grupo Gates', en: 'Gates' },
      role: null,
      discipline: { es: 'Diseño de máquinas', en: 'Machine design' },
      summary: {
        es: 'Diseño de un mezclador en V para producir los compuestos plásticos de bandas de transmisión automotrices, con carga máxima de 50 kg.',
        en: 'Design of a V-mixer for producing the plastic compounds used in automotive transmission belts, with a maximum load of 50 kg.'
      },
      body: {
        es: ['Mezclador en V para producir distintos compuestos plásticos de la industria automotriz, en concreto para bandas de transmisión. Con una carga máxima de 50 kg, prepara varios compuestos según las propiedades mecánicas que se necesiten.'],
        en: ['A V-mixer for producing different plastic compounds for the automotive industry, specifically for transmission belts. With a maximum load of 50 kg, it prepares several compounds depending on the mechanical properties required.']
      },
      results: null,
      cover: 'img/mezclador-v/machine.webp',
      coverFit: true,
      media: [
        { src: 'img/mezclador-v/machine.webp', fit: true, caption: { es: 'Máquina completa con su gabinete.', en: 'Complete machine with its enclosure.' } },
        { src: 'img/mezclador-v/mixer.webp', fit: true, caption: { es: 'Cuerpo del mezclador en V.', en: 'V-mixer body.' } },
        { src: 'img/mezclador-v/detail.webp', fit: true, caption: { es: 'Detalle del eje.', en: 'Shaft detail.' } }
      ],
      links: []
    },
    {
      id: 'maqueta-seguridad',
      tags: ['mec'],
      year: 2022,
      title: { es: 'Maqueta interactiva de seguridad', en: 'Interactive safety mockup' },
      context: { es: 'Moldex, Grupo Bimbo', en: 'Moldex, Grupo Bimbo' },
      role: null,
      discipline: { es: 'Seguridad industrial y diseño', en: 'Industrial safety and design' },
      summary: {
        es: 'Una maqueta que muestra, con una esmeriladora real, el daño que puede sufrir un trabajador que no usa el equipo de protección. Se usa en las capacitaciones de seguridad.',
        en: 'A mockup that uses a real angle grinder to show the harm a worker can suffer without protective equipment. It is used in safety training.'
      },
      body: {
        es: [
          'La maqueta demuestra el daño que puede sufrir un trabajador si no sigue las medidas de seguridad al usar una esmeriladora. Sirve en las capacitaciones para enseñar el uso correcto del equipo y las precauciones que hay que tomar.',
          'Ver las consecuencias de un mal uso refuerza los protocolos de seguridad y la cultura de responsabilidad en planta, y ayuda a reducir accidentes y lesiones.'
        ],
        en: [
          'The mockup shows the harm a worker can suffer by not following safety measures when using an angle grinder. It is used in training sessions to teach the correct use of the equipment and the precautions to take.',
          'Seeing the consequences of misuse reinforces safety protocols and a culture of responsibility on the shop floor, and helps reduce accidents and injuries.'
        ]
      },
      results: null,
      cover: 'img/maqueta-seguridad/mockup-lab.webp',
      media: [
        { video: 'media/maqueta-seguridad-prueba.mp4', poster: 'media/maqueta-seguridad-prueba.jpg', caption: { es: 'Prueba de la maqueta con la esmeriladora encendida.', en: 'Testing the mockup with the grinder running.' } },
        { src: 'img/maqueta-seguridad/cad.webp', fit: true, caption: { es: 'Modelo 3D de la maqueta.', en: '3D model of the mockup.' } },
        { src: 'img/maqueta-seguridad/mockup-lab.webp', caption: { es: 'La maqueta terminada.', en: 'The finished mockup.' } },
        { src: 'img/maqueta-seguridad/mockup-top.webp', caption: { es: 'Vista superior.', en: 'Top view.' } },
        { src: 'img/maqueta-seguridad/presentation.webp', caption: { es: 'Entrega del proyecto.', en: 'Project handover.' } }
      ],
      links: [{ href: 'https://www.linkedin.com/feed/update/urn:li:activity:6994161333201960962/', label: { es: 'Ver la publicación en LinkedIn', en: 'See the post on LinkedIn' } }]
    },
    {
      id: 'cloudsurfer',
      tags: ['aero', 'mec'],
      year: 2022,
      title: { es: 'Cloudsurfer', en: 'Cloudsurfer' },
      context: { es: 'SAE Aerodesign México 2022, Aerodesign Tec de Monterrey Campus Toluca', en: 'SAE Aerodesign Mexico 2022, Aerodesign Tec de Monterrey Campus Toluca' },
      role: { es: 'Equipo de fuselaje, bahía de carga', en: 'Fuselage team, cargo bay' },
      discipline: { es: 'Aeronáutica y diseño mecánico', en: 'Aeronautics and mechanical design' },
      summary: {
        es: 'Diseñé y construí la bahía de carga del avión Cloudsurfer y el sistema que la sujeta dentro del fuselaje.',
        en: 'I designed and built the cargo bay of the Cloudsurfer aircraft and the system that secures it inside the fuselage.'
      },
      body: {
        es: ['Formé parte del equipo responsable del diseño y la construcción del fuselaje. Mi parte fue la bahía de carga y su sistema de sujeción. Cloudsurfer compitió en SAE Aerodesign México 2022.'],
        en: ['I was part of the team responsible for designing and building the fuselage. My part was the cargo bay and its securing system. Cloudsurfer competed in SAE Aerodesign Mexico 2022.']
      },
      results: {
        es: ['4 de 5 vuelos completados, 3 exitosos', 'Carga útil máxima de 3 kg'],
        en: ['4 of 5 flights completed, 3 successful', 'Maximum payload of 3 kg']
      },
      cover: 'img/cloudsurfer/flight.webp',
      media: [
        { src: 'img/cloudsurfer/airframe.webp', plan: true, caption: { es: 'Modelo 3D de la estructura de Cloudsurfer.', en: '3D model of the Cloudsurfer airframe.' } },
        { src: 'img/cloudsurfer/flight.webp', caption: { es: 'Cloudsurfer en vuelo.', en: 'Cloudsurfer in flight.' } },
        { src: 'img/cloudsurfer/team.webp', caption: { es: 'El equipo con el avión.', en: 'The team with the aircraft.' } }
      ],
      links: [{ href: 'https://www.instagram.com/tv/CbsNNxWFj6f/', label: { es: 'Ver la publicación en Instagram', en: 'See the post on Instagram' } }]
    },
    {
      id: 'puerta-cortina',
      tags: ['mec', 'ges', 'sim'],
      year: 2022,
      title: { es: 'Puerta tipo cortina', en: 'Roll-up curtain door' },
      context: { es: 'SESAMEE Mexicana', en: 'SESAMEE Mexicana' },
      role: { es: 'Gestión del equipo y de la producción', en: 'Team and production management' },
      discipline: { es: 'Manufactura y gestión', en: 'Manufacturing and management' },
      summary: {
        es: 'Reproducción de una puerta tipo cortina para la caja de carga de un camión. Coordiné al equipo, la compra de materiales, la producción y la calidad para cumplir el programa.',
        en: 'Reproducing a roll-up curtain door for a truck cargo box. I coordinated the team, material purchasing, production and quality to stay on schedule.'
      },
      body: {
        es: [
          'El reto era reproducir una puerta tipo cortina para la caja de carga de un camión dentro de los tiempos programados.',
          'Mi papel fue gestionar al equipo: asignar al personal, supervisar la compra de materiales, dar seguimiento a la producción y cuidar los estándares de calidad, con comunicación constante entre todos.'
        ],
        en: [
          'The challenge was to reproduce a roll-up curtain door for a truck cargo box within the scheduled time.',
          'My role was managing the team: assigning people, overseeing material purchasing, tracking production and keeping to quality standards, with constant communication across the team.'
        ]
      },
      results: null,
      cover: 'img/puerta-cortina/render.webp',
      coverFit: true,
      media: [
        { src: 'img/puerta-cortina/exploded.webp', fit: true, caption: { es: 'Vista explosionada.', en: 'Exploded view.' } },
        { src: 'img/puerta-cortina/fea.webp', fit: true, caption: { es: 'Análisis de esfuerzos en la guía.', en: 'Stress analysis of the guide rail.' } },
        { video: 'media/puerta-cortina-ensamble.mp4', poster: 'media/puerta-cortina-ensamble.jpg', loop: true, fit: true, caption: { es: 'Secuencia de ensamble.', en: 'Assembly sequence.' } },
        { src: 'img/puerta-cortina/prototype.webp', caption: { es: 'Prototipo construido.', en: 'Built prototype.' } },
        { video: 'media/puerta-cortina-prueba.mp4', poster: 'media/puerta-cortina-prueba.jpg', loop: true, tall: true, caption: { es: 'Prueba de apertura.', en: 'Opening test.' } }
      ],
      links: []
    },
    {
      id: 'intercambiador-calor',
      tags: ['sim', 'mec'],
      year: 2022,
      title: { es: 'Intercambiador de calor', en: 'Heat exchanger' },
      context: { es: 'Grupo BOCAR', en: 'Grupo BOCAR' },
      role: null,
      discipline: { es: 'Energía térmica y CFD', en: 'Thermal energy and CFD' },
      summary: {
        es: 'Un intercambiador de calor para recuperar la energía térmica de los hornos donde se fabrican autopartes de aluminio.',
        en: 'A heat exchanger to recover thermal energy from the furnaces used to make aluminum car parts.'
      },
      body: {
        es: [
          'El proyecto busca capturar y aprovechar la energía térmica de los hornos que se usan para fabricar autopartes de aluminio.',
          'Optimizar la recuperación de energía reduce el desperdicio y hace más sostenible la manufactura automotriz, y puede servir de referencia para iniciativas parecidas en otras industrias.'
        ],
        en: [
          'The project aims to capture and reuse thermal energy from the furnaces used to make aluminum car parts.',
          'Optimizing energy recovery reduces waste and makes automotive manufacturing more sustainable, and it can serve as a reference for similar initiatives in other industries.'
        ]
      },
      results: null,
      cover: 'img/intercambiador-calor/coil.webp',
      coverFit: true,
      media: [
        { video: 'media/intercambiador-calor-cfd.mp4', poster: 'media/intercambiador-calor-cfd.jpg', loop: true, fit: true, caption: { es: 'Simulación CFD de las trayectorias de flujo.', en: 'CFD simulation of the flow paths.' } },
        { src: 'img/intercambiador-calor/stack.webp', fit: true, caption: { es: 'Modelo 3D del sistema.', en: '3D model of the system.' } },
        { src: 'img/intercambiador-calor/coil.webp', fit: true, caption: { es: 'Serpentín del intercambiador.', en: 'Heat exchanger coil.' } },
        { src: 'img/intercambiador-calor/cfd.webp', fit: true, caption: { es: 'Condiciones de frontera de la simulación CFD.', en: 'CFD boundary conditions.' } }
      ],
      links: []
    }
  ]
};

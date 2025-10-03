import type { Session } from '../types';

export const sessions: Session[] = [
  {
    "id": "emdr-protocolo-completo",
    "title": "Sesión Completa Guiada",
    "duration": 2400, // 40 minutos
    "bpm": 60,
    "manualControl": true,
    "phases": [
      {
        "time": 0,
        "type": "instruction",
        "text": "PASO 1: Elige qué trabajar - Puede ser: un recuerdo del pasado que te molesta, una situación reciente, una preocupación sobre el futuro, un conflicto con alguien, o algo que te hace sentir incómodo. Elige UNA cosa para trabajar hoy.",
        "audio": "fase1_historia.mp3",
        "duration": 120
      },
      {
        "time": 1,
        "type": "instruction",
        "text": "PASO 2: Aprende las palmaditas - Cruza tus brazos sobre el pecho (como un abrazo). Mano derecha en hombro izquierdo, mano izquierda en hombro derecho. Ahora da palmaditas suaves: derecha... izquierda... derecha... izquierda...",
        "audio": "fase2_preparacion.mp3",
        "duration": 60
      },
      {
        "time": 2,
        "type": "instruction",
        "text": "PASO 3: La imagen - Cuando piensas en eso, ¿qué imagen o escena viene a tu mente? Puede ser algo que pasó, algo que imaginas, o simplemente una sensación visual. Como si fuera una foto o película. Obsérvala.",
        "audio": "fase3_imagen.mp3",
        "duration": 90
      },
      {
        "time": 3,
        "type": "instruction",
        "text": "PASO 4: Lo negativo - Cuando piensas en esa situación, ¿qué creencia negativa surge sobre ti mismo? Ejemplos: 'No soy suficiente', 'No merezco amor', 'Estoy solo/a', 'No tengo control', 'Soy un fracaso', 'No valgo', 'Estoy en peligro'...",
        "audio": "fase3_cognicion_negativa.mp3",
        "duration": 90
      },
      {
        "time": 4,
        "type": "instruction",
        "text": "PASO 5: Lo que quieres creer - ¿Qué preferirías creer sobre ti en su lugar? Por ejemplo: 'Soy suficiente', 'Estoy seguro', 'Tengo el control', 'Sí valgo'...",
        "audio": "fase3_cognicion_positiva.mp3",
        "duration": 90
      },
      {
        "time": 5,
        "type": "instruction",
        "text": "PASO 6: ¿Qué tan verdadero se siente? - Del 1 al 7, ¿qué tan verdadero se siente lo positivo AHORA MISMO? 1 = para nada verdadero, 7 = totalmente verdadero",
        "audio": "fase3_voc.mp3",
        "duration": 45
      },
      {
        "time": 6,
        "type": "instruction",
        "text": "PASO 7: La emoción - Cuando piensas en la imagen, ¿qué emoción sientes? ¿Miedo? ¿Tristeza? ¿Vergüenza? ¿Enojo? ¿Otra?",
        "audio": "fase3_emocion.mp3",
        "duration": 45
      },
      {
        "time": 7,
        "type": "instruction",
        "text": "PASO 8: ¿Qué tan fuerte? - Del 0 al 10, ¿qué tan molesto es pensar en esto AHORA? 0 = nada molesto, 10 = lo peor posible",
        "audio": "fase3_sud.mp3",
        "duration": 45
      },
      {
        "time": 8,
        "type": "instruction",
        "text": "PASO 9: En tu cuerpo - ¿Dónde sientes esa emoción en tu cuerpo? ¿En el pecho? ¿Estómago? ¿Garganta? ¿Cabeza? Nota dónde está.",
        "audio": "fase3_sensacion.mp3",
        "duration": 45
      },
      {
        "time": 9,
        "type": "instruction",
        "text": "PASO 10: Vamos a procesar - Ahora trae la imagen, el pensamiento negativo y la sensación en tu cuerpo. Los vamos a procesar juntos. Prepárate para las palmaditas...",
        "audio": "fase4_inicio.mp3",
        "duration": 30
      },
      {
        "time": 10,
        "type": "instruction",
        "text": "PALMADITAS - Cruza los brazos. Palmaditas suaves: derecha, izquierda, derecha, izquierda... Piensa en el recuerdo mientras haces las palmaditas. Solo observa lo que surja, no lo juzgues...",
        "audio": "fase4_serie1.mp3",
        "duration": 90,
        "pauseDuration": 60
      },
      {
        "time": 11,
        "type": "instruction",
        "text": "PAUSA - Detén las palmaditas. Respira profundo. ¿Qué notas? ¿Cambió algo? ¿La imagen, el pensamiento, la emoción, la sensación? Está bien si cambió o si no cambió nada aún.",
        "audio": "fase4_pausa1.mp3",
        "duration": 45
      },
      {
        "time": 12,
        "type": "instruction",
        "text": "SEGUNDA RONDA - Vamos de nuevo. Piensa en lo que acaba de surgir. Palmaditas: derecha, izquierda, derecha, izquierda...",
        "audio": "fase4_serie2.mp3",
        "duration": 90,
        "pauseDuration": 60
      },
      {
        "time": 13,
        "type": "instruction",
        "text": "PAUSA - Detén. Respira. ¿Qué notas ahora? ¿Sigue molestando? ¿Menos? ¿Diferente?",
        "audio": "fase4_pausa2.mp3",
        "duration": 45
      },
      {
        "time": 14,
        "type": "instruction",
        "text": "TERCERA RONDA - Una vez más. Palmaditas mientras piensas en lo que queda del malestar...",
        "audio": "fase4_serie3.mp3",
        "duration": 90,
        "pauseDuration": 60
      },
      {
        "time": 15,
        "type": "instruction",
        "text": "REVISA - Del 0 al 10, ¿qué tan molesto es AHORA? El objetivo es que baje a 0 o 1. Si todavía es alto, está bien, podemos hacer más rondas.",
        "audio": "fase4_evaluacion_sud.mp3",
        "duration": 45
      },
      {
        "time": 16,
        "type": "instruction",
        "text": "PASO 11: Instalar lo positivo - Ahora trae la imagen original y ese pensamiento positivo que querías creer. Del 1 al 7, ¿qué tan verdadero se siente AHORA?",
        "audio": "fase5_instalacion.mp3",
        "duration": 60
      },
      {
        "time": 17,
        "type": "instruction",
        "text": "FORTALECER - Mantén juntos la imagen y el pensamiento positivo. Palmaditas para que se fortalezca...",
        "audio": "fase5_serie.mp3",
        "duration": 90,
        "pauseDuration": 60
      },
      {
        "time": 18,
        "type": "instruction",
        "text": "REVISA - ¿Qué tan verdadero se siente lo positivo AHORA? El objetivo es 6 o 7. ¿Se siente más real?",
        "audio": "fase5_evaluacion.mp3",
        "duration": 45
      },
      {
        "time": 19,
        "type": "instruction",
        "text": "PASO 12: Revisa tu cuerpo - Cierra los ojos. Trae la imagen y el pensamiento positivo. Ahora escanea tu cuerpo de la cabeza a los pies. ¿Hay alguna tensión o molestia?",
        "audio": "fase6_escaneo.mp3",
        "duration": 60
      },
      {
        "time": 20,
        "type": "instruction",
        "text": "SI HAY TENSIÓN - Si notas algo incómodo en tu cuerpo, vamos a procesarlo. Palmaditas enfocándote en esa sensación...",
        "audio": "fase6_procesar.mp3",
        "duration": 90,
        "pauseDuration": 60
      },
      {
        "time": 21,
        "type": "instruction",
        "text": "PASO 13: Terminamos - Respira profundo 5 veces. La sesión terminó. Hiciste un gran trabajo procesando este recuerdo.",
        "audio": "fase7_cierre.mp3",
        "duration": 60
      },
      {
        "time": 22,
        "type": "instruction",
        "text": "IMPORTANTE - En los próximos días pueden surgir recuerdos, emociones o sueños relacionados. Esto es NORMAL. Significa que tu cerebro está procesando. Anótalos si quieres.",
        "audio": "fase7_indicaciones.mp3",
        "duration": 45
      },
      {
        "time": 23,
        "type": "instruction",
        "text": "SIGUIENTE SESIÓN - La próxima vez que hagas esto, puedes revisar este mismo recuerdo o trabajar uno nuevo. ¡Felicidades por tu trabajo!",
        "audio": "fase8_reeval.mp3",
        "duration": 30
      }
    ]
  },
  {
    "id": "emdr-sesion-rapida",
    "title": "Sesión Rápida - 10 Minutos",
    "duration": 600, // 10 minutos
    "bpm": 60,
    "manualControl": true,
    "phases": [
      {
        "time": 0,
        "type": "instruction",
        "text": "¿Qué te está molestando? - Piensa en algo que te pasó hoy o esta semana que te hizo sentir mal. Algo que no sea muy fuerte (del 0 al 10, que sea entre 3 y 5).",
        "audio": "rapida_identificacion.mp3",
        "duration": 60
      },
      {
        "time": 1,
        "type": "instruction",
        "text": "Preguntas rápidas - ¿Qué imagen viene? ¿Qué emoción sientes? ¿Dónde en tu cuerpo? Del 0 al 10, ¿qué tan molesto es?",
        "audio": "rapida_evaluacion.mp3",
        "duration": 60
      },
      {
        "time": 2,
        "type": "instruction",
        "text": "Posición - Abrazo de mariposa: cruza los brazos sobre el pecho. Practica palmaditas alternas suaves: derecha, izquierda, derecha, izquierda...",
        "audio": "rapida_preparacion.mp3",
        "duration": 30
      },
      {
        "time": 3,
        "type": "instruction",
        "text": "Primera ronda - Trae la imagen y la emoción. Palmaditas continuas mientras piensas en eso...",
        "audio": "rapida_serie1.mp3",
        "duration": 120,
        "pauseDuration": 90
      },
      {
        "time": 4,
        "type": "instruction",
        "text": "Pausa - Detén. Respira. ¿Qué notas ahora? ¿Bajó la intensidad? ¿Se siente diferente?",
        "audio": "rapida_pausa.mp3",
        "duration": 30
      },
      {
        "time": 5,
        "type": "instruction",
        "text": "Segunda ronda - Continúa con lo que surgió. Palmaditas de nuevo...",
        "audio": "rapida_serie2.mp3",
        "duration": 120,
        "pauseDuration": 90
      },
      {
        "time": 6,
        "type": "instruction",
        "text": "Lo positivo - ¿Qué preferirías creer sobre ti en esta situación? Mantén ese pensamiento positivo mientras haces palmaditas...",
        "audio": "rapida_instalacion.mp3",
        "duration": 90,
        "pauseDuration": 60
      },
      {
        "time": 7,
        "type": "instruction",
        "text": "Terminamos - Respira profundo 3 veces. Escanea tu cuerpo. ¿Cómo te sientes ahora? Ya procesaste esa experiencia.",
        "audio": "rapida_cierre.mp3",
        "duration": 60
      }
    ]
  },
  {
    "id": "emdr-recursos-positivos",
    "title": "Fortalecer Algo Bueno",
    "duration": 480, // 8 minutos
    "bpm": 60,
    "manualControl": true,
    "phases": [
      {
        "time": 0,
        "type": "instruction",
        "text": "Recuerda algo bueno - Piensa en un momento en que te sentiste bien. Puede ser cuando te sentiste seguro, tranquilo, amado, fuerte o feliz. Un buen recuerdo.",
        "audio": "rdi_recurso.mp3",
        "duration": 60
      },
      {
        "time": 1,
        "type": "instruction",
        "text": "Hazlo más real - ¿Qué ves en ese recuerdo? ¿Qué escuchas? ¿Qué sientes? Imagínalo lo más vívido posible, como si estuvieras ahí.",
        "audio": "rdi_intensificar.mp3",
        "duration": 60
      },
      {
        "time": 2,
        "type": "instruction",
        "text": "Una palabra - Elige UNA palabra que capture cómo te sientes en ese recuerdo. Por ejemplo: 'calma', 'fuerza', 'amor', 'paz', 'seguro'...",
        "audio": "rdi_palabra.mp3",
        "duration": 45
      },
      {
        "time": 3,
        "type": "instruction",
        "text": "En tu cuerpo - ¿Dónde sientes esa sensación positiva en tu cuerpo? En el pecho, estómago, cara... Nota dónde se siente bien.",
        "audio": "rdi_sensacion.mp3",
        "duration": 45
      },
      {
        "time": 4,
        "type": "instruction",
        "text": "Fortalecer - Mantén la imagen, la palabra y la sensación en tu cuerpo. Abrazo de mariposa. Palmaditas suaves para que se fortalezca...",
        "audio": "rdi_instalacion1.mp3",
        "duration": 90,
        "pauseDuration": 60
      },
      {
        "time": 5,
        "type": "instruction",
        "text": "Más fuerte - Respira. ¿Se siente más fuerte la sensación positiva? Continuemos fortaleciéndola con más palmaditas...",
        "audio": "rdi_instalacion2.mp3",
        "duration": 90,
        "pauseDuration": 60
      },
      {
        "time": 6,
        "type": "instruction",
        "text": "Listo - Este recurso positivo está ahora instalado en ti. Cuando lo necesites, solo piensa en tu palabra clave y haz palmaditas para acceder a esta sensación.",
        "audio": "rdi_anclaje.mp3",
        "duration": 60
      }
    ]
  },
  {
    "id": "emdr-lugar-seguro",
    "title": "Tu Lugar de Calma",
    "duration": 420, // 7 minutos
    "bpm": 60,
    "manualControl": true,
    "phases": [
      {
        "time": 0,
        "type": "instruction",
        "text": "Crea tu lugar - Imagina o recuerda un lugar donde te sientas completamente seguro y en paz. Puede ser real (una playa, tu cuarto) o imaginario (un bosque mágico, las nubes).",
        "audio": "ls_crear.mp3",
        "duration": 60
      },
      {
        "time": 1,
        "type": "instruction",
        "text": "¿Qué ves? - Mira los colores, las formas, la luz... Observa cada detalle de tu lugar seguro. Hazlo lo más real posible.",
        "audio": "ls_visual.mp3",
        "duration": 45
      },
      {
        "time": 2,
        "type": "instruction",
        "text": "¿Qué escuchas? - ¿Hay sonidos de la naturaleza? ¿Silencio? ¿Música suave? Escucha tu lugar seguro.",
        "audio": "ls_auditivo.mp3",
        "duration": 45
      },
      {
        "time": 3,
        "type": "instruction",
        "text": "¿Qué sientes? - ¿Está cálido o fresco? ¿Qué texturas hay? ¿Qué hueles? Usa todos tus sentidos para sentir tu lugar seguro.",
        "audio": "ls_sensorial.mp3",
        "duration": 45
      },
      {
        "time": 4,
        "type": "instruction",
        "text": "La emoción - ¿Qué emoción surge estando aquí? Nota esa sensación de seguridad, paz, calma... Siente cómo tu cuerpo se relaja.",
        "audio": "ls_emocion.mp3",
        "duration": 45
      },
      {
        "time": 5,
        "type": "instruction",
        "text": "Instalar - Mantén vívido tu lugar seguro. Abrazo de mariposa. Palmaditas suaves mientras disfrutas estar aquí y te sientes seguro...",
        "audio": "ls_instalacion.mp3",
        "duration": 120,
        "pauseDuration": 90
      },
      {
        "time": 6,
        "type": "instruction",
        "text": "Listo - Tu lugar seguro está instalado. Cuando te sientas ansioso, abrumado o asustado, puedes regresar aquí. Solo cierra los ojos, respira y visualízalo.",
        "audio": "ls_cierre.mp3",
        "duration": 60
      }
    ]
  },
  {
    "id": "emdr-procesamiento-rapido",
    "title": "Procesamiento Rápido - 5 Minutos",
    "duration": 300, // 5 minutos
    "bpm": 60,
    "manualControl": true,
    "phases": [
      {
        "time": 0,
        "type": "instruction",
        "text": "¿Qué te está molestando? - Piensa en algo que te pasó hoy o esta semana. Algo que te haga sentir mal, pero no demasiado intenso (del 0 al 10, que sea entre 3 y 6).",
        "audio": "rapido_identificacion.mp3",
        "duration": 45
      },
      {
        "time": 1,
        "type": "instruction",
        "text": "Identifica rápido - ¿Qué imagen viene? ¿Qué emoción sientes? ¿Dónde en tu cuerpo? Del 0 al 10, ¿qué tan molesto es?",
        "audio": "rapido_evaluacion.mp3",
        "duration": 45
      },
      {
        "time": 2,
        "type": "instruction",
        "text": "Posición mariposa - Cruza los brazos sobre el pecho. Mano derecha en hombro izquierdo, mano izquierda en hombro derecho. Practica palmaditas alternas suaves.",
        "audio": "rapido_preparacion.mp3",
        "duration": 30
      },
      {
        "time": 3,
        "type": "instruction",
        "text": "Procesa - Trae la imagen y la emoción. Palmaditas continuas mientras piensas en eso. Observa lo que surge...",
        "audio": "rapido_procesamiento.mp3",
        "duration": 90,
        "pauseDuration": 90
      },
      {
        "time": 4,
        "type": "instruction",
        "text": "Pausa - Detén. Respira. ¿Qué notas ahora? ¿Bajó la intensidad? ¿Se siente diferente?",
        "audio": "rapido_pausa.mp3",
        "duration": 30
      },
      {
        "time": 5,
        "type": "instruction",
        "text": "Segunda ronda - Continúa con lo que surgió. Palmaditas de nuevo...",
        "audio": "rapido_segunda_ronda.mp3",
        "duration": 60,
        "pauseDuration": 60
      },
      {
        "time": 6,
        "type": "instruction",
        "text": "Terminamos - Respira profundo 3 veces. Escanea tu cuerpo. ¿Cómo te sientes ahora? Ya procesaste esa experiencia.",
        "audio": "rapido_cierre.mp3",
        "duration": 30
      }
    ]
  },
  {
    "id": "emdr-autocuidado-diario",
    "title": "Autocuidado Diario - 3 Minutos",
    "duration": 180, // 3 minutos
    "bpm": 60,
    "manualControl": true,
    "phases": [
      {
        "time": 0,
        "type": "instruction",
        "text": "¿Cómo te sientes ahora? - Del 0 al 10, ¿qué tan bien te sientes en este momento? 0 = muy mal, 10 = muy bien",
        "audio": "autocuidado_evaluacion.mp3",
        "duration": 30
      },
      {
        "time": 1,
        "type": "instruction",
        "text": "Posición mariposa - Cruza los brazos sobre el pecho. Mano derecha en hombro izquierdo, mano izquierda en hombro derecho. Respira profundo 3 veces.",
        "audio": "autocuidado_preparacion.mp3",
        "duration": 30
      },
      {
        "time": 2,
        "type": "instruction",
        "text": "Palmaditas de calma - Palmaditas suaves mientras piensas: 'Estoy aquí, estoy presente, estoy bien'. Derecha, izquierda, derecha, izquierda...",
        "audio": "autocuidado_calma.mp3",
        "duration": 60,
        "pauseDuration": 60
      },
      {
        "time": 3,
        "type": "instruction",
        "text": "Afirmación positiva - Mantén las palmaditas mientras piensas: 'Soy capaz de cuidarme y sentirme mejor'. Respira profundo.",
        "audio": "autocuidado_afirmacion.mp3",
        "duration": 30,
        "pauseDuration": 30
      },
      {
        "time": 4,
        "type": "instruction",
        "text": "Terminamos - Detén las palmaditas. Pon las manos sobre tu corazón. Respira profundo 3 veces. ¿Cómo te sientes ahora?",
        "audio": "autocuidado_cierre.mp3",
        "duration": 30
      }
    ]
  }
];
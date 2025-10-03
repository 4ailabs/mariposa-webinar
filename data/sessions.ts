import type { Session } from '../types';

export const sessions: Session[] = [
  {
    "id": "historia-vieja",
    "title": "Mi Historia Vieja",
    "duration": 40,
    "bpm": 70,
    "phases": [
      {
        "time": 0,
        "type": "instruction",
        "text": "Piensa en ese evento de tu infancia.",
        "audio": "instruction_evento.mp3"
      },
      {
        "time": 10,
        "type": "tapping",
        "repetitions": 5,
        "phrase": "Eso pasó",
        "audio": "phrase_eso_paso.mp3"
      },
      {
        "time": 20,
        "type": "tapping",
        "repetitions": 5,
        "phrase": "Y dolió",
        "audio": "phrase_dolio.mp3"
      },
      {
        "time": 30,
        "type": "tapping",
        "repetitions": 5,
        "phrase": "Está bien que doliera",
        "audio": "phrase_esta_bien.mp3"
      }
    ]
  },
  {
    "id": "dialogo-nino-interior",
    "title": "Diálogo con Niño Interior",
    "duration": 45,
    "bpm": 60,
    "phases": [
      {
        "time": 0,
        "type": "instruction",
        "text": "Cierra los ojos. Visualiza a ese niño o niña que fuiste.",
        "audio": "instruction_visualiza.mp3"
      },
      {
        "time": 15,
        "type": "tapping",
        "repetitions": 5,
        "phrase": "Hola pequeño, vine del futuro",
        "audio": "phrase_hola_pequeno.mp3"
      },
      {
        "time": 30,
        "type": "tapping",
        "repetitions": 5,
        "phrase": "Sé que tienes miedo",
        "audio": "phrase_tienes_miedo.mp3"
      }
    ]
  },
  {
    "id": "instalacion-nueva-creencia",
    "title": "Instalación de Nueva Creencia",
    "duration": 50,
    "bpm": 85,
    "phases": [
      {
        "time": 0,
        "type": "instruction",
        "text": "Palmaditas firmes, rítmicas, con convicción.",
        "audio": "instruction_firmes.mp3"
      },
      {
        "time": 10,
        "type": "tapping",
        "repetitions": 10,
        "phrase": "SÍ MEREZCO elegir lo que deseo",
        "audio": "phrase_si_merezco_elegir.mp3"
      },
      {
        "time": 35,
        "type": "tapping",
        "repetitions": 10,
        "phrase": "SÍ MEREZCO tener lo que quiero",
        "audio": "phrase_si_merezco_tener.mp3"
      }
    ]
  },
  {
    "id": "emergencia-3min",
    "title": "Protocolo de Emergencia (3 min)",
    "duration": 180,
    "bpm": 80,
    "phases": [
      {
        "time": 0,
        "type": "tapping",
        "repetitions": 20,
        "phrase": "Hola programa viejo, te reconozco",
        "audio": "phrase_te_reconozco.mp3"
      },
      {
        "time": 40,
        "type": "tapping",
        "repetitions": 20,
        "phrase": "Pero ya no eres verdad",
        "audio": "phrase_no_eres_verdad.mp3"
      },
      {
        "time": 80,
        "type": "tapping",
        "repetitions": 20,
        "phrase": "SÍ merezco elegir lo que deseo",
        "audio": "phrase_si_merezco_final.mp3"
      }
    ]
  }
];
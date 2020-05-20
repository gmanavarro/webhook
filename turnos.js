class Turno {

  horarios
  fecha

  constructor(fecha) {
    this.fecha = fecha
    this.horarios = {
      urologo: {
        libre: ['10:00', '11:00', '12:00', '13:00', '14:00']
      },
      psicologo: {
        libre: ['10:00', '11:00', '12:00', '13:00', '14:00']
      },
      nutricionista: {
        libre: ['10:00', '11:00', '12:00', '13:00', '14:00']
      },
      clinico: {
        libre: ['10:00', '11:00', '12:00', '13:00', '14:00']
      },

    }
  }

  reservar = (especialidad, hora) => {
    let index = this.horarios[especialidad].libre.indexOf(hora)
    this.horarios[especialidad].libre.splice(index, 1)
  }

  getHorariosLibres = (especialidad) => {
    let resp = ''
    this.horarios[especialidad].libre.forEach(horario => {
      resp + horario
    });

    return resp
  }

}

let turnos = [

]

const addTurno = (especialidad, fecha, hora) => {
  let turno = new Turno(fecha)
  turno.reservar(especialidad, hora)
  turnos.push(turno)
}

const getHorariosLibres = (fecha, especialidad) => {
  let resp
  let turno = turnos.find(turno => turno.fecha === fecha)
  if (turno !== undefined) {
    turno.getHorariosLibres(especialidad)
  }
  return '10:00, 11:00, 12:00, 13:00, 14:00'
}

export default {
  addTurno,
  getHorariosLibres
};
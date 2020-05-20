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
    let resp = 'Están disponibles los siguientes horarios: '
    this.horarios[especialidad].libre.forEach(horario => {
      resp + '  ' + horario
    });
    resp + '. Elija un horario.'

    return resp
  }

}

let turnos = [

]

const getFecha = (fecha) => {
  let date = new Date(fecha)
  return stringFecha = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()
}

const addTurno = (fecha, especialidad, horario) => {
  let turno = new Turno(getFecha(fecha))
  turno.reservar(especialidad, horario)
  turnos.push(turno)
  return `Turno reservado: Especialidad: ${especialidad}  Fecha: ${fecha}  Horario:${horario}`
}

const getHorariosLibres = (fecha, especialidad) => {
  let turno = turnos.find(turno => turno.fecha === getFecha(fecha))
  if (turno !== undefined) {
    turno.getHorariosLibres(especialidad)
  }
  return 'Están disponibles los siguientes horarios: 10:00  11:00  12:00  13:00  14:00. Elija un horario.'
}

module.exports = {
  addTurno,
  getHorariosLibres
};
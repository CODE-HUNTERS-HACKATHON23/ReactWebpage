/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/usuario/me": {
    get: operations["UsuarioController_me"];
  };
  "/auth/login": {
    post: operations["AuthenticationController_login"];
  };
  "/auth/register": {
    post: operations["AuthenticationController_register"];
  };
  "/paciente/tratamientos": {
    get: operations["PacienteController_getTratamientos"];
    post: operations["PacienteController_createTratamiento"];
  };
  "/medico/search/paciente": {
    post: operations["MedicoController_getMedicoPaciente"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    RolInUsuario: {
      /** @description Id del rol */
      idRol: number;
      /** @description Nombre del rol */
      nombre: string;
    };
    UsuarioDTO: {
      /** @description Avatar del usuario */
      AvatarURI: Record<string, unknown> | null;
      /** @description Contraseña del usuario */
      contrasena: string;
      /** @description Correo del usuario */
      correo: string;
      /** @description Id del usuario */
      idUsuario: number;
      /** @description Nombre del usuario */
      usuario: string;
      /** @description Rol del usuario */
      rol: components["schemas"]["RolInUsuario"] | null;
    };
    LoginDTO: {
      /** @description Contraseña del usuario */
      contrasena: string;
      /** @description Correo del usuario */
      correo: string;
    };
    AcessTokenDTO: {
      /** @description Token de acceso */
      accessToken: string;
    };
    RegisterDTO: {
      /** @description Contraseña del usuario */
      contrasena: string;
      /** @description Correo del usuario */
      correo: string;
      /** @description Nombre del usuario */
      usuario: string;
      /** @description Apellidos del paciente */
      apellidos: string;
      /** @description Cédula del paciente */
      cedula?: string | null;
      /** @description Dirección del paciente */
      direccion: string;
      /**
       * Format: date-time
       * @description Fecha de nacimiento del paciente
       */
      fechaNacimiento: string;
      /** @description Id del municipio del paciente */
      idMunicipio: number;
      /** @description Lugar de nacimiento del paciente */
      lugarNacimiento: string;
      /** @description Nombre de la madre del paciente */
      nombreMadre?: string | null;
      /** @description Nombre del padre del paciente */
      nombrePadre?: string | null;
      /** @description Nombres del paciente */
      nombres: string;
      /** @description Número de afiliación del paciente */
      numeroInss?: string | null;
      /** @description Profesión del paciente */
      profesion: string;
      /** @description Sexo del paciente */
      sexo: string;
      /** @description Teléfono del paciente */
      telefono: string;
      /** @description Tipo de sangre del paciente */
      tipoSangre: string;
    };
    TratamientoDTO: {
      /** @description Dosis del tratamiento */
      dosis: string;
      /**
       * Format: date-time
       * @description Fecha de finalización del tratamiento
       */
      fechaFin: string;
      /**
       * Format: date-time
       * @description Fecha de inicio del tratamiento
       */
      fechaInicio: string;
      /** @description Frecuencia del tratamiento */
      frecuencia: string;
      /** @description Id del paciente */
      idPaciente: number;
      /** @description Id del tratamiento */
      idTratamiento: number;
      /** @description Nombre del tratamiento */
      nombre: string;
      /** @description Unidad del tratamiento */
      unidadTratamiento: string;
    };
    CreateTratamientoDTO: {
      /** @description Dosis del tratamiento */
      dosis: string;
      /**
       * Format: date-time
       * @description Fecha de finalización del tratamiento
       */
      fechaFin: string;
      /**
       * Format: date-time
       * @description Fecha de inicio del tratamiento
       */
      fechaInicio: string;
      /** @description Frecuencia del tratamiento */
      frecuencia: string;
      /** @description Nombre del tratamiento */
      nombre: string;
      /** @description Unidad del tratamiento */
      unidadTratamiento: string;
    };
    SearchDTO: {
      /** @description Apellidos del paciente */
      apellidos: string;
      /** @description Nombres del paciente */
      nombres: string;
    };
    ConsultasInPacienteDTO: {
      /**
       * @description evaluacion de la consulta
       * @example evaluacion de la consulta
       */
      evaluacion: string;
      /**
       * Format: date-time
       * @description fecha de la consulta
       */
      fecha: string;
      /** @description id de la consulta */
      idConsulta: number;
      /** @description id del expediente */
      idExpediente: number;
      /** @description id del medico */
      idMedico: number;
      /** @description id del paciente */
      idPaciente: number;
      /** @description id de la unidad de salud */
      idUnidadSalud: number;
      /** @description planes de la consulta */
      planes: string;
    };
    TratamientosInPacienteDTO: {
      /** @description Dosis del tratamiento */
      dosis: string;
      /**
       * Format: date-time
       * @description Fecha de finalización del tratamiento
       */
      fechaFin: string;
      /**
       * Format: date-time
       * @description Fecha de inicio del tratamiento
       */
      fechaInicio: string;
      /** @description Frecuencia del tratamiento */
      frecuencia: string;
      /** @description Id del paciente */
      idPaciente: number;
      /** @description Id del tratamiento */
      idTratamiento: number;
      /** @description Nombre del tratamiento */
      nombre: string;
      /** @description Unidad del tratamiento */
      unidadTratamiento: string;
    };
    PacienteDTO: {
      /** @description Apellidos del paciente */
      apellidos: string;
      /** @description Cédula del paciente */
      cedula?: string | null;
      /** @description Dirección del paciente */
      direccion: string;
      /**
       * Format: date-time
       * @description Fecha de nacimiento del paciente
       */
      fechaNacimiento: string;
      /** @description Id del municipio del paciente */
      idMunicipio: number;
      /** @description Id del paciente */
      idPaciente: number;
      /** @description Id del usuario del paciente */
      idUsuario: number;
      /** @description Lugar de nacimiento del paciente */
      lugarNacimiento: string;
      /** @description Nombre de la madre del paciente */
      nombreMadre?: string | null;
      /** @description Nombre del padre del paciente */
      nombrePadre?: string | null;
      /** @description Nombres del paciente */
      nombres: string;
      /** @description Número de afiliación del paciente */
      numeroInss?: string | null;
      /** @description Profesión del paciente */
      profesion: string;
      /** @description Sexo del paciente */
      sexo: string;
      /** @description Teléfono del paciente */
      telefono: string;
      /** @description Tipo de sangre del paciente */
      tipoSangre: string;
      /** @description consultas del paciente */
      consultas: components["schemas"]["ConsultasInPacienteDTO"][];
      /** @description tratamientos del paciente */
      tratamientos: components["schemas"]["TratamientosInPacienteDTO"][];
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  UsuarioController_me: {
    responses: {
      /** @description Retorna el usuario actual */
      202: {
        content: {
          "application/json": components["schemas"]["UsuarioDTO"];
        };
      };
    };
  };
  AuthenticationController_login: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["LoginDTO"];
      };
    };
    responses: {
      /** @description Retorna el token de acceso */
      202: {
        content: {
          "application/json": components["schemas"]["AcessTokenDTO"];
        };
      };
    };
  };
  AuthenticationController_register: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["RegisterDTO"];
      };
    };
    responses: {
      /** @description Retorna el token de acceso */
      202: {
        content: {
          "application/json": components["schemas"]["AcessTokenDTO"];
        };
      };
    };
  };
  PacienteController_getTratamientos: {
    responses: {
      /** @description Retornar los tratamientos del paciente */
      202: {
        content: {
          "application/json": components["schemas"]["TratamientoDTO"][];
        };
      };
    };
  };
  PacienteController_createTratamiento: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateTratamientoDTO"];
      };
    };
    responses: {
      /** @description Retornar el tratamiento creado */
      202: {
        content: {
          "application/json": components["schemas"]["TratamientoDTO"];
        };
      };
    };
  };
  MedicoController_getMedicoPaciente: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["SearchDTO"];
      };
    };
    responses: {
      /** @description Retornar los datos del paciente */
      202: {
        content: {
          "application/json": components["schemas"]["PacienteDTO"];
        };
      };
    };
  };
}

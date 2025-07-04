export interface Asignatura{
    nombreAsignatura : string;
    descripcion : string
}


export interface Seccion{
    numero : number;
    cant_dias : number;
    descripcion : string;
    clase : Clase[];
}

export interface Clase{
    dia : number;
    fecha : number;
    alumno : Alumno[];
}

export interface Alumno{
    rut : number;
    nombres : string;
    apellidos: string;
}
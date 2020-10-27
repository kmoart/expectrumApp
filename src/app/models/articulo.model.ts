export class articuloModel{
    id: string;
    titulo: string;
    imagen: string;
    fecha: number;
    desccorta: string;
    desclarga: string;

    constructor(){
        
        this.fecha = new Date().getTime();
    }
}
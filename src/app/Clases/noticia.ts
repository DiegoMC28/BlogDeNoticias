export class Noticia {

    private _titulo: string;
    private _contenido: string;
    private _fechaCreacion: Date;

    constructor(titulo: string, contenido: string, fechaCreacion: Date){
        this._titulo = titulo;
        this._contenido = contenido;
        this._fechaCreacion = fechaCreacion;
    }

    
    public get getTitulo(){
        return this._titulo;
    }

    public set setTitulo(v : string) {
        this._titulo = v;
    }
    
    public get getContenido(){
        return this._contenido;
    }

    public set setContenido(v : string) {
        this._contenido = v;
    }

    public get getFechaCreacion(){
        return this._fechaCreacion;
    }

    public set setFechaCreacion(v : Date) {
        this._fechaCreacion = v;
    }
    

}

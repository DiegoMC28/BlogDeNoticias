
export class Usuario {

    private _nombreUsuario: string;
    private _contraseña: string;

    constructor(nombreUsuario: string, contraseña: string){
        this._nombreUsuario = nombreUsuario;
        this._contraseña = contraseña

    }

    public get getNombreUsuario(){
        return this._nombreUsuario;
    }

    public set setNombreUsuario(v:string){
        this._nombreUsuario = v;
    }

    public get getContraseña(){
        return this._contraseña;
    }

    public set setContraseña(v:string){
        this._contraseña = v;
    }


}

class Usuario
{
    constructor(nombre, email, rol = "cliente")
    {
        this.nombre = nombre;
        this.email = email;
        this.rol = rol;
        this.activo = true;
    }

    saludo()
    {
        return `Hola, soy ${this.nombre} y mi rol es ${this.rol}`;
    }

    desactivar()
    {
        this.activo = false;
        return `El usuario ${this.nombre} ha sido desactivado`;
    }

    resumen()
    {
        return `Nombre: ${this.nombre}, Email: ${this.email}, Rol: ${this.rol}, Estado: ${this.activo ? "Activo" : "Inactivo"}`;
    }
}

class UsuarioVIP extends Usuario
{
    constructor(nombre, email, membresia)
    {
        super(nombre, email, "cliente VIP");
        this.membresia = membresia;
    }

    saludo()
    {
        return `${super.saludo()} y tengo membresía ${this.membresia}`;
    }

    beneficios()
    {
        return `Beneficios ${this.membresia}: descuentos exclusivos y acceso prioritario`;
    }
}

module.exports = { Usuario, UsuarioVIP };
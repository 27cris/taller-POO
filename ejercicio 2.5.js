/*Ejercicio 5: Sistema Bancario
Crea una clase base CuentaBancaria con atributos como numeroCuenta y saldo. Luego, crea clases derivadas como CuentaAhorros y CuentaCorriente que hereden de CuentaBancaria. Cada tipo de cuenta tendrá métodos específicos, como aplicarIntereses() en CuentaAhorros. Usa un arreglo para manejar múltiples cuentas y un método para realizar depósitos y retiros en todas ellas.
 */

class CuentaBancaria{
    constructor(numeroCuenta, saldo){
        this.numeroCuenta = numeroCuenta;
        this.saldo = saldo;
    }
    depositar(monto){
        if(monto > 0){
            this.saldo += monto;
            console.log(`deposito de $${monto}, saldo nuevo $${this.saldo}`)
        }else{
            console.log("la cantidad debe ser positiva");
        }
    }

    retirar(monto){
        if(monto > 0 && monto <= this.saldo){
            this.saldo -= monto;
            console.log(`haz retirado $${monto} saldo nuevo: $${this.saldo}`)
        }else{
            console.log("saldo insuficiente")
        }
    }
    }

class CuentaAhorros extends CuentaBancaria{
    constructor(numeroCuenta, saldo, tasaInteres){
        super(numeroCuenta, saldoInicial);
        this.tasaInteres = tasaInteres;
    }
    aplicarInteres(){
        const interes = this.saldo * this.tasaInteres;
        this.depositar(interes);
        console.log(`intereses aplicados: $${interes} nuevo saldo: $${this.saldo}`)
    }
}

class CuentaCorriente extends CuentaBancaria{
    constructor(numeroCuenta, saldo){
        super(numeroCuenta, saldo);
    }
}

function operarEnCuentas(cuentas, operacion, cantidad) {
    cuentas.forEach(cuenta => {
        if (operacion === 'deposito') {
            cuenta.depositar(cantidad);
        } else if (operacion === 'retiro') {
            cuenta.retirar(cantidad);
        } else {
            console.log("Operación no válida.");
        }
    });
}
const multiplesCuentas = [

]
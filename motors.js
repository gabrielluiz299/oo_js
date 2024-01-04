function Veiculos(veiculo, rodas, bancos) {
    this.veiculo = veiculo;
    this.rodas = rodas;
    this.bancos = bancos;
}

function Carros(veiculo, rodas, bancos, portas) {
    this.portas = portas;

    Veiculos.call(this, veiculo, rodas, bancos);
}

function Motos(veiculo, rodas, bancos, portas) {
    this.portas = portas;

    Veiculos.call(this, veiculo, rodas, bancos);
}

function Caminhoes(veiculo, rodas, bancos, portas) {
    this.portas = portas;

    Veiculos.call(this, veiculo, rodas, bancos);
}

const carro1 = new Carros("celta", 4, 5, 4);
const veiculo1 = new Veiculos("carro");
const moto1 = new Motos('xre', 2, 1, 0)
const caminhao1 = new Caminhoes('volvo', 16, 1, 2)
console.log(caminhao1);
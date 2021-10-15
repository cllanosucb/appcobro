export interface Data {
    categoria:        string;
    ci:               string;
    codigo:           string;
    consumo_mes_kw:   string;
    credito_fiscal:   string;
    fecha_emision:    string;
    lectura_actual:   string;
    lectura_anterior: string;
    mes_cobro:        string;
    monto_pagado:     string;
    monto_pagar:      string;
    nit:              string;
    nombre_completo:  string;
    nro_factura:      string;
}


export interface list {
    id: Number;
    data: Data
}

export interface MyHomeBrewery {
    taps: Array<Taps>;    
    barrels: Array<Barrels>;
}

export interface Taps {

    id: number;
    name: string;
    type: string;
    quantity: number;
}

export interface Barrels {
    id : number;
    name: string;
    width: number;
    height: number;
    quantity: number;
}
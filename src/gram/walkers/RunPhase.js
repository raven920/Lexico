var LexicoListener = require('../LexicoListener.js').LexicoListener;
var FunctionSymbol = require('../scope/FunctionSymbol.js').FunctionSymbol;

function RunPhase(){
    LexicoListener.call(this);
    this.errors = [];
    this.codigo = "";
    this.idStack = [];
    this.exprStack = [];
    this.idn = "";
    return this;
}

RunPhase.prototype = Object.create(LexicoListener.prototype);
RunPhase.prototype.constructor = RunPhase;

RunPhase.prototype.exitProg = function(ctx){
    this.codigo += "tarea();\n";
}

RunPhase.prototype.enterTarea = function(ctx){
    this.codigo += "function tarea()\n";
}

RunPhase.prototype.enterBloque = function(ctx){
    this.codigo += this.idn +"{\n";
    this.idn += "    ";
}

RunPhase.prototype.exitBloque = function(ctx){
    this.idn = this.idn.substring(0,this.idn.length-4);
    this.codigo += this.idn + "}\n";
}

RunPhase.prototype.exitDeclaracionUnaVar = function(ctx){
    this.codigo += this.idn + "var " + ctx.ID(0).getText() + ";\n";
}

RunPhase.prototype.exitDeclaracionVariasVar = function(ctx){
    var i;
    var l = this.idStack.pop();
    this.codigo += this.idn + "var "+ctx.ID(0).getText();
    for(i of l){
        this.codigo += ", " + i.getText();
    }
    this.codigo += ";\n";
}

RunPhase.prototype.exitCopieEn = function(ctx) {
    var i;
    var l = this.idStack.pop();
    this.codigo += this.idn ;
    for(i of l){
        this.codigo += i+ " = ";
    }
    this.codigo +=  ctx.expr().getText()+ ";\n";
};

RunPhase.prototype.exitMuestre = function(ctx) {
    this.codigo += this.idn + "console.log( ";
    var l = this.exprStack.pop();
    var i;
    for(i of l){
        this.codigo += i + " + ";
    }
    this.codigo = this.codigo.substring(0, this.codigo.length-2);
    this.codigo += ");\n";
};

RunPhase.prototype.exitEntre = function(ctx) {
    var i;
    var l = this.idStack.pop();
    for(i of l){
        this.codigo += this.idn + i +" = prompt('entre "+i+"');\n";
    }
};

RunPhase.prototype.exitListaExpr = function(ctx) {
    var i;
    var l = [];
    for(i of ctx.expr()){
        l.push(i.getText());
    }
    this.exprStack.push(l);
};


RunPhase.prototype.exitListaID = function(ctx){
    var i;
    var l = [];
    for(i of ctx.ID()){
        l.push(i);
    }
    this.idStack.push(l);
}

exports.RunPhase = RunPhase;

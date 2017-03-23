// Generated from /home/raven/IdeaProjects/antlrtest/grammar/Lexico.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');
var LexicoListener = require('./LexicoListener').LexicoListener;
var grammarFileName = "Lexico.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003&\u00ad\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0007\u0004!\n\u0004\f\u0004\u000e\u0004$\u000b\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005/\n\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0005\u00054\n\u0005\u0005\u00056\n\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0005\u0005;\n\u0005\u0005\u0005=\n\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005H\n\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0005\u0006M\n\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0005\u0007d\n\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0005\u0007i\n\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005",
    "\by\n\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0007\b\u0087\n\b\f\b\u000e\b\u008a",
    "\u000b\b\u0003\t\u0003\t\u0003\t\u0007\t\u008f\n\t\f\t\u000e\t\u0092",
    "\u000b\t\u0003\n\u0003\n\u0003\n\u0007\n\u0097\n\n\f\n\u000e\n\u009a",
    "\u000b\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0007\u000b\u00a4\n\u000b\f\u000b",
    "\u000e\u000b\u00a7\u000b\u000b\u0003\f\u0003\f\u0005\f\u00ab\n\f\u0003",
    "\f\u0002\u0003\u000e\r\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014",
    "\u0016\u0002\u0005\u0003\u0002\u0012\u0013\u0003\u0002\u001a\u001b\u0004",
    "\u0002\u0018\u0018\u001c\u001c\u00be\u0002\u0018\u0003\u0002\u0002\u0002",
    "\u0004\u001b\u0003\u0002\u0002\u0002\u0006\u001e\u0003\u0002\u0002\u0002",
    "\bG\u0003\u0002\u0002\u0002\nI\u0003\u0002\u0002\u0002\fh\u0003\u0002",
    "\u0002\u0002\u000ex\u0003\u0002\u0002\u0002\u0010\u008b\u0003\u0002",
    "\u0002\u0002\u0012\u0093\u0003\u0002\u0002\u0002\u0014\u009b\u0003\u0002",
    "\u0002\u0002\u0016\u00aa\u0003\u0002\u0002\u0002\u0018\u0019\u0005\u0004",
    "\u0003\u0002\u0019\u001a\u0007\u0002\u0002\u0003\u001a\u0003\u0003\u0002",
    "\u0002\u0002\u001b\u001c\u0007\u0003\u0002\u0002\u001c\u001d\u0005\u0006",
    "\u0004\u0002\u001d\u0005\u0003\u0002\u0002\u0002\u001e\"\u0007\u0004",
    "\u0002\u0002\u001f!\u0005\b\u0005\u0002 \u001f\u0003\u0002\u0002\u0002",
    "!$\u0003\u0002\u0002\u0002\" \u0003\u0002\u0002\u0002\"#\u0003\u0002",
    "\u0002\u0002#%\u0003\u0002\u0002\u0002$\"\u0003\u0002\u0002\u0002%&",
    "\u0007\u0005\u0002\u0002&\u0007\u0003\u0002\u0002\u0002\'H\u0005\f\u0007",
    "\u0002()\u0007\u0006\u0002\u0002)*\u0005\u000e\b\u0002*<\u0007\u0007",
    "\u0002\u0002+.\u0007\b\u0002\u0002,/\u0005\u0006\u0004\u0002-/\u0005",
    "\b\u0005\u0002.,\u0003\u0002\u0002\u0002.-\u0003\u0002\u0002\u0002/",
    "5\u0003\u0002\u0002\u000203\u0007\t\u0002\u000214\u0005\u0006\u0004",
    "\u000224\u0005\b\u0005\u000231\u0003\u0002\u0002\u000232\u0003\u0002",
    "\u0002\u000246\u0003\u0002\u0002\u000250\u0003\u0002\u0002\u000256\u0003",
    "\u0002\u0002\u00026=\u0003\u0002\u0002\u00027:\u0007\t\u0002\u00028",
    ";\u0005\u0006\u0004\u00029;\u0005\b\u0005\u0002:8\u0003\u0002\u0002",
    "\u0002:9\u0003\u0002\u0002\u0002;=\u0003\u0002\u0002\u0002<+\u0003\u0002",
    "\u0002\u0002<7\u0003\u0002\u0002\u0002=H\u0003\u0002\u0002\u0002>?\u0007",
    "\n\u0002\u0002?@\u0005\u000e\b\u0002@A\u0007\u000b\u0002\u0002AB\u0005",
    "\u0012\n\u0002BH\u0003\u0002\u0002\u0002CD\u0007\f\u0002\u0002DH\u0005",
    "\u0012\n\u0002EF\u0007\r\u0002\u0002FH\u0005\u0010\t\u0002G\'\u0003",
    "\u0002\u0002\u0002G(\u0003\u0002\u0002\u0002G>\u0003\u0002\u0002\u0002",
    "GC\u0003\u0002\u0002\u0002GE\u0003\u0002\u0002\u0002H\t\u0003\u0002",
    "\u0002\u0002IJ\u0007!\u0002\u0002JL\u0007\u000e\u0002\u0002KM\u0005",
    "\u0010\t\u0002LK\u0003\u0002\u0002\u0002LM\u0003\u0002\u0002\u0002M",
    "N\u0003\u0002\u0002\u0002NO\u0007\u000f\u0002\u0002O\u000b\u0003\u0002",
    "\u0002\u0002PQ\u0007\u0010\u0002\u0002QR\u0007\u0011\u0002\u0002RS\u0007",
    "!\u0002\u0002ST\u0007\u0006\u0002\u0002TU\t\u0002\u0002\u0002Ui\u0007",
    "!\u0002\u0002VW\u0007\u0014\u0002\u0002WX\u0007\u0015\u0002\u0002XY",
    "\u0007!\u0002\u0002YZ\u0007\u0016\u0002\u0002Z[\u0005\u0012\n\u0002",
    "[\\\u0007\u0017\u0002\u0002\\]\u0007!\u0002\u0002]i\u0003\u0002\u0002",
    "\u0002^_\u0007\u0014\u0002\u0002_`\u0007\u0015\u0002\u0002`c\u0005\u0014",
    "\u000b\u0002ab\u0007\u0016\u0002\u0002bd\u0005\u0012\n\u0002ca\u0003",
    "\u0002\u0002\u0002cd\u0003\u0002\u0002\u0002de\u0003\u0002\u0002\u0002",
    "ef\u0007\u0017\u0002\u0002fg\u0007!\u0002\u0002gi\u0003\u0002\u0002",
    "\u0002hP\u0003\u0002\u0002\u0002hV\u0003\u0002\u0002\u0002h^\u0003\u0002",
    "\u0002\u0002i\r\u0003\u0002\u0002\u0002jk\b\b\u0001\u0002ky\u0005\n",
    "\u0006\u0002ly\u0005\u0014\u000b\u0002mn\u0007\u0018\u0002\u0002ny\u0005",
    "\u000e\b\fop\u0007\u0019\u0002\u0002py\u0005\u000e\b\u000bqy\u0007!",
    "\u0002\u0002ry\u0007\"\u0002\u0002sy\u0007#\u0002\u0002tu\u0007\u000e",
    "\u0002\u0002uv\u0005\u000e\b\u0002vw\u0007\u000f\u0002\u0002wy\u0003",
    "\u0002\u0002\u0002xj\u0003\u0002\u0002\u0002xl\u0003\u0002\u0002\u0002",
    "xm\u0003\u0002\u0002\u0002xo\u0003\u0002\u0002\u0002xq\u0003\u0002\u0002",
    "\u0002xr\u0003\u0002\u0002\u0002xs\u0003\u0002\u0002\u0002xt\u0003\u0002",
    "\u0002\u0002y\u0088\u0003\u0002\u0002\u0002z{\f\n\u0002\u0002{|\t\u0003",
    "\u0002\u0002|\u0087\u0005\u000e\b\u000b}~\f\t\u0002\u0002~\u007f\t\u0004",
    "\u0002\u0002\u007f\u0087\u0005\u000e\b\n\u0080\u0081\f\b\u0002\u0002",
    "\u0081\u0082\u0007\u001d\u0002\u0002\u0082\u0087\u0005\u000e\b\t\u0083",
    "\u0084\f\u0007\u0002\u0002\u0084\u0085\u0007\u001e\u0002\u0002\u0085",
    "\u0087\u0005\u000e\b\b\u0086z\u0003\u0002\u0002\u0002\u0086}\u0003\u0002",
    "\u0002\u0002\u0086\u0080\u0003\u0002\u0002\u0002\u0086\u0083\u0003\u0002",
    "\u0002\u0002\u0087\u008a\u0003\u0002\u0002\u0002\u0088\u0086\u0003\u0002",
    "\u0002\u0002\u0088\u0089\u0003\u0002\u0002\u0002\u0089\u000f\u0003\u0002",
    "\u0002\u0002\u008a\u0088\u0003\u0002\u0002\u0002\u008b\u0090\u0005\u000e",
    "\b\u0002\u008c\u008d\u0007\u0016\u0002\u0002\u008d\u008f\u0005\u000e",
    "\b\u0002\u008e\u008c\u0003\u0002\u0002\u0002\u008f\u0092\u0003\u0002",
    "\u0002\u0002\u0090\u008e\u0003\u0002\u0002\u0002\u0090\u0091\u0003\u0002",
    "\u0002\u0002\u0091\u0011\u0003\u0002\u0002\u0002\u0092\u0090\u0003\u0002",
    "\u0002\u0002\u0093\u0098\u0005\u0016\f\u0002\u0094\u0095\u0007\u0016",
    "\u0002\u0002\u0095\u0097\u0005\u0016\f\u0002\u0096\u0094\u0003\u0002",
    "\u0002\u0002\u0097\u009a\u0003\u0002\u0002\u0002\u0098\u0096\u0003\u0002",
    "\u0002\u0002\u0098\u0099\u0003\u0002\u0002\u0002\u0099\u0013\u0003\u0002",
    "\u0002\u0002\u009a\u0098\u0003\u0002\u0002\u0002\u009b\u009c\u0007!",
    "\u0002\u0002\u009c\u009d\u0007\u001f\u0002\u0002\u009d\u009e\u0005\u000e",
    "\b\u0002\u009e\u00a5\u0007 \u0002\u0002\u009f\u00a0\u0007\u001f\u0002",
    "\u0002\u00a0\u00a1\u0005\u000e\b\u0002\u00a1\u00a2\u0007 \u0002\u0002",
    "\u00a2\u00a4\u0003\u0002\u0002\u0002\u00a3\u009f\u0003\u0002\u0002\u0002",
    "\u00a4\u00a7\u0003\u0002\u0002\u0002\u00a5\u00a3\u0003\u0002\u0002\u0002",
    "\u00a5\u00a6\u0003\u0002\u0002\u0002\u00a6\u0015\u0003\u0002\u0002\u0002",
    "\u00a7\u00a5\u0003\u0002\u0002\u0002\u00a8\u00ab\u0007!\u0002\u0002",
    "\u00a9\u00ab\u0005\u0014\u000b\u0002\u00aa\u00a8\u0003\u0002\u0002\u0002",
    "\u00aa\u00a9\u0003\u0002\u0002\u0002\u00ab\u0017\u0003\u0002\u0002\u0002",
    "\u0013\".35:<GLchx\u0086\u0088\u0090\u0098\u00a5\u00aa"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'tarea'", "'{'", "'}'", "'es'", "'?'", "'si:'",
                     "'no:'", "'copie'", "'en'", "'entre'", "'muestre'",
                     "'('", "')'", "'el'", "'objeto'", "'una'", "'un'",
                     "'los'", "'objetos'", "','", "'son'", "'-'", "'!'",
                     "'*'", "'/'", "'+'", "'=='", "'<'", "'['", "']'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null,
                      null, null, null, null, null, null, null, null, null,
                      null, null, null, null, null, null, null, null, null,
                      null, null, null, null, "ID", "INT", "STRING", "COMMENT",
                      "LINE_COMMENT", "WS" ];

var ruleNames =  [ "prog", "tarea", "bloque", "sent", "llamadaFuncion",
                   "declaracionVar", "expr", "listaExpr", "listaIdOArr",
                   "arreglo", "idOArr" ];

function LexicoParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

LexicoParser.prototype = Object.create(antlr4.Parser.prototype);
LexicoParser.prototype.constructor = LexicoParser;

Object.defineProperty(LexicoParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

LexicoParser.EOF = antlr4.Token.EOF;
LexicoParser.T__0 = 1;
LexicoParser.T__1 = 2;
LexicoParser.T__2 = 3;
LexicoParser.T__3 = 4;
LexicoParser.T__4 = 5;
LexicoParser.T__5 = 6;
LexicoParser.T__6 = 7;
LexicoParser.T__7 = 8;
LexicoParser.T__8 = 9;
LexicoParser.T__9 = 10;
LexicoParser.T__10 = 11;
LexicoParser.T__11 = 12;
LexicoParser.T__12 = 13;
LexicoParser.T__13 = 14;
LexicoParser.T__14 = 15;
LexicoParser.T__15 = 16;
LexicoParser.T__16 = 17;
LexicoParser.T__17 = 18;
LexicoParser.T__18 = 19;
LexicoParser.T__19 = 20;
LexicoParser.T__20 = 21;
LexicoParser.T__21 = 22;
LexicoParser.T__22 = 23;
LexicoParser.T__23 = 24;
LexicoParser.T__24 = 25;
LexicoParser.T__25 = 26;
LexicoParser.T__26 = 27;
LexicoParser.T__27 = 28;
LexicoParser.T__28 = 29;
LexicoParser.T__29 = 30;
LexicoParser.ID = 31;
LexicoParser.INT = 32;
LexicoParser.STRING = 33;
LexicoParser.COMMENT = 34;
LexicoParser.LINE_COMMENT = 35;
LexicoParser.WS = 36;

LexicoParser.RULE_prog = 0;
LexicoParser.RULE_tarea = 1;
LexicoParser.RULE_bloque = 2;
LexicoParser.RULE_sent = 3;
LexicoParser.RULE_llamadaFuncion = 4;
LexicoParser.RULE_declaracionVar = 5;
LexicoParser.RULE_expr = 6;
LexicoParser.RULE_listaExpr = 7;
LexicoParser.RULE_listaIdOArr = 8;
LexicoParser.RULE_arreglo = 9;
LexicoParser.RULE_idOArr = 10;

function ProgContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LexicoParser.RULE_prog;
    return this;
}

ProgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgContext.prototype.constructor = ProgContext;

ProgContext.prototype.tarea = function() {
    return this.getTypedRuleContext(TareaContext,0);
};

ProgContext.prototype.EOF = function() {
    return this.getToken(LexicoParser.EOF, 0);
};

ProgContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterProg(this);
	}
};

ProgContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitProg(this);
	}
};




LexicoParser.ProgContext = ProgContext;

LexicoParser.prototype.prog = function() {

    var localctx = new ProgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, LexicoParser.RULE_prog);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 22;
        this.tarea();
        this.state = 23;
        this.match(LexicoParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TareaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LexicoParser.RULE_tarea;
    return this;
}

TareaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TareaContext.prototype.constructor = TareaContext;

TareaContext.prototype.bloque = function() {
    return this.getTypedRuleContext(BloqueContext,0);
};

TareaContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterTarea(this);
	}
};

TareaContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitTarea(this);
	}
};




LexicoParser.TareaContext = TareaContext;

LexicoParser.prototype.tarea = function() {

    var localctx = new TareaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, LexicoParser.RULE_tarea);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 25;
        this.match(LexicoParser.T__0);
        this.state = 26;
        this.bloque();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BloqueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LexicoParser.RULE_bloque;
    return this;
}

BloqueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BloqueContext.prototype.constructor = BloqueContext;

BloqueContext.prototype.sent = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SentContext);
    } else {
        return this.getTypedRuleContext(SentContext,i);
    }
};

BloqueContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterBloque(this);
	}
};

BloqueContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitBloque(this);
	}
};




LexicoParser.BloqueContext = BloqueContext;

LexicoParser.prototype.bloque = function() {

    var localctx = new BloqueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, LexicoParser.RULE_bloque);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 28;
        this.match(LexicoParser.T__1);
        this.state = 32;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LexicoParser.T__3) | (1 << LexicoParser.T__7) | (1 << LexicoParser.T__9) | (1 << LexicoParser.T__10) | (1 << LexicoParser.T__13) | (1 << LexicoParser.T__17))) !== 0)) {
            this.state = 29;
            this.sent();
            this.state = 34;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 35;
        this.match(LexicoParser.T__2);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LexicoParser.RULE_sent;
    return this;
}

SentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SentContext.prototype.constructor = SentContext;



SentContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function SentDeclaracionContext(parser, ctx) {
	SentContext.call(this, parser);
    SentContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SentDeclaracionContext.prototype = Object.create(SentContext.prototype);
SentDeclaracionContext.prototype.constructor = SentDeclaracionContext;

LexicoParser.SentDeclaracionContext = SentDeclaracionContext;

SentDeclaracionContext.prototype.declaracionVar = function() {
    return this.getTypedRuleContext(DeclaracionVarContext,0);
};
SentDeclaracionContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterSentDeclaracion(this);
	}
};

SentDeclaracionContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitSentDeclaracion(this);
	}
};


function MuestreContext(parser, ctx) {
	SentContext.call(this, parser);
    SentContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MuestreContext.prototype = Object.create(SentContext.prototype);
MuestreContext.prototype.constructor = MuestreContext;

LexicoParser.MuestreContext = MuestreContext;

MuestreContext.prototype.listaExpr = function() {
    return this.getTypedRuleContext(ListaExprContext,0);
};
MuestreContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterMuestre(this);
	}
};

MuestreContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitMuestre(this);
	}
};


function CondicionalContext(parser, ctx) {
	SentContext.call(this, parser);
    SentContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CondicionalContext.prototype = Object.create(SentContext.prototype);
CondicionalContext.prototype.constructor = CondicionalContext;

LexicoParser.CondicionalContext = CondicionalContext;

CondicionalContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

CondicionalContext.prototype.bloque = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BloqueContext);
    } else {
        return this.getTypedRuleContext(BloqueContext,i);
    }
};

CondicionalContext.prototype.sent = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SentContext);
    } else {
        return this.getTypedRuleContext(SentContext,i);
    }
};
CondicionalContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterCondicional(this);
	}
};

CondicionalContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitCondicional(this);
	}
};


function EntreContext(parser, ctx) {
	SentContext.call(this, parser);
    SentContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EntreContext.prototype = Object.create(SentContext.prototype);
EntreContext.prototype.constructor = EntreContext;

LexicoParser.EntreContext = EntreContext;

EntreContext.prototype.listaIdOArr = function() {
    return this.getTypedRuleContext(ListaIdOArrContext,0);
};
EntreContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterEntre(this);
	}
};

EntreContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitEntre(this);
	}
};


function CopieEnContext(parser, ctx) {
	SentContext.call(this, parser);
    SentContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CopieEnContext.prototype = Object.create(SentContext.prototype);
CopieEnContext.prototype.constructor = CopieEnContext;

LexicoParser.CopieEnContext = CopieEnContext;

CopieEnContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

CopieEnContext.prototype.listaIdOArr = function() {
    return this.getTypedRuleContext(ListaIdOArrContext,0);
};
CopieEnContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterCopieEn(this);
	}
};

CopieEnContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitCopieEn(this);
	}
};



LexicoParser.SentContext = SentContext;

LexicoParser.prototype.sent = function() {

    var localctx = new SentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, LexicoParser.RULE_sent);
    try {
        this.state = 69;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LexicoParser.T__13:
        case LexicoParser.T__17:
            localctx = new SentDeclaracionContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 37;
            this.declaracionVar();
            break;
        case LexicoParser.T__3:
            localctx = new CondicionalContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 38;
            this.match(LexicoParser.T__3);
            this.state = 39;
            this.expr(0);
            this.state = 40;
            this.match(LexicoParser.T__4);
            this.state = 58;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case LexicoParser.T__5:
                this.state = 41;
                this.match(LexicoParser.T__5);
                this.state = 44;
                this._errHandler.sync(this);
                switch(this._input.LA(1)) {
                case LexicoParser.T__1:
                    this.state = 42;
                    this.bloque();
                    break;
                case LexicoParser.T__3:
                case LexicoParser.T__7:
                case LexicoParser.T__9:
                case LexicoParser.T__10:
                case LexicoParser.T__13:
                case LexicoParser.T__17:
                    this.state = 43;
                    this.sent();
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
                }
                this.state = 51;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
                if(la_===1) {
                    this.state = 46;
                    this.match(LexicoParser.T__6);
                    this.state = 49;
                    this._errHandler.sync(this);
                    switch(this._input.LA(1)) {
                    case LexicoParser.T__1:
                        this.state = 47;
                        this.bloque();
                        break;
                    case LexicoParser.T__3:
                    case LexicoParser.T__7:
                    case LexicoParser.T__9:
                    case LexicoParser.T__10:
                    case LexicoParser.T__13:
                    case LexicoParser.T__17:
                        this.state = 48;
                        this.sent();
                        break;
                    default:
                        throw new antlr4.error.NoViableAltException(this);
                    }

                }
                break;
            case LexicoParser.T__6:
                this.state = 53;
                this.match(LexicoParser.T__6);
                this.state = 56;
                this._errHandler.sync(this);
                switch(this._input.LA(1)) {
                case LexicoParser.T__1:
                    this.state = 54;
                    this.bloque();
                    break;
                case LexicoParser.T__3:
                case LexicoParser.T__7:
                case LexicoParser.T__9:
                case LexicoParser.T__10:
                case LexicoParser.T__13:
                case LexicoParser.T__17:
                    this.state = 55;
                    this.sent();
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
                }
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            break;
        case LexicoParser.T__7:
            localctx = new CopieEnContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 60;
            this.match(LexicoParser.T__7);
            this.state = 61;
            this.expr(0);
            this.state = 62;
            this.match(LexicoParser.T__8);
            this.state = 63;
            this.listaIdOArr();
            break;
        case LexicoParser.T__9:
            localctx = new EntreContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 65;
            this.match(LexicoParser.T__9);
            this.state = 66;
            this.listaIdOArr();
            break;
        case LexicoParser.T__10:
            localctx = new MuestreContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 67;
            this.match(LexicoParser.T__10);
            this.state = 68;
            this.listaExpr();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LlamadaFuncionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LexicoParser.RULE_llamadaFuncion;
    return this;
}

LlamadaFuncionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LlamadaFuncionContext.prototype.constructor = LlamadaFuncionContext;

LlamadaFuncionContext.prototype.ID = function() {
    return this.getToken(LexicoParser.ID, 0);
};

LlamadaFuncionContext.prototype.listaExpr = function() {
    return this.getTypedRuleContext(ListaExprContext,0);
};

LlamadaFuncionContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterLlamadaFuncion(this);
	}
};

LlamadaFuncionContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitLlamadaFuncion(this);
	}
};




LexicoParser.LlamadaFuncionContext = LlamadaFuncionContext;

LexicoParser.prototype.llamadaFuncion = function() {

    var localctx = new LlamadaFuncionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, LexicoParser.RULE_llamadaFuncion);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 71;
        this.match(LexicoParser.ID);
        this.state = 72;
        this.match(LexicoParser.T__11);
        this.state = 74;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 12)) & ~0x1f) == 0 && ((1 << (_la - 12)) & ((1 << (LexicoParser.T__11 - 12)) | (1 << (LexicoParser.T__21 - 12)) | (1 << (LexicoParser.T__22 - 12)) | (1 << (LexicoParser.ID - 12)) | (1 << (LexicoParser.INT - 12)) | (1 << (LexicoParser.STRING - 12)))) !== 0)) {
            this.state = 73;
            this.listaExpr();
        }

        this.state = 76;
        this.match(LexicoParser.T__12);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DeclaracionVarContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LexicoParser.RULE_declaracionVar;
    return this;
}

DeclaracionVarContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclaracionVarContext.prototype.constructor = DeclaracionVarContext;



DeclaracionVarContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function DeclaracionVariasVarContext(parser, ctx) {
	DeclaracionVarContext.call(this, parser);
    DeclaracionVarContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DeclaracionVariasVarContext.prototype = Object.create(DeclaracionVarContext.prototype);
DeclaracionVariasVarContext.prototype.constructor = DeclaracionVariasVarContext;

LexicoParser.DeclaracionVariasVarContext = DeclaracionVariasVarContext;

DeclaracionVariasVarContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LexicoParser.ID);
    } else {
        return this.getToken(LexicoParser.ID, i);
    }
};


DeclaracionVariasVarContext.prototype.listaIdOArr = function() {
    return this.getTypedRuleContext(ListaIdOArrContext,0);
};
DeclaracionVariasVarContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterDeclaracionVariasVar(this);
	}
};

DeclaracionVariasVarContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitDeclaracionVariasVar(this);
	}
};


function DeclaracionUnaVarContext(parser, ctx) {
	DeclaracionVarContext.call(this, parser);
    DeclaracionVarContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DeclaracionUnaVarContext.prototype = Object.create(DeclaracionVarContext.prototype);
DeclaracionUnaVarContext.prototype.constructor = DeclaracionUnaVarContext;

LexicoParser.DeclaracionUnaVarContext = DeclaracionUnaVarContext;

DeclaracionUnaVarContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LexicoParser.ID);
    } else {
        return this.getToken(LexicoParser.ID, i);
    }
};

DeclaracionUnaVarContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterDeclaracionUnaVar(this);
	}
};

DeclaracionUnaVarContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitDeclaracionUnaVar(this);
	}
};


function DeclaracionArreglosContext(parser, ctx) {
	DeclaracionVarContext.call(this, parser);
    DeclaracionVarContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DeclaracionArreglosContext.prototype = Object.create(DeclaracionVarContext.prototype);
DeclaracionArreglosContext.prototype.constructor = DeclaracionArreglosContext;

LexicoParser.DeclaracionArreglosContext = DeclaracionArreglosContext;

DeclaracionArreglosContext.prototype.arreglo = function() {
    return this.getTypedRuleContext(ArregloContext,0);
};

DeclaracionArreglosContext.prototype.ID = function() {
    return this.getToken(LexicoParser.ID, 0);
};

DeclaracionArreglosContext.prototype.listaIdOArr = function() {
    return this.getTypedRuleContext(ListaIdOArrContext,0);
};
DeclaracionArreglosContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterDeclaracionArreglos(this);
	}
};

DeclaracionArreglosContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitDeclaracionArreglos(this);
	}
};



LexicoParser.DeclaracionVarContext = DeclaracionVarContext;

LexicoParser.prototype.declaracionVar = function() {

    var localctx = new DeclaracionVarContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, LexicoParser.RULE_declaracionVar);
    var _la = 0; // Token type
    try {
        this.state = 102;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        switch(la_) {
        case 1:
            localctx = new DeclaracionUnaVarContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 78;
            this.match(LexicoParser.T__13);
            this.state = 79;
            this.match(LexicoParser.T__14);
            this.state = 80;
            this.match(LexicoParser.ID);
            this.state = 81;
            this.match(LexicoParser.T__3);
            this.state = 82;
            _la = this._input.LA(1);
            if(!(_la===LexicoParser.T__15 || _la===LexicoParser.T__16)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 83;
            this.match(LexicoParser.ID);
            break;

        case 2:
            localctx = new DeclaracionVariasVarContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 84;
            this.match(LexicoParser.T__17);
            this.state = 85;
            this.match(LexicoParser.T__18);
            this.state = 86;
            this.match(LexicoParser.ID);
            this.state = 87;
            this.match(LexicoParser.T__19);
            this.state = 88;
            this.listaIdOArr();
            this.state = 89;
            this.match(LexicoParser.T__20);
            this.state = 90;
            this.match(LexicoParser.ID);
            break;

        case 3:
            localctx = new DeclaracionArreglosContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 92;
            this.match(LexicoParser.T__17);
            this.state = 93;
            this.match(LexicoParser.T__18);
            this.state = 94;
            this.arreglo();
            this.state = 97;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===LexicoParser.T__19) {
                this.state = 95;
                this.match(LexicoParser.T__19);
                this.state = 96;
                this.listaIdOArr();
            }

            this.state = 99;
            this.match(LexicoParser.T__20);
            this.state = 100;
            this.match(LexicoParser.ID);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LexicoParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;



ExprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function IndiceContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IndiceContext.prototype = Object.create(ExprContext.prototype);
IndiceContext.prototype.constructor = IndiceContext;

LexicoParser.IndiceContext = IndiceContext;

IndiceContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
IndiceContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterIndice(this);
	}
};

IndiceContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitIndice(this);
	}
};


function UsoVarContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UsoVarContext.prototype = Object.create(ExprContext.prototype);
UsoVarContext.prototype.constructor = UsoVarContext;

LexicoParser.UsoVarContext = UsoVarContext;

UsoVarContext.prototype.ID = function() {
    return this.getToken(LexicoParser.ID, 0);
};
UsoVarContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterUsoVar(this);
	}
};

UsoVarContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitUsoVar(this);
	}
};


function CaracteresContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CaracteresContext.prototype = Object.create(ExprContext.prototype);
CaracteresContext.prototype.constructor = CaracteresContext;

LexicoParser.CaracteresContext = CaracteresContext;

CaracteresContext.prototype.STRING = function() {
    return this.getToken(LexicoParser.STRING, 0);
};
CaracteresContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterCaracteres(this);
	}
};

CaracteresContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitCaracteres(this);
	}
};


function UsoArregloContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UsoArregloContext.prototype = Object.create(ExprContext.prototype);
UsoArregloContext.prototype.constructor = UsoArregloContext;

LexicoParser.UsoArregloContext = UsoArregloContext;

UsoArregloContext.prototype.arreglo = function() {
    return this.getTypedRuleContext(ArregloContext,0);
};
UsoArregloContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterUsoArreglo(this);
	}
};

UsoArregloContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitUsoArreglo(this);
	}
};


function EnteroContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EnteroContext.prototype = Object.create(ExprContext.prototype);
EnteroContext.prototype.constructor = EnteroContext;

LexicoParser.EnteroContext = EnteroContext;

EnteroContext.prototype.INT = function() {
    return this.getToken(LexicoParser.INT, 0);
};
EnteroContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterEntero(this);
	}
};

EnteroContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitEntero(this);
	}
};


function ParentesisContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParentesisContext.prototype = Object.create(ExprContext.prototype);
ParentesisContext.prototype.constructor = ParentesisContext;

LexicoParser.ParentesisContext = ParentesisContext;

ParentesisContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
ParentesisContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterParentesis(this);
	}
};

ParentesisContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitParentesis(this);
	}
};


function LlamadaContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LlamadaContext.prototype = Object.create(ExprContext.prototype);
LlamadaContext.prototype.constructor = LlamadaContext;

LexicoParser.LlamadaContext = LlamadaContext;

LlamadaContext.prototype.llamadaFuncion = function() {
    return this.getTypedRuleContext(LlamadaFuncionContext,0);
};
LlamadaContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterLlamada(this);
	}
};

LlamadaContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitLlamada(this);
	}
};


function IgualdadContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IgualdadContext.prototype = Object.create(ExprContext.prototype);
IgualdadContext.prototype.constructor = IgualdadContext;

LexicoParser.IgualdadContext = IgualdadContext;

IgualdadContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
IgualdadContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterIgualdad(this);
	}
};

IgualdadContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitIgualdad(this);
	}
};


function SumaRestaContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SumaRestaContext.prototype = Object.create(ExprContext.prototype);
SumaRestaContext.prototype.constructor = SumaRestaContext;

LexicoParser.SumaRestaContext = SumaRestaContext;

SumaRestaContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
SumaRestaContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterSumaResta(this);
	}
};

SumaRestaContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitSumaResta(this);
	}
};


function MenorQueContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MenorQueContext.prototype = Object.create(ExprContext.prototype);
MenorQueContext.prototype.constructor = MenorQueContext;

LexicoParser.MenorQueContext = MenorQueContext;

MenorQueContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
MenorQueContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterMenorQue(this);
	}
};

MenorQueContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitMenorQue(this);
	}
};


function NegacionContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NegacionContext.prototype = Object.create(ExprContext.prototype);
NegacionContext.prototype.constructor = NegacionContext;

LexicoParser.NegacionContext = NegacionContext;

NegacionContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
NegacionContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterNegacion(this);
	}
};

NegacionContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitNegacion(this);
	}
};


function MultDivContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MultDivContext.prototype = Object.create(ExprContext.prototype);
MultDivContext.prototype.constructor = MultDivContext;

LexicoParser.MultDivContext = MultDivContext;

MultDivContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
MultDivContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterMultDiv(this);
	}
};

MultDivContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitMultDiv(this);
	}
};



LexicoParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 12;
    this.enterRecursionRule(localctx, 12, LexicoParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 118;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
        switch(la_) {
        case 1:
            localctx = new LlamadaContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 105;
            this.llamadaFuncion();
            break;

        case 2:
            localctx = new UsoArregloContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 106;
            this.arreglo();
            break;

        case 3:
            localctx = new IndiceContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 107;
            this.match(LexicoParser.T__21);
            this.state = 108;
            this.expr(10);
            break;

        case 4:
            localctx = new NegacionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 109;
            this.match(LexicoParser.T__22);
            this.state = 110;
            this.expr(9);
            break;

        case 5:
            localctx = new UsoVarContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 111;
            this.match(LexicoParser.ID);
            break;

        case 6:
            localctx = new EnteroContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 112;
            this.match(LexicoParser.INT);
            break;

        case 7:
            localctx = new CaracteresContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 113;
            this.match(LexicoParser.STRING);
            break;

        case 8:
            localctx = new ParentesisContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 114;
            this.match(LexicoParser.T__11);
            this.state = 115;
            this.expr(0);
            this.state = 116;
            this.match(LexicoParser.T__12);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 134;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 132;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new MultDivContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, LexicoParser.RULE_expr);
                    this.state = 120;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 121;
                    _la = this._input.LA(1);
                    if(!(_la===LexicoParser.T__23 || _la===LexicoParser.T__24)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 122;
                    this.expr(9);
                    break;

                case 2:
                    localctx = new SumaRestaContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, LexicoParser.RULE_expr);
                    this.state = 123;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 124;
                    _la = this._input.LA(1);
                    if(!(_la===LexicoParser.T__21 || _la===LexicoParser.T__25)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 125;
                    this.expr(8);
                    break;

                case 3:
                    localctx = new IgualdadContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, LexicoParser.RULE_expr);
                    this.state = 126;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 127;
                    this.match(LexicoParser.T__26);
                    this.state = 128;
                    this.expr(7);
                    break;

                case 4:
                    localctx = new MenorQueContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, LexicoParser.RULE_expr);
                    this.state = 129;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 130;
                    this.match(LexicoParser.T__27);
                    this.state = 131;
                    this.expr(6);
                    break;

                }
            }
            this.state = 136;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function ListaExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LexicoParser.RULE_listaExpr;
    return this;
}

ListaExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListaExprContext.prototype.constructor = ListaExprContext;

ListaExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ListaExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterListaExpr(this);
	}
};

ListaExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitListaExpr(this);
	}
};




LexicoParser.ListaExprContext = ListaExprContext;

LexicoParser.prototype.listaExpr = function() {

    var localctx = new ListaExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, LexicoParser.RULE_listaExpr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 137;
        this.expr(0);
        this.state = 142;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LexicoParser.T__19) {
            this.state = 138;
            this.match(LexicoParser.T__19);
            this.state = 139;
            this.expr(0);
            this.state = 144;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ListaIdOArrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LexicoParser.RULE_listaIdOArr;
    return this;
}

ListaIdOArrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListaIdOArrContext.prototype.constructor = ListaIdOArrContext;

ListaIdOArrContext.prototype.idOArr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IdOArrContext);
    } else {
        return this.getTypedRuleContext(IdOArrContext,i);
    }
};

ListaIdOArrContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterListaIdOArr(this);
	}
};

ListaIdOArrContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitListaIdOArr(this);
	}
};




LexicoParser.ListaIdOArrContext = ListaIdOArrContext;

LexicoParser.prototype.listaIdOArr = function() {

    var localctx = new ListaIdOArrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, LexicoParser.RULE_listaIdOArr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 145;
        this.idOArr();
        this.state = 150;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LexicoParser.T__19) {
            this.state = 146;
            this.match(LexicoParser.T__19);
            this.state = 147;
            this.idOArr();
            this.state = 152;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArregloContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LexicoParser.RULE_arreglo;
    return this;
}

ArregloContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArregloContext.prototype.constructor = ArregloContext;

ArregloContext.prototype.ID = function() {
    return this.getToken(LexicoParser.ID, 0);
};

ArregloContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ArregloContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterArreglo(this);
	}
};

ArregloContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitArreglo(this);
	}
};




LexicoParser.ArregloContext = ArregloContext;

LexicoParser.prototype.arreglo = function() {

    var localctx = new ArregloContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, LexicoParser.RULE_arreglo);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 153;
        this.match(LexicoParser.ID);
        this.state = 154;
        this.match(LexicoParser.T__28);
        this.state = 155;
        this.expr(0);
        this.state = 156;
        this.match(LexicoParser.T__29);
        this.state = 163;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 157;
                this.match(LexicoParser.T__28);
                this.state = 158;
                this.expr(0);
                this.state = 159;
                this.match(LexicoParser.T__29);
            }
            this.state = 165;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IdOArrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LexicoParser.RULE_idOArr;
    return this;
}

IdOArrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdOArrContext.prototype.constructor = IdOArrContext;



IdOArrContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function IDFromIdOrArrContext(parser, ctx) {
	IdOArrContext.call(this, parser);
    IdOArrContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IDFromIdOrArrContext.prototype = Object.create(IdOArrContext.prototype);
IDFromIdOrArrContext.prototype.constructor = IDFromIdOrArrContext;

LexicoParser.IDFromIdOrArrContext = IDFromIdOrArrContext;

IDFromIdOrArrContext.prototype.ID = function() {
    return this.getToken(LexicoParser.ID, 0);
};
IDFromIdOrArrContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterIDFromIdOrArr(this);
	}
};

IDFromIdOrArrContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitIDFromIdOrArr(this);
	}
};


function ArrFromIdOrArrContext(parser, ctx) {
	IdOArrContext.call(this, parser);
    IdOArrContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ArrFromIdOrArrContext.prototype = Object.create(IdOArrContext.prototype);
ArrFromIdOrArrContext.prototype.constructor = ArrFromIdOrArrContext;

LexicoParser.ArrFromIdOrArrContext = ArrFromIdOrArrContext;

ArrFromIdOrArrContext.prototype.arreglo = function() {
    return this.getTypedRuleContext(ArregloContext,0);
};
ArrFromIdOrArrContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterArrFromIdOrArr(this);
	}
};

ArrFromIdOrArrContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitArrFromIdOrArr(this);
	}
};



LexicoParser.IdOArrContext = IdOArrContext;

LexicoParser.prototype.idOArr = function() {

    var localctx = new IdOArrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, LexicoParser.RULE_idOArr);
    try {
        this.state = 168;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
        switch(la_) {
        case 1:
            localctx = new IDFromIdOrArrContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 166;
            this.match(LexicoParser.ID);
            break;

        case 2:
            localctx = new ArrFromIdOrArrContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 167;
            this.arreglo();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


LexicoParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 6:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

LexicoParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 8);
		case 1:
			return this.precpred(this._ctx, 7);
		case 2:
			return this.precpred(this._ctx, 6);
		case 3:
			return this.precpred(this._ctx, 5);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.LexicoParser = LexicoParser;

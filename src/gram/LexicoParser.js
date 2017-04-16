// Generated from /home/raven/IdeaProjects/antlrtest/grammar/Lexico.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var LexicoListener = require('./LexicoListener').LexicoListener;
var grammarFileName = "Lexico.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003G\u018d\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0003\u0002\u0007",
    "\u00026\n\u0002\f\u0002\u000e\u00029\u000b\u0002\u0003\u0002\u0007\u0002",
    "<\n\u0002\f\u0002\u000e\u0002?\u000b\u0002\u0003\u0002\u0005\u0002B",
    "\n\u0002\u0003\u0002\u0007\u0002E\n\u0002\f\u0002\u000e\u0002H\u000b",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0005\u0003P\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005Y\n\u0005\u0003",
    "\u0005\u0003\u0005\u0005\u0005]\n\u0005\u0003\u0005\u0005\u0005`\n\u0005",
    "\u0003\u0005\u0005\u0005c\n\u0005\u0005\u0005e\n\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0005\u0005j\n\u0005\u0003\u0005\u0003\u0005\u0005",
    "\u0005n\n\u0005\u0005\u0005p\n\u0005\u0003\u0005\u0003\u0005\u0005\u0005",
    "t\n\u0005\u0003\u0006\u0003\u0006\u0007\u0006x\n\u0006\f\u0006\u000e",
    "\u0006{\u000b\u0006\u0003\u0006\u0005\u0006~\n\u0006\u0003\u0007\u0003",
    "\u0007\u0007\u0007\u0082\n\u0007\f\u0007\u000e\u0007\u0085\u000b\u0007",
    "\u0003\u0007\u0005\u0007\u0088\n\u0007\u0003\b\u0003\b\u0007\b\u008c",
    "\n\b\f\b\u000e\b\u008f\u000b\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0005\t\u0096\n\t\u0003\t\u0003\t\u0005\t\u009a\n\t\u0003\t\u0003",
    "\t\u0005\t\u009e\n\t\u0003\n\u0003\n\u0007\n\u00a2\n\n\f\n\u000e\n\u00a5",
    "\u000b\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0005\u000b\u00b3\n\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0005\u000b\u00ba\n\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0007\u000b\u00ca\n\u000b\f\u000b\u000e\u000b\u00cd\u000b\u000b\u0005",
    "\u000b\u00cf\n\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f",
    "\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f",
    "\u0005\u000f\u00de\n\u000f\u0003\u000f\u0005\u000f\u00e1\n\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00e6\n\u0010\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0005\u0011\u00eb\n\u0011\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u00f2\n\u0012",
    "\u0003\u0012\u0003\u0012\u0005\u0012\u00f6\n\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u00fe",
    "\n\u0012\u0005\u0012\u0100\n\u0012\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0005\u0013\u0105\n\u0013\u0003\u0013\u0005\u0013\u0108\n\u0013\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0007",
    "\u0014\u0110\n\u0014\f\u0014\u000e\u0014\u0113\u000b\u0014\u0003\u0014",
    "\u0003\u0014\u0005\u0014\u0117\n\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0005\u0014\u011c\n\u0014\u0003\u0014\u0005\u0014\u011f\n\u0014",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0007\u0015\u0125\n",
    "\u0015\f\u0015\u000e\u0015\u0128\u000b\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u0136\n",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0007\u0015\u0150\n\u0015\f\u0015\u000e\u0015\u0153\u000b\u0015",
    "\u0003\u0016\u0005\u0016\u0156\n\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0005\u0016\u015b\n\u0016\u0003\u0016\u0007\u0016\u015e\n\u0016",
    "\f\u0016\u000e\u0016\u0161\u000b\u0016\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0007\u0017\u0166\n\u0017\f\u0017\u000e\u0017\u0169\u000b\u0017",
    "\u0003\u0018\u0005\u0018\u016c\n\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0005\u0018\u0171\n\u0018\u0003\u0018\u0005\u0018\u0174\n\u0018",
    "\u0003\u0019\u0003\u0019\u0003\u0019\u0007\u0019\u0179\n\u0019\f\u0019",
    "\u000e\u0019\u017c\u000b\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0007\u001a\u0184\n\u001a\f\u001a\u000e",
    "\u001a\u0187\u000b\u001a\u0003\u001a\u0003\u001a\u0005\u001a\u018b\n",
    "\u001a\u0003\u001a\u0002\u0003(\u001b\u0002\u0004\u0006\b\n\f\u000e",
    "\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02\u0002\n",
    "\u0003\u0002\u000b\f\u0003\u0002\"#\u0003\u0002,-\u0003\u000202\u0003",
    "\u000236\u0003\u000289\u0003\u0002>?\u0003\u0002@A\u0002\u01be\u0002",
    "7\u0003\u0002\u0002\u0002\u0004K\u0003\u0002\u0002\u0002\u0006Q\u0003",
    "\u0002\u0002\u0002\bT\u0003\u0002\u0002\u0002\nu\u0003\u0002\u0002\u0002",
    "\f\u007f\u0003\u0002\u0002\u0002\u000e\u0089\u0003\u0002\u0002\u0002",
    "\u0010\u0090\u0003\u0002\u0002\u0002\u0012\u009f\u0003\u0002\u0002\u0002",
    "\u0014\u00ce\u0003\u0002\u0002\u0002\u0016\u00d0\u0003\u0002\u0002\u0002",
    "\u0018\u00d7\u0003\u0002\u0002\u0002\u001a\u00d9\u0003\u0002\u0002\u0002",
    "\u001c\u00e0\u0003\u0002\u0002\u0002\u001e\u00e2\u0003\u0002\u0002\u0002",
    " \u00e7\u0003\u0002\u0002\u0002\"\u00ff\u0003\u0002\u0002\u0002$\u0101",
    "\u0003\u0002\u0002\u0002&\u011e\u0003\u0002\u0002\u0002(\u0135\u0003",
    "\u0002\u0002\u0002*\u0155\u0003\u0002\u0002\u0002,\u0162\u0003\u0002",
    "\u0002\u0002.\u016b\u0003\u0002\u0002\u00020\u0175\u0003\u0002\u0002",
    "\u00022\u018a\u0003\u0002\u0002\u000246\u0005\u0004\u0003\u000254\u0003",
    "\u0002\u0002\u000269\u0003\u0002\u0002\u000275\u0003\u0002\u0002\u0002",
    "78\u0003\u0002\u0002\u00028=\u0003\u0002\u0002\u000297\u0003\u0002\u0002",
    "\u0002:<\u0005\b\u0005\u0002;:\u0003\u0002\u0002\u0002<?\u0003\u0002",
    "\u0002\u0002=;\u0003\u0002\u0002\u0002=>\u0003\u0002\u0002\u0002>A\u0003",
    "\u0002\u0002\u0002?=\u0003\u0002\u0002\u0002@B\u0005\u0006\u0004\u0002",
    "A@\u0003\u0002\u0002\u0002AB\u0003\u0002\u0002\u0002BF\u0003\u0002\u0002",
    "\u0002CE\u0005\b\u0005\u0002DC\u0003\u0002\u0002\u0002EH\u0003\u0002",
    "\u0002\u0002FD\u0003\u0002\u0002\u0002FG\u0003\u0002\u0002\u0002GI\u0003",
    "\u0002\u0002\u0002HF\u0003\u0002\u0002\u0002IJ\u0007\u0002\u0002\u0003",
    "J\u0003\u0003\u0002\u0002\u0002KL\u0007\u0003\u0002\u0002LO\u0007D\u0002",
    "\u0002MN\u0007\u0004\u0002\u0002NP\u0007B\u0002\u0002OM\u0003\u0002",
    "\u0002\u0002OP\u0003\u0002\u0002\u0002P\u0005\u0003\u0002\u0002\u0002",
    "QR\u0007\u0005\u0002\u0002RS\u0005\u0012\n\u0002S\u0007\u0003\u0002",
    "\u0002\u0002TU\u0007\u0006\u0002\u0002UX\u0007B\u0002\u0002VW\u0007",
    "\u0007\u0002\u0002WY\u0007B\u0002\u0002XV\u0003\u0002\u0002\u0002XY",
    "\u0003\u0002\u0002\u0002Ys\u0003\u0002\u0002\u0002Z\\\u0005\n\u0006",
    "\u0002[]\u0005\f\u0007\u0002\\[\u0003\u0002\u0002\u0002\\]\u0003\u0002",
    "\u0002\u0002]e\u0003\u0002\u0002\u0002^`\u0005\f\u0007\u0002_^\u0003",
    "\u0002\u0002\u0002_`\u0003\u0002\u0002\u0002`b\u0003\u0002\u0002\u0002",
    "ac\u0005\n\u0006\u0002ba\u0003\u0002\u0002\u0002bc\u0003\u0002\u0002",
    "\u0002ce\u0003\u0002\u0002\u0002dZ\u0003\u0002\u0002\u0002d_\u0003\u0002",
    "\u0002\u0002et\u0003\u0002\u0002\u0002fo\u0007\b\u0002\u0002gi\u0005",
    "\n\u0006\u0002hj\u0005\f\u0007\u0002ih\u0003\u0002\u0002\u0002ij\u0003",
    "\u0002\u0002\u0002jp\u0003\u0002\u0002\u0002km\u0005\f\u0007\u0002l",
    "n\u0005\n\u0006\u0002ml\u0003\u0002\u0002\u0002mn\u0003\u0002\u0002",
    "\u0002np\u0003\u0002\u0002\u0002og\u0003\u0002\u0002\u0002ok\u0003\u0002",
    "\u0002\u0002pq\u0003\u0002\u0002\u0002qr\u0007\t\u0002\u0002rt\u0003",
    "\u0002\u0002\u0002sd\u0003\u0002\u0002\u0002sf\u0003\u0002\u0002\u0002",
    "t\t\u0003\u0002\u0002\u0002uy\u0007\n\u0002\u0002vx\u0005\"\u0012\u0002",
    "wv\u0003\u0002\u0002\u0002x{\u0003\u0002\u0002\u0002yw\u0003\u0002\u0002",
    "\u0002yz\u0003\u0002\u0002\u0002z}\u0003\u0002\u0002\u0002{y\u0003\u0002",
    "\u0002\u0002|~\u0005\u000e\b\u0002}|\u0003\u0002\u0002\u0002}~\u0003",
    "\u0002\u0002\u0002~\u000b\u0003\u0002\u0002\u0002\u007f\u0083\t\u0002",
    "\u0002\u0002\u0080\u0082\u0005\"\u0012\u0002\u0081\u0080\u0003\u0002",
    "\u0002\u0002\u0082\u0085\u0003\u0002\u0002\u0002\u0083\u0081\u0003\u0002",
    "\u0002\u0002\u0083\u0084\u0003\u0002\u0002\u0002\u0084\u0087\u0003\u0002",
    "\u0002\u0002\u0085\u0083\u0003\u0002\u0002\u0002\u0086\u0088\u0005\u000e",
    "\b\u0002\u0087\u0086\u0003\u0002\u0002\u0002\u0087\u0088\u0003\u0002",
    "\u0002\u0002\u0088\r\u0003\u0002\u0002\u0002\u0089\u008d\u0007\r\u0002",
    "\u0002\u008a\u008c\u0005\u0010\t\u0002\u008b\u008a\u0003\u0002\u0002",
    "\u0002\u008c\u008f\u0003\u0002\u0002\u0002\u008d\u008b\u0003\u0002\u0002",
    "\u0002\u008d\u008e\u0003\u0002\u0002\u0002\u008e\u000f\u0003\u0002\u0002",
    "\u0002\u008f\u008d\u0003\u0002\u0002\u0002\u0090\u0095\u0007B\u0002",
    "\u0002\u0091\u0092\u0007\u000e\u0002\u0002\u0092\u0093\u00050\u0019",
    "\u0002\u0093\u0094\u0007\u000f\u0002\u0002\u0094\u0096\u0003\u0002\u0002",
    "\u0002\u0095\u0091\u0003\u0002\u0002\u0002\u0095\u0096\u0003\u0002\u0002",
    "\u0002\u0096\u0099\u0003\u0002\u0002\u0002\u0097\u0098\u0007\u0010\u0002",
    "\u0002\u0098\u009a\u0007B\u0002\u0002\u0099\u0097\u0003\u0002\u0002",
    "\u0002\u0099\u009a\u0003\u0002\u0002\u0002\u009a\u009d\u0003\u0002\u0002",
    "\u0002\u009b\u009e\u0005\u0012\n\u0002\u009c\u009e\u0005\u0014\u000b",
    "\u0002\u009d\u009b\u0003\u0002\u0002\u0002\u009d\u009c\u0003\u0002\u0002",
    "\u0002\u009e\u0011\u0003\u0002\u0002\u0002\u009f\u00a3\u0007\b\u0002",
    "\u0002\u00a0\u00a2\u0005\u0014\u000b\u0002\u00a1\u00a0\u0003\u0002\u0002",
    "\u0002\u00a2\u00a5\u0003\u0002\u0002\u0002\u00a3\u00a1\u0003\u0002\u0002",
    "\u0002\u00a3\u00a4\u0003\u0002\u0002\u0002\u00a4\u00a6\u0003\u0002\u0002",
    "\u0002\u00a5\u00a3\u0003\u0002\u0002\u0002\u00a6\u00a7\u0007\t\u0002",
    "\u0002\u00a7\u0013\u0003\u0002\u0002\u0002\u00a8\u00cf\u0005\"\u0012",
    "\u0002\u00a9\u00aa\u0007\u0011\u0002\u0002\u00aa\u00ab\u0005\u0018\r",
    "\u0002\u00ab\u00ac\u0007\u0012\u0002\u0002\u00ac\u00ad\u0005\u001c\u000f",
    "\u0002\u00ad\u00cf\u0003\u0002\u0002\u0002\u00ae\u00af\u0007\u0013\u0002",
    "\u0002\u00af\u00b2\u0005\u0016\f\u0002\u00b0\u00b3\u0005\u0012\n\u0002",
    "\u00b1\u00b3\u0005\u0014\u000b\u0002\u00b2\u00b0\u0003\u0002\u0002\u0002",
    "\u00b2\u00b1\u0003\u0002\u0002\u0002\u00b3\u00cf\u0003\u0002\u0002\u0002",
    "\u00b4\u00b5\u0007\u0014\u0002\u0002\u00b5\u00b6\u0005\u001a\u000e\u0002",
    "\u00b6\u00b9\u0007\u0015\u0002\u0002\u00b7\u00ba\u0005\u0012\n\u0002",
    "\u00b8\u00ba\u0005\u0014\u000b\u0002\u00b9\u00b7\u0003\u0002\u0002\u0002",
    "\u00b9\u00b8\u0003\u0002\u0002\u0002\u00ba\u00cf\u0003\u0002\u0002\u0002",
    "\u00bb\u00bc\u0007\u0016\u0002\u0002\u00bc\u00bd\u0005(\u0015\u0002",
    "\u00bd\u00be\u0007\u0017\u0002\u0002\u00be\u00bf\u0005,\u0017\u0002",
    "\u00bf\u00cf\u0003\u0002\u0002\u0002\u00c0\u00c1\u0007\u0018\u0002\u0002",
    "\u00c1\u00cf\u0005,\u0017\u0002\u00c2\u00c3\u0007\u0019\u0002\u0002",
    "\u00c3\u00cf\u0005*\u0016\u0002\u00c4\u00c5\u0007\u001a\u0002\u0002",
    "\u00c5\u00cf\u0005(\u0015\u0002\u00c6\u00cb\u0005&\u0014\u0002\u00c7",
    "\u00c8\u0007\u001b\u0002\u0002\u00c8\u00ca\u0005&\u0014\u0002\u00c9",
    "\u00c7\u0003\u0002\u0002\u0002\u00ca\u00cd\u0003\u0002\u0002\u0002\u00cb",
    "\u00c9\u0003\u0002\u0002\u0002\u00cb\u00cc\u0003\u0002\u0002\u0002\u00cc",
    "\u00cf\u0003\u0002\u0002\u0002\u00cd\u00cb\u0003\u0002\u0002\u0002\u00ce",
    "\u00a8\u0003\u0002\u0002\u0002\u00ce\u00a9\u0003\u0002\u0002\u0002\u00ce",
    "\u00ae\u0003\u0002\u0002\u0002\u00ce\u00b4\u0003\u0002\u0002\u0002\u00ce",
    "\u00bb\u0003\u0002\u0002\u0002\u00ce\u00c0\u0003\u0002\u0002\u0002\u00ce",
    "\u00c2\u0003\u0002\u0002\u0002\u00ce\u00c4\u0003\u0002\u0002\u0002\u00ce",
    "\u00c6\u0003\u0002\u0002\u0002\u00cf\u0015\u0003\u0002\u0002\u0002\u00d0",
    "\u00d1\u0005&\u0014\u0002\u00d1\u00d2\u0007\u001c\u0002\u0002\u00d2",
    "\u00d3\u0005(\u0015\u0002\u00d3\u00d4\u0007\u001d\u0002\u0002\u00d4",
    "\u00d5\u0005(\u0015\u0002\u00d5\u00d6\u0007\u0015\u0002\u0002\u00d6",
    "\u0017\u0003\u0002\u0002\u0002\u00d7\u00d8\u0005(\u0015\u0002\u00d8",
    "\u0019\u0003\u0002\u0002\u0002\u00d9\u00da\u0005(\u0015\u0002\u00da",
    "\u001b\u0003\u0002\u0002\u0002\u00db\u00dd\u0005\u001e\u0010\u0002\u00dc",
    "\u00de\u0005 \u0011\u0002\u00dd\u00dc\u0003\u0002\u0002\u0002\u00dd",
    "\u00de\u0003\u0002\u0002\u0002\u00de\u00e1\u0003\u0002\u0002\u0002\u00df",
    "\u00e1\u0005 \u0011\u0002\u00e0\u00db\u0003\u0002\u0002\u0002\u00e0",
    "\u00df\u0003\u0002\u0002\u0002\u00e1\u001d\u0003\u0002\u0002\u0002\u00e2",
    "\u00e5\u0007\u001e\u0002\u0002\u00e3\u00e6\u0005\u0012\n\u0002\u00e4",
    "\u00e6\u0005\u0014\u000b\u0002\u00e5\u00e3\u0003\u0002\u0002\u0002\u00e5",
    "\u00e4\u0003\u0002\u0002\u0002\u00e6\u001f\u0003\u0002\u0002\u0002\u00e7",
    "\u00ea\u0007\u001f\u0002\u0002\u00e8\u00eb\u0005\u0012\n\u0002\u00e9",
    "\u00eb\u0005\u0014\u000b\u0002\u00ea\u00e8\u0003\u0002\u0002\u0002\u00ea",
    "\u00e9\u0003\u0002\u0002\u0002\u00eb!\u0003\u0002\u0002\u0002\u00ec",
    "\u00ed\u0007 \u0002\u0002\u00ed\u00ee\u0007!\u0002\u0002\u00ee\u00ef",
    "\u0007B\u0002\u0002\u00ef\u00f1\u0007\u0011\u0002\u0002\u00f0\u00f2",
    "\t\u0003\u0002\u0002\u00f1\u00f0\u0003\u0002\u0002\u0002\u00f1\u00f2",
    "\u0003\u0002\u0002\u0002\u00f2\u00f3\u0003\u0002\u0002\u0002\u00f3\u00f5",
    "\u0005$\u0013\u0002\u00f4\u00f6\u0007$\u0002\u0002\u00f5\u00f4\u0003",
    "\u0002\u0002\u0002\u00f5\u00f6\u0003\u0002\u0002\u0002\u00f6\u0100\u0003",
    "\u0002\u0002\u0002\u00f7\u00f8\u0007%\u0002\u0002\u00f8\u00f9\u0007",
    "&\u0002\u0002\u00f9\u00fa\u0005,\u0017\u0002\u00fa\u00fb\u0007\'\u0002",
    "\u0002\u00fb\u00fd\u0005$\u0013\u0002\u00fc\u00fe\u0007$\u0002\u0002",
    "\u00fd\u00fc\u0003\u0002\u0002\u0002\u00fd\u00fe\u0003\u0002\u0002\u0002",
    "\u00fe\u0100\u0003\u0002\u0002\u0002\u00ff\u00ec\u0003\u0002\u0002\u0002",
    "\u00ff\u00f7\u0003\u0002\u0002\u0002\u0100#\u0003\u0002\u0002\u0002",
    "\u0101\u0107\u0007B\u0002\u0002\u0102\u0104\u0007\u000e\u0002\u0002",
    "\u0103\u0105\u0005*\u0016\u0002\u0104\u0103\u0003\u0002\u0002\u0002",
    "\u0104\u0105\u0003\u0002\u0002\u0002\u0105\u0106\u0003\u0002\u0002\u0002",
    "\u0106\u0108\u0007\u000f\u0002\u0002\u0107\u0102\u0003\u0002\u0002\u0002",
    "\u0107\u0108\u0003\u0002\u0002\u0002\u0108%\u0003\u0002\u0002\u0002",
    "\u0109\u011f\u0007B\u0002\u0002\u010a\u010b\u0007B\u0002\u0002\u010b",
    "\u010c\u0007(\u0002\u0002\u010c\u0111\u0005(\u0015\u0002\u010d\u010e",
    "\u0007)\u0002\u0002\u010e\u0110\u0005(\u0015\u0002\u010f\u010d\u0003",
    "\u0002\u0002\u0002\u0110\u0113\u0003\u0002\u0002\u0002\u0111\u010f\u0003",
    "\u0002\u0002\u0002\u0111\u0112\u0003\u0002\u0002\u0002\u0112\u0114\u0003",
    "\u0002\u0002\u0002\u0113\u0111\u0003\u0002\u0002\u0002\u0114\u0116\u0007",
    "*\u0002\u0002\u0115\u0117\u0007+\u0002\u0002\u0116\u0115\u0003\u0002",
    "\u0002\u0002\u0116\u0117\u0003\u0002\u0002\u0002\u0117\u011f\u0003\u0002",
    "\u0002\u0002\u0118\u0119\u0007B\u0002\u0002\u0119\u011b\u0007\u000e",
    "\u0002\u0002\u011a\u011c\u0005*\u0016\u0002\u011b\u011a\u0003\u0002",
    "\u0002\u0002\u011b\u011c\u0003\u0002\u0002\u0002\u011c\u011d\u0003\u0002",
    "\u0002\u0002\u011d\u011f\u0007\u000f\u0002\u0002\u011e\u0109\u0003\u0002",
    "\u0002\u0002\u011e\u010a\u0003\u0002\u0002\u0002\u011e\u0118\u0003\u0002",
    "\u0002\u0002\u011f\'\u0003\u0002\u0002\u0002\u0120\u0121\b\u0015\u0001",
    "\u0002\u0121\u0126\u0005&\u0014\u0002\u0122\u0123\u0007\u001b\u0002",
    "\u0002\u0123\u0125\u0005&\u0014\u0002\u0124\u0122\u0003\u0002\u0002",
    "\u0002\u0125\u0128\u0003\u0002\u0002\u0002\u0126\u0124\u0003\u0002\u0002",
    "\u0002\u0126\u0127\u0003\u0002\u0002\u0002\u0127\u0136\u0003\u0002\u0002",
    "\u0002\u0128\u0126\u0003\u0002\u0002\u0002\u0129\u012a\t\u0004\u0002",
    "\u0002\u012a\u0136\u0005(\u0015\u0011\u012b\u012c\u0007.\u0002\u0002",
    "\u012c\u0136\u0005(\u0015\u0010\u012d\u0136\u0007<\u0002\u0002\u012e",
    "\u0136\u0007=\u0002\u0002\u012f\u0136\u0007C\u0002\u0002\u0130\u0136",
    "\u0007D\u0002\u0002\u0131\u0132\u0007\u000e\u0002\u0002\u0132\u0133",
    "\u0005(\u0015\u0002\u0133\u0134\u0007\u000f\u0002\u0002\u0134\u0136",
    "\u0003\u0002\u0002\u0002\u0135\u0120\u0003\u0002\u0002\u0002\u0135\u0129",
    "\u0003\u0002\u0002\u0002\u0135\u012b\u0003\u0002\u0002\u0002\u0135\u012d",
    "\u0003\u0002\u0002\u0002\u0135\u012e\u0003\u0002\u0002\u0002\u0135\u012f",
    "\u0003\u0002\u0002\u0002\u0135\u0130\u0003\u0002\u0002\u0002\u0135\u0131",
    "\u0003\u0002\u0002\u0002\u0136\u0151\u0003\u0002\u0002\u0002\u0137\u0138",
    "\f\u000f\u0002\u0002\u0138\u0139\u0007/\u0002\u0002\u0139\u0150\u0005",
    "(\u0015\u000f\u013a\u013b\f\u000e\u0002\u0002\u013b\u013c\t\u0005\u0002",
    "\u0002\u013c\u0150\u0005(\u0015\u000f\u013d\u013e\f\r\u0002\u0002\u013e",
    "\u013f\t\u0004\u0002\u0002\u013f\u0150\u0005(\u0015\u000e\u0140\u0141",
    "\f\f\u0002\u0002\u0141\u0142\t\u0006\u0002\u0002\u0142\u0150\u0005(",
    "\u0015\r\u0143\u0144\f\u000b\u0002\u0002\u0144\u0145\u00077\u0002\u0002",
    "\u0145\u0150\u0005(\u0015\f\u0146\u0147\f\n\u0002\u0002\u0147\u0148",
    "\t\u0007\u0002\u0002\u0148\u0150\u0005(\u0015\u000b\u0149\u014a\f\t",
    "\u0002\u0002\u014a\u014b\u0007:\u0002\u0002\u014b\u0150\u0005(\u0015",
    "\n\u014c\u014d\f\b\u0002\u0002\u014d\u014e\u0007;\u0002\u0002\u014e",
    "\u0150\u0005(\u0015\t\u014f\u0137\u0003\u0002\u0002\u0002\u014f\u013a",
    "\u0003\u0002\u0002\u0002\u014f\u013d\u0003\u0002\u0002\u0002\u014f\u0140",
    "\u0003\u0002\u0002\u0002\u014f\u0143\u0003\u0002\u0002\u0002\u014f\u0146",
    "\u0003\u0002\u0002\u0002\u014f\u0149\u0003\u0002\u0002\u0002\u014f\u014c",
    "\u0003\u0002\u0002\u0002\u0150\u0153\u0003\u0002\u0002\u0002\u0151\u014f",
    "\u0003\u0002\u0002\u0002\u0151\u0152\u0003\u0002\u0002\u0002\u0152)",
    "\u0003\u0002\u0002\u0002\u0153\u0151\u0003\u0002\u0002\u0002\u0154\u0156",
    "\t\b\u0002\u0002\u0155\u0154\u0003\u0002\u0002\u0002\u0155\u0156\u0003",
    "\u0002\u0002\u0002\u0156\u0157\u0003\u0002\u0002\u0002\u0157\u015f\u0005",
    "(\u0015\u0002\u0158\u015a\u0007)\u0002\u0002\u0159\u015b\t\b\u0002\u0002",
    "\u015a\u0159\u0003\u0002\u0002\u0002\u015a\u015b\u0003\u0002\u0002\u0002",
    "\u015b\u015c\u0003\u0002\u0002\u0002\u015c\u015e\u0005(\u0015\u0002",
    "\u015d\u0158\u0003\u0002\u0002\u0002\u015e\u0161\u0003\u0002\u0002\u0002",
    "\u015f\u015d\u0003\u0002\u0002\u0002\u015f\u0160\u0003\u0002\u0002\u0002",
    "\u0160+\u0003\u0002\u0002\u0002\u0161\u015f\u0003\u0002\u0002\u0002",
    "\u0162\u0167\u00052\u001a\u0002\u0163\u0164\u0007)\u0002\u0002\u0164",
    "\u0166\u00052\u001a\u0002\u0165\u0163\u0003\u0002\u0002\u0002\u0166",
    "\u0169\u0003\u0002\u0002\u0002\u0167\u0165\u0003\u0002\u0002\u0002\u0167",
    "\u0168\u0003\u0002\u0002\u0002\u0168-\u0003\u0002\u0002\u0002\u0169",
    "\u0167\u0003\u0002\u0002\u0002\u016a\u016c\t\t\u0002\u0002\u016b\u016a",
    "\u0003\u0002\u0002\u0002\u016b\u016c\u0003\u0002\u0002\u0002\u016c\u016d",
    "\u0003\u0002\u0002\u0002\u016d\u0173\u00052\u001a\u0002\u016e\u0170",
    "\u0007\u0011\u0002\u0002\u016f\u0171\t\u0003\u0002\u0002\u0170\u016f",
    "\u0003\u0002\u0002\u0002\u0170\u0171\u0003\u0002\u0002\u0002\u0171\u0172",
    "\u0003\u0002\u0002\u0002\u0172\u0174\u0007B\u0002\u0002\u0173\u016e",
    "\u0003\u0002\u0002\u0002\u0173\u0174\u0003\u0002\u0002\u0002\u0174/",
    "\u0003\u0002\u0002\u0002\u0175\u017a\u0005.\u0018\u0002\u0176\u0177",
    "\u0007)\u0002\u0002\u0177\u0179\u0005.\u0018\u0002\u0178\u0176\u0003",
    "\u0002\u0002\u0002\u0179\u017c\u0003\u0002\u0002\u0002\u017a\u0178\u0003",
    "\u0002\u0002\u0002\u017a\u017b\u0003\u0002\u0002\u0002\u017b1\u0003",
    "\u0002\u0002\u0002\u017c\u017a\u0003\u0002\u0002\u0002\u017d\u018b\u0007",
    "B\u0002\u0002\u017e\u017f\u0007B\u0002\u0002\u017f\u0180\u0007(\u0002",
    "\u0002\u0180\u0185\u0005(\u0015\u0002\u0181\u0182\u0007)\u0002\u0002",
    "\u0182\u0184\u0005(\u0015\u0002\u0183\u0181\u0003\u0002\u0002\u0002",
    "\u0184\u0187\u0003\u0002\u0002\u0002\u0185\u0183\u0003\u0002\u0002\u0002",
    "\u0185\u0186\u0003\u0002\u0002\u0002\u0186\u0188\u0003\u0002\u0002\u0002",
    "\u0187\u0185\u0003\u0002\u0002\u0002\u0188\u0189\u0007*\u0002\u0002",
    "\u0189\u018b\u0003\u0002\u0002\u0002\u018a\u017d\u0003\u0002\u0002\u0002",
    "\u018a\u017e\u0003\u0002\u0002\u0002\u018b3\u0003\u0002\u0002\u0002",
    "97=AFOX\\_bdimosy}\u0083\u0087\u008d\u0095\u0099\u009d\u00a3\u00b2\u00b9",
    "\u00cb\u00ce\u00dd\u00e0\u00e5\u00ea\u00f1\u00f5\u00fd\u00ff\u0104\u0107",
    "\u0111\u0116\u011b\u011e\u0126\u0135\u014f\u0151\u0155\u015a\u015f\u0167",
    "\u016b\u0170\u0173\u017a\u0185\u018a"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'incluya'", "'como'", "'tarea'", "'clase'",
                     "'derivada_de'", "'{'", "'}'", "'privados:'", "'p\u00FAblicos:'",
                     "'publicos:'", "'mensajes:'", "'('", "')'", "'es_funcion'",
                     "'es'", "'?'", "'variando'", "'mientras'", "'haga:'",
                     "'copie'", "'en'", "'entre'", "'muestre'", "'retorne'",
                     "'.'", "'desde'", "'hasta'", "'si:'", "'no:'", "'el'",
                     "'objeto'", "'una'", "'un'", "'no_crear'", "'los'",
                     "'objetos'", "'son'", "'['", "','", "']'", "'no_validar'",
                     "'-'", "'+'", "'~'", "'^'", "'*'", "'/'", "'%'", "'<'",
                     "'>'", "'<='", "'>='", "'='", "'!='", "'<>'", "'&'",
                     "'|'", "'verdadero'", "'falso'", "'doy'", "'sale'",
                     "'deme'", "'entra'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null,
                      null, null, null, null, null, null, null, null, null,
                      null, null, null, null, null, null, null, null, null,
                      null, null, null, null, null, null, null, null, null,
                      null, null, null, null, null, null, null, null, null,
                      null, null, null, null, null, null, null, null, null,
                      null, null, null, null, null, null, null, null, null,
                      null, "ID", "INT", "STRING", "COMMENT", "LINE_COMMENT",
                      "WS" ];

var ruleNames =  [ "prog", "incluya", "tarea", "clase", "privados", "publicos",
                   "mensajes", "declaracionFunc", "bloque", "sent", "condVariando",
                   "exprCond", "exprMientras", "restoCond", "siCond", "noCond",
                   "declaracionVar", "constructor", "consultable", "expr",
                   "usoListaExpr", "listaVar", "parametro", "paramsEntrada",
                   "variable" ];

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
LexicoParser.T__30 = 31;
LexicoParser.T__31 = 32;
LexicoParser.T__32 = 33;
LexicoParser.T__33 = 34;
LexicoParser.T__34 = 35;
LexicoParser.T__35 = 36;
LexicoParser.T__36 = 37;
LexicoParser.T__37 = 38;
LexicoParser.T__38 = 39;
LexicoParser.T__39 = 40;
LexicoParser.T__40 = 41;
LexicoParser.T__41 = 42;
LexicoParser.T__42 = 43;
LexicoParser.T__43 = 44;
LexicoParser.T__44 = 45;
LexicoParser.T__45 = 46;
LexicoParser.T__46 = 47;
LexicoParser.T__47 = 48;
LexicoParser.T__48 = 49;
LexicoParser.T__49 = 50;
LexicoParser.T__50 = 51;
LexicoParser.T__51 = 52;
LexicoParser.T__52 = 53;
LexicoParser.T__53 = 54;
LexicoParser.T__54 = 55;
LexicoParser.T__55 = 56;
LexicoParser.T__56 = 57;
LexicoParser.T__57 = 58;
LexicoParser.T__58 = 59;
LexicoParser.T__59 = 60;
LexicoParser.T__60 = 61;
LexicoParser.T__61 = 62;
LexicoParser.T__62 = 63;
LexicoParser.ID = 64;
LexicoParser.INT = 65;
LexicoParser.STRING = 66;
LexicoParser.COMMENT = 67;
LexicoParser.LINE_COMMENT = 68;
LexicoParser.WS = 69;

LexicoParser.RULE_prog = 0;
LexicoParser.RULE_incluya = 1;
LexicoParser.RULE_tarea = 2;
LexicoParser.RULE_clase = 3;
LexicoParser.RULE_privados = 4;
LexicoParser.RULE_publicos = 5;
LexicoParser.RULE_mensajes = 6;
LexicoParser.RULE_declaracionFunc = 7;
LexicoParser.RULE_bloque = 8;
LexicoParser.RULE_sent = 9;
LexicoParser.RULE_condVariando = 10;
LexicoParser.RULE_exprCond = 11;
LexicoParser.RULE_exprMientras = 12;
LexicoParser.RULE_restoCond = 13;
LexicoParser.RULE_siCond = 14;
LexicoParser.RULE_noCond = 15;
LexicoParser.RULE_declaracionVar = 16;
LexicoParser.RULE_constructor = 17;
LexicoParser.RULE_consultable = 18;
LexicoParser.RULE_expr = 19;
LexicoParser.RULE_usoListaExpr = 20;
LexicoParser.RULE_listaVar = 21;
LexicoParser.RULE_parametro = 22;
LexicoParser.RULE_paramsEntrada = 23;
LexicoParser.RULE_variable = 24;

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

ProgContext.prototype.EOF = function() {
    return this.getToken(LexicoParser.EOF, 0);
};

ProgContext.prototype.incluya = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IncluyaContext);
    } else {
        return this.getTypedRuleContext(IncluyaContext,i);
    }
};

ProgContext.prototype.clase = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ClaseContext);
    } else {
        return this.getTypedRuleContext(ClaseContext,i);
    }
};

ProgContext.prototype.tarea = function() {
    return this.getTypedRuleContext(TareaContext,0);
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
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 53;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LexicoParser.T__0) {
            this.state = 50;
            this.incluya();
            this.state = 55;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 59;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 56;
                this.clase();
            }
            this.state = 61;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
        }

        this.state = 63;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LexicoParser.T__2) {
            this.state = 62;
            this.tarea();
        }

        this.state = 68;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LexicoParser.T__3) {
            this.state = 65;
            this.clase();
            this.state = 70;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 71;
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

function IncluyaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LexicoParser.RULE_incluya;
    return this;
}

IncluyaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IncluyaContext.prototype.constructor = IncluyaContext;

IncluyaContext.prototype.STRING = function() {
    return this.getToken(LexicoParser.STRING, 0);
};

IncluyaContext.prototype.ID = function() {
    return this.getToken(LexicoParser.ID, 0);
};

IncluyaContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterIncluya(this);
	}
};

IncluyaContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitIncluya(this);
	}
};




LexicoParser.IncluyaContext = IncluyaContext;

LexicoParser.prototype.incluya = function() {

    var localctx = new IncluyaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, LexicoParser.RULE_incluya);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 73;
        this.match(LexicoParser.T__0);
        this.state = 74;
        this.match(LexicoParser.STRING);
        this.state = 77;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LexicoParser.T__1) {
            this.state = 75;
            this.match(LexicoParser.T__1);
            this.state = 76;
            this.match(LexicoParser.ID);
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
    this.enterRule(localctx, 4, LexicoParser.RULE_tarea);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 79;
        this.match(LexicoParser.T__2);
        this.state = 80;
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

function ClaseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LexicoParser.RULE_clase;
    return this;
}

ClaseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClaseContext.prototype.constructor = ClaseContext;

ClaseContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LexicoParser.ID);
    } else {
        return this.getToken(LexicoParser.ID, i);
    }
};


ClaseContext.prototype.privados = function() {
    return this.getTypedRuleContext(PrivadosContext,0);
};

ClaseContext.prototype.publicos = function() {
    return this.getTypedRuleContext(PublicosContext,0);
};

ClaseContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterClase(this);
	}
};

ClaseContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitClase(this);
	}
};




LexicoParser.ClaseContext = ClaseContext;

LexicoParser.prototype.clase = function() {

    var localctx = new ClaseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, LexicoParser.RULE_clase);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 82;
        this.match(LexicoParser.T__3);
        this.state = 83;
        this.match(LexicoParser.ID);
        this.state = 86;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LexicoParser.T__4) {
            this.state = 84;
            this.match(LexicoParser.T__4);
            this.state = 85;
            this.match(LexicoParser.ID);
        }

        this.state = 113;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LexicoParser.EOF:
        case LexicoParser.T__2:
        case LexicoParser.T__3:
        case LexicoParser.T__7:
        case LexicoParser.T__8:
        case LexicoParser.T__9:
            this.state = 98;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
            switch(la_) {
            case 1:
                this.state = 88;
                this.privados();
                this.state = 90;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(_la===LexicoParser.T__8 || _la===LexicoParser.T__9) {
                    this.state = 89;
                    this.publicos();
                }

                break;

            case 2:
                this.state = 93;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(_la===LexicoParser.T__8 || _la===LexicoParser.T__9) {
                    this.state = 92;
                    this.publicos();
                }

                this.state = 96;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(_la===LexicoParser.T__7) {
                    this.state = 95;
                    this.privados();
                }

                break;

            }
            break;
        case LexicoParser.T__5:
            this.state = 100;
            this.match(LexicoParser.T__5);
            this.state = 109;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case LexicoParser.T__7:
                this.state = 101;
                this.privados();
                this.state = 103;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(_la===LexicoParser.T__8 || _la===LexicoParser.T__9) {
                    this.state = 102;
                    this.publicos();
                }

                break;
            case LexicoParser.T__8:
            case LexicoParser.T__9:
                this.state = 105;
                this.publicos();
                this.state = 107;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(_la===LexicoParser.T__7) {
                    this.state = 106;
                    this.privados();
                }

                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 111;
            this.match(LexicoParser.T__6);
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

function PrivadosContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LexicoParser.RULE_privados;
    return this;
}

PrivadosContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrivadosContext.prototype.constructor = PrivadosContext;

PrivadosContext.prototype.declaracionVar = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DeclaracionVarContext);
    } else {
        return this.getTypedRuleContext(DeclaracionVarContext,i);
    }
};

PrivadosContext.prototype.mensajes = function() {
    return this.getTypedRuleContext(MensajesContext,0);
};

PrivadosContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterPrivados(this);
	}
};

PrivadosContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitPrivados(this);
	}
};




LexicoParser.PrivadosContext = PrivadosContext;

LexicoParser.prototype.privados = function() {

    var localctx = new PrivadosContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, LexicoParser.RULE_privados);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 115;
        this.match(LexicoParser.T__7);
        this.state = 119;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LexicoParser.T__29 || _la===LexicoParser.T__34) {
            this.state = 116;
            this.declaracionVar();
            this.state = 121;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 123;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LexicoParser.T__10) {
            this.state = 122;
            this.mensajes();
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

function PublicosContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LexicoParser.RULE_publicos;
    return this;
}

PublicosContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PublicosContext.prototype.constructor = PublicosContext;

PublicosContext.prototype.declaracionVar = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DeclaracionVarContext);
    } else {
        return this.getTypedRuleContext(DeclaracionVarContext,i);
    }
};

PublicosContext.prototype.mensajes = function() {
    return this.getTypedRuleContext(MensajesContext,0);
};

PublicosContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterPublicos(this);
	}
};

PublicosContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitPublicos(this);
	}
};




LexicoParser.PublicosContext = PublicosContext;

LexicoParser.prototype.publicos = function() {

    var localctx = new PublicosContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, LexicoParser.RULE_publicos);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 125;
        _la = this._input.LA(1);
        if(!(_la===LexicoParser.T__8 || _la===LexicoParser.T__9)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 129;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LexicoParser.T__29 || _la===LexicoParser.T__34) {
            this.state = 126;
            this.declaracionVar();
            this.state = 131;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 133;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LexicoParser.T__10) {
            this.state = 132;
            this.mensajes();
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

function MensajesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LexicoParser.RULE_mensajes;
    return this;
}

MensajesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MensajesContext.prototype.constructor = MensajesContext;

MensajesContext.prototype.declaracionFunc = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DeclaracionFuncContext);
    } else {
        return this.getTypedRuleContext(DeclaracionFuncContext,i);
    }
};

MensajesContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterMensajes(this);
	}
};

MensajesContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitMensajes(this);
	}
};




LexicoParser.MensajesContext = MensajesContext;

LexicoParser.prototype.mensajes = function() {

    var localctx = new MensajesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, LexicoParser.RULE_mensajes);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 135;
        this.match(LexicoParser.T__10);
        this.state = 139;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LexicoParser.ID) {
            this.state = 136;
            this.declaracionFunc();
            this.state = 141;
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

function DeclaracionFuncContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LexicoParser.RULE_declaracionFunc;
    return this;
}

DeclaracionFuncContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclaracionFuncContext.prototype.constructor = DeclaracionFuncContext;

DeclaracionFuncContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LexicoParser.ID);
    } else {
        return this.getToken(LexicoParser.ID, i);
    }
};


DeclaracionFuncContext.prototype.bloque = function() {
    return this.getTypedRuleContext(BloqueContext,0);
};

DeclaracionFuncContext.prototype.sent = function() {
    return this.getTypedRuleContext(SentContext,0);
};

DeclaracionFuncContext.prototype.paramsEntrada = function() {
    return this.getTypedRuleContext(ParamsEntradaContext,0);
};

DeclaracionFuncContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterDeclaracionFunc(this);
	}
};

DeclaracionFuncContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitDeclaracionFunc(this);
	}
};




LexicoParser.DeclaracionFuncContext = DeclaracionFuncContext;

LexicoParser.prototype.declaracionFunc = function() {

    var localctx = new DeclaracionFuncContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, LexicoParser.RULE_declaracionFunc);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 142;
        this.match(LexicoParser.ID);
        this.state = 147;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LexicoParser.T__11) {
            this.state = 143;
            this.match(LexicoParser.T__11);
            this.state = 144;
            this.paramsEntrada();
            this.state = 145;
            this.match(LexicoParser.T__12);
        }

        this.state = 151;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LexicoParser.T__13) {
            this.state = 149;
            this.match(LexicoParser.T__13);
            this.state = 150;
            this.match(LexicoParser.ID);
        }

        this.state = 155;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LexicoParser.T__5:
            this.state = 153;
            this.bloque();
            break;
        case LexicoParser.T__14:
        case LexicoParser.T__16:
        case LexicoParser.T__17:
        case LexicoParser.T__19:
        case LexicoParser.T__21:
        case LexicoParser.T__22:
        case LexicoParser.T__23:
        case LexicoParser.T__29:
        case LexicoParser.T__34:
        case LexicoParser.ID:
            this.state = 154;
            this.sent();
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
    this.enterRule(localctx, 16, LexicoParser.RULE_bloque);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 157;
        this.match(LexicoParser.T__5);
        this.state = 161;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LexicoParser.T__14) | (1 << LexicoParser.T__16) | (1 << LexicoParser.T__17) | (1 << LexicoParser.T__19) | (1 << LexicoParser.T__21) | (1 << LexicoParser.T__22) | (1 << LexicoParser.T__23) | (1 << LexicoParser.T__29))) !== 0) || _la===LexicoParser.T__34 || _la===LexicoParser.ID) {
            this.state = 158;
            this.sent();
            this.state = 163;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 164;
        this.match(LexicoParser.T__6);
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


function MientrasContext(parser, ctx) {
	SentContext.call(this, parser);
    SentContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MientrasContext.prototype = Object.create(SentContext.prototype);
MientrasContext.prototype.constructor = MientrasContext;

LexicoParser.MientrasContext = MientrasContext;

MientrasContext.prototype.exprMientras = function() {
    return this.getTypedRuleContext(ExprMientrasContext,0);
};

MientrasContext.prototype.bloque = function() {
    return this.getTypedRuleContext(BloqueContext,0);
};

MientrasContext.prototype.sent = function() {
    return this.getTypedRuleContext(SentContext,0);
};
MientrasContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterMientras(this);
	}
};

MientrasContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitMientras(this);
	}
};


function RetorneContext(parser, ctx) {
	SentContext.call(this, parser);
    SentContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RetorneContext.prototype = Object.create(SentContext.prototype);
RetorneContext.prototype.constructor = RetorneContext;

LexicoParser.RetorneContext = RetorneContext;

RetorneContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
RetorneContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterRetorne(this);
	}
};

RetorneContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitRetorne(this);
	}
};


function VariandoContext(parser, ctx) {
	SentContext.call(this, parser);
    SentContext.prototype.copyFrom.call(this, ctx);
    return this;
}

VariandoContext.prototype = Object.create(SentContext.prototype);
VariandoContext.prototype.constructor = VariandoContext;

LexicoParser.VariandoContext = VariandoContext;

VariandoContext.prototype.condVariando = function() {
    return this.getTypedRuleContext(CondVariandoContext,0);
};

VariandoContext.prototype.bloque = function() {
    return this.getTypedRuleContext(BloqueContext,0);
};

VariandoContext.prototype.sent = function() {
    return this.getTypedRuleContext(SentContext,0);
};
VariandoContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterVariando(this);
	}
};

VariandoContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitVariando(this);
	}
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

MuestreContext.prototype.usoListaExpr = function() {
    return this.getTypedRuleContext(UsoListaExprContext,0);
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

CondicionalContext.prototype.exprCond = function() {
    return this.getTypedRuleContext(ExprCondContext,0);
};

CondicionalContext.prototype.restoCond = function() {
    return this.getTypedRuleContext(RestoCondContext,0);
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

EntreContext.prototype.listaVar = function() {
    return this.getTypedRuleContext(ListaVarContext,0);
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


function ConsultaSencillaContext(parser, ctx) {
	SentContext.call(this, parser);
    SentContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ConsultaSencillaContext.prototype = Object.create(SentContext.prototype);
ConsultaSencillaContext.prototype.constructor = ConsultaSencillaContext;

LexicoParser.ConsultaSencillaContext = ConsultaSencillaContext;

ConsultaSencillaContext.prototype.consultable = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ConsultableContext);
    } else {
        return this.getTypedRuleContext(ConsultableContext,i);
    }
};
ConsultaSencillaContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterConsultaSencilla(this);
	}
};

ConsultaSencillaContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitConsultaSencilla(this);
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

CopieEnContext.prototype.listaVar = function() {
    return this.getTypedRuleContext(ListaVarContext,0);
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
    this.enterRule(localctx, 18, LexicoParser.RULE_sent);
    var _la = 0; // Token type
    try {
        this.state = 204;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LexicoParser.T__29:
        case LexicoParser.T__34:
            localctx = new SentDeclaracionContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 166;
            this.declaracionVar();
            break;
        case LexicoParser.T__14:
            localctx = new CondicionalContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 167;
            this.match(LexicoParser.T__14);
            this.state = 168;
            this.exprCond();
            this.state = 169;
            this.match(LexicoParser.T__15);
            this.state = 170;
            this.restoCond();
            break;
        case LexicoParser.T__16:
            localctx = new VariandoContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 172;
            this.match(LexicoParser.T__16);
            this.state = 173;
            this.condVariando();
            this.state = 176;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case LexicoParser.T__5:
                this.state = 174;
                this.bloque();
                break;
            case LexicoParser.T__14:
            case LexicoParser.T__16:
            case LexicoParser.T__17:
            case LexicoParser.T__19:
            case LexicoParser.T__21:
            case LexicoParser.T__22:
            case LexicoParser.T__23:
            case LexicoParser.T__29:
            case LexicoParser.T__34:
            case LexicoParser.ID:
                this.state = 175;
                this.sent();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            break;
        case LexicoParser.T__17:
            localctx = new MientrasContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 178;
            this.match(LexicoParser.T__17);
            this.state = 179;
            this.exprMientras();
            this.state = 180;
            this.match(LexicoParser.T__18);
            this.state = 183;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case LexicoParser.T__5:
                this.state = 181;
                this.bloque();
                break;
            case LexicoParser.T__14:
            case LexicoParser.T__16:
            case LexicoParser.T__17:
            case LexicoParser.T__19:
            case LexicoParser.T__21:
            case LexicoParser.T__22:
            case LexicoParser.T__23:
            case LexicoParser.T__29:
            case LexicoParser.T__34:
            case LexicoParser.ID:
                this.state = 182;
                this.sent();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            break;
        case LexicoParser.T__19:
            localctx = new CopieEnContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 185;
            this.match(LexicoParser.T__19);
            this.state = 186;
            this.expr(0);
            this.state = 187;
            this.match(LexicoParser.T__20);
            this.state = 188;
            this.listaVar();
            break;
        case LexicoParser.T__21:
            localctx = new EntreContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 190;
            this.match(LexicoParser.T__21);
            this.state = 191;
            this.listaVar();
            break;
        case LexicoParser.T__22:
            localctx = new MuestreContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 192;
            this.match(LexicoParser.T__22);
            this.state = 193;
            this.usoListaExpr();
            break;
        case LexicoParser.T__23:
            localctx = new RetorneContext(this, localctx);
            this.enterOuterAlt(localctx, 8);
            this.state = 194;
            this.match(LexicoParser.T__23);
            this.state = 195;
            this.expr(0);
            break;
        case LexicoParser.ID:
            localctx = new ConsultaSencillaContext(this, localctx);
            this.enterOuterAlt(localctx, 9);
            this.state = 196;
            this.consultable();
            this.state = 201;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===LexicoParser.T__24) {
                this.state = 197;
                this.match(LexicoParser.T__24);
                this.state = 198;
                this.consultable();
                this.state = 203;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
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

function CondVariandoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LexicoParser.RULE_condVariando;
    return this;
}

CondVariandoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CondVariandoContext.prototype.constructor = CondVariandoContext;

CondVariandoContext.prototype.consultable = function() {
    return this.getTypedRuleContext(ConsultableContext,0);
};

CondVariandoContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

CondVariandoContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterCondVariando(this);
	}
};

CondVariandoContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitCondVariando(this);
	}
};




LexicoParser.CondVariandoContext = CondVariandoContext;

LexicoParser.prototype.condVariando = function() {

    var localctx = new CondVariandoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, LexicoParser.RULE_condVariando);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 206;
        this.consultable();
        this.state = 207;
        this.match(LexicoParser.T__25);
        this.state = 208;
        this.expr(0);
        this.state = 209;
        this.match(LexicoParser.T__26);
        this.state = 210;
        this.expr(0);
        this.state = 211;
        this.match(LexicoParser.T__18);
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

function ExprCondContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LexicoParser.RULE_exprCond;
    return this;
}

ExprCondContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprCondContext.prototype.constructor = ExprCondContext;

ExprCondContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ExprCondContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterExprCond(this);
	}
};

ExprCondContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitExprCond(this);
	}
};




LexicoParser.ExprCondContext = ExprCondContext;

LexicoParser.prototype.exprCond = function() {

    var localctx = new ExprCondContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, LexicoParser.RULE_exprCond);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 213;
        this.expr(0);
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

function ExprMientrasContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LexicoParser.RULE_exprMientras;
    return this;
}

ExprMientrasContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprMientrasContext.prototype.constructor = ExprMientrasContext;

ExprMientrasContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ExprMientrasContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterExprMientras(this);
	}
};

ExprMientrasContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitExprMientras(this);
	}
};




LexicoParser.ExprMientrasContext = ExprMientrasContext;

LexicoParser.prototype.exprMientras = function() {

    var localctx = new ExprMientrasContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, LexicoParser.RULE_exprMientras);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 215;
        this.expr(0);
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

function RestoCondContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LexicoParser.RULE_restoCond;
    return this;
}

RestoCondContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RestoCondContext.prototype.constructor = RestoCondContext;



RestoCondContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function SoloNoCondContext(parser, ctx) {
	RestoCondContext.call(this, parser);
    RestoCondContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SoloNoCondContext.prototype = Object.create(RestoCondContext.prototype);
SoloNoCondContext.prototype.constructor = SoloNoCondContext;

LexicoParser.SoloNoCondContext = SoloNoCondContext;

SoloNoCondContext.prototype.noCond = function() {
    return this.getTypedRuleContext(NoCondContext,0);
};
SoloNoCondContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterSoloNoCond(this);
	}
};

SoloNoCondContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitSoloNoCond(this);
	}
};


function SiYNoCondContext(parser, ctx) {
	RestoCondContext.call(this, parser);
    RestoCondContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SiYNoCondContext.prototype = Object.create(RestoCondContext.prototype);
SiYNoCondContext.prototype.constructor = SiYNoCondContext;

LexicoParser.SiYNoCondContext = SiYNoCondContext;

SiYNoCondContext.prototype.siCond = function() {
    return this.getTypedRuleContext(SiCondContext,0);
};

SiYNoCondContext.prototype.noCond = function() {
    return this.getTypedRuleContext(NoCondContext,0);
};
SiYNoCondContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterSiYNoCond(this);
	}
};

SiYNoCondContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitSiYNoCond(this);
	}
};



LexicoParser.RestoCondContext = RestoCondContext;

LexicoParser.prototype.restoCond = function() {

    var localctx = new RestoCondContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, LexicoParser.RULE_restoCond);
    try {
        this.state = 222;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LexicoParser.T__27:
            localctx = new SiYNoCondContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 217;
            this.siCond();
            this.state = 219;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
            if(la_===1) {
                this.state = 218;
                this.noCond();

            }
            break;
        case LexicoParser.T__28:
            localctx = new SoloNoCondContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 221;
            this.noCond();
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

function SiCondContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LexicoParser.RULE_siCond;
    return this;
}

SiCondContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SiCondContext.prototype.constructor = SiCondContext;

SiCondContext.prototype.bloque = function() {
    return this.getTypedRuleContext(BloqueContext,0);
};

SiCondContext.prototype.sent = function() {
    return this.getTypedRuleContext(SentContext,0);
};

SiCondContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterSiCond(this);
	}
};

SiCondContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitSiCond(this);
	}
};




LexicoParser.SiCondContext = SiCondContext;

LexicoParser.prototype.siCond = function() {

    var localctx = new SiCondContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, LexicoParser.RULE_siCond);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 224;
        this.match(LexicoParser.T__27);
        this.state = 227;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LexicoParser.T__5:
            this.state = 225;
            this.bloque();
            break;
        case LexicoParser.T__14:
        case LexicoParser.T__16:
        case LexicoParser.T__17:
        case LexicoParser.T__19:
        case LexicoParser.T__21:
        case LexicoParser.T__22:
        case LexicoParser.T__23:
        case LexicoParser.T__29:
        case LexicoParser.T__34:
        case LexicoParser.ID:
            this.state = 226;
            this.sent();
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

function NoCondContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LexicoParser.RULE_noCond;
    return this;
}

NoCondContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NoCondContext.prototype.constructor = NoCondContext;

NoCondContext.prototype.bloque = function() {
    return this.getTypedRuleContext(BloqueContext,0);
};

NoCondContext.prototype.sent = function() {
    return this.getTypedRuleContext(SentContext,0);
};

NoCondContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterNoCond(this);
	}
};

NoCondContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitNoCond(this);
	}
};




LexicoParser.NoCondContext = NoCondContext;

LexicoParser.prototype.noCond = function() {

    var localctx = new NoCondContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, LexicoParser.RULE_noCond);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 229;
        this.match(LexicoParser.T__28);
        this.state = 232;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LexicoParser.T__5:
            this.state = 230;
            this.bloque();
            break;
        case LexicoParser.T__14:
        case LexicoParser.T__16:
        case LexicoParser.T__17:
        case LexicoParser.T__19:
        case LexicoParser.T__21:
        case LexicoParser.T__22:
        case LexicoParser.T__23:
        case LexicoParser.T__29:
        case LexicoParser.T__34:
        case LexicoParser.ID:
            this.state = 231;
            this.sent();
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

DeclaracionVariasVarContext.prototype.listaVar = function() {
    return this.getTypedRuleContext(ListaVarContext,0);
};

DeclaracionVariasVarContext.prototype.constructor = function() {
    return this.getTypedRuleContext(ConstructorContext,0);
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

DeclaracionUnaVarContext.prototype.ID = function() {
    return this.getToken(LexicoParser.ID, 0);
};

DeclaracionUnaVarContext.prototype.constructor = function() {
    return this.getTypedRuleContext(ConstructorContext,0);
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



LexicoParser.DeclaracionVarContext = DeclaracionVarContext;

LexicoParser.prototype.declaracionVar = function() {

    var localctx = new DeclaracionVarContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, LexicoParser.RULE_declaracionVar);
    var _la = 0; // Token type
    try {
        this.state = 253;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LexicoParser.T__29:
            localctx = new DeclaracionUnaVarContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 234;
            this.match(LexicoParser.T__29);
            this.state = 235;
            this.match(LexicoParser.T__30);
            this.state = 236;
            this.match(LexicoParser.ID);
            this.state = 237;
            this.match(LexicoParser.T__14);
            this.state = 239;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===LexicoParser.T__31 || _la===LexicoParser.T__32) {
                this.state = 238;
                _la = this._input.LA(1);
                if(!(_la===LexicoParser.T__31 || _la===LexicoParser.T__32)) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                }
            }

            this.state = 241;
            this.constructor();
            this.state = 243;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===LexicoParser.T__33) {
                this.state = 242;
                this.match(LexicoParser.T__33);
            }

            break;
        case LexicoParser.T__34:
            localctx = new DeclaracionVariasVarContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 245;
            this.match(LexicoParser.T__34);
            this.state = 246;
            this.match(LexicoParser.T__35);
            this.state = 247;
            this.listaVar();
            this.state = 248;
            this.match(LexicoParser.T__36);
            this.state = 249;
            this.constructor();
            this.state = 251;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===LexicoParser.T__33) {
                this.state = 250;
                this.match(LexicoParser.T__33);
            }

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

function ConstructorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LexicoParser.RULE_constructor;
    return this;
}

ConstructorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstructorContext.prototype.constructor = ConstructorContext;

ConstructorContext.prototype.ID = function() {
    return this.getToken(LexicoParser.ID, 0);
};

ConstructorContext.prototype.usoListaExpr = function() {
    return this.getTypedRuleContext(UsoListaExprContext,0);
};

ConstructorContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterConstructor(this);
	}
};

ConstructorContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitConstructor(this);
	}
};




LexicoParser.ConstructorContext = ConstructorContext;

LexicoParser.prototype.constructor = function() {

    var localctx = new ConstructorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, LexicoParser.RULE_constructor);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 255;
        this.match(LexicoParser.ID);
        this.state = 261;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LexicoParser.T__11) {
            this.state = 256;
            this.match(LexicoParser.T__11);
            this.state = 258;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===LexicoParser.T__11 || ((((_la - 42)) & ~0x1f) == 0 && ((1 << (_la - 42)) & ((1 << (LexicoParser.T__41 - 42)) | (1 << (LexicoParser.T__42 - 42)) | (1 << (LexicoParser.T__43 - 42)) | (1 << (LexicoParser.T__57 - 42)) | (1 << (LexicoParser.T__58 - 42)) | (1 << (LexicoParser.T__59 - 42)) | (1 << (LexicoParser.T__60 - 42)) | (1 << (LexicoParser.ID - 42)) | (1 << (LexicoParser.INT - 42)) | (1 << (LexicoParser.STRING - 42)))) !== 0)) {
                this.state = 257;
                this.usoListaExpr();
            }

            this.state = 260;
            this.match(LexicoParser.T__12);
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

function ConsultableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LexicoParser.RULE_consultable;
    return this;
}

ConsultableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConsultableContext.prototype.constructor = ConsultableContext;



ConsultableContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function UsoVarContext(parser, ctx) {
	ConsultableContext.call(this, parser);
    ConsultableContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UsoVarContext.prototype = Object.create(ConsultableContext.prototype);
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


function UsoArregloContext(parser, ctx) {
	ConsultableContext.call(this, parser);
    ConsultableContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UsoArregloContext.prototype = Object.create(ConsultableContext.prototype);
UsoArregloContext.prototype.constructor = UsoArregloContext;

LexicoParser.UsoArregloContext = UsoArregloContext;

UsoArregloContext.prototype.ID = function() {
    return this.getToken(LexicoParser.ID, 0);
};

UsoArregloContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
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


function UsoFuncionContext(parser, ctx) {
	ConsultableContext.call(this, parser);
    ConsultableContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UsoFuncionContext.prototype = Object.create(ConsultableContext.prototype);
UsoFuncionContext.prototype.constructor = UsoFuncionContext;

LexicoParser.UsoFuncionContext = UsoFuncionContext;

UsoFuncionContext.prototype.ID = function() {
    return this.getToken(LexicoParser.ID, 0);
};

UsoFuncionContext.prototype.usoListaExpr = function() {
    return this.getTypedRuleContext(UsoListaExprContext,0);
};
UsoFuncionContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterUsoFuncion(this);
	}
};

UsoFuncionContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitUsoFuncion(this);
	}
};



LexicoParser.ConsultableContext = ConsultableContext;

LexicoParser.prototype.consultable = function() {

    var localctx = new ConsultableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, LexicoParser.RULE_consultable);
    var _la = 0; // Token type
    try {
        this.state = 284;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
        switch(la_) {
        case 1:
            localctx = new UsoVarContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 263;
            this.match(LexicoParser.ID);
            break;

        case 2:
            localctx = new UsoArregloContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 264;
            this.match(LexicoParser.ID);
            this.state = 265;
            this.match(LexicoParser.T__37);
            this.state = 266;
            this.expr(0);
            this.state = 271;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===LexicoParser.T__38) {
                this.state = 267;
                this.match(LexicoParser.T__38);
                this.state = 268;
                this.expr(0);
                this.state = 273;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 274;
            this.match(LexicoParser.T__39);
            this.state = 276;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
            if(la_===1) {
                this.state = 275;
                this.match(LexicoParser.T__40);

            }
            break;

        case 3:
            localctx = new UsoFuncionContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 278;
            this.match(LexicoParser.ID);

            this.state = 279;
            this.match(LexicoParser.T__11);
            this.state = 281;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===LexicoParser.T__11 || ((((_la - 42)) & ~0x1f) == 0 && ((1 << (_la - 42)) & ((1 << (LexicoParser.T__41 - 42)) | (1 << (LexicoParser.T__42 - 42)) | (1 << (LexicoParser.T__43 - 42)) | (1 << (LexicoParser.T__57 - 42)) | (1 << (LexicoParser.T__58 - 42)) | (1 << (LexicoParser.T__59 - 42)) | (1 << (LexicoParser.T__60 - 42)) | (1 << (LexicoParser.ID - 42)) | (1 << (LexicoParser.INT - 42)) | (1 << (LexicoParser.STRING - 42)))) !== 0)) {
                this.state = 280;
                this.usoListaExpr();
            }

            this.state = 283;
            this.match(LexicoParser.T__12);
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

function FalsoContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FalsoContext.prototype = Object.create(ExprContext.prototype);
FalsoContext.prototype.constructor = FalsoContext;

LexicoParser.FalsoContext = FalsoContext;

FalsoContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterFalso(this);
	}
};

FalsoContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitFalso(this);
	}
};


function CantidadesContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CantidadesContext.prototype = Object.create(ExprContext.prototype);
CantidadesContext.prototype.constructor = CantidadesContext;

LexicoParser.CantidadesContext = CantidadesContext;

CantidadesContext.prototype.INT = function() {
    return this.getToken(LexicoParser.INT, 0);
};
CantidadesContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterCantidades(this);
	}
};

CantidadesContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitCantidades(this);
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


function UsoConsultableContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UsoConsultableContext.prototype = Object.create(ExprContext.prototype);
UsoConsultableContext.prototype.constructor = UsoConsultableContext;

LexicoParser.UsoConsultableContext = UsoConsultableContext;

UsoConsultableContext.prototype.consultable = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ConsultableContext);
    } else {
        return this.getTypedRuleContext(ConsultableContext,i);
    }
};
UsoConsultableContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterUsoConsultable(this);
	}
};

UsoConsultableContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitUsoConsultable(this);
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


function RelacionalContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RelacionalContext.prototype = Object.create(ExprContext.prototype);
RelacionalContext.prototype.constructor = RelacionalContext;

LexicoParser.RelacionalContext = RelacionalContext;

RelacionalContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
RelacionalContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterRelacional(this);
	}
};

RelacionalContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitRelacional(this);
	}
};


function MultDivModContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MultDivModContext.prototype = Object.create(ExprContext.prototype);
MultDivModContext.prototype.constructor = MultDivModContext;

LexicoParser.MultDivModContext = MultDivModContext;

MultDivModContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
MultDivModContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterMultDivMod(this);
	}
};

MultDivModContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitMultDivMod(this);
	}
};


function OMasBienContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

OMasBienContext.prototype = Object.create(ExprContext.prototype);
OMasBienContext.prototype.constructor = OMasBienContext;

LexicoParser.OMasBienContext = OMasBienContext;

OMasBienContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
OMasBienContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterOMasBien(this);
	}
};

OMasBienContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitOMasBien(this);
	}
};


function UnarioContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UnarioContext.prototype = Object.create(ExprContext.prototype);
UnarioContext.prototype.constructor = UnarioContext;

LexicoParser.UnarioContext = UnarioContext;

UnarioContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
UnarioContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterUnario(this);
	}
};

UnarioContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitUnario(this);
	}
};


function IgualContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IgualContext.prototype = Object.create(ExprContext.prototype);
IgualContext.prototype.constructor = IgualContext;

LexicoParser.IgualContext = IgualContext;

IgualContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
IgualContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterIgual(this);
	}
};

IgualContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitIgual(this);
	}
};


function VerdaderoContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

VerdaderoContext.prototype = Object.create(ExprContext.prototype);
VerdaderoContext.prototype.constructor = VerdaderoContext;

LexicoParser.VerdaderoContext = VerdaderoContext;

VerdaderoContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterVerdadero(this);
	}
};

VerdaderoContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitVerdadero(this);
	}
};


function PotenciaContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PotenciaContext.prototype = Object.create(ExprContext.prototype);
PotenciaContext.prototype.constructor = PotenciaContext;

LexicoParser.PotenciaContext = PotenciaContext;

PotenciaContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
PotenciaContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterPotencia(this);
	}
};

PotenciaContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitPotencia(this);
	}
};


function DiferenteContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DiferenteContext.prototype = Object.create(ExprContext.prototype);
DiferenteContext.prototype.constructor = DiferenteContext;

LexicoParser.DiferenteContext = DiferenteContext;

DiferenteContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
DiferenteContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterDiferente(this);
	}
};

DiferenteContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitDiferente(this);
	}
};


function YTambienContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

YTambienContext.prototype = Object.create(ExprContext.prototype);
YTambienContext.prototype.constructor = YTambienContext;

LexicoParser.YTambienContext = YTambienContext;

YTambienContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
YTambienContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterYTambien(this);
	}
};

YTambienContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitYTambien(this);
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
    var _startState = 38;
    this.enterRecursionRule(localctx, 38, LexicoParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 307;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LexicoParser.ID:
            localctx = new UsoConsultableContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 287;
            this.consultable();
            this.state = 292;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,41,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 288;
                    this.match(LexicoParser.T__24);
                    this.state = 289;
                    this.consultable();
                }
                this.state = 294;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,41,this._ctx);
            }

            break;
        case LexicoParser.T__41:
        case LexicoParser.T__42:
            localctx = new UnarioContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 295;
            _la = this._input.LA(1);
            if(!(_la===LexicoParser.T__41 || _la===LexicoParser.T__42)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 296;
            this.expr(15);
            break;
        case LexicoParser.T__43:
            localctx = new NegacionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 297;
            this.match(LexicoParser.T__43);
            this.state = 298;
            this.expr(14);
            break;
        case LexicoParser.T__57:
            localctx = new VerdaderoContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 299;
            this.match(LexicoParser.T__57);
            break;
        case LexicoParser.T__58:
            localctx = new FalsoContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 300;
            this.match(LexicoParser.T__58);
            break;
        case LexicoParser.INT:
            localctx = new CantidadesContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 301;
            this.match(LexicoParser.INT);
            break;
        case LexicoParser.STRING:
            localctx = new CaracteresContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 302;
            this.match(LexicoParser.STRING);
            break;
        case LexicoParser.T__11:
            localctx = new ParentesisContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 303;
            this.match(LexicoParser.T__11);
            this.state = 304;
            this.expr(0);
            this.state = 305;
            this.match(LexicoParser.T__12);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 335;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,44,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 333;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,43,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new PotenciaContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, LexicoParser.RULE_expr);
                    this.state = 309;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 310;
                    this.match(LexicoParser.T__44);
                    this.state = 311;
                    this.expr(13);
                    break;

                case 2:
                    localctx = new MultDivModContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, LexicoParser.RULE_expr);
                    this.state = 312;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 313;
                    _la = this._input.LA(1);
                    if(!(((((_la - 46)) & ~0x1f) == 0 && ((1 << (_la - 46)) & ((1 << (LexicoParser.T__45 - 46)) | (1 << (LexicoParser.T__46 - 46)) | (1 << (LexicoParser.T__47 - 46)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 314;
                    this.expr(13);
                    break;

                case 3:
                    localctx = new SumaRestaContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, LexicoParser.RULE_expr);
                    this.state = 315;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 316;
                    _la = this._input.LA(1);
                    if(!(_la===LexicoParser.T__41 || _la===LexicoParser.T__42)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 317;
                    this.expr(12);
                    break;

                case 4:
                    localctx = new RelacionalContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, LexicoParser.RULE_expr);
                    this.state = 318;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 319;
                    _la = this._input.LA(1);
                    if(!(((((_la - 49)) & ~0x1f) == 0 && ((1 << (_la - 49)) & ((1 << (LexicoParser.T__48 - 49)) | (1 << (LexicoParser.T__49 - 49)) | (1 << (LexicoParser.T__50 - 49)) | (1 << (LexicoParser.T__51 - 49)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 320;
                    this.expr(11);
                    break;

                case 5:
                    localctx = new IgualContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, LexicoParser.RULE_expr);
                    this.state = 321;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 322;
                    this.match(LexicoParser.T__52);
                    this.state = 323;
                    this.expr(10);
                    break;

                case 6:
                    localctx = new DiferenteContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, LexicoParser.RULE_expr);
                    this.state = 324;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 325;
                    _la = this._input.LA(1);
                    if(!(_la===LexicoParser.T__53 || _la===LexicoParser.T__54)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 326;
                    this.expr(9);
                    break;

                case 7:
                    localctx = new YTambienContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, LexicoParser.RULE_expr);
                    this.state = 327;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 328;
                    this.match(LexicoParser.T__55);
                    this.state = 329;
                    this.expr(8);
                    break;

                case 8:
                    localctx = new OMasBienContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, LexicoParser.RULE_expr);
                    this.state = 330;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 331;
                    this.match(LexicoParser.T__56);
                    this.state = 332;
                    this.expr(7);
                    break;

                }
            }
            this.state = 337;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,44,this._ctx);
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

function UsoListaExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LexicoParser.RULE_usoListaExpr;
    return this;
}

UsoListaExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UsoListaExprContext.prototype.constructor = UsoListaExprContext;

UsoListaExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

UsoListaExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterUsoListaExpr(this);
	}
};

UsoListaExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitUsoListaExpr(this);
	}
};




LexicoParser.UsoListaExprContext = UsoListaExprContext;

LexicoParser.prototype.usoListaExpr = function() {

    var localctx = new UsoListaExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, LexicoParser.RULE_usoListaExpr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 339;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LexicoParser.T__59 || _la===LexicoParser.T__60) {
            this.state = 338;
            _la = this._input.LA(1);
            if(!(_la===LexicoParser.T__59 || _la===LexicoParser.T__60)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
        }

        this.state = 341;
        this.expr(0);
        this.state = 349;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LexicoParser.T__38) {
            this.state = 342;
            this.match(LexicoParser.T__38);
            this.state = 344;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===LexicoParser.T__59 || _la===LexicoParser.T__60) {
                this.state = 343;
                _la = this._input.LA(1);
                if(!(_la===LexicoParser.T__59 || _la===LexicoParser.T__60)) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                }
            }

            this.state = 346;
            this.expr(0);
            this.state = 351;
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

function ListaVarContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LexicoParser.RULE_listaVar;
    return this;
}

ListaVarContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListaVarContext.prototype.constructor = ListaVarContext;

ListaVarContext.prototype.variable = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VariableContext);
    } else {
        return this.getTypedRuleContext(VariableContext,i);
    }
};

ListaVarContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterListaVar(this);
	}
};

ListaVarContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitListaVar(this);
	}
};




LexicoParser.ListaVarContext = ListaVarContext;

LexicoParser.prototype.listaVar = function() {

    var localctx = new ListaVarContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, LexicoParser.RULE_listaVar);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 352;
        this.variable();
        this.state = 357;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LexicoParser.T__38) {
            this.state = 353;
            this.match(LexicoParser.T__38);
            this.state = 354;
            this.variable();
            this.state = 359;
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

function ParametroContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LexicoParser.RULE_parametro;
    return this;
}

ParametroContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParametroContext.prototype.constructor = ParametroContext;

ParametroContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

ParametroContext.prototype.ID = function() {
    return this.getToken(LexicoParser.ID, 0);
};

ParametroContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterParametro(this);
	}
};

ParametroContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitParametro(this);
	}
};




LexicoParser.ParametroContext = ParametroContext;

LexicoParser.prototype.parametro = function() {

    var localctx = new ParametroContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, LexicoParser.RULE_parametro);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 361;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LexicoParser.T__61 || _la===LexicoParser.T__62) {
            this.state = 360;
            _la = this._input.LA(1);
            if(!(_la===LexicoParser.T__61 || _la===LexicoParser.T__62)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
        }

        this.state = 363;
        this.variable();
        this.state = 369;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LexicoParser.T__14) {
            this.state = 364;
            this.match(LexicoParser.T__14);
            this.state = 366;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===LexicoParser.T__31 || _la===LexicoParser.T__32) {
                this.state = 365;
                _la = this._input.LA(1);
                if(!(_la===LexicoParser.T__31 || _la===LexicoParser.T__32)) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                }
            }

            this.state = 368;
            this.match(LexicoParser.ID);
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

function ParamsEntradaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LexicoParser.RULE_paramsEntrada;
    return this;
}

ParamsEntradaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParamsEntradaContext.prototype.constructor = ParamsEntradaContext;

ParamsEntradaContext.prototype.parametro = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ParametroContext);
    } else {
        return this.getTypedRuleContext(ParametroContext,i);
    }
};

ParamsEntradaContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterParamsEntrada(this);
	}
};

ParamsEntradaContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitParamsEntrada(this);
	}
};




LexicoParser.ParamsEntradaContext = ParamsEntradaContext;

LexicoParser.prototype.paramsEntrada = function() {

    var localctx = new ParamsEntradaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, LexicoParser.RULE_paramsEntrada);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 371;
        this.parametro();
        this.state = 376;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LexicoParser.T__38) {
            this.state = 372;
            this.match(LexicoParser.T__38);
            this.state = 373;
            this.parametro();
            this.state = 378;
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

function VariableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LexicoParser.RULE_variable;
    return this;
}

VariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableContext.prototype.constructor = VariableContext;

VariableContext.prototype.ID = function() {
    return this.getToken(LexicoParser.ID, 0);
};

VariableContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

VariableContext.prototype.enterRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.enterVariable(this);
	}
};

VariableContext.prototype.exitRule = function(listener) {
    if(listener instanceof LexicoListener ) {
        listener.exitVariable(this);
	}
};




LexicoParser.VariableContext = VariableContext;

LexicoParser.prototype.variable = function() {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, LexicoParser.RULE_variable);
    var _la = 0; // Token type
    try {
        this.state = 392;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,54,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 379;
            this.match(LexicoParser.ID);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 380;
            this.match(LexicoParser.ID);
            this.state = 381;
            this.match(LexicoParser.T__37);
            this.state = 382;
            this.expr(0);
            this.state = 387;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===LexicoParser.T__38) {
                this.state = 383;
                this.match(LexicoParser.T__38);
                this.state = 384;
                this.expr(0);
                this.state = 389;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 390;
            this.match(LexicoParser.T__39);
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
	case 19:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

LexicoParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 13);
		case 1:
			return this.precpred(this._ctx, 12);
		case 2:
			return this.precpred(this._ctx, 11);
		case 3:
			return this.precpred(this._ctx, 10);
		case 4:
			return this.precpred(this._ctx, 9);
		case 5:
			return this.precpred(this._ctx, 8);
		case 6:
			return this.precpred(this._ctx, 7);
		case 7:
			return this.precpred(this._ctx, 6);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.LexicoParser = LexicoParser;

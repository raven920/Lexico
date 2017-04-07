// Generated from /home/raven/IdeaProjects/antlrtest/grammar/Lexico.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');
var LexicoListener = require('./LexicoListener').LexicoListener;
var grammarFileName = "Lexico.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u00039\u0101\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0003\u0002\u0007",
    "\u0002(\n\u0002\f\u0002\u000e\u0002+\u000b\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0007\u00058\n\u0005\f\u0005\u000e",
    "\u0005;\u000b\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0005\u0006I\n\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006P\n\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006",
    "^\n\u0006\f\u0006\u000e\u0006a\u000b\u0006\u0005\u0006c\n\u0006\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0005\nr\n\n",
    "\u0003\n\u0005\nu\n\n\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b",
    "z\n\u000b\u0003\f\u0003\f\u0003\f\u0005\f\u007f\n\f\u0003\r\u0003\r",
    "\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0005\r\u008d\n\r\u0003\u000e\u0003\u000e\u0003\u000e\u0005",
    "\u000e\u0092\n\u000e\u0003\u000e\u0005\u000e\u0095\n\u000e\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0007\u000f",
    "\u009d\n\u000f\f\u000f\u000e\u000f\u00a0\u000b\u000f\u0003\u000f\u0003",
    "\u000f\u0005\u000f\u00a4\n\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0005\u000f\u00a9\n\u000f\u0003\u000f\u0005\u000f\u00ac\n\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0007\u0010\u00b2\n\u0010",
    "\f\u0010\u000e\u0010\u00b5\u000b\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00c3\n\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0007\u0010\u00d7\n\u0010\f\u0010\u000e\u0010\u00da\u000b\u0010\u0003",
    "\u0011\u0005\u0011\u00dd\n\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0005\u0011\u00e2\n\u0011\u0003\u0011\u0007\u0011\u00e5\n\u0011\f\u0011",
    "\u000e\u0011\u00e8\u000b\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0007",
    "\u0012\u00ed\n\u0012\f\u0012\u000e\u0012\u00f0\u000b\u0012\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0007\u0013",
    "\u00f8\n\u0013\f\u0013\u000e\u0013\u00fb\u000b\u0013\u0003\u0013\u0003",
    "\u0013\u0005\u0013\u00ff\n\u0013\u0003\u0013\u0002\u0003\u001e\u0014",
    "\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c",
    "\u001e \"$\u0002\b\u0003\u0002\u0017\u0018\u0003\u0002\"#\u0003\u0002",
    "%\'\u0003\u0002(+\u0003\u0002,-\u0003\u000223\u011a\u0002)\u0003\u0002",
    "\u0002\u0002\u0004/\u0003\u0002\u0002\u0002\u00062\u0003\u0002\u0002",
    "\u0002\b5\u0003\u0002\u0002\u0002\nb\u0003\u0002\u0002\u0002\fd\u0003",
    "\u0002\u0002\u0002\u000ek\u0003\u0002\u0002\u0002\u0010m\u0003\u0002",
    "\u0002\u0002\u0012t\u0003\u0002\u0002\u0002\u0014v\u0003\u0002\u0002",
    "\u0002\u0016{\u0003\u0002\u0002\u0002\u0018\u008c\u0003\u0002\u0002",
    "\u0002\u001a\u008e\u0003\u0002\u0002\u0002\u001c\u00ab\u0003\u0002\u0002",
    "\u0002\u001e\u00c2\u0003\u0002\u0002\u0002 \u00dc\u0003\u0002\u0002",
    "\u0002\"\u00e9\u0003\u0002\u0002\u0002$\u00fe\u0003\u0002\u0002\u0002",
    "&(\u0005\u0004\u0003\u0002\'&\u0003\u0002\u0002\u0002(+\u0003\u0002",
    "\u0002\u0002)\'\u0003\u0002\u0002\u0002)*\u0003\u0002\u0002\u0002*,",
    "\u0003\u0002\u0002\u0002+)\u0003\u0002\u0002\u0002,-\u0005\u0006\u0004",
    "\u0002-.\u0007\u0002\u0002\u0003.\u0003\u0003\u0002\u0002\u0002/0\u0007",
    "\u0003\u0002\u000201\u00076\u0002\u00021\u0005\u0003\u0002\u0002\u0002",
    "23\u0007\u0004\u0002\u000234\u0005\b\u0005\u00024\u0007\u0003\u0002",
    "\u0002\u000259\u0007\u0005\u0002\u000268\u0005\n\u0006\u000276\u0003",
    "\u0002\u0002\u00028;\u0003\u0002\u0002\u000297\u0003\u0002\u0002\u0002",
    "9:\u0003\u0002\u0002\u0002:<\u0003\u0002\u0002\u0002;9\u0003\u0002\u0002",
    "\u0002<=\u0007\u0006\u0002\u0002=\t\u0003\u0002\u0002\u0002>c\u0005",
    "\u0018\r\u0002?@\u0007\u0007\u0002\u0002@A\u0005\u000e\b\u0002AB\u0007",
    "\b\u0002\u0002BC\u0005\u0012\n\u0002Cc\u0003\u0002\u0002\u0002DE\u0007",
    "\t\u0002\u0002EH\u0005\f\u0007\u0002FI\u0005\b\u0005\u0002GI\u0005\n",
    "\u0006\u0002HF\u0003\u0002\u0002\u0002HG\u0003\u0002\u0002\u0002Ic\u0003",
    "\u0002\u0002\u0002JK\u0007\n\u0002\u0002KL\u0005\u0010\t\u0002LO\u0007",
    "\u000b\u0002\u0002MP\u0005\b\u0005\u0002NP\u0005\n\u0006\u0002OM\u0003",
    "\u0002\u0002\u0002ON\u0003\u0002\u0002\u0002Pc\u0003\u0002\u0002\u0002",
    "QR\u0007\f\u0002\u0002RS\u0005\u001e\u0010\u0002ST\u0007\r\u0002\u0002",
    "TU\u0005\"\u0012\u0002Uc\u0003\u0002\u0002\u0002VW\u0007\u000e\u0002",
    "\u0002Wc\u0005\"\u0012\u0002XY\u0007\u000f\u0002\u0002Yc\u0005 \u0011",
    "\u0002Z_\u0005\u001c\u000f\u0002[\\\u0007\u0010\u0002\u0002\\^\u0005",
    "\u001c\u000f\u0002][\u0003\u0002\u0002\u0002^a\u0003\u0002\u0002\u0002",
    "_]\u0003\u0002\u0002\u0002_`\u0003\u0002\u0002\u0002`c\u0003\u0002\u0002",
    "\u0002a_\u0003\u0002\u0002\u0002b>\u0003\u0002\u0002\u0002b?\u0003\u0002",
    "\u0002\u0002bD\u0003\u0002\u0002\u0002bJ\u0003\u0002\u0002\u0002bQ\u0003",
    "\u0002\u0002\u0002bV\u0003\u0002\u0002\u0002bX\u0003\u0002\u0002\u0002",
    "bZ\u0003\u0002\u0002\u0002c\u000b\u0003\u0002\u0002\u0002de\u0005\u001c",
    "\u000f\u0002ef\u0007\u0011\u0002\u0002fg\u0005\u001e\u0010\u0002gh\u0007",
    "\u0012\u0002\u0002hi\u0005\u001e\u0010\u0002ij\u0007\u000b\u0002\u0002",
    "j\r\u0003\u0002\u0002\u0002kl\u0005\u001e\u0010\u0002l\u000f\u0003\u0002",
    "\u0002\u0002mn\u0005\u001e\u0010\u0002n\u0011\u0003\u0002\u0002\u0002",
    "oq\u0005\u0014\u000b\u0002pr\u0005\u0016\f\u0002qp\u0003\u0002\u0002",
    "\u0002qr\u0003\u0002\u0002\u0002ru\u0003\u0002\u0002\u0002su\u0005\u0016",
    "\f\u0002to\u0003\u0002\u0002\u0002ts\u0003\u0002\u0002\u0002u\u0013",
    "\u0003\u0002\u0002\u0002vy\u0007\u0013\u0002\u0002wz\u0005\b\u0005\u0002",
    "xz\u0005\n\u0006\u0002yw\u0003\u0002\u0002\u0002yx\u0003\u0002\u0002",
    "\u0002z\u0015\u0003\u0002\u0002\u0002{~\u0007\u0014\u0002\u0002|\u007f",
    "\u0005\b\u0005\u0002}\u007f\u0005\n\u0006\u0002~|\u0003\u0002\u0002",
    "\u0002~}\u0003\u0002\u0002\u0002\u007f\u0017\u0003\u0002\u0002\u0002",
    "\u0080\u0081\u0007\u0015\u0002\u0002\u0081\u0082\u0007\u0016\u0002\u0002",
    "\u0082\u0083\u00074\u0002\u0002\u0083\u0084\u0007\u0007\u0002\u0002",
    "\u0084\u0085\t\u0002\u0002\u0002\u0085\u008d\u0005\u001a\u000e\u0002",
    "\u0086\u0087\u0007\u0019\u0002\u0002\u0087\u0088\u0007\u001a\u0002\u0002",
    "\u0088\u0089\u0005\"\u0012\u0002\u0089\u008a\u0007\u001b\u0002\u0002",
    "\u008a\u008b\u0005\u001a\u000e\u0002\u008b\u008d\u0003\u0002\u0002\u0002",
    "\u008c\u0080\u0003\u0002\u0002\u0002\u008c\u0086\u0003\u0002\u0002\u0002",
    "\u008d\u0019\u0003\u0002\u0002\u0002\u008e\u0094\u00074\u0002\u0002",
    "\u008f\u0091\u0007\u001c\u0002\u0002\u0090\u0092\u0005 \u0011\u0002",
    "\u0091\u0090\u0003\u0002\u0002\u0002\u0091\u0092\u0003\u0002\u0002\u0002",
    "\u0092\u0093\u0003\u0002\u0002\u0002\u0093\u0095\u0007\u001d\u0002\u0002",
    "\u0094\u008f\u0003\u0002\u0002\u0002\u0094\u0095\u0003\u0002\u0002\u0002",
    "\u0095\u001b\u0003\u0002\u0002\u0002\u0096\u00ac\u00074\u0002\u0002",
    "\u0097\u0098\u00074\u0002\u0002\u0098\u0099\u0007\u001e\u0002\u0002",
    "\u0099\u009e\u0005\u001e\u0010\u0002\u009a\u009b\u0007\u001f\u0002\u0002",
    "\u009b\u009d\u0005\u001e\u0010\u0002\u009c\u009a\u0003\u0002\u0002\u0002",
    "\u009d\u00a0\u0003\u0002\u0002\u0002\u009e\u009c\u0003\u0002\u0002\u0002",
    "\u009e\u009f\u0003\u0002\u0002\u0002\u009f\u00a1\u0003\u0002\u0002\u0002",
    "\u00a0\u009e\u0003\u0002\u0002\u0002\u00a1\u00a3\u0007 \u0002\u0002",
    "\u00a2\u00a4\u0007!\u0002\u0002\u00a3\u00a2\u0003\u0002\u0002\u0002",
    "\u00a3\u00a4\u0003\u0002\u0002\u0002\u00a4\u00ac\u0003\u0002\u0002\u0002",
    "\u00a5\u00a6\u00074\u0002\u0002\u00a6\u00a8\u0007\u001c\u0002\u0002",
    "\u00a7\u00a9\u0005 \u0011\u0002\u00a8\u00a7\u0003\u0002\u0002\u0002",
    "\u00a8\u00a9\u0003\u0002\u0002\u0002\u00a9\u00aa\u0003\u0002\u0002\u0002",
    "\u00aa\u00ac\u0007\u001d\u0002\u0002\u00ab\u0096\u0003\u0002\u0002\u0002",
    "\u00ab\u0097\u0003\u0002\u0002\u0002\u00ab\u00a5\u0003\u0002\u0002\u0002",
    "\u00ac\u001d\u0003\u0002\u0002\u0002\u00ad\u00ae\b\u0010\u0001\u0002",
    "\u00ae\u00b3\u0005\u001c\u000f\u0002\u00af\u00b0\u0007\u0010\u0002\u0002",
    "\u00b0\u00b2\u0005\u001c\u000f\u0002\u00b1\u00af\u0003\u0002\u0002\u0002",
    "\u00b2\u00b5\u0003\u0002\u0002\u0002\u00b3\u00b1\u0003\u0002\u0002\u0002",
    "\u00b3\u00b4\u0003\u0002\u0002\u0002\u00b4\u00c3\u0003\u0002\u0002\u0002",
    "\u00b5\u00b3\u0003\u0002\u0002\u0002\u00b6\u00b7\t\u0003\u0002\u0002",
    "\u00b7\u00c3\u0005\u001e\u0010\u000f\u00b8\u00b9\u0007$\u0002\u0002",
    "\u00b9\u00c3\u0005\u001e\u0010\u000e\u00ba\u00c3\u00070\u0002\u0002",
    "\u00bb\u00c3\u00071\u0002\u0002\u00bc\u00c3\u00075\u0002\u0002\u00bd",
    "\u00c3\u00076\u0002\u0002\u00be\u00bf\u0007\u001c\u0002\u0002\u00bf",
    "\u00c0\u0005\u001e\u0010\u0002\u00c0\u00c1\u0007\u001d\u0002\u0002\u00c1",
    "\u00c3\u0003\u0002\u0002\u0002\u00c2\u00ad\u0003\u0002\u0002\u0002\u00c2",
    "\u00b6\u0003\u0002\u0002\u0002\u00c2\u00b8\u0003\u0002\u0002\u0002\u00c2",
    "\u00ba\u0003\u0002\u0002\u0002\u00c2\u00bb\u0003\u0002\u0002\u0002\u00c2",
    "\u00bc\u0003\u0002\u0002\u0002\u00c2\u00bd\u0003\u0002\u0002\u0002\u00c2",
    "\u00be\u0003\u0002\u0002\u0002\u00c3\u00d8\u0003\u0002\u0002\u0002\u00c4",
    "\u00c5\f\r\u0002\u0002\u00c5\u00c6\t\u0004\u0002\u0002\u00c6\u00d7\u0005",
    "\u001e\u0010\u000e\u00c7\u00c8\f\f\u0002\u0002\u00c8\u00c9\t\u0003\u0002",
    "\u0002\u00c9\u00d7\u0005\u001e\u0010\r\u00ca\u00cb\f\u000b\u0002\u0002",
    "\u00cb\u00cc\t\u0005\u0002\u0002\u00cc\u00d7\u0005\u001e\u0010\f\u00cd",
    "\u00ce\f\n\u0002\u0002\u00ce\u00cf\t\u0006\u0002\u0002\u00cf\u00d7\u0005",
    "\u001e\u0010\u000b\u00d0\u00d1\f\t\u0002\u0002\u00d1\u00d2\u0007.\u0002",
    "\u0002\u00d2\u00d7\u0005\u001e\u0010\n\u00d3\u00d4\f\b\u0002\u0002\u00d4",
    "\u00d5\u0007/\u0002\u0002\u00d5\u00d7\u0005\u001e\u0010\t\u00d6\u00c4",
    "\u0003\u0002\u0002\u0002\u00d6\u00c7\u0003\u0002\u0002\u0002\u00d6\u00ca",
    "\u0003\u0002\u0002\u0002\u00d6\u00cd\u0003\u0002\u0002\u0002\u00d6\u00d0",
    "\u0003\u0002\u0002\u0002\u00d6\u00d3\u0003\u0002\u0002\u0002\u00d7\u00da",
    "\u0003\u0002\u0002\u0002\u00d8\u00d6\u0003\u0002\u0002\u0002\u00d8\u00d9",
    "\u0003\u0002\u0002\u0002\u00d9\u001f\u0003\u0002\u0002\u0002\u00da\u00d8",
    "\u0003\u0002\u0002\u0002\u00db\u00dd\t\u0007\u0002\u0002\u00dc\u00db",
    "\u0003\u0002\u0002\u0002\u00dc\u00dd\u0003\u0002\u0002\u0002\u00dd\u00de",
    "\u0003\u0002\u0002\u0002\u00de\u00e6\u0005\u001e\u0010\u0002\u00df\u00e1",
    "\u0007\u001f\u0002\u0002\u00e0\u00e2\t\u0007\u0002\u0002\u00e1\u00e0",
    "\u0003\u0002\u0002\u0002\u00e1\u00e2\u0003\u0002\u0002\u0002\u00e2\u00e3",
    "\u0003\u0002\u0002\u0002\u00e3\u00e5\u0005\u001e\u0010\u0002\u00e4\u00df",
    "\u0003\u0002\u0002\u0002\u00e5\u00e8\u0003\u0002\u0002\u0002\u00e6\u00e4",
    "\u0003\u0002\u0002\u0002\u00e6\u00e7\u0003\u0002\u0002\u0002\u00e7!",
    "\u0003\u0002\u0002\u0002\u00e8\u00e6\u0003\u0002\u0002\u0002\u00e9\u00ee",
    "\u0005$\u0013\u0002\u00ea\u00eb\u0007\u001f\u0002\u0002\u00eb\u00ed",
    "\u0005$\u0013\u0002\u00ec\u00ea\u0003\u0002\u0002\u0002\u00ed\u00f0",
    "\u0003\u0002\u0002\u0002\u00ee\u00ec\u0003\u0002\u0002\u0002\u00ee\u00ef",
    "\u0003\u0002\u0002\u0002\u00ef#\u0003\u0002\u0002\u0002\u00f0\u00ee",
    "\u0003\u0002\u0002\u0002\u00f1\u00ff\u00074\u0002\u0002\u00f2\u00f3",
    "\u00074\u0002\u0002\u00f3\u00f4\u0007\u001e\u0002\u0002\u00f4\u00f9",
    "\u0005\u001e\u0010\u0002\u00f5\u00f6\u0007\u001f\u0002\u0002\u00f6\u00f8",
    "\u0005\u001e\u0010\u0002\u00f7\u00f5\u0003\u0002\u0002\u0002\u00f8\u00fb",
    "\u0003\u0002\u0002\u0002\u00f9\u00f7\u0003\u0002\u0002\u0002\u00f9\u00fa",
    "\u0003\u0002\u0002\u0002\u00fa\u00fc\u0003\u0002\u0002\u0002\u00fb\u00f9",
    "\u0003\u0002\u0002\u0002\u00fc\u00fd\u0007 \u0002\u0002\u00fd\u00ff",
    "\u0003\u0002\u0002\u0002\u00fe\u00f1\u0003\u0002\u0002\u0002\u00fe\u00f2",
    "\u0003\u0002\u0002\u0002\u00ff%\u0003\u0002\u0002\u0002\u001d)9HO_b",
    "qty~\u008c\u0091\u0094\u009e\u00a3\u00a8\u00ab\u00b3\u00c2\u00d6\u00d8",
    "\u00dc\u00e1\u00e6\u00ee\u00f9\u00fe"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'incluya'", "'tarea'", "'{'", "'}'", "'es'",
                     "'?'", "'variando'", "'mientras'", "'haga:'", "'copie'",
                     "'en'", "'entre'", "'muestre'", "'.'", "'desde'", "'hasta'",
                     "'si:'", "'no:'", "'el'", "'objeto'", "'una'", "'un'",
                     "'los'", "'objetos'", "'son'", "'('", "')'", "'['",
                     "','", "']'", "'no_validar'", "'-'", "'+'", "'~'",
                     "'*'", "'/'", "'%'", "'<'", "'>'", "'<='", "'>='",
                     "'=='", "'!='", "'&'", "'|'", "'verdadero'", "'falso'",
                     "'doy'", "'sale'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null,
                      null, null, null, null, null, null, null, null, null,
                      null, null, null, null, null, null, null, null, null,
                      null, null, null, null, null, null, null, null, null,
                      null, null, null, null, null, null, null, null, null,
                      null, null, null, null, null, "ID", "INT", "STRING",
                      "COMMENT", "LINE_COMMENT", "WS" ];

var ruleNames =  [ "prog", "incluya", "tarea", "bloque", "sent", "condVariando",
                   "exprCond", "exprMientras", "restoCond", "siCond", "noCond",
                   "declaracionVar", "constructor", "consultable", "expr",
                   "usoListaExpr", "listaVar", "variable" ];

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
LexicoParser.ID = 50;
LexicoParser.INT = 51;
LexicoParser.STRING = 52;
LexicoParser.COMMENT = 53;
LexicoParser.LINE_COMMENT = 54;
LexicoParser.WS = 55;

LexicoParser.RULE_prog = 0;
LexicoParser.RULE_incluya = 1;
LexicoParser.RULE_tarea = 2;
LexicoParser.RULE_bloque = 3;
LexicoParser.RULE_sent = 4;
LexicoParser.RULE_condVariando = 5;
LexicoParser.RULE_exprCond = 6;
LexicoParser.RULE_exprMientras = 7;
LexicoParser.RULE_restoCond = 8;
LexicoParser.RULE_siCond = 9;
LexicoParser.RULE_noCond = 10;
LexicoParser.RULE_declaracionVar = 11;
LexicoParser.RULE_constructor = 12;
LexicoParser.RULE_consultable = 13;
LexicoParser.RULE_expr = 14;
LexicoParser.RULE_usoListaExpr = 15;
LexicoParser.RULE_listaVar = 16;
LexicoParser.RULE_variable = 17;

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
        this.state = 39;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LexicoParser.T__0) {
            this.state = 36;
            this.incluya();
            this.state = 41;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 42;
        this.tarea();
        this.state = 43;
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
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 45;
        this.match(LexicoParser.T__0);
        this.state = 46;
        this.match(LexicoParser.STRING);
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
        this.state = 48;
        this.match(LexicoParser.T__1);
        this.state = 49;
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
    this.enterRule(localctx, 6, LexicoParser.RULE_bloque);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 51;
        this.match(LexicoParser.T__2);
        this.state = 55;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LexicoParser.T__4) | (1 << LexicoParser.T__6) | (1 << LexicoParser.T__7) | (1 << LexicoParser.T__9) | (1 << LexicoParser.T__11) | (1 << LexicoParser.T__12) | (1 << LexicoParser.T__18) | (1 << LexicoParser.T__22))) !== 0) || _la===LexicoParser.ID) {
            this.state = 52;
            this.sent();
            this.state = 57;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 58;
        this.match(LexicoParser.T__3);
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
    this.enterRule(localctx, 8, LexicoParser.RULE_sent);
    var _la = 0; // Token type
    try {
        this.state = 96;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LexicoParser.T__18:
        case LexicoParser.T__22:
            localctx = new SentDeclaracionContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 60;
            this.declaracionVar();
            break;
        case LexicoParser.T__4:
            localctx = new CondicionalContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 61;
            this.match(LexicoParser.T__4);
            this.state = 62;
            this.exprCond();
            this.state = 63;
            this.match(LexicoParser.T__5);
            this.state = 64;
            this.restoCond();
            break;
        case LexicoParser.T__6:
            localctx = new VariandoContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 66;
            this.match(LexicoParser.T__6);
            this.state = 67;
            this.condVariando();
            this.state = 70;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case LexicoParser.T__2:
                this.state = 68;
                this.bloque();
                break;
            case LexicoParser.T__4:
            case LexicoParser.T__6:
            case LexicoParser.T__7:
            case LexicoParser.T__9:
            case LexicoParser.T__11:
            case LexicoParser.T__12:
            case LexicoParser.T__18:
            case LexicoParser.T__22:
            case LexicoParser.ID:
                this.state = 69;
                this.sent();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            break;
        case LexicoParser.T__7:
            localctx = new MientrasContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 72;
            this.match(LexicoParser.T__7);
            this.state = 73;
            this.exprMientras();
            this.state = 74;
            this.match(LexicoParser.T__8);
            this.state = 77;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case LexicoParser.T__2:
                this.state = 75;
                this.bloque();
                break;
            case LexicoParser.T__4:
            case LexicoParser.T__6:
            case LexicoParser.T__7:
            case LexicoParser.T__9:
            case LexicoParser.T__11:
            case LexicoParser.T__12:
            case LexicoParser.T__18:
            case LexicoParser.T__22:
            case LexicoParser.ID:
                this.state = 76;
                this.sent();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            break;
        case LexicoParser.T__9:
            localctx = new CopieEnContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 79;
            this.match(LexicoParser.T__9);
            this.state = 80;
            this.expr(0);
            this.state = 81;
            this.match(LexicoParser.T__10);
            this.state = 82;
            this.listaVar();
            break;
        case LexicoParser.T__11:
            localctx = new EntreContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 84;
            this.match(LexicoParser.T__11);
            this.state = 85;
            this.listaVar();
            break;
        case LexicoParser.T__12:
            localctx = new MuestreContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 86;
            this.match(LexicoParser.T__12);
            this.state = 87;
            this.usoListaExpr();
            break;
        case LexicoParser.ID:
            localctx = new ConsultaSencillaContext(this, localctx);
            this.enterOuterAlt(localctx, 8);
            this.state = 88;
            this.consultable();
            this.state = 93;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===LexicoParser.T__13) {
                this.state = 89;
                this.match(LexicoParser.T__13);
                this.state = 90;
                this.consultable();
                this.state = 95;
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
    this.enterRule(localctx, 10, LexicoParser.RULE_condVariando);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 98;
        this.consultable();
        this.state = 99;
        this.match(LexicoParser.T__14);
        this.state = 100;
        this.expr(0);
        this.state = 101;
        this.match(LexicoParser.T__15);
        this.state = 102;
        this.expr(0);
        this.state = 103;
        this.match(LexicoParser.T__8);
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
    this.enterRule(localctx, 12, LexicoParser.RULE_exprCond);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 105;
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
    this.enterRule(localctx, 14, LexicoParser.RULE_exprMientras);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 107;
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
    this.enterRule(localctx, 16, LexicoParser.RULE_restoCond);
    try {
        this.state = 114;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LexicoParser.T__16:
            localctx = new SiYNoCondContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 109;
            this.siCond();
            this.state = 111;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
            if(la_===1) {
                this.state = 110;
                this.noCond();

            }
            break;
        case LexicoParser.T__17:
            localctx = new SoloNoCondContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 113;
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
    this.enterRule(localctx, 18, LexicoParser.RULE_siCond);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 116;
        this.match(LexicoParser.T__16);
        this.state = 119;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LexicoParser.T__2:
            this.state = 117;
            this.bloque();
            break;
        case LexicoParser.T__4:
        case LexicoParser.T__6:
        case LexicoParser.T__7:
        case LexicoParser.T__9:
        case LexicoParser.T__11:
        case LexicoParser.T__12:
        case LexicoParser.T__18:
        case LexicoParser.T__22:
        case LexicoParser.ID:
            this.state = 118;
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
    this.enterRule(localctx, 20, LexicoParser.RULE_noCond);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 121;
        this.match(LexicoParser.T__17);
        this.state = 124;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LexicoParser.T__2:
            this.state = 122;
            this.bloque();
            break;
        case LexicoParser.T__4:
        case LexicoParser.T__6:
        case LexicoParser.T__7:
        case LexicoParser.T__9:
        case LexicoParser.T__11:
        case LexicoParser.T__12:
        case LexicoParser.T__18:
        case LexicoParser.T__22:
        case LexicoParser.ID:
            this.state = 123;
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
    this.enterRule(localctx, 22, LexicoParser.RULE_declaracionVar);
    var _la = 0; // Token type
    try {
        this.state = 138;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LexicoParser.T__18:
            localctx = new DeclaracionUnaVarContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 126;
            this.match(LexicoParser.T__18);
            this.state = 127;
            this.match(LexicoParser.T__19);
            this.state = 128;
            this.match(LexicoParser.ID);
            this.state = 129;
            this.match(LexicoParser.T__4);
            this.state = 130;
            _la = this._input.LA(1);
            if(!(_la===LexicoParser.T__20 || _la===LexicoParser.T__21)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 131;
            this.constructor();
            break;
        case LexicoParser.T__22:
            localctx = new DeclaracionVariasVarContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 132;
            this.match(LexicoParser.T__22);
            this.state = 133;
            this.match(LexicoParser.T__23);
            this.state = 134;
            this.listaVar();
            this.state = 135;
            this.match(LexicoParser.T__24);
            this.state = 136;
            this.constructor();
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
    this.enterRule(localctx, 24, LexicoParser.RULE_constructor);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 140;
        this.match(LexicoParser.ID);
        this.state = 146;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LexicoParser.T__25) {
            this.state = 141;
            this.match(LexicoParser.T__25);
            this.state = 143;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 26)) & ~0x1f) == 0 && ((1 << (_la - 26)) & ((1 << (LexicoParser.T__25 - 26)) | (1 << (LexicoParser.T__31 - 26)) | (1 << (LexicoParser.T__32 - 26)) | (1 << (LexicoParser.T__33 - 26)) | (1 << (LexicoParser.T__45 - 26)) | (1 << (LexicoParser.T__46 - 26)) | (1 << (LexicoParser.T__47 - 26)) | (1 << (LexicoParser.T__48 - 26)) | (1 << (LexicoParser.ID - 26)) | (1 << (LexicoParser.INT - 26)) | (1 << (LexicoParser.STRING - 26)))) !== 0)) {
                this.state = 142;
                this.usoListaExpr();
            }

            this.state = 145;
            this.match(LexicoParser.T__26);
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
    this.enterRule(localctx, 26, LexicoParser.RULE_consultable);
    var _la = 0; // Token type
    try {
        this.state = 169;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
        switch(la_) {
        case 1:
            localctx = new UsoVarContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 148;
            this.match(LexicoParser.ID);
            break;

        case 2:
            localctx = new UsoArregloContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 149;
            this.match(LexicoParser.ID);
            this.state = 150;
            this.match(LexicoParser.T__27);
            this.state = 151;
            this.expr(0);
            this.state = 156;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===LexicoParser.T__28) {
                this.state = 152;
                this.match(LexicoParser.T__28);
                this.state = 153;
                this.expr(0);
                this.state = 158;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 159;
            this.match(LexicoParser.T__29);
            this.state = 161;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
            if(la_===1) {
                this.state = 160;
                this.match(LexicoParser.T__30);

            }
            break;

        case 3:
            localctx = new UsoFuncionContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 163;
            this.match(LexicoParser.ID);

            this.state = 164;
            this.match(LexicoParser.T__25);
            this.state = 166;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 26)) & ~0x1f) == 0 && ((1 << (_la - 26)) & ((1 << (LexicoParser.T__25 - 26)) | (1 << (LexicoParser.T__31 - 26)) | (1 << (LexicoParser.T__32 - 26)) | (1 << (LexicoParser.T__33 - 26)) | (1 << (LexicoParser.T__45 - 26)) | (1 << (LexicoParser.T__46 - 26)) | (1 << (LexicoParser.T__47 - 26)) | (1 << (LexicoParser.T__48 - 26)) | (1 << (LexicoParser.ID - 26)) | (1 << (LexicoParser.INT - 26)) | (1 << (LexicoParser.STRING - 26)))) !== 0)) {
                this.state = 165;
                this.usoListaExpr();
            }

            this.state = 168;
            this.match(LexicoParser.T__26);
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
    var _startState = 28;
    this.enterRecursionRule(localctx, 28, LexicoParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 192;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LexicoParser.ID:
            localctx = new UsoConsultableContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 172;
            this.consultable();
            this.state = 177;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 173;
                    this.match(LexicoParser.T__13);
                    this.state = 174;
                    this.consultable();
                }
                this.state = 179;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
            }

            break;
        case LexicoParser.T__31:
        case LexicoParser.T__32:
            localctx = new UnarioContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 180;
            _la = this._input.LA(1);
            if(!(_la===LexicoParser.T__31 || _la===LexicoParser.T__32)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 181;
            this.expr(13);
            break;
        case LexicoParser.T__33:
            localctx = new NegacionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 182;
            this.match(LexicoParser.T__33);
            this.state = 183;
            this.expr(12);
            break;
        case LexicoParser.T__45:
            localctx = new VerdaderoContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 184;
            this.match(LexicoParser.T__45);
            break;
        case LexicoParser.T__46:
            localctx = new FalsoContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 185;
            this.match(LexicoParser.T__46);
            break;
        case LexicoParser.INT:
            localctx = new CantidadesContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 186;
            this.match(LexicoParser.INT);
            break;
        case LexicoParser.STRING:
            localctx = new CaracteresContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 187;
            this.match(LexicoParser.STRING);
            break;
        case LexicoParser.T__25:
            localctx = new ParentesisContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 188;
            this.match(LexicoParser.T__25);
            this.state = 189;
            this.expr(0);
            this.state = 190;
            this.match(LexicoParser.T__26);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 214;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,20,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 212;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new MultDivModContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, LexicoParser.RULE_expr);
                    this.state = 194;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 195;
                    _la = this._input.LA(1);
                    if(!(((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (LexicoParser.T__34 - 35)) | (1 << (LexicoParser.T__35 - 35)) | (1 << (LexicoParser.T__36 - 35)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 196;
                    this.expr(12);
                    break;

                case 2:
                    localctx = new SumaRestaContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, LexicoParser.RULE_expr);
                    this.state = 197;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 198;
                    _la = this._input.LA(1);
                    if(!(_la===LexicoParser.T__31 || _la===LexicoParser.T__32)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 199;
                    this.expr(11);
                    break;

                case 3:
                    localctx = new RelacionalContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, LexicoParser.RULE_expr);
                    this.state = 200;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 201;
                    _la = this._input.LA(1);
                    if(!(((((_la - 38)) & ~0x1f) == 0 && ((1 << (_la - 38)) & ((1 << (LexicoParser.T__37 - 38)) | (1 << (LexicoParser.T__38 - 38)) | (1 << (LexicoParser.T__39 - 38)) | (1 << (LexicoParser.T__40 - 38)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 202;
                    this.expr(10);
                    break;

                case 4:
                    localctx = new IgualdadContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, LexicoParser.RULE_expr);
                    this.state = 203;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 204;
                    _la = this._input.LA(1);
                    if(!(_la===LexicoParser.T__41 || _la===LexicoParser.T__42)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 205;
                    this.expr(9);
                    break;

                case 5:
                    localctx = new YTambienContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, LexicoParser.RULE_expr);
                    this.state = 206;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 207;
                    this.match(LexicoParser.T__43);
                    this.state = 208;
                    this.expr(8);
                    break;

                case 6:
                    localctx = new OMasBienContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, LexicoParser.RULE_expr);
                    this.state = 209;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 210;
                    this.match(LexicoParser.T__44);
                    this.state = 211;
                    this.expr(7);
                    break;

                }
            }
            this.state = 216;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,20,this._ctx);
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
    this.enterRule(localctx, 30, LexicoParser.RULE_usoListaExpr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 218;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LexicoParser.T__47 || _la===LexicoParser.T__48) {
            this.state = 217;
            _la = this._input.LA(1);
            if(!(_la===LexicoParser.T__47 || _la===LexicoParser.T__48)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
        }

        this.state = 220;
        this.expr(0);
        this.state = 228;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LexicoParser.T__28) {
            this.state = 221;
            this.match(LexicoParser.T__28);
            this.state = 223;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===LexicoParser.T__47 || _la===LexicoParser.T__48) {
                this.state = 222;
                _la = this._input.LA(1);
                if(!(_la===LexicoParser.T__47 || _la===LexicoParser.T__48)) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                }
            }

            this.state = 225;
            this.expr(0);
            this.state = 230;
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
    this.enterRule(localctx, 32, LexicoParser.RULE_listaVar);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 231;
        this.variable();
        this.state = 236;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LexicoParser.T__28) {
            this.state = 232;
            this.match(LexicoParser.T__28);
            this.state = 233;
            this.variable();
            this.state = 238;
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
    this.enterRule(localctx, 34, LexicoParser.RULE_variable);
    var _la = 0; // Token type
    try {
        this.state = 252;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 239;
            this.match(LexicoParser.ID);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 240;
            this.match(LexicoParser.ID);
            this.state = 241;
            this.match(LexicoParser.T__27);
            this.state = 242;
            this.expr(0);
            this.state = 247;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===LexicoParser.T__28) {
                this.state = 243;
                this.match(LexicoParser.T__28);
                this.state = 244;
                this.expr(0);
                this.state = 249;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 250;
            this.match(LexicoParser.T__29);
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
	case 14:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

LexicoParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 11);
		case 1:
			return this.precpred(this._ctx, 10);
		case 2:
			return this.precpred(this._ctx, 9);
		case 3:
			return this.precpred(this._ctx, 8);
		case 4:
			return this.precpred(this._ctx, 7);
		case 5:
			return this.precpred(this._ctx, 6);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.LexicoParser = LexicoParser;

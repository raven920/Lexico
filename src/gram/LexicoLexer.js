// Generated from /home/raven/IdeaProjects/antlrtest/grammar/Lexico.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u00029\u018f\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004",
    "*\t*\u0004+\t+\u0004,\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u0004",
    "1\t1\u00042\t2\u00043\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u0004",
    "8\t8\u00049\t9\u0004:\t:\u0004;\t;\u0004<\t<\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0003",
    "\u001b\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001e\u0003",
    "\u001e\u0003\u001f\u0003\u001f\u0003 \u0003 \u0003 \u0003 \u0003 \u0003",
    " \u0003 \u0003 \u0003 \u0003 \u0003 \u0003!\u0003!\u0003\"\u0003\"\u0003",
    "#\u0003#\u0003$\u0003$\u0003%\u0003%\u0003&\u0003&\u0003\'\u0003\'\u0003",
    "(\u0003(\u0003)\u0003)\u0003)\u0003*\u0003*\u0003*\u0003+\u0003+\u0003",
    "+\u0003,\u0003,\u0003,\u0003-\u0003-\u0003.\u0003.\u0003/\u0003/\u0003",
    "/\u0003/\u0003/\u0003/\u0003/\u0003/\u0003/\u0003/\u00030\u00030\u0003",
    "0\u00030\u00030\u00030\u00031\u00031\u00031\u00031\u00032\u00032\u0003",
    "2\u00032\u00032\u00033\u00033\u00033\u00073\u0148\n3\f3\u000e3\u014b",
    "\u000b3\u00034\u00064\u014e\n4\r4\u000e4\u014f\u00035\u00035\u00035",
    "\u00075\u0155\n5\f5\u000e5\u0158\u000b5\u00035\u00035\u00036\u00036",
    "\u00036\u00056\u015f\n6\u00037\u00037\u00037\u00037\u00037\u00037\u0003",
    "8\u00038\u00039\u00039\u0003:\u0003:\u0003:\u0003:\u0007:\u016f\n:\f",
    ":\u000e:\u0172\u000b:\u0003:\u0003:\u0003:\u0003:\u0003:\u0003;\u0003",
    ";\u0003;\u0003;\u0007;\u017d\n;\f;\u000e;\u0180\u000b;\u0003;\u0005",
    ";\u0183\n;\u0003;\u0003;\u0003;\u0003;\u0003<\u0006<\u018a\n<\r<\u000e",
    "<\u018b\u0003<\u0003<\u0004\u0170\u017e\u0002=\u0003\u0003\u0005\u0004",
    "\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015",
    "\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013",
    "%\u0014\'\u0015)\u0016+\u0017-\u0018/\u00191\u001a3\u001b5\u001c7\u001d",
    "9\u001e;\u001f= ?!A\"C#E$G%I&K\'M(O)Q*S+U,W-Y.[/]0_1a2c3e4g5i6k\u0002",
    "m\u0002o\u0002q\u0002s7u8w9\u0003\u0002\b\u0003\u00022;\u0004\u0002",
    "$$^^\n\u0002$$11^^ddhhppttvv\u0005\u00022;CHch\u0004\u0002C\\c|\u0005",
    "\u0002\u000b\f\u000f\u000f\"\"\u0194\u0002\u0003\u0003\u0002\u0002\u0002",
    "\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002",
    "\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002",
    "\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002",
    "\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002",
    "\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002",
    "\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002",
    "\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002",
    "\u0002!\u0003\u0002\u0002\u0002\u0002#\u0003\u0002\u0002\u0002\u0002",
    "%\u0003\u0002\u0002\u0002\u0002\'\u0003\u0002\u0002\u0002\u0002)\u0003",
    "\u0002\u0002\u0002\u0002+\u0003\u0002\u0002\u0002\u0002-\u0003\u0002",
    "\u0002\u0002\u0002/\u0003\u0002\u0002\u0002\u00021\u0003\u0002\u0002",
    "\u0002\u00023\u0003\u0002\u0002\u0002\u00025\u0003\u0002\u0002\u0002",
    "\u00027\u0003\u0002\u0002\u0002\u00029\u0003\u0002\u0002\u0002\u0002",
    ";\u0003\u0002\u0002\u0002\u0002=\u0003\u0002\u0002\u0002\u0002?\u0003",
    "\u0002\u0002\u0002\u0002A\u0003\u0002\u0002\u0002\u0002C\u0003\u0002",
    "\u0002\u0002\u0002E\u0003\u0002\u0002\u0002\u0002G\u0003\u0002\u0002",
    "\u0002\u0002I\u0003\u0002\u0002\u0002\u0002K\u0003\u0002\u0002\u0002",
    "\u0002M\u0003\u0002\u0002\u0002\u0002O\u0003\u0002\u0002\u0002\u0002",
    "Q\u0003\u0002\u0002\u0002\u0002S\u0003\u0002\u0002\u0002\u0002U\u0003",
    "\u0002\u0002\u0002\u0002W\u0003\u0002\u0002\u0002\u0002Y\u0003\u0002",
    "\u0002\u0002\u0002[\u0003\u0002\u0002\u0002\u0002]\u0003\u0002\u0002",
    "\u0002\u0002_\u0003\u0002\u0002\u0002\u0002a\u0003\u0002\u0002\u0002",
    "\u0002c\u0003\u0002\u0002\u0002\u0002e\u0003\u0002\u0002\u0002\u0002",
    "g\u0003\u0002\u0002\u0002\u0002i\u0003\u0002\u0002\u0002\u0002s\u0003",
    "\u0002\u0002\u0002\u0002u\u0003\u0002\u0002\u0002\u0002w\u0003\u0002",
    "\u0002\u0002\u0003y\u0003\u0002\u0002\u0002\u0005\u0081\u0003\u0002",
    "\u0002\u0002\u0007\u0087\u0003\u0002\u0002\u0002\t\u0089\u0003\u0002",
    "\u0002\u0002\u000b\u008b\u0003\u0002\u0002\u0002\r\u008e\u0003\u0002",
    "\u0002\u0002\u000f\u0090\u0003\u0002\u0002\u0002\u0011\u0099\u0003\u0002",
    "\u0002\u0002\u0013\u00a2\u0003\u0002\u0002\u0002\u0015\u00a8\u0003\u0002",
    "\u0002\u0002\u0017\u00ae\u0003\u0002\u0002\u0002\u0019\u00b1\u0003\u0002",
    "\u0002\u0002\u001b\u00b7\u0003\u0002\u0002\u0002\u001d\u00bf\u0003\u0002",
    "\u0002\u0002\u001f\u00c1\u0003\u0002\u0002\u0002!\u00c7\u0003\u0002",
    "\u0002\u0002#\u00cd\u0003\u0002\u0002\u0002%\u00d1\u0003\u0002\u0002",
    "\u0002\'\u00d5\u0003\u0002\u0002\u0002)\u00d8\u0003\u0002\u0002\u0002",
    "+\u00df\u0003\u0002\u0002\u0002-\u00e3\u0003\u0002\u0002\u0002/\u00e6",
    "\u0003\u0002\u0002\u00021\u00ea\u0003\u0002\u0002\u00023\u00f2\u0003",
    "\u0002\u0002\u00025\u00f6\u0003\u0002\u0002\u00027\u00f8\u0003\u0002",
    "\u0002\u00029\u00fa\u0003\u0002\u0002\u0002;\u00fc\u0003\u0002\u0002",
    "\u0002=\u00fe\u0003\u0002\u0002\u0002?\u0100\u0003\u0002\u0002\u0002",
    "A\u010b\u0003\u0002\u0002\u0002C\u010d\u0003\u0002\u0002\u0002E\u010f",
    "\u0003\u0002\u0002\u0002G\u0111\u0003\u0002\u0002\u0002I\u0113\u0003",
    "\u0002\u0002\u0002K\u0115\u0003\u0002\u0002\u0002M\u0117\u0003\u0002",
    "\u0002\u0002O\u0119\u0003\u0002\u0002\u0002Q\u011b\u0003\u0002\u0002",
    "\u0002S\u011e\u0003\u0002\u0002\u0002U\u0121\u0003\u0002\u0002\u0002",
    "W\u0124\u0003\u0002\u0002\u0002Y\u0127\u0003\u0002\u0002\u0002[\u0129",
    "\u0003\u0002\u0002\u0002]\u012b\u0003\u0002\u0002\u0002_\u0135\u0003",
    "\u0002\u0002\u0002a\u013b\u0003\u0002\u0002\u0002c\u013f\u0003\u0002",
    "\u0002\u0002e\u0144\u0003\u0002\u0002\u0002g\u014d\u0003\u0002\u0002",
    "\u0002i\u0151\u0003\u0002\u0002\u0002k\u015b\u0003\u0002\u0002\u0002",
    "m\u0160\u0003\u0002\u0002\u0002o\u0166\u0003\u0002\u0002\u0002q\u0168",
    "\u0003\u0002\u0002\u0002s\u016a\u0003\u0002\u0002\u0002u\u0178\u0003",
    "\u0002\u0002\u0002w\u0189\u0003\u0002\u0002\u0002yz\u0007k\u0002\u0002",
    "z{\u0007p\u0002\u0002{|\u0007e\u0002\u0002|}\u0007n\u0002\u0002}~\u0007",
    "w\u0002\u0002~\u007f\u0007{\u0002\u0002\u007f\u0080\u0007c\u0002\u0002",
    "\u0080\u0004\u0003\u0002\u0002\u0002\u0081\u0082\u0007v\u0002\u0002",
    "\u0082\u0083\u0007c\u0002\u0002\u0083\u0084\u0007t\u0002\u0002\u0084",
    "\u0085\u0007g\u0002\u0002\u0085\u0086\u0007c\u0002\u0002\u0086\u0006",
    "\u0003\u0002\u0002\u0002\u0087\u0088\u0007}\u0002\u0002\u0088\b\u0003",
    "\u0002\u0002\u0002\u0089\u008a\u0007\u007f\u0002\u0002\u008a\n\u0003",
    "\u0002\u0002\u0002\u008b\u008c\u0007g\u0002\u0002\u008c\u008d\u0007",
    "u\u0002\u0002\u008d\f\u0003\u0002\u0002\u0002\u008e\u008f\u0007A\u0002",
    "\u0002\u008f\u000e\u0003\u0002\u0002\u0002\u0090\u0091\u0007x\u0002",
    "\u0002\u0091\u0092\u0007c\u0002\u0002\u0092\u0093\u0007t\u0002\u0002",
    "\u0093\u0094\u0007k\u0002\u0002\u0094\u0095\u0007c\u0002\u0002\u0095",
    "\u0096\u0007p\u0002\u0002\u0096\u0097\u0007f\u0002\u0002\u0097\u0098",
    "\u0007q\u0002\u0002\u0098\u0010\u0003\u0002\u0002\u0002\u0099\u009a",
    "\u0007o\u0002\u0002\u009a\u009b\u0007k\u0002\u0002\u009b\u009c\u0007",
    "g\u0002\u0002\u009c\u009d\u0007p\u0002\u0002\u009d\u009e\u0007v\u0002",
    "\u0002\u009e\u009f\u0007t\u0002\u0002\u009f\u00a0\u0007c\u0002\u0002",
    "\u00a0\u00a1\u0007u\u0002\u0002\u00a1\u0012\u0003\u0002\u0002\u0002",
    "\u00a2\u00a3\u0007j\u0002\u0002\u00a3\u00a4\u0007c\u0002\u0002\u00a4",
    "\u00a5\u0007i\u0002\u0002\u00a5\u00a6\u0007c\u0002\u0002\u00a6\u00a7",
    "\u0007<\u0002\u0002\u00a7\u0014\u0003\u0002\u0002\u0002\u00a8\u00a9",
    "\u0007e\u0002\u0002\u00a9\u00aa\u0007q\u0002\u0002\u00aa\u00ab\u0007",
    "r\u0002\u0002\u00ab\u00ac\u0007k\u0002\u0002\u00ac\u00ad\u0007g\u0002",
    "\u0002\u00ad\u0016\u0003\u0002\u0002\u0002\u00ae\u00af\u0007g\u0002",
    "\u0002\u00af\u00b0\u0007p\u0002\u0002\u00b0\u0018\u0003\u0002\u0002",
    "\u0002\u00b1\u00b2\u0007g\u0002\u0002\u00b2\u00b3\u0007p\u0002\u0002",
    "\u00b3\u00b4\u0007v\u0002\u0002\u00b4\u00b5\u0007t\u0002\u0002\u00b5",
    "\u00b6\u0007g\u0002\u0002\u00b6\u001a\u0003\u0002\u0002\u0002\u00b7",
    "\u00b8\u0007o\u0002\u0002\u00b8\u00b9\u0007w\u0002\u0002\u00b9\u00ba",
    "\u0007g\u0002\u0002\u00ba\u00bb\u0007u\u0002\u0002\u00bb\u00bc\u0007",
    "v\u0002\u0002\u00bc\u00bd\u0007t\u0002\u0002\u00bd\u00be\u0007g\u0002",
    "\u0002\u00be\u001c\u0003\u0002\u0002\u0002\u00bf\u00c0\u00070\u0002",
    "\u0002\u00c0\u001e\u0003\u0002\u0002\u0002\u00c1\u00c2\u0007f\u0002",
    "\u0002\u00c2\u00c3\u0007g\u0002\u0002\u00c3\u00c4\u0007u\u0002\u0002",
    "\u00c4\u00c5\u0007f\u0002\u0002\u00c5\u00c6\u0007g\u0002\u0002\u00c6",
    " \u0003\u0002\u0002\u0002\u00c7\u00c8\u0007j\u0002\u0002\u00c8\u00c9",
    "\u0007c\u0002\u0002\u00c9\u00ca\u0007u\u0002\u0002\u00ca\u00cb\u0007",
    "v\u0002\u0002\u00cb\u00cc\u0007c\u0002\u0002\u00cc\"\u0003\u0002\u0002",
    "\u0002\u00cd\u00ce\u0007u\u0002\u0002\u00ce\u00cf\u0007k\u0002\u0002",
    "\u00cf\u00d0\u0007<\u0002\u0002\u00d0$\u0003\u0002\u0002\u0002\u00d1",
    "\u00d2\u0007p\u0002\u0002\u00d2\u00d3\u0007q\u0002\u0002\u00d3\u00d4",
    "\u0007<\u0002\u0002\u00d4&\u0003\u0002\u0002\u0002\u00d5\u00d6\u0007",
    "g\u0002\u0002\u00d6\u00d7\u0007n\u0002\u0002\u00d7(\u0003\u0002\u0002",
    "\u0002\u00d8\u00d9\u0007q\u0002\u0002\u00d9\u00da\u0007d\u0002\u0002",
    "\u00da\u00db\u0007l\u0002\u0002\u00db\u00dc\u0007g\u0002\u0002\u00dc",
    "\u00dd\u0007v\u0002\u0002\u00dd\u00de\u0007q\u0002\u0002\u00de*\u0003",
    "\u0002\u0002\u0002\u00df\u00e0\u0007w\u0002\u0002\u00e0\u00e1\u0007",
    "p\u0002\u0002\u00e1\u00e2\u0007c\u0002\u0002\u00e2,\u0003\u0002\u0002",
    "\u0002\u00e3\u00e4\u0007w\u0002\u0002\u00e4\u00e5\u0007p\u0002\u0002",
    "\u00e5.\u0003\u0002\u0002\u0002\u00e6\u00e7\u0007n\u0002\u0002\u00e7",
    "\u00e8\u0007q\u0002\u0002\u00e8\u00e9\u0007u\u0002\u0002\u00e90\u0003",
    "\u0002\u0002\u0002\u00ea\u00eb\u0007q\u0002\u0002\u00eb\u00ec\u0007",
    "d\u0002\u0002\u00ec\u00ed\u0007l\u0002\u0002\u00ed\u00ee\u0007g\u0002",
    "\u0002\u00ee\u00ef\u0007v\u0002\u0002\u00ef\u00f0\u0007q\u0002\u0002",
    "\u00f0\u00f1\u0007u\u0002\u0002\u00f12\u0003\u0002\u0002\u0002\u00f2",
    "\u00f3\u0007u\u0002\u0002\u00f3\u00f4\u0007q\u0002\u0002\u00f4\u00f5",
    "\u0007p\u0002\u0002\u00f54\u0003\u0002\u0002\u0002\u00f6\u00f7\u0007",
    "*\u0002\u0002\u00f76\u0003\u0002\u0002\u0002\u00f8\u00f9\u0007+\u0002",
    "\u0002\u00f98\u0003\u0002\u0002\u0002\u00fa\u00fb\u0007]\u0002\u0002",
    "\u00fb:\u0003\u0002\u0002\u0002\u00fc\u00fd\u0007.\u0002\u0002\u00fd",
    "<\u0003\u0002\u0002\u0002\u00fe\u00ff\u0007_\u0002\u0002\u00ff>\u0003",
    "\u0002\u0002\u0002\u0100\u0101\u0007p\u0002\u0002\u0101\u0102\u0007",
    "q\u0002\u0002\u0102\u0103\u0007a\u0002\u0002\u0103\u0104\u0007x\u0002",
    "\u0002\u0104\u0105\u0007c\u0002\u0002\u0105\u0106\u0007n\u0002\u0002",
    "\u0106\u0107\u0007k\u0002\u0002\u0107\u0108\u0007f\u0002\u0002\u0108",
    "\u0109\u0007c\u0002\u0002\u0109\u010a\u0007t\u0002\u0002\u010a@\u0003",
    "\u0002\u0002\u0002\u010b\u010c\u0007/\u0002\u0002\u010cB\u0003\u0002",
    "\u0002\u0002\u010d\u010e\u0007-\u0002\u0002\u010eD\u0003\u0002\u0002",
    "\u0002\u010f\u0110\u0007\u0080\u0002\u0002\u0110F\u0003\u0002\u0002",
    "\u0002\u0111\u0112\u0007,\u0002\u0002\u0112H\u0003\u0002\u0002\u0002",
    "\u0113\u0114\u00071\u0002\u0002\u0114J\u0003\u0002\u0002\u0002\u0115",
    "\u0116\u0007\'\u0002\u0002\u0116L\u0003\u0002\u0002\u0002\u0117\u0118",
    "\u0007>\u0002\u0002\u0118N\u0003\u0002\u0002\u0002\u0119\u011a\u0007",
    "@\u0002\u0002\u011aP\u0003\u0002\u0002\u0002\u011b\u011c\u0007>\u0002",
    "\u0002\u011c\u011d\u0007?\u0002\u0002\u011dR\u0003\u0002\u0002\u0002",
    "\u011e\u011f\u0007@\u0002\u0002\u011f\u0120\u0007?\u0002\u0002\u0120",
    "T\u0003\u0002\u0002\u0002\u0121\u0122\u0007?\u0002\u0002\u0122\u0123",
    "\u0007?\u0002\u0002\u0123V\u0003\u0002\u0002\u0002\u0124\u0125\u0007",
    "#\u0002\u0002\u0125\u0126\u0007?\u0002\u0002\u0126X\u0003\u0002\u0002",
    "\u0002\u0127\u0128\u0007(\u0002\u0002\u0128Z\u0003\u0002\u0002\u0002",
    "\u0129\u012a\u0007~\u0002\u0002\u012a\\\u0003\u0002\u0002\u0002\u012b",
    "\u012c\u0007x\u0002\u0002\u012c\u012d\u0007g\u0002\u0002\u012d\u012e",
    "\u0007t\u0002\u0002\u012e\u012f\u0007f\u0002\u0002\u012f\u0130\u0007",
    "c\u0002\u0002\u0130\u0131\u0007f\u0002\u0002\u0131\u0132\u0007g\u0002",
    "\u0002\u0132\u0133\u0007t\u0002\u0002\u0133\u0134\u0007q\u0002\u0002",
    "\u0134^\u0003\u0002\u0002\u0002\u0135\u0136\u0007h\u0002\u0002\u0136",
    "\u0137\u0007c\u0002\u0002\u0137\u0138\u0007n\u0002\u0002\u0138\u0139",
    "\u0007u\u0002\u0002\u0139\u013a\u0007q\u0002\u0002\u013a`\u0003\u0002",
    "\u0002\u0002\u013b\u013c\u0007f\u0002\u0002\u013c\u013d\u0007q\u0002",
    "\u0002\u013d\u013e\u0007{\u0002\u0002\u013eb\u0003\u0002\u0002\u0002",
    "\u013f\u0140\u0007u\u0002\u0002\u0140\u0141\u0007c\u0002\u0002\u0141",
    "\u0142\u0007n\u0002\u0002\u0142\u0143\u0007g\u0002\u0002\u0143d\u0003",
    "\u0002\u0002\u0002\u0144\u0149\u0005q9\u0002\u0145\u0148\u0005q9\u0002",
    "\u0146\u0148\t\u0002\u0002\u0002\u0147\u0145\u0003\u0002\u0002\u0002",
    "\u0147\u0146\u0003\u0002\u0002\u0002\u0148\u014b\u0003\u0002\u0002\u0002",
    "\u0149\u0147\u0003\u0002\u0002\u0002\u0149\u014a\u0003\u0002\u0002\u0002",
    "\u014af\u0003\u0002\u0002\u0002\u014b\u0149\u0003\u0002\u0002\u0002",
    "\u014c\u014e\t\u0002\u0002\u0002\u014d\u014c\u0003\u0002\u0002\u0002",
    "\u014e\u014f\u0003\u0002\u0002\u0002\u014f\u014d\u0003\u0002\u0002\u0002",
    "\u014f\u0150\u0003\u0002\u0002\u0002\u0150h\u0003\u0002\u0002\u0002",
    "\u0151\u0156\u0007$\u0002\u0002\u0152\u0155\u0005k6\u0002\u0153\u0155",
    "\n\u0003\u0002\u0002\u0154\u0152\u0003\u0002\u0002\u0002\u0154\u0153",
    "\u0003\u0002\u0002\u0002\u0155\u0158\u0003\u0002\u0002\u0002\u0156\u0154",
    "\u0003\u0002\u0002\u0002\u0156\u0157\u0003\u0002\u0002\u0002\u0157\u0159",
    "\u0003\u0002\u0002\u0002\u0158\u0156\u0003\u0002\u0002\u0002\u0159\u015a",
    "\u0007$\u0002\u0002\u015aj\u0003\u0002\u0002\u0002\u015b\u015e\u0007",
    "^\u0002\u0002\u015c\u015f\t\u0004\u0002\u0002\u015d\u015f\u0005m7\u0002",
    "\u015e\u015c\u0003\u0002\u0002\u0002\u015e\u015d\u0003\u0002\u0002\u0002",
    "\u015fl\u0003\u0002\u0002\u0002\u0160\u0161\u0007w\u0002\u0002\u0161",
    "\u0162\u0005o8\u0002\u0162\u0163\u0005o8\u0002\u0163\u0164\u0005o8\u0002",
    "\u0164\u0165\u0005o8\u0002\u0165n\u0003\u0002\u0002\u0002\u0166\u0167",
    "\t\u0005\u0002\u0002\u0167p\u0003\u0002\u0002\u0002\u0168\u0169\t\u0006",
    "\u0002\u0002\u0169r\u0003\u0002\u0002\u0002\u016a\u016b\u00071\u0002",
    "\u0002\u016b\u016c\u0007,\u0002\u0002\u016c\u0170\u0003\u0002\u0002",
    "\u0002\u016d\u016f\u000b\u0002\u0002\u0002\u016e\u016d\u0003\u0002\u0002",
    "\u0002\u016f\u0172\u0003\u0002\u0002\u0002\u0170\u0171\u0003\u0002\u0002",
    "\u0002\u0170\u016e\u0003\u0002\u0002\u0002\u0171\u0173\u0003\u0002\u0002",
    "\u0002\u0172\u0170\u0003\u0002\u0002\u0002\u0173\u0174\u0007,\u0002",
    "\u0002\u0174\u0175\u00071\u0002\u0002\u0175\u0176\u0003\u0002\u0002",
    "\u0002\u0176\u0177\b:\u0002\u0002\u0177t\u0003\u0002\u0002\u0002\u0178",
    "\u0179\u00071\u0002\u0002\u0179\u017a\u00071\u0002\u0002\u017a\u017e",
    "\u0003\u0002\u0002\u0002\u017b\u017d\u000b\u0002\u0002\u0002\u017c\u017b",
    "\u0003\u0002\u0002\u0002\u017d\u0180\u0003\u0002\u0002\u0002\u017e\u017f",
    "\u0003\u0002\u0002\u0002\u017e\u017c\u0003\u0002\u0002\u0002\u017f\u0182",
    "\u0003\u0002\u0002\u0002\u0180\u017e\u0003\u0002\u0002\u0002\u0181\u0183",
    "\u0007\u000f\u0002\u0002\u0182\u0181\u0003\u0002\u0002\u0002\u0182\u0183",
    "\u0003\u0002\u0002\u0002\u0183\u0184\u0003\u0002\u0002\u0002\u0184\u0185",
    "\u0007\f\u0002\u0002\u0185\u0186\u0003\u0002\u0002\u0002\u0186\u0187",
    "\b;\u0002\u0002\u0187v\u0003\u0002\u0002\u0002\u0188\u018a\t\u0007\u0002",
    "\u0002\u0189\u0188\u0003\u0002\u0002\u0002\u018a\u018b\u0003\u0002\u0002",
    "\u0002\u018b\u0189\u0003\u0002\u0002\u0002\u018b\u018c\u0003\u0002\u0002",
    "\u0002\u018c\u018d\u0003\u0002\u0002\u0002\u018d\u018e\b<\u0003\u0002",
    "\u018ex\u0003\u0002\u0002\u0002\r\u0002\u0147\u0149\u014f\u0154\u0156",
    "\u015e\u0170\u017e\u0182\u018b\u0004\b\u0002\u0002\u0002\u0003\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function LexicoLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

LexicoLexer.prototype = Object.create(antlr4.Lexer.prototype);
LexicoLexer.prototype.constructor = LexicoLexer;

LexicoLexer.EOF = antlr4.Token.EOF;
LexicoLexer.T__0 = 1;
LexicoLexer.T__1 = 2;
LexicoLexer.T__2 = 3;
LexicoLexer.T__3 = 4;
LexicoLexer.T__4 = 5;
LexicoLexer.T__5 = 6;
LexicoLexer.T__6 = 7;
LexicoLexer.T__7 = 8;
LexicoLexer.T__8 = 9;
LexicoLexer.T__9 = 10;
LexicoLexer.T__10 = 11;
LexicoLexer.T__11 = 12;
LexicoLexer.T__12 = 13;
LexicoLexer.T__13 = 14;
LexicoLexer.T__14 = 15;
LexicoLexer.T__15 = 16;
LexicoLexer.T__16 = 17;
LexicoLexer.T__17 = 18;
LexicoLexer.T__18 = 19;
LexicoLexer.T__19 = 20;
LexicoLexer.T__20 = 21;
LexicoLexer.T__21 = 22;
LexicoLexer.T__22 = 23;
LexicoLexer.T__23 = 24;
LexicoLexer.T__24 = 25;
LexicoLexer.T__25 = 26;
LexicoLexer.T__26 = 27;
LexicoLexer.T__27 = 28;
LexicoLexer.T__28 = 29;
LexicoLexer.T__29 = 30;
LexicoLexer.T__30 = 31;
LexicoLexer.T__31 = 32;
LexicoLexer.T__32 = 33;
LexicoLexer.T__33 = 34;
LexicoLexer.T__34 = 35;
LexicoLexer.T__35 = 36;
LexicoLexer.T__36 = 37;
LexicoLexer.T__37 = 38;
LexicoLexer.T__38 = 39;
LexicoLexer.T__39 = 40;
LexicoLexer.T__40 = 41;
LexicoLexer.T__41 = 42;
LexicoLexer.T__42 = 43;
LexicoLexer.T__43 = 44;
LexicoLexer.T__44 = 45;
LexicoLexer.T__45 = 46;
LexicoLexer.T__46 = 47;
LexicoLexer.T__47 = 48;
LexicoLexer.T__48 = 49;
LexicoLexer.ID = 50;
LexicoLexer.INT = 51;
LexicoLexer.STRING = 52;
LexicoLexer.COMMENT = 53;
LexicoLexer.LINE_COMMENT = 54;
LexicoLexer.WS = 55;


LexicoLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

LexicoLexer.prototype.literalNames = [ null, "'incluya'", "'tarea'", "'{'",
                                       "'}'", "'es'", "'?'", "'variando'",
                                       "'mientras'", "'haga:'", "'copie'",
                                       "'en'", "'entre'", "'muestre'", "'.'",
                                       "'desde'", "'hasta'", "'si:'", "'no:'",
                                       "'el'", "'objeto'", "'una'", "'un'",
                                       "'los'", "'objetos'", "'son'", "'('",
                                       "')'", "'['", "','", "']'", "'no_validar'",
                                       "'-'", "'+'", "'~'", "'*'", "'/'",
                                       "'%'", "'<'", "'>'", "'<='", "'>='",
                                       "'=='", "'!='", "'&'", "'|'", "'verdadero'",
                                       "'falso'", "'doy'", "'sale'" ];

LexicoLexer.prototype.symbolicNames = [ null, null, null, null, null, null,
                                        null, null, null, null, null, null,
                                        null, null, null, null, null, null,
                                        null, null, null, null, null, null,
                                        null, null, null, null, null, null,
                                        null, null, null, null, null, null,
                                        null, null, null, null, null, null,
                                        null, null, null, null, null, null,
                                        null, null, "ID", "INT", "STRING",
                                        "COMMENT", "LINE_COMMENT", "WS" ];

LexicoLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4",
                                    "T__5", "T__6", "T__7", "T__8", "T__9",
                                    "T__10", "T__11", "T__12", "T__13",
                                    "T__14", "T__15", "T__16", "T__17",
                                    "T__18", "T__19", "T__20", "T__21",
                                    "T__22", "T__23", "T__24", "T__25",
                                    "T__26", "T__27", "T__28", "T__29",
                                    "T__30", "T__31", "T__32", "T__33",
                                    "T__34", "T__35", "T__36", "T__37",
                                    "T__38", "T__39", "T__40", "T__41",
                                    "T__42", "T__43", "T__44", "T__45",
                                    "T__46", "T__47", "T__48", "ID", "INT",
                                    "STRING", "ESC", "UNICODE", "HEX", "LETTER",
                                    "COMMENT", "LINE_COMMENT", "WS" ];

LexicoLexer.prototype.grammarFileName = "Lexico.g4";



exports.LexicoLexer = LexicoLexer;


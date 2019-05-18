/*
 * File: XParser.js
 * ----------------
 * This file implements a parser for standard JavaScript/Java/C/C++
 * arithmetic expressions.
 */

function XParser() {
   Parser.call(this);
   this.scanner.addWordCharacters("_");
   this.defineOperators();
}
XParser.prototype = new Parser;
XParser.prototype.constructor = XParser;

XParser.prototype.defineOperators = function() {
   this.definePrefixOperator("(", this.parenOperator, 0, "RIGHT");
   this.definePrefixOperator("+", this.prefixOperator, 100);
   this.definePrefixOperator("-", this.prefixOperator, 100);
   this.definePrefixOperator("!", this.prefixOperator, 100);
   this.definePrefixOperator("++", this.prefixOperator, 100, "RIGHT");
   this.definePrefixOperator("--", this.prefixOperator, 100, "RIGHT");
   this.defineInfixOperator("(", this.applyOperator, 110, "RIGHT");
   this.defineInfixOperator("+", this.infixOperator, 80);
   this.defineInfixOperator("-", this.infixOperator, 80);
   this.defineInfixOperator("++", this.suffixOperator, 100, "RIGHT");
   this.defineInfixOperator("--", this.suffixOperator, 100, "RIGHT");
   this.defineInfixOperator("*", this.infixOperator, 90);
   this.defineInfixOperator("/", this.infixOperator, 90);
   this.defineInfixOperator("%", this.infixOperator, 90);
   this.defineInfixOperator("<", this.infixOperator, 60);
   this.defineInfixOperator("<=", this.infixOperator, 60);
   this.defineInfixOperator(">", this.infixOperator, 60);
   this.defineInfixOperator(">=", this.infixOperator, 60);
   this.defineInfixOperator("==", this.infixOperator, 50);
   this.defineInfixOperator("!=", this.infixOperator, 50);
   this.defineInfixOperator("&&", this.infixOperator, 30);
   this.defineInfixOperator("||", this.infixOperator, 20);
   this.defineInfixOperator("?", this.questionMarkColon, 15, "RIGHT");
   this.defineInfixOperator("=", this.infixOperator, 10, "RIGHT");
   this.defineInfixOperator("+=", this.infixOperator, 10, "RIGHT");
   this.defineInfixOperator("-=", this.infixOperator, 10, "RIGHT");
   this.defineInfixOperator("*=", this.infixOperator, 10, "RIGHT");
   this.defineInfixOperator("/=", this.infixOperator, 10, "RIGHT");
   this.defineInfixOperator("%=", this.infixOperator, 10, "RIGHT");
};

XParser.prototype.prefixOperator = function(parser, op) {
   return ["pre" + op, parser.readE(parser.prefixProperties[op].prec)];
}

XParser.prototype.infixOperator = function(parser, op, lhs) {
   return [op, lhs, parser.readE(parser.infixProperties[op].prec)];
};

XParser.prototype.suffixOperator = function(parser, op, lhs) {
   return ["post" + op, lhs];
};

XParser.prototype.parenOperator = function(parser, op) {
   var exp = parser.readE(0);
   parser.verifyToken(")");
   return exp;
}

XParser.prototype.applyOperator = function(parser, op, lhs) {
   var exp = ["call", lhs];
   var token = parser.nextToken();
   if (token == ")") return exp;
   parser.saveToken(token);
   while (true) {
      exp.push(parser.readE(0));
      token = parser.nextToken();
      if (token == ")") break;
      if (token != ',') {
         var msg = "Found \"" + token + "\" when expecting \",\" or \")\"";
         throw new Error(msg);
      }
   }
   return exp;
}

XParser.prototype.questionMarkColon = function(parser, op, lhs) {
   var e1 = parser.readE(0);
   parser.verifyToken(":");
   var e2 = parser.readE(parser.infixProperties[op].prec);
   return ["?:", lhs, e1, e2];
};

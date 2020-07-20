/*
 * File: KarelVM.js
 * ----------------
 * This class implements the instructions for the Karel virtual machine.
 * This class extends XVM to inherit the !, &&, and || operators.
 */

function KarelVM(karel) {
   XVM.call(this);
   this.karel = karel;
   this.initKarelOperators();
   this.userFnNames = [];
}
KarelVM.prototype = new XVM;
KarelVM.prototype.constructor = KarelVM;

KarelVM.prototype.initKarelOperators = function() {
   this.defineOperator(new KarelCall());
   this.defineOperator(new KarelWhile());
   this.defineOperator(new KarelRepeat());
   this.defineOperator(new KarelIf());
   this.defineOperator(new KarelBlock());
   this.defineOperator(new KarelStmt());
};

KarelVM.prototype.resetTempCounter = function() {
   this.nextTemp = 0;
};

KarelVM.prototype.setUserFnNames = function(userFnNames) {
   this.userFnNames = userFnNames;
}

KarelVM.prototype.startCheck = function() {
   if (this.cf == null) {
      var code = this.functions["run"];
      if (!code) throw new Error("No run function defined");
      this.call("run", code);
   }
};

KarelVM.prototype.atStatementBoundary = function() {
   return !this.cf || this.cf.code[this.cf.pc].name == "stmt";
};

function KarelCall(fn) {
   this.name = "call";
   this.fn = fn;
}

KarelCall.prototype.toString = function() {
   return this.name + " " + this.fn;
};

KarelCall.prototype.legalFn = function(fn, userFns) {
   if (Karel.instructions[fn]) return true;
   if (Karel.predicates[fn]) return true;
   if ($.inArray(fn, userFns) != -1) return true;
   return false;
}

KarelCall.prototype.compile = function(vm, exp, code) {
   
   var fn = exp[1];
   if (!this.legalFn(fn, vm.userFnNames)){
      throw new Error("Undefined operator \"" + fn + "\"");
   }
   code.push(new KarelCall(fn));
};

KarelCall.prototype.execute = function(vm) {
   if (Karel.instructions[this.fn]) {
      vm.karel[this.fn]();
   } else if (Karel.predicates[this.fn]) {
      vm.push(vm.karel[this.fn]());
   } else {
      vm.call(this.fn, vm.functions[this.fn]);
   }
};

function KarelRepeat() {
   this.name = "repeat";
}

KarelRepeat.prototype.toString = function() {
   return this.name;
};

KarelRepeat.prototype.compile = function(vm, exp, code) {
   var temp = "$" + vm.nextTemp++;
   var jump1 = new JumpIns("jumpf");
   var jump2 = new JumpIns("jump");
   code.push(new PushIns(exp[1]));
   code.push(new StoreIns(temp));
   jump2.setTarget(code.length);
   code.push(new PushIns(0));
   code.push(vm.operators[">"]);
   code.push(jump1);
   vm.compile(exp[2], code);
   code.push(new LoadIns(temp));
   code.push(new PushIns(1));
   code.push(vm.operators["-"]);
   code.push(new StoreIns(temp));
   code.push(jump2);
   jump1.setTarget(code.length);
};

function KarelWhile() {
   this.name = "while";
}

KarelWhile.prototype.toString = function() {
   return this.name;
};

KarelWhile.prototype.compile = function(vm, exp, code) {
   var jump1 = new JumpIns("jumpf");
   var jump2 = new JumpIns("jump");
   jump2.setTarget(code.length);
   vm.compile(exp[1], code);
   code.push(jump1);
   vm.compile(exp[2], code);
   code.push(jump2);
   jump1.setTarget(code.length);
};

function KarelIf() {
   this.name = "if";
}

KarelIf.prototype.toString = function() {
   return this.name;
};

KarelIf.prototype.compile = function(vm, exp, code) {
   var jump1 = new JumpIns("jumpf");
   var jump2 = new JumpIns("jump");
   vm.compile(exp[1], code);
   code.push(jump1);
   vm.compile(exp[2], code);
   if (exp.length > 3) {
      code.push(jump2);
      jump1.setTarget(code.length);
      vm.compile(exp[3], code);
      jump2.setTarget(code.length);
   } else {
      jump1.setTarget(code.length);
   }
};

function KarelBlock() {
   this.name = "block";
}

KarelBlock.prototype.toString = function() {
   return this.name;
};

KarelBlock.prototype.compile = function(vm, exp, code) {
   for (var i = 1; i < exp.length; i++) {
      vm.compile(exp[i], code);
   }
};

function KarelStmt() {
   this.name = "stmt";
}

KarelStmt.prototype.toString = function() {
   return this.name;
};

KarelStmt.prototype.compile = function(vm, exp, code) {
   code.push(this);
   vm.compile(exp[1], code);
};

KarelStmt.prototype.execute = function(vm, exp, code) {
   /* Empty */
};

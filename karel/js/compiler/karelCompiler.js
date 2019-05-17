
/**
 * Class: KarelCompiledEngine
 * --------------------------
 * This class is in charge of compiling a piece of Karel
 * code into some abstraction such that it can execute 
 * the program one step at a time. Implements the same
 * interface as the karelEvalEngine.
 */
function KarelCompiler(karel) {

   var that = {};
   that.vm = new KarelVM(karel);

   that.compile = function(text) {
      var parser = new KarelParser();
      parser.setInput(text);
      var karelClass = parser.readClass();
      var token = parser.nextToken();
      if(token != "") {
         throw new Error("Found " + token + " after your Karel class. Only one class allowed in the online Karel");
      }
      var baseClass = karelClass[2];
      var functionMap = karelClass[3];

      var functions = [];
      var functionNames = [];
      for(var fnName in functionMap) {
         var fn = functionMap[fnName];
         functionNames.push(fnName);
         functions.push(fn);
      }

      that.vm.setUserFnNames(functionNames);
      for(var i = 0; i < functions.length; i++) {
         var fn = functions[i];
         var code = [];
         that.vm.resetTempCounter();
         that.vm.compile(fn[2], code);
         code.push(new ReturnIns());
         that.vm.functions[fn[1]] = code;
      }
      that.vm.reset();
      that.vm.startCheck();
   }

   that.executeStep = function() {
      var vm = that.vm;
      if (!vm.cf) return true;
      var running = true;
      while (running) {
         if (vm.atStatementBoundary()) running = false;
         vm.step();
      }
      return false;
   }

   return that;

}

(function(){
    /*
     * Creating List controller and attaching it to the main bearFacts module
     */
    angular
        .module("bearFacts")
        .controller("listCtrl", ListController);
    
    /*
     * Dependency injection. DI is nothing but passing an object into function rather  *than creating object inside function. This is acheived by passing dependencies 
     * as strings in an array through the $inject method to the controller.
     */
    ListController.$inject = ['quizMetrics', 'DataService'];

   
    function ListController(quizMetrics, DataService){
        var vm = this;

        /*
         * The interface for the controller. The below code shows all the 
         * variables that are available from inside the view. References to 
         * named functions are used instead of inline anon functions. This 
         * increases readability of the code.
         *
         * The interface is at the top to provide a quick overview of what is 
         * available in the controller while the implementation remains at the 
         * bottom.
         */
        vm.quizMetrics = quizMetrics; // Controllers reference to the quiz data from factory
        vm.data = DataService.bearsData; // Controller reference to the bear info created in the factory
        vm.activeBear = {}; // will be used in the view to hold the data of currently active bear
        vm.changeActiveBear = changeActiveBear; // reference to a named function below
        vm.activateQuiz = activateQuiz; // reference to named function below
        vm.search = ""; // will hold the search query when user uses search bar in view

        function changeActiveBear(index){
            // simple function to attach the data of the bear clicked on to 
            // the active bear object
            vm.activeBear = index;
        }

        function activateQuiz(){
            /*
             * changeState is a function attached onto the quizMetrics object 
             * returned from the factory It takes two arguments. 1. what to 
             * change state of (quiz or results) 2. what new state should be.
             */
            quizMetrics.changeState("quiz", true);
        }
    }


})();
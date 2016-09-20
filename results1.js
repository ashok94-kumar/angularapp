(function () {
angular.module("bearFacts")
       .controller("resultsCtrl", ResultsController);
	    
	   ResultsController.$inject = ['quizMetrics', 'DataService']
	/* injecting quizMetrics into results controller we can have access to get correct answers in quizMetrics*/
	   function ResultsController(quizMetrics, DataService){
		   var vm = this;
		   
		   vm.quizMetrics = quizMetrics;
		   vm.dataService = DataService;
		   vm.getAnswerClass = getAnswerClass;
		   vm.setActiveQuestion = setActiveQuestion;
		   vm.reset = reset;
		   vm.calculatePerc = calculatePerc;
		   vm.activeQuestion = 0;
// initially set activequestion to 0. 		   
		   function calculatePerc(){
			   return quizMetrics.numCorrect / DataService.quizQuestions.length * 100;
		   }
/* 	percentage is calculated by total num of correct questions the user answered by total number of question multiplied by 100.*/     
           function setActiveQuestion(index){
			   vm.activeQuestion = index;
		   }   
		   
		   
		   
		   
           function getAnswerClass(index){
			   if(index === quizMetrics.correctAnswers[vm.activeQuestion]){
				   return "bg-success";
			   }else if(index === DataService.quizQuestions[vm.activeQuestion].selected){
				   return "bg-danger";
	/*if index equal to correctanswers in quizMetrics then background color equal to green, else if it is equal to index of answer selected by user and not equal to index of correct answers then background color equal to red which bg-danger. */
			   }
		   }
	
		   function reset(){
			   quizMetrics.changeState("results", false);
			   quizMetrics.numCorrect = 0;
			   for(var i=0; i < DataService.quizQuestions.length; i++){
				   var data = DataService.quizQuestions[i];
				   data.selected = null;
				   // initially data is null.
				   data.correct = null;
			   }
		   }
	   }
	
})();

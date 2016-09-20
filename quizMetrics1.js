(function(){
	angular.module("bearFacts")
	       .factory("quizMetrics", QuizMetrics);
/* factory is special case of service where the evaluated result will be returned.By injecting dataservice into quizMetrics we can have access to question inside data service*/	       
	       QuizMetrics.$inject = ['DataService'];
	       
	       function QuizMetrics(DataService){
			   var quizObj = {
				   quizActive: false,
				   resultsActive: false,
				   changeState: changeState,
				   correctAnswers: [],
				   markQuiz:markQuiz,
				   numCorrect:0
			   };
			   return quizObj;
			   
			   function changeState(metric, state){
				   if(metric === "quiz"){
					   
				   
				   quizObj.quizActive = state;
				   }else if(metric === "results"){
					   quizObj.resultsActive = state;
				   }else{
					   return false;
				   }
				   
				   }
			   
			   function markQuiz(){
				   quizObj.correctAnswers = DataService.correctAnswers;
				   for(var i = 0; i < DataService.quizQuestions.length; i++){
					   if(DataService.quizQuestions[i].selected === DataService.correctAnswers[i]){
						   DataService.quizQuestions[i].correct = true;
						   quizObj.numCorrect++;
					   }else{
						   DataService.quizQuestions[i].correct = false;
					   }
				   }
				   
				   
				   
				   
			   }
			   
			   
			   }
		   
})();
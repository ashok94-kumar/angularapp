
/* we create immediate invoked function expression to avoid polluting global namespace means overriding one function by creating other, by declaring it globally. */


(function(){
	angular.module("bearFacts")
	       .controller("quizCtrl", QuizController);
	QuizController.$inject = ['quizMetrics', 'DataService'];
	/* By injecting the quizMetrics into quizctrl we can have access to data in quizMetrics which provides you with advantageof accessing data. which is known as dependency injection*/ 
	      function QuizController(quizMetrics, DataService){
			  var vm = this;
			  /* creating objects and binding to view modal with vm and later executing logic using function*/
			  vm.quizMetrics = quizMetrics;
			  vm.dataService = DataService;
			  vm.questionAnswered = questionAnswered;
			  vm.setActiveQuestion = setActiveQuestion;
			  vm.selectAnswer = selectAnswer;
			  vm.finaliseAnswers = finaliseAnswers;
			  vm.activeQuestion = 0;
			  vm.error = false;
			  vm.finalise = false;
			   
			  var numQuestionsAnswered = 0;
	// initially the number of question answered wiil be set to 0.
			  
			  function setActiveQuestion(index){
				  if(index === undefined){
				  var breakOut = false;
				  var quizLength = DataService.quizQuestions.length-1;
					  // since index starts from 0 we will give length-1
				  
				  while(!breakOut){
					  vm.activeQuestion = vm.activeQuestion < quizLength?++vm.activeQuestion:0;
	/* if num of questions less than quizlength then increment question else set it to 0.*/
					  if(vm.activeQuestion ===0){
						  vm.error = true;
					  }
					  if(DataService.quizQuestions[vm.activeQuestion].selected === null){
						  breakOut = true;
			// if the selected question null breakout from while loop
					  }
				  }
				  }else{
					  vm.activeQuestion = index;
		/* Set activeQuestion to index of button pressed by user.For example if user want to move from 2nd question to fifth question skipping between questions then index of activequestion should move correspondigly.*/
				  }
			  }
			  
			  function questionAnswered(){
				  var quizLength = DataService.quizQuestions.length
				  if(DataService.quizQuestions[vm.activeQuestion].selected !== null){
					  numQuestionsAnswered++;
					  if(numQuestionsAnswered >= quizLength){
						  //finalise quiz
						  for(var i= 0; i < quizLength; i++){
							  if(DataService.quizQuestions[i].selected === null){
								  setActiveQuestion(i);
								  return;
	/* because user cannot answer single question twice or thrice and repeat answering so num questions answered should be less than or equal to length of quiz.*/
							  }
						  }
						  vm.error = false;
						  vm.finalise = true;
						  return;
					  }
					  
				  }
				  
				  vm.setActiveQuestion();
			  }
			  
			  function selectAnswer(index){
				  DataService.quizQuestions[vm.activeQuestion].selected = index;
				  
			  }
			  
			  
			  function finaliseAnswers(){
				  vm.finalise = false;
				  numQuestionsAnswered  = 0;
				  vm.activeQuestion = 0;
				  quizMetrics.markQuiz();
				  quizMetrics.changeState();
				  quizMetrics.changeState("quiz", false);
				  quizMetrics.changeState("results", true);
			  }
		  }
	
	
	
	
})();
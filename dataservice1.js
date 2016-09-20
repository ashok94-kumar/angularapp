(function(){
	angular.module("bearFacts")
	       .factory("DataService", DataFactory);
	     //factory is a special case of service which returns results after evaluating  
	
	      function DataFactory(){
			  var dataObj = {
				  bearsData: bearsData,
				  quizQuestions: quizQuestions,
				  correctAnswers: correctAnswers
				  
			};
			  return dataObj;
		 }
	//json data retrieved from backend api
	var correctAnswers = [1, 3, 3, 1, 2, 1, 3, 2, 0, 3];
	
      var quizQuestions  = [
        {
            type: "text",
            text: "How much can a polar bear weigh?",
            possibilities: [
                {
                    answer: "Up to 20kg"
                },
                {
                    answer: "Up to 415kg"
                },
                {
                    answer: "Up to 220kg"
                },
                {
                    answer: "Up to 500kg"
                }
            ],
            selected: null,  /* initially these are given null values and later when selected will be given with index to the corresponding selected and correct answers*/
            correct: null
        },
        {
            type: "text",
            text: "What is the typical lifespan of a Brown bear?",
            possibilities: [
                {
                    answer: "100-150 years"
                },
                {
                    answer: "10-20 years"
                },
                {
                    answer: "40-80 years"
                },
                {
                    answer: "30-40 years"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Which of these is the Sloth bear?",
            possibilities: [
                {
                    answer: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQvlzMn7YavBIH_7raVVr--CThfy8uSWu_hd0BMj7GIf7hTa2PL"
                },
                {
                    answer: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Brown_bear.jpg/250px-Brown_bear.jpg"
                },
                {
                    answer: "http://3.bp.blogspot.com/-jj0DTdDY6fA/TealS-b7cjI/AAAAAAAAAHU/3X1fkPkw5WM/s250/American_black_bear%255B1%255D.jpg"
                },
                {
                    answer: "http://img.patrika.com/upload/images/2016/03/08/bear-1457435055.jpg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Which of these is the Spectacled bear?",
            possibilities: [
                {
                    answer: "http://www.hotimagesfree.com/sites/default/files/styles/medium/public/field/image/9bfb228cb3d88eb16186083291c3fd1d.jpg?itok=t0IYXH6T"
                },
                {
                    answer: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQvlzMn7YavBIH_7raVVr--CThfy8uSWu_hd0BMj7GIf7hTa2PL"
                },
                {
                    answer: "https://s-media-cache-ak0.pinimg.com/236x/b2/51/d4/b251d44760731daa04f5d1ec612cd1c9.jpg"
                },
                {
                    answer: "https://lh6.googleusercontent.com/--1j8bSYqYj4/T9D5e7lqaDI/AAAAAAAAAB0/d7rJQqgRZi8/w800-h800/small%2Bpanda.jpg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Where does the Brown bear live?",
            possibilities: [
                {
                    answer: "Northern America"
                },
                {
                    answer: "Indian subcontinent"
                },
                {
                    answer: "Eurasia and North America"
                },
                {
                    answer: "Artic ocean"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What is the most common Artic ocean waters?",
            possibilities: [
                {
                    answer: "Brown bear"
                },
                {
                    answer: "Polar bear"
                },
                {
                    answer: "Sloth bear"
                },
                {
                    answer: "American black bear"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What is the largest bear in the world ?",
            possibilities: [
                {
                    answer: "Spectacled bear"
                },
                {
                    answer: "Brown bear"
                },
                {
                    answer: "Polar bear"
                },
                {
                    answer: "American black bear"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Which of these is the brown bear?",
            possibilities: [
                {
                    answer: "http://img.patrika.com/upload/images/2016/03/08/bear-1457435055.jpg"
                },
                {
                    answer: "http://www.hotimagesfree.com/sites/default/files/styles/medium/public/field/image/9bfb228cb3d88eb16186083291c3fd1d.jpg?itok=t0IYXH6T"
                },
                {
                    answer: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Brown_bear.jpg/250px-Brown_bear.jpg"
                },
                {
                    answer: "https://s-media-cache-ak0.pinimg.com/236x/b2/51/d4/b251d44760731daa04f5d1ec612cd1c9.jpg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "How Heavy can a American black bear be?",
            possibilities: [
                {
                    answer: "500kg"
                },
                {
                    answer: "400kg"
                },
                {
                    answer: "115kg"
                },
                {
                    answer: "300kg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which of these bears are herbivores?",
            possibilities: [
                {
                    answer: "American black bear"
                },
                {
                    answer: "Brown bear"
                },
                {
                    answer: "Polar bear"
                },
                {
                    answer: "Giant panda"
                }
            ],
            selected: null, 
            correct: null
        }
    ];
  



var bearsData = [
        {
            type: "Giant panda bear",
            image_url: "https://lh6.googleusercontent.com/--1j8bSYqYj4/T9D5e7lqaDI/AAAAAAAAAB0/d7rJQqgRZi8/w800-h800/small%2Bpanda.jpg",
            locations: "south central China",
            size: "Up to 1.5m and up to 300kg",
            lifespan: "Over 30 years",
            diet: "Herbivore",
            description: "The giant panda lives in a few mountain ranges in central China, mainly in Sichuan province, but also in neighbouring Shaanxi and Gansu. As a result of farming,deforestation, and other development, the giant panda has been driven out of the lowland areas where it once lived.The giant panda is a conservation reliant vulnerable species.A 2007 report shows 239 pandas living in captivity inside China and another 27 outside the country. As of December 2014, 49 giant pandas live in captivity outside China, living in 18 zoos in 13 different countries."
        },
        {
            type: "Polar bear",
            image_url: "https://s-media-cache-ak0.pinimg.com/236x/b2/51/d4/b251d44760731daa04f5d1ec612cd1c9.jpg",
            locations: "Arctic Ocean",
            size: "1.7m, 415kg",
            lifespan: "More than 25 years",
            diet: "Carnivorous",
            description: "The polar bear (Ursus maritimus) is a carnivorous bear whose native range lies largely within the Arctic Circle, encompassing the Arctic Ocean, its surrounding seas and surrounding land masses. It is a large bear, approximately the same size as the omnivorous Kodiak bear (Ursus arctos middendorffi).[3]A boar (adult male) weighs around 350–700 kg (772–1,543 lb),[4] while a sow (adult female) is about half that size. Although it is the sister species of the brown bear, [5] it has evolved to occupy a narrower ecological niche, with many body characteristics adapted for cold temperatures, for moving across snow, ice, and open water, and for hunting seals, which make up most of its diet."
        },
        {
            type: "American black bear",
            image_url: "http://3.bp.blogspot.com/-jj0DTdDY6fA/TealS-b7cjI/AAAAAAAAAHU/3X1fkPkw5WM/s250/American_black_bear%255B1%255D.jpg",
            locations: " North America",
            size: "Up to 2m, up to 500kg",
            lifespan: "35 years",
            diet: "Omnivores",
            description: "It is the continent's smallest and most widely distributed bear species. Black bears are omnivores with their diets varying greatly depending on season and location.They typically live in largely forested areas, but do leave forests in search of food. Sometimes they become attracted to human communities because of the immediate availability of food. The American black bear is the world's most common bear species."
        },
        {
            type: "Brown bear",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Brown_bear.jpg/250px-Brown_bear.jpg",
            locations: "Eurasia and North America",
            size: "Over 1m, 245-268kg",
            lifespan: "30-40 Years",
            diet: "Carnivorous",
            description: "The brown bear (Ursus arctos) is a large bear with the widest distribution of any living ursid.[2] The species is distributed across much of northern Eurasia and North AmericaIt is one of the two largest terrestrial carnivorans alive today, rivaled in body size only by its close cousin, the polar bear (Ursus maritimus), which is much less variable in size and averages larger due to this. There are several recognized subspecies, many of which are quite well-known within their native ranges,found in the brown bear species."
        },
        {
            type: "Sloth bear",
            image_url: "http://img.patrika.com/upload/images/2016/03/08/bear-1457435055.jpg",
            locations: "Indian subcontinent",
            size: "around 60cm, up to 100kg",
            lifespan: "20-30 years",
            diet: "Carnivorous",
            description: "The sloth bear (Melursus ursinus), also known as the labiated bear,[3] is a nocturnal insectivorous bear species native to the Indian subcontinent. The sloth bear evolved from ancestral brown bears during the Pleistocene and shares features found in insect-eating mammals through convergent evolution.The population isolated in Sri Lanka is considered a subspecies. Unlike brown and black bears, sloth bears have lankier builds, long, shaggy coats that form a mane around the face, long, sickle-shaped claws, and a specially adapted lower lip and palate used for sucking insects. Sloth bears breed during spring and early summer and give birth near the beginning of winter."

        },
        {
            type: "Spectacled bear",
            image_url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQvlzMn7YavBIH_7raVVr--CThfy8uSWu_hd0BMj7GIf7hTa2PL",
            locations: "South America",
            size: "65cm, up to 145kg",
            lifespan: "Around 40 years",
            diet: "Carnivorous",
            description: "The spectacled bear (Tremarctos ornatus), also known as the Andean bear or Andean short-faced bear and locally as jukumari (Aymara), ukumari (Quechua) or ukuku, is the last remaining short-faced bear (subfamily Tremarctinae). Its closest relatives are the extinct Florida spectacled bear,[2] and the giant short-faced bears of the Middle Pleistocene to Late Pleistocene age.[3][4] Spectacled bears are the only surviving species of bear native to South America,and the only surviving member of the subfamily Tremarctinae. The species is classified as Vulnerable by the IUCN because of habitat loss."
        },
        {
            type: "Asian black bear",
            image_url: "http://www.hotimagesfree.com/sites/default/files/styles/medium/public/field/image/9bfb228cb3d88eb16186083291c3fd1d.jpg?itok=t0IYXH6T",
            locations: "Indian subcontinent, Korea",
            size: "170cm, 145kg",
            lifespan: "50 years",
            diet: "Carnivorous",
            description: "The Asian black bear (Ursus thibetanus, previously known as Selenarctos thibetanus) is also known as moon bear and white-chested bear. It is a medium-sized bear species and largely adapted to arboreal life.[2][3] It lives in the Himalayas, in the northern parts of the Indian subcontinent, Korea, northeastern China, the Russian Far East, the Honshū and Shikoku islands of Japan, and Taiwan. It is classified as vulnerable by the IUCN, mostly because of deforestation and hunting for its body parts."
        },
        {
            type: "Ursinae bear",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/B%C3%A4r_Z%C3%BCri.JPG/290px-B%C3%A4r_Z%C3%BCri.JPG",
            locations: "Florida",
            size: "Up to  1.5m, 255kg",
            lifespan: "25 years",
            diet: "Carnivorous",
            description: "The population isolated in Sri Lanka is considered a subspecies. Unlike brown and black bears, sloth bears have lankier builds, long, shaggy coats that form a mane around the face, long, sickle-shaped claws, and a specially adapted lower lip and palate used for sucking insects. Sloth bears breed during spring and early summer andgive birth near the beginning of winter. They feed on termites, honeybee colonies, and fruits. Sloth bears sometimes attack humans who encroach on their territories.Historically, humans have drastically reduced their habitat and diminished their population by hunting them for food and products such as their bacula and claws. These bears have been used as performing pets due to their tameable nature. The species is listed as vulnerable by the IUCN[4] due to habitat loss and poaching."
        }
    ];
	
	
})();
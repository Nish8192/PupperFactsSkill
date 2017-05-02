'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = "amzn1.ask.skill.49b53010-928a-4e22-a29c-31de425a8613"; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Cat Facts';

/**
 * Array containing space facts.
 */
var pupper_FACTS = [
    "The smallest dog ever recorded was a Yorkshire Terrier.",
  "Many breeds are far different than their ancestors. For example, the Poodle was bred to be a hunting retrieval dog.",
  "The Pomeranian breed is the only one in which a litter can contain puppies who have Duck Face Syndrome.",
  "The majority of owners feel that their dog is a true family member and not just a pet.",
  "Many breeds have dewclaws, nails that grow out from the dog’s ankle area.",
  "Some toy and small sized breeds can be trained to use a cat litter box for their bathroom needs.",
  "Cancer is the top leading cause of death for canines, followed by trauma heart disease.",
  "Many dogs and cats get along very well and are known to be best friends.",
  "Toy dogs should not be taken for walks with a collar and leash.",
  "Kennel cough can be transmitted to humans, although it is rare.",
  "When a dog rolls over and shows his or her belly to a human, this is an important gesture.",
  "Small dogs such as the Chihuahua can have a litter of just 1 puppy.",
  "All dogs (and wolves) originated from an animal that existed about 40 million year back that was called a Miacis.",
  "The wolf was domesticated 15 thousand years ago and this led to the dogs that we know of today.",
  "The Greyhound breed is the only dog breed that is mentioned in the Bible by exact name.",
  "Dogs can be poisoned not only by ingesting chocolate, but also by eating raisins, onions, or the core of apples.",
  "Female dogs can have a false pregnancy, they will show signs of being pregnant.",
  "Dogs that are said to be hypo-allergenic due to the fact that they have hairs instead of fur.",
  "Dogs sweat through their paws.",
  "Dogs have 3 eyelids, 2 that are transparent.",
  "Images of dog collars can be seen in Egyptian paintings from 3,500 BC.",
  "Females can enter heat as early as 5 months old, however it is highly recommended to not breed a female until she is 2 years old.",
  "When breeding, it is best to pair a larger female with a smaller male.",
  "It s a random dog fact that many owners find out too late: A dog may become pregnant even if a tie did not appear to be successful.",
  "A dog may become pregnant by 2 different males if she mates with both within days of each other.",
  "Puppies can be twins, just like humans.",
  "Dogs can sense the mood of an owner just by the person’s action, tone of voice and facial expressions.",
  "A dog can learn to understand up to 200 words.",
  "Dog sledding dates back to 800 BC with the Thule tribe, ancestors of the Inuit tribes of Alaska.",
  "Evidence of a Bloodhound’s trailing has been allowed into court.",
  "The shape of a dog’s face can be a good sign of their life span….those with longer snouts tend to live longer.",
  "Kubla Khan is recorded as the 1 person who owned the most dogs....5000 Mastiffs to be exact.",
  "Some of the earliest records of dog houses are from ancient Egypt (4000 BC) which were made of mud and bricks.",
  "The first commercial dog food was introduced in England in 1860.",
  "The most popular name for a male is Max, for a female it is Molly…however Bella may soon prove to be the most common name for a girl.",
  "There is a law still in Palding Ohio that states that a cop is allowed to bite a dog in order to cause it to be quiet.",
  "Some people paint the coat of their dog with a solution of  Kool-Aid applied to the fur.",
  "Dog fighting is a felony in all states of the U.S., except Idaho and Wyoming, where it’s a misdemeanor.",
  "Many breeds that we know today originated from much larger dogs.",
  "When a Dalmatian is born, he or she is completely white...spots will begin to appear within a couple of weeks.",
  "Dogs that are described as being blue have black fur that has a blue tint to it when seen in bright light or outside in the sunlight.",
  "Dogs that are described as red have brown fur that has an orange/red tint to it.",
  "Dogs that are described as yellow have a tan/ golden colored coat.",
  "When a puppy is born, he or she has their eyes close, cannot hear and have no teeth.",
  "Pups start the teething process around 3-4 months old and are generally done by 6 months.",
  "There are over 400 million dogs living on the Earth right now.",
  "A dog can hear noises 4 times further away than a person can.",
  "A dog’s ear has 18 distinct muscles in it.",
  "In ancient hieroglyphic writing, 77 different dogs are named.",
  "If a dog sees a stranger and that person smiles, the dog often interprets that as a sign of aggression.",
  "Dogs have been credited with saving people's lives in many ways, from waking sleeping owners to a house fire.",
  "Tail docking and ear cropping is illegal in many countries.  The U.S. allows both procedures to be done.",
  "There are 703 distinct breeds and over 800 if you include hybrid dogs.",
  "Hybrid dogs (also known as Designer dogs) are not just mixed breeds. They are the intentional pairing of 2 certain purebreds.",
  "Any hybrid dog that is used for breeding will not produce a true hybrid, any potential litter will be Second Generation.",
  "Nose prints are as unique as human finger prints.",
  "Some dogs cannot handle cold weather and it is medically important to put a sweater and/or booties on them.",
  "If a dog’s owner is 1 mile away and is waving his or her hands, the dog can identify them.",
  "They are not color blind as often believed not long ago. They can see all colors.",
  "A pack of dogs is technically 2 or more.",
  "A Terrier-cross dog named Max lived to the age of 30, which veterinarians say is the equivalent of 210 human years.",
  "Clinical studies show that patting a dog lowers a person’s blood pressure, just as much as watching fish in an aquarium.",
  "In general, they can run 19 mph. The fastest in the world are Greyhounds which can top speeds of 45 mph.",
  "The biggest dog ever recorded was an English Mastiff who weighed 343 pounds and was 8 feet, 3 inches long.",
  "Wild dogs have a gestation period of 70 days as compared to the average of 63 days for domesticated dogs.",
  "We can taste more things that dogs can…. We have 9000 taste buds and canines only have 1,700.",
  "The smartest dogs, in general, is the Poodle and Border Collie.",
  "The most unintelligent dogs, in general, are the Basenji and the Afghan Hound.",
  "The bond between dog and human is the strongest between humans and any other animal.",
  "A Pit Bull named Stubby earned the official title of Sergeant in the U.S. Army during WWII.",
  "Both males and females may display nesting behavior and adopt an object such as a stuffed animal.",
  "1 out of 3 owners call their homes from work so that their dog can hear their voice through the answering machine.",
  "The best way to make a dog give you back an object is to encourage the dog to chase you…as opposed to you chasing him or her.",
  "Ignoring your dog will work best to teach them that their behavior is unacceptable.",
  "Researchers have found that canines can suffer from OCD (obsessive compulsive disorder).",
  "Give a dog a yummy treat is the best method to show a dog that their behavior is what is expected and that you are pleased.",
  "A pup is born without teeth, they will begin to grow out when the puppy is around 4-6 weeks old.",
  "Ice cubes work very well for teething pups, they provide distraction as they slip around the floor and they ease pain by cooling the gums.",
  "Too many baths can dry out a dog’s skin…. For most breeds only 1 bath every 3 week is recommended.",
  "Using human shampoo can dry out a dog’s skin quite a bit because they require a completely different Ph balance.",
  "When a dog smells another dog's anal glands, he is able to know the dogs gender, age, health status and mood.",
  "It is not uncommon for senior dogs to have doggie diapers put on them.",
  "Fetuses in a dam will not show up on x-ray until week 6, until then the bones will not have calcified enough to show up.",
  "Dachshunds and Chihuahuas both can be found with long coat varieties.",
  "All dog have pregnancies that last 63 days on average.",
  "A dog will circle 3 times before going to sleep traces way back to when they were wild animals.",
  "One way to show a dog that thinks that he is in charge is to always begin eating first before placing his food down.",
  "When a dog wags their tail, they are happy. When they tuck their tail between their legs they are either afraid or are showing submission.",
  "When a dog chases cars, it is often due to inherited behavior that translates into having the urge to herding.",
  "Most do not understand what the gesture of pointing means….they will often stare at the finger, not where it's pointing.",
  "They need to go to the dentist just as we do…. Brushing at home remove plaque but not tarter.",
  "Dogs can have phobias just as people do… some are afraid to enter cars, come do not like rain, etc.",
  "They are not carnivores, they require vegetables for optimal health.",
  "Newborns sleep 90% of the time during the first couple of weeks.",
  "A random dog fact is that obesity is the #1 health problem that affects them.",
  "Many dogs are afraid of thunderstorms because of the air pressure changes that occur and affect their ears.",
  "Paws are made out of skin, granted it is thick skin, but it is not tough enough to withstand anything.",
  "7 out 10 owners  sign their dog’s name on greeting and holiday cards that are send to friends and family.",
  "58% of owner s include their dog when taking family and holiday photos.",
  "George Washington owned 63 purebred Foxhounds.",
  "For optimal health, females should not be bred until 2 years old, only allowed to mate every other heat and retired by age 7.",
  "Males will not have live sperm until about the age of 6 months.",
  "Senior dogs often need ramps to aid them in climbing up to sofas, bed, etc.",
  "Dogs can get motion sickness just as humans can, and the same medication is prescribed as treatment.",
  "Small dogs can be terrified of bath tubs and often do much better when washed in the kitchen sink.",
  "As a dog ages, he or she can begin to turn grey… Most do not make a full change over to a full grey coat, but individual hairs may be seen.",
  "They eat their feces due to a lack of proper vitamins and minerals… many manufactured dog foods contain fillers.",
  "The doggie diaper was invented in the 1980’s and is often used for senior dogs who have lost control of their bowel and/or bladder muscles.",
  "They will eat grass to purposely cause themselves to vomit if they are suffering from stomach distress.",
  "Dogs usually only pay attention to the first syllable in any given word.",
  "In Paris France dogs are allowed in restaurants and also given small chairs of their own.",
  "There are more dogs than children in the city of Seattle, Washington.",
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random cat fact from the cat facts list
        var factIndex = Math.floor(Math.random() * pupper_FACTS.length);
        var randomFact = pupper_FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a pupper fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};

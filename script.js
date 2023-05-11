let playerName = prompt("Hello! Welcome to a day in your life, what is your name?");

alert("Hi "+playerName+". Let's start our day!");

let awake = false;
let snooze = 0;
let shower = false;
let clothes = 0;

//waking up
//awake on time
//running late
//

for (let i=0;i<1;i++){
  if (awake==false && snooze==0){
    
    let wakeUp=prompt("Beep Beep its 5:15! Time to wake up! Do you want to wake up? Please respond yes or no.");
    
    if (wakeUp=='yes'||wakeUp=='Yes'){
      awake = true;
      alert("Yay! Let's go brush our teeth, shower and get dressed.");
    break;
    }
      
    else if (wakeUp=='no'|| wakeUp=='No'){
      snooze = 1;
      alert("ZzZzZzZzZzZzZzZzZzZzZzZzzzzzZZZZ")}
    
    else{i-=1}
  }
  
  if (awake==false && snooze==1){
    let wakeUp = prompt("Beep Beep its 6! You might be late! Do you want to wake up? Please respond yes or no.");
    
    if (wakeUp=='yes'||wakeUp=='Yes'){
      awake = true;
      alert("Okay! Let's go brush our teeth and shower, but we need to hurry. Let's go put on some clothes.")
      break;
    }
    
    else if (wakeUp=='no'|| wakeUp=='No'){
      snooze = prompt("Oh gosh dang, how many times are you going to hit snooze?");
      
      if (snooze>3){
        alert("Punk! Nevermind guess you're sleeping all day, Good Bye!");
      }
      
      else{
        alert("Oh goodness! You wake up and it's 8 am! You're going to be so late. You have no time to shower or brush your teeth. Let's go put on some clothes.");
        awake = true;
        shower = false;
      }
    }
    else{i-=1} //resend the prompt question
  }
}

//getting dressed
//fur coat, casual, all black

for(let i=0;i<1;i++){
  if (awake==true){
    if (snooze>1){
      alert("You have no time to pick an outfit on, so you put on the first thing you see: your fur coat.")
      clothes = 1;
    }
    else{
      clothes=prompt("You have so many clothing options! Do you like to be 1) Warm or 2) a Maxxinista? Enter the number for your option.")
      if (clothes==1){
        alert("Staying warm is always the best option! You put on your fur coat which you inherited from your Great Aunt who sadly passed away on the Titanic RIP.")
      }
      else if (clothes==2){
        alert('Nothings more Maxxinista than wearing all black! You put on a black shirt, black pants, and a black hat.');
      }
      else{i-=1}
    }
  }
}

//running early
//in fur coat, approached by Upper East Sider and offerend $$
//in black, hit by a car
console.log(clothes)
console.log(snooze)
for(i=0;i<1;i++){
  if(snooze==0){
    if(clothes==1){
      alert("You're on your way to work looking so dapper in your fur coat. You smell like old money. Someone must've been whiffing because an older man comes up to you.")
      let sell = prompt("He says to you 'What a magnificent coat! I must have it. Will you sell it to me?' Respond yes or no.")
      if (sell == 'yes' || sell =='Yes'){
        let money = prompt("Amazing how much do you want for it? Please enter how much you want for your coat as a whole number.")
        alert("'Amazing! It's a deal' The old man walks away with your coat and with your new found fortune of "+money+" dollars, you don't need to work! Head home!")
      }
      else{
        alert("'OK, looks like I'm going to have to steal it then' says the old man. He pulls out a  baseball bat and threatens to hit you if you don't give him your coat!")
        alert("You quickly remove the coat and give it to the old man. He hustles away. With tears in your eyes, you continue your journey to work, slightly less fashionable than before") }
    }
    else{
      alert("You start your walk to work. The sun hasn't rose yet. As your crossing the street, you don't see the car coming for you. When you notice it, it's too late.")
      alert("CRASH")
      alert("You awake in the hospital. All of your bones are broken. Maybe if you had worn something more bright...")
    }
  }
}

//running on time
//in fur coat, PETA :(
//in black - good day to work

if (snooze==1){
  if (clothes==1){
    alert("You start your walk to work and you're actually going to be on time!")
    alert("As you're walking, you see a group of people")
    alert("UhOH! You forgot the PETA protest was happening right outside your work! You knew that testing on rabbits for your job was bad but who knew you'd get caught?")
    alert("As your walking in, one of the protesters notices your fur coat. 'Let's get her!' you hear them call. Before you could even react, your coat is covered in red paint. :(")
  }
  else{
    alert("On your walk to work, you notice a group of people outside your building. They're all dressed in black. They're actors, putting on a performance of CATS, your favorite musical! ")
    alert("You decide you don't need to go to work today. You call out sick and live your dream of playing Grizabella")
  }
}


//running late 
//in fur coat - mistaken for a bear, caught, and put on exhibit at the zoo

if (snooze>1 && snooze<=3){
  alert("You are running so late! No time to watch the news. You start running as fast as you can in your coat to catch the train!")
  alert("Somene sees you running and shouts 'BEAR!!'")
  alert("You have no idea who they're talking to")
  alert("Out of nowhere, three people tackle you to the ground! They think you're a bear!")
  alert("Animal control come and knocks you out.")
  alert("You wake up three hours later, in the zoo! Looks like no work for you today.")
}
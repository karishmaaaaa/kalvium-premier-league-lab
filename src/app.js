//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(n){
  let player_debut = [];
  for (i=0 ; i<players.length ; ++i ){
    if (players[i].debut == n){
      player_debut.push(players[i]);
    }
  }return playerdebut;
}
//Progression 4 - Filter players that play at the position _______
function filterByPosition(pos){
  let filter_players = [];
  for (let i = 0; i < players.length; i++){
    if (players[i].position == pos){
      filter_players.push(players[i])
    }
  }
  return filter_players;
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(AN){
  let award_winners = [];
  for (let i = 0; i < players.length; i++){
      for (let j = 0; j <players[i].awards.length; j++){
        if (players[i].awards[j].name == AN){
          award_winners.push(players[i]);
        }
    }
  }
  if (AN == undefined){
    award_winners = [];
  }
  return award_winners;
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(AN, nOT){
  let x_times =[ ];
  for (let i = 0; i < players.length; i++) {
    let Ot = 0; 
    for (let j = 0; j < players[i].awards.length; j++){
      if (players[i].awards[j].name == AN){
        Ot++;
      }
    }
    for (let z = 0; z < players[i].awards.length; z++){
      if (players[i].awards[z].name == AN && Ot == nOT){
        x_times.push(players[i]);
        break
      }
    }
  }
  return x_times; 
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(AN,con){
  let playeraward = filterByAward(AN)
  let playerawardcountry = [ ]
  for (let i=0 ; i < playeraward.length ; i++){
    if (playeraward[i].country == con){
      playerawardcountry.push(playeraward[i])
    }  
  }
  if (AN == undefined || con == undefined){
    playerawardcountry == []
  }
  return playerawardcountry
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____\
function filterByNoOfAwardsxTeamxAge(noaward,team,age){
  var ans = [ ]
  console.log(noaward,team,age)
  for (let i=0 ; i<players.length ; i++){
    if (players[i].age < age && players[i].team == team && players[i].awards.length >= noaward ){
      ans.push(players[i])
      console.log(ans)
    }
  }
  return ans
}

//Progression 9 - Sort players in descending order of their age
function age(item1,item2){
  return item2.age-item1.age
}
function AgeSorter(){
  var agesort = players.sort(age(a,b))
  return agesort
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function filterByTeamnamexNoofAwards(team){
  var teammember = players.filter(function(player){
    return player.team == team;
  })
  teammember.sort(age(a,b))

  return teammember
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function filterByAwardsxNOofAwardsxName(award,no,country){
  let number_award = filterByAwardxTimes(award,no)
  let namecountry = number_award.filter(function(i){
    return i.country == country
  })

  return namecountrycountry

}

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function filterByNamexAgeOlder(age){
  let moreage = players.filter(function(i){
    return i.age>age
  })
  m.sort(function(a){
    return a.name
  })

  let old = players.filter(function(items){
    return items.awards.sort(function (a,b){
      return a.year - b.year; 
  })
})
return old
}
let statisticValue = document.querySelectorAll('.statistic-value');
let upgradeBtn = document.querySelector('.stat-upgrade');
let rangerBtn = document.querySelector('.ranger');
let mageBtn = document.querySelector('.mage');
let warriorBtn = document.querySelector('.warrior');

let selectedClass;

    let magStatistic = {
    intelligence: 17,
    agility: 8,
    strength: 13
    };

    let warriorStatistic = {
        intelligence: 6,
        agility: 11,
        strength: 27,
    };
    let rangerStatistic = {
        intelligence: 15,
        agility: 20,
        strength: 18
    };









    function classHandler() {
        selectedClass = 'mag';
        if(selectedClass === 'ranger'){
            statisticValue[2].innerHTML = rangerStatistic.strength;
            statisticValue[1].innerHTML = rangerStatistic.agility;
            statisticValue[0].innerHTML = rangerStatistic.intelligence;
            console.log('you chose ranger')
        }else if(selectedClass === 'warrior') {
            statisticValue[2].innerHTML =   warriorStatistic.strength;
            statisticValue[1].innerHTML =   warriorStatistic.agility;
            statisticValue[0].innerHTML =   warriorStatistic.intelligence;
            console.log('you chose warrior')
        }else if (selectedClass === 'mag'){
            statisticValue[2].innerHTML =  magStatistic.intelligence;
            statisticValue[1].innerHTML =  magStatistic.agility;
            statisticValue[0].innerHTML =  magStatistic.strength;
            console.log('you chose mage')
        }
    }


function statisticUpgrade() {
    statisticValue[0].innerHTML = Number(magStatistic.intelligence++);
    statisticValue[1].innerHTML = Number(magStatistic.agility++);
    statisticValue[2].innerHTML = Number(magStatistic.strength++);

}
upgradeBtn.addEventListener('click',statisticUpgrade);


rangerBtn.addEventListener('click', classHandler);
mageBtn.addEventListener('click', classHandler);
warriorBtn.addEventListener('click', classHandler);


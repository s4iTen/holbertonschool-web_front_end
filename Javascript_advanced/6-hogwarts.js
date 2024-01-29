const studentHogwarts = () => {
  let privateScore = 0;
  let name = "";
  const changeScoreBy = (points) => {
    return (privateScore += points);
  };
  const setName = (newName) => {
    name = newName;
  };

  const rewardStudent = () => {
    changeScoreBy(1);
  };

  const penalizeStudent = () => {
    changeScoreBy(-1);
  };

  const getScore = () => {
    return `${name}: ${privateScore}`;
  };

  return {
    setName,
    rewardStudent,
    penalizeStudent,
    getScore,
  };
};

const harry = studentHogwarts();
const draco = studentHogwarts();

harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();

draco.setName('Draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();

console.log(harry.getScore());
console.log(draco.getScore());
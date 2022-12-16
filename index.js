function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  console.log(saturdayFun()); // "This Saturday, I want to roller-skate!"
  console.log(saturdayFun("go to the beach")); // "This Saturday, I want to go to the beach!"

  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  
  console.log(mondayWork()); // "This Monday, I will go to the office."

  function wrapAdjective(wrapper) {
    return function(adjective) {
      return `You are ${wrapper}${adjective}${wrapper}!`;
    };
  }
  
  const highlight = wrapAdjective('*');
  console.log(highlight('a hard worker')); // "You are *a hard worker*!"
  
  const emphasize = wrapAdjective('||');
  console.log(emphasize('a dedicated programmer')); // "You are ||a dedicated programmer||!"
  
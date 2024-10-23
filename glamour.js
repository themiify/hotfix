function applyCodebyVersion(version) {
    if (version === '11') {
      console.log("Executing code for version 11");


    } else if (version === '12') {
      console.log("Executing code for version 12");


    } else {
      console.log("No matching version, applying default code.");


    }
  }
  
  
  if (typeof currentVersion !== 'undefined') {
    applyCodebyVersion(currentVersion);

  } else {

    console.log("No version.");
  }
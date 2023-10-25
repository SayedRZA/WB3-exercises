function parseAndDisplayName(fullName) {
    const spaceIndex = fullName.indexOf(' ');
    if (spaceIndex !== -1) {
      const firstName = fullName.substring(0, spaceIndex);
      const lastName = fullName.substring(spaceIndex + 1);
  
      console.log("Name:", fullName);
      console.log("First name:", firstName);
      console.log("Last name:", lastName);
    } else {
      console.log("Invalid full name format. Couldn't extract first and last names.");
    }
  }
  
  parseAndDisplayName("Brenda Kaye");
  parseAndDisplayName("Ian Auston");
  parseAndDisplayName("Siddalee Grace");
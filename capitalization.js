let firstName = "henryyyyyyyy";

function formatName(name) {
  return name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
}

let formattedFirstName = formatName(firstName);
console.log(formattedFirstName);

let firstName = "Henry";

function formatName(name) {
  return (
    name.substring(0, 2).toLowerCase() +
    name.charAt(2).toUpperCase() +
    name.substring(3).toLowerCase()
  );
}

let formattedFirstName = formatName(firstName);
console.log(formattedFirstName);

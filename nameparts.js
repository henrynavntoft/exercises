"use strict";

const fullName = "Henry Lundberg Navntoft";

const lastSpaceIndex = fullName.lastIndexOf(" ");

const firstSpaceIndex = fullName.indexOf(" ");

const firstName = fullName.substring(0, firstSpaceIndex);

const lastName = fullName.substring(lastSpaceIndex + 1);

const middleName = fullName.substring(firstSpaceIndex + 1, lastSpaceIndex);

console.log(fullName);

console.log(firstName);

console.log(middleName);

console.log(lastName);

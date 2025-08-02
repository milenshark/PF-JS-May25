function passwordReset(input) {
  let password = input.shift(); 

  for (let commandLine of input) {
    if (commandLine === "Done") break;

    let [command, arg1, arg2] = commandLine.split(" ");

    if (command === "TakeOdd") {
      let newPassword = "";
      for (let i = 1; i < password.length; i += 2) {
        newPassword += password[i];
      }
      password = newPassword;
      console.log(password);
    } else if (command === "Cut") {
      let index = Number(arg1);
      let length = Number(arg2);
      let substring = password.substring(index, index + length);
      password = password.replace(substring, "");
      console.log(password);
    } else if (command === "Substitute") {
      let substring = arg1;
      let substitute = arg2;
      if (password.includes(substring)) {
        while (password.includes(substring)) {
          password = password.replace(substring, substitute);
        }
        console.log(password);
      } else {
        console.log("Nothing to replace!");
      }
    }
  }

  console.log(`Your password is: ${password}`);
}

passwordReset([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done"
]);

const cipher = {
  encode (offset, string) {
    let spacesToRun = offset % 26;
    let encodedMessage = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i] == " ") {
            encodedMessage += " ";
        } else {
            let letterCipherOne = string.charCodeAt(i) + spacesToRun;
            if (letterCipherOne > 90) {
                let res = letterCipherOne - 90;
                let letterCipherTwo = 64 + res;
                encodedMessage += String.fromCharCode(letterCipherTwo);
            } else {
                encodedMessage += String.fromCharCode(letterCipherOne);
            }
        }
    }

    return encodedMessage;
  },

  decode (offset, string) {
    let spacesToRun = offset % 26;
    let decodeMessaje = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i] == " ") {
            decodeMessaje += " ";
        } else {
           let letterDecipherOne = string.charCodeAt(i) - spacesToRun;
           if (letterDecipherOne < 65) {
              let res =  letterDecipherOne - 65;
              let letterDecipherTwo = 91 + res
              decodeMessaje += String.fromCharCode(letterDecipherTwo);
           } else {
              decodeMessaje += String.fromCharCode(letterDecipherOne);
           }
        }
    }
    return decodeMessaje;
  }
}

export default cipher;

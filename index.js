function isOs() {
  let os = process.platform;
  if (os == "darwin") os = "MacOS"
  else if (os == "win32" || os == "win64") os="Windows"
  else if (os == "linux") os = "Linux"
  else "Unknow";
  
  return os;
}

module.exports = isOs;
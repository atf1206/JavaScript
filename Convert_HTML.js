function convertHTML(str) {
  my_string = str;
  my_string = my_string.replace(/&/g, "&amp;");
  my_string = my_string.replace(/</g, "&lt;");
  my_string = my_string.replace(/>/g, "&gt;");
  my_string = my_string.replace(/\"/g, "&quot;");
  my_string = my_string.replace(/\'/g, "&apos;");
  return my_string;
}

convertHTML("Dolce & Gabbana");
const fs = require('fs');
const path = require('path');
const current_dir = path.basename(__dirname);

var arrPages = [];

function readMd(dir, file) {
  let text = fs.readFileSync(dir + file, 'utf8', function (err, data) {
    if (err) {
      return console.log('Unable to scan file: ' + err);
    }
    return data
  });

  let image = '';

  if (!text.includes('![Computer](../images/prints/computer.png)')) {
    image = 
`- ![Computer](../images/prints/computer.png)
  - ![Print](../images/prints/${ file.replace('.md', '').replace(' ', '-').toLowerCase() }.png)

`;
  }
  
  let newText = image + text.replace(/(\r?\n\*\*\*\r?\n)/, '').replace(/(\-.\-.\-\r\n\r\n\r\n)/, '') + '\r\n***\r\n';

  fs.writeFile(dir + file, newText, function (err) {
    if (err) return console.log(err);
  });

  text = text.toString();
  
  let arrH2 = [];
  let h1 = /[^#]#\s(.*?)[\n\r].*/g.exec(text) || [];

  var regex = /[^#]##\s(.*?)[\n\r].*/g;
  var myArray;
  while ((myArray = regex.exec(text)) !== null) {
    var msg = 'Found ' + myArray[1] + '. ';
    msg += 'Next match starts at ' + regex.lastIndex;

    arrH2.push(myArray[1])
  }

  let arrPage = []

  arrPage.push(h1[1])
  arrPage.push(arrH2)
  arrPages.push(arrPage)
}

fs.readdir(`../${current_dir}/docs/`, function (err, files) {

  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }

  files.sort();
  
  files.forEach(async function (file) {
    let isDir = fs.statSync(`../${current_dir}/docs/${ file }`).isDirectory();
    if (isDir) {
      fs.readdir(`../${current_dir}/docs/${ file }/`, function (err, files2) {
        if (err) {
          return console.log('Unable to scan directory: ' + err);
        }
      
        files2.sort();
        
        files2.forEach(async function (file2) {
          if (file2.includes('md')) {
            readMd(`../${current_dir}/docs/${ file }/`, file2);
          }
        })
      })
    }

    if (file.includes('md') && !file.includes('TABLE') && !file.includes('index')) {
      readMd(`../${current_dir}/docs/`, file);
    }
  });
});


setTimeout(() => {

  let md = `
<!-- _class: table-of-contents -->

# Orientações de cadastro

![Logo Vnda](../images/prints/vnda.svg)

## [Tabela de conteúdos](#1)
\n`


  arrPages.forEach((pg, index) => {
    md += `- ### [${ pg[0] }](#${ index + 2 }) \r`;

    for (var i = 0; i < pg[1].length; i++) {
      md += `   - [${ i + 1 } ${ pg[1][i] }](#${ index + 2 }) \r`;
    }

    md += `\r\r`;
  })

  md += `
\r
***
\r`;

  fs.writeFile(`../${current_dir}/docs/00-TABLE.md`, md, function (err) {
    if (err) return console.log(err);
  });

}, 2000)

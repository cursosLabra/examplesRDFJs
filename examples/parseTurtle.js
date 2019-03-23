const N3 = require('n3');
const parser = new N3.Parser({ format: 'text/turtle'});
const str =   
`PREFIX : <http://example.org/>
PREFIX schema: <http://schema.org/>
:alice schema:givenName "Alice" ;
       schema:knows :bob .`
       
parser.parse(str, (error, triple, prefixes) => {
    if (triple)
      console.log(triple);
    else {
      console.log("# End of triples!");
      console.log(prefixes);
    }
  });
const N3 = require('n3');
const { DataFactory } = N3;
const { namedNode, literal, defaultGraph, quad } = DataFactory;

const triple1 = quad(namedNode('https://example.org/bob'), 
                     namedNode('http://schema.org/givenName'), 
                     literal('Robert'));
const triple2 = quad(namedNode('https://example.org/bob'), 
                     namedNode('http://schema.org/knows'), 
                     namedNode('http://example.org/alice'));

console.log(triple1);
console.log(triple2);

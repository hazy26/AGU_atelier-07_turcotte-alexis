
import { annotate } from "rough-notation";


/* 
         
            Box Notations 

*/
const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    const annotation = annotate(box, { type: 'box', color: '#4C956C'});
    annotation.show();
});




/* 
         
            Circle Notations 

*/
const circles = document.querySelectorAll('.circle');
circles.forEach(circle => {
    const annotation = annotate(circle, { type: 'circle', color: '#4C956C'});
    annotation.show();
});




/* 
         
            Crossed-Off Notations 

*/
const crossedOffs = document.querySelectorAll('.crossed-off');
crossedOffs.forEach(crossedOff => {
    const annotation = annotate(crossedOff, { type: 'crossed-off', color: '#4C956C'});
    annotation.show();
});




/* 
         
            Highlights Notations 

*/
const highlights = document.querySelectorAll('.highlight');
highlights.forEach(highlight => {
    const annotation = annotate(highlight, { type: 'highlight', color: '#FFC9B9'});
    annotation.show();
});

/* 
         
            Strike-through Notations 

*/
const strikes = document.querySelectorAll('.strike');
strikes.forEach(strike => {
    const annotation = annotate(strike, { type: 'strike-through', color: '#4C956C'});
    annotation.show();
});




/* 
         
            Underline Notations 

*/
const underlines = document.querySelectorAll('.underline');
underlines.forEach(underline => {
    const annotation = annotate(underline, { type: 'underline', color: '#4C956C'});
    annotation.show();
});
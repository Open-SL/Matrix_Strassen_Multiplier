'use strict';

var strassen = require("../index");
var test = require("tape");

test('a general divisable by 2 example', function(t) {
    var A = [[1,2,3,4],[2,3,4,5],[1,2,35,3],[3,2,5,2]];
    var B = [[1,2,3,4],[2,3,4,5],[1,2,35,3],[3,2,5,2]];

    var C = strassen(A,B);

    var answer_to_be = [[20,22,136,31],[27,31,183,45],[49,84,1251,125],[18,26,202,41]];
    t.deepEqual(C, answer_to_be);

    t.end()
})


test('not divisable by 2 example', function(t) {
    var A = [[1,2,3,4],[2,3,4,5],[1,2,35,3]];
    var B = [[1,2,3,4],[2,3,4,5],[1,2,35,3]];

    var C = strassen(A,B);

    var answer_to_be = [ [ 8, 14, 116 ], [ 12, 21, 158 ], [ 40, 78, 1236 ] ];
    t.deepEqual(C, answer_to_be);

    t.end()
})
var notes= ["c", "cs", "d", "ds", "e", "f", "fs", "g", "gs", "a", "as", "b"]
var scale= notes[[0,2,4,5,7,8,9,11],[0,2,3,5,7,9,10],[0,1,3,5,7,8,10],
                  [0,2,4,5,7,8,10,11],[0,2,4,5,7,9,10],[0,2,3,5,7,9,10],[0,1,3,5,6,8,10]]
var majorTri= [scale([0][0]), scale([0][2]), scale([0][4]),]
var majorSev= majorTri + scale([0][6])

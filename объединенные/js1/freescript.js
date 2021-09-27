console.log("dfwefwefw")
var board2 = Chessboard('board2', {
 draggable: true,
 dropOffBoard: 'trash',
 sparePieces: true
})
$('#flipOrientationBtn').on('click', board2.flip)
$('#startBtn').on('click', board2.start)
$('#clearBtn').on('click', board2.clear)
// --- End Example JS -----------------------------------
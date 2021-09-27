var puzzles = [
/*
{
  date: '11/12/13',
  balP: '1',
  balM: '1',
  title: 'Задача 1. Мат в 1 ход - Ход белых',
  start: '7k/8/8/8/8/4p3/8/N6K w - - 0 11',
  moves: [
   'a1-c2',
   'e3-e2',
   'c2-e3'
  ]
 },
{
  date: '11/12/13',
  balP: '1',
  balM: '1',
  title: 'Задача 1. Мат в 1 ход - Ход белых',
  start: '6k1/8/8/8/8/4p3/8/B6K w - - 0 1',
  moves: [
   'a1-d4',
   'e3-e2',
   'd4-e3'
  ]
 }

*/


 {
  date: '11/12/13',
  balP: '!',
  balM: '!',
  title: 'Задача 1. Мат в 1 ход - Ход белых',
  start: '3q1rk1/5pbp/5Qp1/8/8/2B5/5PPP/6K1 w - - 0 1',
  moves: [
   'f6-g7'
  ]
 },

 {
  date: '11/13/13',
  balP: '!',
  balM: '!',
  title: 'Задача 2. Мат в 2 хода - Ход белых',
  start: '1Q6/8/8/8/8/k2K4/8/8 w - - 0 1',
  moves: [
   'd3-c3',
   'a3-a4',
   'b8-b4'
  ]
 },

 {
  date: '11/14/13',
  balP: '2',
  balM: '2',
  title: 'Задача 3. Мат в 2 хода - Ход белых',
  start: 'r1bq4/pppn2R1/3p1n2/4P2p/3P2pk/3Q4/PPP3P1/R6K w - - 0 1',
  moves: [
   'd3-h3',
   'g4-h3',
   'g2-g3'
  ]
 },

 {
  date: '11/15/13',
  balP: '2',
  balM: '2',
  title: 'Задача 4. Мат в 2 хода - Ход черных',
  start: '4k2r/p1p2p1p/b1p2qpb/3P4/3r2P1/1BN1B3/PPP3PP/R1Q3KR b k - 0 1',
  moves: [
   'd4-d1',
   'c1-d1',
   'h6-e3'
  ]
 },

 {
  date: '11/16/13',
  balP: '3',
  balM: '3',
  title: 'Задача 5. Мат в 3 хода - Ход черных',
  start: '6k1/1p5p/3p1rp1/P2Pbn2/1PB4P/3Q1q2/4R3/4B1K1 b - - 0 1',
  moves: [
   'f3-f1',
   'g1-f1',
   'f5-e3',
   'f1-g1',
   'f6-f1'
  ]
 },

 {
  date: '11/17/13',
  balP: '3',
  balM: '3',
  title: 'Задача 6. Мат в 3 хода - Ход белых',
  start: '7k/7p/4b3/4b2q/8/2B5/5Q1P/7K w - - 0 1',
  moves: [
   'f2-f8',
   'e6-g8',
   'f8-f6',
   'e5-f6',
   'c3-f6'
  ]
 },

 {
  date: '11/18/13',
  balP: '3',
  balM: '3',
  description: 'Carlsen vs Hans K Harestad, Copenhagen, 2003',
  title: 'Задача 7. Мат в 3 хода - Ход белых',
  start: 'r7/3bb1kp/q4p1N/1pnPp1np/2p4Q/2P5/1PB3P1/2B2RK1 w - - 0 1',
  moves: [
   'h4-g5',
   'f6-g5',
   'f1-f7',
   'g7-h6',
   'f7-h7'
  ]
 },

  {
   date: '11/19/13',
   balP: '3',
   balM: '3',
   description: 'Anand vs Vassily Ivanchuk, Monte Carlo, 2004',
   title: 'Задача 8. Ход белых (трёхходовая)',
   start: 'r7/P1q2p1k/6p1/R6p/3Qp2P/6P1/5P1K/8 w - - 0 1',
   moves: [
    'a5-h5',
    'g6-h5',
    'd4-e4',
    'h7-h6',
    'e4-a8'
   ]
  },

  {
   date: '11/20/13',
   balP: '4',
   balM: '4',
   description: 'E Chukaev vs Tal, Tbilisi, 1956',
   title: 'Задача 9. Мат в 4 хода - Ход черных',
   start: '4r1k1/5pbp/3p2p1/1ppP4/pqP5/R4B2/1PQ3PP/1K6 b - - 0 1',
   moves: [
    'e8-e1',
    'f3-d1',
    'e1-d1',
    'b1-a2',
    'b4-a3',
    'b2-a3',
    'd1-a1'
   ]
  },

  {
   date: '11/21/13',
   balP: '30',
   balM: '14',
   description: 'Composed by Josef Kling 1851',
   title: 'Задача 10. Мат в 14 ходов - Ход белых',
   start: 'kq4n1/4p2Q/1P2P3/1K6/8/8/p7/8 w - - 0 1',
   moves: [
    'h7-e4',
    'b8-b7',
    'e4-a4',
    'a8-b8',
    'a4-f4',
    'b8-a8',
    'f4-f8',
    'b7-b8',
    'f8-f3',
    'b8-b7',
    'f3-a3',
    'a8-b8',
    'a3-g3',
    'b8-a8',
    'g3-g8',
    'b7-b8',
    'g8-g2',
    'b8-b7',
    'g2-a2',
    'a8-b8',
    'a2-h2',
    'b8-a8',
    'h2-h8',
    'b7-b8',
    'h8-a1',
    'a8-b7',
    'a1-a6'
   ]
  },

  {
   date: '11/22/13',
   balP: '2',
   balM: '2',
   description: 'Tal v Botvinnik World Championship Match (1960)',
   title: 'Задача 11. Ход белых (2 хода)',
   start: '2r5/kp1r1pp1/pR2pnp1/2Pq4/3P4/1Q6/4N1PP/1R4K1 w - - 0 1',
   moves: [
    'b6-a6',
    'a7-b8',
    'b3-a4'
   ]
  },

  {
   date: '11/23/13',
   balP: '3',
   balM: '3',
   title: 'Задача 12. Ход белых (трёхходовая)',
   start: 'k7/1p6/PP1K4/8/8/8/8/8 w - - 0 1',
   moves: [
    'd6-c7',
    'b7-a6',
    'b6-b7',
    'a8-a7',
    'b7-b8'
   ]
  },

  {
   date: '11/24/13',
   balP: '6',
   balM: '5',
   description: 'Kramnik vs Jaan Ehlvest, Riga, 1995',
   title: 'Задача 13. Мат в 5 ходов - Ход белых',
   start: '3k3r/p1rb1p2/5P1b/q1p3B1/1pp1Q3/6P1/PP3P1P/2KRR3 w - - 0 1',
   moves: [
    'e4-a8',
    'c7-c8',
    'd1-d7',
    'd8-d7',
    'a8-d5',
    'd7-c7',
    'e1-e7',
    'c7-b6',
    'd5-b7'
   ]
  },

  {
   date: '11/12/13',
   balP: '1',
   balM: '1',
   title: 'Задача 14. Мат в 1 ход - Ход черных',
   start: '6k1/1p2b1pp/p2p4/3Pp3/PP2Q3/2q1BP2/6PP/6K1 b - - 0 1',
   moves: [
    'c3-e1'
   ]
  },

  {
   date: '11/12/13',
   balP: '1',
   balM: '1',
   title: 'Задача 15. Мат в 1 ход - Ход черных',
   start: 'r1b3k1/p5pp/2p5/3p4/N2Qp1Pq/1P4b1/PBP1RrP1/R4BK1 b - - 0 1',
   moves: [
    'h4-h2'
   ]
  },

  {
   date: '11/12/13',
   balP: '1',
   balM: '1',
   title: 'Задача 16. Мат в 1 ход - Ход белых',
   start: 'r5kr/pR6/5Q2/7B/6qp/4P1P1/P4P1P/5RK1 w - - 0 1',
   moves: [
    'f6-f7'
   ]
  },

  {
   date: '11/12/13',
   balP: '1',
   balM: '1',
   title: 'Задача 17. Мат в 1 ход - Ход белых',
   start: '1q3rk1/3nnp1p/1p2N1p1/pP6/4Pp2/1BQ4P/P5P1/2R3K1 w - - 0 1',
   moves: [
    'c3-g7'
   ]
  },

  {
   date: '11/12/13',
   balP: '1',
   balM: '1',
   title: 'Задача 18. Мат в 1 ход - белых',
   start: '2R3rk/p6r/1p1p4/3P4/5P2/7R/3B1PPP/5K2 w - - 0 1',
   moves: [
    'd2-c3'
   ]
  },

  {
   date: '11/12/13',
   balP: '1',
   balM: '1',
   title: 'Задача 19. Мат в 1 ход - Ход черных',
   start: '6k1/pp3ppp/4p3/3p1bP1/4nK1P/bP2NQ2/P1r5/8 b - - 0 1',
   moves: [
    'a3-d6'
   ]
  },

  {
   date: '11/12/13',
   balP: '1',
   balM: '1',
   title: 'Задача 20. Мат в 1 ход - Ход белых',
   start: 'rk2r3/p1p1np1p/p3B3/8/3Q2bq/3P4/PPP5/5RK1 w - - 0 1',
   moves: [
    'd4-b4'
   ]
  },

  {
   date: '11/12/13',
   balP: '1',
   balM: '1',
   title: 'Задача 21. Ход белых',
   start: '6kq/8/3p4/1p1P4/1P6/p7/PB3R2/5K2 w - - 0 1',
   moves: [
    'b2-h8'
   ]
  },

  {
   date: '11/12/13',
   balP: '1',
   balM: '1',
   title: 'Задача 22. Ход белых',
   start: 'kn6/b7/8/8/4q3/8/4B1PN/6NK w - - 0 1',
   moves: [
    'e2-f3'
   ]
  },

  {
   date: '11/12/13',
   balP: '1',
   balM: '1',
   title: 'Задача 23. Ход белых',
   start: '6rk/7p/8/8/6R1/8/6R1/7K w - - 0 1',
   moves: [
    'g4-g8'
   ]
  },  

  {
   date: '11/12/13',
   balP: '1',
   balM: '1',
   title: 'Задача 24. Ход черных',
   start: '4b2k/6pp/8/8/4R3/8/8/7K b - - 0 1',
   moves: [
    'e8-c6'
   ]
  },

  {
   date: '11/12/13',
   balP: '1',
   balM: '10',
   title: 'Задача 25. Ход белых',
   start: '7k/6pp/7p/6n1/2P5/1P6/4p1K1/R7 w - - 0 1',
   moves: [
    'a1-a8'
   ]
  },

  {
   date: '11/12/13',
   balP: '1',
   balM: '1',
   title: 'Задача 26. Ход белых. Мат в 1 ход',
   start: '7k/2r3np/R4Rp1/pr1p1p2/1p1P1P2/1P4N1/P5K1/8 w - - 0 1',
   moves: [
    'f6-f8'
   ]
  },

  {
   date: '11/12/13',
   balP: '1',
   balM: '1',
   title: 'Задача 27. Ход белых. Мат в 1 ход',
   start: '5bkr/ppp3pp/8/4P1r1/2P5/4K3/PP1Q4/8 w - - 0 1',
   moves: [
    'd2-d5'
   ]
  },  

  {
   date: '11/12/13',
   balP: '1',
   balM: '1',
   title: 'Задача 28. Ход белых. Мат в 1 ход',
   start: '5bkr/ppp3p1/4p2p/4P1r1/2P5/4K2B/PPQ5/8 w - - 0 1',
   moves: [
    'h3-e6'
   ]
  },  

  {
   date: '11/12/13',
   balP: '1',
   balM: '1',
   title: 'Задача 29. Ход белых. Мат в 1 ход',
   start: '2k5/pppn4/3pR3/8/4Pr2/1PPP4/P4rPP/5R1K w - - 0 1',
   moves: [
    'e6-e8'
   ]
  },

  {
   date: '11/12/13',
   balP: '1',
   balM: '1',
   title: 'Задача 30. Ход белых. Мат в 1 ход',
   start: '6rk/6pp/2r5/2P3N1/8/1R1P4/3K4/8 w - - 0 1',
   moves: [
    'g5-f7'
   ]
  },

  {
   date: '11/12/13',
   balP: '1',
   balM: '1',
   title: 'Задача 31. Ход белых. Мат в 1 ход',
   start: '1k6/ppp3P1/8/1n2nP2/3p4/8/1P1P4/7K w - - 0 1',
   moves: [
    'g7-g8'
   ]
  },

  {
   date: '11/12/13',
   balP: '1',
   balM: '1',
   title: 'Задача 32. Ход белых. Мат в 1 ход',
   start: '7k/8/8/2K5/8/8/2R5/6R1 w - - 0 1',
   moves: [
    'c2-h2'
   ]
  },  

  {
   date: '11/12/13',
   balP: '1',
   balM: '1',
   title: 'Задача 33. Ход белых. Мат в 1 ход',
   start: '2r2qnr/pn4pk/1p1R3p/6P1/1PN2P2/P3P1K1/3N4/8 w - - 0 1',
   moves: [
    'g5-g6'
   ]
  },  

  {
   date: '11/12/13',
   balP: '1',
   balM: '1',
   title: 'Задача 34. Ход белых. Мат в 1 ход',
   start: 'r1bqkb1r/ppp2ppp/2np1n2/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR w KQkq - 0 1',
   moves: [
    'h5-f7'
   ]
  },

  {
   date: '11/12/13',
   balP: '1',
   balM: '1',
   title: 'Задача 35. Ход черных. Мат в 1 ход',
   start: '8/3r4/8/8/8/1k6/8/K7 b - - 0 1',
   moves: [
    'd7-d1'
   ]
  },

  {
   date: '11/12/13',
   balP: '1',
   balM: '1',
   title: 'Задача 36. Ход белых. Мат в 1 ход',
   start: '3k4/5r2/r2PP3/4R3/3KP3/8/8/1R6 w - - 0 1',
   moves: [
    'b1-b8'
   ]
  },

  {
   date: '11/12/13',
   balP: '2',
   balM: '2',
   title: 'Задача 37. Ход белых. Мат в 2 ходa',
   start: '2r4k/1p1P2pp/1P6/8/7Q/4PK2/8/8 w - - 0 1',
   moves: [
    'd7-d8',
    'c8-d8',
    'h4-d8'
   ]
  },

  {
   date: '11/12/13',
   balP: '2',
   balM: '2',
   title: 'Задача 38. Ход черных. Мат в 2 хода',
   start: '6rk/1p4p1/2pq3p/4b2N/5p2/2P3PP/PP4PK/3r3Q b - - 0 1',
   moves: [
    'f4-g3',
    'h5-g3',
    'e5-g3'
   ]
  },

  {
   date: '11/12/13',
   balP: '3',
   balM: '3',
   title: 'Задача 39. Мат в 3 хода - Ход белых',
   start: 'rnbk1b2/ppp5/6Q1/3pN3/3Pp3/8/PPP1KP1P/RNq5 w KQkq - 0 1' ,
   moves: [ 
    'g6-f6', 
    'f8-e7', 
    'f6-h8', 
    'e7-f8', 
    'h8-f8' 
  ]
  },

  {
   date: '11/12/13',
   balP: '2',
   balM: '2',
   title: 'Задача 40. Мат в 2 хода - Ход белых',
   start: '7k/8/b5Q1/8/8/8/8/R3K3 w KQkq - 0 1' ,
   moves: [ 
    'e1-c1', 
    'a6-d3', 
    'd1-h1'  
   ]
  },

  {
   date: '11/12/13',
   balP: '2',
   balM: '2',
   title: 'Задача 41. Мат в 2 хода - Ход белых',
   start: '8/8/8/8/8/7p/5K1k/R7 w KQkq - 0 1' ,
   moves: [ 
    'a1-a3', 
    'h2-h1', 
    'a3-h3'  
   ]
  },

  {
   date: '11/12/13',
   balP: '2',
   balM: '2',
   title: 'Задача 42. Мат в 2 хода - Ход белых',
   start: '8/4P1Q1/3k4/8/3K4/8/8/8 w KQkq - 0 1' ,
   moves: [ 
    'e7-e8b', 
    'd6-e6', 
    'g7-e5'  
   ]
  },

  {
   date: '11/12/13',
   balP: '2',
   balM: '2',
   title: 'Задача 43. Мат в 2 хода - Ход белых',
   start: '8/5k1P/8/6K1/4Q3/8/8/8 w KQkq - 0 1' ,
   moves: [ 
    'h7-h8r', 
    'f7-g7', 
    'e4-h7'  
   ]
  },

  {
   date: '11/12/13',
   balP: '3',
   balM: '3',
   title: 'Задача 44. Мат в 3 хода - Ход белых',
   start: '5kr1/ppp1r1pR/1q1p1p2/1b3P1B/4P3/1Q6/PPP5/1K5R w KQkq - 0 1' ,
   moves: [ 
    'b3-g8', 
    'f8-g8', 
    'h7-h8', 
    'g8-h8', 
    'h5-f7' 
   ]
  },

  {
   date: '11/12/13',
   balP: '3',
   balM: '3',
   title: 'Задача 45. Мат в 3 хода - Ход белых',
   start: 'r3rk2/p1p1q1b1/1p2Bn2/8/2P3Q1/6R1/PP3PP1/5K1R w KQkq - 0 1' ,
   moves: [ 
    'h1-h8', 
    'g7-h8', 
    'g4-g8', 
    'f6-g8', 
    'g3-g8' 
   ]
  },

  {
   date: '11/12/13',
   balP: '2',
   balM: '2',
   title: 'Задача 46. Мат в 2 хода - Ход белых',
   start: '5r2/5pPk/5K2/8/8/8/8/8 w KQkq - 0 1' ,
   moves: [ 
    'g7-f8R', 
    'h7-h6', 
    'f8-h8'  
   ]
  },

  {
   date: '11/12/13',
   balP: '2',
   balM: '2',
   title: 'Задача 47. Мат в 2 хода - Ход белых',
   start: '7k/r5bp/p6N/3P4/8/2Pn2R1/3r2PP/5RK1 w KQkq - 0 1' ,
   moves: [ 
    'f1-f8', 
    'g7-f8', 
    'g3-g8'  
   ]
  },

  {
   date: '11/12/13',
   balP: '3',
   balM: '3',
   title: 'Задача 48. Мат в 3 хода - Ход белых',
   start: '7k/2p2q1p/p1p4P/1p4Q1/3P4/8/P1P3P1/6K1 w KQkq - 0 1' ,
   moves: [ 
    'g5-d8', 
    'f7-g8', 
    'd8-f6', 
    'g8-g7', 
    'f6-g7' 
    ]
  },

  {
   date: '11/12/13',
   balP: '2',
   balM: '2',
   title: 'Задача 49. Мат в 2 хода - Ход белых',
   start: 'kr6/pr6/1b6/1N3n2/4B1p1/5pBq/5P2/R5K1 w KQkq - 0 1' ,
   moves: [ 
    'a1-a7', 
    'b6-a7', 
    'b5-c7'  
   ]
  },
  
  {
   date: '11/12/13',
   balP: '2',
   balM: '2',
   title: 'Задача 50. Мат в 2 хода - Ход черных',
   start: '1k6/p5pp/1p1q1p2/2p4n/Q2P2PP/2P2P1K/P3r3/6RR b KQkq - 0 1' ,
   moves: [ 
    'd6-g3', 
    'g1-g3', 
    'h5-f4'
   ]
  },
  
  {
   date: '11/12/13',
   balP: '2',
   balM: '2',
   title: 'Задача 51. Мат в 2 хода - Ход белых',
   start: '8/8/p1K5/kp6/8/1PP5/8/8 w KQkq - 0 1' ,
   moves: [ 
    'c6-c5', 
    'b5-b4', 
    'c3-b4'  
   ]
  },

  {
   date: '11/12/13',
   balP: '3',
   balM: '3',
   title: 'Задача 52. Мат в 3 хода - Ход белых',
   start: 'R2B4/p4q1k/6p1/4Q3/PK6/8/1P6/r6r w KQkq - 0 1' ,
   moves: [ 
    'e5-h8', 
    'h7-h8', 
    'd8-f6', 
    'h8-h7', 
    'a8-h8' 
   ]
  },

  {
   date: '11/12/13',
   balP: '3',
   balM: '3',
   title: 'Задача 53. Мат в 3 хода - Ход белых',
   start: '4r1k1/2r3pp/2pqPpN1/pp3P2/2b3RQ/P3R2P/1P4P1/7K w KQkq - 0 1' ,
   moves: [ 
    'h4-h7', 
    'g8-h7', 
    'g4-h4', 
    'h7-g8', 
    'h4-h8' 
   ]
  },

  {
   date: '11/12/13',
   balP: '3',
   balM: '3',
   title: 'Задача 54. Мат в 3 хода - Ход белых',
   start: '2b1k1r1/2r2p2/4pQ2/4R3/p1qNpP2/1p6/PPP3PP/2KR4 w KQkq - 0 1' ,
   moves: [ 
    'f6-d8', 
    'e8-d8', 
    'd4-c6', 
    'd8-e8', 
    'd1-d8' 
   ]
  },

  {
   date: '11/12/13',
   balP: '3',
   balM: '3',
   title: 'Задача 55. Мат в 3 хода - Ход белых',
   start: 'r3nr1k/1bp1b1pp/4Pp2/p1pq1N1Q/N2p1B2/6R1/PPP2PPP/R5K1 w KQkq - 0 1' ,
   moves: [ 
    'h5-h7', 
    'h8-h7', 
    'g3-h3', 
    'h7-g8', 
    'f5-e7'
   ]
  },

  {
   date: '11/12/13',
   balP: '3',
   balM: '3',
   title: 'Задача 56. Мат в 3 хода - Ход белых',
   start: '5kr1/ppp1r1pR/1q1p1p2/1b3P1B/4P3/1Q6/PPP3P1/1K5R w KQkq - 0 1' ,
   moves: [ 
    'b3-g8', 
    'f8-g8', 
    'h7-h8', 
    'g8-h8', 
    'h5-f7'
   ]
  },

  {
   date: '11/12/13',
   balP: '3',
   balM: '3',
   title: 'Задача 57. Мат в 3 хода - Ход белых',
   start: '3r1rk1/1q3p1p/p4Qp1/4P3/2B1N2R/P5PP/3p2P1/7K w KQkq - 0 1' ,
   moves: [ 
    'f6-g6', 
    'h7-g6', 
    'e4-f6', 
    'g8-g7', 
    'h4-h7' 
   ]
  },

  {
   date: '11/12/13',
   balP: '3',
   balM: '3',
   title: 'Задача 58. Мат в 3 хода - Ход белых',
   start: '2r2r2/ppR2Nbk/1n3qp1/1b5p/8/1B6/P2Q1PPP/3R2K1 w KQkq - 0 1' ,
   moves: [ 
    'd2-h6', 
    'g7-h6', 
    'f7-g5', 
    'h7-h8', 
    'c7-h7' 
   ]
  },

 {
  date: '03/20/16',
  balP: '1',
  balM: '1',
  description: 'Averbakh&Beylin, #56',
  title: 'Задача 59. Мат в 1 ход - Ход белых',
  start: '8/R7/1R6/5k2/8/5K2/8/8 w - - 0 1',
  moves: [
   'a7-a5'
  ]
 },

 {
  date: '03/20/16',
  balP: '3',
  balM: '2',
  description: 'Averbakh&Beylin, #57',
  title: 'Задача 60. Мат в 2 хода - Ход белых',
  start: '3k4/8/8/8/8/8/2R5/KR6 w - - 0 1',
  moves: [
   'b1-b7',
   'd8-e8',
   'c2-c8'
  ]
 },

 {
  date: '03/20/16',
  balP: '6',
  balM: '4',
  description: 'Averbakh&Beylin, #163',
  title: 'Задача 61. Мат в 3 хода - Ход белых',
  start: '2r2b2/5Rpk/5pR1/5P2/6N1/8/3r3P/6K1 w - - 0 1',
  moves: [
   'g4-f6',
   'h7-h8',
   'g6-h6',
   'g7-h6',
   'f7-h7'
  ]
 },

 {
  date: '03/20/16',
  balP: '6',
  balM: '4',
  description: 'Averbakh&Beylin, #162',
  title: 'Задача 62. Мат в 3 хода - Ход белых',
  start: '5rk1/5p1p/3r1Qp1/3qN3/3B2P1/8/5KP1/8 w - - 0 1',
  moves: [
   'f6-h8',
   'g8-h8',
   'e5-g6',
   'h8-g8',
   'g6-e7'
  ]
 },                                                     

 {
  date: '03/20/16',
  balP: '8',
  balM: '6',
  description: 'Averbakh&Beylin, #161',
  title: 'Задача 63. Мат в 4 хода - Ход белых',
  start: '5r2/1b3pkp/6p1/3qP3/7B/2P1R2Q/1r5P/2R3K1 w - - 0 1',
  moves: [
   'h4-f6',
   'g7-g8',
   'h3-h7',
   'g8-h7',
   'e3-h3',
   'h7-g8',
   'h3-h8'
  ]
 },

 {
  date: '03/20/16',
  balP: '4',
  balM: '2',
  description: 'Averbakh&Beylin, #160',
  title: 'Задача 64. Мат в 2 хода - Ход белых',
  start: '1r2r2k/5p1p/2b2R2/4Q1B1/8/P1P5/1q3P2/R5K1 w - - 0 1',
  moves: [
   'f6-g6',
   'e8-e5',
   'g5-f6'
  ]
 },

 {
  date: '03/20/16',
  balP: '6',
  balM: '4',
  description: 'Averbakh&Beylin, #159',
  title: 'Задача 65. Мат в 4 хода - Ход белых',
  start: 'r4r1k/1R2R1p1/7p/8/8/5pPq/2Q2P2/6K1 w - - 0 1',
  moves: [
   'c2-h7',
   'h8-h7',
   'e7-g7',
   'h7-h8',
   'g7-h7',
   'h8-g8',
   'b7-g7'
  ]
 },

 {
  date: '03/20/16',
  balP: '6',
  balM: '4',
  description: 'Averbakh&Beylin, #158',
  title: 'Задача 66. Мат в 3 хода - Ход белых',
  start: '5r1k/1q3p1p/5Pp1/8/5Q2/1p6/5R2/6K1 w - - 0 1',
  moves: [
   'f4-h6',
   'f8-g8',
   'h6-h7',
   'h8-h7',
   'f2-h2'
  ]
 },
                                                     
 {
  date: '03/20/16',
  balP: '5',
  balM: '4',
  description: 'Averbakh&Beylin, #164',
  title: 'Задача 67. Мат в 3 хода - Ход белых',
  start: 'q2r1rk1/5ppp/8/3N4/8/1R1Q4/5PPP/6K1 w - - 0 1',
  moves: [
   'd5-e7',
   'g8-h8',
   'd3-h7',
   'h8-h7',
   'b3-h3'
  ]
 },                                                     

 {
  date: '03/20/16',
  balP: '6',
  balM: '4',
  description: 'Averbakh&Beylin, #165',
  title: 'Задача 68. Мат в 3 хода - Ход белых',
  start: '2R5/1b1p1rk1/3P1p1p/2p5/6N1/6R1/3r1P1P/6K1 w - - 0 1',
  moves: [
   'c8-g8',
   'g7-g8',
   'g4-f6',
   'g8-h8',
   'g3-g8'
  ]
 },                                                     

 {
  date: '03/20/16',
  balP: '4',
  balM: '2',
  description: 'Averbakh&Beylin, #178',
  title: 'Задача 69. Мат в 2 хода - Ход белых',
  start: '5Kbk/6pp/6P1/8/8/8/8/7R w - - 0 1',
  moves: [
   'h1-h6',
   'g7-h6',
   'g6-g7'
  ]
 },

 {
  date: '03/20/16',
  balP: '7',
  balM: '4',
  description: 'Averbakh&Beylin, #179',
  title: 'Задача 70. Мат в 3 хода - Ход белых',
  start: '2k5/8/K7/8/8/6B1/8/3R4 w - - 0 1',
  moves: [
   'g3-b8',
   'c8-b8',
   'd1-c1',
   'b8-a8',
   'c1-c8'
  ]
 }

];
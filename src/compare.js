function compare(random_num, input_num) {
    var num_A = 0,num_B = 0;
    var aa = new Array(4), bb = new Array(4);
    for (var i = 1; i <= 4; i++) {
        aa[i] = random_num % 10;
        bb[i] = input_num % 10;
        random_num = Math.floor(random_num / 10);
        input_num = Math.floor(input_num / 10);
    }
    return compare_AB(aa,bb);
//    for (var i = 1; i <= 4; i++) {
//        for (var j = 1; j <= 4; j++) {
//            if (aa[i] == bb[j] && i == j) {
//                    num_A++;
//            }
//            if (aa[i] == bb[j] &&i != j) {
//                num_B++;
//            }
//        }
//    }
//    var num_A_num_B = [num_A, num_B];
//    return num_A_num_B;
}











function compare_AB(array1,array2){
    var num_a= 0,num_b=0;
    for (var i = 1; i <= 4; i++) {
        for (var j = 1; j <= 4; j++) {
            if (array1[i] == array2[j] && i == j) {
                num_a++;
            }
            if (array1[i] == array2[j] &&i != j) {
                num_b++;
            }
        }
    }
    var number_A_number_B=[num_a,num_b];
    return number_A_number_B;
}
